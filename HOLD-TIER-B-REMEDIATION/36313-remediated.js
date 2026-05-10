/**
 * Module 36313 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

36313: (exports, module, require) => {
    "use strict";
    var modes, isValid, value;
    require.seriesBarFunction_d(module, {
        TitleDisplayTarget: () => value
      }),
      function(exports) {
        exports[exports.AfterMainSeries = 0] = "AfterMainSeries"
      }(modes || (modes = {})),
      function(exports) {
        exports[exports.Idle = 0] = "Idle", exports[exports.Processing = 1] = "Processing", exports[exports.Active = 2] = "Active", exports[exports.Stopped = 3] =
          "Stopped"
      }(isValid || (isValid = {})),
      function(exports) {
        exports[exports.DataWindow = 1] = "DataWindow", exports[exports.StatusLine = 2] = "StatusLine", exports[exports.Alerts = 3] = "Alerts"
      }(value || (value = {}))