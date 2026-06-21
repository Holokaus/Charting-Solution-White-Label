/**
 * Module 6652 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

6652: (exports, t, i) => {
    "use strict";
    var modes, o, n;

    function data(exports) {
      return exports.isSeries
    }
    i.d(t, {
        isSeries: () => r
      }),
      function(exports) {
        exports[exports.Bars = 0] = "Bars", exports[exports.Candles = 1] = "Candles", exports[exports.Line = 2] = "Line", exports[exports.Area = 3] = "Area", exports[exports
            .HeikenAshi = 8] = "HeikenAshi", exports[exports.HollowCandles = 9] = "HollowCandles", exports[exports.Baseline = 10] = "Baseline",
          exports[exports.HiLo = 12] = "HiLo", exports[exports.Column = 13] = "Column", exports[exports.LineWithMarkers = 14] = "LineWithMarkers", exports[exports
            .Stepline = 15] = "Stepline", exports[exports.HLCArea = 16] = "HLCArea", exports[exports.VolCandle = 19] = "VolCandle", exports[exports
            .HLCBars = 21] = "HLCBars", exports[exports.Renko = 4] = "Renko", exports[exports.Kagi = 5] = "Kagi", exports[exports.PointAndFigure = 6] =
          "PointAndFigure", exports[exports.LineBreak = 7] = "LineBreak"
      }(modes || (modes = {})),
      function(exports) {
        exports.Value = "_seriesId"
      }(o || (o = {})),
      function(exports) {
        exports[exports.InvalidSymbol = 0] = "InvalidSymbol", exports[exports.ReplayUnsupported = 1] = "ReplayUnsupported", exports[exports
          .UnsupportedDepth = 2] = "UnsupportedDepth", exports[exports.UnsupportedIntradyReplay = 3] = "UnsupportedIntradyReplay"
      }(n || (n = {}))