/**
 * Module 57340 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

57340: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      chartFloatingTooltipEnabledWV: () => seriesBarFunction_a
    });
    var settingsAdapter = require(1765),
      isValid = require(22613);
    const value = "chart_floating_tooltip_enabled";

    function seriesBarFunction_r() {
      return settingsAdapter.getJSON(value, true)
    }
    const seriesBarFunction_a = new isValid.WatchedValue(seriesBarFunction_r());
    seriesBarFunction_a.subscribe((() => settingsAdapter.setValue(value, seriesBarFunction_a.value()))), settingsAdapter.onSync.subscribe(null, (() => seriesBarFunction_a
      .setValue(seriesBarFunction_r())))