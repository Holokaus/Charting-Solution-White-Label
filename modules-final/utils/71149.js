/**
 * Module: 71149
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.894Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 71149 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

71149: (exports, t, i) => {
    "use strict";
    i.d(t, {
      BusinessDay: () => n
    });
    var series = i(37236),
      o = i(97725);
    class n {
      constructor(exports, t, i) {
        this.year = exports, this.month = t, this.day = i
      }
      toString() {
        return `${(0,o.addLeadingZeros)(this.year,4)}-${(0,o.addLeadingZero)(this.month)}-${(0,o.addLeadingZero)(this.day)}`
      }
      toyyyymmdd() {
        return `${(0,o.addLeadingZeros)(this.year,4)}${(0,o.addLeadingZero)(this.month)}${(0,o.addLeadingZero)(this.day)}`
      }
      compareTo(exports) {
        return this.year > exports.year || this.year === exports.year && this.month > exports.month || this.year === exports.year && this
          .month === exports.month && this.day > exports.day ? 1 : this.year === exports.year && this.month === exports.month && this.day ===
          exports.day ? 0 : -1
      }
      before(exports) {
        return -1 === this.compareTo(exports)
      }
      toCalendar(exports) {
        return (0, series.get_cal)(e ?? (0, series.get_timezone)("Etc/UTC"), this.year, this.month - 1, this.day)
      }
      addDays(exports) {
        const t = this.toCalendar((0, series.get_timezone)("Etc/UTC"));
        return (0, series.add_date)(t, e), newSeries.fromCalendar(t)
      }
      firstDayOfYear() {
        return new n(this.year, 1, 1)
      }
      getDayOfWeek() {
        const exports = this.toCalendar();
        return (0, series.get_day_of_week)(exports)
      }
      static fromCalendar(exports) {
        return new n((0, series.get_year)(exports), (0, series.get_month)(exports) + 1, (0, series.get_day_of_month)(exports))
      }
    }