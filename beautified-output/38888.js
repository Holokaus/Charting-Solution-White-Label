/**
 * Module 38888 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38888: (e, t, i) => {
    "use strict";
    i.d(t, {
      PercentageFormatter: () => n
    });
    var s = i(67563),
      o = i(24640);
    class n extends s.PriceFormatter {
      constructor(e = {}) {
        void 0 !== e.decimalPlaces && (e.priceScale = Math.pow(10, e.decimalPlaces)), super(e), this.type =
          "percentage"
      }
      state() {
        return {
          ...super.state(),
          percent: !0
        }
      }
      parse(e, t) {
        return e = e.replace("%", ""), super.parse(e, t)
      }
      format(e, t = {}) {
        const {
          useRtlFormat: i = !0
        } = t, s = super.format(e, {
          ...t,
          useRtlFormat: !1
        }) + "%";
        return i ? (0, o.forceLTRStr)(s) : s
      }
      static serialize(e) {
        return e.state()
      }
      static deserialize(e) {
        return new n(e)
      }
    }