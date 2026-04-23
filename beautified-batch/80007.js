/**
 * Module 80007 - Auto-beautified from TradingView webpack bundle
 *
 * @module 80007
 * @date 2026-04-23
 * @size 175 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - preventDefault (internal: s)
 *   - wrapHandlerWithPreventEvent (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

80007: (e, t, i) => {
    "use strict";

    function s(e) {
      e.cancelable && e.preventDefault()
    }

    function o(e) {
      return t => {
        s(t), e(t)
      }
    }
    i.d(t, {
      preventDefault: () => s,
      wrapHandlerWithPreventEvent: () => o
    })
