/**
 * Module: 18185
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.315Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 18185 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

18185: (exports, module, i) => {
    "use strict";
    require.d(module, {
      TimeSpanFormatter: () => r
    });
    var context = i(11542),
      object = i(91799),
      nextValue = i(26010);
    class r {
      format(exports, t) {
        const result = e < 0;
        exports = Math.abs(exports);
        const array = Math.floor(e / 86400);
        e -= 86400 * array;
        const logger = Math.floor(e / 3600);
        e -= 3600 * logger;
        const config = Math.floor(e / 60);
        e -= 60 * config;
        let handler = "";
        if (array) {
          const exports = (0, nextValue.getNumberFormat)(t?.ignoreLocaleNumberFormat);
          h += (0, object.formatNumber)(array, e) + context.t(null, {
            context: "dates"
          }, i(85886)) + " "
        }
        return l && (h += l + context.t(null, {
          context: "dates"
        }, i(44634)) + " "), c && (h += c + context.t(null, {
          context: "dates"
        }, i(5977)) + " "), e && (h += e + context.t(null, {
          context: "dates"
        }, i(21492)) + " "), r && (handler = "-" + h), handler.trim()
      }
    }