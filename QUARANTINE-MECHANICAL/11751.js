/**
 * Module 11751 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11751: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscriptions: () => o
    });
    var watchedValue_s = i(22613);

    function o(watchedValue_e, t) {
      const i = new watchedValue_s.WatchedValue(watchedValue_e()),
        o = {};
      t.forEach((t => t.subscribe(o, (() => {
        i.setValue(watchedValue_e())
      }))));
      return i.readonly().spawn((() => t.forEach((watchedValue_e => watchedValue_e.unsubscribeAll(o)))))
    }