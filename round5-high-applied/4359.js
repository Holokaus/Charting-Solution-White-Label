/**
 * Module 4359 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4359: (priceDataSource_e, priceDataSource_t, i) => {
    "use strict";
    var priceDataSource_s, o, n, r, a, l, c;

    function h(priceDataSource_e) {
      return "line" === priceDataSource_e.type
    }

    function d(priceDataSource_e) {
      return "shapes" === priceDataSource_e.type
    }

    function u(priceDataSource_e) {
      return "chars" === priceDataSource_e.type
    }

    function _(priceDataSource_e) {
      return "arrows" === priceDataSource_e.type
    }

    function p(priceDataSource_e) {
      return "data" === priceDataSource_e.type
    }

    function m(priceDataSource_e) {
      return "dataoffset" === priceDataSource_e.type
    }

    function g(priceDataSource_e) {
      return "ohlc_open" === priceDataSource_e.type
    }

    function f(priceDataSource_e) {
      return "ohlc_high" === priceDataSource_e.type
    }

    function y(priceDataSource_e) {
      return "ohlc_low" === priceDataSource_e.type
    }

    function v(priceDataSource_e) {
      return "ohlc_close" === priceDataSource_e.type
    }

    function S(priceDataSource_e) {
      return g(priceDataSource_e) || f(priceDataSource_e) || y(priceDataSource_e) || v(priceDataSource_e)
    }

    function b(priceDataSource_e) {
      return "colorer" === priceDataSource_e.type && "palette" in priceDataSource_e
    }

    function w(priceDataSource_e) {
      return "colorer" === priceDataSource_e.type && !("palette" in priceDataSource_e)
    }

    function C(priceDataSource_e) {
      return "colorer" === priceDataSource_e.type
    }

    function T(priceDataSource_e) {
      return "bar_colorer" === priceDataSource_e.type
    }

    function P(priceDataSource_e) {
      return "bg_colorer" === priceDataSource_e.type
    }

    function x(priceDataSource_e) {
      return "text_colorer" === priceDataSource_e.type
    }

    function M(priceDataSource_e) {
      return "ohlc_colorer" === priceDataSource_e.type
    }

    function I(priceDataSource_e) {
      return "wick_colorer" === priceDataSource_e.type
    }

    function A(priceDataSource_e) {
      return "border_colorer" === priceDataSource_e.type
    }

    function L(priceDataSource_e) {
      return "up_colorer" === priceDataSource_e.type
    }

    function k(priceDataSource_e) {
      return "down_colorer" === priceDataSource_e.type
    }

    function E(priceDataSource_e) {
      return "alertcondition" === priceDataSource_e.type
    }

    function D(priceDataSource_e) {
      return h(priceDataSource_e) || d(priceDataSource_e) || u(priceDataSource_e) || _(priceDataSource_e)
    }

    function B(priceDataSource_e) {
      return "Plot" !== priceDataSource_e
    }

    function V(priceDataSource_e) {
      return "ohlc_bars" === priceDataSource_e.plottype
    }

    function R(priceDataSource_e) {
      return "ohlc_candles" === priceDataSource_e.plottype
    }

    function N(priceDataSource_e) {
      return C(priceDataSource_e) || T(priceDataSource_e) || P(priceDataSource_e) || p(priceDataSource_e) || m(priceDataSource_e) || M(priceDataSource_e) || E(priceDataSource_e) || L(priceDataSource_e) || k(priceDataSource_e) || A(priceDataSource_e) || I(priceDataSource_e) || x(priceDataSource_e)
    }

    function O(priceDataSource_e) {
      return C(priceDataSource_e) || x(priceDataSource_e) || T(priceDataSource_e) || p(priceDataSource_e) || m(priceDataSource_e) || M(priceDataSource_e) || I(priceDataSource_e) || A(priceDataSource_e) || L(priceDataSource_e) || k(priceDataSource_e) || E(priceDataSource_e)
    }

    function F(priceDataSource_e) {
      return [priceDataSource_s.Line, priceDataSource_s.LineWithBreaks, priceDataSource_s.StepLine, priceDataSource_s.StepLineWithBreaks, priceDataSource_s.StepLineWithDiamonds, priceDataSource_s.Area, priceDataSource_s
        .AreaWithBreaks
      ].includes(priceDataSource_e)
    }
    i.r(priceDataSource_t), i.d(priceDataSource_t, {
        InternalStudyPlotType: () => n,
        LineStudyPlotStyle: () => priceDataSource_s,
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
      function(priceDataSource_e) {
        priceDataSource_e[priceDataSource_e.Line = 0] = "Line", priceDataSource_e[priceDataSource_e.Histogram = 1] = "Histogram", priceDataSource_e[priceDataSource_e.Cross = 3] = "Cross", priceDataSource_e[priceDataSource_e.Area = 4] = "Area", priceDataSource_e[priceDataSource_e
            .Columns = 5] = "Columns", priceDataSource_e[priceDataSource_e.Circles = 6] = "Circles", priceDataSource_e[priceDataSource_e.LineWithBreaks = 7] = "LineWithBreaks", priceDataSource_e[priceDataSource_e
            .AreaWithBreaks = 8] = "AreaWithBreaks", priceDataSource_e[priceDataSource_e.StepLine = 9] = "StepLine", priceDataSource_e[priceDataSource_e.StepLineWithDiamonds = 10] =
          "StepLineWithDiamonds", priceDataSource_e[priceDataSource_e.StepLineWithBreaks = 11] = "StepLineWithBreaks"
      }(priceDataSource_s || (priceDataSource_s = {})),
      function(priceDataSource_e) {
        priceDataSource_e.Line = "line", priceDataSource_e.Colorer = "colorer", priceDataSource_e.BarColorer = "bar_colorer", priceDataSource_e.BgColorer = "bg_colorer", priceDataSource_e
          .TextColorer = "text_colorer", priceDataSource_e.OhlcColorer = "ohlc_colorer", priceDataSource_e.CandleWickColorer = "wick_colorer", priceDataSource_e
          .CandleBorderColorer = "border_colorer", priceDataSource_e.UpColorer = "up_colorer", priceDataSource_e.DownColorer = "down_colorer", priceDataSource_e
          .Shapes = "shapes", priceDataSource_e.Chars = "chars", priceDataSource_e.Arrows = "arrows",
          priceDataSource_e.Data = "data", priceDataSource_e.DataOffset = "dataoffset", priceDataSource_e.OhlcOpen = "ohlc_open", priceDataSource_e.OhlcHigh = "ohlc_high", priceDataSource_e.OhlcLow =
          "ohlc_low", priceDataSource_e.OhlcClose = "ohlc_close"
      }(o || (o = {})),
      function(priceDataSource_e) {
        priceDataSource_e.AlertCondition = "alertcondition"
      }(n || (n = {})),
      function(priceDataSource_e) {
        priceDataSource_e[priceDataSource_e.None = 0] = "None", priceDataSource_e[priceDataSource_e.Pane = 1] = "Pane", priceDataSource_e[priceDataSource_e.DataWindow = 2] = "DataWindow", priceDataSource_e[priceDataSource_e.PriceScale = 4] =
          "PriceScale", priceDataSource_e[priceDataSource_e.StatusLine = 8] = "StatusLine", priceDataSource_e[priceDataSource_e.All = 15] = "All"
      }(r || (r = {})),
      function(priceDataSource_e) {
        priceDataSource_e[priceDataSource_e.None = 0] = "None", priceDataSource_e[priceDataSource_e.Pane = 1] = "Pane", priceDataSource_e[priceDataSource_e.DataWindow = 2] = "DataWindow", priceDataSource_e[priceDataSource_e.PriceScale = 4] =
          "PriceScale", priceDataSource_e[priceDataSource_e.StatusLine = 8] = "StatusLine", priceDataSource_e[priceDataSource_e.All = 15] = "All"
      }(a || (a = {})),
      function(priceDataSource_e) {
        priceDataSource_e.OhlcBars = "ohlc_bars", priceDataSource_e.OhlcCandles = "ohlc_candles"
      }(l || (l = {})),
      function(priceDataSource_e) {
        priceDataSource_e.Auto = "auto", priceDataSource_e.Tiny = "tiny", priceDataSource_e.Small = "small", priceDataSource_e.Normal = "normal", priceDataSource_e.Large = "large", priceDataSource_e.Huge = "huge"
      }(c || (c = {}))
}
