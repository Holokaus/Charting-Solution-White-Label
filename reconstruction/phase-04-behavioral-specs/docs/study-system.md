# Study / Indicator System

## Confidence: [UNCERTAIN] — some supporting modules are [UNCERTAIN]; the study calculation engine is heavily obfuscated

## Overview
The charting library supports ~107+ built-in studies (indicators). Studies are implemented as a combination of calculation modules and rendering overlays. The key observation is that all 49 initialization chunks are pre-loaded — no new chunks load for study additions, meaning all study code is included in the initial bundle.

## Study Architecture

### 1. Study Registration
- **Modules:** `study-engine` group, `library-studies` chunk
- **Process:** Studies are registered in a central registry, keyed by study name string
- **API methods:** `getStudiesList()`, `getStudyInputs(studyName)`, `getStudyStyles(studyName)`
- **Pattern:** Each study has metadata: name, inputs (with types/defaults), styles (colors, line widths), plots (output series)

### 2. Study Calculation
- **Modules:** Modules referencing math functions (`Math.sqrt`, `Math.pow`, `Math.abs`, loops over bar data)
- **Pattern:** Studies receive an array of OHLCV bars, iterate to compute output values per bar
- **Common calculations observed in string hints:** moving averages (SMA/EMA), standard deviation, min/max over window
- **Output:** `PlotRow[]` — typed array of numeric values indexed by bar time

### 3. Study Rendering (Pane Views)
- **Modules:** `studies-pane` group, `study-pane-views` chunk
- **Method:** Studies render in two modes:
  - **Main pane overlay:** Drawn directly on top of the main series (e.g., moving average)
  - **Separate pane:** Rendered in a sub-pane below the main chart (e.g., RSI, MACD, Volume)
- **Pattern:** `PaneView.update()` → `PaneView.renderer()` → Canvas draw calls

### 4. Study Property Pages
- **Modules:** `study-property-pages-with-definitions` chunk
- **Pattern:** Dialog UI for configuring study inputs and styles
- **Storage:** Properties stored via the reactive property system (`childs()`, `.value()`, `.setValue()`)

### 5. Study Templates
- **Modules:** Modules referencing `StudyTemplateSaver`, `study-template-dialog`
- **Pattern:** Serialize/deserialize study configuration (inputs + styles) to JSON

## Observed Study Types (from string literals)
- Moving Averages: SMA, EMA, WMA
- Volatility: Bollinger Bands, ATR
- Momentum: RSI, MACD, Stochastic, CCI
- Volume: Volume, OBV, Volume Profile
- Other: Ichimoku, Parabolic SAR, Pivot Points

## Calculation Pattern (Inferred)
```
function calculateStudy(bars: OHLCV[], inputs: StudyInputs): PlotRow[] {
  const results: PlotRow[] = [];
  for (let i = lookback; i < bars.length; i++) {
    const window = bars.slice(i - lookback, i);
    const value = someCalculation(window, inputs.param1, inputs.param2);
    results.push({ time: bars[i].time, value });
  }
  return results;
}
```

## Key Modules in Study System
| Module ID | Role | Confidence |
|-----------|------|------------|
| 86682 | Indicators library container/dialog | [CERTAIN] |
| 13657 | Study template saver | [CERTAIN] |
| 14472 | Line data source definitions (base class) | [CERTAIN] |
| 54706 | Study pane view rendering | [LIKELY] |
| 14283 | Compare dialog model | [CERTAIN] |
| 52973 | Study definitions/property pages | [LIKELY] |

## Gaps
- The exact Pine Script compilation target format is unknown [UNKNOWN] — studies appear to be hand-coded JS, not compiled from Pine
- Study calculation implementations are heavily minified and not individually identified [UNKNOWN]
- The study-to-pane assignment logic (main pane vs. separate pane) is not traced [UNCERTAIN]
- Custom study (user-defined indicator) API surface is unclear [UNCERTAIN]
