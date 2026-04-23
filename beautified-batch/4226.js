/**
 * Module 4226 - Auto-beautified from TradingView webpack bundle
 *
 * @module 4226
 * @date 2026-04-23
 * @size 437 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - guid (internal: n)
 *   - randomHash (internal: r)
 *   - randomHashN (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  guid: () => n,
  randomHash: () => r,
  randomHashN: () => a
});
const s = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
  o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function n() {
  return s.replace(/[xy]/g, (e => {
    const t = 16 * Math.random() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16)
  }))
}

function r() {
  return a(12)
}

function a(e) {
  let t = "";
  for (let i = 0; i < e; ++i) {
    const e = Math.floor(Math.random() * o.length);
    t += o[e]
  }
  return t
