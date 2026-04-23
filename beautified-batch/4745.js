/**
 * Module 4745 - Auto-beautified from TradingView webpack bundle
 *
 * @module 4745
 * @date 2026-04-23
 * @size 399 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37103
 *
 * Exports:
 *   - canShowSpreadActions (internal: o)
 *   - globalKeypressMatches (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  canShowSpreadActions: () => o,
  globalKeypressMatches: () => n
});
var s = i(37103);

function o() {
  let e = !1;
  return s.enabled("show_spread_operators") && (e = !0), e
}

function n(e) {
  if (e.ctrlKey) return !1;
  if (e.metaKey) return !1;
  if (!e.charCode) return !1;
  if (!e.which || e.which <= 32) return !1;
  const t = e.target;
  return !t || !/^(input|textarea)$/i.test(t.tagName) && "listbox" !== t.getAttribute("role")
