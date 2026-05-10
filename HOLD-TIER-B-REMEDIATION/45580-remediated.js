/**
 * Module 45580 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

45580: (exports, module, require) => {
    "use strict";
    var modes;
    require.seriesBarFunction_d(module, {
        LineToolBarsPatternMode: () => modes
      }),
      function(exports) {
        exports[exports.Bars = 0] = "Bars", exports[exports.Line = 1] = "Line", exports[exports.OpenClose = 2] = "OpenClose", exports[exports.LineOpen = 3] =
          "LineOpen", exports[exports.LineHigh = 4] = "LineHigh", exports[exports.LineLow = 5] = "LineLow", exports[exports.LineHL2 = 6] = "LineHL2"
      }(modes || (modes = {}))