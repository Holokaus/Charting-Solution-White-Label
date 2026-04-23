/**
 * Module 97725 - Auto-beautified from TradingView webpack bundle
 *
 * @module 97725
 * @date 2026-04-23
 * @size 190 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - addLeadingZero (internal: s)
 *   - addLeadingZeros (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

97725: (e, t, i) => {
    "use strict";

    function s(e) {
      return o(e, 2)
    }

    function o(e, t = 2) {
      const i = e.toString();
      return "0".repeat(Math.max(0, t - i.length)) + i
    }
    i.d(t, {
      addLeadingZero: () => s,
      addLeadingZeros: () => o
    })
