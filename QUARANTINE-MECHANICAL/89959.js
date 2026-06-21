/**
 * Module 89959 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

89959: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      combineProperty: () => watchedValue_o
    });
    var watchedValue_s = watchedValue_i(41072);

    function watchedValue_o(watchedValue_e, ...watchedValue_t) {
      const watchedValue_i = () => watchedValue_e(...watchedValue_t.map((watchedValue_e => watchedValue_e.value()))),
        watchedValue_o = (0, watchedValue_s.createPrimitiveProperty)(watchedValue_i()),
        watchedValue_n = () => watchedValue_o.setValue(watchedValue_i()),
        watchedValue_r = {};
      for (const watchedValue_e of watchedValue_t) watchedValue_e.subscribe(watchedValue_r, watchedValue_n);
      return watchedValue_o.destroy = () => {
        watchedValue_t.forEach((watchedValue_e => watchedValue_e.unsubscribeAll(watchedValue_r))), watchedValue_t.forEach((watchedValue_e => watchedValue_e.release()))
      }, watchedValue_o
    }