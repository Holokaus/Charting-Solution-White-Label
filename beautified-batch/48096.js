/**
 * Module 48096 - Auto-beautified from TradingView webpack bundle
 *
 * @module 48096
 * @date 2026-04-23
 * @size 866 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343
 *
 * Exports:
 *   - Delegate (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  Delegate: () => n
});
const s = (0, i(9343).getLogger)("Common.Delegate");

function o(e) {
  return !e.singleShot
}
class n {
  constructor() {
    this.fire = this._fireImpl.bind(this), this._listeners = []
  }
  subscribe(e, t, i) {
    this._listeners.push({
      object: e,
      member: t,
      singleShot: !!i,
      skip: !1
    })
  }
  unsubscribe(e, t) {
    for (let i = 0; i < this._listeners.length; ++i) {
      const s = this._listeners[i];
      if (s.object === e && s.member === t) {
        s.skip = !0, this._listeners.splice(i, 1);
        break
      }
    }
  }
  unsubscribeAll(e) {
    for (let t = this._listeners.length - 1; t >= 0; --t) {
      const i = this._listeners[t];
      i.object === e && (i.skip = !0, this._listeners.splice(t, 1))
    }
  }
  destroy() {
    this._listeners = []
  }
  _fireImpl(...e) {
    const t = this._listeners;
    this._listeners = this._listeners.filter(o);
    const i = t.length;
    for (let o = 0; o < i; ++o) {
      const i = t[o];
      if (!i.skip) try {
        i.member.apply(i.object || null, e)
      } catch (e) {
        s.logError(`${e&&(e.stack||e.message)}`)
      }
    }
  }
