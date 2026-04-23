/**
 * Module 69422 - Auto-beautified from TradingView webpack bundle
 *
 * @module 69422
 * @date 2026-04-23
 * @size 2303 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 82433
 *
 * Exports:
 *   - ChartColorDependentStudyInputNames (internal: c)
 *   - InputDisplayFlags (internal: o)
 *   - RangeDependentStudyInputNames (internal: l)
 *   - areStudyInputsEqual (internal: _)
 *   - editableStudyInputs (internal: m)
 *   - getInputValue (internal: d)
 *   - isStudyInputDependsOnChart (internal: f)
 *   - isStudyInputDependsOnChartColors (internal: g)
 *   - isStudyInputOptionsInfo (internal: u)
 *   - isTimeOrPriceNotHiddenInput (internal: p)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

69422: (e, t, i) => {
    "use strict";
    i.d(t, {
      ChartColorDependentStudyInputNames: () => c,
      InputDisplayFlags: () => o,
      RangeDependentStudyInputNames: () => l,
      areStudyInputsEqual: () => _,
      editableStudyInputs: () => m,
      getInputValue: () => d,
      isStudyInputDependsOnChart: () => f,
      isStudyInputDependsOnChartColors: () => g,
      isStudyInputOptionsInfo: () => u,
      isTimeOrPriceNotHiddenInput: () => p
    });
    var s, o, n, r, a, l, c, h = i(82433);

    function d(e) {
      return function(e) {
        return (0, h.default)(e)
      }(e) ? e.v : e
    }

    function u(e) {
      return ["text", "integer", "float", "price", "session", "resolution"].includes(e.type) && e.hasOwnProperty("options")
    }

    function _(e, t, i) {
      for (const s of e)
        if (t[s.id] !== i[s.id]) return !1;
      return !0
    }

    function p(e) {
      return ("time" === e.type || "price" === e.type) && !0 !== e.isHidden
    }

    function m(e) {
      return []
    }

    function g(e) {
      return Object.values(c).map((e => e)).includes(e.id)
    }

    function f(e) {
      return !!g(e) || Object.values(l).map((e => e)).includes(e.id)
    }! function(e) {
      e.Integer = "integer", e.Float = "float", e.Price = "price", e.Bool = "bool", e.Text = "text", e.Symbol = "symbol", e.Session = "session", e.Source = "source", e.Resolution = "resolution", e.Time = "time", e.BarTime = "bar_time", e.Color = "color", e.Textarea = "text_area"
    }(s || (s = {})),
    function(e) {
      e[e.None = 0] = "None", e[e.DataWindow = 2] = "DataWindow", e[e.StatusLine = 8] = "StatusLine", e[e.All = 15] = "All"
    }(o || (o = {})),
    function(e) {
      e.InitialCapital = "initial_capital", e.Currency = "currency", e.DefaultQTYValue = "default_qty_value", e.DefaultQTYType = "default_qty_type", e.Pyramiding = "pyramiding", e.ComissionValue = "commission_value", e.ComissionType = "commission_type", e.BacktestFillLimitsAssumtion = "backtest_fill_limits_assumption", e.Slippage = "slippage", e.CalcOnOrderFills = "calc_on_order_fills", e.CalcOnEveryTick = "calc_on_every_tick", e.MarginLong = "margin_long", e.MarginShort = "margin_short", e.UseBarMagnifier = "use_bar_magnifier", e.ProcessOrdersOnClose = "process_orders_on_close", e.FillOrdersOnStandardOHLC = "fill_orders_on_standard_ohlc"
    }(n || (n = {})),
    function(e) {
      e.Fixed = "fixed", e.CashPerOrder = "cash_per_order", e.PercentOfEquity = "percent_of_equity"
    }(r || (r = {})),
    function(e) {
      e.Percent = "percent", e.CashPerContract = "cash_per_contract", e.CashPerOrder = "cash_per_order"
    }(a || (a = {})),
    function(e) {
      e.FirstBar = "first_visible_bar_time", e.LastBar = "last_visible_bar_time", e.Realtime = "subscribeRealtime"
    }(l || (l = {})),
    function(e) {
      e.FgColor = "__chart_fgcolor", e.BgColor = "__chart_bgcolor"
    }(c || (c = {}))
