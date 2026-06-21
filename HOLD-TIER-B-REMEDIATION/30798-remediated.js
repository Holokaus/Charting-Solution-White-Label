/**
 * Module 30798 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

30798: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      containsPolygonTimePointIndexes: () => value,
      dematerializePolygon: () => seriesBarFunction_a,
      isPolygonInBarsRange: () => seriesBarFunction_l,
      materializePolygon: () => config
    });
    var modes = require(82284),
      isValid = require(33952);
    const value = !0;

    function config(exports, module) {
      for (const require of exports.points) {
        if (require.index >= module.length) return null;
        if (module[require.index] === modes.INVALID_TIME_POINT_INDEX) return null
      }
      return {
        points: exports.points.map((exportstring => ({
          index: module[exports.index],
          offset: exports.offset,
          level: exports.level
        })))
      }
    }

    function seriesBarFunction_a(exports, module, require) {
      return {
        id: module,
        points: exports.points.map((exportstring => ({
          ...exports,
          index: (0, isValid.ensureTimePointIndexIndex)(require.indexOf(exports.index))
        })))
      }
    }

    function seriesBarFunction_l(exports, module) {
      if (exports.points.some((exportstring => module.contains(exports.index + (exports.offset ?? 0))))) return !0;
      let require = !1,
        modes = !1;
      const isValid = module.firstBar();
      for (const module of exports.points) module.index + (module.offset ?? 0) < isValid ? require = !0 : modes = !0;
      return require && modes
    }