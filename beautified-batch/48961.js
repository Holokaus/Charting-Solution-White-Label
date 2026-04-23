/**
 * Module 48961 - Auto-beautified from TradingView webpack bundle
 *
 * @module 48961
 * @date 2026-04-23
 * @size 229 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getSymbolSearchCompleteOverrideFunction (internal: n)
 *   - setSymbolSearchCompleteOverrideFunction (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getSymbolSearchCompleteOverrideFunction: () => n,
  setSymbolSearchCompleteOverrideFunction: () => o
});
let s = (e, t) => Promise.resolve({
  symbol: e,
  name: t?.symbol ?? e
});

function o(e) {
  s = e
}

function n() {
  return s
