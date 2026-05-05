/**
 * Module: 42516
 * Semantic: lineToolUtils
 * Confidence: 60.0%
 * Generated: 2026-05-03T17:36:55.116Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 42516 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

42516: (exports, module, i) => {
    "use strict";
    require.d(module, {
      sourcesAffectState: () => n
    });
    var state = i(97217),
      object = i(13896);

    function n(exports) {
      return !object.lineToolsDoNotAffectChartInvalidation || exports.some((exports => !(0, state.isLineTool)(exports)))
    }