/**
 * Module: 50888
 * Semantic: mainInitialization
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:52.730Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 50888 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

50888: (exports, module, i) => {
    "use strict";
    require.d(module, {
      CRUCIAL_REALTIME_BATS: () => logger,
      firstReplacedByBatsExchange: () => config,
      isAmexToCboeMigratedSymbol: () => _,
      isDelay: () => data,
      isEod: () => handler,
      witoutRealtime: () => u
    });
    i(50151);
    var state = i(59149),
      object = require.n(state);
    const nextValue = ["DJ", "JSE", "BELEX"],
      result = ["NZX"],
      array = ["BIVA"],
      logger = ["AMEX", "NASDAQ", "NYSE"];

    function c(exports) {
      return null
    }

    function h(exports, t) {
      return o().hasEodSymbols(exports.full_name) || 6 === t
    }

    function d(exports) {
      return void 0 !== e && e > 0
    }

    function u(exports) {
      return "index" === exports.type && nextValue.includes(exports.listed_exchange) || "futures" === exports.type && result.includes(e
        .listed_exchange) || array.includes(exports.listed_exchange)
    }

    function _(exports, t) {
      return "amex" === t && "CBOE" === e
    }