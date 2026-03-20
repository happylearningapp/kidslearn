package com.happylearningworld.app

import android.content.Context
import android.content.SharedPreferences
import android.webkit.JavascriptInterface

/**
 * StorageBridge — redundant persistent storage via Android SharedPreferences.
 * WebView localStorage already works, but this survives WebView data clears.
 *
 * Usage in JS:
 *   AndroidStorage.setItem("kidName", "Aarav");
 *   var name = AndroidStorage.getItem("kidName");   // returns "" if missing
 *   AndroidStorage.removeItem("kidName");
 */
class StorageBridge(context: Context) {

    private val prefs: SharedPreferences =
        context.getSharedPreferences("hlw_prefs", Context.MODE_PRIVATE)

    @JavascriptInterface
    fun setItem(key: String, value: String) {
        prefs.edit().putString(key, value).apply()
    }

    @JavascriptInterface
    fun getItem(key: String): String {
        return prefs.getString(key, "") ?: ""
    }

    @JavascriptInterface
    fun removeItem(key: String) {
        prefs.edit().remove(key).apply()
    }

    @JavascriptInterface
    fun clear() {
        prefs.edit().clear().apply()
    }
}
