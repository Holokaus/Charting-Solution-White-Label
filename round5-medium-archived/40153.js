/**
 * Module 40153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40153: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      withWeekdayProperty: () => watchedValue_a
    });
    var watchedValue_s = i(1765),
      o = i(41072);
    const watchedValue_n = "date_format_with_weekday";

    function r() {
      return watchedValue_s.getBool(watchedValue_n, !0)
    }
    const watchedValue_a = (0, o.createPrimitiveProperty)(r());
    watchedValue_a.subscribe(null, (() => watchedValue_s.setValue(watchedValue_n, watchedValue_a.value()))), watchedValue_s.onSync.subscribe(null, (() => watchedValue_a.setValue(r())))