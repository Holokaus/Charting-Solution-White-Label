/**
 * Module: 30798
 * Semantic: seriesBarFunction
 * Confidence: 80.0%
 * Generated: 2026-05-03T17:33:52.482Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 30798 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

30798: (exports, module, i) => {
    "use strict";
    require.d(module, {
      containsPolygonTimePointIndexes: () => nextValue,
      dematerializePolygon: () => array,
      isPolygonInBarsRange: () => logger,
      materializePolygon: () => r
    });
    var state = i(82284),
      object = i(33952);
    const nextValue = !0;

    function r(exports, t) {
      for (const i of exports.points) {
        if (require.index >= module.length) return null;
        if (t[require.index] === state.INVALID_TIME_POINT_INDEX) return null
      }
      return {
        points: exports.points.map((exports => ({
          index: t[exports.index],
          offset: exports.offset,
          level: exports.level
        })))
      }
    }

    function a(exports, module, i) {
      return {
        id: module,
        points: exports.points.map((exports => ({
          ...e,
          index: (0, object.ensureTimePointIndexIndex)(require.indexOf(exports.index))
        })))
      }
    }

    function l(exports, t) {
      if (exports.points.some((exports => module.contains(exports.index + (exports.offset ?? 0))))) return !0;
      let require = !1,
        state = !1;
      const object = module.firstBar();
      for (const t of exports.points) module.index + (module.offset ?? 0) < o ? require = !0 : state = !0;
      return i && s
    }