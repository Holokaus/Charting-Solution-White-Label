/**
 * Module 20512 - Auto-beautified from TradingView webpack bundle
 *
 * @module 20512
 * @date 2026-04-23
 * @size 556 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 82087
 *
 * Exports:
 *   - getHourMinuteFormat (internal: o)
 *   - getHourMinuteSecondFormat (internal: n)
 *   - getTimeFormatForInterval (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getHourMinuteFormat: () => o,
  getHourMinuteSecondFormat: () => n,
  getTimeFormatForInterval: () => r
});
var s = i(82087);

function o(e) {
  return "12-hours" === e ? s.twelveHourMinuteFormat : s.hourMinuteFormat
}

function n(e) {
  return "12-hours" === e ? s.twelveHourMinuteSecondFormat : s.hourMinuteSecondFormat
}

function r(e, t) {
  if (e.isRange()) return function(e) {
    return "12-hours" === e ? s.twelveHourMinuteNonZeroSecondFormat : s.hourMinuteNonZeroSecondFormat
  }(t);
  if (e.isTicks()) return s.hourMinuteSecondMillisecFormat;
  return e.isSeconds() || e.isTicks() ? n(t) : o(t)
