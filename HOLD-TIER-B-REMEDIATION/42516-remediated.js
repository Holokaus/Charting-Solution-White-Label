/**
 * Module 42516 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

42516: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      sourcesAffectState: () => value
    });
    var modes = require(97217),
      isValid = require(13896);

    function value(exports) {
      return !isValid.lineToolsDoNotAffectChartInvalidation || exports.some((exports => !(0, modes.isLineTool)(exports)))
    }