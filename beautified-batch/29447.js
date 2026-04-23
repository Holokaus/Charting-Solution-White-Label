/**
 * Module 29447 - Auto-beautified from TradingView webpack bundle
 *
 * @module 29447
 * @date 2026-04-23
 * @size 405 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11946
 *
 * Exports:
 *   - isLineToolState (internal: r)
 *   - isMainSeriesState (internal: o)
 *   - isStudyLineToolState (internal: a)
 *   - isStudyState (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  isLineToolState: () => r,
  isMainSeriesState: () => o,
  isStudyLineToolState: () => a,
  isStudyState: () => n
});
var s = i(11946);

function o(e) {
  return "MainSeries" === e.type
}

function n(e) {
  return Boolean(e.type) && e.type.toLowerCase().startsWith("study")
}

function r(e) {
  return Boolean(e.type) && (0, s.isLineToolName)(e.type)
}

function a(e) {
  return Boolean(e.type) && (0, s.isStudyLineToolName)(e.type)
