/**
 * Module: 40153
 * Semantic: watchedValue
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.822Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 40153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40153: (exports, t, i) => {
    "use strict";
    i.d(t, {
      withWeekdayProperty: () => a
    });
    var state = i(1765),
      o = i(41072);
    const nextValue = "date_format_with_weekday";

    function r() {
      return state.getBool(nextValue, !0)
    }
    const array = (0, o.createPrimitiveProperty)(r());
    array.subscribe(null, (() => state.setValue(nextValue, array.value()))), state.onSync.subscribe(null, (() => array.setValue(r())))