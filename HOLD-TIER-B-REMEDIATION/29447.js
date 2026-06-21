/**
 * Module 29447 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29447: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      isLineToolState: () => seriesBarFunction_r,
      isMainSeriesState: () => seriesBarFunction_o,
      isStudyLineToolState: () => seriesBarFunction_a,
      isStudyState: () => seriesBarFunction_n
    });
    var lineToolUtils = seriesBarFunction_i(11946);

    function seriesBarFunction_o(seriesBarFunction_e) {
      return "MainSeries" === seriesBarFunction_e.type
    }

    function seriesBarFunction_n(seriesBarFunction_e) {
      return Boolean(seriesBarFunction_e.type) && seriesBarFunction_e.type.toLowerCase().startsWith("study")
    }

    function seriesBarFunction_r(seriesBarFunction_e) {
      return Boolean(seriesBarFunction_e.type) && (0, lineToolUtils.isLineToolName)(seriesBarFunction_e.type)
    }

    function seriesBarFunction_a(seriesBarFunction_e) {
      return Boolean(seriesBarFunction_e.type) && (0, lineToolUtils.isStudyLineToolName)(seriesBarFunction_e.type)
    }