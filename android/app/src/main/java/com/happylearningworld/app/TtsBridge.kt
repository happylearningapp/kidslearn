package com.happylearningworld.app

import android.content.Context
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.webkit.JavascriptInterface
import android.util.Log
import java.util.Locale
import java.util.UUID

/**
 * TtsBridge — exposes Android TextToSpeech to JavaScript via window.AndroidTTS
 *
 * Usage in JS (shared.js / any page):
 *   if (window.AndroidTTS) {
 *       AndroidTTS.speak("Hello!");
 *       AndroidTTS.stop();
 *       var voices = AndroidTTS.getVoices();  // JSON string
 *       AndroidTTS.setVoice("en-gb");         // BCP-47 tag
 *   }
 */
class TtsBridge(private val context: Context) : TextToSpeech.OnInitListener {

    private var tts: TextToSpeech = TextToSpeech(context, this)
    private var ready = false
    private var pendingText: String? = null

    companion object {
        private const val TAG = "TtsBridge"
        // Maps our ALLOWED_VOICES names to BCP-47 locales for TTS
        private val VOICE_LOCALE_MAP = mapOf(
            "Samantha" to Locale.US,
            "Daniel"   to Locale("en", "GB"),
            "Karen"    to Locale("en", "AU"),
            "Moira"    to Locale("en", "IE"),
            "Tessa"    to Locale("en", "ZA"),
            "Rishi"    to Locale("en", "IN"),
            "Aman"     to Locale("en", "IN"),
            "Flo"      to Locale.US,
            "Reed"     to Locale.US,
            "Shelly"   to Locale.US,
            "Eddy"     to Locale.US,
            "Tara"     to Locale.US
        )
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts.language = Locale.US
            tts.setSpeechRate(0.9f)   // slightly slower — better for kids
            tts.setPitch(1.1f)        // slightly higher pitch — friendly tone
            ready = true
            pendingText?.let { speak(it) }
            pendingText = null
            Log.d(TAG, "TTS ready")
        } else {
            Log.e(TAG, "TTS init failed with status: $status")
        }
    }

    @JavascriptInterface
    fun speak(text: String) {
        if (!ready) {
            pendingText = text
            return
        }
        tts.speak(text.trim(), TextToSpeech.QUEUE_FLUSH, null, UUID.randomUUID().toString())
    }

    @JavascriptInterface
    fun stop() {
        if (ready) tts.stop()
    }

    @JavascriptInterface
    fun setVoice(voiceName: String) {
        if (!ready) return
        val locale = VOICE_LOCALE_MAP[voiceName] ?: Locale.US
        tts.language = locale
        Log.d(TAG, "Voice set to $voiceName → $locale")
    }

    @JavascriptInterface
    fun isSpeaking(): Boolean = ready && tts.isSpeaking

    fun shutdown() {
        tts.stop()
        tts.shutdown()
    }
}
