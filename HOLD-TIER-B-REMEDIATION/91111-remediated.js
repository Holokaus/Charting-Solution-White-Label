/**
 * Module 91111 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

91111: (exports, module, require) => {
    "use strict";
    require.register(module, {
      lineToolsStudyIds: () => studyIds
    });
    const studyIds = {
      LineToolAnchoredVWAP: "AnchoredVWAP@tv-basicstudies",
      LineToolRegressionTrend: "RegressionTrend@tv-basicstudies",
      LineToolFixedRangeVolumeProfile: "VbPFixed@tv-basicstudies",
      LineToolVbPFixed: "VbPFixed@tv-volumebyprice"
    }