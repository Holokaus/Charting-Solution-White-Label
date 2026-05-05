/**
 * Module 8811 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

8811: (e, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscription: () => o
    });
    var s = i(22613);

    function o(e, t) {
      const i = new s.WatchedValue(e()),
        o = {};
      t.subscribe(o, (() => {
        i.setValue(e(i.value()))
      }));
      return i.readonly().spawn((() => t.unsubscribeAll(o)))
    }