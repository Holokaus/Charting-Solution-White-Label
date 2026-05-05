/**
 * Module: 11751
 * Semantic: watchedValue
 * Confidence: 60.0%
 * Generated: 2026-05-03T17:36:55.074Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 11751 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11751: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscriptions: () => o
    });
    var state = i(22613);

    function o(exports, t) {
      const i = new state.WatchedValue(e()),
        o = {};
      t.forEach((t => t.subscribe(o, (() => {
        i.setValue(e())
      }))));
      return i.readonly().spawn((() => t.forEach((exports => exports.unsubscribeAll(o)))))
    }