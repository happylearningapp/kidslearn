package com.happylearningworld.app

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import android.webkit.*
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewAssetLoader.AssetsPathHandler

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var loadingOverlay: FrameLayout
    private lateinit var ttsBridge: TtsBridge
    private lateinit var storageBridge: StorageBridge

    // ──────────────────────────────────────────────────────────────
    // WebViewAssetLoader serves assets/ over https://
    // so that relative paths like ../shared.js work correctly.
    //
    // file:///android_asset/explorer/abc.html  ← BROKEN (../ blocked)
    // https://appassets.androidplatform.net/assets/explorer/abc.html ← WORKS
    // ──────────────────────────────────────────────────────────────
    private val assetLoader by lazy {
        WebViewAssetLoader.Builder()
            .setDomain("appassets.androidplatform.net")
            .addPathHandler("/assets/", AssetsPathHandler(this))
            .build()
    }

    // Base URL used throughout the app
    companion object {
        const val BASE = "https://appassets.androidplatform.net/assets/"
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        installSplashScreen()
        super.onCreate(savedInstanceState)

        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        loadingOverlay = findViewById(R.id.loadingOverlay)

        setupImmersiveMode()
        setupWebView()
    }

    // ──────────────────────────────────────────────
    // Immersive full-screen (hides status + nav bar)
    // ──────────────────────────────────────────────
    private fun setupImmersiveMode() {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.hide(WindowInsetsCompat.Type.systemBars())
        controller.systemBarsBehavior =
            WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
    }

    // ──────────────────────────────────────────────
    // WebView configuration
    // ──────────────────────────────────────────────
    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        with(webView.settings) {
            javaScriptEnabled = true
            domStorageEnabled = true                   // localStorage support
            allowFileAccess = true
            allowContentAccess = true
            mediaPlaybackRequiresUserGesture = false   // audio / TTS autoplay
            cacheMode = WebSettings.LOAD_DEFAULT
            textZoom = 100                             // prevent system font-size affecting layout
            setSupportZoom(false)
            builtInZoomControls = false
            displayZoomControls = false
            loadWithOverviewMode = false               // prevent wrong-scale rendering
            useWideViewPort = true                     // respect <meta viewport> tag
        }

        // ── Native bridges ──
        ttsBridge = TtsBridge(this)
        storageBridge = StorageBridge(this)
        webView.addJavascriptInterface(ttsBridge, "AndroidTTS")
        webView.addJavascriptInterface(storageBridge, "AndroidStorage")

        // ── WebViewClient — intercept requests through AssetLoader ──
        webView.webViewClient = object : WebViewClient() {

            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                // Let AssetLoader serve all https://appassets.androidplatform.net/ requests
                // This is what makes ../shared.js, ../fonts/fonts.css etc. work correctly
                return request?.url?.let { assetLoader.shouldInterceptRequest(it) }
                    ?: super.shouldInterceptRequest(view, request)
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: android.graphics.Bitmap?) {
                super.onPageStarted(view, url, favicon)
                // Inject speechSynthesis polyfill EARLY — before DOMContentLoaded fires
                // so swDock() doesn't crash when the page first loads
                view?.evaluateJavascript("""
                    (function() {
                        if (!window.speechSynthesis) {
                            window.speechSynthesis = {
                                cancel: function(){},
                                speak:  function(){},
                                pause:  function(){},
                                resume: function(){},
                                getVoices: function(){ return []; }
                            };
                        }
                    })();
                """.trimIndent(), null)
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                injectBridgeAdapter()
                // Hide loading overlay after first page loads
                if (loadingOverlay.visibility == View.VISIBLE) {
                    loadingOverlay.animate()
                        .alpha(0f)
                        .setDuration(400)
                        .withEndAction { loadingOverlay.visibility = View.GONE }
                        .start()
                }
            }

            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                val url = request?.url?.toString() ?: return false
                // Allow all appassets.androidplatform.net pages to load
                return !url.startsWith(BASE)
            }
        }

        // ── WebChromeClient — JS console.log → Logcat ──
        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(msg: ConsoleMessage?): Boolean {
                msg?.let {
                    android.util.Log.d(
                        "WebConsole",
                        "[${it.sourceId()}:${it.lineNumber()}] ${it.message()}"
                    )
                }
                return true
            }
        }

        // Load home page via AssetLoader URL (not file://)
        webView.loadUrl("${BASE}home.html")
    }

    // ──────────────────────────────────────────────────────────────
    // Bridge adapter injected into every page after load
    // ──────────────────────────────────────────────────────────────
    private fun injectBridgeAdapter() {
        val fontsBase = "${BASE}fonts/"
        val js = """
            (function() {

                // ════════════════════════════════════════
                // FIX 1: Replace Google Fonts with bundled
                // local fonts so UI looks correct offline
                // ════════════════════════════════════════
                (function patchFonts() {
                    document.querySelectorAll('link[href*="fonts.googleapis.com"]')
                        .forEach(function(el) { el.parentNode.removeChild(el); });
                    var link = document.createElement('link');
                    link.rel  = 'stylesheet';
                    link.href = '${fontsBase}fonts.css';
                    document.head.appendChild(link);
                })();

                // ════════════════════════════════════════
                // FIX 2: Android-specific CSS overrides
                // ════════════════════════════════════════
                (function injectAndroidCSS() {
                    var style = document.createElement('style');
                    style.textContent = [
                        '* { -webkit-tap-highlight-color: transparent !important; }',
                        'html { -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }',
                        'body { overflow-x: hidden !important; max-width: 100vw !important; }',
                        'input, select, button { -webkit-appearance: none; appearance: none; }',
                        '.submain, .subbody { -webkit-overflow-scrolling: touch; }',
                        'html, body { background-color: #FFFDE7 !important; }'
                    ].join('\n');
                    document.head.appendChild(style);
                })();

                // ════════════════════════════════════════
                // FIX 3: Guard speechSynthesis before cancel
                // Prevents swDock() crash on Android WebView
                // ════════════════════════════════════════
                if (typeof window.speechSynthesis === 'undefined') {
                    window.speechSynthesis = { cancel: function(){}, speak: function(){}, getVoices: function(){ return []; } };
                }

                // ════════════════════════════════════════
                // FIX 4: TTS — prefer native AndroidTTS
                // ════════════════════════════════════════
                if (window.AndroidTTS && typeof window.spk === 'function') {
                    window._webSpk = window.spk;
                    window.spk = function(text) {
                        try {
                            AndroidTTS.stop();
                            AndroidTTS.speak(String(text));
                        } catch(e) {
                            window._webSpk(text);
                        }
                    };
                }

                // ════════════════════════════════════════
                // FIX 5: Storage sync
                // ════════════════════════════════════════
                if (window.AndroidStorage) {
                    ['kidName','kidAge','prefVoice','hlwVisited'].forEach(function(k) {
                        var v = AndroidStorage.getItem(k);
                        if (v) localStorage.setItem(k, v);
                    });
                    var origSetItem = Storage.prototype.setItem;
                    Storage.prototype.setItem = function(key, value) {
                        origSetItem.call(this, key, value);
                        try { AndroidStorage.setItem(String(key), String(value)); } catch(e) {}
                    };
                }

                // ── Voice: apply saved voice to TTS bridge ──
                if (window.AndroidTTS) {
                    var v = localStorage.getItem('prefVoice');
                    if (v) try { AndroidTTS.setVoice(v); } catch(e) {}
                }

            })();
        """.trimIndent()
        webView.evaluateJavascript(js, null)
    }

    // ──────────────────────────────────────────────
    // Back button — navigate within WebView
    // ──────────────────────────────────────────────
    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }

    // ──────────────────────────────────────────────
    // Lifecycle — pause/resume WebView & TTS
    // ──────────────────────────────────────────────
    override fun onResume() {
        super.onResume()
        webView.onResume()
        setupImmersiveMode()
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
        ttsBridge.apply { stop() }
    }

    override fun onDestroy() {
        ttsBridge.shutdown()
        webView.destroy()
        super.onDestroy()
    }
}
