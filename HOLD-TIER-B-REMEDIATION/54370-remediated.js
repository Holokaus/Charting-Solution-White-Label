/**
 * Module 54370 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

54370: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      allChartStyles: () => isValid
    });
    var modes = require(37103);

    function isValid() {
      return function() {
        const exports = [0, 1, 9, 13, 2, 14, 15, 3, 16, 10];
        return modes.enabled("chart_style_hilo") && exports.push(12), exports.push(21), exports
      }().concat((modes.enabled("japanese_chart_styles"), [8]))
    }