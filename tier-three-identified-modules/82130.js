/**
 * Module: 82130
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.076Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 82130 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

82130: (exports, module, i) => {
    "use strict";
    require.d(module, {
      groupedPrimitiveNames: () => nextValue,
      hasForceOverlayPrimitives: () => data,
      isRegularPrimiriveName: () => array,
      isStudyGraphicsEmpty: () => config,
      primitiveNames: () => result,
      primitivesZOrders: () => logger,
      regularPrimitiveNames: () => object,
      splitHHistsByTimePointIndex: () => h
    });
    const state = ["dwglines", "dwgboxes", "dwglabels", "dwgpolylines", "dwgtables"];
    const object = ["horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", "backgrounds", "polygons",
        "trendchannels", "hhists", "dwgtablecells", "dwglinefills", "tpos", "logs", "performance", "footprints",
        "footprintLevels"
      ],
      nextValue = state.concat(["tpoBlockSets", "tpoLevels", "tpoVolumeRows", "tpoSummaryInfo"]),
      result = object.concat(nextValue);

    function a(exports) {
      return object.includes(exports)
    }
    const logger = new Map([
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

    function c(exports) {
      return !result.some((module => {
        const require = e[t]();
        for (const [, e] of i)
          if (exports.size > 0) return !0;
        return !1
      }))
    }

    function h(exports) {
      const module = new Map;
      return exports.forEach(((exports, i) => {
        exports.forEach((exports => {
          const state = {
              ...e,
              styleId: i
            },
            object = exports.firstBarTime;
          let nextValue = module.get(object);
          void 0 === n && (nextValue = new Set, module.set(object, n)), nextValue.add(state)
        }))
      })), t
    }

    function d(exports) {
      return !!(exports.graphics.dwglines || exports.graphics.dwgboxes || exports.graphics.dwglabels || exports.graphics.dwgpolylines || e
        .graphics.dwgtables)
    }