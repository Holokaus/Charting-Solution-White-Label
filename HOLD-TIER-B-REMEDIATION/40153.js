/**
 * Module 40153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40153: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      withWeekdayProperty: () => watchedValue_a
    });
    var watchedValue_s = watchedValue_i(1765),
      watchedValue_o = watchedValue_i(41072);
    const watchedValue_n = "date_format_with_weekday";

    function watchedValue_r() {
      return watchedValue_s.getBool(watchedValue_n, !0)
    }
    const watchedValue_a = (0, watchedValue_o.createPrimitiveProperty)(watchedValue_r());
    watchedValue_a.subscribe(null, (() => watchedValue_s.setValue(watchedValue_n, watchedValue_a.value()))), watchedValue_s.onSync.subscribe(null, (() => watchedValue_a.setValue(watchedValue_r())))