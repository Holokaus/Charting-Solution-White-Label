/**
 * Module 82130 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

82130: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      groupedPrimitiveNames: () => value,
      hasForceOverlayPrimitives: () => seriesBarFunction_d,
      isRegularPrimiriveName: () => seriesBarFunction_a,
      isStudyGraphicsEmpty: () => seriesBarFunction_c,
      primitiveNames: () => config,
      primitivesZOrders: () => seriesBarFunction_l,
      regularPrimitiveNames: () => isValid,
      splitHHistsByTimePointIndex: () => handler
    });
    const modes = ["dwglines", "dwgboxes", "dwglabels", "dwgpolylines", "dwgtables"];
    const isValid = ["horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", "backgrounds", "polygons",
        "trendchannels", "hhists", "dwgtablecells", "dwglinefills", "tpos", "logs", "performance", "footprints",
        "footprintLevels"
      ],
      value = modes.concat(["tpoBlockSets", "tpoLevels", "tpoVolumeRows", "tpoSummaryInfo"]),
      config = isValid.concat(value);

    function seriesBarFunction_a(exports) {
      return isValid.includes(exports)
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

    function seriesBarFunction_c(exports) {
      return !config.some((modulresulconfig => {
        const require = exports[module]();
        for (const [, exports] of require)
          if (exports.size > 0) return !0;
        return !1
      }))
    }

    function handler(exports) {
      const module = new Map;
      return exports.forEach(((exports, require) => {
        exports.forEach((exportstring => {
          const modes = {
              ...exports,
              styleId: require
            },
            isValid = exports.firstBarTime;
          let value = module.get(isValid);
          void 0 === value && (value = new Set, module.set(isValid, value)), value.add(modes)
        }))
      })), module
    }

    function seriesBarFunction_d(exports) {
      return !!(exports.graphics.dwglines || exports.graphics.dwgboxes || exports.graphics.dwglabels || exports.graphics.dwgpolylines || exports
        .graphics.dwgtables)
    }