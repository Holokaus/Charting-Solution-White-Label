/**
 * Module 37236 - Auto-beautified from TradingView webpack bundle
 *
 * @module 37236
 * @date 2026-04-23
 * @size 4501 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 87453
 *
 * Exports:
 *   - DAY_OF_MONTH (internal: P)
 *   - DAY_OF_WEEK (internal: M)
 *   - DECEMBER (internal: b)
 *   - FIRST_DAY_OF_WEEK (internal: _)
 *   - FRIDAY (internal: d)
 *   - HOUR_OF_DAY (internal: I)
 *   - JANUARY (internal: m)
 *   - JULY (internal: y)
 *   - LAST_DAY_OF_WEEK (internal: p)
 *   - MARCH (internal: g)
 *   - MAY (internal: f)
 *   - MINUTE (internal: A)
 *   - MONDAY (internal: a)
 *   - MONTH (internal: C)
 *   - NOVEMBER (internal: S)
 *   - SATURDAY (internal: u)
 *   - SECOND (internal: L)
 *   - SEPTEMBER (internal: v)
 *   - SUNDAY (internal: r)
 *   - THURSDAY (internal: h)
 *   - TUESDAY (internal: l)
 *   - WEDNESDAY (internal: c)
 *   - WEEK_OF_YEAR (internal: T)
 *   - YEAR (internal: w)
 *   - add_date (internal: q)
 *   - add_days_considering_dst (internal: j)
 *   - add_years_considering_dst (internal: G)
 *   - cal_to_utc (internal: ae)
 *   - clone (internal: Y)
 *   - days_per_year (internal: X)
 *   - get_cal (internal: oe)
 *   - get_cal_from_unix_timestamp_ms (internal: ne)
 *   - get_cal_utc (internal: re)
 *   - get_day_of_month (internal: O)
 *   - get_day_of_week (internal: F)
 *   - get_day_of_year (internal: W)
 *   - get_hours (internal: R)
 *   - get_minutes (internal: N)
 *   - get_minutes_from_midnight (internal: H)
 *   - get_minutes_with_hours (internal: z)
 *   - get_month (internal: V)
 *   - get_part (internal: Q)
 *   - get_timezone (internal: le)
 *   - get_year (internal: B)
 *   - is_leap_year (internal: J)
 *   - minutesPerDay (internal: k)
 *   - minutesPerWeek (internal: E)
 *   - setCustomTimezones (internal: he)
 *   - set_hms (internal: U)
 *   - set_seconds (internal: K)
 *   - time_seconds (internal: ee)
 *   - time_seconds_diff (internal: te)
 *   - utc_to_cal (internal: ie)
 *   - utc_to_cal_ts (internal: se)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
var s = i(87453);
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
  constructor(e) {
    this._invalid = !1, this._name = e;
    let t = s.tzData[e];
    !t && ce && (t = ce.instance().getTimezoneData(e)), t || (t = {
      time: [],
      offset: []
    }, this._invalid = !0), t.time.length !== t.offset.length && (t = {
      time: [],
      offset: []
    }, this._invalid = !0);
    const i = t;
    if (!i.time_utc) {
      const e = t.time,
        s = t.offset,
        o = e.length,
        n = new Array(o);
      for (let t = 0; t < o; t++) e[t] *= 1e3, s[t] *= 1e3, n[t] = e[t] - s[t];
      i.time_utc = n
    }
    this.tz = i
  }
  offset_utc(e) {
    return n.offset(this.tz.time_utc, this.tz.offset, e)
  }
  offset_loc(e) {
    return n.offset(this.tz.time, this.tz.offset, e)
  }
  name() {
    return this._name
  }
  is_valid() {
    return !this._invalid
  }
  correction_loc(e) {
    const t = this.tz.time,
      i = this.tz.offset,
      s = de(t, e);
    if (s < 1) return 0;
    const o = i[s] - i[s - 1];
    if (o > 0) {
      if (e - t[s - 1] <= o) return o
    }
    return 0
  }
  static offset(e, t, i) {
    const s = de(e, i);
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

function B(e) {
  return e.getUTCFullYear()
}

function V(e) {
  return e.getUTCMonth()
}

function R(e) {
  return e.getUTCHours()
}

function N(e) {
  return e.getUTCMinutes()
}

function O(e) {
  return e.getUTCDate()
}

function F(e) {
  return e.getUTCDay() + 1
}

function W(e) {
  const t = e.getUTCMonth();
  let i = o[t];
  return t > m + 1 && J(e.getUTCFullYear()) && (i += 1), i + e.getUTCDate()
}

function H(e) {
  return 60 * R(e) + N(e)
}

function z(e) {
  return H(e)
}

function U(e, t, i, s, o, n) {
  e.setUTCHours(t), e.setUTCMinutes(i), e.setUTCSeconds(s), e.setUTCMilliseconds(o), void 0 !== n && function(e, t) {
    const i = e.getTime(),
      s = t.correction_loc(i);
    e.setTime(i + s)
  }(e, n)
}

function j(e, t, i) {
  const s = e.offset_utc(t.getTime()),
    o = Y(t);
  q(o, i);
  const n = e.offset_utc(o.getTime());
  return o.setTime(o.getTime() + s - n), o
}

function G(e, t, i) {
  let s = t;
  for (let t = Math.abs(i); t > 0; t--) s = j(e, s, Z(s) * Math.sign(i));
  return s
}

function q(e, t) {
  e.setTime(e.getTime() + t * D)
}

function $(e, t) {
  e.setTime(e.getTime() + 60 * t * 1e3)
}

function K(e, t) {
  const i = 86400,
    s = t % i < 0 ? -1 : 0,
    o = Math.trunc(t / i) + s,
    n = t - o * i,
    r = Math.trunc(n / 3600),
    a = Math.trunc(n % 3600 / 60);
  U(e, r, a, n - 3600 * r - 60 * a, 0), q(e, o)
}

function Y(e) {
  return new Date(e.getTime())
}

function Z(e) {
  return X(e.getUTCFullYear())
}

function X(e) {
  return J(e) ? 366 : 365
}

function J(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
}

function Q(e, t) {
  switch (t) {
    case w:
      return B(e);
    case C:
      return V(e);
    case P:
      return O(e);
    case T:
      return function(e) {
        const t = new Date(Date.UTC(e.getUTCFullYear(), 0, 1)).getUTCDay(),
          i = 0 === t ? 1 : 8 - t,
          s = W(e) - i;
        return Math.ceil(s / 7) + 1
      }(e);
    case M:
      return F(e);
    case I:
      return R(e);
    case A:
      return N(e);
    case x:
      return W(e);
    case L:
      return function(e) {
        return e.getUTCSeconds()
      }(e);
    default:
      return e.getTime()
  }
}

function ee(e) {
  return 1e3 * e
}

function te(e, t) {
  return _e(e) - _e(t)
}

function ie(e, t) {
  return new Date(se(e, t))
}

function se(e, t) {
  return t + e.offset_utc(t)
}

function oe(e, t, i, s, o, n, r) {
  const a = new Date(Date.UTC(t, i, s, o || 0, n || 0, r || 0)),
    l = e.offset_utc(+a);
  return new Date(a.valueOf() - l)
}

function ne(e, t) {
  return new Date(t + e.offset_utc(t))
}

function re(e, t, i, s = 0, o = 0, n = 0) {
  return new Date(Date.UTC(e, t, i, s, o, n))
}

function ae(e, t, i) {
  let s = t.getTime();
  i && (s += e.correction_loc(s));
  return s - e.offset_loc(s)
}

function le(e) {
  return new n(e)
}
let ce;

function he(e) {
  ce = e
}

function de(e, t) {
  const i = e.length;
  if (0 === i) return -1;
  if (isNaN(t)) throw Error("Key is NaN");
  let s = 0,
    o = i - 1,
    n = ue((s + o) / 2);
  for (;;) {
    if (e[n] > t) {
      if (o = n - 1, o < s) return n
    } else if (s = n + 1, o < s) return n < i - 1 ? n + 1 : -1;
    n = ue((s + o) / 2)
  }
}

function ue(e) {
  return 0 | e
}

function _e(e) {
  return e < 0 ? ue(e / 1e3) - (e % 1e3 != 0 ? 1 : 0) : ue(e / 1e3)
