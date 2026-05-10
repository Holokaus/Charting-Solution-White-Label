/**
 * Module 1395 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

1395: (exports, module, require) => {
    "use strict";
    var studyIds;
    require.register(module, {
        CreateLineToolSyncMode: () => studyIds
      }),
      function(exports) {
        exports[exports.Default = 0] = "Default", exports[exports.ForceOn = 1] = "ForceOn", exports[exports.ForceOff = 2] = "ForceOff"
      }(studyIds || (studyIds = {}))