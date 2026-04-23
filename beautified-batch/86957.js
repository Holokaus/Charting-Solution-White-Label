/**
 * Module 86957 - Auto-beautified from TradingView webpack bundle
 *
 * @module 86957
 * @date 2026-04-23
 * @size 707 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 60336, 82087
 *
 * Exports:
 *   - DateTimeFormatter (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  DateTimeFormatter: () => r
});
var s = i(82087),
  o = i(60336);
const n = {
  dateFormat: "yyyy-MM-dd",
  withWeekday: !1,
  timeFormat: s.hourMinuteSecondFormat,
  dateTimeSeparator: " "
};
class r {
  constructor(e = {}) {
    const t = Object.assign({}, n, e);
    this._dateFormatter = new o.DateFormatter(t.dateFormat, t.withWeekday, t.timezone),
      this._timeFormatter = new s.TimeFormatter(t.timeFormat), this._separator = t.dateTimeSeparator
  }
  format(e, t) {
    const i = t?.dateTimeSeparator ?? this._separator;
    return `${this._dateFormatter.format(e)}${i}${this._timeFormatter.format(e)}`
  }
  formatLocal(e, t) {
    const i = t?.dateTimeSeparator ?? this._separator;
    return `${this._dateFormatter.formatLocal(e)}${i}${this._timeFormatter.formatLocal(e)}`
  }
