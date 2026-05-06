/**
 * Module 60336 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60336: (e, t, i) => {
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
        return s.customFormatters && s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.format(e) :
          this._dateFormatFunc(e, !1)
      }
      formatLocal(e) {
        return s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.formatLocal ? s.customFormatters
          .dateFormatter.formatLocal(e) : s.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !0)
      }
      parse(e) {
        if ("" === e) return {
          res: !1
        };
        let t = e;
        return s.customFormatters && s.customFormatters.dateFormatter && !s.customFormatters.dateFormatter.parse &&
          console.warn("You need to provide a `parse` function as part of `dateFormatter`"), s.customFormatters && s
          .customFormatters.dateFormatter && s.customFormatters.dateFormatter.parse && (t = String(s.customFormatters
            .dateFormatter.parse(e))), {
            res: !0,
            value: t
          }
      }
    }