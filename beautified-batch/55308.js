/**
 * Module 55308 - Auto-beautified from TradingView webpack bundle
 *
 * @module 55308
 * @date 2026-04-23
 * @size 229 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 22613, 37103
 *
 * Exports:
 *   - isDrawingToolbarVisible (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

55308: (e, t, i) => {
    "use strict";
    i.d(t, {
      isDrawingToolbarVisible: () => l
    });
    var s = i(1765),
      o = i(37103),
      n = i(22613);
    const r = !o.enabled("hide_left_toolbar_by_default"),
      a = s.getBool("ChartDrawingToolbarWidget.visible", r),
      l = new n.WatchedValue(a)
