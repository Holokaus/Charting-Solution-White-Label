/**
 * Module 97217 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

97217: (exports, module, require) => {
    "use strict";
    require.register(module, {
      isLineTool: () => isLineTool
    });
    var studyIds = require(30551);

    function isLineTool(exports) {
      return (0, studyIds.isObject)(exports) && "isLineTool" in exports && exports.isLineTool
    }