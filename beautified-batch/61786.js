/**
 * Module 61786 - Auto-beautified from TradingView webpack bundle
 *
 * @module 61786
 * @date 2026-04-23
 * @size 336 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 23714, 64876
 *
 * Exports:
 *   - actualBehavior (internal: a)
 *   - availableValues (internal: r)
 *   - property (internal: n)
 *   - restorePaneButtonsVisibilitySettingsValue (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

61786: (e, t, i) => {
    "use strict";
    i.d(t, {
      actualBehavior: () => a,
      availableValues: () => r,
      property: () => n,
      restorePaneButtonsVisibilitySettingsValue: () => l
    });
    var s = i(64876),
      o = i(23714);
    const {
      property: n,
      availableValues: r,
      actualBehavior: a,
      restoreDefaultValue: l
    } = (0, s.createVisibilityController)("PaneButtons.visibility", o.navigationButtonsVisibilityKey)
