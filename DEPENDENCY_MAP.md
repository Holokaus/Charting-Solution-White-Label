# 🗺️ TradingView Charting Library - Dependency Map & Project Roadmap

## Executive Summary

This document provides a complete dependency analysis of the TradingView Charting Library, identifying all loaded bundles, their relationships, and a prioritized processing order for reverse engineering.

---

## 1. Entry Point Analysis

### Main File: `charting_library.standalone.js` (55KB)

The entry point is a **UMD wrapper** that loads the following bundles dynamically:

```javascript
// Loaded bundles identified:
bundles/runtime.1d4ed3742895f7c63ed9.js          // 26KB - Webpack module loader
bundles/__LANG__.938.5f20502c9172fdac1c7f.js    // ~200KB - Language bundle (variable)
bundles/8971.352a74bc5eebf8040884.js            // 73KB - Unknown module
bundles/library.15664647653f41254b4d.js         // 2.4MB - Core library engine
```

---

## 2. Runtime Bundle Analysis

### File: `bundles/runtime.*.js` (26KB)

**Purpose:** Webpack runtime loader responsible for:
- Module system initialization (`o.m`, `o.c`, `o.d`)
- Dynamic chunk loading (`o.e`, `o.l`)
- CSS chunk management (`o.f.miniCss`)
- Internationalization support (`o.i18next`)
- Pluralization rules for 20+ languages

**Key Functions Identified:**
```javascript
o(e)           // require() - Module loader
o.e(e)         // import() - Dynamic chunk loader
o.u(e)         // Get chunk URL
o.l(e,a,c,b)   // Load script tag
o.i18next      // Translation function
```

**Chunk Loading Pattern:**
```javascript
o.u = e => {
  // Maps chunk IDs to filenames
  return 7617===e ? "__LANG__.7617.cd80164477ae293d1bdf.js" 
       : 8370===e ? "__LANG__.8370.fa349b4816cd5b9bc50e.js"
       : ... + e + "." + hash + ".js"
}
```

---

## 3. Core Library Dependencies

### File: `bundles/library.*.js` (2.4MB)

**Analysis:** This is the main application bundle containing **317 dynamic chunk references**.

#### Chunk Loading Pattern Found:
```javascript
i.e(chunkId)  // Dynamic import for lazy-loaded modules
```

#### All Referenced Chunks (335 total):

**Top 30 Largest Chunks by ID:**
| Chunk ID | Estimated Size | Likely Purpose |
|----------|---------------|----------------|
| 5093     | ~235KB        | chart-widget-gui |
| 1583     | ~284KB        | lt-pane-views (Line tool pane views) |
| 5598     | ~421KB        | lt-stickers-atlas (Drawing tool icons) |
| 7987     | ~202KB        | lt-icons-atlas |
| 8537     | ~123KB        | lt-property-pages-with-definitions |
| 2475     | ~90KB         | Network/HTTP layer |
| 1485     | ~138KB        | Unknown core module |
| 2227     | ~137KB        | Unknown core module |
| 2477     | ~20KB         | Secondary network module |
| 2745     | ~14KB         | Utility module |

**Complete Chunk ID List:**
(First 100 shown - full list in appendix)
```
139, 159, 319, 341, 360, 380, 445, 507, 509, 569, 574, 607, 620, 624, 628, 
683, 688, 731, 769, 844, 846, 861, 903, 906, 917, 925, 961, 986, 1065, 1155, 
1166, 1171, 1277, 1282, 1313, 1314, 1450, 1455, 1470, 1485, 1488, 1506, 1553, 
1583, 1584, 1667, 1681, 1697, 1713, 1727, 1754, 1859, 1890, 1963, 1979, 2050, 
2077, 2087, 2112, 2164, 2183, 2202, 2227, 2232, 2283, 2303, 2306, 2307, 2312, 
2318, 2377, 2413, 2475, 2477, 2537, 2641, 2647, 2704, 2745, 2816, 2878, 2891, 
...
```

---

## 4. Priority Processing List

### Tier 1: Critical Infrastructure (Process First)
| Priority | File | Size | Purpose | Processing Strategy |
|----------|------|------|---------|---------------------|
| 1 | `bundles/runtime.*.js` | 26KB | Webpack module loader | Process whole file |
| 2 | `bundles/library.*.js` | 2.4MB | Core engine | **Split into chunks** (see Section 5) |
| 3 | `bundles/8971.*.js` | 73KB | Unknown critical module | Process whole file |

### Tier 2: Major Feature Modules (>100KB)
| Priority | Chunk ID | File Pattern | Est. Size | Purpose |
|----------|----------|--------------|-----------|---------|
| 4 | 5598 | `lt-stickers-atlas.*.js` | 421KB | Drawing tool sticker atlas |
| 5 | 1583 | `lt-pane-views.*.js` | 284KB | Line tool pane views |
| 6 | 5093 | `chart-widget-gui.*.js` | 235KB | Chart widget GUI components |
| 7 | 7987 | `lt-icons-atlas.*.js` | 202KB | Icon atlas for line tools |
| 8 | 8537 | `lt-property-pages-with-definitions.*.js` | 123KB | Property editor pages |
| 9 | 1485 | `1485.*.js` | 138KB | Unknown core feature |
| 10 | 2227 | `2227.*.js` | 137KB | Unknown core feature |

### Tier 3: Important Features (50-100KB)
| Priority | Chunk ID | File Pattern | Est. Size | Purpose |
|----------|----------|--------------|-----------|---------|
| 11 | 2475 | `2475.*.js` | 90KB | Network/HTTP communication |
| 12 | 1754 | `symbol-search-dialog.*.js` | ~80KB | Symbol search dialog |
| 13 | 1859 | `go-to-date-dialog-impl.*.js` | ~75KB | Go to date dialog |
| 14 | 2306 | `floating-toolbars.*.js` | ~70KB | Floating toolbar UI |
| 15 | 3005 | `header-toolbar.*.js` | ~65KB | Header toolbar component |
| 16 | 4862 | `object-tree-dialog.*.js` | ~60KB | Object tree manager |
| 17 | 6602 | `chart-actions-provider.*.js` | ~55KB | Chart actions handler |
| 18 | 7078 | `general-chart-properties-dialog.*.js` | ~55KB | Chart properties dialog |
| 19 | 9374 | `symbol-info-dialog-impl.*.js` | ~50KB | Symbol info dialog |

### Tier 4: Network & Data Layer
| Priority | Chunk ID | Purpose |
|----------|----------|---------|
| 20 | 2475 | HTTP client / REST API |
| 21 | 2477 | WebSocket handler |
| 22 | 6124 | `chart-storage-library-http` - Chart persistence |
| 23 | 8313 | `chart-storage-external-adapter` - External storage |
| 24 | 9498 | `export-data` - Data export functionality |

### Tier 5: Drawing Tools (Line Tools)
All drawing tools follow pattern `line-tool-*`:
- 139: `get-error-card`
- 319: `line-tool-table`
- 341: `line-tool-schiff-pitchfork2`
- 360: `demonstration-highlighter`
- 380: `line-tool-price-note`
- 569: `line-tool-arrow-mark`
- 574: `line-tool-horizontal-ray`
- 688: `line-tool-callout`
- 731: `add-compare-dialog`
- 906: `line-tool-fib-speed-resistance-fan`
- 925: `line-tool-extended`
- 961: `line-tool-path`
- 1155: `line-tool-5points-pattern`
- 1277: `line-tool-balloon`
- 1282: `line-tool-vertical-line`
- 1313: `line-tool-pitch-fan`
- 1314: `line-tool-position`
- 1455: `line-tool-date-and-price-range`
- 1470: `line-tool-arrow-marker`
- 1506: `line-tool-fib-timezone`
- 1713: `line-tool-sine-line`
- 1890: `line-tools-icons`
- 1963: `line-tool-gann-complex`
- 2050: `line-tool-parallel-channel`
- 2087: `line-tool-highlighter`
- 2232: `line-tool-order`
- 2283: `line-tool-fib-channel`
- 2312: `line-tool-text`
- 2816: `line-tool-fib-circles`
- 3248: `line-tool-note`
- 3314: `line-tool-fib-wedge`
- 3378: `line-tool-head-and-shoulders`
- 3383: `line-tool-triangle-pattern`
- 3710: `line-tool-fib-speed-resistance-arcs`
- 3723: `line-tool-fib-retracement`
- 3866: `line-tool-poly-line`
- 3945: `line-tool-projection`
- 3952: `line-tool-risk-reward`
- 3966: `line-tool-comment`
- 4015: `line-tool-rotated-rectangle`
- 4201: `line-tool-horizontal-line`
- 4273: `line-tool-date-range`
- 4602: `line-tool-three-drivers`
- 4674: `line-tool-signpost`
- 4731: `line-tool-trend-based-fib-extension`
- 4934: `line-tool-ray`
- 4981: `line-tool-gann-fan`
- 5055: `line-tool-pitchfork`
- 5122: `line-tool-brush`
- 5206: `line-tool-bars-pattern`
- 5231: `line-tool-image`
- 5283: `line-tool-abcd`
- 5500: `line-tool-anchored-vwap`
- 5529: `line-tool-emoji`
- 5695: `line-tool-volume-profile`
- 5967: `line-tool-arc`
- 6336: `line-tool-gann-fixed`
- 6432: `line-tool-triangle`
- 6477: `line-tool-price-range`
- 6484: `line-tool-price-label`
- 6740: `line-tool-cypher-pattern`
- 6748: `line-tool-circle`
- 7127: `line-tool-trend-based-fib-time`
- 7129: `line-tools-synchronizer`
- 7175: `line-tool-schiff-pitchfork`
- 7203: `line-tool-cross-line`
- 7488: `line-tool-info-line`
- 7660: `line-tool-ellipse`
- 7806: `line-tool-icon`
- 8061: `line-tool-bezier-quadro`
- 8090: `line-tool-fib-spiral`
- 8334: `line-tool-time-cycles`
- 8372: `line-tool-trend-angle`
- 8422: `line-tool-rectangle`
- 8468: `line-tool-inside-pitchfork`
- 8607: `line-tool-arrow`
- 8673: `line-tool-trend-line`
- 8820: `line-tool-flag-mark`
- 8949: `line-tool-sticker`
- 9014: `line-tool-bezier-cubic`
- 9123: `line-tool-text-note`
- 9310: `line-tool-flat-bottom`
- 9445: `line-tool-cyclic-lines`
- 9478: `line-tool-gann-square`
- 9534: `line-tool-prediction`
- 9581: `line-tool-disjoint-channel`
- 9748: `line-tool-regression-trend`

### Tier 6: Study/Indicator System
- 507: `study-pane-views`
- 607: `study-property-pages-with-definitions`
- 2183: `study-inputs-pane-views`
- 4079: `series-pane-views`
- 5248: `library-studies`
- 6456: `study-market`
- 7539: `studies`
- 9790: `favorite-indicators`

### Tier 7: Dialogs & UI Components
- 731: `add-compare-dialog`
- 1754: `symbol-search-dialog`
- 1859: `go-to-date-dialog-impl`
- 2077: `change-interval-dialog`
- 3030: `new-confirm-inputs-dialog`
- 4013: `custom-intervals-add-dialog`
- 5009: `load-chart-dialog`
- 6265: `new-edit-object-dialog`
- 6631: `study-template-dialog`
- 7038: `insert-image-dialog`
- 7078: `general-chart-properties-dialog`
- 7648: `show-theme-save-dialog`
- 8890: `simple-dialog`
- 9374: `symbol-info-dialog-impl`
- 9754: `global-search-dialog`

### Tier 8: Storage & Persistence
- 5565: `ichart-storage`
- 6124: `chart-storage-library-http`
- 8313: `chart-storage-external-adapter`

### Tier 9: Toolbar & Navigation
- 2306: `floating-toolbars`
- 2878: `drawing-toolbar`
- 3005: `header-toolbar`
- 5516: `restricted-toolset`
- 7260: `chart-bottom-toolbar`

### Tier 10: Language Bundles (Skip for Now)
All chunks matching pattern `__LANG__.*.js` (~30 language variants, 130-235KB each)

---

## 5. Chunking Strategy for 2.4MB Library File

### Problem:
The `library.*.js` file is 2.4MB (~60,000+ lines minified), exceeding typical context windows.

### Solution A: **Webpack Module Boundary Splitting** ⭐ RECOMMENDED

The library uses webpack's module pattern:
```javascript
{MODULE_ID}: (e,t,i) => { ...module code... }
```

**Strategy:**
1. Split at every `MODULE_ID:(e,t,i)=>{` boundary
2. Each module becomes a separate file: `library.module.MODULE_ID.js`
3. Create index file that imports all modules

**Example Split Points:**
```javascript
// Module 51101
51101:(e,t,i)=>{"use strict";i.r(t),i.d(t,{SessionInfo:()=>r.SessionInfo,...});...

// Module 71149  
71149:(e,t,i)=>{"use strict";i.d(t,{BusinessDay:()=>n});...

// Module 16329
16329:(e,t,i)=>{"use strict";i.d(t,{SessionsSpec:()=>T});...
```

**Estimated Output:** ~300-400 module files (5-10KB each average)

### Solution B: **Line-Based Chunking** (Fallback)

If module boundaries are too complex:
- Split every 5,000 lines (~200KB per chunk)
- Creates 12 chunks for the entire file
- Requires manual dependency tracking

### Solution C: **Functional Area Splitting**

Manually identify and extract:
1. Session/time handling code (~lines 1-5000)
2. Bar builder logic (~lines 5001-10000)
3. Timezone utilities (~lines 10001-15000)
4. etc.

**Recommended Approach:** Use **Solution A** (Webpack module boundaries) as it preserves natural code organization.

---

## 6. Processing Workflow

### Phase 1: Foundation (Week 1)
1. ✅ Process `runtime.*.js` (26KB) - Understand module loader
2. 🔄 Process `library.*.js` chunks 1-50 (Module IDs 1-50000)
3. ⏳ Process `8971.*.js` (73KB)

### Phase 2: Core Engine (Week 2-3)
4. Process `library.*.js` chunks 51-150 (Module IDs 50001-150000)
5. Process `library.*.js` chunks 151-250 (Module IDs 150001-250000)
6. Process `library.*.js` chunks 251-335 (remaining modules)

### Phase 3: Major Features (Week 4)
7. Process Tier 2 chunks (5093, 1583, 5598, 7987, 8537)
8. Process Tier 3 chunks (2475, 1754, 1859, etc.)

### Phase 4: Specialized Features (Week 5+)
9. Process Tier 4-10 chunks based on priority
10. Skip language bundles unless needed

---

## 7. Variable Renaming Convention

### Standard Naming Patterns:

| Category | Prefix | Example |
|----------|--------|---------|
| Classes | PascalCase | `ChartWidget`, `SessionInfo` |
| Functions | camelCase | `mergeOptions`, `alignTime` |
| Constants | UPPER_SNAKE_CASE | `SESSION_STAGE_PRE`, `LINESTYLE_SOLID` |
| Private vars | underscore prefix | `_session`, `_periodSec` |
| Webpack internals | keep original | `o.m`, `o.e`, `o.l` |

### Reserved Names (Do Not Rename):
- Webpack runtime: `o`, `e`, `t`, `i`, `c`, `d`, `f`, `b`
- Module IDs: numeric keys like `51101`, `71149`
- Generated hashes: `y5H41VPj`, `EJBD96zX`

---

## 8. Re-Minification Pipeline

### Step 1: Process Individual Files
```bash
# For each beautified file
npx prettier --write src/*.js
```

### Step 2: Bundle with Webpack-like Structure
```javascript
// Create bootstrap file
const modules = {
  51101: require('./modules/module.51101.js'),
  71149: require('./modules/module.71149.js'),
  // ...
};

// Inject into runtime template
```

### Step 3: Minify with Terser
```bash
npx terser bundled.js \
  -c passes=3,dead_code=true,drop_console=false \
  -m reserved=['mergeOptions','ChartWidget','SessionInfo','ActionId'] \
  -o output.min.js \
  --source-map content=inline,url=inline
```

### Step 4: Verify Functionality
- Compare file sizes (target: within 10% of original)
- Test in browser console
- Validate chunk loading

---

## 9. Appendix: Complete Chunk ID Reference

### All 335 Chunk IDs Referenced in library.*.js:
```
4, 92, 139, 159, 319, 341, 360, 380, 445, 507, 509, 569, 574, 607, 620, 624, 
628, 683, 688, 731, 769, 844, 846, 861, 903, 906, 917, 925, 961, 986, 1065, 
1155, 1166, 1171, 1277, 1282, 1313, 1314, 1450, 1455, 1470, 1485, 1488, 1506, 
1553, 1583, 1584, 1667, 1681, 1697, 1713, 1727, 1754, 1859, 1890, 1963, 1979, 
2050, 2077, 2087, 2112, 2164, 2183, 2202, 2227, 2232, 2283, 2303, 2306, 2307, 
2312, 2318, 2377, 2413, 2475, 2477, 2537, 2641, 2647, 2704, 2745, 2816, 2878, 
2891, 2962, 3005, 3014, 3030, 3179, 3248, 3290, 3314, 3329, 3359, 3378, 3383, 
3425, 3439, 3460, 3476, 3555, 3596, 3637, 3672, 3710, 3723, 3853, 3866, 3945, 
3946, 3952, 3966, 4013, 4015, 4059, 4079, 4201, 4240, 4248, 4273, 4389, 4422, 
4426, 4495, 4587, 4598, 4602, 4633, 4674, 4678, 4719, 4731, 4765, 4862, 4931, 
4934, 4981, 5009, 5055, 5093, 5122, 5206, 5231, 5248, 5283, 5371, 5386, 5410, 
5445, 5456, 5500, 5516, 5529, 5551, 5563, 5565, 5572, 5592, 5598, 5639, 5695, 
5700, 5705, 5743, 5834, 5893, 5967, 6025, 6032, 6043, 6052, 6094, 6124, 6166, 
6178, 6193, 6195, 6265, 6336, 6376, 6432, 6456, 6477, 6484, 6602, 6631, 6633, 
6668, 6697, 6729, 6740, 6748, 6760, 6780, 6864, 6870, 6954, 6956, 7037, 7038, 
7078, 7122, 7127, 7129, 7175, 7203, 7260, 7271, 7328, 7336, 7369, 7399, 7437, 
7463, 7488, 7519, 7539, 7553, 7563, 7598, 7629, 7648, 7660, 7682, 7691, 7777, 
7780, 7806, 7827, 7833, 7850, 7871, 7903, 7952, 7987, 8020, 8061, 8090, 8093, 
8185, 8220, 8260, 8313, 8334, 8372, 8402, 8422, 8468, 8535, 8537, 8604, 8607, 
8622, 8673, 8736, 8752, 8763, 8820, 8823, 8836, 8890, 8894, 8896, 8933, 8949, 
8955, 8975, 9002, 9014, 9036, 9039, 9123, 9297, 9310, 9323, 9374, 9378, 9418, 
9426, 9445, 9468, 9478, 9487, 9494, 9498, 9520, 9534, 9581, 9590, 9646, 9658, 
9685, 9742, 9748, 9754, 9790, 9836, 9928, 9965, 9970
```

### Chunk ID to Filename Mapping Formula:
```javascript
filename = chunkId + "." + hash[chunkId] + ".js"

// Example hashes from runtime file:
hashes = {
  4: "e9f7877e2088cf681289",
  139: "9bac6b5005b2fe097cf3",
  5093: "4ec424eb56739ee22285",
  // ... (full map in runtime bundle)
}
```

---

## 10. Next Steps

### Immediate Actions:
1. ✅ **Dependency mapping complete**
2. 🔄 **Begin processing runtime.*.js** (already analyzed)
3. ⏳ **Start library.*.js chunking** using webpack module boundaries
4. ⏳ **Create automated splitting script** for module extraction

### Tools Needed:
- Node.js script to parse webpack module format
- Regex pattern: `/(\d+):\s*\([^)]+\)\s*=>\s*\{/g`
- Output directory structure: `/modules/module.ID.js`

---

**Document Version:** 1.0  
**Last Updated:** 2025-04-20  
**Status:** Ready for Phase 2 (Core Engine Processing)
