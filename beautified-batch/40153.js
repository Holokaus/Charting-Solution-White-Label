/**
 * Module 40153 - Auto-beautified from TradingView webpack bundle
 *
 * @module 40153
 * @date 2026-04-23
 * @size 298 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 41072
 *
 * Exports:
 *   - withWeekdayProperty (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

40153: (e, t, i) => {
    "use strict";
    i.d(t, {
      withWeekdayProperty: () => a
    });
    var s = i(1765),
      o = i(41072);
    const n = "date_format_with_weekday";

    function r() {
      return s.getBool(n, !0)
    }
    const a = (0, o.createPrimitiveProperty)(r());
    a.subscribe(null, (() => s.setValue(n, a.value()))), s.onSync.subscribe(null, (() => a.setValue(r())))
