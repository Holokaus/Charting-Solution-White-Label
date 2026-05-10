/**
 * Module 4359 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

4359: (exports, module, i) => {
    "use strict";
    var utils, o, n, r, a, l, c;

    function handler(exports) {
      return "line" === exports.type
    }

    function data(exports) {
      return "shapes" === exports.type
    }

    function utils(exports) {
      return "chars" === exports.type
    }

    function _(exports) {
      return "arrows" === exports.type
    }

    function params(exports) {
      return "data" === exports.type
    }

    function m(exports) {
      return "dataoffset" === exports.type
    }

    function g(exports) {
      return "ohlc_open" === exports.type
    }

    function func(exports) {
      return "ohlc_high" === exports.type
    }

    function y(exports) {
      return "ohlc_low" === exports.type
    }

    function v(exports) {
      return "ohlc_close" === exports.type
    }

    function S(exports) {
      return g(exports) || f(exports) || y(exports) || v(exports)
    }

    function b(exports) {
      return "colorer" === exports.type && "palette" in exports
    }

    function w(exports) {
      return "colorer" === exports.type && !("palette" in exports)
    }

    function C(exports) {
      return "colorer" === exports.type
    }

    function T(exports) {
      return "bar_colorer" === exports.type
    }

    function P(exports) {
      return "bg_colorer" === exports.type
    }

    function x(exports) {
      return "text_colorer" === exports.type
    }

    function M(exports) {
      return "ohlc_colorer" === exports.type
    }

    function I(exports) {
      return "wick_colorer" === exports.type
    }

    function A(exports) {
      return "border_colorer" === exports.type
    }

    function L(exports) {
      return "up_colorer" === exports.type
    }

    function k(exports) {
      return "down_colorer" === exports.type
    }

    function E(exports) {
      return "alertcondition" === exports.type
    }

    function D(exports) {
      return h(exports) || d(exports) || u(exports) || _(exports)
    }

    function B(exports) {
      return "Plot" !== exports
    }

    function V(exports) {
      return "ohlc_bars" === exports.plottype
    }

    function R(exports) {
      return "ohlc_candles" === exports.plottype
    }

    function N(exports) {
      return C(exports) || T(exports) || P(exports) || p(exports) || m(exports) || M(exports) || E(exports) || L(exports) || k(exports) || A(exports) || I(exports) || x(exports)
    }

    function O(exports) {
      return C(exports) || x(exports) || T(exports) || p(exports) || m(exports) || M(exports) || I(exports) || A(exports) || L(exports) || k(exports) || E(exports)
    }

    function F(exports) {
      return [utils.Line, utils.LineWithBreaks, utils.StepLine, utils.StepLineWithBreaks, utils.StepLineWithDiamonds, utils.Area, utils
        .AreaWithBreaks
      ].includes(exports)
    }
    i.r(module), i.d(module, {
        InternalStudyPlotType: () => n,
        LineStudyPlotStyle: () => utils,
        OhlcStudyPlotStyle: () => l,
        PlotSymbolSize: () => c,
        STUDYPLOTDISPLAYTARGET: () => a,
        StudyPlotDisplayTarget: () => r,
        StudyPlotType: () => o,
        doesLinePlotStyleSupportLineStyle: () => F,
        isAlertConditionPlot: () => E,
        isArrowsPlot: () => _,
        isBarColorerPlot: () => T,
        isBgColorerPlot: () => P,
        isCandleBorderColorerPlot: () => A,
        isCandleWickColorerPlot: () => I,
        isCharsPlot: () => u,
        isColorerPlot: () => C,
        isDataOffsetPlot: () => m,
        isDataPlot: () => p,
        isDownColorerPlot: () => k,
        isLinePlot: () => h,
        isNonVisualPlot: () => O,
        isOhlcClosePlot: () => v,
        isOhlcColorerPlot: () => M,
        isOhlcHighPlot: () => f,
        isOhlcLowPlot: () => y,
        isOhlcOpenPlot: () => g,
        isOhlcPlot: () => S,
        isOhlcPlotStyleBars: () => V,
        isOhlcPlotStyleCandles: () => R,
        isPaletteColorerPlot: () => b,
        isPlotSupportDisplay: () => D,
        isPlotTitleDefined: () => B,
        isPlotWithTechnicalValues: () => N,
        isRgbaColorerPlot: () => w,
        isShapesPlot: () => d,
        isTextColorerPlot: () => x,
        isUpColorerPlot: () => L
      }),
      function(exports) {
        exports[exports.Line = 0] = "Line", exports[exports.Histogram = 1] = "Histogram", exports[exports.Cross = 3] = "Cross", exports[exports.Area = 4] = "Area", exports[exports
            .Columns = 5] = "Columns", exports[exports.Circles = 6] = "Circles", exports[exports.LineWithBreaks = 7] = "LineWithBreaks", exports[exports
            .AreaWithBreaks = 8] = "AreaWithBreaks", exports[exports.StepLine = 9] = "StepLine", exports[exports.StepLineWithDiamonds = 10] =
          "StepLineWithDiamonds", exports[exports.StepLineWithBreaks = 11] = "StepLineWithBreaks"
      }(utils || (utils = {})),
      function(exports) {
        exports.Line = "line", exports.Colorer = "colorer", exports.BarColorer = "bar_colorer", exports.BgColorer = "bg_colorer", exports
          .TextColorer = "text_colorer", exports.OhlcColorer = "ohlc_colorer", exports.CandleWickColorer = "wick_colorer", exports
          .CandleBorderColorer = "border_colorer", exports.UpColorer = "up_colorer", exports.DownColorer = "down_colorer", exports
          .Shapes = "shapes", exports.Chars = "chars", exports.Arrows = "arrows",
          exports.Data = "data", exports.DataOffset = "dataoffset", exports.OhlcOpen = "ohlc_open", exports.OhlcHigh = "ohlc_high", exports.OhlcLow =
          "ohlc_low", exports.OhlcClose = "ohlc_close"
      }(o || (o = {})),
      function(exports) {
        exports.AlertCondition = "alertcondition"
      }(n || (n = {})),
      function(exports) {
        exports[exports.None = 0] = "None", exports[exports.Pane = 1] = "Pane", exports[exports.DataWindow = 2] = "DataWindow", exports[exports.PriceScale = 4] =
          "PriceScale", exports[exports.StatusLine = 8] = "StatusLine", exports[exports.All = 15] = "All"
      }(r || (r = {})),
      function(exports) {
        exports[exports.None = 0] = "None", exports[exports.Pane = 1] = "Pane", exports[exports.DataWindow = 2] = "DataWindow", exports[exports.PriceScale = 4] =
          "PriceScale", exports[exports.StatusLine = 8] = "StatusLine", exports[exports.All = 15] = "All"
      }(a || (a = {})),
      function(exports) {
        exports.OhlcBars = "ohlc_bars", exports.OhlcCandles = "ohlc_candles"
      }(l || (l = {})),
      function(exports) {
        exports.Auto = "auto", exports.Tiny = "tiny", exports.Small = "small", exports.Normal = "normal", exports.Large = "large", exports.Huge = "huge"
      }(c || (c = {}))