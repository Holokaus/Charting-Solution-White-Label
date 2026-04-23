/**
 * Module 22455 - Auto-beautified from TradingView webpack bundle
 *
 * @module 22455
 * @date 2026-04-23
 * @size 331 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - isActingAsSymbolSource (internal: n)
 *   - isSymbolSource (internal: s)
 *   - isSymbolSourceWithQuotesProvider (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

22455: (e, t, i) => {
    "use strict";

    function s(e) {
      return e?.symbolSource && e.symbolSource() === e || void 0 !== e?.isActingAsSymbolSource
    }

    function o(e) {
      return s(e) && "quotesProvider" in e
    }

    function n(e) {
      return s(e) && e.isActingAsSymbolSource().value()
    }
    i.d(t, {
      isActingAsSymbolSource: () => n,
      isSymbolSource: () => s,
      isSymbolSourceWithQuotesProvider: () => o
    })
