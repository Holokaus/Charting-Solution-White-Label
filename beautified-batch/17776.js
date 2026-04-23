/**
 * Module 17776 - Auto-beautified from TradingView webpack bundle
 *
 * @module 17776
 * @date 2026-04-23
 * @size 304 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 52746
 *
 * Exports:
 *   - barFunctionByStyle (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  barFunctionByStyle: () => o
});
var s = i(52746);

function o(e, t) {
  switch (e) {
    case 12:
      return (0, s.barFunction)("low", "low", "close");
    case 2:
    case 18:
    case 20:
    case 14:
    case 15:
    case 3:
    case 10:
    case 13:
      return (0, s.barFunction)(t ?? "close");
    default:
      return (0, s.barFunction)("close", "open")
  }
