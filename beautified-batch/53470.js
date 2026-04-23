/**
 * Module 53470 - Auto-beautified from TradingView webpack bundle
 *
 * @module 53470
 * @date 2026-04-23
 * @size 141 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - uniq (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

53470: (e, t, i) => {
    "use strict";

    function s(e) {
      return e.reduce((function(e, t, i) {
        return ~e.indexOf(t) || e.push(t), e
      }), [])
    }
    i.r(t), i.d(t, {
      uniq: () => s
    })
