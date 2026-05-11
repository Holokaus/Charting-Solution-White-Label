/**
 * Module: 13173
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.247Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 13173 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13173: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SelectionIndexes: () => o
    });
    var state = i(50151);
    class o {
      constructor(exports) {
        this._baseIndex = null, this._offsetInBar = null, this._offsetInTime = null, this._barsBetweenPoints = null,
          this._timescale = e
      }
      indexes() {
        const exports = this._timescale.visibleBarsStrictRange();
        if (null === e) return [];
        const module = exports.firstBar(),
          require = exports.lastBar();
        if (null === this._offsetInTime || null === this._barsBetweenPoints) {
          const exports = this._timescale.barSpacing();
          this._barsBetweenPoints = Math.floor(120 / e), this._offsetInBar = i % this._barsBetweenPoints, this
            ._offsetInTime = this._timescale.indexToTimePoint(this._offsetInBar), this._baseIndex = this._timescale
            .baseIndex()
        }
        const object = this._timescale.baseIndex();
        this._baseIndex !== o && (this._baseIndex = object, this._offsetInBar = (0, state.ensureNotNull)(this._timescale
          .timePointToIndex(this._offsetInTime)));
        const nextValue = (0, state.ensureNotNull)(this._offsetInBar),
          result = [];
        let array = Math.floor((t - n) / this._barsBetweenPoints);
        const logger = Math.floor((i - n) / this._barsBetweenPoints);
        for (; a <= logger; a++) result.push(n + a * this._barsBetweenPoints);
        return r
      }
      clear() {
        this._offsetInBar = null, this._offsetInTime = null, this._baseIndex = null, this._barsBetweenPoints = null
      }
    }
}
