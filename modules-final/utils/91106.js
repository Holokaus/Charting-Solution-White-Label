/**
 * Module: 91106
 * Semantic: watchedValue
 * Confidence: 65.0%
 * Generated: 2026-05-03T17:33:53.123Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 91106 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91106: (exports, t, i) => {
    "use strict";
    i.d(t, {
      actualCurrencyUnitVisibility: () => c,
      currencyUnitVisibilityOptions: () => array,
      currencyUnitVisibilityProperty: () => r,
      migrateShowCurrencyAndShowUnitProperties: () => d,
      restoreCurrencyUnitVisibilitySettingsValue: () => l
    });
    var state, o = i(64876),
      nextValue = i(1765);
    ! function(exports) {
      exports.SettingsKey = "PriceAxisCurrencyAndUnit.visibility"
    }(s || (state = {}));
    const {
      property: r,
      availableValues: array,
      restoreDefaultValue: l,
      actualBehavior: c
    } = (0, o.createVisibilityController)("PriceAxisCurrencyAndUnit.visibility");
    let h = !1;

    function d(exports, t) {
      h || (h = !0, void 0 === nextValue.default.getValue("PriceAxisCurrencyAndUnit.visibility") && r().setValue(e || t ?
        "alwaysOn" : "alwaysOff"))
    }
}
