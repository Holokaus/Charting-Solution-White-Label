/**
 * Module 38486 - Auto-beautified from TradingView webpack bundle
 *
 * @module 38486
 * @date 2026-04-23
 * @size 233 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - ownership (internal: o)
 *   - weakReference (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

38486: (e, t, i) => {
    "use strict";

    function s(e) {
      const t = Object.create(e);
      return t.release = () => {}, t.ownership = () => t, t
    }

    function o(e) {
      const t = e;
      return t.release = () => t.destroy(), t.ownership = () => t, t
    }
    i.d(t, {
      ownership: () => o,
      weakReference: () => s
    })
