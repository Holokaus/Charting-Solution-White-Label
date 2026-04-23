/**
 * Module 49251 - Auto-beautified from TradingView webpack bundle
 *
 * @module 49251
 * @date 2026-04-23
 * @size 329 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - makeFont (internal: s)
 *   - parseFont (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e, t, i, s) {
  return `${s?s+" ":""}${i?i+" ":""}${e}px ${t}`
}
i.d(t, {
  makeFont: () => s,
  parseFont: () => n
});
const o = /(bold )?(italic )?(\d+)(px|pt) (.*)$/;

function n(e) {
  const t = o.exec(e);
  return null === t ? null : {
    family: t[5],
    size: parseInt(t[3]) * ("pt" === t[4] ? .75 : 1),
    bold: Boolean(t[1]),
    italic: Boolean(t[2])
  }
