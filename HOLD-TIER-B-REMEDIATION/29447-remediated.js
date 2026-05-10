/**
 * Module 29447 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

29447: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      isLineToolState: () => seriesBarFunction_r,
      isMainSeriesState: () => isValid,
      isStudyLineToolState: () => seriesBarFunction_a,
      isStudyState: () => value
    });
    var lineToolUtils = require(11946);

    function isValid(exports) {
      return "MainSeries" === exports.type
    }

    function value(exports) {
      return Boolean(exports.type) && exports.type.toLowerCase().startsWith("study")
    }

    function seriesBarFunction_r(exports) {
      return Boolean(exports.type) && (0, lineToolUtils.isLineToolName)(exports.type)
    }

    function seriesBarFunction_a(exports) {
      return Boolean(exports.type) && (0, lineToolUtils.isStudyLineToolName)(exports.type)
    }