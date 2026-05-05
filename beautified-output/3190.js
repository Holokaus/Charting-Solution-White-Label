/**
 * Module 3190 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3190: (e, t, i) => {
    "use strict";
    i.d(t, {
      restoreTimeHoursFormatSettingsValue: () => l,
      timeHoursFormatProperty: () => a
    });
    var settingsAdapter = i(1765),
      o = i(41072);
    const n = "time_hours_format";

    function r() {
      return settingsAdapter.getValue(n, "24-hours")
    }
    const a = (0, o.createPrimitiveProperty)(r());

    function l() {
      a.setValue("24-hours"), settingsAdapter.remove(n)
    }
    settingsAdapter.onSync.subscribe(null, (() => a.setValue(r()))), a.subscribe(null, (() => settingsAdapter.setValue(
      n, a.value())))