/**
 * Module 57340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57340: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      chartFloatingTooltipEnabledWV: () => seriesBarFunction_a
    });
    var settingsAdapter = seriesBarFunction_i(1765),
      seriesBarFunction_o = seriesBarFunction_i(22613);
    const seriesBarFunction_n = "chart_floating_tooltip_enabled";

    function seriesBarFunction_r() {
      return settingsAdapter.getJSON(seriesBarFunction_n, true)
    }
    const seriesBarFunction_a = new seriesBarFunction_o.WatchedValue(seriesBarFunction_r());
    seriesBarFunction_a.subscribe((() => settingsAdapter.setValue(seriesBarFunction_n, seriesBarFunction_a.value()))), settingsAdapter.onSync.subscribe(null, (() => seriesBarFunction_a
      .setValue(seriesBarFunction_r())))