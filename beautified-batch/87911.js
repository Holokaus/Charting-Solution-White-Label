/**
 * Module 87911 - Auto-beautified from TradingView webpack bundle
 *
 * @module 87911
 * @date 2026-04-23
 * @size 394 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 41072
 *
 * Exports:
 *   - restoreShowMarketOpenStatusProperty (internal: c)
 *   - showMarketOpenStatusProperty (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

87911: (e, t, i) => {
    "use strict";
    i.d(t, {
      restoreShowMarketOpenStatusProperty: () => c,
      showMarketOpenStatusProperty: () => l
    });
    var s = i(41072),
      o = i(1765);
    const n = "Chart.ShowMarketOpenStatus",
      r = !0;

    function a() {
      return o.getBool(n, r)
    }
    const l = (0, s.createPrimitiveProperty)(a());

    function c() {
      l.setValue(r), o.remove(n)
    }
    o.onSync.subscribe(null, (() => l.setValue(a()))), l.subscribe(null, (() => o.setValue(n, l.value())))
