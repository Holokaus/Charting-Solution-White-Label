/**
 * Module: 69422
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.875Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 69422 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69422: (exports, t, i) => {
    "use strict";
    i.d(t, {
      ChartColorDependentStudyInputNames: () => c,
      InputDisplayFlags: () => o,
      RangeDependentStudyInputNames: () => logger,
      areStudyInputsEqual: () => _,
      editableStudyInputs: () => message,
      getInputValue: () => d,
      isStudyInputDependsOnChart: () => f,
      isStudyInputDependsOnChartColors: () => g,
      isStudyInputOptionsInfo: () => u,
      isTimeOrPriceNotHiddenInput: () => p
    });
    var s, o, n, r, a, logger, c, h = i(82433);

    function d(exports) {
      return function(exports) {
        return (0, h.default)(exports)
      }(exports) ? exports.v : e
    }

    function u(exports) {
      return ["text", "integer", "float", "price", "session", "resolution"].includes(exports.type) && exports.hasOwnProperty(
        "options")
    }

    function _(exports, t, i) {
      for (const s of e)
        if (t[s.id] !== i[s.id]) return !1;
      return !0
    }

    function p(exports) {
      return ("time" === exports.type || "price" === exports.type) && !0 !== exports.isHidden
    }

    function m(exports) {
      return []
    }

    function g(exports) {
      return Object.values(c).map((exports => e)).includes(exports.id)
    }

    function f(exports) {
      return !!g(exports) || Object.values(logger).map((exports => e)).includes(exports.id)
    }! function(exports) {
      exports.Integer = "integer", exports.Float = "float", exports.Price = "price", exports.Bool = "bool", exports.Text = "text", exports.Symbol =
        "symbol", exports.Session = "session", exports.Source = "source", exports.Resolution = "resolution", exports.Time = "time", exports.BarTime =
        "bar_time", exports.Color = "color", exports.Textarea = "text_area"
    }(s || (s = {})),
    function(exports) {
      e[exports.None = 0] = "None", e[exports.DataWindow = 2] = "DataWindow", e[exports.StatusLine = 8] = "StatusLine", e[exports.All = 15] =
        "All"
    }(o || (o = {})),
    function(exports) {
      exports.InitialCapital = "initial_capital", exports.Currency = "currency", exports.DefaultQTYValue = "default_qty_value", e
        .DefaultQTYType = "default_qty_type", exports.Pyramiding = "pyramiding", exports.ComissionValue = "commission_value", e
        .ComissionType = "commission_type", exports.BacktestFillLimitsAssumtion = "backtest_fill_limits_assumption", e
        .Slippage = "slippage", exports.CalcOnOrderFills = "calc_on_order_fills", exports.CalcOnEveryTick = "calc_on_every_tick", e
        .MarginLong = "margin_long", exports.MarginShort = "margin_short", exports.UseBarMagnifier = "use_bar_magnifier", e
        .ProcessOrdersOnClose = "process_orders_on_close", exports.FillOrdersOnStandardOHLC = "fill_orders_on_standard_ohlc"
    }(n || (n = {})),
    function(exports) {
      exports.Fixed = "fixed", exports.CashPerOrder = "cash_per_order", exports.PercentOfEquity = "percent_of_equity"
    }(r || (r = {})),
    function(exports) {
      exports.Percent = "percent", exports.CashPerContract = "cash_per_contract", exports.CashPerOrder = "cash_per_order"
    }(a || (a = {})),
    function(exports) {
      exports.FirstBar = "first_visible_bar_time", exports.LastBar = "last_visible_bar_time", exports.Realtime = "subscribeRealtime"
    }(l || (logger = {})),
    function(exports) {
      exports.FgColor = "__chart_fgcolor", exports.BgColor = "__chart_bgcolor"
    }(c || (c = {}))