/**
 * Module 19334 - Auto-beautified from TradingView webpack bundle
 *
 * @module 19334
 * @date 2026-04-23
 * @size 555 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4226
 *
 * Exports:
 *   - addPerfMark (internal: c)
 *   - perfMeasureOperation (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  addPerfMark: () => c,
  perfMeasureOperation: () => h
});
var s = i(4226);

function o() {}
const n = console.timeStamp ? console.timeStamp.bind(console) : o,
  r = window.performance && performance.mark ? performance.mark.bind(performance) : o,
  a = window.performance && performance.measure ? performance.measure.bind(performance) : o,
  l = window.performance && performance.clearMarks ? performance.clearMarks.bind(performance) : o;

function c(e) {
  n(e), r(e)
}
async function h(e, t) {
    const i = `measure-${e}-${(0,s.randomHash)()}`;
    r(i);
    try {
      return await t()
    } finally {
      a(e, i), l(i)
    }
