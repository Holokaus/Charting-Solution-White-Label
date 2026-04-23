#!/bin/bash
# TRADINGVIEW REVERSE ENGINEERING - PROGRESS VERIFICATION SCRIPT
# Run this after EVERY claimed module completion

echo "=== PROGRESS VERIFICATION ==="
echo "Date: $(date)"
echo ""

echo "1. Renamed Modules Count:"
RENAMED_COUNT=$(ls -1 /workspace/renamed-modules/*.js 2>/dev/null | wc -l)
echo "   Found: $RENAMED_COUNT modules"
echo ""

echo "2. Recent Additions (last 5 files):"
ls -lt /workspace/renamed-modules/*.js 2>/dev/null | head -5
echo ""

echo "3. File Size Check (any empty files?):"
find /workspace/renamed-modules -name "*.js" -size 0 2>/dev/null
if [ $? -eq 0 ]; then
    echo "   ⚠️ WARNING: Empty files detected!"
else
    echo "   ✅ No empty files found"
fi
echo ""

echo "4. Minification Check (looking for '(e,t,i)=> patterns):"
MINIFIED=$(grep -l "(e,t,i)=>\|(e,t,n)=>\|var s=i(" /workspace/renamed-modules/*.js 2>/dev/null | wc -l)
if [ "$MINIFIED" -gt 0 ]; then
    echo "   ⚠️ WARNING: $MINIFIED files still contain minified code!"
    grep -l "(e,t,i)=>\|(e,t,n)=>\|var s=i(" /workspace/renamed-modules/*.js 2>/dev/null
else
    echo "   ✅ No minified patterns detected"
fi
echo ""

echo "5. Hallucination Check (non-existent directories):"
for dir in beautified-modules-manual beautified-rendering; do
    if [ -d "/workspace/$dir" ]; then
        echo "   ⚠️ Directory /workspace/$dir EXISTS (unexpected)"
    else
        echo "   ✅ Directory /workspace/$dir does NOT exist (confirmed hallucination)"
    fi
done
echo ""

echo "6. Total Project Stats:"
echo "   modules-v2: $(ls -1 /workspace/modules-v2/*.js 2>/dev/null | wc -l) files"
echo "   renamed-modules: $RENAMED_COUNT files"
echo "   Progress: $(echo "scale=1; $RENAMED_COUNT * 100 / 466" | bc)%"
echo ""

echo "=== VERIFICATION COMPLETE ==="
