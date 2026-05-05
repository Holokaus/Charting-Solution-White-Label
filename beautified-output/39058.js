/**
 * Module 39058 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
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