/**
 * Module 68659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

68659: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.r(watchedValue_t);
    var logger = i(9343),
      o = i(11417);
    const watchedValue_n = "tv.logger.loglevel",
      r = "tv.logger.logHighRate",
      watchedValue_a = (0, logger.getLogger)("logger");

    function l() {
      try {
        o.TVLocalStorage.setItem(r, String((0, logger.isHighRateEnabled)())), o.TVLocalStorage.setItem(watchedValue_n, String((0,
          logger.getLogLevel)()))
      } catch (watchedValue_e) {
        watchedValue_a.logWarn(
          `Cannot save logger state (level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}) to localStorage: ${watchedValue_e.message}`
          )
      }
    }
    window.lget = logger.getLogHistory, window.lon = (watchedValue_e, watchedValue_t) => {
        watchedValue_a.logNormal("Debug logging enabled"), (0, logger.loggingOn)(watchedValue_e, watchedValue_t), l()
      }, window.loff = () => {
        watchedValue_a.logInfo("Debug logging disabled"), (0, logger.loggingOff)(), l()
      }, window.llevel = watchedValue_e => {
        watchedValue_a.logInfo("Changed logging level"), (0, logger.setLogLevel)(watchedValue_e), l()
      },
      function() {
        const watchedValue_e = "true" === o.TVLocalStorage.getItem(r);
        (0, logger.setHighRateStatus)(watchedValue_e);
        let watchedValue_t = parseInt(o.TVLocalStorage.getItem(watchedValue_n) || "");
        Number.isNaN(watchedValue_t) && (watchedValue_t = logger.LOGLEVEL.WARNING), (0, logger.setLogLevel)(watchedValue_t), watchedValue_a.logNormal(
          `Init with settings - level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}`)
      }(), watchedValue_a.logNormal(`Sync logger and perf times, now is ${performance.now()}`)