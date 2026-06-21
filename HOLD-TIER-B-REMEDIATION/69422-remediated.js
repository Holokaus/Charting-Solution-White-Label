/**
 * Module 69422 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

69422: (exports, module, require) => {
    "use strict";
    require.data(module, {
      ChartColorDependentStudyInputNames: () => context,
      InputDisplayFlags: () => result,
      RangeDependentStudyInputNames: () => length,
      areStudyInputsEqual: () => _,
      editableStudyInputs: () => watchedValue_m,
      getInputValue: () => data,
      isStudyInputDependsOnChart: () => func,
      isStudyInputDependsOnChartColors: () => watchedValue_g,
      isStudyInputOptionsInfo: () => utils,
      isTimeOrPriceNotHiddenInput: () => params
    });
    var constants, result, name, config, items, length, context, handler = require(82433);

    function data(exports) {
      return function(exports) {
        return (0, handler.default)(exports)
      }(exports) ? exports.watchedValue_v : exports
    }

    function utils(exports) {
      return ["text", "integer", "float", "price", "session", "resolution"].includes(exports.type) && exports.hasOwnProperty(
        "options")
    }

    function _(exports, module, require) {
      for (const constants of exports)
        if (module[constants.id] !== require[constants.id]) return !1;
      return !0
    }

    function params(exports) {
      return ("time" === exports.type || "price" === exports.type) && !0 !== exports.isHidden
    }

    function watchedValue_m(exports) {
      return []
    }

    function watchedValue_g(exports) {
      return Object.values(context).map((exportstring => exports)).includes(exports.id)
    }

    function func(exports) {
      return !!watchedValue_g(exports) || Object.values(length).map((exportstring => exports)).includes(exports.id)
    }! function(exports) {
      exports.Integer = "integer", exports.Float = "float", exports.Price = "price", exports.Bool = "bool", exports.Text = "text", exports.Symbol =
        "symbol", exports.Session = "session", exports.Source = "source", exports.Resolution = "resolution", exports.Time = "time", exports.BarTime =
        "bar_time", exports.Color = "color", exports.Textarea = "text_area"
    }(constants || (constants = {})),
    function(exports) {
      exports[exports.None = 0] = "None", exports[exports.DataWindow = 2] = "DataWindow", exports[exports.StatusLine = 8] = "StatusLine", exports[exports.All = 15] =
        "All"
    }(result || (result = {})),
    function(exports) {
      exports.InitialCapital = "initial_capital", exports.Currency = "currency", exports.DefaultQTYValue = "default_qty_value", exports
        .DefaultQTYType = "default_qty_type", exports.Pyramiding = "pyramiding", exports.ComissionValue = "commission_value", exports
        .ComissionType = "commission_type", exports.BacktestFillLimitsAssumtion = "backtest_fill_limits_assumption", exports
        .Slippage = "slippage", exports.CalcOnOrderFills = "calc_on_order_fills", exports.CalcOnEveryTick = "calc_on_every_tick", exports
        .MarginLong = "margin_long", exports.MarginShort = "margin_short", exports.UseBarMagnifier = "use_bar_magnifier", exports
        .ProcessOrdersOnClose = "process_orders_on_close", exports.FillOrdersOnStandardOHLC = "fill_orders_on_standard_ohlc"
    }(name || (name = {})),
    function(exports) {
      exports.Fixed = "fixed", exports.CashPerOrder = "cash_per_order", exports.PercentOfEquity = "percent_of_equity"
    }(config || (config = {})),
    function(exports) {
      exports.Percent = "percent", exports.CashPerContract = "cash_per_contract", exports.CashPerOrder = "cash_per_order"
    }(items || (items = {})),
    function(exports) {
      exports.FirstBar = "first_visible_bar_time", exports.LastBar = "last_visible_bar_time", exports.Realtime = "subscribeRealtime"
    }(length || (length = {})),
    function(exports) {
      exports.FgColor = "__chart_fgcolor", exports.BgColor = "__chart_bgcolor"
    }(context || (context = {}))