/**
 * Module 38888 - Auto-beautified from TradingView webpack bundle
 *
 * @module 38888
 * @date 2026-04-23
 * @size 537 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 24640, 67563
 *
 * Exports:
 *   - PercentageFormatter (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  PercentageFormatter: () => n
});
var s = i(67563),
  o = i(24640);
class n extends s.PriceFormatter {
    constructor(e = {}) {
      void 0 !== e.decimalPlaces && (e.priceScale = Math.pow(10, e.decimalPlaces)), super(e), this.type = "percentage"
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
