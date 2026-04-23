/**
 * Module 6652 - Auto-beautified from TradingView webpack bundle
 *
 * @module 6652
 * @date 2026-04-23
 * @size 851 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - isSeries (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

6652: (e, t, i) => {
    "use strict";
    var s, o, n;

    function r(e) {
      return e.isSeries
    }
    i.d(t, {
        isSeries: () => r
      }),
      function(e) {
        e[e.Bars = 0] = "Bars", e[e.Candles = 1] = "Candles", e[e.Line = 2] = "Line", e[e.Area = 3] = "Area", e[e.HeikenAshi = 8] = "HeikenAshi", e[e.HollowCandles = 9] = "HollowCandles", e[e.Baseline = 10] = "Baseline", e[e.HiLo = 12] = "HiLo", e[e.Column = 13] = "Column", e[e.LineWithMarkers = 14] = "LineWithMarkers", e[e.Stepline = 15] = "Stepline", e[e.HLCArea = 16] = "HLCArea", e[e.VolCandle = 19] = "VolCandle", e[e.HLCBars = 21] = "HLCBars", e[e.Renko = 4] = "Renko", e[e.Kagi = 5] = "Kagi", e[e.PointAndFigure = 6] = "PointAndFigure", e[e.LineBreak = 7] = "LineBreak"
      }(s || (s = {})),
      function(e) {
        e.Value = "_seriesId"
      }(o || (o = {})),
      function(e) {
        e[e.InvalidSymbol = 0] = "InvalidSymbol", e[e.ReplayUnsupported = 1] = "ReplayUnsupported", e[e.UnsupportedDepth = 2] = "UnsupportedDepth", e[e.UnsupportedIntradyReplay = 3] = "UnsupportedIntradyReplay"
      }(n || (n = {}))
