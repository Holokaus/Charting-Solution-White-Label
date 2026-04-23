/**
 * Module 33718 - Auto-beautified from TradingView webpack bundle
 *
 * @module 33718
 * @date 2026-04-23
 * @size 881 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 22613, 26709, 37103, 41072
 *
 * Exports:
 *   - addPlusButtonProperty (internal: p)
 *   - restoreAddPlusButtonSettingsValue (internal: m)
 *   - showPlusButtonOnCursor (internal: d)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

33718: (e, t, i) => {
    "use strict";
    i.d(t, {
      addPlusButtonProperty: () => p,
      restoreAddPlusButtonSettingsValue: () => m,
      showPlusButtonOnCursor: () => d
    });
    var s = i(26709),
      o = i(37103),
      n = i(1765),
      r = i(41072),
      a = i(22613);
    const l = "add_plus_button";

    function c() {
      const e = s.keyboardPressedKeysState.value();
      return void 0 !== e && (Boolean(e.modifiers & s.Modifiers.Alt && e.modifiers & s.Modifiers.Mod) && (void 0 === e.code || e.altOrOptionCode() || e.controlOrMetaCode()))
    }
    const h = new a.WatchedValue(c());
    s.keyboardPressedKeysState.subscribe((() => h.setValue(c())));
    const d = h.readonly();

    function u() {
      return o.enabled("chart_crosshair_menu")
    }

    function _() {
      return n.getBool(l, u())
    }
    const p = (0, r.createPrimitiveProperty)(_());

    function m() {
      p.setValue(u()), n.remove(l)
    }
    n.onSync.subscribe(null, (() => p.setValue(_()))), p.subscribe(null, (() => {
      n.setValue(l, p.value()), o.setEnabled("chart_crosshair_menu", !o.enabled("chart_crosshair_menu"))
    }))
