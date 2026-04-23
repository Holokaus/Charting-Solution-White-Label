/**
 * Module 71149 - Auto-beautified from TradingView webpack bundle
 *
 * @module 71149
 * @date 2026-04-23
 * @size 1069 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37236, 97725
 *
 * Exports:
 *   - BusinessDay (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  BusinessDay: () => n
});
var s = i(37236),
  o = i(97725);
class n {
  constructor(e, t, i) {
    this.year = e, this.month = t, this.day = i
  }
  toString() {
    return `${(0,o.addLeadingZeros)(this.year,4)}-${(0,o.addLeadingZero)(this.month)}-${(0,o.addLeadingZero)(this.day)}`
  }
  toyyyymmdd() {
    return `${(0,o.addLeadingZeros)(this.year,4)}${(0,o.addLeadingZero)(this.month)}${(0,o.addLeadingZero)(this.day)}`
  }
  compareTo(e) {
    return this.year > e.year || this.year === e.year && this.month > e.month || this.year === e.year && this.month === e.month && this.day > e.day ? 1 : this.year === e.year && this.month === e.month && this.day === e.day ? 0 : -1
  }
  before(e) {
    return -1 === this.compareTo(e)
  }
  toCalendar(e) {
    return (0, s.get_cal)(e ?? (0, s.get_timezone)("Etc/UTC"), this.year, this.month - 1, this.day)
  }
  addDays(e) {
    const t = this.toCalendar((0, s.get_timezone)("Etc/UTC"));
    return (0, s.add_date)(t, e), n.fromCalendar(t)
  }
  firstDayOfYear() {
    return new n(this.year, 1, 1)
  }
  getDayOfWeek() {
    const e = this.toCalendar();
    return (0, s.get_day_of_week)(e)
  }
  static fromCalendar(e) {
    return new n((0, s.get_year)(e), (0, s.get_month)(e) + 1, (0, s.get_day_of_month)(e))
  }
