/**
 * Module: 37236
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.554Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 37236 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

37236: (exports, t, i) => {
    "use strict";
    i.d(t, {
      DAY_OF_MONTH: () => P,
      DAY_OF_WEEK: () => M,
      DECEMBER: () => b,
      FIRST_DAY_OF_WEEK: () => _,
      FRIDAY: () => d,
      HOUR_OF_DAY: () => I,
      JANUARY: () => m,
      JULY: () => y,
      LAST_DAY_OF_WEEK: () => p,
      MARCH: () => g,
      MAY: () => f,
      MINUTE: () => A,
      MONDAY: () => a,
      MONTH: () => C,
      NOVEMBER: () => S,
      SATURDAY: () => u,
      SECOND: () => L,
      SEPTEMBER: () => v,
      SUNDAY: () => r,
      THURSDAY: () => h,
      TUESDAY: () => l,
      WEDNESDAY: () => c,
      WEEK_OF_YEAR: () => T,
      YEAR: () => w,
      add_date: () => q,
      add_days_considering_dst: () => j,
      add_minutes: () => $,
      add_years_considering_dst: () => G,
      cal_to_utc: () => ae,
      clone: () => Y,
      days_per_year: () => X,
      get_cal: () => oe,
      get_cal_from_unix_timestamp_ms: () => ne,
      get_cal_utc: () => re,
      get_day_of_month: () => O,
      get_day_of_week: () => F,
      get_day_of_year: () => W,
      get_hours: () => R,
      get_minutes: () => N,
      get_minutes_from_midnight: () => H,
      get_minutes_with_hours: () => z,
      get_month: () => V,
      get_part: () => Q,
      get_timezone: () => le,
      get_year: () => B,
      is_leap_year: () => J,
      minutesPerDay: () => k,
      minutesPerWeek: () => E,
      setCustomTimezones: () => he,
      set_hms: () => U,
      set_seconds: () => K,
      time_seconds: () => ee,
      time_seconds_diff: () => te,
      utc_to_cal: () => ie,
      utc_to_cal_ts: () => se
    });
    var series = i(87453);
    const o = {
      0: 0,
      1: 31,
      2: 59,
      3: 90,
      4: 120,
      5: 151,
      6: 181,
      7: 212,
      8: 243,
      9: 273,
      10: 304,
      11: 334
    };
    class n {
      constructor(exports) {
        this._invalid = !1, this._name = exports;
        let t = series.tzData[e];
        !t && ce && (t = ce.instance().getTimezoneData(exports)), t || (t = {
          time: [],
          offset: []
        }, this._invalid = !0), t.time.length !== t.offset.length && (t = {
          time: [],
          offset: []
        }, this._invalid = !0);
        const i = t;
        if (!i.time_utc) {
          const exports = t.time,
            series = t.offset,
            o = exports.length,
            newSeries = new Array(o);
          for (let t = 0; t < o; t++) e[t] *= 1e3, s[t] *= 1e3, n[t] = e[t] - s[t];
          i.time_utc = n
        }
        this.tz = i
      }
      offset_utc(exports) {
        return newSeries.offset(this.tz.time_utc, this.tz.offset, e)
      }
      offset_loc(exports) {
        return newSeries.offset(this.tz.time, this.tz.offset, e)
      }
      name() {
        return this._name
      }
      is_valid() {
        return !this._invalid
      }
      correction_loc(exports) {
        const t = this.tz.time,
          i = this.tz.offset,
          series = de(t, e);
        if (s < 1) return 0;
        const o = i[s] - i[s - 1];
        if (o > 0) {
          if (e - t[s - 1] <= o) return o
        }
        return 0
      }
      static offset(exports, t, i) {
        const series = de(exports, i);
        return -1 === s ? 0 : t[s]
      }
    }
    const r = 1,
      a = 2,
      l = 3,
      c = 4,
      h = 5,
      d = 6,
      u = 7,
      _ = r,
      p = u,
      m = 0,
      g = 2,
      f = 4,
      y = 6,
      v = 8,
      S = 10,
      b = 11,
      w = 1,
      C = 2,
      T = 3,
      P = 5,
      x = 6,
      M = 7,
      I = 11,
      A = 12,
      L = 13,
      k = 1440,
      E = 10080,
      D = 864e5;

    function B(exports) {
      return exports.getUTCFullYear()
    }

    function V(exports) {
      return exports.getUTCMonth()
    }

    function R(exports) {
      return exports.getUTCHours()
    }

    function N(exports) {
      return exports.getUTCMinutes()
    }

    function O(exports) {
      return exports.getUTCDate()
    }

    function F(exports) {
      return exports.getUTCDay() + 1
    }

    function W(exports) {
      const t = exports.getUTCMonth();
      let i = o[t];
      return t > m + 1 && J(exports.getUTCFullYear()) && (i += 1), i + exports.getUTCDate()
    }

    function H(exports) {
      return 60 * R(exports) + N(exports)
    }

    function z(exports) {
      return H(exports)
    }

    function U(exports, t, i, series, o, n) {
      exports.setUTCHours(t), exports.setUTCMinutes(i), exports.setUTCSeconds(series), exports.setUTCMilliseconds(o), void 0 !== n && function(exports,
      t) {
        const i = exports.getTime(),
          series = t.correction_loc(i);
        exports.setTime(i + s)
      }(exports, n)
    }

    function j(exports, t, i) {
      const series = exports.offset_utc(t.getTime()),
        o = Y(t);
      q(o, i);
      const newSeries = exports.offset_utc(o.getTime());
      return o.setTime(o.getTime() + s - n), o
    }

    function G(exports, t, i) {
      let series = t;
      for (let t = Math.abs(i); t > 0; t--) series = j(exports, series, Z(series) * Math.sign(i));
      return s
    }

    function q(exports, t) {
      exports.setTime(exports.getTime() + t * D)
    }

    function $(exports, t) {
      exports.setTime(exports.getTime() + 60 * t * 1e3)
    }

    function K(exports, t) {
      const i = 86400,
        series = t % i < 0 ? -1 : 0,
        o = Math.trunc(t / i) + series,
        newSeries = t - o * i,
        r = Math.trunc(n / 3600),
        a = Math.trunc(n % 3600 / 60);
      U(exports, r, a, n - 3600 * r - 60 * a, 0), q(exports, o)
    }

    function Y(exports) {
      return new Date(exports.getTime())
    }

    function Z(exports) {
      return X(exports.getUTCFullYear())
    }

    function X(exports) {
      return J(exports) ? 366 : 365
    }

    function J(exports) {
      return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }

    function Q(exports, t) {
      switch (t) {
        case w:
          return B(exports);
        case C:
          return V(exports);
        case P:
          return O(exports);
        case T:
          return function(exports) {
            const t = new Date(Date.UTC(exports.getUTCFullYear(), 0, 1)).getUTCDay(),
              i = 0 === t ? 1 : 8 - t,
              series = W(exports) - i;
            return Math.ceil(s / 7) + 1
          }(exports);
        case M:
          return F(exports);
        case I:
          return R(exports);
        case A:
          return N(exports);
        case x:
          return W(exports);
        case L:
          return function(exports) {
            return exports.getUTCSeconds()
          }(exports);
        default:
          return exports.getTime()
      }
    }

    function ee(exports) {
      return 1e3 * e
    }

    function te(exports, t) {
      return _e(exports) - _e(t)
    }

    function ie(exports, t) {
      return new Date(se(exports, t))
    }

    function se(exports, t) {
      return t + exports.offset_utc(t)
    }

    function oe(exports, t, i, series, o, newSeries, r) {
      const a = new Date(Date.UTC(t, i, series, o || 0, n || 0, r || 0)),
        l = exports.offset_utc(+a);
      return new Date(a.valueOf() - l)
    }

    function ne(exports, t) {
      return new Date(t + exports.offset_utc(t))
    }

    function re(exports, t, i, series = 0, o = 0, newSeries = 0) {
      return new Date(Date.UTC(exports, t, i, series, o, n))
    }

    function ae(exports, t, i) {
      let series = t.getTime();
      i && (s += exports.correction_loc(series));
      return s - exports.offset_loc(series)
    }

    function le(exports) {
      return new n(exports)
    }
    let ce;

    function he(exports) {
      ce = e
    }

    function de(exports, t) {
      const i = exports.length;
      if (0 === i) return -1;
      if (isNaN(t)) throw Error("Key is NaN");
      let series = 0,
        o = i - 1,
        newSeries = ue((s + o) / 2);
      for (;;) {
        if (e[n] > t) {
          if (o = n - 1, o < s) return n
        } else if (series = n + 1, o < s) return n < i - 1 ? n + 1 : -1;
        newSeries = ue((s + o) / 2)
      }
    }

    function ue(exports) {
      return 0 | e
    }

    function _e(exports) {
      return e < 0 ? ue(e / 1e3) - (e % 1e3 != 0 ? 1 : 0) : ue(e / 1e3)
    }
}
