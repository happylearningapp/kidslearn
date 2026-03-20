#!/bin/bash
# sync_assets.sh — copies latest HTML/JS from app/ into Android assets/
# Run this every time you update the web app files.

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$SCRIPT_DIR/../app"
DST="$SCRIPT_DIR/app/src/main/assets"

echo "Syncing assets from $SRC → $DST"

cp "$SRC/home.html"  "$DST/home.html"
cp "$SRC/shared.js"  "$DST/shared.js"

cp "$SRC/explorer/"*.html  "$DST/explorer/"
cp "$SRC/achiever/"*.html  "$DST/achiever/"

echo "Done. Files synced:"
ls "$DST/"
ls "$DST/explorer/"
ls "$DST/achiever/"
