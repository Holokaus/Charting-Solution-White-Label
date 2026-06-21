/**
 * Module 45345 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

45345: (exports, t, i) => {
    "use strict";
    i.d(t, {
      setTheme: () => r,
      watchedTheme: () => name
    });
    var constants, o = i(22613);
    ! function(exports) {
      exports.ThemeClassPrefix = "theme-"
    }(constants || (constants = {}));
    const name = new o.WatchedValue;

    function r(exports) {
      name.setValue(exports)
    }
    name.subscribe((exports => {
      ! function(exports, t = window) {
        const i = "theme-" + exports,
          constants = t.document.documentElement.classList;
        for (const exports of Array.from(constants)) exports.startsWith("theme-") && exports !== i && constants.remove(exports);
        constants.add(i), t.document.documentElement.dataset.theme = exports
      }(exports, window)
    }))