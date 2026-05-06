/**
 * Module 19979 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19979: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      Std: () => h
    });
    var watchedValue_s = i(37236),
      o = i(51101);
    class watchedValue_n {
      constructor(watchedValue_e, watchedValue_t, i) {
        this._timezone = watchedValue_e, this._preMarketSessionSpec = watchedValue_t, this._postMarketSessionSpec = i
      }
      getPreAndPostMarketTimes(watchedValue_e) {
        if (0 === watchedValue_e.length) return {
          preMarket: [],
          postMarket: []
        };
        const watchedValue_t = [],
          i = [];
        let o = null,
          watchedValue_n = null,
          r = watchedValue_e[0],
          watchedValue_a = (0, watchedValue_s.utc_to_cal)(this._timezone, r);
        this._isInPreMarketSession(watchedValue_a) && (watchedValue_n = r), this._isInPostMarketSession(watchedValue_a) && (o = r);
        for (let l = 1; l < watchedValue_e.length; l++) {
          const c = watchedValue_e[l],
            h = (0, watchedValue_s.utc_to_cal)(this._timezone, c);
          null !== o && this._isInPostMarketSession(watchedValue_a) && !this._isInPostMarketSession(h) && (i.push({
              start: o,
              stop: r
            }), o = null), null === watchedValue_n && this._isInPreMarketSession(h) && (watchedValue_n = c), null === o && this
            ._isInPostMarketSession(h) && (o = c), null !== watchedValue_n && this._isInPreMarketSession(watchedValue_a) && !this
            ._isInPreMarketSession(h) && (watchedValue_t.push({
              start: watchedValue_n,
              stop: r
            }), watchedValue_n = null), r = c, watchedValue_a = h
        }
        return null !== watchedValue_n && watchedValue_t.push({
          start: watchedValue_n,
          stop: watchedValue_e[watchedValue_e.length - 1]
        }), null !== o && i.push({
          start: o,
          stop: watchedValue_e[watchedValue_e.length - 1]
        }), {
          preMarket: watchedValue_t,
          postMarket: i
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
        for (let i = 0; i < watchedValue_e.length; i++)
          if (watchedValue_e[i].contains(watchedValue_t)) return !0;
        return !1
      }
    }
    var r = i(51829),
      watchedValue_a = i(4659);
    const l = 1e-10,
      c = watchedValue_e => watchedValue_e ? 1 : 0,
      h = {};

    function d(watchedValue_e, watchedValue_t, i, watchedValue_s, o) {
      let watchedValue_n = o,
        r = 0;
      if (isNaN(watchedValue_e.get(watchedValue_t - 1))) return {
        index: NaN,
        value: NaN
      };
      for (let i = 0; i < watchedValue_t; ++i) watchedValue_s(watchedValue_e.get(i), watchedValue_n) && (r = i, watchedValue_n = watchedValue_e.get(i));
      return {
        index: r,
        value: watchedValue_n
      }
    }
    h.max_series_default_size = 10001, h.watchedValue_n = watchedValue_e => watchedValue_e.symbol.index + 1, h.nz = (watchedValue_e, watchedValue_t = 0) => isFinite(watchedValue_e) ? watchedValue_e : watchedValue_t, h.na =
      function(watchedValue_e) {
        return 0 === arguments.length ? NaN : isNaN(watchedValue_e) ? 1 : 0
      }, h.isZero = watchedValue_e => Math.abs(watchedValue_e) <= 1e-10 ? 1 : 0, h.toBool = watchedValue_e => isFinite(watchedValue_e) && !h.isZero(watchedValue_e), h.eq = (watchedValue_e, watchedValue_t) => h
      .isZero(watchedValue_e - watchedValue_t), h.neq = (watchedValue_e, watchedValue_t) => c(!h.eq(watchedValue_e, watchedValue_t)), h.ge = (watchedValue_e, watchedValue_t) => c(h.isZero(watchedValue_e - watchedValue_t) || watchedValue_e > watchedValue_t), h.gt = (watchedValue_e, watchedValue_t) =>
      c(!h.isZero(watchedValue_e - watchedValue_t) && watchedValue_e > watchedValue_t), h.lt = (watchedValue_e, watchedValue_t) => c(!h.isZero(watchedValue_e - watchedValue_t) && watchedValue_e < watchedValue_t), h.le = (watchedValue_e, watchedValue_t) => c(h.isZero(watchedValue_e - watchedValue_t) ||
        watchedValue_e < watchedValue_t), h.and = (watchedValue_e, watchedValue_t) => isNaN(watchedValue_e) || isNaN(watchedValue_t) ? NaN : h.isZero(watchedValue_e) || h.isZero(watchedValue_t) ? 0 : 1, h.or = (watchedValue_e, watchedValue_t) =>
      isNaN(watchedValue_e) || isNaN(watchedValue_t) ? NaN : h.isZero(watchedValue_e) && h.isZero(watchedValue_t) ? 0 : 1, h.not = watchedValue_e => isNaN(watchedValue_e) ? NaN : h.isZero(watchedValue_e) ? 1 :
      0, h.eps = () => l, h.greaterOrEqual = (watchedValue_e, watchedValue_t, i) => watchedValue_t - watchedValue_e < (i || l), h.lessOrEqual = (watchedValue_e, watchedValue_t, i) => watchedValue_e - watchedValue_t < (i ||
        l), h.equal = (watchedValue_e, watchedValue_t, i) => Math.abs(watchedValue_e - watchedValue_t) < (i || l), h.greater = (watchedValue_e, watchedValue_t, i) => watchedValue_e - watchedValue_t > (i || l), h.less = (watchedValue_e,
        watchedValue_t, i) => watchedValue_t - watchedValue_e > (i || l), h.compare = (watchedValue_e, watchedValue_t, i) => h.equal(watchedValue_e, watchedValue_t, i) ? 0 : h.greater(watchedValue_e, watchedValue_t, i) ? 1 : -1, h.max =
      Math.max, h.min = Math.min, h.pow = Math.pow, h.abs = Math.abs, h.log = Math.log, h.log10 = watchedValue_e => Math.log(watchedValue_e) /
      Math.LN10, h.sqrt = Math.sqrt, h.sign = watchedValue_e => isNaN(watchedValue_e) ? NaN : h.isZero(watchedValue_e) ? 0 : watchedValue_e > 0 ? 1 : -1, h.exp = Math.exp,
      h.sin = Math.sin, h.cos = Math.cos, h.tan = Math.tan, h.asin = Math.asin, h.acos = Math.acos, h.atan = Math.atan,
      h.floor = Math.floor, h.ceil = Math.ceil, h.round = Math.round, h.avg = (...watchedValue_e) => {
        if (2 === watchedValue_e.length) return (watchedValue_e[0] + watchedValue_e[1]) / 2;
        let watchedValue_t = 0;
        for (let i = 0; i < watchedValue_e.length; i++) watchedValue_t += watchedValue_e[i];
        return watchedValue_t / watchedValue_e.length
      }, h.open = watchedValue_e => watchedValue_e.symbol.open, h.high = watchedValue_e => watchedValue_e.symbol.high, h.low = watchedValue_e => watchedValue_e.symbol.low, h.close = watchedValue_e => watchedValue_e.symbol
      .close, h.hl2 = watchedValue_e => (watchedValue_e.symbol.high + watchedValue_e.symbol.low) / 2, h.hlc3 = watchedValue_e => (watchedValue_e.symbol.high + watchedValue_e.symbol.low + watchedValue_e.symbol
        .close) / 3, h.ohlc4 = watchedValue_e => (watchedValue_e.symbol.open + watchedValue_e.symbol.high + watchedValue_e.symbol.low + watchedValue_e.symbol.close) / 4, h.volume = watchedValue_e =>
      watchedValue_e.symbol.volume, h.updatetime = watchedValue_e => watchedValue_e.symbol.updatetime, h.time = watchedValue_e => watchedValue_e.symbol.bartime(), h.period = watchedValue_e => watchedValue_e
      .symbol.period, h.tickerid = watchedValue_e => watchedValue_e.symbol.tickerid, h.currencyCode = watchedValue_e => watchedValue_e.symbol.currencyCode, h.unitId = watchedValue_e =>
      watchedValue_e.symbol.unitId, h.ticker = watchedValue_e => watchedValue_e.symbol.ticker, h.interval = watchedValue_e => watchedValue_e.symbol.interval, h.isdwm = watchedValue_e => watchedValue_e.symbol
      .isdwm(), h.isintraday = watchedValue_e => !watchedValue_e.symbol.isdwm(),
      h.isdaily = watchedValue_e => "D" === watchedValue_e.symbol.resolution, h.isweekly = watchedValue_e => "W" === watchedValue_e.symbol.resolution, h.ismonthly = watchedValue_e =>
      "M" === watchedValue_e.symbol.resolution, h.year = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.YEAR, watchedValue_t), h.month = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e
        .symbol, watchedValue_s.MONTH, watchedValue_t), h.weekofyear = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.WEEK_OF_YEAR, watchedValue_t), h.dayofmonth = (watchedValue_e, watchedValue_t) =>
      h.timepart(watchedValue_e.symbol, watchedValue_s.DAY_OF_MONTH, watchedValue_t), h.dayofweek = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.DAY_OF_WEEK, watchedValue_t), h.hour =
      (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.HOUR_OF_DAY, watchedValue_t), h.minute = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.MINUTE, watchedValue_t), h
      .second = (watchedValue_e, watchedValue_t) => h.timepart(watchedValue_e.symbol, watchedValue_s.SECOND, watchedValue_t), h.add_days_considering_dst = (watchedValue_e, watchedValue_t, i) => (0, watchedValue_s
        .add_days_considering_dst)((0, watchedValue_s.get_timezone)(watchedValue_e), watchedValue_t, i), h.add_years_considering_dst = (watchedValue_e, watchedValue_t, i) => (0, watchedValue_s
        .add_years_considering_dst)((0, watchedValue_s.get_timezone)(watchedValue_e), watchedValue_t, i), h.selectSessionBreaks = (watchedValue_e, watchedValue_t) => {
        if (h.isdwm(watchedValue_e) || void 0 === watchedValue_e.symbol.session.timezone) return [];
        const i = (0, o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null),
          watchedValue_s = [],
          watchedValue_n = watchedValue_t.length;
        if (i.moveTo(watchedValue_t[watchedValue_n - 1]), 1 === watchedValue_n && i.startOfBar(0) === watchedValue_t[0]) watchedValue_s.push(watchedValue_t[0]);
        else {
          for (let watchedValue_e = watchedValue_n - 2; watchedValue_e >= 0; --watchedValue_e) {
            const o = watchedValue_t[watchedValue_e];
            if (o >= i.startOfBar(0)) continue;
            i.moveTo(o);
            const watchedValue_n = watchedValue_t[watchedValue_e + 1];
            watchedValue_s.push(watchedValue_n)
          }
          watchedValue_s.reverse()
        }
        return watchedValue_s
      }, h.selectPreAndPostMarketTimes = (watchedValue_e, watchedValue_t) => {
        if (h.isdwm(watchedValue_e) || void 0 === watchedValue_e.symbol.session.timezone) return {
          preMarket: [],
          postMarket: []
        };
        return new watchedValue_n(watchedValue_e.symbol.session.timezone, watchedValue_e.symbol.preMarketSubsession ?? null, watchedValue_e.symbol.postMarketSubsession ??
          null).getPreAndPostMarketTimes(watchedValue_t)
      }, h.iff = (watchedValue_e, watchedValue_t, i) => h.not(watchedValue_e) ? i : watchedValue_t, h.rising = (watchedValue_e, watchedValue_t) => {
        for (let i = 1; i < watchedValue_t + 1; ++i)
          if (watchedValue_e.get(i) > watchedValue_e.get(0)) return 0;
        return 1
      }, h.falling = (watchedValue_e, watchedValue_t) => {
        for (let i = 1; i < watchedValue_t + 1; ++i)
          if (watchedValue_e.get(i) < watchedValue_e.get(0)) return 0;
        return 1
      }, h.timepart = (watchedValue_e, watchedValue_t, i) => {
        const o = (0, watchedValue_s.utc_to_cal)(watchedValue_e.session.timezone, i || watchedValue_e.bartime());
        return (0, watchedValue_s.get_part)(o, watchedValue_t)
      }, h.rsi = (watchedValue_e, watchedValue_t) => h.isZero(watchedValue_t) ? 100 : h.isZero(watchedValue_e) ? 0 : 100 - 100 / (1 + watchedValue_e / watchedValue_t), h.sum = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = i.new_var(),
          o = h.nz(watchedValue_e.get()) + h.nz(watchedValue_s.get(1)) - h.nz(watchedValue_e.get(watchedValue_t));
        return watchedValue_s.set(o), o
      }, h.sma = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.sum(watchedValue_e, watchedValue_t, i);
        return h.na(watchedValue_e.get(watchedValue_t - 1)) ? NaN : watchedValue_s / watchedValue_t
      }, h.smma = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = i.new_var(watchedValue_e),
          o = h.sma(watchedValue_s, watchedValue_t, i),
          watchedValue_n = i.new_var(),
          r = (watchedValue_n.get(1) * (watchedValue_t - 1) + watchedValue_e) / watchedValue_t;
        return watchedValue_n.set(h.na(watchedValue_n.get(1)) ? o : r), watchedValue_n.get(0)
      }, h.rma = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.sum(watchedValue_e, watchedValue_t, i),
          o = watchedValue_t - 1,
          watchedValue_n = watchedValue_e.get(o),
          r = i.new_var(),
          watchedValue_a = r.get(1),
          l = watchedValue_e.get(),
          c = h.na(watchedValue_n) ? NaN : h.na(watchedValue_a) ? watchedValue_s / watchedValue_t : (l + watchedValue_a * o) / watchedValue_t;
        return r.set(c), c
      }, h.fixnan = (watchedValue_e, watchedValue_t) => {
        const i = watchedValue_t.new_var();
        return isNaN(watchedValue_e) ? i.get(1) : (i.set(watchedValue_e), watchedValue_e)
      }, h.tr = (watchedValue_e, watchedValue_t) => {
        let i = watchedValue_t.new_var(h.close(watchedValue_t)).get(1);
        return watchedValue_e && isNaN(i) && (i = h.close(watchedValue_t)), h.max(h.max(h.high(watchedValue_t) - h.low(watchedValue_t), h.abs(h.high(watchedValue_t) - i)), h.abs(h.low(
          watchedValue_t) - i))
      }, h.atr = (watchedValue_e, watchedValue_t) => {
        const i = watchedValue_t.new_var(h.tr(void 0, watchedValue_t));
        return h.rma(i, watchedValue_e, watchedValue_t)
      }, h.ema = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.sum(watchedValue_e, watchedValue_t, i),
          o = i.new_var(),
          watchedValue_n = watchedValue_e.get(0),
          r = watchedValue_e.get(watchedValue_t - 1),
          watchedValue_a = o.get(1),
          l = h.na(r) ? NaN : h.na(watchedValue_a) ? watchedValue_s / watchedValue_t : 2 * (watchedValue_n - watchedValue_a) / (watchedValue_t + 1) + watchedValue_a;
        return o.set(l), l
      }, h.wma = (watchedValue_e, watchedValue_t, i) => {
        let watchedValue_s = 0;
        for (let i = watchedValue_t = Math.round(watchedValue_t); i >= 0; i--) {
          watchedValue_s += (watchedValue_t - i) * watchedValue_e.get(i)
        }
        return 2 * watchedValue_s / (watchedValue_t * (watchedValue_t + 1))
      }, h.vwma = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = i.new_var(h.volume(i)),
          o = i.new_var(watchedValue_e.get(0) * h.volume(i));
        return h.sma(o, watchedValue_t, i) / h.sma(watchedValue_s, watchedValue_t, i)
      }, h.swma = (watchedValue_e, watchedValue_t) => (watchedValue_e.get(0) + 2 * watchedValue_e.get(1) + 2 * watchedValue_e.get(2) + watchedValue_e.get(3)) / 6, h.supertrend = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.atr(watchedValue_t, i),
          o = i.new_var(watchedValue_s).get(1),
          watchedValue_n = h.hl2(i);
        let r = watchedValue_n + watchedValue_s * watchedValue_e,
          watchedValue_a = watchedValue_n - watchedValue_s * watchedValue_e;
        const l = h.close(i),
          c = i.new_var(l).get(1),
          d = i.new_var(),
          u = h.nz(d.get(1)),
          _ = i.new_var(),
          p = h.nz(_.get(1));
        watchedValue_a = h.gt(watchedValue_a, u) || h.lt(c, u) ? watchedValue_a : u, d.set(watchedValue_a), r = h.lt(r, p) || h.gt(c, p) ? r : p, _.set(r);
        let m = h.na();
        const g = i.new_var(),
          f = g.get(1);
        m = h.na(o) ? 1 : f === p ? l > r ? -1 : 1 : l < watchedValue_a ? 1 : -1;
        const y = -1 === m ? watchedValue_a : r;
        return g.set(y), h.watchedValue_n(i) <= watchedValue_t ? [Number.NaN, 0] : [y, m]
      }, h.lowestbars = (watchedValue_e, watchedValue_t, i) => -d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => h.lt(watchedValue_e, watchedValue_t)), Number.MAX_SAFE_INTEGER).index, h.lowest = (watchedValue_e,
        watchedValue_t, i) => d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => h.lt(watchedValue_e, watchedValue_t)), Number.MAX_SAFE_INTEGER).value, h.highestbars = (watchedValue_e, watchedValue_t, i) => -d(watchedValue_e,
        watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => h.gt(watchedValue_e, watchedValue_t)), Number.MIN_SAFE_INTEGER).index, h.highest = (watchedValue_e, watchedValue_t, i) => d(watchedValue_e, watchedValue_t, 0, ((watchedValue_e, watchedValue_t) => h
        .gt(watchedValue_e, watchedValue_t)), Number.MIN_SAFE_INTEGER).value, h.cum = (watchedValue_e, watchedValue_t) => {
        const i = watchedValue_t.new_var(),
          watchedValue_s = h.nz(i.get(1)) + watchedValue_e;
        return i.set(watchedValue_s), watchedValue_s
      }, h.accdist = watchedValue_e => {
        const watchedValue_t = h.high(watchedValue_e),
          i = h.low(watchedValue_e),
          watchedValue_s = h.close(watchedValue_e),
          o = h.volume(watchedValue_e);
        return h.cum(watchedValue_s === watchedValue_t && watchedValue_s === i || watchedValue_t === i ? 0 : o * (2 * watchedValue_s - i - watchedValue_t) / (watchedValue_t - i), watchedValue_e)
      }, h.correlation = (watchedValue_e, watchedValue_t, i, watchedValue_s) => {
        const o = h.sma(watchedValue_e, i, watchedValue_s),
          watchedValue_n = h.sma(watchedValue_t, i, watchedValue_s),
          r = watchedValue_s.new_var(watchedValue_e.get() * watchedValue_t.get());
        return (h.sma(r, i, watchedValue_s) - o * watchedValue_n) / Math.sqrt(h.variance2(watchedValue_e, o, i) * h.variance2(watchedValue_t, watchedValue_n, i))
      }, h.stoch = (watchedValue_e, watchedValue_t, i, watchedValue_s, o) => {
        const watchedValue_n = h.highest(watchedValue_t, watchedValue_s, o),
          r = h.lowest(i, watchedValue_s, o);
        return h.fixnan(100 * (watchedValue_e.get() - r) / (watchedValue_n - r), o)
      }, h.tsi = (watchedValue_e, watchedValue_t, i, watchedValue_s) => {
        const o = watchedValue_s.new_var(h.change(watchedValue_e)),
          watchedValue_n = watchedValue_s.new_var(h.abs(h.change(watchedValue_e))),
          r = watchedValue_s.new_var(h.ema(o, i, watchedValue_s)),
          watchedValue_a = watchedValue_s.new_var(h.ema(watchedValue_n, i, watchedValue_s));
        return h.ema(r, watchedValue_t, watchedValue_s) / h.ema(watchedValue_a, watchedValue_t, watchedValue_s)
      }, h.cross = (watchedValue_e, watchedValue_t, i) => {
        if (isNaN(watchedValue_e) || isNaN(watchedValue_t)) return !1;
        const watchedValue_s = i.new_var((o = watchedValue_e - watchedValue_t) < 0 ? -1 : 0 === o ? 0 : 1);
        var o;
        return !isNaN(watchedValue_s.get(1)) && watchedValue_s.get(1) !== watchedValue_s.get()
      }, h.linreg = (watchedValue_e, watchedValue_t, i) => {
        let watchedValue_s = 0,
          o = 0,
          watchedValue_n = 0,
          r = 0;
        for (let i = 0; i < watchedValue_t; ++i) {
          const watchedValue_a = watchedValue_e.get(i),
            l = watchedValue_t - 1 - i + 1;
          watchedValue_s += l, o += watchedValue_a, watchedValue_n += l * l, r += watchedValue_a * l
        }
        const watchedValue_a = (watchedValue_t * r - watchedValue_s * o) / (watchedValue_t * watchedValue_n - watchedValue_s * watchedValue_s);
        return o / watchedValue_t - watchedValue_a * watchedValue_s / watchedValue_t + watchedValue_a + watchedValue_a * (watchedValue_t - 1 - i)
      }, h.sar = (watchedValue_e, watchedValue_t, i, watchedValue_s) => {
        const o = watchedValue_s.new_var(),
          watchedValue_n = watchedValue_s.new_var(),
          r = watchedValue_s.new_var(),
          watchedValue_a = h.high(watchedValue_s),
          l = h.low(watchedValue_s),
          c = h.close(watchedValue_s),
          d = watchedValue_s.new_var(watchedValue_a),
          u = watchedValue_s.new_var(l),
          _ = watchedValue_s.new_var(c),
          p = watchedValue_s.new_var();
        let m = p.get(1),
          g = watchedValue_n.get(1),
          f = r.get(1);
        watchedValue_n.set(g), r.set(f);
        let y = !1;
        const v = u.get(1),
          S = u.get(2),
          b = d.get(1),
          w = d.get(2),
          C = _.get(),
          T = _.get(1);
        2 === h.watchedValue_n(watchedValue_s) && (h.greater(C, T) ? (o.set(1), r.set(d.get()), m = v, f = d.get()) : (o.set(-1), r.set(u.get()),
          m = b, f = u.get()), y = !0, watchedValue_n.set(watchedValue_e), g = watchedValue_e);
        let P = m + g * (f - m);
        return 1 === o.get() ? h.greater(P, u.get()) && (y = !0, o.set(-1), P = Math.max(d.get(), r.get()), r.set(u
        .get()), watchedValue_n.set(watchedValue_e)) : h.less(P, d.get()) && (y = !0, o.set(1), P = Math.min(u.get(), r.get()), r.set(d.get()),
          watchedValue_n.set(watchedValue_e)), y || (1 === o.get() ? h.greater(d.get(), r.get()) && (r.set(d.get()), watchedValue_n.set(Math.min(watchedValue_n.get() + watchedValue_t,
          i))) : h.less(u.get(), r.get()) && (r.set(u.get()), watchedValue_n.set(Math.min(watchedValue_n.get() + watchedValue_t, i)))), 1 === o.get() ? (P =
          Math.min(P, v), h.watchedValue_n(watchedValue_s) > 2 && (P = Math.min(P, S))) : (P = Math.max(P, b), h.watchedValue_n(watchedValue_s) > 2 && (P = Math.max(P,
          w))), p.set(P), P
      }, h.alma = (watchedValue_e, watchedValue_t, i, watchedValue_s) => {
        const o = Math.floor(i * (watchedValue_t - 1)),
          watchedValue_n = watchedValue_t / watchedValue_s * (watchedValue_t / watchedValue_s),
          r = [];
        let watchedValue_a = 0;
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; ++watchedValue_e) {
          const watchedValue_t = Math.exp(-1 * Math.pow(watchedValue_e - o, 2) / (2 * watchedValue_n));
          watchedValue_a += watchedValue_t, r.push(watchedValue_t)
        }
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; ++watchedValue_e) r[watchedValue_e] /= watchedValue_a;
        let l = 0;
        for (let i = 0; i < watchedValue_t; ++i) l += r[i] * watchedValue_e.get(watchedValue_t - i - 1);
        return l
      }, h.change = watchedValue_e => watchedValue_e.get() - watchedValue_e.get(1), h.roc = (watchedValue_e, watchedValue_t) => {
        const i = watchedValue_e.get(watchedValue_t);
        return 100 * (watchedValue_e.get() - i) / i
      }, h.dev = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.sma(watchedValue_e, watchedValue_t, i);
        return h.dev2(watchedValue_e, watchedValue_t, watchedValue_s)
      }, h.dev2 = (watchedValue_e, watchedValue_t, i) => {
        let watchedValue_s = 0;
        for (let o = 0; o < watchedValue_t; o++) {
          const watchedValue_t = watchedValue_e.get(o);
          watchedValue_s += h.abs(watchedValue_t - i)
        }
        return watchedValue_s / watchedValue_t
      }, h.stdev = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.variance(watchedValue_e, watchedValue_t, i);
        return h.sqrt(watchedValue_s)
      }, h.variance = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = h.sma(watchedValue_e, watchedValue_t, i);
        return h.variance2(watchedValue_e, watchedValue_s, watchedValue_t)
      }, h.variance2 = (watchedValue_e, watchedValue_t, i) => {
        let watchedValue_s = 0;
        for (let o = 0; o < i; o++) {
          const i = watchedValue_e.get(o),
            watchedValue_n = h.abs(i - watchedValue_t);
          watchedValue_s += watchedValue_n * watchedValue_n
        }
        return watchedValue_s / i
      }, h.percentrank = (watchedValue_e, watchedValue_t) => {
        if (h.na(watchedValue_e.get(watchedValue_t - 1))) return NaN;
        let i = 0;
        const watchedValue_s = watchedValue_e.get();
        for (let o = 1; o < watchedValue_t; o++) {
          const watchedValue_t = watchedValue_e.get(o);
          h.ge(watchedValue_s, watchedValue_t) && i++
        }
        return 100 * i / watchedValue_t
      }, h.createNewSessionCheck = watchedValue_e => {
        if (void 0 === watchedValue_e.symbol.session.timezone) return () => !1;
        const watchedValue_t = (0, o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null);
        return watchedValue_e => watchedValue_t.indexOfBar(watchedValue_e) === r.SessionStage.POST_SESSION && (watchedValue_t.moveTo(watchedValue_e), !0)
      }, h.createNthBarInSessionCheck = watchedValue_e => {
        if (void 0 === watchedValue_e.symbol.session.timezone) return () => !1;
        const watchedValue_t = (0, o.newBarBuilder)(watchedValue_e.symbol.period, watchedValue_e.symbol.session, null);
        return (watchedValue_e, i) => (watchedValue_t.indexOfBar(watchedValue_e) === r.SessionStage.POST_SESSION && watchedValue_t.moveTo(watchedValue_e), watchedValue_t.indexOfBar(watchedValue_e) === i)
      }, h.error = (watchedValue_e, watchedValue_t) => {
        throw new watchedValue_a.StudyError(watchedValue_e, watchedValue_t)
      }, h.dmi = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = i.new_var(h.high(i)),
          o = i.new_var(h.low(i)),
          watchedValue_n = h.change(watchedValue_s),
          r = -h.change(o),
          watchedValue_a = i.new_var(h.na(watchedValue_n) || h.na(r) ? h.na() : h.and(h.gt(watchedValue_n, r), h.gt(watchedValue_n, 0)) ? watchedValue_n : 0),
          l = i.new_var(h.na(r) ? h.na() : h.and(h.gt(r, watchedValue_n), h.gt(r, 0)) ? r : 0),
          c = h.atr(watchedValue_e, i),
          d = h.fixnan(100 * h.rma(watchedValue_a, watchedValue_e, i) / c, i),
          u = h.fixnan(100 * h.rma(l, watchedValue_e, i) / c, i);
        let _ = d + u;
        h.isZero(_) && (_ += 1);
        const p = Math.abs(d - u) / _ * 100,
          m = i.new_var(p),
          g = h.rma(m, watchedValue_t, i),
          f = i.new_var(g);
        return [d, u, p, g, (f.get(0) + f.get(watchedValue_e - 1)) / 2]
      }, h.zigzag = (watchedValue_e, watchedValue_t, i) => new m(watchedValue_e, watchedValue_t, i).lastPrice(), h.zigzagbars = (watchedValue_e, watchedValue_t, i) => {
        const watchedValue_s = new m(watchedValue_e, watchedValue_t, i);
        return -1 === watchedValue_s.lastIndex() ? NaN : watchedValue_s.lastIndex() - h.watchedValue_n(i)
      };
    const u = 0,
      _ = 1;
    class p {
      constructor(watchedValue_e, watchedValue_t, i, watchedValue_s, o) {
        this._areaRight = watchedValue_e, this._areaLeft = watchedValue_t, this._pivotType = i, this._series = watchedValue_s, this._currentIndex = o
          .new_var(0), this._currentValue = o.new_var(NaN), this._pivotIndex = o.new_var(-1), this._index = h.watchedValue_n(o),
          this._isNewBar = o.symbol.isNewBar;
        const watchedValue_n = this._currentIndex.get(1),
          r = this._currentValue.get(1),
          watchedValue_a = this._pivotIndex.get(1);
        this._index > 1 && (this._currentIndex.set(watchedValue_n), this._currentValue.set(r), this._pivotIndex.set(watchedValue_a))
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
        const i = this._series.get(this._index - watchedValue_e);
        return !!isNaN(i) || (i === this._currentValue.get() ? watchedValue_t : this._pivotType === _ ? i > this._currentValue
        .get() : i < this._currentValue.get())
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
    p.LOW = 0, p.HIGH = 1;
    class m {
      constructor(watchedValue_e, watchedValue_t, i) {
        this._deviation = watchedValue_e;
        const watchedValue_s = i.new_var(h.high(i)),
          o = i.new_var(h.low(i));
        watchedValue_s.get(2 * watchedValue_t + 1), o.get(2 * watchedValue_t + 1), this._pivotHigh = new p(watchedValue_t, watchedValue_t, _, watchedValue_s, i), this._pivotLow = new p(watchedValue_t, watchedValue_t, u, o,
            i), this._lastVal = i.new_var(NaN), this._lastIndex = i.new_var(-1), this._lastType = i.new_var(), this
          ._index = h.watchedValue_n(i), this._isBarClosed = i.symbol.isBarClosed;
        const watchedValue_n = this._lastIndex.get(1),
          r = this._lastVal.get(1),
          watchedValue_a = this._lastType.get(1);
        this._index > 1 && this.addPivot(watchedValue_n, r, watchedValue_a), this.processPivot(this._pivotHigh), this.processPivot(this
          ._pivotLow)
      }
      addPivot(watchedValue_e, watchedValue_t, i) {
        this._lastIndex.set(watchedValue_e), this._lastVal.set(watchedValue_t), this._lastType.set(i)
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
      addPoint(watchedValue_e, watchedValue_t, i) {
        if (isNaN(this._lastVal.get())) return void this.addPivot(watchedValue_e, watchedValue_t, i);
        const watchedValue_s = this._lastVal.get();
        if (this._lastType.get() === i) {
          return void((i === _ ? watchedValue_t > watchedValue_s : watchedValue_t < watchedValue_s) && this.updatePivot(watchedValue_e, watchedValue_t))
        }
        Math.abs(watchedValue_s - watchedValue_t) / watchedValue_t > this._deviation && this.addPivot(watchedValue_e, watchedValue_t, i)
      }
      processPivot(watchedValue_e) {
        watchedValue_e.update(), this._isBarClosed && watchedValue_e.isPivotFound() && this.addPoint(watchedValue_e.pivotIndex(), watchedValue_e.currentValue(), watchedValue_e
          .pivotType())
      }
    }
    h.vwap = (watchedValue_e, watchedValue_t, i) => {
      const watchedValue_s = i.new_var(),
        o = i.new_var();
      return watchedValue_t && (watchedValue_s.reset_hist(), o.reset_hist()), watchedValue_s.set(h.nz(watchedValue_s.get(1)) + watchedValue_e.get(0) * h.volume(i)), o.set(h.nz(o.get(
        1)) + h.volume(i)), watchedValue_s.get(0) / o.get(0)
    }, h.vwapBands = (watchedValue_e, watchedValue_t, i, watchedValue_s) => {
      const o = watchedValue_s.new_var(),
        watchedValue_n = watchedValue_s.new_var();
      watchedValue_t && (o.reset_hist(), watchedValue_n.reset_hist());
      const r = watchedValue_e.get(0);
      let watchedValue_a = h.volume(watchedValue_s),
        l = r * watchedValue_a;
      l += h.nz(o.get(1)), watchedValue_a += h.nz(watchedValue_n.get(1)), o.set(l), watchedValue_n.set(watchedValue_a);
      const c = l / watchedValue_a,
        d = watchedValue_s.new_var();
      watchedValue_t && d.reset_hist();
      let u = h.volume(watchedValue_s) * h.pow(r, 2);
      u += h.nz(d.get(1)), d.set(u);
      const _ = h.max(u / watchedValue_a - h.pow(c, 2), 0),
        p = Math.sqrt(_);
      return [c, c + p * i, c - p * i]
    }