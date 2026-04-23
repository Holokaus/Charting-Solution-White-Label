/**
 * Module 23714 - Auto-beautified from TradingView webpack bundle
 *
 * @module 23714
 * @date 2026-04-23
 * @size 346 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 64876
 *
 * Exports:
 *   - actualBehavior (internal: a)
 *   - availableValues (internal: r)
 *   - navigationButtonsVisibilityKey (internal: o)
 *   - property (internal: n)
 *   - restoreNavigationButtonsVisibilitySettingsValue (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

23714: (e, t, i) => {
    "use strict";
    i.d(t, {
      actualBehavior: () => a,
      availableValues: () => r,
      navigationButtonsVisibilityKey: () => o,
      property: () => n,
      restoreNavigationButtonsVisibilitySettingsValue: () => l
    });
    var s = i(64876);
    const o = "NavigationButtons.visibility",
      {
        property: n,
        availableValues: r,
        actualBehavior: a,
        restoreDefaultValue: l
      } = (0, s.createVisibilityController)(o)
