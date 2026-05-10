/**
 * Module 45345 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45345: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      setTheme: () => r,
      watchedTheme: () => watchedValue_n
    });
    var watchedValue_s, o = i(22613);
    ! function(watchedValue_e) {
      watchedValue_e.ThemeClassPrefix = "theme-"
    }(watchedValue_s || (watchedValue_s = {}));
    const watchedValue_n = new o.WatchedValue;

    function r(watchedValue_e) {
      watchedValue_n.setValue(watchedValue_e)
    }
    watchedValue_n.subscribe((watchedValue_e => {
      ! function(watchedValue_e, t = window) {
        const i = "theme-" + watchedValue_e,
          watchedValue_s = t.document.documentElement.classList;
        for (const watchedValue_e of Array.from(watchedValue_s)) watchedValue_e.startsWith("theme-") && watchedValue_e !== i && watchedValue_s.remove(watchedValue_e);
        watchedValue_s.add(i), t.document.documentElement.dataset.theme = watchedValue_e
      }(watchedValue_e, window)
    }))
}
