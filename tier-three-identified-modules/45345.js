/**
 * Module: 45345
 * Semantic: watchedValue
 * Confidence: 70.0%
 * Generated: 2026-05-03T17:33:52.629Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 45345 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45345: (exports, t, i) => {
    "use strict";
    i.d(t, {
      setTheme: () => r,
      watchedTheme: () => n
    });
    var state, o = i(22613);
    ! function(exports) {
      exports.ThemeClassPrefix = "theme-"
    }(s || (state = {}));
    const nextValue = new o.WatchedValue;

    function r(exports) {
      nextValue.setValue(exports)
    }
    nextValue.subscribe((exports => {
      ! function(exports, t = window) {
        const i = "theme-" + exports,
          state = t.document.documentElement.classList;
        for (const e of Array.from(state)) exports.startsWith("theme-") && e !== i && state.remove(exports);
        state.add(i), t.document.documentElement.dataset.theme = e
      }(exports, window)
    }))