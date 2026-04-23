/**
 * Module 69866 - Auto-beautified from TradingView webpack bundle
 *
 * @module 69866
 * @date 2026-04-23
 * @size 869 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 33952, 50151, 82284
 *
 * Exports:
 *   - containsBackgroundTimePointIndexes (internal: r)
 *   - dematerializeBackground (internal: l)
 *   - isBackgroundInBarsRange (internal: c)
 *   - materializeBackground (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  containsBackgroundTimePointIndexes: () => r,
  dematerializeBackground: () => l,
  isBackgroundInBarsRange: () => c,
  materializeBackground: () => a
});
var s = i(50151),
  o = i(82284),
  n = i(33952);
const r = !0;

function a(e, t) {
  if (e.start >= t.length || e.stop >= t.length) return null;
  const i = t[e.start],
    n = t[e.stop];
  return n === o.INVALID_TIME_POINT_INDEX ? null : ((0, s.assert)(i === o.INVALID_TIME_POINT_INDEX || i <= n, "start should not exceed stop"), {
    start: i === o.INVALID_TIME_POINT_INDEX ? null : i,
    stop: n
  })
}

function l(e, t, i) {
  return {
    id: t,
    start: (0, n.ensureTimePointIndexIndex)(i.indexOf(null !== e.start ? e.start : o.INVALID_TIME_POINT_INDEX)),
    stop: (0, n.ensureTimePointIndexIndex)(i.indexOf(e.stop))
  }
}

function c(e, t) {
  if (null === e.start) return t.firstBar() <= e.stop;
  const i = Math.min(e.start, e.stop),
    s = Math.max(e.start, e.stop);
  return t.contains(i) || t.contains(s) || i < t.firstBar() && s > t.lastBar()
