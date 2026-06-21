/**
 * Module 60709 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

60709: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      CHART_WIDGET_COLLECTION_SERVICE: () => value,
      chartWidgetCollectionService: () => seriesBarFunction_r
    });
    var modes, isValid = require(16216);
    ! function(exports) {
      exports.Multichart = "multichart", exports.ForceFullscreen = "force-fullscreen"
    }(modes || (modes = {}));
    const value = {
      id: "ChartWidgetCollectionService"
    };

    function seriesBarFunction_r() {
      return (0, isValid.hasService)(value) ? (0, isValid.service)(value) : null
    }