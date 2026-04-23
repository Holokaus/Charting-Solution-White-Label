/**
 * Module 28001 - Auto-beautified from TradingView webpack bundle
 *
 * @module 28001
 * @date 2026-04-23
 * @size 645 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - BarsRange (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  BarsRange: () => o
});
var s = i(50151);
class o {
  constructor(e, t) {
    (0, s.assert)(e <= t, "The last bar in the bars range should be greater than or equal to the first bar"), this._firstBar = e, this._lastBar = t
  }
  firstBar() {
    return this._firstBar
  }
  lastBar() {
    return this._lastBar
  }
  count() {
    return this._lastBar - this._firstBar + 1
  }
  contains(e) {
    return this._firstBar <= e && e <= this._lastBar
  }
  unite(e) {
    return null === e ? this : new o(Math.min(this._firstBar, e.firstBar()), Math.max(this._lastBar, e.lastBar()))
  }
  equals(e) {
    return this._firstBar === e.firstBar() && this._lastBar === e.lastBar()
  }
  static compare(e, t) {
    return null === e || null === t ? e === t : e.equals(t)
  }
