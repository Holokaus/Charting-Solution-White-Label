/**
 * Module 82130 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

82130: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      groupedPrimitiveNames: () => seriesBarFunction_n,
      hasForceOverlayPrimitives: () => seriesBarFunction_d,
      isRegularPrimiriveName: () => seriesBarFunction_a,
      isStudyGraphicsEmpty: () => seriesBarFunction_c,
      primitiveNames: () => seriesBarFunction_r,
      primitivesZOrders: () => seriesBarFunction_l,
      regularPrimitiveNames: () => seriesBarFunction_o,
      splitHHistsByTimePointIndex: () => seriesBarFunction_h
    });
    const seriesBarFunction_s = ["dwglines", "dwgboxes", "dwglabels", "dwgpolylines", "dwgtables"];
    const seriesBarFunction_o = ["horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", "backgrounds", "polygons",
        "trendchannels", "hhists", "dwgtablecells", "dwglinefills", "tpos", "logs", "performance", "footprints",
        "footprintLevels"
      ],
      seriesBarFunction_n = seriesBarFunction_s.concat(["tpoBlockSets", "tpoLevels", "tpoVolumeRows", "tpoSummaryInfo"]),
      seriesBarFunction_r = seriesBarFunction_o.concat(seriesBarFunction_n);

    function seriesBarFunction_a(seriesBarFunction_e) {
      return seriesBarFunction_o.includes(seriesBarFunction_e)
    }
    const seriesBarFunction_l = new Map([
      ["logs", -4],
      ["performance", -4],
      ["polygons", -4],
      ["trendchannels", -3],
      ["textmarks", -2],
      ["shapemarks", -2],
      ["backgrounds", -1],
      ["footprints", 1],
      ["footprintLevels", 1],
      ["hlines", 1],
      ["horizlines", 1],
      ["hhists", 1],
      ["dwglinefills", 2],
      ["vertlines", 3],
      ["lines", 3],
      ["dwglines", 3],
      ["dwgpolylines", 3],
      ["dwgboxes", 4],
      ["dwglabels", 5],
      ["dwgtables", 6],
      ["dwgtablecells", 6],
      ["tpos", 7],
      ["tpoBlockSets", 7],
      ["tpoLevels", 7],
      ["tpoVolumeRows", 7],
      ["tpoSummaryInfo", 1]
    ]);

    function seriesBarFunction_c(seriesBarFunction_e) {
      return !seriesBarFunction_r.some((seriesBarFunction_t => {
        const seriesBarFunction_i = seriesBarFunction_e[seriesBarFunction_t]();
        for (const [, seriesBarFunction_e] of seriesBarFunction_i)
          if (seriesBarFunction_e.size > 0) return !0;
        return !1
      }))
    }

    function seriesBarFunction_h(seriesBarFunction_e) {
      const seriesBarFunction_t = new Map;
      return seriesBarFunction_e.forEach(((seriesBarFunction_e, seriesBarFunction_i) => {
        seriesBarFunction_e.forEach((seriesBarFunction_e => {
          const seriesBarFunction_s = {
              ...seriesBarFunction_e,
              styleId: seriesBarFunction_i
            },
            seriesBarFunction_o = seriesBarFunction_e.firstBarTime;
          let seriesBarFunction_n = seriesBarFunction_t.get(seriesBarFunction_o);
          void 0 === seriesBarFunction_n && (seriesBarFunction_n = new Set, seriesBarFunction_t.set(seriesBarFunction_o, seriesBarFunction_n)), seriesBarFunction_n.add(seriesBarFunction_s)
        }))
      })), seriesBarFunction_t
    }

    function seriesBarFunction_d(seriesBarFunction_e) {
      return !!(seriesBarFunction_e.graphics.dwglines || seriesBarFunction_e.graphics.dwgboxes || seriesBarFunction_e.graphics.dwglabels || seriesBarFunction_e.graphics.dwgpolylines || seriesBarFunction_e
        .graphics.dwgtables)
    }