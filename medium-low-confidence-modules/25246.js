/**
 * Module: 25246
 * Semantic: watchedValue
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.801Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 25246 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

25246: (exports, t, i) => {
    "use strict";
    i.d(t, {
      actualAutoLogButtonsVisibility: () => l,
      autoLogButtonsVisibilityOptions: () => r,
      autoLogButtonsVisibilityProperty: () => nextValue,
      restoreAutoLogButtonsVisibilitySettingsValue: () => a
    });
    var state, o = i(64876);
    ! function(exports) {
      exports.SettingsKey = "PriceAxisAutoLogButtons.visibility"
    }(s || (state = {}));
    const {
      property: nextValue,
      availableValues: r,
      restoreDefaultValue: array,
      actualBehavior: l
    } = (0, o.createVisibilityController)("PriceAxisAutoLogButtons.visibility")