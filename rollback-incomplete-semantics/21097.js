/**
 * Module 21097 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

21097: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      TVXWindowEvents: () => r
    });
    i(40167);
    var logger = i(9343),
      o = i(11417);
    const watchedValue_n = (0, logger.getLogger)("XWindowEvents");
    var r;
    ! function(watchedValue_e) {
      const watchedValue_t = "tvxwevents.",
        i = {};
      let logger;
      window.BroadcastChannel ? (logger = new BroadcastChannel("tvxwevents"), logger.addEventListener("message", (
        function(watchedValue_e) {
          const {
            data: {
              event: watchedValue_t,
              value: logger
            }
          } = watchedValue_e;
          i[watchedValue_t] && i[watchedValue_t].forEach((watchedValue_e => {
            watchedValue_e(logger)
          }))
        })), function() {
        const watchedValue_e = [],
          i = performance.now();
        for (let i = 0; i < o.TVLocalStorage.length; i++) {
          const logger = o.TVLocalStorage.key(i);
          logger.startsWith(watchedValue_t) && watchedValue_e.push(logger)
        }
        const logger = o.TVLocalStorage.length;
        for (const watchedValue_t of watchedValue_e) o.TVLocalStorage.removeItem(watchedValue_t);
        const r = performance.now() - i;
        watchedValue_n.logNormal(`Total keys amount in local storage on operation start: ${logger}`), watchedValue_n.logNormal(
          `Keys amount in local storage to be deleted: ${watchedValue_e.length}`), watchedValue_n.logNormal(
          `Keys to be deleted from local storage: ${JSON.stringify(watchedValue_e)}`), watchedValue_n.logNormal(
          `Removing keys from local storage took ${r} ms`)
      }()) : window.addEventListener("storage", (function(watchedValue_e) {
        const {
          newValue: logger,
          key: watchedValue_n
        } = watchedValue_e;
        if (null === logger || !watchedValue_n || !watchedValue_n.startsWith(watchedValue_t)) return;
        const r = watchedValue_n.substring(11);
        i[r] && i[r].forEach((watchedValue_t => {
          watchedValue_t(watchedValue_e.newValue)
        }));
        o.TVLocalStorage.removeItem(watchedValue_n)
      })), watchedValue_e.on = function(watchedValue_e, watchedValue_t) {
        i[watchedValue_e] || (i[watchedValue_e] = []), i[watchedValue_e].push(watchedValue_t)
      }, watchedValue_e.off = function(watchedValue_e, watchedValue_t) {
        if (!i[watchedValue_e]) return;
        const logger = i[watchedValue_e].indexOf(watchedValue_t); - 1 !== logger && (1 === i[watchedValue_e].length ? delete i[watchedValue_e] : i[watchedValue_e].splice(logger, 1))
      }, watchedValue_e.emit = function(watchedValue_e, i = Date.now()) {
        try {
          logger ? logger.postMessage({
            event: watchedValue_e,
            value: i
          }) : o.TVLocalStorage.setItem(watchedValue_t + watchedValue_e, i.toString())
        } catch (watchedValue_e) {
          watchedValue_n.logError(watchedValue_e.message)
        }
      }
    }(r || (r = {}))