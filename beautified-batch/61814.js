/**
 * Module 61814 - Auto-beautified from TradingView webpack bundle
 *
 * @module 61814
 * @date 2026-04-23
 * @size 216 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 91682
 *
 * Exports:
 *   - hotKeyDeserialize (internal: n)
 *   - hotKeySerialize (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  hotKeyDeserialize: () => n,
  hotKeySerialize: () => o
});
var s = i(91682);

function o(e) {
  return (0, s.htmlEscape)(JSON.stringify(e))
}

function n(e) {
  return JSON.parse((0, s.decodeHTMLEntities)(e))
