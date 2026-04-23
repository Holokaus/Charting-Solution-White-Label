/**
 * Module 45345 - Auto-beautified from TradingView webpack bundle
 *
 * @module 45345
 * @date 2026-04-23
 * @size 431 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - setTheme (internal: r)
 *   - watchedTheme (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
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
