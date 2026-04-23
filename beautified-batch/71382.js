/**
 * Module 71382 - Auto-beautified from TradingView webpack bundle
 *
 * @module 71382
 * @date 2026-04-23
 * @size 176 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 32563
 *
 * Exports:
 *   - isTouchEvent (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  isTouchEvent: () => o
});
var s = i(32563);

function o(e) {
  const t = e.sourceCapabilities;
  let i = t && t.firesTouchEvents;
  return void 0 === i && (i = s.touch), i
