/**
 * Module 92211 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

92211: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      extractSymbolNameFromSymbolInfo: () => seriesBarFunction_l
    });
    var modes = require(37103);
    const isValid = modes.enabled("pay_attention_to_ticker_not_symbol"),
      value = modes.enabled("charting_library_single_symbol_request"),
      seriesBarFunction_r = modes.enabled("use_ticker_on_symbol_info_update"),
      seriesBarFunction_a = modes.enabled("uppercase_instrument_names");

    function seriesBarFunction_l(exports, module, require, modes) {
      let seriesBarFunction_l = exports && (require && exports.pro_name || exports.full_name || exports.name);
      return value && module ? seriesBarFunction_l = module : (seriesBarFunction_r || !modes && isValid) && exports && exports.ticker && (seriesBarFunction_l = exports.ticker), seriesBarFunction_a && seriesBarFunction_l && (seriesBarFunction_l = seriesBarFunction_l.toUpperCase()), seriesBarFunction_l
    }