/**
 * Module 21097 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

21097: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      TVXWindowEvents: () => watchedValue_r
    });
    watchedValue_i(40167);
    var logger = watchedValue_i(9343),
      watchedValue_o = watchedValue_i(11417);
    const watchedValue_n = (0, logger.getLogger)("XWindowEvents");
    var watchedValue_r;
    ! function(watchedValue_e) {
      const watchedValue_t = "tvxwevents.",
        watchedValue_i = {};
      let logger;
      window.BroadcastChannel ? (logger = new BroadcastChannel("tvxwevents"), logger.addEventListener("message", (
        function(watchedValue_e) {
          const {
            data: {
              event: watchedValue_t,
              value: logger
            }
          } = watchedValue_e;
          watchedValue_i[watchedValue_t] && watchedValue_i[watchedValue_t].forEach((watchedValue_e => {
            watchedValue_e(logger)
          }))
        })), function() {
        const watchedValue_e = [],
          watchedValue_i = performance.now();
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_o.TVLocalStorage.length; watchedValue_i++) {
          const logger = watchedValue_o.TVLocalStorage.key(watchedValue_i);
          logger.startsWith(watchedValue_t) && watchedValue_e.push(logger)
        }
        const logger = watchedValue_o.TVLocalStorage.length;
        for (const watchedValue_t of watchedValue_e) watchedValue_o.TVLocalStorage.removeItem(watchedValue_t);
        const watchedValue_r = performance.now() - watchedValue_i;
        watchedValue_n.logNormal(`Total keys amount in local storage on operation start: ${logger}`), watchedValue_n.logNormal(
          `Keys amount in local storage to be deleted: ${watchedValue_e.length}`), watchedValue_n.logNormal(
          `Keys to be deleted from local storage: ${JSON.stringify(watchedValue_e)}`), watchedValue_n.logNormal(
          `Removing keys from local storage took ${watchedValue_r} ms`)
      }()) : window.addEventListener("storage", (function(watchedValue_e) {
        const {
          newValue: logger,
          key: watchedValue_n
        } = watchedValue_e;
        if (null === logger || !watchedValue_n || !watchedValue_n.startsWith(watchedValue_t)) return;
        const watchedValue_r = watchedValue_n.substring(11);
        watchedValue_i[watchedValue_r] && watchedValue_i[watchedValue_r].forEach((watchedValue_t => {
          watchedValue_t(watchedValue_e.newValue)
        }));
        watchedValue_o.TVLocalStorage.removeItem(watchedValue_n)
      })), watchedValue_e.on = function(watchedValue_e, watchedValue_t) {
        watchedValue_i[watchedValue_e] || (watchedValue_i[watchedValue_e] = []), watchedValue_i[watchedValue_e].push(watchedValue_t)
      }, watchedValue_e.off = function(watchedValue_e, watchedValue_t) {
        if (!watchedValue_i[watchedValue_e]) return;
        const logger = watchedValue_i[watchedValue_e].indexOf(watchedValue_t); - 1 !== logger && (1 === watchedValue_i[watchedValue_e].length ? delete watchedValue_i[watchedValue_e] : watchedValue_i[watchedValue_e].splice(logger, 1))
      }, watchedValue_e.emit = function(watchedValue_e, watchedValue_i = Date.now()) {
        try {
          logger ? logger.postMessage({
            event: watchedValue_e,
            value: watchedValue_i
          }) : watchedValue_o.TVLocalStorage.setItem(watchedValue_t + watchedValue_e, watchedValue_i.toString())
        } catch (watchedValue_e) {
          watchedValue_n.logError(watchedValue_e.message)
        }
      }
    }(watchedValue_r || (watchedValue_r = {}))