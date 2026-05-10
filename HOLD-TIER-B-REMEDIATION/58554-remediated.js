/**
 * Module 58554 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

58554: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      containsVertLineTimePointIndexes: () => value,
      dematerializeVertLine: () => seriesBarFunction_a,
      isVertLineInBarsRange: () => seriesBarFunction_l,
      materializeVertLine: () => seriesBarFunction_r
    });
    var modes = require(82284),
      isValid = require(33952);
    const value = !0;

    function seriesBarFunction_r(exports, module) {
      if (exports.index >= module.length) return null;
      const require = module[exports.index];
      return require === modes.INVALID_TIME_POINT_INDEX ? null : {
        startPrice: exports.startPrice,
        endPrice: exports.endPrice,
        index: require,
        extendTop: exports.extendTop,
        extendBottom: exports.extendBottom
      }
    }

    function seriesBarFunction_a(exports, module, require) {
      const modes = (0, isValid.ensureTimePointIndexIndex)(require.indexOf(exports.index));
      return {
        id: module,
        ...exports,
        index: modes
      }
    }

    function seriesBarFunction_l(exports, module) {
      return module.contains(exports.index)
    }