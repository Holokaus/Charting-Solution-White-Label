/**
 * Module 39058 - Auto-beautified from TradingView webpack bundle
 *
 * @module 39058
 * @date 2026-04-23
 * @size 224 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - errorToString (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

39058: (e, t, i) => {
    "use strict";

    function s(e) {
      if (void 0 === e) return "";
      if (e instanceof Error) {
        let t = e.message;
        return e.stack && (t += " " + e.stack), t
      }
      return "string" == typeof e ? e.toString() : JSON.stringify(e)
    }
    i.d(t, {
      errorToString: () => s
    })
