/**
 * Module: 92211
 * Semantic: seriesBarFunction
 * Confidence: 100.0%
 * Keywords: 2
 * Generated: 2026-05-06T05:26:21.427Z
 * Category: Round 4 Improved MEDIUM (65%+, 2+ keywords)
 * Status: Applied with verification pending
 */

/**
 * Module 92211 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

92211: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      extractSymbolNameFromSymbolInfo: () => l
    });
    var seriesBarFunction_s = i(37103);
    const o = seriesBarFunction_s.enabled("pay_attention_to_ticker_not_symbol"),
      n = seriesBarFunction_s.enabled("charting_library_single_symbol_request"),
      r = seriesBarFunction_s.enabled("use_ticker_on_symbol_info_update"),
      seriesBarFunction_a = seriesBarFunction_s.enabled("uppercase_instrument_names");

    function l(seriesBarFunction_e, t, i, seriesBarFunction_s) {
      let l = seriesBarFunction_e && (i && seriesBarFunction_e.pro_name || seriesBarFunction_e.full_name || seriesBarFunction_e.name);
      return n && t ? l = t : (r || !seriesBarFunction_s && o) && seriesBarFunction_e && seriesBarFunction_e.ticker && (l = seriesBarFunction_e.ticker), seriesBarFunction_a && l && (l = l.toUpperCase()), l
    }