/**
 * Module: 57340
 * Semantic: watchedValue
 * Confidence: 60.0%
 * Generated: 2026-05-03T17:36:55.153Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 57340 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57340: (exports, t, i) => {
    "use strict";
    i.d(t, {
      chartFloatingTooltipEnabledWV: () => a
    });
    var settingsAdapter = i(1765),
      o = i(22613);
    const nextValue = "chart_floating_tooltip_enabled";

    function r() {
      return settingsAdapter.getJSON(nextValue, true)
    }
    const array = new o.WatchedValue(r());
    array.subscribe((() => settingsAdapter.setValue(nextValue, array.value()))), settingsAdapter.onSync.subscribe(null, (() => a
      .setValue(r())))