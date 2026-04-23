/**
 * Module 64971 - Auto-beautified from TradingView webpack bundle
 *
 * @module 64971
 * @date 2026-04-23
 * @size 333 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getImage (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getImage: () => n
});
const s = new Map;

function o(e) {
  e.crossOrigin = "anonymous"
}

function n(e, t, i = o) {
  let n = s.get(e);
  return void 0 === n && (n = new Promise(((e, s) => {
    const o = new Image;
    o.onload = () => {
      e(o), o.onload = null, o.onerror = null
    }, o.onerror = () => {
      s(), o.onload = null, o.onerror = null
    }, i(o), o.src = t
  })), s.set(e, n)), n
