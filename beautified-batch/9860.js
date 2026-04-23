/**
 * Module 9860 - Auto-beautified from TradingView webpack bundle
 *
 * @module 9860
 * @date 2026-04-23
 * @size 575 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 97906
 *
 * Exports:
 *   - LimitedPrecisionNumericFormatter (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  LimitedPrecisionNumericFormatter: () => n
});
var s, o = i(97906);
! function(e) {
  e[e.DefaultPrecision = 1] = "DefaultPrecision"
}(s || (s = {}));
class n {
  constructor(e, t) {
    this._precision = e ?? 1, this._numericFormatter = new o.NumericFormatter({
      precision: this._precision,
      ignoreLocaleNumberFormat: t
    })
  }
  format(e, t) {
    const i = e.toFixed(this._precision),
      s = Math.pow(10, -this._precision);
    return this._numericFormatter.format(Math.max(parseFloat(i), s), t)
  }
  parse(e, t) {
    const i = this._numericFormatter.parse(e, t);
    return i.res ? {
      res: !0,
      value: i.value,
      suggest: this.format(i.value)
    } : i
  }
