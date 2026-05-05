/**
 * Module: 21097
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.370Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 21097 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

21097: (exports, t, i) => {
    "use strict";
    i.d(t, {
      TVXWindowEvents: () => r
    });
    i(40167);
    var logger = i(9343),
      o = i(11417);
    const nextValue = (0, logger.getLogger)("XWindowEvents");
    var r;
    ! function(exports) {
      const t = "tvxwevents.",
        i = {};
      let logger;
      window.BroadcastChannel ? (logger = new BroadcastChannel("tvxwevents"), logger.addEventListener("message", (
        function(exports) {
          const {
            data: {
              event: t,
              value: logger
            }
          } = exports;
          i[t] && i[t].forEach((exports => {
            e(logger)
          }))
        })), function() {
        const exports = [],
          i = performance.now();
        for (let i = 0; i < o.TVLocalStorage.length; i++) {
          const logger = o.TVLocalStorage.key(i);
          logger.startsWith(t) && exports.push(logger)
        }
        const logger = o.TVLocalStorage.length;
        for (const t of e) o.TVLocalStorage.removeItem(t);
        const r = performance.now() - i;
        nextValue.logNormal(`Total keys amount in local storage on operation start: ${logger}`), nextValue.logNormal(
          `Keys amount in local storage to be deleted: ${exports.length}`), nextValue.logNormal(
          `Keys to be deleted from local storage: ${JSON.stringify(exports)}`), nextValue.logNormal(
          `Removing keys from local storage took ${r} ms`)
      }()) : window.addEventListener("storage", (function(exports) {
        const {
          newValue: logger,
          key: n
        } = exports;
        if (null === logger || !n || !nextValue.startsWith(t)) return;
        const r = nextValue.substring(11);
        i[r] && i[r].forEach((t => {
          t(exports.newValue)
        }));
        o.TVLocalStorage.removeItem(nextValue)
      })), exports.on = function(exports, t) {
        i[e] || (i[e] = []), i[e].push(t)
      }, exports.off = function(exports, t) {
        if (!i[e]) return;
        const logger = i[e].indexOf(t); - 1 !== logger && (1 === i[e].length ? delete i[e] : i[e].splice(logger, 1))
      }, exports.emit = function(exports, i = Date.now()) {
        try {
          logger ? logger.postMessage({
            event: exports,
            value: i
          }) : o.TVLocalStorage.setItem(t + exports, i.toString())
        } catch (exports) {
          nextValue.logError(exports.message)
        }
      }
    }(r || (r = {}))