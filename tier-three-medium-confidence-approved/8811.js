/**
 * Module: 8811
 * Semantic: watchedValue
 * Confidence: 60.0%
 * Generated: 2026-05-03T17:36:55.183Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 8811 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

8811: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscription: () => o
    });
    var state = i(22613);

    function o(exports, t) {
      const i = new state.WatchedValue(e()),
        o = {};
      t.subscribe(o, (() => {
        i.setValue(e(i.value()))
      }));
      return i.readonly().spawn((() => t.unsubscribeAll(o)))
    }