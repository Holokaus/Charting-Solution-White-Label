/**
 * Module 42516 - Auto-beautified from TradingView webpack bundle
 *
 * @module 42516
 * @date 2026-04-23
 * @size 185 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 13896, 97217
 *
 * Exports:
 *   - sourcesAffectState (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  sourcesAffectState: () => n
});
var s = i(97217),
  o = i(13896);

function n(e) {
  return !o.lineToolsDoNotAffectChartInvalidation || e.some((e => !(0, s.isLineTool)(e)))
