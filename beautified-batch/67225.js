/**
 * Module 67225 - Auto-beautified from TradingView webpack bundle
 *
 * @module 67225
 * @date 2026-04-23
 * @size 442 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 52859
 *
 * Exports:
 *   - GradientColorCache (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  GradientColorCache: () => o
});
var s = i(52859);
class o {
  constructor() {
    this._color1 = "", this._color2 = "", this._colors = new Map
  }
  gradientColor(e, t, i) {
    if (t === e) return t;
    i = Math.max(0, Math.min(100, Math.round(100 * i))), this._color1 === e && this._color2 === t || (this._colors.clear(), this._color1 = e, this._color2 = t);
    let o = this._colors.get(i);
    return void 0 === o && (o = (0, s.gradientColorAtPercent)(e, t, i / 100), this._colors.set(i, o)), o
  }
