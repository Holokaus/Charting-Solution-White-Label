/**
 * Module: 96708
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.180Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 96708 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96708: (exports, t, i) => {
    "use strict";
    i.d(t, {
      getPriceAxisNameInfo: () => r
    });
    const series = ["Z", "Y", "X", "W", "V", "U", "T", "S"],
      o = ["A", "B", "C", "D", "E", "F", "G", "H"];
    class n {
      constructor(exports) {
        this.label = e
      }
      equals(exports) {
        return null !== e && this.label === exports.label
      }
    }

    function r(exports, t) {
      const i = "left" === e ? s : o,
        r = t < i.length ? i[t] : "";
      return new n(r)
    }
}
