/**
 * Module 13173 - Auto-beautified from TradingView webpack bundle
 *
 * @module 13173
 * @date 2026-04-23
 * @size 1114 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - SelectionIndexes (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SelectionIndexes: () => o
});
var s = i(50151);
class o {
  constructor(e) {
    this._baseIndex = null, this._offsetInBar = null, this._offsetInTime = null, this._barsBetweenPoints = null, this._timescale = e
  }
  indexes() {
    const e = this._timescale.visibleBarsStrictRange();
    if (null === e) return [];
    const t = e.firstBar(),
      i = e.lastBar();
    if (null === this._offsetInTime || null === this._barsBetweenPoints) {
      const e = this._timescale.barSpacing();
      this._barsBetweenPoints = Math.floor(120 / e), this._offsetInBar = i % this._barsBetweenPoints, this._offsetInTime = this._timescale.indexToTimePoint(this._offsetInBar), this._baseIndex = this._timescale.baseIndex()
    }
    const o = this._timescale.baseIndex();
    this._baseIndex !== o && (this._baseIndex = o, this._offsetInBar = (0, s.ensureNotNull)(this._timescale.timePointToIndex(this._offsetInTime)));
    const n = (0, s.ensureNotNull)(this._offsetInBar),
      r = [];
    let a = Math.floor((t - n) / this._barsBetweenPoints);
    const l = Math.floor((i - n) / this._barsBetweenPoints);
    for (; a <= l; a++) r.push(n + a * this._barsBetweenPoints);
    return r
  }
  clear() {
    this._offsetInBar = null, this._offsetInTime = null, this._baseIndex = null, this._barsBetweenPoints = null
  }
