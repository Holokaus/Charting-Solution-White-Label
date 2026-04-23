/**
 * Module 58043 - Auto-beautified from TradingView webpack bundle
 *
 * @module 58043
 * @date 2026-04-23
 * @size 407 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - deepCopy (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

58043: (e, t, i) => {
    "use strict";

    function s(e) {
      let t;
      if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e;
      else if (e instanceof Date) t = new Date(e.valueOf());
      else if (Array.isArray(e)) {
        t = [];
        let i = 0;
        const o = e.length;
        for (; i < o; i++) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = s(e[i]))
      } else {
        t = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = s(e[i]))
      }
      return t
    }
    i.d(t, {
      deepCopy: () => s
    })
