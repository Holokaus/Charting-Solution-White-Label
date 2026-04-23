/**
 * Module 57340 - Auto-beautified from TradingView webpack bundle
 *
 * @module 57340
 * @date 2026-04-23
 * @size 299 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 22613
 *
 * Exports:
 *   - chartFloatingTooltipEnabledWV (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

57340: (e, t, i) => {
    "use strict";
    i.d(t, {
      chartFloatingTooltipEnabledWV: () => a
    });
    var s = i(1765),
      o = i(22613);
    const n = "chart_floating_tooltip_enabled";

    function r() {
      return s.getJSON(n, true)
    }
    const a = new o.WatchedValue(r());
    a.subscribe((() => s.setValue(n, a.value()))), s.onSync.subscribe(null, (() => a.setValue(r())))
