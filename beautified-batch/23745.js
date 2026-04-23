/**
 * Module 23745 - Auto-beautified from TradingView webpack bundle
 *
 * @module 23745
 * @date 2026-04-23
 * @size 237 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 37103, 49483, 84015
 *
 * Exports:
 *   - shouldShowQuickSearchOnLib (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  shouldShowQuickSearchOnLib: () => r
});
var s = i(49483),
  o = i(84015),
  n = i(37103);

function r() {
  return !s.CheckMobile.any() && !(0, o.isOnMobileAppPage)("any") && !n.enabled("widget") && n.enabled("header_quick_search")
