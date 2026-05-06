/**
 * Module 8811 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

8811: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscription: () => o
    });
    var watchedValue_s = i(22613);

    function o(watchedValue_e, t) {
      const i = new watchedValue_s.WatchedValue(watchedValue_e()),
        o = {};
      t.subscribe(o, (() => {
        i.setValue(watchedValue_e(i.value()))
      }));
      return i.readonly().spawn((() => t.unsubscribeAll(o)))
    }