/**
 * Module 86957 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86957: (e, t, i) => {
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
    }