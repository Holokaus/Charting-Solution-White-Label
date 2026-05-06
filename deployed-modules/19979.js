/**
 * Module 19979 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19979: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      Std: () => watchedValue_h
    });
    var watchedValue_s = watchedValue_i(37236),
      watchedValue_o = watchedValue_i(51101);
    class watchedValue_n {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._timezone = watchedValue_e, this._preMarketSessionSpec = watchedValue_t, this._postMarketSessionSpec = watchedValue_i
      }
      getPreAndPostMarketTimes(watchedValue_e) {
        if (0 === watchedValue_e.length) return {
          preMarket: [],
          postMarket: []
        };
        const watchedValue_t = [],
          watchedValue_i = [];
        let watchedValue_o = null,
          watchedValue_n = null,
          watchedValue_r = watchedValue_e[0],
          watchedValue_a = (0, watchedValue_s.utc_to_cal)(this._timezone, watchedValue_r);
        this._isInPreMarketSession(watchedValue_a) && (watchedValue_n = watchedValue_r), this._isInPostMarketSession(watchedValue_a) && (watchedValue_o = watchedValue_r);
        for (let watchedValue_l = 1; watchedValue_l < watchedValue_e.length; watchedValue_l++) {
          const watchedValue_c = watchedValue_e[watchedValue_l],
            watchedValue_h = (0, watchedValue_s.utc_to_cal)(this._timezone, watchedValue_c);
          null !== watchedValue_o && this._isInPostMarketSession(watchedValue_a) && !this._isInPostMarketSession(watchedValue_h) && (watchedValue_i.push({
              start: watchedValue_o,
              stop: watchedValue_r
            }), watchedValue_o = null), null === watchedValue_n && this._isInPreMarketSession(watchedValue_h) && (watchedValue_n = watchedValue_c), null === watchedValue_o && this
            ._isInPostMarketSession(watchedValue_h) && (watchedValue_o = watchedValue_c), null !== watchedValue_n && this._isInPreMarketSession(watchedValue_a) && !this
            ._isInPreMarketSession(watchedValue_h) && (watchedValue_t.push({
              start: watchedValue_n,
              stop: watchedValue_r
            }), watchedValue_n = null), watchedValue_r = watchedValue_c, watchedValue_a = watchedValue_h
        }
        return null !== watchedValue_n && watchedValue_t.push({
          start: watchedValue_n,
          stop: watchedValue_e[watchedValue_e.length - 1]
        }), null !== watchedValue_o && watchedValue_i.push({
          start: watchedValue_o,
          stop: watchedValue_e[watchedValue_e.length - 1]
        }), {
          preMarket: watchedValue_t,
          postMarket: watchedValue_i
        }
      }
      _isInPreMarketSession(watchedValue_e) {
        if (null === this._preMarketSessionSpec) return !1;
        const watchedValue_t = this._preMarketSessionSpec.getWeekIndex(watchedValue_e);
        return this._anyEntryContains(this._preMarketSessionSpec.getEntriesForWeek(watchedValue_t).list(), watchedValue_e)
      }
      _isInPostMarketSession(watchedValue_e) {
        if (null === this._postMarketSessionSpec) return !1;
        const watchedValue_t = this._postMarketSessionSpec.getWeekIndex(watchedValue_e);
        return this._anyEntryContains(this._postMarketSessionSpec.getEntriesForWeek(watchedValue_t).list(), watchedValue_e)
      }
      _anyEntryContains(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e) return !1;
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_e.length; watchedValue_i++)
          if (watchedValue_e[watchedValue_i].contains(watchedValue_t)) return !0;
        return !1
      }
    }
    var watchedValue_r = watchedValue_i(51829),
      watchedValue_a = watchedValue_i(4659);
    const watchedValue_l = 1e-10,
      watchedValue_c = watchedValue_e => watchedValue_e ? 1 : 0,
      watchedValue_h = {};

    function watchedValue_d(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) {
      let watchedValue_n = watchedValue_o,
        watchedValue_r = 0;
      if (isNaN(watchedValue_e.get(watchedValue_t - 1))) return {
        index: NaN,
        value: NaN
      };
      for (let watchedValue_i = 0; watchedValue_i < watchedValue_t; ++watchedValue_i) watchedValue_s(watchedValue_e.get(watchedValue_i), watchedValue_n) && (watchedValue_r = watchedValue_i, watchedValue_n = watchedValue_e.get(watchedValue_i));
      return {
        index: watchedValue_r,
        value: watchedValue_n
      }
    }
    watchedValue_h.max_series_default_size = 10001, watchedValue_h.watchedValue_n = watchedValue_e => watchedValue_e.symbol.index + 1, watchedValue_h.nz = (watchedValue_e, watchedValue_t = 0) => isFinite(watchedValue_e) ? watchedValue_e : watchedValue_t, watchedValue_h.na =
      function(watchedValue_e) {
        return 0 === arguments.length ? NaN : isNaN(watchedValue_e) ? 1 : 0
      }, watchedValue_h.isZero = watchedValue_e => Math.abs(watchedValue_e) <= 1e-10 ? 1 : 0, watchedValue_h.toBool = watchedValue_e => isFinite(watchedValue_e) && !watchedValue_h.isZero(watchedValue_e), watchedValue_h.eq = (watchedValue_e, watchedValue_t) => watchedValue_h
      .isZero(watchedValue_e - watchedValue_t), watchedValue_h.neq = (watchedValue_e, watchedValue_t) => watchedValue_c(!watchedValue_h.eq(watchedValue_e, watchedValue_t)), watchedValue_h.ge = (watchedValue_e, watchedValue_t) => watchedValue_c(watchedValue_h.isZero(watchedValue_e - watchedValue_t) || watchedValue_e > watchedValue_t), watchedValue_h.gt = (watchedValue_e, watchedValue_t) =>
      watchedValue_c(!watchedValue_h.isZero(watchedValue_e - watchedValue_t) && watchedValue_e > watchedValue_t), watchedValue_h.lt = (watchedValue_e, watchedValue_t) => watchedValue_c(!watchedValue_h.isZero(watchedValue_e - watchedValue_t) && watchedValue_e < watchedValue_t), watchedValue_h.le = (watchedValue_e, watchedValue_t) => watchedValue_c(watchedValue_h.isZero(watchedValue_e - watchedValue_t) ||
        watchedValue_e < watchedValue_t), watchedValue_h.and = (watchedValue_e, watchedValue_t) => isNaN(watchedValue_e) || isNaN(watchedValue_t) ? NaN : watchedValue_h.isZero(watchedValue_e) || watchedValue_h.isZero(watchedValue_t) ? 0 : 1, watchedValue_h.or = (watchedValue_e, watchedValue_t) =>
      isNaN(watchedValue_e) || isNaN(watchedValue_t) ? NaN : watchedValue_h.isZero(watchedValue_e) && watchedValue_h.isZero(watchedValue_t) ? 0 : 1, watchedValue_h.not = watchedValue_e => isNaN(watchedValue_e) ? NaN : watchedValue_h.isZero(watchedValue_e) ? 1 :
      0, watchedValue_h.eps = () => watchedValue_l, watchedValue_h.greaterOrEqual = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_t - watchedValue_e < (watchedValue_i || watchedValue_l), watchedValue_h.lessOrEqual = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_e - watchedValue_t < (watchedValue_i ||
        watchedValue_l), watchedValue_h.equal = (watchedValue_e, watchedValue_t, watchedValue_i) => Math.abs(watchedValue_e - watchedValue_t) < (watchedValue_i || watchedValue_l), watchedValue_h.greater = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_e - watchedValue_t > (watchedValue_i || watchedValue_l), watchedValue_h.less = (watchedValue_e,
        watchedValue_t, watchedValue_i) => watchedValue_t - watchedValue_e > (watchedValue_i || watchedValue_l), watchedValue_h.compare = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_h.equal(watchedValue_e, watchedValue_t, watchedValue_i) ? 0 : watchedValue_h.greater(watchedValue_e, watchedValue_t, watchedValue_i) ? 1 : -1, watchedValue_h.max =
      Math.max, watchedValue_h.min = Math.min, watchedValue_h.pow = Math.pow, watchedValue_h.abs = Math.abs, watchedValue_h.log = Math.log, watchedValue_h.log10 = watchedValue_e => Math.log(watchedValue_e) /
      Math.LN10, watchedValue_h.sqrt = Math.sqrt, watchedValue_h.sign = watchedValue_e => isNaN(watchedValue_e) ? NaN : watchedValue_h.isZero(watchedValue_e) ? 0 : watchedValue_e > 0 ? 1 : -1, watchedValue_h.exp = Math.exp,
      watchedValue_h.sin = Math.sin, watchedValue_h.cos = Math.cos, watchedValue_h.tan = Math.tan, watchedValue_h.asin = Math.asin, watchedValue_h.acos = Math.acos, watchedValue_h.atan = Math.atan,
      watchedValue_h.floor = Math.floor, watchedValue_h.ceil = Math.ceil, watchedValue_h.round = Math.round, watchedValue_h.avg = (...watchedValue_e) => {
        if (2 === watchedValue_e.length) return (watchedValue_e[0] + watchedValue_e[1]) / 2;
        let watchedValue_t = 0;
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_e.length; watchedValue_i++) watchedValue_t += watchedValue_e[watchedValue_i];
        return watchedValue_t / watchedValue_e.length
      }, watchedValue_h.open = watchedValue_e => watchedValue_e.symbol.open, watchedValue_h.high = watchedValue_e => watchedValue_e.symbol.high, watchedValue_h.low = watchedValue_e => watchedValue_e.symbol.low, watchedValue_h.close = watchedValue_e => watchedValue_e.symbol
      .close, watchedValue_h.hl2 = watchedValue_e => (watchedValue_e.symbol.high + watchedValue_e.symbol.low) / 2, watchedValue_h.hlc3 = watchedValue_e => (watchedValue_e.symbol.high + watchedValue_e.symbol.low + watchedValue_e.symbol
        .close) / 3, watchedValue_h.ohlc4 = watchedValue_e => (watchedValue_e.symbol.open + watchedValue_e.symbol.high + watchedValue_e.symbol.low + watchedValue_e.symbol.close) / 4, watchedValue_h.volume = watchedValue_e =>
      watchedValue_e.symbol.volume, watchedValue_h.updatetime = watchedValue_e => watchedValue_e.symbol.updatetime, watchedValue_h.time = watchedValue_e => watchedValue_e.symbol.bartime(), watchedValue_h.period = watchedValue_e => watchedValue_e
      .symbol.period, watchedValue_h.tickerid = watchedValue_e => watchedValue_e.symbol.tickerid, watchedValue_h.currencyCode = watchedValue_e => watchedValue_e.symbol.currencyCode, watchedValue_h.unitId = watchedValue_e =>
      watchedValue_e.symbol.unitId, watchedValue_h.ticker = watchedValue_e => watchedValue_e.symbol.ticker, watchedValue_h.interval = watchedValue_e => watchedValue_e.symbol.interval, watchedValue_h.isdwm = watchedValue_e => watchedValue_e.symbol
      .isdwm(), watchedValue_h.isintraday = watchedValue_e => !watchedValue_e.symbol.isdwm(),
      watchedValue_h.isdaily = watchedValue_e => "D" === watchedValue_e.symbol.resolution, watchedValue_h.isweekly = watchedValue_e => "W" === watchedValue_e.symbol.resolution, watchedValue_h.ismonthly = watchedValue_e =>
      "M" === watchedValue_e.symbol.resolution, watchedValue_h.year = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.YEAR, watchedValue_t), watchedValue_h.month = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e
        .symbol, watchedValue_s.MONTH, watchedValue_t), watchedValue_h.weekofyear = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.WEEK_OF_YEAR, watchedValue_t), watchedValue_h.dayofmonth = (watchedValue_e, watchedValue_t) =>
      watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.DAY_OF_MONTH, watchedValue_t), watchedValue_h.dayofweek = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.DAY_OF_WEEK, watchedValue_t), watchedValue_h.hour =
      (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.HOUR_OF_DAY, watchedValue_t), watchedValue_h.minute = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.MINUTE, watchedValue_t), watchedValue_h
      .second = (watchedValue_e, watchedValue_t) => watchedValue_h.timepart(watchedValue_e.symbol, watchedValue_s.SECOND, watchedValue_t), watchedValue_h.add_days_considering_dst = (watchedValue_e, watchedValue_t, watchedValue_i) => (0, watchedValue_s
        .add_days_considering_dst)((0, watchedValue_s.get_timezone)(watchedValue_e), watchedValue_t, watchedValue_i), watchedValue_h.add_years_considering_dst = (watchedValue_e, watchedValue_t, watchedValue_i) => (0, watchedValue_s
        .add_years_considering_dst)((0, watchedValue_s.get_timezone)(watchedValue_e), watchedValue_t, watchedValue_i), watchedValue_h.selectSessionBreaks = (watchedValue_e, watchedValue_t) => {
        if (watchedValue_h.isdwm(watchedValue_e) || void 0 === watchedValue_e.symbol.session.timezone) return [];
        const watchedValue_i = (0, watchedValue_o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null),
          watchedValue_s = [],
          watchedValue_n = watchedValue_t.length;
        if (watchedValue_i.moveTo(watchedValue_t[watchedValue_n - 1]), 1 === watchedValue_n && watchedValue_i.startOfBar(0) === watchedValue_t[0]) watchedValue_s.push(watchedValue_t[0]);
        else {
          for (let watchedValue_e = watchedValue_n - 2; watchedValue_e >= 0; --watchedValue_e) {
            const watchedValue_o = watchedValue_t[watchedValue_e];
            if (watchedValue_o >= watchedValue_i.startOfBar(0)) continue;
            watchedValue_i.moveTo(watchedValue_o);
            const watchedValue_n = watchedValue_t[watchedValue_e + 1];
            watchedValue_s.push(watchedValue_n)
          }
          watchedValue_s.reverse()
        }
        return watchedValue_s
      }, watchedValue_h.selectPreAndPostMarketTimes = (watchedValue_e, watchedValue_t) => {
        if (watchedValue_h.isdwm(watchedValue_e) || void 0 === watchedValue_e.symbol.session.timezone) return {
          preMarket: [],
          postMarket: []
        };
        return new watchedValue_n(watchedValue_e.symbol.session.timezone, watchedValue_e.symbol.preMarketSubsession ?? null, watchedValue_e.symbol.postMarketSubsession ??
          null).getPreAndPostMarketTimes(watchedValue_t)
      }, watchedValue_h.iff = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_h.not(watchedValue_e) ? watchedValue_i : watchedValue_t, watchedValue_h.rising = (watchedValue_e, watchedValue_t) => {
        for (let watchedValue_i = 1; watchedValue_i < watchedValue_t + 1; ++watchedValue_i)
          if (watchedValue_e.get(watchedValue_i) > watchedValue_e.get(0)) return 0;
        return 1
      }, watchedValue_h.falling = (watchedValue_e, watchedValue_t) => {
        for (let watchedValue_i = 1; watchedValue_i < watchedValue_t + 1; ++watchedValue_i)
          if (watchedValue_e.get(watchedValue_i) < watchedValue_e.get(0)) return 0;
        return 1
      }, watchedValue_h.timepart = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_o = (0, watchedValue_s.utc_to_cal)(watchedValue_e.session.timezone, watchedValue_i || watchedValue_e.bartime());
        return (0, watchedValue_s.get_part)(watchedValue_o, watchedValue_t)
      }, watchedValue_h.rsi = (watchedValue_e, watchedValue_t) => watchedValue_h.isZero(watchedValue_t) ? 100 : watchedValue_h.isZero(watchedValue_e) ? 0 : 100 - 100 / (1 + watchedValue_e / watchedValue_t), watchedValue_h.sum = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_i.new_var(),
          watchedValue_o = watchedValue_h.nz(watchedValue_e.get()) + watchedValue_h.nz(watchedValue_s.get(1)) - watchedValue_h.nz(watchedValue_e.get(watchedValue_t));
        return watchedValue_s.set(watchedValue_o), watchedValue_o
      }, watchedValue_h.sma = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.sum(watchedValue_e, watchedValue_t, watchedValue_i);
        return watchedValue_h.na(watchedValue_e.get(watchedValue_t - 1)) ? NaN : watchedValue_s / watchedValue_t
      }, watchedValue_h.smma = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_i.new_var(watchedValue_e),
          watchedValue_o = watchedValue_h.sma(watchedValue_s, watchedValue_t, watchedValue_i),
          watchedValue_n = watchedValue_i.new_var(),
          watchedValue_r = (watchedValue_n.get(1) * (watchedValue_t - 1) + watchedValue_e) / watchedValue_t;
        return watchedValue_n.set(watchedValue_h.na(watchedValue_n.get(1)) ? watchedValue_o : watchedValue_r), watchedValue_n.get(0)
      }, watchedValue_h.rma = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.sum(watchedValue_e, watchedValue_t, watchedValue_i),
          watchedValue_o = watchedValue_t - 1,
          watchedValue_n = watchedValue_e.get(watchedValue_o),
          watchedValue_r = watchedValue_i.new_var(),
          watchedValue_a = watchedValue_r.get(1),
          watchedValue_l = watchedValue_e.get(),
          watchedValue_c = watchedValue_h.na(watchedValue_n) ? NaN : watchedValue_h.na(watchedValue_a) ? watchedValue_s / watchedValue_t : (watchedValue_l + watchedValue_a * watchedValue_o) / watchedValue_t;
        return watchedValue_r.set(watchedValue_c), watchedValue_c
      }, watchedValue_h.fixnan = (watchedValue_e, watchedValue_t) => {
        const watchedValue_i = watchedValue_t.new_var();
        return isNaN(watchedValue_e) ? watchedValue_i.get(1) : (watchedValue_i.set(watchedValue_e), watchedValue_e)
      }, watchedValue_h.tr = (watchedValue_e, watchedValue_t) => {
        let watchedValue_i = watchedValue_t.new_var(watchedValue_h.close(watchedValue_t)).get(1);
        return watchedValue_e && isNaN(watchedValue_i) && (watchedValue_i = watchedValue_h.close(watchedValue_t)), watchedValue_h.max(watchedValue_h.max(watchedValue_h.high(watchedValue_t) - watchedValue_h.low(watchedValue_t), watchedValue_h.abs(watchedValue_h.high(watchedValue_t) - watchedValue_i)), watchedValue_h.abs(watchedValue_h.low(
          watchedValue_t) - watchedValue_i))
      }, watchedValue_h.atr = (watchedValue_e, watchedValue_t) => {
        const watchedValue_i = watchedValue_t.new_var(watchedValue_h.tr(void 0, watchedValue_t));
        return watchedValue_h.rma(watchedValue_i, watchedValue_e, watchedValue_t)
      }, watchedValue_h.ema = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.sum(watchedValue_e, watchedValue_t, watchedValue_i),
          watchedValue_o = watchedValue_i.new_var(),
          watchedValue_n = watchedValue_e.get(0),
          watchedValue_r = watchedValue_e.get(watchedValue_t - 1),
          watchedValue_a = watchedValue_o.get(1),
          watchedValue_l = watchedValue_h.na(watchedValue_r) ? NaN : watchedValue_h.na(watchedValue_a) ? watchedValue_s / watchedValue_t : 2 * (watchedValue_n - watchedValue_a) / (watchedValue_t + 1) + watchedValue_a;
        return watchedValue_o.set(watchedValue_l), watchedValue_l
      }, watchedValue_h.wma = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        let watchedValue_s = 0;
        for (let watchedValue_i = watchedValue_t = Math.round(watchedValue_t); watchedValue_i >= 0; watchedValue_i--) {
          watchedValue_s += (watchedValue_t - watchedValue_i) * watchedValue_e.get(watchedValue_i)
        }
        return 2 * watchedValue_s / (watchedValue_t * (watchedValue_t + 1))
      }, watchedValue_h.vwma = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_i.new_var(watchedValue_h.volume(watchedValue_i)),
          watchedValue_o = watchedValue_i.new_var(watchedValue_e.get(0) * watchedValue_h.volume(watchedValue_i));
        return watchedValue_h.sma(watchedValue_o, watchedValue_t, watchedValue_i) / watchedValue_h.sma(watchedValue_s, watchedValue_t, watchedValue_i)
      }, watchedValue_h.swma = (watchedValue_e, watchedValue_t) => (watchedValue_e.get(0) + 2 * watchedValue_e.get(1) + 2 * watchedValue_e.get(2) + watchedValue_e.get(3)) / 6, watchedValue_h.supertrend = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.atr(watchedValue_t, watchedValue_i),
          watchedValue_o = watchedValue_i.new_var(watchedValue_s).get(1),
          watchedValue_n = watchedValue_h.hl2(watchedValue_i);
        let watchedValue_r = watchedValue_n + watchedValue_s * watchedValue_e,
          watchedValue_a = watchedValue_n - watchedValue_s * watchedValue_e;
        const watchedValue_l = watchedValue_h.close(watchedValue_i),
          watchedValue_c = watchedValue_i.new_var(watchedValue_l).get(1),
          watchedValue_d = watchedValue_i.new_var(),
          watchedValue_u = watchedValue_h.nz(watchedValue_d.get(1)),
          _ = watchedValue_i.new_var(),
          watchedValue_p = watchedValue_h.nz(_.get(1));
        watchedValue_a = watchedValue_h.gt(watchedValue_a, watchedValue_u) || watchedValue_h.lt(watchedValue_c, watchedValue_u) ? watchedValue_a : watchedValue_u, watchedValue_d.set(watchedValue_a), watchedValue_r = watchedValue_h.lt(watchedValue_r, watchedValue_p) || watchedValue_h.gt(watchedValue_c, watchedValue_p) ? watchedValue_r : watchedValue_p, _.set(watchedValue_r);
        let watchedValue_m = watchedValue_h.na();
        const watchedValue_g = watchedValue_i.new_var(),
          watchedValue_f = watchedValue_g.get(1);
        watchedValue_m = watchedValue_h.na(watchedValue_o) ? 1 : watchedValue_f === watchedValue_p ? watchedValue_l > watchedValue_r ? -1 : 1 : watchedValue_l < watchedValue_a ? 1 : -1;
        const watchedValue_y = -1 === watchedValue_m ? watchedValue_a : watchedValue_r;
        return watchedValue_g.set(watchedValue_y), watchedValue_h.watchedValue_n(watchedValue_i) <= watchedValue_t ? [Number.NaN, 0] : [watchedValue_y, watchedValue_m]
      }, watchedValue_h.lowestbars = (watchedValue_e, watchedValue_t, watchedValue_i) => -watchedValue_d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => watchedValue_h.lt(watchedValue_e, watchedValue_t)), Number.MAX_SAFE_INTEGER).index, watchedValue_h.lowest = (watchedValue_e,
        watchedValue_t, watchedValue_i) => watchedValue_d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => watchedValue_h.lt(watchedValue_e, watchedValue_t)), Number.MAX_SAFE_INTEGER).value, watchedValue_h.highestbars = (watchedValue_e, watchedValue_t, watchedValue_i) => -watchedValue_d(watchedValue_e,
        watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => watchedValue_h.gt(watchedValue_e, watchedValue_t)), Number.MIN_SAFE_INTEGER).index, watchedValue_h.highest = (watchedValue_e, watchedValue_t, watchedValue_i) => watchedValue_d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => watchedValue_h
        .gt(watchedValue_e, watchedValue_t)), Number.MIN_SAFE_INTEGER).value, watchedValue_h.cum = (watchedValue_e, watchedValue_t) => {
        const watchedValue_i = watchedValue_t.new_var(),
          watchedValue_s = watchedValue_h.nz(watchedValue_i.get(1)) + watchedValue_e;
        return watchedValue_i.set(watchedValue_s), watchedValue_s
      }, watchedValue_h.accdist = watchedValue_e => {
        const watchedValue_t = watchedValue_h.high(watchedValue_e),
          watchedValue_i = watchedValue_h.low(watchedValue_e),
          watchedValue_s = watchedValue_h.close(watchedValue_e),
          watchedValue_o = watchedValue_h.volume(watchedValue_e);
        return watchedValue_h.cum(watchedValue_s === watchedValue_t && watchedValue_s === watchedValue_i || watchedValue_t === watchedValue_i ? 0 : watchedValue_o * (2 * watchedValue_s - watchedValue_i - watchedValue_t) / (watchedValue_t - watchedValue_i), watchedValue_e)
      }, watchedValue_h.correlation = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) => {
        const watchedValue_o = watchedValue_h.sma(watchedValue_e, watchedValue_i, watchedValue_s),
          watchedValue_n = watchedValue_h.sma(watchedValue_t, watchedValue_i, watchedValue_s),
          watchedValue_r = watchedValue_s.new_var(watchedValue_e.get() * watchedValue_t.get());
        return (watchedValue_h.sma(watchedValue_r, watchedValue_i, watchedValue_s) - watchedValue_o * watchedValue_n) / Math.sqrt(watchedValue_h.variance2(watchedValue_e, watchedValue_o, watchedValue_i) * watchedValue_h.variance2(watchedValue_t, watchedValue_n, watchedValue_i))
      }, watchedValue_h.stoch = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) => {
        const watchedValue_n = watchedValue_h.highest(watchedValue_t, watchedValue_s, watchedValue_o),
          watchedValue_r = watchedValue_h.lowest(watchedValue_i, watchedValue_s, watchedValue_o);
        return watchedValue_h.fixnan(100 * (watchedValue_e.get() - watchedValue_r) / (watchedValue_n - watchedValue_r), watchedValue_o)
      }, watchedValue_h.tsi = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) => {
        const watchedValue_o = watchedValue_s.new_var(watchedValue_h.change(watchedValue_e)),
          watchedValue_n = watchedValue_s.new_var(watchedValue_h.abs(watchedValue_h.change(watchedValue_e))),
          watchedValue_r = watchedValue_s.new_var(watchedValue_h.ema(watchedValue_o, watchedValue_i, watchedValue_s)),
          watchedValue_a = watchedValue_s.new_var(watchedValue_h.ema(watchedValue_n, watchedValue_i, watchedValue_s));
        return watchedValue_h.ema(watchedValue_r, watchedValue_t, watchedValue_s) / watchedValue_h.ema(watchedValue_a, watchedValue_t, watchedValue_s)
      }, watchedValue_h.cross = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        if (isNaN(watchedValue_e) || isNaN(watchedValue_t)) return !1;
        const watchedValue_s = watchedValue_i.new_var((watchedValue_o = watchedValue_e - watchedValue_t) < 0 ? -1 : 0 === watchedValue_o ? 0 : 1);
        var watchedValue_o;
        return !isNaN(watchedValue_s.get(1)) && watchedValue_s.get(1) !== watchedValue_s.get()
      }, watchedValue_h.linreg = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        let watchedValue_s = 0,
          watchedValue_o = 0,
          watchedValue_n = 0,
          watchedValue_r = 0;
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_t; ++watchedValue_i) {
          const watchedValue_a = watchedValue_e.get(watchedValue_i),
            watchedValue_l = watchedValue_t - 1 - watchedValue_i + 1;
          watchedValue_s += watchedValue_l, watchedValue_o += watchedValue_a, watchedValue_n += watchedValue_l * watchedValue_l, watchedValue_r += watchedValue_a * watchedValue_l
        }
        const watchedValue_a = (watchedValue_t * watchedValue_r - watchedValue_s * watchedValue_o) / (watchedValue_t * watchedValue_n - watchedValue_s * watchedValue_s);
        return watchedValue_o / watchedValue_t - watchedValue_a * watchedValue_s / watchedValue_t + watchedValue_a + watchedValue_a * (watchedValue_t - 1 - watchedValue_i)
      }, watchedValue_h.sar = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) => {
        const watchedValue_o = watchedValue_s.new_var(),
          watchedValue_n = watchedValue_s.new_var(),
          watchedValue_r = watchedValue_s.new_var(),
          watchedValue_a = watchedValue_h.high(watchedValue_s),
          watchedValue_l = watchedValue_h.low(watchedValue_s),
          watchedValue_c = watchedValue_h.close(watchedValue_s),
          watchedValue_d = watchedValue_s.new_var(watchedValue_a),
          watchedValue_u = watchedValue_s.new_var(watchedValue_l),
          _ = watchedValue_s.new_var(watchedValue_c),
          watchedValue_p = watchedValue_s.new_var();
        let watchedValue_m = watchedValue_p.get(1),
          watchedValue_g = watchedValue_n.get(1),
          watchedValue_f = watchedValue_r.get(1);
        watchedValue_n.set(watchedValue_g), watchedValue_r.set(watchedValue_f);
        let watchedValue_y = !1;
        const watchedValue_v = watchedValue_u.get(1),
          S = watchedValue_u.get(2),
          watchedValue_b = watchedValue_d.get(1),
          watchedValue_w = watchedValue_d.get(2),
          C = _.get(),
          T = _.get(1);
        2 === watchedValue_h.watchedValue_n(watchedValue_s) && (watchedValue_h.greater(C, T) ? (watchedValue_o.set(1), watchedValue_r.set(watchedValue_d.get()), watchedValue_m = watchedValue_v, watchedValue_f = watchedValue_d.get()) : (watchedValue_o.set(-1), watchedValue_r.set(watchedValue_u.get()),
          watchedValue_m = watchedValue_b, watchedValue_f = watchedValue_u.get()), watchedValue_y = !0, watchedValue_n.set(watchedValue_e), watchedValue_g = watchedValue_e);
        let P = watchedValue_m + watchedValue_g * (watchedValue_f - watchedValue_m);
        return 1 === watchedValue_o.get() ? watchedValue_h.greater(P, watchedValue_u.get()) && (watchedValue_y = !0, watchedValue_o.set(-1), P = Math.max(watchedValue_d.get(), watchedValue_r.get()), watchedValue_r.set(watchedValue_u
        .get()), watchedValue_n.set(watchedValue_e)) : watchedValue_h.less(P, watchedValue_d.get()) && (watchedValue_y = !0, watchedValue_o.set(1), P = Math.min(watchedValue_u.get(), watchedValue_r.get()), watchedValue_r.set(watchedValue_d.get()),
          watchedValue_n.set(watchedValue_e)), watchedValue_y || (1 === watchedValue_o.get() ? watchedValue_h.greater(watchedValue_d.get(), watchedValue_r.get()) && (watchedValue_r.set(watchedValue_d.get()), watchedValue_n.set(Math.min(watchedValue_n.get() + watchedValue_t,
          watchedValue_i))) : watchedValue_h.less(watchedValue_u.get(), watchedValue_r.get()) && (watchedValue_r.set(watchedValue_u.get()), watchedValue_n.set(Math.min(watchedValue_n.get() + watchedValue_t, watchedValue_i)))), 1 === watchedValue_o.get() ? (P =
          Math.min(P, watchedValue_v), watchedValue_h.watchedValue_n(watchedValue_s) > 2 && (P = Math.min(P, S))) : (P = Math.max(P, watchedValue_b), watchedValue_h.watchedValue_n(watchedValue_s) > 2 && (P = Math.max(P,
          watchedValue_w))), watchedValue_p.set(P), P
      }, watchedValue_h.alma = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) => {
        const watchedValue_o = Math.floor(watchedValue_i * (watchedValue_t - 1)),
          watchedValue_n = watchedValue_t / watchedValue_s * (watchedValue_t / watchedValue_s),
          watchedValue_r = [];
        let watchedValue_a = 0;
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; ++watchedValue_e) {
          const watchedValue_t = Math.exp(-1 * Math.pow(watchedValue_e - watchedValue_o, 2) / (2 * watchedValue_n));
          watchedValue_a += watchedValue_t, watchedValue_r.push(watchedValue_t)
        }
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; ++watchedValue_e) watchedValue_r[watchedValue_e] /= watchedValue_a;
        let watchedValue_l = 0;
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_t; ++watchedValue_i) watchedValue_l += watchedValue_r[watchedValue_i] * watchedValue_e.get(watchedValue_t - watchedValue_i - 1);
        return watchedValue_l
      }, watchedValue_h.change = watchedValue_e => watchedValue_e.get() - watchedValue_e.get(1), watchedValue_h.roc = (watchedValue_e, watchedValue_t) => {
        const watchedValue_i = watchedValue_e.get(watchedValue_t);
        return 100 * (watchedValue_e.get() - watchedValue_i) / watchedValue_i
      }, watchedValue_h.dev = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.sma(watchedValue_e, watchedValue_t, watchedValue_i);
        return watchedValue_h.dev2(watchedValue_e, watchedValue_t, watchedValue_s)
      }, watchedValue_h.dev2 = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        let watchedValue_s = 0;
        for (let watchedValue_o = 0; watchedValue_o < watchedValue_t; watchedValue_o++) {
          const watchedValue_t = watchedValue_e.get(watchedValue_o);
          watchedValue_s += watchedValue_h.abs(watchedValue_t - watchedValue_i)
        }
        return watchedValue_s / watchedValue_t
      }, watchedValue_h.stdev = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.variance(watchedValue_e, watchedValue_t, watchedValue_i);
        return watchedValue_h.sqrt(watchedValue_s)
      }, watchedValue_h.variance = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_h.sma(watchedValue_e, watchedValue_t, watchedValue_i);
        return watchedValue_h.variance2(watchedValue_e, watchedValue_s, watchedValue_t)
      }, watchedValue_h.variance2 = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        let watchedValue_s = 0;
        for (let watchedValue_o = 0; watchedValue_o < watchedValue_i; watchedValue_o++) {
          const watchedValue_i = watchedValue_e.get(watchedValue_o),
            watchedValue_n = watchedValue_h.abs(watchedValue_i - watchedValue_t);
          watchedValue_s += watchedValue_n * watchedValue_n
        }
        return watchedValue_s / watchedValue_i
      }, watchedValue_h.percentrank = (watchedValue_e, watchedValue_t) => {
        if (watchedValue_h.na(watchedValue_e.get(watchedValue_t - 1))) return NaN;
        let watchedValue_i = 0;
        const watchedValue_s = watchedValue_e.get();
        for (let watchedValue_o = 1; watchedValue_o < watchedValue_t; watchedValue_o++) {
          const watchedValue_t = watchedValue_e.get(watchedValue_o);
          watchedValue_h.ge(watchedValue_s, watchedValue_t) && watchedValue_i++
        }
        return 100 * watchedValue_i / watchedValue_t
      }, watchedValue_h.createNewSessionCheck = watchedValue_e => {
        if (void 0 === watchedValue_e.symbol.session.timezone) return () => !1;
        const watchedValue_t = (0, watchedValue_o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null);
        return watchedValue_e => watchedValue_t.indexOfBar(watchedValue_e) === watchedValue_r.SessionStage.POST_SESSION && (watchedValue_t.moveTo(watchedValue_e), !0)
      }, watchedValue_h.createNthBarInSessionCheck = watchedValue_e => {
        if (void 0 === watchedValue_e.symbol.session.timezone) return () => !1;
        const watchedValue_t = (0, watchedValue_o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null);
        return (watchedValue_e, watchedValue_i) => (watchedValue_t.indexOfBar(watchedValue_e) === watchedValue_r.SessionStage.POST_SESSION && watchedValue_t.moveTo(watchedValue_e), watchedValue_t.indexOfBar(watchedValue_e) === watchedValue_i)
      }, watchedValue_h.error = (watchedValue_e, watchedValue_t) => {
        throw new watchedValue_a.StudyError(watchedValue_e, watchedValue_t)
      }, watchedValue_h.dmi = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = watchedValue_i.new_var(watchedValue_h.high(watchedValue_i)),
          watchedValue_o = watchedValue_i.new_var(watchedValue_h.low(watchedValue_i)),
          watchedValue_n = watchedValue_h.change(watchedValue_s),
          watchedValue_r = -watchedValue_h.change(watchedValue_o),
          watchedValue_a = watchedValue_i.new_var(watchedValue_h.na(watchedValue_n) || watchedValue_h.na(watchedValue_r) ? watchedValue_h.na() : watchedValue_h.and(watchedValue_h.gt(watchedValue_n, watchedValue_r), watchedValue_h.gt(watchedValue_n, 0)) ? watchedValue_n : 0),
          watchedValue_l = watchedValue_i.new_var(watchedValue_h.na(watchedValue_r) ? watchedValue_h.na() : watchedValue_h.and(watchedValue_h.gt(watchedValue_r, watchedValue_n), watchedValue_h.gt(watchedValue_r, 0)) ? watchedValue_r : 0),
          watchedValue_c = watchedValue_h.atr(watchedValue_e, watchedValue_i),
          watchedValue_d = watchedValue_h.fixnan(100 * watchedValue_h.rma(watchedValue_a, watchedValue_e, watchedValue_i) / watchedValue_c, watchedValue_i),
          watchedValue_u = watchedValue_h.fixnan(100 * watchedValue_h.rma(watchedValue_l, watchedValue_e, watchedValue_i) / watchedValue_c, watchedValue_i);
        let _ = watchedValue_d + watchedValue_u;
        watchedValue_h.isZero(_) && (_ += 1);
        const watchedValue_p = Math.abs(watchedValue_d - watchedValue_u) / _ * 100,
          watchedValue_m = watchedValue_i.new_var(watchedValue_p),
          watchedValue_g = watchedValue_h.rma(watchedValue_m, watchedValue_t, watchedValue_i),
          watchedValue_f = watchedValue_i.new_var(watchedValue_g);
        return [watchedValue_d, watchedValue_u, watchedValue_p, watchedValue_g, (watchedValue_f.get(0) + watchedValue_f.get(watchedValue_e - 1)) / 2]
      }, watchedValue_h.zigzag = (watchedValue_e, watchedValue_t, watchedValue_i) => new watchedValue_m(watchedValue_e, watchedValue_t, watchedValue_i).lastPrice(), watchedValue_h.zigzagbars = (watchedValue_e, watchedValue_t, watchedValue_i) => {
        const watchedValue_s = new watchedValue_m(watchedValue_e, watchedValue_t, watchedValue_i);
        return -1 === watchedValue_s.lastIndex() ? NaN : watchedValue_s.lastIndex() - watchedValue_h.watchedValue_n(watchedValue_i)
      };
    const watchedValue_u = 0,
      _ = 1;
    class watchedValue_p {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) {
        this._areaRight = watchedValue_e, this._areaLeft = watchedValue_t, this._pivotType = watchedValue_i, this._series = watchedValue_s, this._currentIndex = watchedValue_o
          .new_var(0), this._currentValue = watchedValue_o.new_var(NaN), this._pivotIndex = watchedValue_o.new_var(-1), this._index = watchedValue_h.watchedValue_n(watchedValue_o),
          this._isNewBar = watchedValue_o.symbol.isNewBar;
        const watchedValue_n = this._currentIndex.get(1),
          watchedValue_r = this._currentValue.get(1),
          watchedValue_a = this._pivotIndex.get(1);
        this._index > 1 && (this._currentIndex.set(watchedValue_n), this._currentValue.set(watchedValue_r), this._pivotIndex.set(watchedValue_a))
      }
      isPivotFound() {
        return -1 !== this._pivotIndex.get()
      }
      pivotIndex() {
        return this._pivotIndex.get()
      }
      currentValue() {
        return this._currentValue.get()
      }
      pivotType() {
        return this._pivotType
      }
      reset() {
        this._currentValue.set(NaN), this._currentIndex.set(0), this._pivotIndex.set(-1)
      }
      isRightSideOk(watchedValue_e) {
        return watchedValue_e - this._currentIndex.get() === this._areaRight
      }
      isViolate(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 1 || isNaN(this._currentValue.get())) return !0;
        const watchedValue_i = this._series.get(this._index - watchedValue_e);
        return !!isNaN(watchedValue_i) || (watchedValue_i === this._currentValue.get() ? watchedValue_t : this._pivotType === _ ? watchedValue_i > this._currentValue
        .get() : watchedValue_i < this._currentValue.get())
      }
      processPoint(watchedValue_e) {
        this.isViolate(watchedValue_e, !1) && (this._currentValue.set(this._series.get()), this._currentIndex.set(watchedValue_e))
      }
      isRestartNeeded(watchedValue_e) {
        return watchedValue_e - this._currentIndex.get() > this._areaRight
      }
      update() {
        if (this._isNewBar && this.isPivotFound() && this.reset(), this.processPoint(this._index), this.isRightSideOk(
            this._index)) {
          if (-1 === this._pivotIndex.get()) {
            let watchedValue_e = !0;
            for (let watchedValue_t = 0; watchedValue_t < this._areaLeft; ++watchedValue_t)
              if (this.isViolate(this._currentIndex.get() - 1 - watchedValue_t, !0)) {
                watchedValue_e = !1;
                break
              } watchedValue_e && this._pivotIndex.set(this._currentIndex.get())
          }
        } else - 1 !== this._pivotIndex.get() && this._pivotIndex.set(-1);
        if (this.isRestartNeeded(this._index)) {
          this.reset();
          for (let watchedValue_e = 0; watchedValue_e <= this._areaRight; ++watchedValue_e) this.processPoint(this._index - this._areaRight + watchedValue_e)
        }
      }
    }
    watchedValue_p.LOW = 0, watchedValue_p.HIGH = 1;
    class watchedValue_m {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._deviation = watchedValue_e;
        const watchedValue_s = watchedValue_i.new_var(watchedValue_h.high(watchedValue_i)),
          watchedValue_o = watchedValue_i.new_var(watchedValue_h.low(watchedValue_i));
        watchedValue_s.get(2 * watchedValue_t + 1), watchedValue_o.get(2 * watchedValue_t + 1), this._pivotHigh = new watchedValue_p(watchedValue_t, watchedValue_t, _, watchedValue_s, watchedValue_i), this._pivotLow = new watchedValue_p(watchedValue_t, watchedValue_t, watchedValue_u, watchedValue_o,
            watchedValue_i), this._lastVal = watchedValue_i.new_var(NaN), this._lastIndex = watchedValue_i.new_var(-1), this._lastType = watchedValue_i.new_var(), this
          ._index = watchedValue_h.watchedValue_n(watchedValue_i), this._isBarClosed = watchedValue_i.symbol.isBarClosed;
        const watchedValue_n = this._lastIndex.get(1),
          watchedValue_r = this._lastVal.get(1),
          watchedValue_a = this._lastType.get(1);
        this._index > 1 && this.addPivot(watchedValue_n, watchedValue_r, watchedValue_a), this.processPivot(this._pivotHigh), this.processPivot(this
          ._pivotLow)
      }
      addPivot(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._lastIndex.set(watchedValue_e), this._lastVal.set(watchedValue_t), this._lastType.set(watchedValue_i)
      }
      updatePivot(watchedValue_e, watchedValue_t) {
        this._lastIndex.set(watchedValue_e), this._lastVal.set(watchedValue_t)
      }
      lastPrice() {
        return this._lastVal.get()
      }
      lastIndex() {
        return this._lastIndex.get()
      }
      addPoint(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (isNaN(this._lastVal.get())) return void this.addPivot(watchedValue_e, watchedValue_t, watchedValue_i);
        const watchedValue_s = this._lastVal.get();
        if (this._lastType.get() === watchedValue_i) {
          return void((watchedValue_i === _ ? watchedValue_t > watchedValue_s : watchedValue_t < watchedValue_s) && this.updatePivot(watchedValue_e, watchedValue_t))
        }
        Math.abs(watchedValue_s - watchedValue_t) / watchedValue_t > this._deviation && this.addPivot(watchedValue_e, watchedValue_t, watchedValue_i)
      }
      processPivot(watchedValue_e) {
        watchedValue_e.update(), this._isBarClosed && watchedValue_e.isPivotFound() && this.addPoint(watchedValue_e.pivotIndex(), watchedValue_e.currentValue(), watchedValue_e
          .pivotType())
      }
    }
    watchedValue_h.vwap = (watchedValue_e, watchedValue_t, watchedValue_i) => {
      const watchedValue_s = watchedValue_i.new_var(),
        watchedValue_o = watchedValue_i.new_var();
      return watchedValue_t && (watchedValue_s.reset_hist(), watchedValue_o.reset_hist()), watchedValue_s.set(watchedValue_h.nz(watchedValue_s.get(1)) + watchedValue_e.get(0) * watchedValue_h.volume(watchedValue_i)), watchedValue_o.set(watchedValue_h.nz(watchedValue_o.get(
        1)) + watchedValue_h.volume(watchedValue_i)), watchedValue_s.get(0) / watchedValue_o.get(0)
    }, watchedValue_h.vwapBands = (watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) => {
      const watchedValue_o = watchedValue_s.new_var(),
        watchedValue_n = watchedValue_s.new_var();
      watchedValue_t && (watchedValue_o.reset_hist(), watchedValue_n.reset_hist());
      const watchedValue_r = watchedValue_e.get(0);
      let watchedValue_a = watchedValue_h.volume(watchedValue_s),
        watchedValue_l = watchedValue_r * watchedValue_a;
      watchedValue_l += watchedValue_h.nz(watchedValue_o.get(1)), watchedValue_a += watchedValue_h.nz(watchedValue_n.get(1)), watchedValue_o.set(watchedValue_l), watchedValue_n.set(watchedValue_a);
      const watchedValue_c = watchedValue_l / watchedValue_a,
        watchedValue_d = watchedValue_s.new_var();
      watchedValue_t && watchedValue_d.reset_hist();
      let watchedValue_u = watchedValue_h.volume(watchedValue_s) * watchedValue_h.pow(watchedValue_r, 2);
      watchedValue_u += watchedValue_h.nz(watchedValue_d.get(1)), watchedValue_d.set(watchedValue_u);
      const _ = watchedValue_h.max(watchedValue_u / watchedValue_a - watchedValue_h.pow(watchedValue_c, 2), 0),
        watchedValue_p = Math.sqrt(_);
      return [watchedValue_c, watchedValue_c + watchedValue_p * watchedValue_i, watchedValue_c - watchedValue_p * watchedValue_i]
    }