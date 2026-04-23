/**
 * Module 3190 - Auto-beautified from TradingView webpack bundle
 *
 * @module 3190
 * @date 2026-04-23
 * @size 392 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 41072
 *
 * Exports:
 *   - restoreTimeHoursFormatSettingsValue (internal: l)
 *   - timeHoursFormatProperty (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

3190: (e, t, i) => {
    "use strict";
    i.d(t, {
      restoreTimeHoursFormatSettingsValue: () => l,
      timeHoursFormatProperty: () => a
    });
    var s = i(1765),
      o = i(41072);
    const n = "time_hours_format";

    function r() {
      return s.getValue(n, "24-hours")
    }
    const a = (0, o.createPrimitiveProperty)(r());

    function l() {
      a.setValue("24-hours"), s.remove(n)
    }
    s.onSync.subscribe(null, (() => a.setValue(r()))), a.subscribe(null, (() => s.setValue(n, a.value())))
