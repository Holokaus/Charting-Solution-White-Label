/**
 * Module 69422 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69422: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      ChartColorDependentStudyInputNames: () => watchedValue_c,
      InputDisplayFlags: () => watchedValue_o,
      RangeDependentStudyInputNames: () => watchedValue_l,
      areStudyInputsEqual: () => _,
      editableStudyInputs: () => watchedValue_m,
      getInputValue: () => watchedValue_d,
      isStudyInputDependsOnChart: () => watchedValue_f,
      isStudyInputDependsOnChartColors: () => watchedValue_g,
      isStudyInputOptionsInfo: () => watchedValue_u,
      isTimeOrPriceNotHiddenInput: () => watchedValue_p
    });
    var watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r, watchedValue_a, watchedValue_l, watchedValue_c, watchedValue_h = watchedValue_i(82433);

    function watchedValue_d(watchedValue_e) {
      return function(watchedValue_e) {
        return (0, watchedValue_h.default)(watchedValue_e)
      }(watchedValue_e) ? watchedValue_e.watchedValue_v : watchedValue_e
    }

    function watchedValue_u(watchedValue_e) {
      return ["text", "integer", "float", "price", "session", "resolution"].includes(watchedValue_e.type) && watchedValue_e.hasOwnProperty(
        "options")
    }

    function _(watchedValue_e, watchedValue_t, watchedValue_i) {
      for (const watchedValue_s of watchedValue_e)
        if (watchedValue_t[watchedValue_s.id] !== watchedValue_i[watchedValue_s.id]) return !1;
      return !0
    }

    function watchedValue_p(watchedValue_e) {
      return ("time" === watchedValue_e.type || "price" === watchedValue_e.type) && !0 !== watchedValue_e.isHidden
    }

    function watchedValue_m(watchedValue_e) {
      return []
    }

    function watchedValue_g(watchedValue_e) {
      return Object.values(watchedValue_c).map((watchedValue_e => watchedValue_e)).includes(watchedValue_e.id)
    }

    function watchedValue_f(watchedValue_e) {
      return !!watchedValue_g(watchedValue_e) || Object.values(watchedValue_l).map((watchedValue_e => watchedValue_e)).includes(watchedValue_e.id)
    }! function(watchedValue_e) {
      watchedValue_e.Integer = "integer", watchedValue_e.Float = "float", watchedValue_e.Price = "price", watchedValue_e.Bool = "bool", watchedValue_e.Text = "text", watchedValue_e.Symbol =
        "symbol", watchedValue_e.Session = "session", watchedValue_e.Source = "source", watchedValue_e.Resolution = "resolution", watchedValue_e.Time = "time", watchedValue_e.BarTime =
        "bar_time", watchedValue_e.Color = "color", watchedValue_e.Textarea = "text_area"
    }(watchedValue_s || (watchedValue_s = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.None = 0] = "None", watchedValue_e[watchedValue_e.DataWindow = 2] = "DataWindow", watchedValue_e[watchedValue_e.StatusLine = 8] = "StatusLine", watchedValue_e[watchedValue_e.All = 15] =
        "All"
    }(watchedValue_o || (watchedValue_o = {})),
    function(watchedValue_e) {
      watchedValue_e.InitialCapital = "initial_capital", watchedValue_e.Currency = "currency", watchedValue_e.DefaultQTYValue = "default_qty_value", watchedValue_e
        .DefaultQTYType = "default_qty_type", watchedValue_e.Pyramiding = "pyramiding", watchedValue_e.ComissionValue = "commission_value", watchedValue_e
        .ComissionType = "commission_type", watchedValue_e.BacktestFillLimitsAssumtion = "backtest_fill_limits_assumption", watchedValue_e
        .Slippage = "slippage", watchedValue_e.CalcOnOrderFills = "calc_on_order_fills", watchedValue_e.CalcOnEveryTick = "calc_on_every_tick", watchedValue_e
        .MarginLong = "margin_long", watchedValue_e.MarginShort = "margin_short", watchedValue_e.UseBarMagnifier = "use_bar_magnifier", watchedValue_e
        .ProcessOrdersOnClose = "process_orders_on_close", watchedValue_e.FillOrdersOnStandardOHLC = "fill_orders_on_standard_ohlc"
    }(watchedValue_n || (watchedValue_n = {})),
    function(watchedValue_e) {
      watchedValue_e.Fixed = "fixed", watchedValue_e.CashPerOrder = "cash_per_order", watchedValue_e.PercentOfEquity = "percent_of_equity"
    }(watchedValue_r || (watchedValue_r = {})),
    function(watchedValue_e) {
      watchedValue_e.Percent = "percent", watchedValue_e.CashPerContract = "cash_per_contract", watchedValue_e.CashPerOrder = "cash_per_order"
    }(watchedValue_a || (watchedValue_a = {})),
    function(watchedValue_e) {
      watchedValue_e.FirstBar = "first_visible_bar_time", watchedValue_e.LastBar = "last_visible_bar_time", watchedValue_e.Realtime = "subscribeRealtime"
    }(watchedValue_l || (watchedValue_l = {})),
    function(watchedValue_e) {
      watchedValue_e.FgColor = "__chart_fgcolor", watchedValue_e.BgColor = "__chart_bgcolor"
    }(watchedValue_c || (watchedValue_c = {}))