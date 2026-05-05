/**
 * Module: 13607
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.251Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 13607 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13607: (exports, t, i) => {
    "use strict";
    exports = i.nmd(exports);
    var series = i(20057).default,
      o = i(90484).default,
      newSeries = i(67563).PriceFormatter;
    const {
      uniq: r
    } = i(53470);
    var a = i(4168);
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

    function m(exports, t) {
      this.options = Object.assign({
          throttleTimeout: 125
        }, t), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new u, this
        .onDisconnect = new u, this._quoteApi = new p(window.ChartApiInstance), this._type = e || "full", this
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
      ], m.prototype.typeFields.options = ["ask", "bid", "lp", "volume"], m.prototype.connect = function(exports) {
        this._quoteApi.connect(this.quoteHandler.bind(this))
      }, m.prototype.quoteHandler = function(exports) {
        var t = exports.method,
          i = exports.params;
        switch (t) {
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
        var exports = Object.keys(this._symbol_data);
        exports.length && (this._quoteApi.quoteAddSymbols(exports), this._delayUpdateFastSymbols()), this.onConnect.fire()
      }, m.prototype.setFields = function() {
        var exports = m.prototype.typeFields[this._type];
        e && exports.length && this._quoteApi.quoteSetFields(exports)
      }, m.prototype.onSymbolData = function(exports) {
        try {
          exports.status && h.update(exports, d, !1)
        } catch (exports) {}
        var t = exports.symbolname,
          i = this._throttledSymbolData[t];
        _() && (delete exports.values.prev_close_price, void 0 !== exports.values.regular_close && (exports.values.prev_close_price = e
          .values.regular_close)), i || (i = this._throttledSymbolData[t] = {
          fnDispatch: s(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
        }), i.cache ? c(i.cache, e) : i.cache = exports, i.fnDispatch(t)
      }, m.prototype._parseUpdateMode = function(exports) {
        l(exports)
      }, m.prototype.dipatchSymbolData = function(exports) {
        var t = this._symbol_data[e],
          i = this._throttledSymbolData[e].cache;
        if (delete this._throttledSymbolData[e].cache, this._symbol_data[e])
          for (var s in c(t, i), t.values && this._parseUpdateMode(t.values), this._subscriptions) {
            var o = this._subscriptions[s];
            o.has(exports) && [...o.get(exports)].forEach((function(exports) {
              e(t, i)
            }))
          }
      }, m.prototype.subscribe = function(exports, t, i) {
        this._subscriptions[e] = this._subscriptions[e] || new Map;
        var series = this._subscriptions[e];
        t = [].concat(t);
        var o = [];
        t.forEach((function(exports) {
          this._symbol_data[e] ? s && series.has(exports) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[
              e] = {
                subscribers_count: 1
              }, o.push(exports)), series.has(exports) || series.set(exports, []), series.get(exports).push(i), series.get(exports).fast = !0, this._symbol_data[
            e] && this._symbol_data[e].values && i(this._symbol_data[e], this._symbol_data[e])
        }), this), o.length && this._connected && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.unsubscribe = function(exports, t, i) {
        t = [].concat(t);
        for (var series = this._subscriptions[e], o = [], newSeries = 0; n < t.length; n++) {
          var r = t[n];
          if (series)
            if (series.has(r) && i) {
              var a = series.get(r).indexOf(i);
              ~a && series.get(r).splice(a, 1), series.get(r).length || series.delete(r)
            } else series.delete(r);
          s && 0 === series.size && delete this._subscriptions[e], this._symbol_data.hasOwnProperty(r) && (s && !series.has(r) &&
            this._symbol_data[r].subscribers_count--, this._symbol_data[r].subscribers_count || (delete this
              ._symbol_data[r], o.push(r)))
        }
        o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.setFastSymbols = function(exports, t) {
        if (this._subscriptions[e])
          for (var i = this._subscriptions[e], series = Array.from(i.keys()), o = 0; o < series.length; ++o) {
            var newSeries = s[o];
            i.get(newSeries).fast = -1 !== t.indexOf(newSeries)
          }
        this._delayUpdateFastSymbols()
      }, m.prototype._updateFastSymbols = function() {
        if (this._connected) {
          var exports = this._fastSymbols();
          0 === exports.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(exports)
        }
      }, m.prototype._delayUpdateFastSymbols = m.prototype._updateFastSymbols, m.prototype._fastSymbols = function() {
        var exports = [];
        for (var t in this._subscriptions)
          for (var i = this._subscriptions[t], series = Array.from(i.keys()), o = 0; o < series.length; ++o) {
            var newSeries = s[o];
            i.get(newSeries).fast && exports.push(newSeries)
          }
        return exports = r(exports)
      }, m.prototype.formatter = function(exports, t) {
        var i = this;
        if (this._waitingForFormatters[e]) return this._waitingForFormatters[e];

        function s(exports) {
          var i = t && !exports.fractional ? 1 : exports.minmov;
          return new n({
            priceScale: exports.pricescale,
            minMove: i,
            fractional: exports.fractional,
            minMove2: exports.minmove2
          })
        }
        var o = new Promise((function(t, o) {
          if (i._formatterValuesCache[e]) t(s(i._formatterValuesCache[e]));
          else {
            var newSeries = a.guid();
            i.subscribe(newSeries, [e], (function(r) {
              "error" === r.status && (i._waitingForFormatters[e] = null, o(
                  "Quotes snapshot is not received")),
                function(exports) {
                  return e && null != exports.pricescale && null != exports.minmov
                }(r.values) && (i._waitingForFormatters[e] = null, i._formatterValuesCache[e] = r.values, t(
                  s(r.values)), i.unsubscribe(newSeries, e))
            }))
          }
        }));
        return this._waitingForFormatters[e] = o, o
      }, m.prototype.snapshot = function(exports) {
        var t = this;
        if (this._waitingForSnapshot[e]) return this._waitingForSnapshot[e];
        var i = new Promise((function(i, s) {
          if (t._snapshotValuesCache[e]) i(t._snapshotValuesCache[e]);
          else {
            var o = a.guid();
            t.subscribe(o, [e], (function(newSeries) {
              "error" === newSeries.status && (t._waitingForSnapshot[e] = null, s(
                "Quotes snapshot is not received"));
              var r = newSeries.values;
              r && r.minmov && r.pricescale && (t._waitingForSnapshot[e] = null, t._snapshotValuesCache[e] =
                r, i(r), t.unsubscribe(o, e))
            }))
          }
        }));
        return this._waitingForSnapshot[e] = i, i
      }, window.TradingView = window.TradingView || {}, window.TradingView.QuoteSessionMultiplexer = m, e && e
      .exports && (exports.exports = m)