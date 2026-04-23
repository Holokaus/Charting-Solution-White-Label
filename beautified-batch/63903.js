/**
 * Module 63903 - Auto-beautified from TradingView webpack bundle
 *
 * @module 63903
 * @date 2026-04-23
 * @size 880 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22455, 95059
 *
 * Exports:
 *   - getPriceValueFormatterForSource (internal: l)
 *   - getPriceValueFormatterForStudy (internal: c)
 *   - shouldBeFormattedAsIndexedTo100 (internal: r)
 *   - shouldBeFormattedAsPercent (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getPriceValueFormatterForSource: () => l,
  getPriceValueFormatterForStudy: () => c,
  shouldBeFormattedAsIndexedTo100: () => r,
  shouldBeFormattedAsPercent: () => n
});
var s = i(95059),
  o = i(22455);

function n(e) {
  const t = e.priceScale();
  return !(null === t || !t.isPercentage()) && (!(0, o.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e.style()))
}

function r(e) {
  const t = e.priceScale();
  return !(null === t || !t.isIndexedTo100()) && (!(0, o.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e.style()))
}

function a(e) {
  const t = e.priceScale();
  return r(e) && null !== t ? (i, s) => t.formatPriceIndexedTo100(i, e.firstValue() ?? 100, s) : n(e) && null !== t ? (i, s) => t.formatPricePercentage(i, e.firstValue() ?? 100, s) : null
}

function l(e) {
  const t = a(e);
  if (t) return t;
  const i = e.formatter();
  return i.format.bind(i)
}

function c(e, t) {
  const i = a(e);
  if (i) return i;
  const s = e.plotFormatter(t);
  return s.format.bind(s)
