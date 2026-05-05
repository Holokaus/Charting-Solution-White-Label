/**
 * Module: 60336
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.827Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 60336 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60336: (exports, t, i) => {
    "use strict";
    i.d(t, {
      DateFormatter: () => n
    });
    var series = i(35727),
      o = i(10718);
    class n {
      constructor(exports = "yyyy-MM-dd", t = !1, i = "UTC") {
        this._dateFormatFunc = t ? (0, o.getDateFormatWithWeekday)(exports, i) : o.dateFormatFunctions[e]
      }
      format(exports) {
        return series.customFormatters && series.customFormatters.dateFormatter ? series.customFormatters.dateFormatter.format(exports) :
          this._dateFormatFunc(exports, !1)
      }
      formatLocal(exports) {
        return series.customFormatters.dateFormatter ? series.customFormatters.dateFormatter.formatLocal ? series.customFormatters
          .dateFormatter.formatLocal(exports) : series.customFormatters.dateFormatter.format(exports) : this._dateFormatFunc(exports, !0)
      }
      parse(exports) {
        if ("" === e) return {
          res: !1
        };
        let t = exports;
        return series.customFormatters && series.customFormatters.dateFormatter && !series.customFormatters.dateFormatter.parse &&
          console.warn("You need to provide a `parse` function as part of `dateFormatter`"), series.customFormatters && s
          .customFormatters.dateFormatter && series.customFormatters.dateFormatter.parse && (t = String(series.customFormatters
            .dateFormatter.parse(exports))), {
            res: !0,
            value: t
          }
      }
    }