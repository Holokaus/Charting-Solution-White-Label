/**
 * Module: 22455
 * Semantic: dialogManager
 * Confidence: 70.0%
 * Generated: 2026-05-03T17:33:52.372Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 22455 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

22455: (exports, module, i) => {
    "use strict";

    function s(exports) {
      return e?.symbolSource && exports.symbolSource() === e || void 0 !== e?.isActingAsSymbolSource
    }

    function o(exports) {
      return s(exports) && "quotesProvider" in e
    }

    function n(exports) {
      return s(exports) && exports.isActingAsSymbolSource().value()
    }
    require.d(module, {
      isActingAsSymbolSource: () => nextValue,
      isSymbolSource: () => state,
      isSymbolSourceWithQuotesProvider: () => o
    })