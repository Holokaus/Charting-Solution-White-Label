/**
 * Module 60661 - Auto-beautified from TradingView webpack bundle
 *
 * @module 60661
 * @date 2026-04-23
 * @size 1144 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 33952, 50151, 82284
 *
 * Exports:
 *   - containsHorizLineTimePointIndexes (internal: r)
 *   - dematerializeHorizLine (internal: l)
 *   - isHorizLineInBarsRange (internal: c)
 *   - materializeHorizLine (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  containsHorizLineTimePointIndexes: () => r,
  dematerializeHorizLine: () => l,
  isHorizLineInBarsRange: () => c,
  materializeHorizLine: () => a
});
var s = i(50151),
  o = i(82284),
  n = i(33952);
const r = !0;

function a(e, t) {
  if (e.startIndex >= t.length || e.endIndex >= t.length) return null;
  const i = t[e.startIndex],
    n = t[e.endIndex];
  return n === o.INVALID_TIME_POINT_INDEX ? null : ((0, s.assert)(i <= n, "startIndex should not exceed endIndex"), {
    startIndex: i === o.INVALID_TIME_POINT_INDEX ? null : i,
    endIndex: n,
    level: e.level,
    extendLeft: e.extendLeft,
    extendRight: e.extendRight
  })
}

function l(e, t, i) {
  const s = (0, n.ensureTimePointIndexIndex)(i.indexOf(e.startIndex ?? o.INVALID_TIME_POINT_INDEX)),
    r = (0, n.ensureTimePointIndexIndex)(i.indexOf(e.endIndex));
  return {
    id: t,
    ...e,
    startIndex: s,
    endIndex: r
  }
}

function c(e, t) {
  if (null === e.startIndex) return t.firstBar() <= e.endIndex;
  const i = Math.min(e.startIndex, e.endIndex),
    s = Math.max(e.startIndex, e.endIndex);
  if (t.contains(i) || t.contains(s) || i < t.firstBar() && s > t.lastBar()) return !0;
  const o = e.startIndex < e.endIndex ? e.extendLeft : e.extendRight,
    n = e.startIndex < e.endIndex ? e.extendRight : e.extendLeft;
  return s < t.firstBar() && n || i > t.lastBar() && o
