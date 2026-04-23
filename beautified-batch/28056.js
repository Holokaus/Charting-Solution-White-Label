/**
 * Module 28056 - Auto-beautified from TradingView webpack bundle
 *
 * @module 28056
 * @date 2026-04-23
 * @size 1008 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 12217, 50151
 *
 * Exports:
 *   - VolumeProfileOutputSeries (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  VolumeProfileOutputSeries: () => n
});
var s = i(50151),
  o = i(12217);
class n {
  constructor() {
    this._histPos = -1, this._hist = new Float64Array(2e3), this._times = new Float64Array(2e3)
  }
  addHist(e) {
    if (this._histPos >= 0) {
      const t = this._times[this._histPos];
      (0, s.assert)(t <= e, "History order violation"), this._histPos += t === e ? 0 : 1
    } else this._histPos += 1;
    if (this._histPos === this._hist.length) {
      const e = new Float64Array(2 * this._hist.length);
      e.set(this._hist), this._hist = e;
      const t = new Float64Array(this._hist.length);
      t.set(this._times), this._times = t
    }
    this._hist[this._histPos] = NaN, this._times[this._histPos] = e
  }
  removeLastIfNaN() {
    Number.isNaN(this.get(0)) && (this._histPos -= 1)
  }
  get(e) {
    (0, s.assert)(0 === e);
    const t = this._histPos - e;
    return this._hist[t]
  }
  getLeftOrEqual(e) {
    const t = (0, o.upperbound)(this._times, e, ((e, t) => e < t), 0, this._histPos + 1);
    return 0 === t ? NaN : this._hist[t - 1]
  }
  set(e) {
    this._hist[this._histPos] = e
  }
  indexOf(e) {
    throw new Error("Not implemented")
  }
  adopt(e, t, i) {
    throw new Error("Method not implemented.")
  }
