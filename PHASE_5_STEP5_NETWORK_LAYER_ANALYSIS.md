# Phase 5, Step 5: Network Layer Investigation

## Status: IN PROGRESS

### Objective
Locate and analyze the actual network/HTTP layer module (previously misidentified as module 2475).

---

## Findings

### ❌ Module 2475 Analysis
**Bundle:** `/workspace/bundles/2475.1ed8b62332af605c5bee.js` (90KB)

**Content Analysis:**
- **NOT the network layer** as previously speculated
- Contains **Symbol Search UI components**:
  - Symbol search dialog (`SymbolSearchDialogContentItem`)
  - Search source filtering and ranking
  - Logo resolution and display
  - Exchange/country flag rendering
  - Highlighted text matching
  - CSS modules for search UI

**Key Classes/Functions Found:**
- `SymbolSearchDialogContentItem` - Main search result item component
- `HighlightedText` - Text highlighting for search matches
- `createRegExpList` - Search query regex generation
- `rankedSearch` - Search result ranking algorithm
- `resolveLogoUrls` - Symbol logo URL resolution
- `SymbolSearchFlag` - Country/exchange flag component

**Conclusion:** This is a **UI layer module** for symbol search functionality, NOT the network transport layer.

---

## Next Steps for Network Layer Discovery

### Strategy 1: Trace from Series Module (2115)
Module 2115 (Series) likely calls network functions for:
- Symbol resolution (`resolveSymbol` API)
- Historical data loading
- Real-time streaming updates

**Action:** Search for network-related function calls in 2115-series.js:
```bash
grep -n "request\|fetch\|http\|ajax\|websocket\|socket" /workspace/renamed-modules/2115-series.js
```

### Strategy 2: Check Large Unprocessed Modules
Largest remaining modules in `/workspace/modules-v2/`:
1. **37150.js** (1.5MB) - ChartWidgetCollection - May contain network initialization
2. **4783.js** (148KB) - Unknown, possibly infrastructure
3. **87453.js** (127KB) - Unknown, possibly data layer
4. **41414.js** (39KB) - Unknown
5. **60973.js** (36KB) - Unknown

### Strategy 3: Search Bundle Files
Check original bundles for network keywords:
```bash
grep -l "WebSocket\|XMLHttpRequest\|fetch\|axios" /workspace/bundles/*.js
```

### Strategy 4: Look for HTTP/WebSocket Keywords
Search all extracted modules:
```bash
grep -l "WebSocket\|xhr\|http" /workspace/modules-v2/*.js | head -10
```

---

## Updated Priority List

### High Priority (Core Systems)
- ✅ Module 48096 - Delegate Event System (RENAMED)
- ✅ Module 2115 - Series/Chart Model Core (RENAMED)
- ⏳ Module 37150 - ChartWidgetCollection (BEAUTIFIED, needs renaming)
- 🔍 **Network Layer** - UNKNOWN (INVESTIGATING)

### Medium Priority
- ⏳ Dynamic chunks (stickers-atlas, pane-views)
- ⏳ Drawing tools implementation
- ⏳ Indicator calculations

### Low Priority
- UI components (like module 2475)
- CSS/style modules
- Localization files

---

## Recommended Immediate Actions

1. **Search for network keywords** in all modules:
   ```bash
   grep -rn "WebSocket\|XMLHttpRequest\|fetch" /workspace/modules-v2/ | head -20
   ```

2. **Analyze module 37150** (ChartWidgetCollection):
   - Second largest module (1.5MB)
   - Likely contains widget initialization including data connections
   
3. **Check module 87453** (127KB):
   - Size suggests infrastructure code
   - Could be data source or network abstraction

4. **Review existing documentation**:
   - Check PHASE_3_DEPENDENCY_MAP.md for network-related chunk IDs
   - Look for chunks named "data", "network", "feed", "stream"

---

## Success Criteria

Network layer module identified when we find:
- [ ] WebSocket connection management
- [ ] HTTP request handling (historical data)
- [ ] Real-time data stream processing
- [ ] Connection state management (connected/disconnected/reconnecting)
- [ ] Message parsing/serialization

---

## Timeline Estimate

- Network layer discovery: 30-60 minutes
- Module extraction and beautification: 15-30 minutes
- Variable renaming and documentation: 45-60 minutes
- **Total Phase 5.5: 1.5-2.5 hours**

---

**Last Updated:** $(date)
**Status:** Investigating network layer location
