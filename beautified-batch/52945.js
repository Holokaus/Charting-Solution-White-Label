/**
 * Module 52945 - Auto-beautified from TradingView webpack bundle
 *
 * @module 52945
 * @date 2026-04-23
 * @size 1569 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 24062, 77914
 *
 * Exports:
 *   - fromIndexedTo100 (internal: h)
 *   - fromLog (internal: p)
 *   - fromPercent (internal: a)
 *   - getCurrentModePriceText (internal: f)
 *   - getOppositeModePriceText (internal: y)
 *   - logFormulaForBase (internal: m)
 *   - logFormulasAreSame (internal: g)
 *   - toIndexedTo100 (internal: d)
 *   - toIndexedTo100Range (internal: u)
 *   - toLog (internal: _)
 *   - toPercent (internal: l)
 *   - toPercentRange (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  fromIndexedTo100: () => h,
  fromLog: () => p,
  fromPercent: () => a,
  getCurrentModePriceText: () => f,
  getOppositeModePriceText: () => y,
  logFormulaForBase: () => m,
  logFormulasAreSame: () => g,
  toIndexedTo100: () => d,
  toIndexedTo100Range: () => u,
  toLog: () => _,
  toPercent: () => l,
  toPercentRange: () => c
});
var s = i(24062),
  o = i(77914);
const n = {
    logicalOffset: 4,
    coordOffset: 1e-4
  },
  r = 305;

function a(e, t) {
  return t < 0 && (e = -e), e / 100 * t + t
}

function l(e, t) {
  const i = 100 * (e - t) / (t || 1);
  return t < 0 ? -i : i
}

function c(e, t) {
  const i = l(e.minValue(), t),
    o = l(e.maxValue(), t);
  return new s.PriceRange(i, o)
}

function h(e, t) {
  return t < 0 && (e = -e), (e -= 100) / 100 * t + t
}

function d(e, t) {
  const i = 100 * (e - t) / t + 100;
  return t < 0 ? -i : i
}

function u(e, t) {
  const i = d(e.minValue(), t),
    o = d(e.maxValue(), t);
  return new s.PriceRange(i, o)
}

function _(e, t) {
  const i = Math.min(10 ** r - t.coordOffset, Math.abs(e));
  if (i < 1e-25) return 0;
  const s = (0, o.log10)(i + t.coordOffset) + t.logicalOffset;
  return e < 0 ? -s : s
}

function p(e, t) {
  const i = Math.abs(e);
  if (i < 1e-15) return 0;
  const s = Math.pow(10, Math.min(i - t.logicalOffset, r)) - t.coordOffset;
  return e < 0 ? -s : s
}

function m(e) {
  if (null === e) return n;
  const t = 1 / e;
  if (t >= n.coordOffset || t < 1e-15) return n;
  const i = Math.abs(Math.log10(e));
  return {
    logicalOffset: i,
    coordOffset: 1 / Math.pow(10, i)
  }
}

function g(e, t) {
  return e.logicalOffset === t.logicalOffset && e.coordOffset === t.coordOffset
}

function f(e, t) {
  return e.isPercentage() ? t.formattedPricePercentage : e.isIndexedTo100() ? t.formattedPriceIndexedTo100 : t.formattedPriceAbsolute
}

function y(e, t) {
  return e.isPercentage() || e.isIndexedTo100() ? t.formattedPriceAbsolute : t.formattedPricePercentage
