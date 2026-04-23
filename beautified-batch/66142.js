/**
 * Module 66142 - Auto-beautified from TradingView webpack bundle
 *
 * @module 66142
 * @date 2026-04-23
 * @size 843 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 24062
 *
 * Exports:
 *   - barSpacingByScaleRatio (internal: a)
 *   - priceRangeByScaleRatio (internal: r)
 *   - scaleRatio (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  barSpacingByScaleRatio: () => a,
  priceRangeByScaleRatio: () => r,
  scaleRatio: () => n
});
var s = i(24062);
const o = 1e-10;

function n(e, t) {
  if (t.isLog() || e.isEmpty() || t.isEmpty()) return null;
  const i = function(e) {
    if (e.isEmpty()) return null;
    const t = e.priceRange();
    if (null === t) return null;
    const i = t.length();
    return e.internalHeight() / i
  }(t);
  if (null === i) return null;
  return e.getValidBarSpacing() / Math.max(o, i)
}

function r(e, t, i) {
  if (e.isLog() || null === i || e.isEmpty()) return null;
  const o = e.priceRange();
  if (null === o || o.isEmpty()) return null;
  const n = e.internalHeight() / (t / i),
    r = o.length();
  if (n === r) return o;
  const a = (n - r) / 2;
  return new s.PriceRange(o.minValue() - a, o.maxValue() + a)
}

function a(e, t) {
  if (e.isLog() || null === t || e.isEmpty()) return null;
  const i = e.priceRange();
  if (null === i) return null;
  const s = i.length();
  return e.internalHeight() / s * t
