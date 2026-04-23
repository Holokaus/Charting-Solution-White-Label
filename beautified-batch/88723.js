/**
 * Module 88723 - Auto-beautified from TradingView webpack bundle
 *
 * @module 88723
 * @date 2026-04-23
 * @size 154 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - createDeferredPromise (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

88723: (e, t, i) => {
    "use strict";

    function s() {
      let e, t;
      return {
        promise: new Promise(((i, s) => {
          e = i, t = s
        })),
        reject: t,
        resolve: e
      }
    }
    i.d(t, {
      createDeferredPromise: () => s
    })
