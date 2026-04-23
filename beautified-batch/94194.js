/**
 * Module 94194 - Auto-beautified from TradingView webpack bundle
 *
 * @module 94194
 * @date 2026-04-23
 * @size 317 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getTooltipData (internal: o)
 *   - setTooltipData (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getTooltipData: () => o,
  setTooltipData: () => n
});
const s = new WeakMap;

function o(e, t) {
  const i = s.get(e);
  return i instanceof Function ? i(t) : i && i[t]
}

function n(e, t, i) {
  if (i instanceof Function) return void s.set(e, i);
  const o = s.get(e),
    n = void 0 === o || o instanceof Function ? {} : o;
  n[t] = i, s.set(e, n)
