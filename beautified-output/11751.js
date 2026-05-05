/**
 * Module 11751 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11751: (e, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscriptions: () => o
    });
    var s = i(22613);

    function o(e, t) {
      const i = new s.WatchedValue(e()),
        o = {};
      t.forEach((t => t.subscribe(o, (() => {
        i.setValue(e())
      }))));
      return i.readonly().spawn((() => t.forEach((e => e.unsubscribeAll(o)))))
    }