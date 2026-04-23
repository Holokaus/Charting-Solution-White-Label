/**
 * Module 52959 - Auto-beautified from TradingView webpack bundle
 *
 * @module 52959
 * @date 2026-04-23
 * @size 190 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getChartingLibraryGlobalContext (internal: s)
 *   - getChartingLibraryOwner (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

52959: (e, t, i) => {
    "use strict";

    function s() {
      return window
    }

    function o() {
      const e = s();
      return e.parent[e.urlParams.uid]
    }
    i.d(t, {
      getChartingLibraryGlobalContext: () => s,
      getChartingLibraryOwner: () => o
    })
