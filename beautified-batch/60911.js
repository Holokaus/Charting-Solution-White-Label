/**
 * Module 60911 - Auto-beautified from TradingView webpack bundle
 *
 * @module 60911
 * @date 2026-04-23
 * @size 815 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 87465
 *
 * Exports:
 *   - decodeExtendedSymbol (internal: h)
 *   - encodeExtendedSymbolOrGetSimpleSymbolString (internal: l)
 *   - extractExtendedSymbol (internal: d)
 *   - isEncodedExtendedSymbol (internal: c)
 *   - isStudySymbol (internal: a)
 *   - replaceExtendedSymbol (internal: u)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  decodeExtendedSymbol: () => h,
  encodeExtendedSymbolOrGetSimpleSymbolString: () => l,
  extractExtendedSymbol: () => d,
  isEncodedExtendedSymbol: () => c,
  isStudySymbol: () => a,
  replaceExtendedSymbol: () => u
});
var s = i(87465);

function o(e) {
  return "=" + JSON.stringify(n(e))
}

function n(e) {
  return Object.keys(e).sort().reduce(((t, i) => ("[object Object]" === Object.prototype.toString.call(e[i]) ? t[i] = n(e[i]) : t[i] = e[i], t)), {})
}

function r(e) {
  return (0, s.isString)(e)
}

function a(e) {
  return !r(e) && "inputs" in e
}

function l(e) {
  return o(e)
}

function c(e) {
  return "=" === e[0]
}

function h(e) {
  if (!c(e)) return {
    symbol: e
  };
  try {
    return JSON.parse(e.slice(1))
  } catch (t) {
    return {
      symbol: e
    }
  }
}

function d(e) {
  if (r(e)) return {
    symbol: e
  };
  let t = e;
  for (; !r(t.symbol);) t = t.symbol;
  return t
}

function u(e, t) {
  let i = e;
  for (; !r(i.symbol);) i = i.symbol;
  i.symbol = t
