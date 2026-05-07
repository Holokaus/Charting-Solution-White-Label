/**
 * Module 42516 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

42516: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      sourcesAffectState: () => seriesBarFunction_n
    });
    var seriesBarFunction_s = seriesBarFunction_i(97217),
      seriesBarFunction_o = seriesBarFunction_i(13896);

    function seriesBarFunction_n(seriesBarFunction_e) {
      return !seriesBarFunction_o.lineToolsDoNotAffectChartInvalidation || seriesBarFunction_e.some((seriesBarFunction_e => !(0, seriesBarFunction_s.isLineTool)(seriesBarFunction_e)))
    }