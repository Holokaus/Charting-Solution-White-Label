/**
 * Module: 42516
 * Semantic: seriesBarFunction
 * Confidence: 100.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.424Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 42516 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

42516: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      sourcesAffectState: () => n
    });
    var seriesBarFunction_s = i(97217),
      o = i(13896);

    function n(seriesBarFunction_e) {
      return !o.lineToolsDoNotAffectChartInvalidation || seriesBarFunction_e.some((seriesBarFunction_e => !(0, seriesBarFunction_s.isLineTool)(seriesBarFunction_e)))
    }