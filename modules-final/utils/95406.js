/**
 * Module: 95406
 * Semantic: lineToolUtils
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:53.164Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 95406 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95406: (exports, module, i) => {
    "use strict";

    function s(exports) {
      if (!r(exports)) throw e
    }

    function o(exports) {
      return e?.aborted ? Promise.reject(n()) : new Promise(((module, i) => {
        e?.addEventListener("abort", (() => i(n())), {
          once: !0
        })
      }))
    }

    function n() {
      return new DOMException("Aborted", "AbortError")
    }

    function r(exports) {
      return e instanceof Error && "AbortError" === exports.name || "object" == typeof e && null !== e && "name" in e &&
        "AbortError" === exports.name
    }

    function a(exports, t) {
      return Promise.race([o(exports), t])
    }
    async function l(exports, t) {
      let require;
      try {
        await a(exports, new Promise((exports => {
          require = setTimeout(exports, t)
        })))
      } finally {
        clearTimeout(require)
      }
    }
    require.d(module, {
      delay: () => logger,
      isAbortError: () => result,
      respectAbort: () => array,
      skipAbortError: () => s
    })
}
