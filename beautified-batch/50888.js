/**
 * Module 50888 - Auto-beautified from TradingView webpack bundle
 *
 * @module 50888
 * @date 2026-04-23
 * @size 609 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151, 59149
 *
 * Exports:
 *   - CRUCIAL_REALTIME_BATS (internal: l)
 *   - firstReplacedByBatsExchange (internal: c)
 *   - isAmexToCboeMigratedSymbol (internal: _)
 *   - isDelay (internal: d)
 *   - isEod (internal: h)
 *   - witoutRealtime (internal: u)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  CRUCIAL_REALTIME_BATS: () => l,
  firstReplacedByBatsExchange: () => c,
  isAmexToCboeMigratedSymbol: () => _,
  isDelay: () => d,
  isEod: () => h,
  witoutRealtime: () => u
});
i(50151);
var s = i(59149),
  o = i.n(s);
const n = ["DJ", "JSE", "BELEX"],
  r = ["NZX"],
  a = ["BIVA"],
  l = ["AMEX", "NASDAQ", "NYSE"];

function c(e) {
  return null
}

function h(e, t) {
  return o().hasEodSymbols(e.full_name) || 6 === t
}

function d(e) {
  return void 0 !== e && e > 0
}

function u(e) {
  return "index" === e.type && n.includes(e.listed_exchange) || "futures" === e.type && r.includes(e.listed_exchange) || a.includes(e.listed_exchange)
}

function _(e, t) {
  return "amex" === t && "CBOE" === e
