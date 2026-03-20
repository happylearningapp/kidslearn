#!/bin/bash
# ─────────────────────────────────────────────────────────────
# sync-android.sh
# Manually sync web source (app/) → Android assets
# Run this from the kidslearn/ root:  ./sync-android.sh
# ─────────────────────────────────────────────────────────────

SOURCE="./app"
DEST="./android/app/src/main/assets"

echo "🔄 Syncing web assets → Android..."

# Sync HTML, JS, CSS (excludes fonts/ which is Android-only)
rsync -av --include="*/" \
         --include="*.html" \
         --include="*.js" \
         --include="*.css" \
         --include="*.json" \
         --exclude="*" \
         --exclude="fonts/" \
         "$SOURCE/" "$DEST/"

echo ""
echo "✅ Sync complete!"
echo ""
echo "Files in assets:"
find "$DEST" -not -path "*/fonts/*" -type f | sort
