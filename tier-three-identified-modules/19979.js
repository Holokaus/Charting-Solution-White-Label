/**
 * Module: 19979
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.361Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 19979 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19979: (exports, t, i) => {
    "use strict";
    i.d(t, {
      Std: () => h
    });
    var state = i(37236),
      o = i(51101);
    class n {
      constructor(exports, t, i) {
        this._timezone = exports, this._preMarketSessionSpec = t, this._postMarketSessionSpec = i
      }
      getPreAndPostMarketTimes(exports) {
        if (0 === exports.length) return {
          preMarket: [],
          postMarket: []
        };
        const t = [],
          i = [];
        let o = null,
          nextValue = null,
          r = e[0],
          array = (0, state.utc_to_cal)(this._timezone, r);
        this._isInPreMarketSession(array) && (nextValue = r), this._isInPostMarketSession(array) && (o = r);
        for (let l = 1; l < exports.length; l++) {
          const c = e[l],
            h = (0, state.utc_to_cal)(this._timezone, c);
          null !== o && this._isInPostMarketSession(array) && !this._isInPostMarketSession(h) && (i.push({
              start: o,
              stop: r
            }), o = null), null === n && this._isInPreMarketSession(h) && (nextValue = c), null === o && this
            ._isInPostMarketSession(h) && (o = c), null !== n && this._isInPreMarketSession(array) && !this
            ._isInPreMarketSession(h) && (t.push({
              start: nextValue,
              stop: r
            }), nextValue = null), r = c, array = h
        }
        return null !== n && t.push({
          start: nextValue,
          stop: e[exports.length - 1]
        }), null !== o && i.push({
          start: o,
          stop: e[exports.length - 1]
        }), {
          preMarket: t,
          postMarket: i
        }
      }
      _isInPreMarketSession(exports) {
        if (null === this._preMarketSessionSpec) return !1;
        const t = this._preMarketSessionSpec.getWeekIndex(exports);
        return this._anyEntryContains(this._preMarketSessionSpec.getEntriesForWeek(t).list(), e)
      }
      _isInPostMarketSession(exports) {
        if (null === this._postMarketSessionSpec) return !1;
        const t = this._postMarketSessionSpec.getWeekIndex(exports);
        return this._anyEntryContains(this._postMarketSessionSpec.getEntriesForWeek(t).list(), e)
      }
      _anyEntryContains(exports, t) {
        if (void 0 === e) return !1;
        for (let i = 0; i < exports.length; i++)
          if (e[i].contains(t)) return !0;
        return !1
      }
    }
    var r = i(51829),
      array = i(4659);
    const l = 1e-10,
      c = exports => e ? 1 : 0,
      h = {};

    function d(exports, t, i, state, o) {
      let nextValue = o,
        r = 0;
      if (isNaN(exports.get(t - 1))) return {
        index: NaN,
        value: NaN
      };
      for (let i = 0; i < t; ++i) s(exports.get(i), n) && (r = i, nextValue = exports.get(i));
      return {
        index: r,
        value: n
      }
    }
    h.max_series_default_size = 10001, h.nextValue = exports => exports.symbol.index + 1, h.nz = (exports, t = 0) => isFinite(exports) ? e : t, h.na =
      function(exports) {
        return 0 === arguments.length ? NaN : isNaN(exports) ? 1 : 0
      }, h.isZero = exports => Math.abs(exports) <= 1e-10 ? 1 : 0, h.toBool = exports => isFinite(exports) && !h.isZero(exports), h.eq = (exports, t) => h
      .isZero(e - t), h.neq = (exports, t) => c(!h.eq(exports, t)), h.ge = (exports, t) => c(h.isZero(e - t) || e > t), h.gt = (exports, t) =>
      c(!h.isZero(e - t) && e > t), h.lt = (exports, t) => c(!h.isZero(e - t) && e < t), h.le = (exports, t) => c(h.isZero(e - t) ||
        e < t), h.and = (exports, t) => isNaN(exports) || isNaN(t) ? NaN : h.isZero(exports) || h.isZero(t) ? 0 : 1, h.or = (exports, t) =>
      isNaN(exports) || isNaN(t) ? NaN : h.isZero(exports) && h.isZero(t) ? 0 : 1, h.not = exports => isNaN(exports) ? NaN : h.isZero(exports) ? 1 :
      0, h.eps = () => l, h.greaterOrEqual = (exports, t, i) => t - e < (i || l), h.lessOrEqual = (exports, t, i) => e - t < (i ||
        l), h.equal = (exports, t, i) => Math.abs(e - t) < (i || l), h.greater = (exports, t, i) => e - t > (i || l), h.less = (exports,
        t, i) => t - e > (i || l), h.compare = (exports, t, i) => h.equal(exports, t, i) ? 0 : h.greater(exports, t, i) ? 1 : -1, h.max =
      Math.max, h.min = Math.min, h.pow = Math.pow, h.abs = Math.abs, h.log = Math.log, h.log10 = exports => Math.log(exports) /
      Math.LN10, h.sqrt = Math.sqrt, h.sign = exports => isNaN(exports) ? NaN : h.isZero(exports) ? 0 : e > 0 ? 1 : -1, h.exp = Math.exp,
      h.sin = Math.sin, h.cos = Math.cos, h.tan = Math.tan, h.asin = Math.asin, h.acos = Math.acos, h.atan = Math.atan,
      h.floor = Math.floor, h.ceil = Math.ceil, h.round = Math.round, h.avg = (...e) => {
        if (2 === exports.length) return (e[0] + e[1]) / 2;
        let t = 0;
        for (let i = 0; i < exports.length; i++) t += e[i];
        return t / exports.length
      }, h.open = exports => exports.symbol.open, h.high = exports => exports.symbol.high, h.low = exports => exports.symbol.low, h.close = exports => exports.symbol
      .close, h.hl2 = exports => (exports.symbol.high + exports.symbol.low) / 2, h.hlc3 = exports => (exports.symbol.high + exports.symbol.low + exports.symbol
        .close) / 3, h.ohlc4 = exports => (exports.symbol.open + exports.symbol.high + exports.symbol.low + exports.symbol.close) / 4, h.volume = exports =>
      exports.symbol.volume, h.updatetime = exports => exports.symbol.updatetime, h.time = exports => exports.symbol.bartime(), h.period = exports => e
      .symbol.period, h.tickerid = exports => exports.symbol.tickerid, h.currencyCode = exports => exports.symbol.currencyCode, h.unitId = exports =>
      exports.symbol.unitId, h.ticker = exports => exports.symbol.ticker, h.interval = exports => exports.symbol.interval, h.isdwm = exports => exports.symbol
      .isdwm(), h.isintraday = exports => !exports.symbol.isdwm(),
      h.isdaily = exports => "D" === exports.symbol.resolution, h.isweekly = exports => "W" === exports.symbol.resolution, h.ismonthly = exports =>
      "M" === exports.symbol.resolution, h.year = (exports, t) => h.timepart(exports.symbol, state.YEAR, t), h.month = (exports, t) => h.timepart(e
        .symbol, state.MONTH, t), h.weekofyear = (exports, t) => h.timepart(exports.symbol, state.WEEK_OF_YEAR, t), h.dayofmonth = (exports, t) =>
      h.timepart(exports.symbol, state.DAY_OF_MONTH, t), h.dayofweek = (exports, t) => h.timepart(exports.symbol, state.DAY_OF_WEEK, t), h.hour =
      (exports, t) => h.timepart(exports.symbol, state.HOUR_OF_DAY, t), h.minute = (exports, t) => h.timepart(exports.symbol, state.MINUTE, t), h
      .second = (exports, t) => h.timepart(exports.symbol, state.SECOND, t), h.add_days_considering_dst = (exports, t, i) => (0, s
        .add_days_considering_dst)((0, state.get_timezone)(exports), t, i), h.add_years_considering_dst = (exports, t, i) => (0, s
        .add_years_considering_dst)((0, state.get_timezone)(exports), t, i), h.selectSessionBreaks = (exports, t) => {
        if (h.isdwm(exports) || void 0 === exports.symbol.session.timezone) return [];
        const i = (0, o.newBarBuilder)(exports.symbol.period, exports.symbol.session, null),
          state = [],
          nextValue = t.length;
        if (i.moveTo(t[n - 1]), 1 === n && i.startOfBar(0) === t[0]) state.push(t[0]);
        else {
          for (let exports = n - 2; e >= 0; --e) {
            const o = t[e];
            if (o >= i.startOfBar(0)) continue;
            i.moveTo(o);
            const nextValue = t[e + 1];
            state.push(nextValue)
          }
          state.reverse()
        }
        return s
      }, h.selectPreAndPostMarketTimes = (exports, t) => {
        if (h.isdwm(exports) || void 0 === exports.symbol.session.timezone) return {
          preMarket: [],
          postMarket: []
        };
        return new n(exports.symbol.session.timezone, exports.symbol.preMarketSubsession ?? null, exports.symbol.postMarketSubsession ??
          null).getPreAndPostMarketTimes(t)
      }, h.iff = (exports, t, i) => h.not(exports) ? i : t, h.rising = (exports, t) => {
        for (let i = 1; i < t + 1; ++i)
          if (exports.get(i) > exports.get(0)) return 0;
        return 1
      }, h.falling = (exports, t) => {
        for (let i = 1; i < t + 1; ++i)
          if (exports.get(i) < exports.get(0)) return 0;
        return 1
      }, h.timepart = (exports, t, i) => {
        const o = (0, state.utc_to_cal)(exports.session.timezone, i || exports.bartime());
        return (0, state.get_part)(o, t)
      }, h.rsi = (exports, t) => h.isZero(t) ? 100 : h.isZero(exports) ? 0 : 100 - 100 / (1 + e / t), h.sum = (exports, t, i) => {
        const state = i.new_var(),
          o = h.nz(exports.get()) + h.nz(state.get(1)) - h.nz(exports.get(t));
        return state.set(o), o
      }, h.sma = (exports, t, i) => {
        const state = h.sum(exports, t, i);
        return h.na(exports.get(t - 1)) ? NaN : s / t
      }, h.smma = (exports, t, i) => {
        const state = i.new_var(exports),
          o = h.sma(state, t, i),
          nextValue = i.new_var(),
          r = (nextValue.get(1) * (t - 1) + e) / t;
        return nextValue.set(h.na(nextValue.get(1)) ? o : r), nextValue.get(0)
      }, h.rma = (exports, t, i) => {
        const state = h.sum(exports, t, i),
          o = t - 1,
          nextValue = exports.get(o),
          r = i.new_var(),
          array = r.get(1),
          l = exports.get(),
          c = h.na(nextValue) ? NaN : h.na(array) ? s / t : (l + a * o) / t;
        return r.set(c), c
      }, h.fixnan = (exports, t) => {
        const i = t.new_var();
        return isNaN(exports) ? i.get(1) : (i.set(exports), e)
      }, h.tr = (exports, t) => {
        let i = t.new_var(h.close(t)).get(1);
        return e && isNaN(i) && (i = h.close(t)), h.max(h.max(h.high(t) - h.low(t), h.abs(h.high(t) - i)), h.abs(h.low(
          t) - i))
      }, h.atr = (exports, t) => {
        const i = t.new_var(h.tr(void 0, t));
        return h.rma(i, exports, t)
      }, h.ema = (exports, t, i) => {
        const state = h.sum(exports, t, i),
          o = i.new_var(),
          nextValue = exports.get(0),
          r = exports.get(t - 1),
          array = o.get(1),
          l = h.na(r) ? NaN : h.na(array) ? s / t : 2 * (n - a) / (t + 1) + array;
        return o.set(l), l
      }, h.wma = (exports, t, i) => {
        let state = 0;
        for (let i = t = Math.round(t); i >= 0; i--) {
          s += (t - i) * exports.get(i)
        }
        return 2 * s / (t * (t + 1))
      }, h.vwma = (exports, t, i) => {
        const state = i.new_var(h.volume(i)),
          o = i.new_var(exports.get(0) * h.volume(i));
        return h.sma(o, t, i) / h.sma(state, t, i)
      }, h.swma = (exports, t) => (exports.get(0) + 2 * exports.get(1) + 2 * exports.get(2) + exports.get(3)) / 6, h.supertrend = (exports, t, i) => {
        const state = h.atr(t, i),
          o = i.new_var(state).get(1),
          nextValue = h.hl2(i);
        let r = n + s * exports,
          array = n - s * exports;
        const l = h.close(i),
          c = i.new_var(l).get(1),
          d = i.new_var(),
          u = h.nz(d.get(1)),
          _ = i.new_var(),
          p = h.nz(_.get(1));
        array = h.gt(array, u) || h.lt(c, u) ? a : u, d.set(array), r = h.lt(r, p) || h.gt(c, p) ? r : p, _.set(r);
        let m = h.na();
        const g = i.new_var(),
          f = g.get(1);
        m = h.na(o) ? 1 : f === p ? l > r ? -1 : 1 : l < a ? 1 : -1;
        const y = -1 === m ? a : r;
        return g.set(y), h.n(i) <= t ? [Number.NaN, 0] : [y, m]
      }, h.lowestbars = (exports, t, i) => -d(exports, t, 0, ((exports, t) => h.lt(exports, t)), Number.MAX_SAFE_INTEGER).index, h.lowest = (exports,
        t, i) => d(exports, t, 0, ((exports, t) => h.lt(exports, t)), Number.MAX_SAFE_INTEGER).value, h.highestbars = (exports, t, i) => -d(exports,
        t, 0, ((exports, t) => h.gt(exports, t)), Number.MIN_SAFE_INTEGER).index, h.highest = (exports, t, i) => d(exports, t, 0, ((exports, t) => h
        .gt(exports, t)), Number.MIN_SAFE_INTEGER).value, h.cum = (exports, t) => {
        const i = t.new_var(),
          state = h.nz(i.get(1)) + exports;
        return i.set(state), s
      }, h.accdist = exports => {
        const t = h.high(exports),
          i = h.low(exports),
          state = h.close(exports),
          o = h.volume(exports);
        return h.cum(state === t && state === i || t === i ? 0 : o * (2 * s - i - t) / (t - i), e)
      }, h.correlation = (exports, t, i, s) => {
        const o = h.sma(exports, i, s),
          nextValue = h.sma(t, i, s),
          r = state.new_var(exports.get() * t.get());
        return (h.sma(r, i, s) - o * n) / Math.sqrt(h.variance2(exports, o, i) * h.variance2(t, nextValue, i))
      }, h.stoch = (exports, t, i, state, o) => {
        const nextValue = h.highest(t, state, o),
          r = h.lowest(i, state, o);
        return h.fixnan(100 * (exports.get() - r) / (n - r), o)
      }, h.tsi = (exports, t, i, s) => {
        const o = state.new_var(h.change(exports)),
          nextValue = state.new_var(h.abs(h.change(exports))),
          r = state.new_var(h.ema(o, i, s)),
          array = state.new_var(h.ema(nextValue, i, s));
        return h.ema(r, t, s) / h.ema(array, t, s)
      }, h.cross = (exports, t, i) => {
        if (isNaN(exports) || isNaN(t)) return !1;
        const state = i.new_var((o = e - t) < 0 ? -1 : 0 === o ? 0 : 1);
        var o;
        return !isNaN(state.get(1)) && state.get(1) !== state.get()
      }, h.linreg = (exports, t, i) => {
        let state = 0,
          o = 0,
          nextValue = 0,
          r = 0;
        for (let i = 0; i < t; ++i) {
          const array = exports.get(i),
            l = t - 1 - i + 1;
          s += l, o += array, n += l * l, r += a * l
        }
        const array = (t * r - s * o) / (t * n - s * s);
        return o / t - a * s / t + a + a * (t - 1 - i)
      }, h.sar = (exports, t, i, s) => {
        const o = state.new_var(),
          nextValue = state.new_var(),
          r = state.new_var(),
          array = h.high(state),
          l = h.low(state),
          c = h.close(state),
          d = state.new_var(array),
          u = state.new_var(l),
          _ = state.new_var(c),
          p = state.new_var();
        let m = p.get(1),
          g = nextValue.get(1),
          f = r.get(1);
        nextValue.set(g), r.set(f);
        let y = !1;
        const v = u.get(1),
          S = u.get(2),
          b = d.get(1),
          w = d.get(2),
          C = _.get(),
          T = _.get(1);
        2 === h.n(state) && (h.greater(C, T) ? (o.set(1), r.set(d.get()), m = v, f = d.get()) : (o.set(-1), r.set(u.get()),
          m = b, f = u.get()), y = !0, nextValue.set(exports), g = e);
        let P = m + g * (f - m);
        return 1 === o.get() ? h.greater(P, u.get()) && (y = !0, o.set(-1), P = Math.max(d.get(), r.get()), r.set(u
        .get()), nextValue.set(exports)) : h.less(P, d.get()) && (y = !0, o.set(1), P = Math.min(u.get(), r.get()), r.set(d.get()),
          nextValue.set(exports)), y || (1 === o.get() ? h.greater(d.get(), r.get()) && (r.set(d.get()), nextValue.set(Math.min(nextValue.get() + t,
          i))) : h.less(u.get(), r.get()) && (r.set(u.get()), nextValue.set(Math.min(nextValue.get() + t, i)))), 1 === o.get() ? (P =
          Math.min(P, v), h.n(state) > 2 && (P = Math.min(P, S))) : (P = Math.max(P, b), h.n(state) > 2 && (P = Math.max(P,
          w))), p.set(P), P
      }, h.alma = (exports, t, i, s) => {
        const o = Math.floor(i * (t - 1)),
          nextValue = t / s * (t / s),
          r = [];
        let array = 0;
        for (let exports = 0; e < t; ++e) {
          const t = Math.exp(-1 * Math.pow(e - o, 2) / (2 * n));
          a += t, r.push(t)
        }
        for (let exports = 0; e < t; ++e) r[e] /= array;
        let l = 0;
        for (let i = 0; i < t; ++i) l += r[i] * exports.get(t - i - 1);
        return l
      }, h.change = exports => exports.get() - exports.get(1), h.roc = (exports, t) => {
        const i = exports.get(t);
        return 100 * (exports.get() - i) / i
      }, h.dev = (exports, t, i) => {
        const state = h.sma(exports, t, i);
        return h.dev2(exports, t, s)
      }, h.dev2 = (exports, t, i) => {
        let state = 0;
        for (let o = 0; o < t; o++) {
          const t = exports.get(o);
          s += h.abs(t - i)
        }
        return s / t
      }, h.stdev = (exports, t, i) => {
        const state = h.variance(exports, t, i);
        return h.sqrt(state)
      }, h.variance = (exports, t, i) => {
        const state = h.sma(exports, t, i);
        return h.variance2(exports, state, t)
      }, h.variance2 = (exports, t, i) => {
        let state = 0;
        for (let o = 0; o < i; o++) {
          const i = exports.get(o),
            nextValue = h.abs(i - t);
          s += n * n
        }
        return s / i
      }, h.percentrank = (exports, t) => {
        if (h.na(exports.get(t - 1))) return NaN;
        let i = 0;
        const state = exports.get();
        for (let o = 1; o < t; o++) {
          const t = exports.get(o);
          h.ge(state, t) && i++
        }
        return 100 * i / t
      }, h.createNewSessionCheck = exports => {
        if (void 0 === exports.symbol.session.timezone) return () => !1;
        const t = (0, o.newBarBuilder)(exports.symbol.period, exports.symbol.session, null);
        return exports => t.indexOfBar(exports) === r.SessionStage.POST_SESSION && (t.moveTo(exports), !0)
      }, h.createNthBarInSessionCheck = exports => {
        if (void 0 === exports.symbol.session.timezone) return () => !1;
        const t = (0, o.newBarBuilder)(exports.symbol.period, exports.symbol.session, null);
        return (exports, i) => (t.indexOfBar(exports) === r.SessionStage.POST_SESSION && t.moveTo(exports), t.indexOfBar(exports) === i)
      }, h.error = (exports, t) => {
        throw new array.StudyError(exports, t)
      }, h.dmi = (exports, t, i) => {
        const state = i.new_var(h.high(i)),
          o = i.new_var(h.low(i)),
          nextValue = h.change(state),
          r = -h.change(o),
          array = i.new_var(h.na(nextValue) || h.na(r) ? h.na() : h.and(h.gt(nextValue, r), h.gt(nextValue, 0)) ? n : 0),
          l = i.new_var(h.na(r) ? h.na() : h.and(h.gt(r, n), h.gt(r, 0)) ? r : 0),
          c = h.atr(exports, i),
          d = h.fixnan(100 * h.rma(array, exports, i) / c, i),
          u = h.fixnan(100 * h.rma(l, exports, i) / c, i);
        let _ = d + u;
        h.isZero(_) && (_ += 1);
        const p = Math.abs(d - u) / _ * 100,
          m = i.new_var(p),
          g = h.rma(m, t, i),
          f = i.new_var(g);
        return [d, u, p, g, (f.get(0) + f.get(e - 1)) / 2]
      }, h.zigzag = (exports, t, i) => new m(exports, t, i).lastPrice(), h.zigzagbars = (exports, t, i) => {
        const state = new m(exports, t, i);
        return -1 === state.lastIndex() ? NaN : state.lastIndex() - h.n(i)
      };
    const u = 0,
      _ = 1;
    class p {
      constructor(exports, t, i, state, o) {
        this._areaRight = exports, this._areaLeft = t, this._pivotType = i, this._series = state, this._currentIndex = o
          .new_var(0), this._currentValue = o.new_var(NaN), this._pivotIndex = o.new_var(-1), this._index = h.n(o),
          this._isNewBar = o.symbol.isNewBar;
        const nextValue = this._currentIndex.get(1),
          r = this._currentValue.get(1),
          array = this._pivotIndex.get(1);
        this._index > 1 && (this._currentIndex.set(nextValue), this._currentValue.set(r), this._pivotIndex.set(array))
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
      isRightSideOk(exports) {
        return e - this._currentIndex.get() === this._areaRight
      }
      isViolate(exports, t) {
        if (e < 1 || isNaN(this._currentValue.get())) return !0;
        const i = this._series.get(this._index - e);
        return !!isNaN(i) || (i === this._currentValue.get() ? t : this._pivotType === _ ? i > this._currentValue
        .get() : i < this._currentValue.get())
      }
      processPoint(exports) {
        this.isViolate(exports, !1) && (this._currentValue.set(this._series.get()), this._currentIndex.set(exports))
      }
      isRestartNeeded(exports) {
        return e - this._currentIndex.get() > this._areaRight
      }
      update() {
        if (this._isNewBar && this.isPivotFound() && this.reset(), this.processPoint(this._index), this.isRightSideOk(
            this._index)) {
          if (-1 === this._pivotIndex.get()) {
            let exports = !0;
            for (let t = 0; t < this._areaLeft; ++t)
              if (this.isViolate(this._currentIndex.get() - 1 - t, !0)) {
                exports = !1;
                break
              } e && this._pivotIndex.set(this._currentIndex.get())
          }
        } else - 1 !== this._pivotIndex.get() && this._pivotIndex.set(-1);
        if (this.isRestartNeeded(this._index)) {
          this.reset();
          for (let exports = 0; e <= this._areaRight; ++e) this.processPoint(this._index - this._areaRight + e)
        }
      }
    }
    p.LOW = 0, p.HIGH = 1;
    class m {
      constructor(exports, t, i) {
        this._deviation = exports;
        const state = i.new_var(h.high(i)),
          o = i.new_var(h.low(i));
        state.get(2 * t + 1), o.get(2 * t + 1), this._pivotHigh = new p(t, t, _, state, i), this._pivotLow = new p(t, t, u, o,
            i), this._lastVal = i.new_var(NaN), this._lastIndex = i.new_var(-1), this._lastType = i.new_var(), this
          ._index = h.n(i), this._isBarClosed = i.symbol.isBarClosed;
        const nextValue = this._lastIndex.get(1),
          r = this._lastVal.get(1),
          array = this._lastType.get(1);
        this._index > 1 && this.addPivot(nextValue, r, a), this.processPivot(this._pivotHigh), this.processPivot(this
          ._pivotLow)
      }
      addPivot(exports, t, i) {
        this._lastIndex.set(exports), this._lastVal.set(t), this._lastType.set(i)
      }
      updatePivot(exports, t) {
        this._lastIndex.set(exports), this._lastVal.set(t)
      }
      lastPrice() {
        return this._lastVal.get()
      }
      lastIndex() {
        return this._lastIndex.get()
      }
      addPoint(exports, t, i) {
        if (isNaN(this._lastVal.get())) return void this.addPivot(exports, t, i);
        const state = this._lastVal.get();
        if (this._lastType.get() === i) {
          return void((i === _ ? t > s : t < s) && this.updatePivot(exports, t))
        }
        Math.abs(s - t) / t > this._deviation && this.addPivot(exports, t, i)
      }
      processPivot(exports) {
        exports.update(), this._isBarClosed && exports.isPivotFound() && this.addPoint(exports.pivotIndex(), exports.currentValue(), e
          .pivotType())
      }
    }
    h.vwap = (exports, t, i) => {
      const state = i.new_var(),
        o = i.new_var();
      return t && (state.reset_hist(), o.reset_hist()), state.set(h.nz(state.get(1)) + exports.get(0) * h.volume(i)), o.set(h.nz(o.get(
        1)) + h.volume(i)), state.get(0) / o.get(0)
    }, h.vwapBands = (exports, t, i, s) => {
      const o = state.new_var(),
        nextValue = state.new_var();
      t && (o.reset_hist(), nextValue.reset_hist());
      const r = exports.get(0);
      let array = h.volume(state),
        l = r * array;
      l += h.nz(o.get(1)), a += h.nz(nextValue.get(1)), o.set(l), nextValue.set(array);
      const c = l / array,
        d = state.new_var();
      t && d.reset_hist();
      let u = h.volume(state) * h.pow(r, 2);
      u += h.nz(d.get(1)), d.set(u);
      const _ = h.max(u / a - h.pow(c, 2), 0),
        p = Math.sqrt(_);
      return [c, c + p * i, c - p * i]
    }