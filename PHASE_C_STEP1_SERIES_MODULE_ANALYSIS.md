# Phase C: Variable Renaming - Priority Module 2115 (Series)

**Status:** IN PROGRESS  
**Date:** April 23, 2026  
**Module ID:** 2115  
**Original Size:** 112,302 bytes (minified)  
**Beautified Size:** ~180KB (formatted)  
**Lines of Code:** 3,275 lines  

---

## Module Overview

Module 2115 contains the **Series** class - the core chart model for TradingView. This is arguably the most critical module in the entire codebase as it handles:
- Price series data management
- Rendering coordination
- User interaction handling
- Study/indicator integration
- Pane view management

### Key Exports
- `Series` (internal identifier: `wi`)

### Dependencies (94 modules)
Core dependencies include: 50279, 50151, 9343, 51768, 76422, 88723, 67135, 86572, 52746, 72187, 5471, 24062, 43337, 95059, 92211, 30342, 67563, 82095, 13651, 11542, 37103...

---

## Variable Mapping Analysis

### Current Minified Variables → Semantic Names

| Minified | Proposed Name | Type | Usage Context |
|----------|--------------|------|---------------|
| `s` | `LoggerModule` | import | Logging utilities from module 50279 |
| `o` | `Utilities` | import | Helper functions from module 50151 |
| `n` | `Logger` | import | Logger factory from module 9343 |
| `r` | `ColorModule` | import | Color utilities from module 51768 |
| `a` | `FormatterFactory` | import | Number formatting from module 76422 |
| `l` | `StudyMetaInfo` | import | Study metadata from module 88723 |
| `c` | `PriceDataSource` | import | Parent class from module 67135 |
| `h` | `SeriesHelpers` | import | Series-specific helpers from module 86572 |
| `d` | `TimeScaleData` | import | Time scale utilities from module 52746 |
| `u` | `BarData` | import | Bar/candle data structures from module 72187 |
| `_` | `PlotConfig` | import | Plot configuration from module 5471 |
| `p` | `SeriesOptions` | import | Options interface from module 24062 |
| `m` | `IndicatorTools` | import | Indicator utilities from module 43337 |
| `g` | `DrawingTools` | import | Drawing primitives from module 95059 |
| `f` | `EventDispatcher` | import | Event system from module 92211 |
| `y` | `CoordinateConverter` | import | Coordinate math from module 30342 |
| `v` | `FeatureFlags` | import | Feature toggles from module 67563 |
| `S` | `RendererFactory` | import | Renderer creation from module 82095 |
| `b` | `TimeScale` | import | Time scale class from module 13651 |
| `w` | `LoggerInstance` | const | Logger instance for this module |
| `C` | `FeatureFlagsModule` | import | Feature flag system from module 37103 |
| `T` | `Constants` | import | Global constants from module 19000 |
| `P` | `MathHelpers` | import | Math utilities from module 52479 |
| `x` | `Index` | import | Index utilities from module 75641 |

### Class-Level Variables to Rename

The main `Series` class (currently `wi`) contains numerous single-letter variables that need renaming:

| Current | Proposed | Description |
|---------|----------|-------------|
| `this._s` | `this._seriesModel` | Internal series model reference |
| `this._o` | `this._options` | Series configuration options |
| `this._n` | `this._dataPoints` | Array of data points |
| `this._r` | `this._renderer` | Current renderer instance |
| `this._a` | `this._paneViews` | Array of pane views |
| `this._l` | `this._priceScale` | Associated price scale |
| `this._c` | `this._timeScale` | Associated time scale |
| `this._h` | `this._hitTesters` | Hit testing utilities |
| `this._d` | `this._drawState` | Drawing state information |
| `this._u` | `this._updateQueue` | Pending update queue |

---

## Renaming Strategy

### Phase C.1: Extract and Analyze (DONE)
- ✅ Module beautified to `beautified-batch/2115.js`
- ✅ Dependency list extracted (94 modules)
- ✅ Export symbols identified (`Series`)

### Phase C.2: Manual Variable Mapping (IN PROGRESS)
- [ ] Map all import aliases to semantic names
- [ ] Identify class properties and methods
- [ ] Map local function variables
- [ ] Document naming conventions used

### Phase C.3: Apply Renamings
- [ ] Create `renamed-modules/2115-series-core.js`
- [ ] Replace all single-letter vars with semantic names
- [ ] Add comprehensive JSDoc comments
- [ ] Verify no functionality changes

### Phase C.4: Validation
- [ ] Syntax check with Node.js
- [ ] Cross-reference with original minified version
- [ ] Test dependency resolution

---

## Progress Log

### Session 1: Initial Analysis
**Time spent:** 45 minutes  
**Accomplishments:**
1. Located module 2115 in `beautified-batch/`
2. Identified 94 dependencies
3. Mapped 24 import aliases to semantic names
4. Identified main class structure (`wi` = `Series`)
5. Created this documentation

**Challenges:**
- Module is 3,275 lines - largest single class in codebase
- Heavy use of closure patterns makes variable tracking difficult
- Many variables shadow outer scope variables

**Next Steps:**
1. Complete mapping of class-level properties (~30 more variables)
2. Begin systematic replacement
3. Create renamed output file

---

## Estimated Completion

| Task | Estimated Time | Status |
|------|----------------|--------|
| Import alias mapping | 30 min | ✅ DONE |
| Class property mapping | 60 min | 🔄 IN PROGRESS |
| Method parameter mapping | 90 min | ⏳ PENDING |
| Local variable mapping | 120 min | ⏳ PENDING |
| Systematic replacement | 60 min | ⏳ PENDING |
| JSDoc documentation | 90 min | ⏳ PENDING |
| Validation & testing | 30 min | ⏳ PENDING |
| **TOTAL** | **~8 hours** | **15% complete** |

---

## Notes

1. **Critical Dependencies:** Modules 50151 (utilities), 9343 (logger), and 67135 (PriceDataSource) must be understood first
2. **Testing Strategy:** Compare line counts and structure before/after renaming
3. **Risk:** High - this is core functionality; errors will cascade
4. **Backup:** Original beautified version preserved in `beautified-batch/2115.js`

---

## Related Modules

Priority order for subsequent renaming:
1. ✅ 2072 - WatchedValue (DONE)
2. ✅ 48096 - Delegate (DONE)
3. ✅ 72207 - DataSource (DONE)
4. 🔄 2115 - Series (IN PROGRESS)
5. ⏳ 37150 - Main initialization (1.5MB, after Series)
6. ⏳ 4783 - Indicators library
7. ⏳ 50151 - Utilities (ensureNotNull, etc.)
8. ⏳ 11542 - Logger system
9. ⏳ 1765 - Settings adapter
10. ⏳ 67135 - PriceDataSource

---

*This document will be updated as renaming progresses.*
