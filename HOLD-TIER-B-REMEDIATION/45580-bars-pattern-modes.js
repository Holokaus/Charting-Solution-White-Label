/**
 * ============================================================================
 * TRADINGVIEW MODULE 45580 - BARS PATTERN MODE ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Display modes for bar pattern visualization
 *
 * Size: 0.9 KB
 *
 * Modes:
 *   - Bars (0): Standard OHLC bars
 *   - Line (1): Line chart of close prices
 *   - OpenClose (2): Line showing open and close
 *   - LineOpen (3): Line of open prices
 *   - LineHigh (4): Line of high prices
 *   - LineLow (5): Line of low prices
 *   - LineHL2 (6): Line of (High+Low)/2
 *
 * Exports:
 *   - LineToolBarsPatternMode: Enum of bar display modes
 *
 * @module 45580
 * @category Drawing Tools
 * @subcategory Bar Patterns
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  var LineToolBarsPatternMode;
  moduleRequire.moduleRequire_d(moduleConfig, {
    LineToolBarsPatternMode: () => LineToolBarsPatternMode
  }),
  function(LineToolBarsPatternMode) {
    LineToolBarsPatternMode[LineToolBarsPatternMode.Bars = 0] = "Bars";
    LineToolBarsPatternMode[LineToolBarsPatternMode.Line = 1] = "Line";
    LineToolBarsPatternMode[LineToolBarsPatternMode.OpenClose = 2] = "OpenClose";
    LineToolBarsPatternMode[LineToolBarsPatternMode.LineOpen = 3] = "LineOpen";
    LineToolBarsPatternMode[LineToolBarsPatternMode.LineHigh = 4] = "LineHigh";
    LineToolBarsPatternMode[LineToolBarsPatternMode.LineLow = 5] = "LineLow";
    LineToolBarsPatternMode[LineToolBarsPatternMode.LineHL2 = 6] = "LineHL2";
  }(LineToolBarsPatternMode || (LineToolBarsPatternMode = {}));
}
