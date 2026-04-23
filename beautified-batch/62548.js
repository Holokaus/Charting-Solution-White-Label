/**
 * Module 62548 - Auto-beautified from TradingView webpack bundle
 *
 * @module 62548
 * @date 2026-04-23
 * @size 235 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151, 69708
 *
 * Exports:
 *   - layoutInitialSizingState (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  layoutInitialSizingState: () => o
});
var s = i(69708);
i(50151);

function o(e) {
  const [, ...t] = e;
  return function(e) {
    const t = 1 / e.length;
    return e.map((e => ({
      percent: t,
      substate: (0, s.default)(e) ? void 0 : o(e)
    })))
  }(t)
