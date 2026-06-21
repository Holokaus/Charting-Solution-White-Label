/**
 * Module 51829 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

51829: (exports, module, require) => {
    "use strict";
    var modes;
    require.seriesBarFunction_d(module, {
        SessionStage: () => modes
      }),
      function(exports) {
        exports[exports.PRE_SESSION = -1] = "PRE_SESSION", exports[exports.POST_SESSION = -2] = "POST_SESSION", exports[exports.LASTBAR_SESSION = -3] =
          "LASTBAR_SESSION", exports[exports.LAST_SESSION_END = -4] = "LAST_SESSION_END", exports[exports.FIRST_SESSION_START = -5] =
          "FIRST_SESSION_START"
      }(modes || (modes = {}))