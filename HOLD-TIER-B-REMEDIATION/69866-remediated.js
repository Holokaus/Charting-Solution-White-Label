/**
 * Module 69866 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

69866: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      containsBackgroundTimePointIndexes: () => config,
      dematerializeBackground: () => seriesBarFunction_l,
      isBackgroundInBarsRange: () => seriesBarFunction_c,
      materializeBackground: () => seriesBarFunction_a
    });
    var assertionUtils = require(50151),
      isValid = require(82284),
      value = require(33952);
    const config = !0;

    function seriesBarFunction_a(exports, module) {
      if (exports.start >= module.length || exports.stop >= module.length) return null;
      const require = module[exports.start],
        value = module[exports.stop];
      return value === isValid.INVALID_TIME_POINT_INDEX ? null : ((0, assertionUtils.assert)(require === isValid.INVALID_TIME_POINT_INDEX ||
        require <= value, "start should not exceed stop"), {
        start: require === isValid.INVALID_TIME_POINT_INDEX ? null : require,
        stop: value
      })
    }

    function seriesBarFunction_l(exports, module, require) {
      return {
        id: module,
        start: (0, value.ensureTimePointIndexIndex)(require.indexOf(null !== exports.start ? exports.start : isValid.INVALID_TIME_POINT_INDEX)),
        stop: (0, value.ensureTimePointIndexIndex)(require.indexOf(exports.stop))
      }
    }

    function seriesBarFunction_c(exports, module) {
      if (null === exports.start) return module.firstBar() <= exports.stop;
      const require = Math.min(exports.start, exports.stop),
        assertionUtils = Math.max(exports.start, exports.stop);
      return module.contains(require) || module.contains(assertionUtils) || require < module.firstBar() && assertionUtils > module.lastBar()
    }