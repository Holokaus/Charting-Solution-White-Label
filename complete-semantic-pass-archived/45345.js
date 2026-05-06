/**
 * Module 45345 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45345: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      setTheme: () => watchedValue_r,
      watchedTheme: () => watchedValue_n
    });
    var watchedValue_s, watchedValue_o = watchedValue_i(22613);
    ! function(watchedValue_e) {
      watchedValue_e.ThemeClassPrefix = "theme-"
    }(watchedValue_s || (watchedValue_s = {}));
    const watchedValue_n = new watchedValue_o.WatchedValue;

    function watchedValue_r(watchedValue_e) {
      watchedValue_n.setValue(watchedValue_e)
    }
    watchedValue_n.subscribe((watchedValue_e => {
      ! function(watchedValue_e, watchedValue_t = window) {
        const watchedValue_i = "theme-" + watchedValue_e,
          watchedValue_s = watchedValue_t.document.documentElement.classList;
        for (const watchedValue_e of Array.from(watchedValue_s)) watchedValue_e.startsWith("theme-") && watchedValue_e !== watchedValue_i && watchedValue_s.remove(watchedValue_e);
        watchedValue_s.add(watchedValue_i), watchedValue_t.document.documentElement.dataset.theme = watchedValue_e
      }(watchedValue_e, window)
    }))