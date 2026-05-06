/**
 * Module 60336 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60336: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      DateFormatter: () => logger_n
    });
    var logger_s = logger_i(35727),
      logger_o = logger_i(10718);
    class logger_n {
      constructor(logger_e = "yyyy-MM-dd", logger_t = !1, logger_i = "UTC") {
        this._dateFormatFunc = logger_t ? (0, logger_o.getDateFormatWithWeekday)(logger_e, logger_i) : logger_o.dateFormatFunctions[logger_e]
      }
      format(logger_e) {
        return logger_s.customFormatters && logger_s.customFormatters.dateFormatter ? logger_s.customFormatters.dateFormatter.format(logger_e) :
          this._dateFormatFunc(logger_e, !1)
      }
      formatLocal(logger_e) {
        return logger_s.customFormatters.dateFormatter ? logger_s.customFormatters.dateFormatter.formatLocal ? logger_s.customFormatters
          .dateFormatter.formatLocal(logger_e) : logger_s.customFormatters.dateFormatter.format(logger_e) : this._dateFormatFunc(logger_e, !0)
      }
      parse(logger_e) {
        if ("" === logger_e) return {
          res: !1
        };
        let logger_t = logger_e;
        return logger_s.customFormatters && logger_s.customFormatters.dateFormatter && !logger_s.customFormatters.dateFormatter.parse &&
          console.warn("You need to provide logger_a `parse` function as part of `dateFormatter`"), logger_s.customFormatters && logger_s
          .customFormatters.dateFormatter && logger_s.customFormatters.dateFormatter.parse && (logger_t = String(logger_s.customFormatters
            .dateFormatter.parse(logger_e))), {
            res: !0,
            value: logger_t
          }
      }
    }