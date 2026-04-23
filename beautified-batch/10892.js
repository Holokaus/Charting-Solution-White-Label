/**
 * Module 10892 - Auto-beautified from TradingView webpack bundle
 *
 * @module 10892
 * @date 2026-04-23
 * @size 3371 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - Interval (internal: h)
 *   - ResolutionKind (internal: n)
 *   - SpecialResolutionKind (internal: r)
 *   - isHour (internal: u)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  Interval: () => h,
  ResolutionKind: () => n,
  SpecialResolutionKind: () => r,
  isHour: () => u
});
const s = /^(\d*)([TSHDWMR])$/,
  o = /^(\d+)$/;
var n, r;
! function(e) {
  e.Ticks = "ticks", e.Seconds = "seconds", e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Range = "range", e.Invalid = "invalid"
}(n || (n = {})),
function(e) {
  e.Hours = "hours"
}(r || (r = {}));
const a = {};
a[n.Ticks] = 1e3, a[n.Seconds] = 1e3, a[n.Minutes] = 60 * a[n.Seconds], a[n.Days] = 1440 * a[n.Minutes], a[n.Weeks] = 7 * a[n.Days];
const l = {
    T: n.Ticks,
    S: n.Seconds,
    D: n.Days,
    W: n.Weeks,
    M: n.Months,
    R: n.Range
  },
  c = new Set([n.Ticks, n.Seconds, n.Minutes]);
class h {
  constructor(e, t) {
    this._kind = n.Invalid, this._multiplier = 0, e !== n.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
  }
  kind() {
    return this._kind
  }
  guiKind() {
    return this.isMinuteHours() ? r.Hours : this._kind
  }
  multiplier() {
    return this._multiplier
  }
  isValid() {
    return this.kind() !== n.Invalid && this.multiplier() > 0
  }
  isDWM() {
    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
  }
  isIntraday() {
    const e = c.has(this.kind());
    return this.isValid() && e
  }
  isSeconds() {
    return this.kind() === n.Seconds
  }
  isMinutes() {
    return this.kind() === n.Minutes
  }
  isMinuteHours() {
    return this.kind() === n.Minutes && u(this.multiplier())
  }
  isDays() {
    return this.kind() === n.Days
  }
  isWeeks() {
    return this.kind() === n.Weeks
  }
  isMonths() {
    return this.kind() === n.Months
  }
  isRange() {
    return this.kind() === n.Range
  }
  isTicks() {
    return this.kind() === n.Ticks
  }
  is1Tick() {
    return this.isTicks() && 1 === this.multiplier()
  }
  isTimeBased() {
    return !this.isRange()
  }
  letter() {
    return this.isValid() && this.kind() !== n.Minutes ? this.kind()[0].toUpperCase() : ""
  }
  value() {
    return this.isValid() ? this.kind() === n.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
  }
  isEqualTo(e) {
    if (!(e instanceof h)) throw new Error("Argument is not an Interval");
    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
  }
  inMilliseconds(e = Date.now()) {
    if (!this.isValid() || this.isRange()) return NaN;
    if (this.isMonths()) {
      const t = new Date(e);
      t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
      return +t - e
    }
    const t = this.multiplier();
    return a[this.kind()] * t
  }
  static isEqual(e, t) {
    return e === t || h.parse(e).isEqualTo(h.parse(t))
  }
  static parseExt(e) {
    e = (e + "").toUpperCase().split(",")[0];
    let t = s.exec(e);
    return null !== t ? "H" === t[2] ? {
      interval: new h(n.Minutes, 60 * d(t[1])),
      guiResolutionKind: r.Hours
    } : {
      interval: new h(l[t[2]], d(t[1])),
      guiResolutionKind: l[t[2]]
    } : (t = o.exec(e), null !== t ? {
      interval: new h(n.Minutes, d(t[1])),
      guiResolutionKind: n.Minutes
    } : {
      interval: new h(n.Invalid, 0),
      guiResolutionKind: n.Invalid
    })
  }
  static parse(e) {
    return h.parseExt(e).interval
  }
  static kind(e) {
    return h.parse(e).kind()
  }
  static isValid(e) {
    return h.parse(e).isValid()
  }
  static isDWM(e) {
    return h.parse(e).isDWM()
  }
  static isIntraday(e) {
    return h.parse(e).isIntraday()
  }
  static isSeconds(e) {
    return h.parse(e).isSeconds()
  }
  static isMinutes(e) {
    return h.parse(e).isMinutes()
  }
  static isMinuteHours(e) {
    return h.parse(e).isMinuteHours()
  }
  static isDays(e) {
    return h.parse(e).isDays()
  }
  static isWeeks(e) {
    return h.parse(e).isWeeks()
  }
  static isMonths(e) {
    return h.parse(e).isMonths()
  }
  static isRange(e) {
    return h.parse(e).isRange()
  }
  static isTicks(e) {
    return h.parse(e).isTicks()
  }
  static isTimeBased(e) {
    return h.parse(e).isTimeBased()
  }
  static normalize(e) {
    const t = h.parse(e);
    return t.isValid() ? t.value() : null
  }
}

function d(e) {
  return 0 === e.length ? 1 : parseInt(e, 10)
}

function u(e) {
  return e >= 60 && !(e % 60)
