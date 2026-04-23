/**
 * Module 91106 - Auto-beautified from TradingView webpack bundle
 *
 * @module 91106
 * @date 2026-04-23
 * @size 638 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 64876
 *
 * Exports:
 *   - actualCurrencyUnitVisibility (internal: c)
 *   - currencyUnitVisibilityOptions (internal: a)
 *   - currencyUnitVisibilityProperty (internal: r)
 *   - migrateShowCurrencyAndShowUnitProperties (internal: d)
 *   - restoreCurrencyUnitVisibilitySettingsValue (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  actualCurrencyUnitVisibility: () => c,
  currencyUnitVisibilityOptions: () => a,
  currencyUnitVisibilityProperty: () => r,
  migrateShowCurrencyAndShowUnitProperties: () => d,
  restoreCurrencyUnitVisibilitySettingsValue: () => l
});
var s, o = i(64876),
  n = i(1765);
! function(e) {
  e.SettingsKey = "PriceAxisCurrencyAndUnit.visibility"
}(s || (s = {}));
const {
  property: r,
  availableValues: a,
  restoreDefaultValue: l,
  actualBehavior: c
} = (0, o.createVisibilityController)("PriceAxisCurrencyAndUnit.visibility");
let h = !1;

function d(e, t) {
  h || (h = !0, void 0 === n.default.getValue("PriceAxisCurrencyAndUnit.visibility") && r().setValue(e || t ? "alwaysOn" : "alwaysOff"))
