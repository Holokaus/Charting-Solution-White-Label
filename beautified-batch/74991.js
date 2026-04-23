/**
 * Module 74991 - Auto-beautified from TradingView webpack bundle
 *
 * @module 74991
 * @date 2026-04-23
 * @size 1087 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - CubicBezier (internal: n)
 *   - dur (internal: s)
 *   - easingFunc (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  CubicBezier: () => n,
  dur: () => s,
  easingFunc: () => o
});
const s = 350,
  o = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => e * (2 - e),
    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
    easeInCubic: e => e * e * e,
    easeOutCubic: e => --e * e * e + 1,
    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => 1 - --e * e * e * e,
    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => 1 + --e * e * e * e * e,
    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
  };
class n {
  constructor(e, t, i, s) {
    this._mX1 = e, this._mY1 = t, this._mX2 = i, this._mY2 = s
  }
  easingFunc(e) {
    return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(e))
  }
  _a(e, t) {
    return 1 - 3 * t + 3 * e
  }
  _b(e, t) {
    return 3 * t - 6 * e
  }
  _c(e) {
    return 3 * e
  }
  _calcBezier(e) {
    return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
  }
  _getSlope(e) {
    return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
  }
  _getTForX(e) {
    let t = e;
    for (let i = 0; i < 4; ++i) {
      const i = this._getSlope(t);
      if (0 === i) return t;
      t -= (this._calcBezier(t) - e) / i
    }
    return t
  }
