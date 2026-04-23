/**
 * Module 18185 - Auto-beautified from TradingView webpack bundle
 *
 * @module 18185
 * @date 2026-04-23
 * @size 578 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 5977, 11542, 21492, 26010, 44634, 85886, 91799
 *
 * Exports:
 *   - TimeSpanFormatter (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  TimeSpanFormatter: () => r
});
var s = i(11542),
  o = i(91799),
  n = i(26010);
class r {
  format(e, t) {
    const r = e < 0;
    e = Math.abs(e);
    const a = Math.floor(e / 86400);
    e -= 86400 * a;
    const l = Math.floor(e / 3600);
    e -= 3600 * l;
    const c = Math.floor(e / 60);
    e -= 60 * c;
    let h = "";
    if (a) {
      const e = (0, n.getNumberFormat)(t?.ignoreLocaleNumberFormat);
      h += (0, o.formatNumber)(a, e) + s.t(null, {
        context: "dates"
      }, i(85886)) + " "
    }
    return l && (h += l + s.t(null, {
      context: "dates"
    }, i(44634)) + " "), c && (h += c + s.t(null, {
      context: "dates"
    }, i(5977)) + " "), e && (h += e + s.t(null, {
      context: "dates"
    }, i(21492)) + " "), r && (h = "-" + h), h.trim()
  }
