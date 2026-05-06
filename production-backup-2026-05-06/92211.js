/**
 * Module 92211 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

92211: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      extractSymbolNameFromSymbolInfo: () => seriesBarFunction_l
    });
    var seriesBarFunction_s = seriesBarFunction_i(37103);
    const seriesBarFunction_o = seriesBarFunction_s.enabled("pay_attention_to_ticker_not_symbol"),
      seriesBarFunction_n = seriesBarFunction_s.enabled("charting_library_single_symbol_request"),
      seriesBarFunction_r = seriesBarFunction_s.enabled("use_ticker_on_symbol_info_update"),
      seriesBarFunction_a = seriesBarFunction_s.enabled("uppercase_instrument_names");

    function seriesBarFunction_l(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s) {
      let seriesBarFunction_l = seriesBarFunction_e && (seriesBarFunction_i && seriesBarFunction_e.pro_name || seriesBarFunction_e.full_name || seriesBarFunction_e.name);
      return seriesBarFunction_n && seriesBarFunction_t ? seriesBarFunction_l = seriesBarFunction_t : (seriesBarFunction_r || !seriesBarFunction_s && seriesBarFunction_o) && seriesBarFunction_e && seriesBarFunction_e.ticker && (seriesBarFunction_l = seriesBarFunction_e.ticker), seriesBarFunction_a && seriesBarFunction_l && (seriesBarFunction_l = seriesBarFunction_l.toUpperCase()), seriesBarFunction_l
    }