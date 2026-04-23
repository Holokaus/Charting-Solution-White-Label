/**
 * Module 25246 - Auto-beautified from TradingView webpack bundle
 *
 * @module 25246
 * @date 2026-04-23
 * @size 441 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 64876
 *
 * Exports:
 *   - actualAutoLogButtonsVisibility (internal: l)
 *   - autoLogButtonsVisibilityOptions (internal: r)
 *   - autoLogButtonsVisibilityProperty (internal: n)
 *   - restoreAutoLogButtonsVisibilitySettingsValue (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

25246: (e, t, i) => {
    "use strict";
    i.d(t, {
      actualAutoLogButtonsVisibility: () => l,
      autoLogButtonsVisibilityOptions: () => r,
      autoLogButtonsVisibilityProperty: () => n,
      restoreAutoLogButtonsVisibilitySettingsValue: () => a
    });
    var s, o = i(64876);
    ! function(e) {
      e.SettingsKey = "PriceAxisAutoLogButtons.visibility"
    }(s || (s = {}));
    const {
      property: n,
      availableValues: r,
      restoreDefaultValue: a,
      actualBehavior: l
    } = (0, o.createVisibilityController)("PriceAxisAutoLogButtons.visibility")
