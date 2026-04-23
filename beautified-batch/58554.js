/**
 * Module 58554 - Auto-beautified from TradingView webpack bundle
 *
 * @module 58554
 * @date 2026-04-23
 * @size 558 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 33952, 82284
 *
 * Exports:
 *   - containsVertLineTimePointIndexes (internal: n)
 *   - dematerializeVertLine (internal: a)
 *   - isVertLineInBarsRange (internal: l)
 *   - materializeVertLine (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  containsVertLineTimePointIndexes: () => n,
  dematerializeVertLine: () => a,
  isVertLineInBarsRange: () => l,
  materializeVertLine: () => r
});
var s = i(82284),
  o = i(33952);
const n = !0;

function r(e, t) {
  if (e.index >= t.length) return null;
  const i = t[e.index];
  return i === s.INVALID_TIME_POINT_INDEX ? null : {
    startPrice: e.startPrice,
    endPrice: e.endPrice,
    index: i,
    extendTop: e.extendTop,
    extendBottom: e.extendBottom
  }
}

function a(e, t, i) {
  const s = (0, o.ensureTimePointIndexIndex)(i.indexOf(e.index));
  return {
    id: t,
    ...e,
    index: s
  }
}

function l(e, t) {
  return t.contains(e.index)
