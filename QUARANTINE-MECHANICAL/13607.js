/**
 * Module 13607 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13607: (series_e, series_t, series_i) => {
    "use strict";
    series_e = series_i.nmd(series_e);
    var series_s = series_i(20057).default,
      series_o = series_i(90484).default,
      series_n = series_i(67563).PriceFormatter;
    const {
      uniq: series_r
    } = series_i(53470);
    var series_a = series_i(4168);
    const {
      normalizeUpdateMode: series_l
    } = series_i(52706);
    var series_c = series_i(39527).deepExtend;
    const {
      QUOTE_FIELDS_CACHE: series_h,
      QUOTE_FIELDS: series_d
    } = series_i(30947);
    var series_u = series_i(48096).Delegate;
    const {
      getNewPeveCloseMode: _
    } = series_i(98422), {
      QuoteSession: series_p
    } = series_i(76220);

    function series_m(series_e, series_t) {
      this.options = Object.assign({
          throttleTimeout: 125
        }, series_t), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new series_u, this
        .onDisconnect = new series_u, this._quoteApi = new series_p(window.ChartApiInstance), this._type = series_e || "full", this
        ._delayUpdateFastSymbols = series_o(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this
        ._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this
        ._waitingForSnapshot = {}, this.connect()
    }
    series_m.prototype.destroy = function() {
        this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
      }, series_m.prototype.typeFields = {}, series_m.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp",
        "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description",
        "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid",
        "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type",
        "typespecs", "update_mode", "volume", "variable_tick_size", "value_unit_id", "unit_id", "measure"
      ], series_m.prototype.typeFields.simpleDetailed = [].concat(series_m.prototype.typeFields.simple, ["ask", "bid", "fundamentals",
        "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time",
        "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry",
        "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"
      ]), series_m.prototype.typeFields.full = [], series_m.prototype.typeFields.watchlist = [].concat(series_m.prototype.typeFields.simple,
        ["rchp", "rtc", "country_code", "provider_id", "dividends_availability", "financials_availability",
          "earnings_availability"
        ]),
      series_m.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description",
        "local_description", "language", "sector", "type", "typespecs", "industry", "currency_code", "currency_id",
        "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq",
        "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov",
        "minmove2", "pricescale", "volume", "average_volume", "market_cap_calc", "market_cap_basic", "total_revenue",
        "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy",
        "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm", "format", "value_unit_id",
        "unit_id", "measure"
      ], series_m.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid",
        "symbol-primaryname", "type", "typespecs"
      ], series_m.prototype.typeFields.estimates = ["fundamental_data", "type", "typespecs",
        "earnings_per_share_forecast_next_symbol_currency_fq", "earnings_release_next_aligned_date",
        "earnings_release_next_calendar_date", "earnings_release_next_date"
      ], series_m.prototype.typeFields.economic = ["reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id",
        "measure"
      ], series_m.prototype.typeFields.options = ["ask", "bid", "lp", "volume"], series_m.prototype.connect = function(series_e) {
        this._quoteApi.connect(this.quoteHandler.bind(this))
      }, series_m.prototype.quoteHandler = function(series_e) {
        var series_t = series_e.method,
          series_i = series_e.params;
        switch (series_t) {
          case "connected":
            this._connected || (this._connected = !0, this.onConnected());
            break;
          case "quote_list_fields":
            break;
          case "quote_symbol_data":
            this._connected && this.onSymbolData(series_i[0]);
            break;
          case "quote_completed":
            this._connected && this.onSymbolData({
              symbolname: series_i[0],
              complete: performance.now(),
              values: {}
            });
            break;
          case "disconnected":
            this._connected && (this._connected = !1, this.onDisconnect.fire())
        }
      }, series_m.prototype.onConnected = function() {
        this.setFields();
        var series_e = Object.keys(this._symbol_data);
        series_e.length && (this._quoteApi.quoteAddSymbols(series_e), this._delayUpdateFastSymbols()), this.onConnect.fire()
      }, series_m.prototype.setFields = function() {
        var series_e = series_m.prototype.typeFields[this._type];
        series_e && series_e.length && this._quoteApi.quoteSetFields(series_e)
      }, series_m.prototype.onSymbolData = function(series_e) {
        try {
          series_e.status && series_h.update(series_e, series_d, !1)
        } catch (series_e) {}
        var series_t = series_e.symbolname,
          series_i = this._throttledSymbolData[series_t];
        _() && (delete series_e.values.prev_close_price, void 0 !== series_e.values.regular_close && (series_e.values.prev_close_price = series_e
          .values.regular_close)), series_i || (series_i = this._throttledSymbolData[series_t] = {
          fnDispatch: series_s(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
        }), series_i.cache ? series_c(series_i.cache, series_e) : series_i.cache = series_e, series_i.fnDispatch(series_t)
      }, series_m.prototype._parseUpdateMode = function(series_e) {
        series_l(series_e)
      }, series_m.prototype.dipatchSymbolData = function(series_e) {
        var series_t = this._symbol_data[series_e],
          series_i = this._throttledSymbolData[series_e].cache;
        if (delete this._throttledSymbolData[series_e].cache, this._symbol_data[series_e])
          for (var series_s in series_c(series_t, series_i), series_t.values && this._parseUpdateMode(series_t.values), this._subscriptions) {
            var series_o = this._subscriptions[series_s];
            series_o.has(series_e) && [...series_o.get(series_e)].forEach((function(series_e) {
              series_e(series_t, series_i)
            }))
          }
      }, series_m.prototype.subscribe = function(series_e, series_t, series_i) {
        this._subscriptions[series_e] = this._subscriptions[series_e] || new Map;
        var series_s = this._subscriptions[series_e];
        series_t = [].concat(series_t);
        var series_o = [];
        series_t.forEach((function(series_e) {
          this._symbol_data[series_e] ? series_s && series_s.has(series_e) || this._symbol_data[series_e].subscribers_count++ : (this._symbol_data[
              series_e] = {
                subscribers_count: 1
              }, series_o.push(series_e)), series_s.has(series_e) || series_s.set(series_e, []), series_s.get(series_e).push(series_i), series_s.get(series_e).fast = !0, this._symbol_data[
            series_e] && this._symbol_data[series_e].values && series_i(this._symbol_data[series_e], this._symbol_data[series_e])
        }), this), series_o.length && this._connected && (this._quoteApi.quoteAddSymbols(series_o), this._delayUpdateFastSymbols())
      }, series_m.prototype.unsubscribe = function(series_e, series_t, series_i) {
        series_t = [].concat(series_t);
        for (var series_s = this._subscriptions[series_e], series_o = [], series_n = 0; series_n < series_t.length; series_n++) {
          var series_r = series_t[series_n];
          if (series_s)
            if (series_s.has(series_r) && series_i) {
              var series_a = series_s.get(series_r).indexOf(series_i);
              ~series_a && series_s.get(series_r).splice(series_a, 1), series_s.get(series_r).length || series_s.delete(series_r)
            } else series_s.delete(series_r);
          series_s && 0 === series_s.size && delete this._subscriptions[series_e], this._symbol_data.hasOwnProperty(series_r) && (series_s && !series_s.has(series_r) &&
            this._symbol_data[series_r].subscribers_count--, this._symbol_data[series_r].subscribers_count || (delete this
              ._symbol_data[series_r], series_o.push(series_r)))
        }
        series_o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(series_o), this._delayUpdateFastSymbols())
      }, series_m.prototype.setFastSymbols = function(series_e, series_t) {
        if (this._subscriptions[series_e])
          for (var series_i = this._subscriptions[series_e], series_s = Array.from(series_i.keys()), series_o = 0; series_o < series_s.length; ++series_o) {
            var series_n = series_s[series_o];
            series_i.get(series_n).fast = -1 !== series_t.indexOf(series_n)
          }
        this._delayUpdateFastSymbols()
      }, series_m.prototype._updateFastSymbols = function() {
        if (this._connected) {
          var series_e = this._fastSymbols();
          0 === series_e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(series_e)
        }
      }, series_m.prototype._delayUpdateFastSymbols = series_m.prototype._updateFastSymbols, series_m.prototype._fastSymbols = function() {
        var series_e = [];
        for (var series_t in this._subscriptions)
          for (var series_i = this._subscriptions[series_t], series_s = Array.from(series_i.keys()), series_o = 0; series_o < series_s.length; ++series_o) {
            var series_n = series_s[series_o];
            series_i.get(series_n).fast && series_e.push(series_n)
          }
        return series_e = series_r(series_e)
      }, series_m.prototype.formatter = function(series_e, series_t) {
        var series_i = this;
        if (this._waitingForFormatters[series_e]) return this._waitingForFormatters[series_e];

        function series_s(series_e) {
          var series_i = series_t && !series_e.fractional ? 1 : series_e.minmov;
          return new series_n({
            priceScale: series_e.pricescale,
            minMove: series_i,
            fractional: series_e.fractional,
            minMove2: series_e.minmove2
          })
        }
        var series_o = new Promise((function(series_t, series_o) {
          if (series_i._formatterValuesCache[series_e]) series_t(series_s(series_i._formatterValuesCache[series_e]));
          else {
            var series_n = series_a.guid();
            series_i.subscribe(series_n, [series_e], (function(series_r) {
              "error" === series_r.status && (series_i._waitingForFormatters[series_e] = null, series_o(
                  "Quotes snapshot is not received")),
                function(series_e) {
                  return series_e && null != series_e.pricescale && null != series_e.minmov
                }(series_r.values) && (series_i._waitingForFormatters[series_e] = null, series_i._formatterValuesCache[series_e] = series_r.values, series_t(
                  series_s(series_r.values)), series_i.unsubscribe(series_n, series_e))
            }))
          }
        }));
        return this._waitingForFormatters[series_e] = series_o, series_o
      }, series_m.prototype.snapshot = function(series_e) {
        var series_t = this;
        if (this._waitingForSnapshot[series_e]) return this._waitingForSnapshot[series_e];
        var series_i = new Promise((function(series_i, series_s) {
          if (series_t._snapshotValuesCache[series_e]) series_i(series_t._snapshotValuesCache[series_e]);
          else {
            var series_o = series_a.guid();
            series_t.subscribe(series_o, [series_e], (function(series_n) {
              "error" === series_n.status && (series_t._waitingForSnapshot[series_e] = null, series_s(
                "Quotes snapshot is not received"));
              var series_r = series_n.values;
              series_r && series_r.minmov && series_r.pricescale && (series_t._waitingForSnapshot[series_e] = null, series_t._snapshotValuesCache[series_e] =
                series_r, series_i(series_r), series_t.unsubscribe(series_o, series_e))
            }))
          }
        }));
        return this._waitingForSnapshot[series_e] = series_i, series_i
      }, window.TradingView = window.TradingView || {}, window.TradingView.QuoteSessionMultiplexer = series_m, series_e && series_e
      .exports && (series_e.exports = series_m)