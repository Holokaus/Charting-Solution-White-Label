/**
 * Module 97363 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97363: (e, t, i) => {
    "use strict";
    i.d(t, {
      dateFormatProperty: () => l,
      restoreDateFormatSettingsValue: () => c
    });
    var settingsAdapter = i(1765),
      o = i(41072),
      n = i(10718);
    const r = "date_format";

    function a() {
      return settingsAdapter.getValue(r, (0, n.defaultDateFormat)())
    }
    const l = (0, o.createPrimitiveProperty)(a());

    function c() {
      l.setValue((0, n.defaultDateFormat)()), settingsAdapter.remove(r)
    }
    settingsAdapter.onSync.subscribe(null, (() => l.setValue(a()))), l.subscribe(null, (() => settingsAdapter.setValue(
      r, l.value())))