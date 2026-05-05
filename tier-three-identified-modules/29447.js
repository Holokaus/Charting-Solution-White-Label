/**
 * Module: 29447
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.465Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 29447 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29447: (exports, module, i) => {
    "use strict";
    require.d(module, {
      isLineToolState: () => result,
      isMainSeriesState: () => object,
      isStudyLineToolState: () => array,
      isStudyState: () => n
    });
    var lineToolUtils = i(11946);

    function o(exports) {
      return "MainSeries" === exports.type
    }

    function n(exports) {
      return Boolean(exports.type) && exports.type.toLowerCase().startsWith("study")
    }

    function r(exports) {
      return Boolean(exports.type) && (0, lineToolUtils.isLineToolName)(exports.type)
    }

    function a(exports) {
      return Boolean(exports.type) && (0, lineToolUtils.isStudyLineToolName)(exports.type)
    }