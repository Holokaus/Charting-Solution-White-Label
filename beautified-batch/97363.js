/**
 * Module 97363 - Auto-beautified from TradingView webpack bundle
 *
 * @module 97363
 * @date 2026-04-23
 * @size 418 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 10718, 41072
 *
 * Exports:
 *   - dateFormatProperty (internal: l)
 *   - restoreDateFormatSettingsValue (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

97363: (e, t, i) => {
    "use strict";
    i.d(t, {
      dateFormatProperty: () => l,
      restoreDateFormatSettingsValue: () => c
    });
    var s = i(1765),
      o = i(41072),
      n = i(10718);
    const r = "date_format";

    function a() {
      return s.getValue(r, (0, n.defaultDateFormat)())
    }
    const l = (0, o.createPrimitiveProperty)(a());

    function c() {
      l.setValue((0, n.defaultDateFormat)()), s.remove(r)
    }
    s.onSync.subscribe(null, (() => l.setValue(a()))), l.subscribe(null, (() => s.setValue(r, l.value())))
