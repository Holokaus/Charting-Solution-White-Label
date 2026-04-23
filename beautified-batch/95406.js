/**
 * Module 95406 - Auto-beautified from TradingView webpack bundle
 *
 * @module 95406
 * @date 2026-04-23
 * @size 608 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - delay (internal: l)
 *   - isAbortError (internal: r)
 *   - respectAbort (internal: a)
 *   - skipAbortError (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

95406: (e, t, i) => {
    "use strict";

    function s(e) {
      if (!r(e)) throw e
    }

    function o(e) {
      return e?.aborted ? Promise.reject(n()) : new Promise(((t, i) => {
        e?.addEventListener("abort", (() => i(n())), {
          once: !0
        })
      }))
    }

    function n() {
      return new DOMException("Aborted", "AbortError")
    }

    function r(e) {
      return e instanceof Error && "AbortError" === e.name || "object" == typeof e && null !== e && "name" in e && "AbortError" === e.name
    }

    function a(e, t) {
      return Promise.race([o(e), t])
    }
    async function l(e, t) {
      let i;
      try {
        await a(e, new Promise((e => {
          i = setTimeout(e, t)
        })))
      } finally {
        clearTimeout(i)
      }
    }
    i.d(t, {
      delay: () => l,
      isAbortError: () => r,
      respectAbort: () => a,
      skipAbortError: () => s
    })
