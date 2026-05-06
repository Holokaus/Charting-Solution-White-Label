/**
 * Module 13607 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13607: (series_e, series_t, i) => {
    "use strict";
    series_e = i.nmd(series_e);
    var series_s = i(20057).default,
      o = i(90484).default,
      series_n = i(67563).PriceFormatter;
    const {
      uniq: r
    } = i(53470);
    var series_a = i(4168);
    const {
      normalizeUpdateMode: l
    } = i(52706);
    var c = i(39527).deepExtend;
    const {
      QUOTE_FIELDS_CACHE: h,
      QUOTE_FIELDS: d
    } = i(30947);
    var u = i(48096).Delegate;
    const {
      getNewPeveCloseMode: _
    } = i(98422), {
      QuoteSession: p
    } = i(76220);

    function m(series_e, series_t) {
      this.options = Object.assign({
          throttleTimeout: 125
        }, series_t), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new u, this
        .onDisconnect = new u, this._quoteApi = new p(window.ChartApiInstance), this._type = series_e || "full", this
        ._delayUpdateFastSymbols = o(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this
        ._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this
        ._waitingForSnapshot = {}, this.connect()
    }
    m.prototype.destroy = function() {
        this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
      }, m.prototype.typeFields = {}, m.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp",
        "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description",
        "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid",
        "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type",
        "typespecs", "update_mode", "volume", "variable_tick_size", "value_unit_id", "unit_id", "measure"
      ], m.prototype.typeFields.simpleDetailed = [].concat(m.prototype.typeFields.simple, ["ask", "bid", "fundamentals",
        "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time",
        "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry",
        "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"
      ]), m.prototype.typeFields.full = [], m.prototype.typeFields.watchlist = [].concat(m.prototype.typeFields.simple,
        ["rchp", "rtc", "country_code", "provider_id", "dividends_availability", "financials_availability",
          "earnings_availability"
        ]),
      m.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description",
        "local_description", "language", "sector", "type", "typespecs", "industry", "currency_code", "currency_id",
        "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq",
        "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov",
        "minmove2", "pricescale", "volume", "average_volume", "market_cap_calc", "market_cap_basic", "total_revenue",
        "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy",
        "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm", "format", "value_unit_id",
        "unit_id", "measure"
      ], m.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid",
        "symbol-primaryname", "type", "typespecs"
      ], m.prototype.typeFields.estimates = ["fundamental_data", "type", "typespecs",
        "earnings_per_share_forecast_next_symbol_currency_fq", "earnings_release_next_aligned_date",
        "earnings_release_next_calendar_date", "earnings_release_next_date"
      ], m.prototype.typeFields.economic = ["reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id",
        "measure"
      ], m.prototype.typeFields.options = ["ask", "bid", "lp", "volume"], m.prototype.connect = function(series_e) {
        this._quoteApi.connect(this.quoteHandler.bind(this))
      }, m.prototype.quoteHandler = function(series_e) {
        var series_t = series_e.method,
          i = series_e.params;
        switch (series_t) {
          case "connected":
            this._connected || (this._connected = !0, this.onConnected());
            break;
          case "quote_list_fields":
            break;
          case "quote_symbol_data":
            this._connected && this.onSymbolData(i[0]);
            break;
          case "quote_completed":
            this._connected && this.onSymbolData({
              symbolname: i[0],
              complete: performance.now(),
              values: {}
            });
            break;
          case "disconnected":
            this._connected && (this._connected = !1, this.onDisconnect.fire())
        }
      }, m.prototype.onConnected = function() {
        this.setFields();
        var series_e = Object.keys(this._symbol_data);
        series_e.length && (this._quoteApi.quoteAddSymbols(series_e), this._delayUpdateFastSymbols()), this.onConnect.fire()
      }, m.prototype.setFields = function() {
        var series_e = m.prototype.typeFields[this._type];
        series_e && series_e.length && this._quoteApi.quoteSetFields(series_e)
      }, m.prototype.onSymbolData = function(series_e) {
        try {
          series_e.status && h.update(series_e, d, !1)
        } catch (series_e) {}
        var series_t = series_e.symbolname,
          i = this._throttledSymbolData[series_t];
        _() && (delete series_e.values.prev_close_price, void 0 !== series_e.values.regular_close && (series_e.values.prev_close_price = series_e
          .values.regular_close)), i || (i = this._throttledSymbolData[series_t] = {
          fnDispatch: series_s(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
        }), i.cache ? c(i.cache, series_e) : i.cache = series_e, i.fnDispatch(series_t)
      }, m.prototype._parseUpdateMode = function(series_e) {
        l(series_e)
      }, m.prototype.dipatchSymbolData = function(series_e) {
        var series_t = this._symbol_data[series_e],
          i = this._throttledSymbolData[series_e].cache;
        if (delete this._throttledSymbolData[series_e].cache, this._symbol_data[series_e])
          for (var series_s in c(series_t, i), series_t.values && this._parseUpdateMode(series_t.values), this._subscriptions) {
            var o = this._subscriptions[series_s];
            o.has(series_e) && [...o.get(series_e)].forEach((function(series_e) {
              series_e(series_t, i)
            }))
          }
      }, m.prototype.subscribe = function(series_e, series_t, i) {
        this._subscriptions[series_e] = this._subscriptions[series_e] || new Map;
        var series_s = this._subscriptions[series_e];
        series_t = [].concat(series_t);
        var o = [];
        series_t.forEach((function(series_e) {
          this._symbol_data[series_e] ? series_s && series_s.has(series_e) || this._symbol_data[series_e].subscribers_count++ : (this._symbol_data[
              series_e] = {
                subscribers_count: 1
              }, o.push(series_e)), series_s.has(series_e) || series_s.set(series_e, []), series_s.get(series_e).push(i), series_s.get(series_e).fast = !0, this._symbol_data[
            series_e] && this._symbol_data[series_e].values && i(this._symbol_data[series_e], this._symbol_data[series_e])
        }), this), o.length && this._connected && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.unsubscribe = function(series_e, series_t, i) {
        series_t = [].concat(series_t);
        for (var series_s = this._subscriptions[series_e], o = [], series_n = 0; series_n < series_t.length; series_n++) {
          var r = series_t[series_n];
          if (series_s)
            if (series_s.has(r) && i) {
              var series_a = series_s.get(r).indexOf(i);
              ~series_a && series_s.get(r).splice(series_a, 1), series_s.get(r).length || series_s.delete(r)
            } else series_s.delete(r);
          series_s && 0 === series_s.size && delete this._subscriptions[series_e], this._symbol_data.hasOwnProperty(r) && (series_s && !series_s.has(r) &&
            this._symbol_data[r].subscribers_count--, this._symbol_data[r].subscribers_count || (delete this
              ._symbol_data[r], o.push(r)))
        }
        o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.setFastSymbols = function(series_e, series_t) {
        if (this._subscriptions[series_e])
          for (var i = this._subscriptions[series_e], series_s = Array.from(i.keys()), o = 0; o < series_s.length; ++o) {
            var series_n = series_s[o];
            i.get(series_n).fast = -1 !== series_t.indexOf(series_n)
          }
        this._delayUpdateFastSymbols()
      }, m.prototype._updateFastSymbols = function() {
        if (this._connected) {
          var series_e = this._fastSymbols();
          0 === series_e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(series_e)
        }
      }, m.prototype._delayUpdateFastSymbols = m.prototype._updateFastSymbols, m.prototype._fastSymbols = function() {
        var series_e = [];
        for (var series_t in this._subscriptions)
          for (var i = this._subscriptions[series_t], series_s = Array.from(i.keys()), o = 0; o < series_s.length; ++o) {
            var series_n = series_s[o];
            i.get(series_n).fast && series_e.push(series_n)
          }
        return series_e = r(series_e)
      }, m.prototype.formatter = function(series_e, series_t) {
        var i = this;
        if (this._waitingForFormatters[series_e]) return this._waitingForFormatters[series_e];

        function series_s(series_e) {
          var i = series_t && !series_e.fractional ? 1 : series_e.minmov;
          return new series_n({
            priceScale: series_e.pricescale,
            minMove: i,
            fractional: series_e.fractional,
            minMove2: series_e.minmove2
          })
        }
        var o = new Promise((function(series_t, o) {
          if (i._formatterValuesCache[series_e]) series_t(series_s(i._formatterValuesCache[series_e]));
          else {
            var series_n = series_a.guid();
            i.subscribe(series_n, [series_e], (function(r) {
              "error" === r.status && (i._waitingForFormatters[series_e] = null, o(
                  "Quotes snapshot is not received")),
                function(series_e) {
                  return series_e && null != series_e.pricescale && null != series_e.minmov
                }(r.values) && (i._waitingForFormatters[series_e] = null, i._formatterValuesCache[series_e] = r.values, series_t(
                  series_s(r.values)), i.unsubscribe(series_n, series_e))
            }))
          }
        }));
        return this._waitingForFormatters[series_e] = o, o
      }, m.prototype.snapshot = function(series_e) {
        var series_t = this;
        if (this._waitingForSnapshot[series_e]) return this._waitingForSnapshot[series_e];
        var i = new Promise((function(i, series_s) {
          if (series_t._snapshotValuesCache[series_e]) i(series_t._snapshotValuesCache[series_e]);
          else {
            var o = series_a.guid();
            series_t.subscribe(o, [series_e], (function(series_n) {
              "error" === series_n.status && (series_t._waitingForSnapshot[series_e] = null, series_s(
                "Quotes snapshot is not received"));
              var r = series_n.values;
              r && r.minmov && r.pricescale && (series_t._waitingForSnapshot[series_e] = null, series_t._snapshotValuesCache[series_e] =
                r, i(r), series_t.unsubscribe(o, series_e))
            }))
          }
        }));
        return this._waitingForSnapshot[series_e] = i, i
      }, window.TradingView = window.TradingView || {}, window.TradingView.QuoteSessionMultiplexer = m, series_e && series_e
      .exports && (series_e.exports = m)