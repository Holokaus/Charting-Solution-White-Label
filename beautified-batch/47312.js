/**
 * Module 47312 - Auto-beautified from TradingView webpack bundle
 *
 * @module 47312
 * @date 2026-04-23
 * @size 697 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 16329, 37236, 51829
 *
 * Exports:
 *   - BarBuilderBase (internal: a)
 *   - SessionInfo (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  BarBuilderBase: () => a,
  SessionInfo: () => r
});
var s = i(37236),
  o = i(51829),
  n = i(16329);
class r {
  constructor(e, t, i, s) {
    this.init(e, t, i, s), this._state = {
      timezone: e,
      spec: t,
      holidays: i,
      corrections: s
    }
  }
  init(e, t, i, o) {
    this.timezone = (0, s.get_timezone)(e), this.spec = new n.SessionsSpec(e, t, i, o)
  }
  state() {
    return this._state
  }
  static fromState(e) {
    return new r(e.timezone, e.spec, e.holidays, e.corrections)
  }
  static wrap(e) {
    const t = new r("Etc/UTC", "24x7");
    return t.spec = e, t
  }
  static create(e, t, i, s) {
    return new r(e, t, i, s)
  }
}
class a {
  alignTime(e) {
    if (isNaN(e)) return NaN;
    let t = this.indexOfBar(e);
    return t === o.SessionStage.POST_SESSION && (this.moveTo(e), t = this.indexOfBar(e)), t < 0 ? NaN : this.startOfBar(t)
  }
