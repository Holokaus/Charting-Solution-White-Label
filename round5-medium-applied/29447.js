/**
 * Module 29447 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29447: (e, t, i) => {
    "use strict";
    i.d(t, {
      isLineToolState: () => r,
      isMainSeriesState: () => o,
      isStudyLineToolState: () => a,
      isStudyState: () => n
    });
    var lineToolUtils = i(11946);

    function o(e) {
      return "MainSeries" === e.type
    }

    function n(e) {
      return Boolean(e.type) && e.type.toLowerCase().startsWith("study")
    }

    function r(e) {
      return Boolean(e.type) && (0, lineToolUtils.isLineToolName)(e.type)
    }

    function a(e) {
      return Boolean(e.type) && (0, lineToolUtils.isStudyLineToolName)(e.type)
    }