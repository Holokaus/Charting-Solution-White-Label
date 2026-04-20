# TradingView Charting Library - Reverse Engineering Roadmap

## Executive Summary

This document outlines the strategy for reverse engineering the TradingView Charting Library into a readable state. The library consists of **1,567 JavaScript files** totaling ~15MB minified, with a clear dependency hierarchy.

---

## 1. Dependency Analysis

### Entry Point: `charting_library.standalone.js` (135KB)

The main entry point loads exactly **4 bundle files**:

```javascript
["bundles/runtime.1d4ed3742895f7c63ed9.js",
 "bundles/__LANG__.938.5f20502c9172fdac1c7f.js",
 "bundles/481.7c6283292170510c91f1.css",
 "bundles/8971.352a74bc5eebf8040884.js",
 "bundles/library.15664647653f41254b4d.js"]
```

### Core Bundle: `library.15664647653f41254b4d.js` (2.4MB)

The main library bundle dynamically loads **317 additional chunks** via `i.e(chunkId)` calls. These chunks are lazy-loaded on demand.

---

## 2. File Priority List

### Tier 1: Critical Core Files (Process First)

| # | File | Size | Purpose | Dependencies |
|---|------|------|---------|--------------|
| 1 | `charting_library.standalone.js` | 135 KB | **Widget API** - Main entry point, widget initialization | runtime, library |
| 2 | `bundles/runtime.1d4ed3742895f7c63ed9.js` | ~50 KB | **Webpack Runtime** - Module loader, chunk loading logic | None |
| 3 | `bundles/library.15664647653f41254b4d.js` | 2.4 MB | **Core Engine** - Chart rendering, datafeed, indicators | 317 chunks |
| 4 | `bundles/chart-widget-gui.4ec424eb56739ee22285.js` | 235 KB | **GUI Components** - Toolbar, dialogs, menus | library |

### Tier 2: Major Feature Modules (100KB+)

| # | File | Size | Purpose |
|---|------|------|---------|
| 5 | `bundles/lt-stickers-atlas.9df1e0887f8f2a9647cd.js` | 421 KB | Sticker/annotation assets |
| 6 | `bundles/lt-pane-views.46eba403be0c79c4c268.js` | 284 KB | Pane rendering system |
| 7 | `bundles/lt-icons-atlas.44402958fd0934b94ac1.js` | 202 KB | Icon assets |
| 8 | `bundles/lt-property-pages-with-definitions.6830c12ee5b23fa3f44b.js` | 123 KB | Property editor definitions |
| 9 | `bundles/floating-toolbars.e8ff289dd4e8225bc29e.js` | 122 KB | Floating toolbar UI |
| 10 | `bundles/5893.e5c9a9c5e41a157ad197.js` | 109 KB | Unknown core module |
| 11 | `bundles/restricted-toolset.85a0d8dc30a084c60f7d.js` | 99 KB | Tool restrictions logic |
| 12 | `bundles/7437.7596a99a3f7c5f7d8009.js` | 99 KB | Unknown core module |
| 13 | `bundles/2475.1ed8b62332af605c5bee.js` | 90 KB | **Network Layer** (likely HTTP/WebSocket) |

### Tier 3: Dialog & Interaction Modules (50-90KB)

| # | File | Size | Purpose |
|---|------|------|---------|
| 14 | `bundles/object-tree-dialog.254833ed6030cf146329.js` | 89 KB | Object manager dialog |
| 15 | `bundles/new-edit-object-dialog.361202b1c34b1599dc84.js` | 89 KB | Edit object dialog |
| 16 | `bundles/global-search-dialog.f532e65043c071476f6b.js` | 89 KB | Symbol search dialog |
| 17 | `bundles/624.3b396e1376ddaa5e6358.js` | 78 KB | Unknown module |
| 18 | `bundles/line-tools-icons.593acab581cc4008ee11.js` | 74 KB | Drawing tool icons |
| 19 | `bundles/8971.352a74bc5eebf8040884.js` | 73 KB | Loaded by standalone.js |

### Tier 4: Language Bundles (Skip for Now)

Files like `en.938.*.js`, `ru.938.*.js` (134-244KB each) contain translations only. Process last if needed.

---

## 3. Chunking Strategy for 2.4MB Library File

The `library.15664647653f41254b4d.js` file is too large (819 lines minified, ~50K+ lines beautified) to process in one pass. Here's the recommended chunking approach:

### Strategy A: Functional Module Splitting (Recommended)

Split by detected module boundaries using webpack's module pattern:

```
Module Pattern: `,NUMBER:(e,t,i)=>{...}`
```

**Chunk Boundaries:**
1. **Chunk 1 (Lines 1-10000)**: Core utilities, watched values, delegates, theme system
2. **Chunk 2 (Lines 10001-20000)**: Datafeed adapter, symbol resolution, timezone handling
3. **Chunk 3 (Lines 20001-30000)**: Chart rendering engine, pane management
4. **Chunk 4 (Lines 30001-40000)**: Indicator/study system, drawing tools
5. **Chunk 5 (Lines 40001-end)**: Advanced features, integration layer

### Strategy B: Line-Based Splitting (Simpler)

Split every ~10,000 lines after beautification:
- Each chunk processed independently
- Maintain global variable mapping across chunks
- Merge renamed variables at the end

### Recommended Approach: **Strategy A**

Use regex to detect module boundaries:
```bash
grep -n "^[0-9]\+:(e,t,i)=>" bundles/library.*.js
```

This identifies exact module start points for clean splitting.

---

## 4. Processing Workflow

### Phase 1: Foundation (Week 1)
1. ✅ Process `charting_library.standalone.js` (COMPLETED)
2. Process `bundles/runtime.*.js` - Understand module loader
3. Process `bundles/library.*.js` Chunk 1-2 (Core utilities + Datafeed)

### Phase 2: Core Engine (Week 2-3)
4. Process `bundles/library.*.js` Chunk 3-5 (Rendering + Indicators)
5. Process `bundles/chart-widget-gui.*.js` - GUI components
6. Process `bundles/lt-pane-views.*.js` - Pane rendering

### Phase 3: Features (Week 4)
7. Process network layer (`bundles/2475.*.js`)
8. Process dialog modules
9. Process drawing tools and line tools

### Phase 4: Polish (Week 5)
10. Cross-reference variable names across all files
11. Create unified documentation
12. Build re-minification pipeline

---

## 5. Variable Renaming Strategy

### Global Namespace Preservation
These must NEVER be renamed:
- `TradingView` (global namespace)
- `window`, `document`, `localStorage` (browser APIs)
- Webpack runtime: `i`, `i.d`, `i.e`, `i.bind`

### Safe to Rename (when 100% certain):
- Single-letter variables: `a`, `b`, `c`, `t`, `e`, `n`, `o`, `r`, `s`, `l`
- Obfuscated functions: `Ve`, `Be`, `Me`, `Fe`, `Ee`, `Ne`
- Internal classes with clear purposes

### Naming Conventions:
```javascript
// Classes: PascalCase
ChartWidget, DatafeedAdapter, TimeZoneManager

// Functions: camelCase  
mergeOptions, fetchData, renderChart, validateSymbol

// Constants: UPPER_SNAKE_CASE
DEFAULT_THEME, MAX_ZOOM_LEVEL, API_TIMEOUT

// Booleans: is/has/can prefix
isChromeIOS, hasWeeklyData, canRenderIndicators
```

---

## 6. Re-Minification Pipeline

### Tools Required:
```bash
npm install -g terser esbuild
```

### Terser Configuration (terser.config.js):
```javascript
module.exports = {
  compress: {
    dead_code: true,
    drop_console: false,
    pure_funcs: ['console.debug'],
  },
  mangle: {
    reserved: [
      'TradingView', 'ChartWidget', 'DatafeedAdapter',
      'mergeOptions', 'getVersion', 'defaultWidgetOptions'
    ],
    keep_fnames: true,
  },
  format: {
    comments: false,
  },
  sourceMap: true,
};
```

### Build Script:
```bash
#!/bin/bash
# Step 1: Process all simplified files
for file in simplified/*.js; do
  npx terser "$file" -c -m \
    --reserved "TradingView,ChartWidget,DatafeedAdapter" \
    -o "dist/$(basename $file)" \
    --source-map "url=$(basename $file).map"
done

# Step 2: Bundle with esbuild (optional)
npx esbuild simplified/*.js \
  --bundle \
  --minify \
  --outfile=dist/bundle.min.js \
  --sourcemap
```

---

## 7. Next Steps

### Immediate Action Items:

1. **Start with runtime.js** - Understanding the module loader is critical for processing other files

2. **Create chunking script** - Automate the splitting of library.*.js by module boundaries

3. **Build variable mapping database** - Track renamed variables across all files to ensure consistency

4. **Process Tier 1 files first** - Focus on the 4 critical files before moving to Tier 2

### File to Process Next:
**`bundles/runtime.1d4ed3742895f7c63ed9.js`** (~50KB)

This file contains the webpack runtime that loads all other chunks. Understanding it is essential for:
- How modules are registered and loaded
- How chunk loading works
- How to properly split the library file

---

## Appendix A: Complete File List by Size

See attached spreadsheet for full listing of all 1,567 files sorted by size.

## Appendix B: Module ID Mapping

The library references 317 chunk IDs. Full list in `/tmp/chunk_ids.txt`.

---

**Legal Notice**: This analysis is for personal study and debugging only. Do not redistribute modified code. TradingView Charting Library is proprietary software.
