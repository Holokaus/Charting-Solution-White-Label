/**
 * Module 13607 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13607: (e, t, i) => {
    "use strict";
    e = i.nmd(e);
    var s = i(20057).default,
      o = i(90484).default,
      n = i(67563).PriceFormatter;
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

    function m(e, t) {
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
      ], m.prototype.typeFields.options = ["ask", "bid", "lp", "volume"], m.prototype.connect = function(e) {
        this._quoteApi.connect(this.quoteHandler.bind(this))
      }, m.prototype.quoteHandler = function(e) {
        var t = e.method,
          i = e.params;
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
        var e = Object.keys(this._symbol_data);
        e.length && (this._quoteApi.quoteAddSymbols(e), this._delayUpdateFastSymbols()), this.onConnect.fire()
      }, m.prototype.setFields = function() {
        var e = m.prototype.typeFields[this._type];
        e && e.length && this._quoteApi.quoteSetFields(e)
      }, m.prototype.onSymbolData = function(e) {
        try {
          e.status && h.update(e, d, !1)
        } catch (e) {}
        var t = e.symbolname,
          i = this._throttledSymbolData[t];
        _() && (delete e.values.prev_close_price, void 0 !== e.values.regular_close && (e.values.prev_close_price = e
          .values.regular_close)), i || (i = this._throttledSymbolData[t] = {
          fnDispatch: s(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
        }), i.cache ? c(i.cache, e) : i.cache = e, i.fnDispatch(t)
      }, m.prototype._parseUpdateMode = function(e) {
        l(e)
      }, m.prototype.dipatchSymbolData = function(e) {
        var t = this._symbol_data[e],
          i = this._throttledSymbolData[e].cache;
        if (delete this._throttledSymbolData[e].cache, this._symbol_data[e])
          for (var s in c(t, i), t.values && this._parseUpdateMode(t.values), this._subscriptions) {
            var o = this._subscriptions[s];
            o.has(e) && [...o.get(e)].forEach((function(e) {
              e(t, i)
            }))
          }
      }, m.prototype.subscribe = function(e, t, i) {
        this._subscriptions[e] = this._subscriptions[e] || new Map;
        var s = this._subscriptions[e];
        t = [].concat(t);
        var o = [];
        t.forEach((function(e) {
          this._symbol_data[e] ? s && s.has(e) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[
              e] = {
                subscribers_count: 1
              }, o.push(e)), s.has(e) || s.set(e, []), s.get(e).push(i), s.get(e).fast = !0, this._symbol_data[
            e] && this._symbol_data[e].values && i(this._symbol_data[e], this._symbol_data[e])
        }), this), o.length && this._connected && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.unsubscribe = function(e, t, i) {
        t = [].concat(t);
        for (var s = this._subscriptions[e], o = [], n = 0; n < t.length; n++) {
          var r = t[n];
          if (s)
            if (s.has(r) && i) {
              var a = s.get(r).indexOf(i);
              ~a && s.get(r).splice(a, 1), s.get(r).length || s.delete(r)
            } else s.delete(r);
          s && 0 === s.size && delete this._subscriptions[e], this._symbol_data.hasOwnProperty(r) && (s && !s.has(r) &&
            this._symbol_data[r].subscribers_count--, this._symbol_data[r].subscribers_count || (delete this
              ._symbol_data[r], o.push(r)))
        }
        o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(o), this._delayUpdateFastSymbols())
      }, m.prototype.setFastSymbols = function(e, t) {
        if (this._subscriptions[e])
          for (var i = this._subscriptions[e], s = Array.from(i.keys()), o = 0; o < s.length; ++o) {
            var n = s[o];
            i.get(n).fast = -1 !== t.indexOf(n)
          }
        this._delayUpdateFastSymbols()
      }, m.prototype._updateFastSymbols = function() {
        if (this._connected) {
          var e = this._fastSymbols();
          0 === e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(e)
        }
      }, m.prototype._delayUpdateFastSymbols = m.prototype._updateFastSymbols, m.prototype._fastSymbols = function() {
        var e = [];
        for (var t in this._subscriptions)
          for (var i = this._subscriptions[t], s = Array.from(i.keys()), o = 0; o < s.length; ++o) {
            var n = s[o];
            i.get(n).fast && e.push(n)
          }
        return e = r(e)
      }, m.prototype.formatter = function(e, t) {
        var i = this;
        if (this._waitingForFormatters[e]) return this._waitingForFormatters[e];

        function s(e) {
          var i = t && !e.fractional ? 1 : e.minmov;
          return new n({
            priceScale: e.pricescale,
            minMove: i,
            fractional: e.fractional,
            minMove2: e.minmove2
          })
        }
        var o = new Promise((function(t, o) {
          if (i._formatterValuesCache[e]) t(s(i._formatterValuesCache[e]));
          else {
            var n = a.guid();
            i.subscribe(n, [e], (function(r) {
              "error" === r.status && (i._waitingForFormatters[e] = null, o(
                  "Quotes snapshot is not received")),
                function(e) {
                  return e && null != e.pricescale && null != e.minmov
                }(r.values) && (i._waitingForFormatters[e] = null, i._formatterValuesCache[e] = r.values, t(
                  s(r.values)), i.unsubscribe(n, e))
            }))
          }
        }));
        return this._waitingForFormatters[e] = o, o
      }, m.prototype.snapshot = function(e) {
        var t = this;
        if (this._waitingForSnapshot[e]) return this._waitingForSnapshot[e];
        var i = new Promise((function(i, s) {
          if (t._snapshotValuesCache[e]) i(t._snapshotValuesCache[e]);
          else {
            var o = a.guid();
            t.subscribe(o, [e], (function(n) {
              "error" === n.status && (t._waitingForSnapshot[e] = null, s(
                "Quotes snapshot is not received"));
              var r = n.values;
              r && r.minmov && r.pricescale && (t._waitingForSnapshot[e] = null, t._snapshotValuesCache[e] =
                r, i(r), t.unsubscribe(o, e))
            }))
          }
        }));
        return this._waitingForSnapshot[e] = i, i
      }, window.TradingView = window.TradingView || {}, window.TradingView.QuoteSessionMultiplexer = m, e && e
      .exports && (e.exports = m)