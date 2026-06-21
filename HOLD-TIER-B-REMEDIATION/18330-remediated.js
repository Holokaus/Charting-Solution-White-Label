/**
 * Module 18330 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

18330: (exports, module, require) => {
    "use strict";
    var modes, isValid, value, seriesBarFunction_r;
    require.seriesBarFunction_d(module, {
        HAlign: () => isValid,
        LineStyle: () => seriesBarFunction_r,
        MarkLocation: () => modes
      }),
      function(exports) {
        exports.AboveBar = "AboveBar", exports.BelowBar = "BelowBar", exports.Top = "Top", exports.Bottom = "Bottom", exports.Right = "Right", exports
          .Left = "Left", exports.Absolute = "Absolute", exports.AbsoluteUp = "AbsoluteUp", exports.AbsoluteDown = "AbsoluteDown"
      }(modes || (modes = {})),
      function(exports) {
        exports.Left = "left", exports.Center = "center", exports.Right = "right"
      }(isValid || (isValid = {})),
      function(exports) {
        exports.Top = "top", exports.Middle = "middle", exports.Bottom = "bottom"
      }(value || (value = {})),
      function(exports) {
        exports[exports.Solid = 0] = "Solid", exports[exports.Dotted = 1] = "Dotted", exports[exports.Dashed = 2] = "Dashed"
      }(seriesBarFunction_r || (seriesBarFunction_r = {}))