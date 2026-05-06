/**
 * Module 8811 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

8811: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      createWVFromGetterAndSubscription: () => watchedValue_o
    });
    var watchedValue_s = watchedValue_i(22613);

    function watchedValue_o(watchedValue_e, watchedValue_t) {
      const watchedValue_i = new watchedValue_s.WatchedValue(watchedValue_e()),
        watchedValue_o = {};
      watchedValue_t.subscribe(watchedValue_o, (() => {
        watchedValue_i.setValue(watchedValue_e(watchedValue_i.value()))
      }));
      return watchedValue_i.readonly().spawn((() => watchedValue_t.unsubscribeAll(watchedValue_o)))
    }