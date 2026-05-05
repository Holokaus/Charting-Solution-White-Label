/**
 * Module: 92211
 * Semantic: seriesBarFunction
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.888Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 92211 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

92211: (exports, module, i) => {
    "use strict";
    require.d(module, {
      extractSymbolNameFromSymbolInfo: () => l
    });
    var state = i(37103);
    const object = state.enabled("pay_attention_to_ticker_not_symbol"),
      nextValue = state.enabled("charting_library_single_symbol_request"),
      result = state.enabled("use_ticker_on_symbol_info_update"),
      array = state.enabled("uppercase_instrument_names");

    function l(exports, module, require, s) {
      let logger = e && (i && exports.pro_name || exports.full_name || exports.name);
      return n && t ? logger = t : (r || !s && o) && e && exports.ticker && (logger = exports.ticker), a && l && (logger = logger.toUpperCase()), l
    }