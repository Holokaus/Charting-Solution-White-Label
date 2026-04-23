/**
 * Module 75641 - Auto-beautified from TradingView webpack bundle
 *
 * @module 75641
 * @date 2026-04-23
 * @size 215 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 87296
 *
 * Exports:
 *   - translatedIntervalString (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  translatedIntervalString: () => o
});
var s = i(87296);

function o(e) {
  const t = (0, s.getTranslatedResolutionModel)(e, !0);
  return null === t ? e : t.multiplier + (t.mayOmitShortKind ? "" : t.shortKind)
