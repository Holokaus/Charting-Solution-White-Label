/**
 * Module 95523 - Auto-beautified from TradingView webpack bundle
 *
 * @module 95523
 * @date 2026-04-23
 * @size 329 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37236
 *
 * Exports:
 *   - parseTzOffset (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  parseTzOffset: () => o
});
var s = i(37236);

function o(e, t = Date.now()) {
  const i = (0, s.get_timezone)(e).offset_utc(t);
  let o = "";
  const n = i / 1e3 / 60 / 60;
  n % 1 && (o = ":" + Math.round(Math.abs(n % 1 * 60)).toString().padStart(2, "0"));
  let r = "";
  return r = n > 0 ? "+" + (n - n % 1) + o : 0 === n ? "" : String(n - n % 1 + o), {
    offset: i,
    string: "UTC" + r
  }
