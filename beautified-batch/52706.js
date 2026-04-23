/**
 * Module 52706 - Auto-beautified from TradingView webpack bundle
 *
 * @module 52706
 * @date 2026-04-23
 * @size 348 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - normalizeUpdateMode (internal: o)
 *   - parseUpdateMode (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

52706: (e, t, i) => {
    "use strict";

    function s(e) {
      if (void 0 === e) return null;
      const t = e.match(/(delayed_streaming)_(\d+)/);
      return null === t ? null : {
        mode: t[1],
        interval: parseInt(t[2])
      }
    }

    function o(e) {
      const t = s(e.update_mode);
      return null === t || (e.update_mode = t.mode, e.update_mode_seconds = t.interval), e
    }
    i.r(t), i.d(t, {
      normalizeUpdateMode: () => o,
      parseUpdateMode: () => s
    })
