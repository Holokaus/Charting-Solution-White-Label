/**
 * Module 30798 - Auto-beautified from TradingView webpack bundle
 *
 * @module 30798
 * @date 2026-04-23
 * @size 717 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 33952, 82284
 *
 * Exports:
 *   - containsPolygonTimePointIndexes (internal: n)
 *   - dematerializePolygon (internal: a)
 *   - isPolygonInBarsRange (internal: l)
 *   - materializePolygon (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  containsPolygonTimePointIndexes: () => n,
  dematerializePolygon: () => a,
  isPolygonInBarsRange: () => l,
  materializePolygon: () => r
});
var s = i(82284),
  o = i(33952);
const n = !0;

function r(e, t) {
  for (const i of e.points) {
    if (i.index >= t.length) return null;
    if (t[i.index] === s.INVALID_TIME_POINT_INDEX) return null
  }
  return {
    points: e.points.map((e => ({
      index: t[e.index],
      offset: e.offset,
      level: e.level
    })))
  }
}

function a(e, t, i) {
  return {
    id: t,
    points: e.points.map((e => ({
      ...e,
      index: (0, o.ensureTimePointIndexIndex)(i.indexOf(e.index))
    })))
  }
}

function l(e, t) {
  if (e.points.some((e => t.contains(e.index + (e.offset ?? 0))))) return !0;
  let i = !1,
    s = !1;
  const o = t.firstBar();
  for (const t of e.points) t.index + (t.offset ?? 0) < o ? i = !0 : s = !0;
  return i && s
