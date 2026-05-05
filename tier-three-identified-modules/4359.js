/**
 * Module: 4359
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.621Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4359 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4359: (exports, t, i) => {
    "use strict";
    var s, o, n, r, a, logger, c;

    function h(exports) {
      return "line" === exports.type
    }

    function d(exports) {
      return "shapes" === exports.type
    }

    function u(exports) {
      return "chars" === exports.type
    }

    function _(exports) {
      return "arrows" === exports.type
    }

    function p(exports) {
      return "data" === exports.type
    }

    function m(exports) {
      return "dataoffset" === exports.type
    }

    function g(exports) {
      return "ohlc_open" === exports.type
    }

    function f(exports) {
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
      return "colorer" === exports.type && "palette" in e
    }

    function w(exports) {
      return "colorer" === exports.type && !("palette" in e)
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
      return "Plot" !== e
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
      return [s.Line, s.LineWithBreaks, s.StepLine, s.StepLineWithBreaks, s.StepLineWithDiamonds, s.Area, s
        .AreaWithBreaks
      ].includes(exports)
    }
    i.r(t), i.d(t, {
        InternalStudyPlotType: () => n,
        LineStudyPlotStyle: () => s,
        OhlcStudyPlotStyle: () => logger,
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
        isDataOffsetPlot: () => message,
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
        e[exports.Line = 0] = "Line", e[exports.Histogram = 1] = "Histogram", e[exports.Cross = 3] = "Cross", e[exports.Area = 4] = "Area", e[e
            .Columns = 5] = "Columns", e[exports.Circles = 6] = "Circles", e[exports.LineWithBreaks = 7] = "LineWithBreaks", e[e
            .AreaWithBreaks = 8] = "AreaWithBreaks", e[exports.StepLine = 9] = "StepLine", e[exports.StepLineWithDiamonds = 10] =
          "StepLineWithDiamonds", e[exports.StepLineWithBreaks = 11] = "StepLineWithBreaks"
      }(s || (s = {})),
      function(exports) {
        exports.Line = "line", exports.Colorer = "colorer", exports.BarColorer = "bar_colorer", exports.BgColorer = "bg_colorer", e
          .TextColorer = "text_colorer", exports.OhlcColorer = "ohlc_colorer", exports.CandleWickColorer = "wick_colorer", e
          .CandleBorderColorer = "border_colorer", exports.UpColorer = "up_colorer", exports.DownColorer = "down_colorer", e
          .Shapes = "shapes", exports.Chars = "chars", exports.Arrows = "arrows",
          exports.Data = "data", exports.DataOffset = "dataoffset", exports.OhlcOpen = "ohlc_open", exports.OhlcHigh = "ohlc_high", exports.OhlcLow =
          "ohlc_low", exports.OhlcClose = "ohlc_close"
      }(o || (o = {})),
      function(exports) {
        exports.AlertCondition = "alertcondition"
      }(n || (n = {})),
      function(exports) {
        e[exports.None = 0] = "None", e[exports.Pane = 1] = "Pane", e[exports.DataWindow = 2] = "DataWindow", e[exports.PriceScale = 4] =
          "PriceScale", e[exports.StatusLine = 8] = "StatusLine", e[exports.All = 15] = "All"
      }(r || (r = {})),
      function(exports) {
        e[exports.None = 0] = "None", e[exports.Pane = 1] = "Pane", e[exports.DataWindow = 2] = "DataWindow", e[exports.PriceScale = 4] =
          "PriceScale", e[exports.StatusLine = 8] = "StatusLine", e[exports.All = 15] = "All"
      }(a || (a = {})),
      function(exports) {
        exports.OhlcBars = "ohlc_bars", exports.OhlcCandles = "ohlc_candles"
      }(l || (logger = {})),
      function(exports) {
        exports.Auto = "auto", exports.Tiny = "tiny", exports.Small = "small", exports.Normal = "normal", exports.Large = "large", exports.Huge = "huge"
      }(c || (c = {}))