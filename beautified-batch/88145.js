/**
 * Module 88145 - Auto-beautified from TradingView webpack bundle
 *
 * @module 88145
 * @date 2026-04-23
 * @size 466 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - hasCryptoTypespec (internal: s)
 *   - isBond (internal: o)
 *   - isEconomicSymbol (internal: n)
 *   - isFutures (internal: a)
 *   - isSpread (internal: r)
 *   - isSymbolDelisted (internal: c)
 *   - isYield (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

88145: (e, t, i) => {
    "use strict";

    function s(e) {
      return void 0 !== e && e.includes("crypto")
    }

    function o(e) {
      return "bond" === e
    }

    function n(e) {
      return "economic" === e
    }

    function r(e) {
      return "spread" === e
    }

    function a(e) {
      return "futures" === e
    }

    function l(e) {
      return Boolean(e.typespecs?.includes("yield"))
    }

    function c(e) {
      return e?.includes("discontinued") ?? !1
    }
    i.d(t, {
      hasCryptoTypespec: () => s,
      isBond: () => o,
      isEconomicSymbol: () => n,
      isFutures: () => a,
      isSpread: () => r,
      isSymbolDelisted: () => c,
      isYield: () => l
    })
