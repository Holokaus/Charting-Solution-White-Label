/**
 * Module 60336 - Auto-beautified from TradingView webpack bundle
 *
 * @module 60336
 * @date 2026-04-23
 * @size 967 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 10718, 35727
 *
 * Exports:
 *   - DateFormatter (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  DateFormatter: () => n
});
var s = i(35727),
  o = i(10718);
class n {
  constructor(e = "yyyy-MM-dd", t = !1, i = "UTC") {
    this._dateFormatFunc = t ? (0, o.getDateFormatWithWeekday)(e, i) : o.dateFormatFunctions[e]
  }
  format(e) {
    return s.customFormatters && s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !1)
  }
  formatLocal(e) {
    return s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.formatLocal ? s.customFormatters.dateFormatter.formatLocal(e) : s.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !0)
  }
  parse(e) {
    if ("" === e) return {
      res: !1
    };
    let t = e;
    return s.customFormatters && s.customFormatters.dateFormatter && !s.customFormatters.dateFormatter.parse && console.warn("You need to provide a `parse` function as part of `dateFormatter`"), s.customFormatters && s.customFormatters.dateFormatter && s.customFormatters.dateFormatter.parse && (t = String(s.customFormatters.dateFormatter.parse(e))), {
      res: !0,
      value: t
    }
  }
