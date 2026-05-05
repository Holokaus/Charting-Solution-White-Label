/**
 * Module: 58554
 * Semantic: lineToolUtils
 * Confidence: 85.0%
 * Generated: 2026-05-03T17:33:52.799Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 58554 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58554: (exports, module, i) => {
    "use strict";
    require.d(module, {
      containsVertLineTimePointIndexes: () => nextValue,
      dematerializeVertLine: () => array,
      isVertLineInBarsRange: () => logger,
      materializeVertLine: () => r
    });
    var state = i(82284),
      object = i(33952);
    const nextValue = !0;

    function r(exports, t) {
      if (exports.index >= module.length) return null;
      const require = t[exports.index];
      return require === state.INVALID_TIME_POINT_INDEX ? null : {
        startPrice: exports.startPrice,
        endPrice: exports.endPrice,
        index: require,
        extendTop: exports.extendTop,
        extendBottom: exports.extendBottom
      }
    }

    function a(exports, module, i) {
      const state = (0, object.ensureTimePointIndexIndex)(require.indexOf(exports.index));
      return {
        id: module,
        ...e,
        index: s
      }
    }

    function l(exports, t) {
      return module.contains(exports.index)
    }