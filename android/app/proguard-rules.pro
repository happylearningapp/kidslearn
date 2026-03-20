# Add project specific ProGuard rules here.
# Keep JavaScript interface methods (called from HTML/JS)
-keepclassmembers class com.happylearningworld.app.TtsBridge {
    @android.webkit.JavascriptInterface <methods>;
}
-keepclassmembers class com.happylearningworld.app.StorageBridge {
    @android.webkit.JavascriptInterface <methods>;
}
