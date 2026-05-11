/**
 * Module: 86957
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.099Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 86957 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86957: (exports, module, i) => {
    "use strict";
    require.d(module, {
      DateTimeFormatter: () => r
    });
    var state = i(82087),
      object = i(60336);
    const nextValue = {
      dateFormat: "yyyy-MM-dd",
      withWeekday: !1,
      timeFormat: state.hourMinuteSecondFormat,
      dateTimeSeparator: " "
    };
    class r {
      constructor(exports = {}) {
        const module = Object.assign({}, nextValue, e);
        this._dateFormatter = new object.DateFormatter(module.dateFormat, module.withWeekday, module.timezone),
          this._timeFormatter = new state.TimeFormatter(module.timeFormat), this._separator = module.dateTimeSeparator
      }
      format(exports, t) {
        const require = t?.dateTimeSeparator ?? this._separator;
        return `${this._dateFormatter.format(exports)}${i}${this._timeFormatter.format(exports)}`
      }
      formatLocal(exports, t) {
        const require = t?.dateTimeSeparator ?? this._separator;
        return `${this._dateFormatter.formatLocal(exports)}${i}${this._timeFormatter.formatLocal(exports)}`
      }
    }
}
