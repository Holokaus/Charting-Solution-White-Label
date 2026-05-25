# Rendering Pipeline

## Confidence: [LIKELY] — based on 52 [CERTAIN] + 67 [LIKELY] module specs

## Overview
The charting library uses HTML5 Canvas 2D API for primary chart rendering. Multiple modules reference canvas operations (`fillRect`, `strokeRect`, `beginPath`, `moveTo`, `lineTo`, `arc`, `clip`, `save`, `restore`). WebGL references are minimal, suggesting 2D canvas is the primary rendering surface.

## Observed Rendering Layers

### Layer 1: Background Grid (Pane Background)
- **Modules:** Several CSS-style modules and background renderers
- **Method:** `fillRect()` for solid background, horizontal/vertical line loops for grid
- **Pattern:** Repeated calls to `setLineStyle`, `strokeStyle`, `lineWidth` before `stroke()`

### Layer 2: OHLCV Data (Main Series)
- **Modules:** Modules referencing `candle`, `bar`, `volume`, `price`, `time`, `series`
- **Method:** `beginPath()` + `moveTo()`/`lineTo()` for line charts; `fillRect()` for candlestick bodies; `strokeRect()` for wicks
- **Pattern:** Data is read from a buffer/array indexed by time, then mapped to pixel coordinates via `priceScale` and `timeScale` transforms

### Layer 3: Studies/Indicators (Overlay)
- **Modules:** Modules in `study-engine`, `studies-pane` groups referencing `study`, `indicator`, `overlay`
- **Method:** Same canvas API, drawn as separate overlay panes or directly on main pane
- **Pattern:** Study data is stored as `PlotRow[]`, rendered via `PaneView` → `Renderer` pattern

### Layer 4: Drawings/Annotations (Overlay)
- **Modules:** All `drawing-tools` and `line-tool-*` group modules
- **Method:** Individual renderers per tool type (trendline, rectangle, ellipse, fib retracement, etc.)
- **Pattern:** Each tool has its own coordinate system, hit-test logic, and render method

### Layer 5: Marks & Tooltips (UI Overlay)
- **Modules:** `marks-tooltips` group modules referencing `lollipop`, `marker`, `tooltip`
- **Method:** Canvas drawing for markers (circles, diamonds, earnings shapes), DOM-based tooltips positioned absolutely
- **Pattern:** `LollipopRenderer` draws shapes on canvas, `LollipopTooltip` creates positioned DOM elements

## Data Flow: OHLCV → Pixels

```
Datafeed → Series Data Store → Price Scale Transform → Time Scale Transform → Canvas Renderers
     ↑                              ↓                           ↓                      ↓
  Symbol Info                  priceToCoordinate()        indexToCoordinate()    PaneView.draw()
```

1. **Data Arrival:** `getBars()` or `subscribeBars()` → data stored in `SeriesData` ordered by time
2. **Coordinate Mapping:** 
   - Time → X: `timeScale.indexToCoordinate(barIndex)` — linear mapping based on bar spacing
   - Price → Y: `priceScale.priceToCoordinate(price)` — logarithmic or linear mapping
3. **Rendering:**
   - `PaneView.update()` called when data changes
   - `PaneView.renderer()` returns a `CompositeRenderer` or single renderer
   - Canvas draw calls wrapped in `save()`/`restore()` with `translate()`/`scale()` for pixel ratio

## Key Modules in Pipeline
| Module ID | Role | Confidence |
|-----------|------|------------|
| 50151 | Core coordinate math | [LIKELY] |
| 11542 | Price scale calculations | [LIKELY] |
| 22613 | Watched values / reactive state | [LIKELY] |
| 14472 | Line data source definitions | [CERTAIN] |
| 2383 | Hit testing utilities | [LIKELY] |
| 69558 | Line style constants (LINESTYLE_SOLID, etc.) | [CERTAIN] |

## Gaps
- The exact algorithm for candlestick body/wick drawing is not confirmed [UNCERTAIN]
- WebGL usage, if any, is undetected — chart may fall back to Canvas 2D
- Composite renderer ordering (z-order) logic is not fully traced
