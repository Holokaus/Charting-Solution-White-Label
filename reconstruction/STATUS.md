# Reconstruction Status

## Overall Status: ✅ STABLE — All phases passing

| Phase | Area | Status | Checks |
|-------|------|--------|--------|
| 0 | Webpack Unbundling (AST-based) | ✅ PASS | 9/9 |
| 1 | Runtime Analysis (Chunk Capture) | ✅ PASS | 10/10 |
| 2 | API Surface Documentation | ✅ PASS | 31/31 |
| 3 | Dependency Graph (AST-based) | ✅ PASS | 12/12 |
| 4 | Feature→Module Mapping | ✅ DONE | — |
| 5+ | Public API, Datafeed, Widget Core | — | Not started |

## Key Metrics

- **Modules extracted:** 4,413
- **Chunks mapped:** 247
- **Dependency edges:** 10,330
- **Runtime-loaded modules:** 2,370 (54% of total)
- **API methods documented:** 69
- **API methods mapped to modules:** 16

## What Was Built

### Phase 0 — `reconstruction/tools/unbundle.js`
- AST-based extraction of module factory functions from chunk files
- Uses `@babel/parser` to parse `push()` call arguments
- Output: `modules/{id}.js` (4,413 files) + `manifest.json`

### Phase 1 — `reconstruction/tools/phase-01-capture.js`
- Puppeteer-based runtime capture of chunk loading
- Hooks chart iframe's `webpackChunktradingview` array
- Captures 45 chunk entries, 2,370 unique modules at initialization

### Phase 2 — API Surface Documentation
- `widget-methods-events.md`: 69 widget methods, 19 events
- `tradingview-global-api.json`: 36 global API properties
- `widget-options-schema.md`: ~54 widget options
- `events-reference.md`: Complete event reference

### Phase 3 — `reconstruction/tools/extract-dependency-graph.js`
- AST-based dependency extraction using `@babel/parser` + `@babel/traverse`
- Uses webpack parameter convention (3rd param = `__webpack_require__`)
- Correctly skips nested function scope shadowing
- Output: `dependency-graph.json` (10,330 edges)

### Phase 4 — `feature-module-map.json`
- Maps 16 API methods to implementing modules
- Includes direct modules, transitive dependencies, and containing chunks
- Built via string-literal search in module factory source code

## Key Findings

1. **Chunks load inside a blob-URL iframe**, not the main page. This is why the original `Array.prototype.push` hook captured 0 data.
2. **Module 37150** (1.1MB) is the main chart implementation, containing most public API methods.
3. **77.1% zero-dependency rate** in the dependency graph — typical for leaf modules (data constants, type definitions, simple utilities).
4. **All 49 initialization chunks are pre-loaded** — no new chunks load for symbol changes, interval changes, chart type changes, or study additions.

## Files

| File | Purpose |
|------|---------|
| `reconstruction/tools/unbundle.js` | Phase 0: Chunk → module extraction |
| `reconstruction/tools/extract-dependency-graph.js` | Phase 3: AST dependency extraction |
| `reconstruction/tools/phase-01-capture.js` | Phase 1: Puppeteer runtime capture |
| `reconstruction/tools/build-feature-module-map.js` | Phase 4: Feature-to-module mapping |
| `reconstruction/tools/verify-phase-00.js` | Phase 0 verification |
| `reconstruction/tools/verify-phase-01.js` | Phase 1 verification |
| `reconstruction/tools/verify-phase-02.js` | Phase 2 verification |
| `reconstruction/tools/verify-phase-03.js` | Phase 3 verification |
