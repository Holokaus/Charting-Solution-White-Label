/**
 * Module 32925 - Auto-beautified from TradingView webpack bundle
 *
 * @module 32925
 * @date 2026-04-23
 * @size 232 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343
 *
 * Exports:
 *   - fetch (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  fetch: () => o
});
var s = i(9343);
new class {
  constructor(e, t) {
    this._test = e[t] = {}
  }
  provide(e, t) {
    this._test[e] = t
  }
}(window, "qaGlobals"), (0, s.getLogger)("Fetch");

function o(e, t, i = {}) {
  return window.fetch(e, t)
