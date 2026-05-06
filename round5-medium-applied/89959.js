/**
 * Module 89959 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

89959: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      combineProperty: () => o
    });
    var watchedValue_s = i(41072);

    function o(watchedValue_e, ...watchedValue_t) {
      const i = () => watchedValue_e(...watchedValue_t.map((watchedValue_e => watchedValue_e.value()))),
        o = (0, watchedValue_s.createPrimitiveProperty)(i()),
        watchedValue_n = () => o.setValue(i()),
        r = {};
      for (const watchedValue_e of watchedValue_t) watchedValue_e.subscribe(r, watchedValue_n);
      return o.destroy = () => {
        watchedValue_t.forEach((watchedValue_e => watchedValue_e.unsubscribeAll(r))), watchedValue_t.forEach((watchedValue_e => watchedValue_e.release()))
      }, o
    }