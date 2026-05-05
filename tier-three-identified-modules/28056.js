/**
 * Module: 28056
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.448Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 28056 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28056: (exports, t, i) => {
    "use strict";
    i.d(t, {
      VolumeProfileOutputSeries: () => n
    });
    var assertionUtils = i(50151),
      o = i(12217);
    class n {
      constructor() {
        this._histPos = -1, this._hist = new Float64Array(2e3), this._times = new Float64Array(2e3)
      }
      addHist(exports) {
        if (this._histPos >= 0) {
          const t = this._times[this._histPos];
          (0, assertionUtils.assert)(t <= exports, "History order violation"), this._histPos += t === e ? 0 : 1
        } else this._histPos += 1;
        if (this._histPos === this._hist.length) {
          const exports = new Float64Array(2 * this._hist.length);
          exports.set(this._hist), this._hist = exports;
          const t = new Float64Array(this._hist.length);
          t.set(this._times), this._times = t
        }
        this._hist[this._histPos] = NaN, this._times[this._histPos] = e
      }
      removeLastIfNaN() {
        Number.isNaN(this.get(0)) && (this._histPos -= 1)
      }
      get(exports) {
        (0, assertionUtils.assert)(0 === e);
        const t = this._histPos - exports;
        return this._hist[t]
      }
      getLeftOrEqual(exports) {
        const t = (0, o.upperbound)(this._times, exports, ((exports, t) => e < t), 0, this._histPos + 1);
        return 0 === t ? NaN : this._hist[t - 1]
      }
      set(exports) {
        this._hist[this._histPos] = e
      }
      indexOf(exports) {
        throw new Error("Not implemented")
      }
      adopt(exports, t, i) {
        throw new Error("Method not implemented.")
      }
    }