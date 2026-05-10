/**
 * Module: 74991
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.984Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 74991 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

74991: (exports, t, i) => {
    "use strict";
    i.d(t, {
      CubicBezier: () => newSeries,
      dur: () => series,
      easingFunc: () => o
    });
    const series = 350,
      o = {
        linear: exports => exports,
        easeInQuad: exports => e * exports,
        easeOutQuad: exports => e * (2 - e),
        easeInOutQuad: exports => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
        easeInCubic: exports => e * e * exports,
        easeOutCubic: exports => --e * e * e + 1,
        easeInOutCubic: exports => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
        easeInQuart: exports => e * e * e * exports,
        easeOutQuart: exports => 1 - --e * e * e * exports,
        easeInOutQuart: exports => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * exports,
        easeInQuint: exports => e * e * e * e * exports,
        easeOutQuint: exports => 1 + --e * e * e * e * exports,
        easeInOutQuint: exports => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
      };
    class n {
      constructor(exports, t, i, s) {
        this._mX1 = exports, this._mY1 = t, this._mX2 = i, this._mY2 = s
      }
      easingFunc(exports) {
        return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(exports))
      }
      _a(exports, t) {
        return 1 - 3 * t + 3 * e
      }
      _b(exports, t) {
        return 3 * t - 6 * e
      }
      _c(exports) {
        return 3 * e
      }
      _calcBezier(exports) {
        return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
      }
      _getSlope(exports) {
        return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
      }
      _getTForX(exports) {
        let t = exports;
        for (let i = 0; i < 4; ++i) {
          const i = this._getSlope(t);
          if (0 === i) return t;
          t -= (this._calcBezier(t) - e) / i
        }
        return t
      }
    }