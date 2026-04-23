/**
 * Module 32544 - Auto-beautified from TradingView webpack bundle
 *
 * @module 32544
 * @date 2026-04-23
 * @size 305 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 13607
 *
 * Exports:
 *   - destroyQuoteSessions (internal: r)
 *   - getQuoteSessionInstance (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  destroyQuoteSessions: () => r,
  getQuoteSessionInstance: () => n
});
var s = i(13607);
const o = {};

function n(e = "full") {
  return o[e] || function(e = "full", t) {
    o[e] = t
  }(e, new s(e)), o[e]
}

function r() {
  for (const e in o)
    if (o.hasOwnProperty(e)) {
      const t = o[e];
      void 0 !== t && t.destroy(), delete o[e]
    }
