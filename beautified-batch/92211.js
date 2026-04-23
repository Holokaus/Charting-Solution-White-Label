/**
 * Module 92211 - Auto-beautified from TradingView webpack bundle
 *
 * @module 92211
 * @date 2026-04-23
 * @size 439 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37103
 *
 * Exports:
 *   - extractSymbolNameFromSymbolInfo (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  extractSymbolNameFromSymbolInfo: () => l
});
var s = i(37103);
const o = s.enabled("pay_attention_to_ticker_not_symbol"),
  n = s.enabled("charting_library_single_symbol_request"),
  r = s.enabled("use_ticker_on_symbol_info_update"),
  a = s.enabled("uppercase_instrument_names");

function l(e, t, i, s) {
  let l = e && (i && e.pro_name || e.full_name || e.name);
  return n && t ? l = t : (r || !s && o) && e && e.ticker && (l = e.ticker), a && l && (l = l.toUpperCase()), l
