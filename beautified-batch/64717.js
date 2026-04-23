/**
 * Module 64717 - Auto-beautified from TradingView webpack bundle
 *
 * @module 64717
 * @date 2026-04-23
 * @size 225 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - studyEmptyPlotValuePredicate (internal: o)
 *   - studyPlotFunctionMap (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

64717: (e, t, i) => {
    "use strict";

    function s(e) {
      const t = new Map;
      return e.plots.forEach(((e, i) => {
        t.set(e.id, (e => e[i + 1]))
      })), t
    }

    function o(e, t) {
      return null == e[t]
    }
    i.d(t, {
      studyEmptyPlotValuePredicate: () => o,
      studyPlotFunctionMap: () => s
    })
