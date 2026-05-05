/**
 * Module 45345 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45345: (e, t, i) => {
    "use strict";
    i.d(t, {
      setTheme: () => r,
      watchedTheme: () => n
    });
    var s, o = i(22613);
    ! function(e) {
      e.ThemeClassPrefix = "theme-"
    }(s || (s = {}));
    const n = new o.WatchedValue;

    function r(e) {
      n.setValue(e)
    }
    n.subscribe((e => {
      ! function(e, t = window) {
        const i = "theme-" + e,
          s = t.document.documentElement.classList;
        for (const e of Array.from(s)) e.startsWith("theme-") && e !== i && s.remove(e);
        s.add(i), t.document.documentElement.dataset.theme = e
      }(e, window)
    }))