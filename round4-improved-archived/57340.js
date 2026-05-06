/**
 * Module 57340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57340: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      chartFloatingTooltipEnabledWV: () => a
    });
    var settingsAdapter = i(1765),
      o = i(22613);
    const watchedValue_n = "chart_floating_tooltip_enabled";

    function r() {
      return settingsAdapter.getJSON(watchedValue_n, true)
    }
    const a = new o.WatchedValue(r());
    a.subscribe((() => settingsAdapter.setValue(watchedValue_n, a.value()))), settingsAdapter.onSync.subscribe(null, (() => a
      .setValue(r())))