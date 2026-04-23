/**
 * Module 26867 - Auto-beautified from TradingView webpack bundle
 *
 * @module 26867
 * @date 2026-04-23
 * @size 447 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - preventDefault (internal: s)
 *   - preventDefaultForContextMenu (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e) {
  e.preventDefault()
}
i.d(t, {
  preventDefault: () => s,
  preventDefaultForContextMenu: () => n
});
const o = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

function n(e) {
  const t = e.target;
  t && !t.closest(o.join(", ")) && e.preventDefault()
