/**
 * Module 82130 - Auto-beautified from TradingView webpack bundle
 *
 * @module 82130
 * @date 2026-04-23
 * @size 1544 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - groupedPrimitiveNames (internal: n)
 *   - hasForceOverlayPrimitives (internal: d)
 *   - isRegularPrimiriveName (internal: a)
 *   - isStudyGraphicsEmpty (internal: c)
 *   - primitiveNames (internal: r)
 *   - primitivesZOrders (internal: l)
 *   - regularPrimitiveNames (internal: o)
 *   - splitHHistsByTimePointIndex (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  groupedPrimitiveNames: () => n,
  hasForceOverlayPrimitives: () => d,
  isRegularPrimiriveName: () => a,
  isStudyGraphicsEmpty: () => c,
  primitiveNames: () => r,
  primitivesZOrders: () => l,
  regularPrimitiveNames: () => o,
  splitHHistsByTimePointIndex: () => h
});
const s = ["dwglines", "dwgboxes", "dwglabels", "dwgpolylines", "dwgtables"];
const o = ["horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", "backgrounds", "polygons", "trendchannels", "hhists", "dwgtablecells", "dwglinefills", "tpos", "logs", "performance", "footprints", "footprintLevels"],
  n = s.concat(["tpoBlockSets", "tpoLevels", "tpoVolumeRows", "tpoSummaryInfo"]),
  r = o.concat(n);

function a(e) {
  return o.includes(e)
}
const l = new Map([["logs", -4], ["performance", -4], ["polygons", -4], ["trendchannels", -3], ["textmarks", -2], ["shapemarks", -2], ["backgrounds", -1], ["footprints", 1], ["footprintLevels", 1], ["hlines", 1], ["horizlines", 1], ["hhists", 1], ["dwglinefills", 2], ["vertlines", 3], ["lines", 3], ["dwglines", 3], ["dwgpolylines", 3], ["dwgboxes", 4], ["dwglabels", 5], ["dwgtables", 6], ["dwgtablecells", 6], ["tpos", 7], ["tpoBlockSets", 7], ["tpoLevels", 7], ["tpoVolumeRows", 7], ["tpoSummaryInfo", 1]]);

function c(e) {
  return !r.some((t => {
    const i = e[t]();
    for (const [, e] of i)
      if (e.size > 0) return !0;
    return !1
  }))
}

function h(e) {
  const t = new Map;
  return e.forEach(((e, i) => {
    e.forEach((e => {
      const s = {
          ...e,
          styleId: i
        },
        o = e.firstBarTime;
      let n = t.get(o);
      void 0 === n && (n = new Set, t.set(o, n)), n.add(s)
    }))
  })), t
}

function d(e) {
  return !!(e.graphics.dwglines || e.graphics.dwgboxes || e.graphics.dwglabels || e.graphics.dwgpolylines || e.graphics.dwgtables)
