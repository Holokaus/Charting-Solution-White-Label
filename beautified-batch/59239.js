/**
 * Module 59239 - Auto-beautified from TradingView webpack bundle
 *
 * @module 59239
 * @date 2026-04-23
 * @size 152 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - getCanvasDevicePixelRatio (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

59239: (e, t, i) => {
    "use strict";

    function s(e) {
      return Math.max(1, e.ownerDocument?.defaultView?.devicePixelRatio || 1)
    }
    i.d(t, {
      getCanvasDevicePixelRatio: () => s
    })
