/**
 * Module 4359 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4359: (e, t, i) => {
    "use strict";
    var s, o, n, r, a, l, c;

    function h(e) {
      return "line" === e.type
    }

    function d(e) {
      return "shapes" === e.type
    }

    function u(e) {
      return "chars" === e.type
    }

    function _(e) {
      return "arrows" === e.type
    }

    function p(e) {
      return "data" === e.type
    }

    function m(e) {
      return "dataoffset" === e.type
    }

    function g(e) {
      return "ohlc_open" === e.type
    }

    function f(e) {
      return "ohlc_high" === e.type
    }

    function y(e) {
      return "ohlc_low" === e.type
    }

    function v(e) {
      return "ohlc_close" === e.type
    }

    function S(e) {
      return g(e) || f(e) || y(e) || v(e)
    }

    function b(e) {
      return "colorer" === e.type && "palette" in e
    }

    function w(e) {
      return "colorer" === e.type && !("palette" in e)
    }

    function C(e) {
      return "colorer" === e.type
    }

    function T(e) {
      return "bar_colorer" === e.type
    }

    function P(e) {
      return "bg_colorer" === e.type
    }

    function x(e) {
      return "text_colorer" === e.type
    }

    function M(e) {
      return "ohlc_colorer" === e.type
    }

    function I(e) {
      return "wick_colorer" === e.type
    }

    function A(e) {
      return "border_colorer" === e.type
    }

    function L(e) {
      return "up_colorer" === e.type
    }

    function k(e) {
      return "down_colorer" === e.type
    }

    function E(e) {
      return "alertcondition" === e.type
    }

    function D(e) {
      return h(e) || d(e) || u(e) || _(e)
    }

    function B(e) {
      return "Plot" !== e
    }

    function V(e) {
      return "ohlc_bars" === e.plottype
    }

    function R(e) {
      return "ohlc_candles" === e.plottype
    }

    function N(e) {
      return C(e) || T(e) || P(e) || p(e) || m(e) || M(e) || E(e) || L(e) || k(e) || A(e) || I(e) || x(e)
    }

    function O(e) {
      return C(e) || x(e) || T(e) || p(e) || m(e) || M(e) || I(e) || A(e) || L(e) || k(e) || E(e)
    }

    function F(e) {
      return [s.Line, s.LineWithBreaks, s.StepLine, s.StepLineWithBreaks, s.StepLineWithDiamonds, s.Area, s
        .AreaWithBreaks
      ].includes(e)
    }
    i.r(t), i.d(t, {
        InternalStudyPlotType: () => n,
        LineStudyPlotStyle: () => s,
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
      function(e) {
        e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e
            .Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e
            .AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] =
          "StepLineWithDiamonds", e[e.StepLineWithBreaks = 11] = "StepLineWithBreaks"
      }(s || (s = {})),
      function(e) {
        e.Line = "line", e.Colorer = "colorer", e.BarColorer = "bar_colorer", e.BgColorer = "bg_colorer", e
          .TextColorer = "text_colorer", e.OhlcColorer = "ohlc_colorer", e.CandleWickColorer = "wick_colorer", e
          .CandleBorderColorer = "border_colorer", e.UpColorer = "up_colorer", e.DownColorer = "down_colorer", e
          .Shapes = "shapes", e.Chars = "chars", e.Arrows = "arrows",
          e.Data = "data", e.DataOffset = "dataoffset", e.OhlcOpen = "ohlc_open", e.OhlcHigh = "ohlc_high", e.OhlcLow =
          "ohlc_low", e.OhlcClose = "ohlc_close"
      }(o || (o = {})),
      function(e) {
        e.AlertCondition = "alertcondition"
      }(n || (n = {})),
      function(e) {
        e[e.None = 0] = "None", e[e.Pane = 1] = "Pane", e[e.DataWindow = 2] = "DataWindow", e[e.PriceScale = 4] =
          "PriceScale", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
      }(r || (r = {})),
      function(e) {
        e[e.None = 0] = "None", e[e.Pane = 1] = "Pane", e[e.DataWindow = 2] = "DataWindow", e[e.PriceScale = 4] =
          "PriceScale", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
      }(a || (a = {})),
      function(e) {
        e.OhlcBars = "ohlc_bars", e.OhlcCandles = "ohlc_candles"
      }(l || (l = {})),
      function(e) {
        e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
      }(c || (c = {}))