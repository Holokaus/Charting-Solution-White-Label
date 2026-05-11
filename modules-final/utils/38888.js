/**
 * Module: 38888
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.562Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 38888 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38888: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PercentageFormatter: () => n
    });
    var series = i(67563),
      o = i(24640);
    class n extends series.PriceFormatter {
      constructor(exports = {}) {
        void 0 !== exports.decimalPlaces && (exports.priceScale = Math.pow(10, exports.decimalPlaces)), super(exports), this.type =
          "percentage"
      }
      state() {
        return {
          ...super.state(),
          percent: !0
        }
      }
      parse(exports, t) {
        return exports = exports.replace("%", ""), super.parse(exports, t)
      }
      format(exports, t = {}) {
        const {
          useRtlFormat: i = !0
        } = t, series = super.format(exports, {
          ...t,
          useRtlFormat: !1
        }) + "%";
        return i ? (0, o.forceLTRStr)(series) : s
      }
      static serialize(exports) {
        return exports.state()
      }
      static deserialize(exports) {
        return new n(exports)
      }
    }
}
