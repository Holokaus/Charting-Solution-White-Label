/**
 * Module 99481 - Auto-beautified from TradingView webpack bundle
 *
 * @module 99481
 * @date 2026-04-23
 * @size 1346 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 33952, 50151, 82284
 *
 * Exports:
 *   - HHistDirection (internal: s)
 *   - HHistLocation (internal: o)
 *   - HHistVolumeMode (internal: n)
 *   - containsHHistTimePointIndexes (internal: c)
 *   - dematerializeHHist (internal: d)
 *   - isHHistInBarsRange (internal: u)
 *   - materializeHHist (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  HHistDirection: () => s,
  HHistLocation: () => o,
  HHistVolumeMode: () => n,
  containsHHistTimePointIndexes: () => c,
  dematerializeHHist: () => d,
  isHHistInBarsRange: () => u,
  materializeHHist: () => h
});
var s, o, n, r = i(50151),
  a = i(82284),
  l = i(33952);
! function(e) {
  e.LeftToRight = "left_to_right", e.RightToLeft = "right_to_left"
}(s || (s = {})),
function(e) {
  e.Relative = "relative", e.Absolute = "absolute"
}(o || (o = {})),
function(e) {
  e.UpDown = "Up/Down", e.Total = "Total", e.Delta = "Delta"
}(n || (n = {}));
const c = !0;

function h(e, t) {
  if (e.lastBarTime >= t.length) return null;
  const i = t[e.firstBarTime],
    s = t[e.lastBarTime];
  return s === a.INVALID_TIME_POINT_INDEX ? null : ((0, r.assert)(i <= s, "firstBarTime should not exceed lastBarTime"), (0, r.assert)(e.priceLow <= e.priceHigh, "priceLow should not exceed priceHigh"), {
    firstBarTime: i === a.INVALID_TIME_POINT_INDEX ? null : i,
    lastBarTime: s,
    rate: e.rate,
    priceHigh: e.priceHigh,
    priceLow: e.priceLow
  })
}

function d(e, t, i) {
  const s = (0, l.ensureTimePointIndexIndex)(i.indexOf(e.firstBarTime ?? a.INVALID_TIME_POINT_INDEX)),
    o = (0, l.ensureTimePointIndexIndex)(i.indexOf(e.lastBarTime));
  return {
    id: t,
    ...e,
    firstBarTime: s,
    lastBarTime: o
  }
}

function u(e, t) {
  const i = Math.min(e.firstBarTime ?? a.INVALID_TIME_POINT_INDEX, e.lastBarTime),
    s = Math.max(e.firstBarTime ?? a.INVALID_TIME_POINT_INDEX, e.lastBarTime);
  return t.contains(i) || t.contains(s) || i < t.firstBar() && s > t.lastBar()
