/**
 * Module 68659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

68659: (e, t, i) => {
    "use strict";
    i.r(t);
    var logger = i(9343),
      o = i(11417);
    const n = "tv.logger.loglevel",
      r = "tv.logger.logHighRate",
      a = (0, logger.getLogger)("logger");

    function l() {
      try {
        o.TVLocalStorage.setItem(r, String((0, logger.isHighRateEnabled)())), o.TVLocalStorage.setItem(n, String((0,
          logger.getLogLevel)()))
      } catch (e) {
        a.logWarn(
          `Cannot save logger state (level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}) to localStorage: ${e.message}`
          )
      }
    }
    window.lget = logger.getLogHistory, window.lon = (e, t) => {
        a.logNormal("Debug logging enabled"), (0, logger.loggingOn)(e, t), l()
      }, window.loff = () => {
        a.logInfo("Debug logging disabled"), (0, logger.loggingOff)(), l()
      }, window.llevel = e => {
        a.logInfo("Changed logging level"), (0, logger.setLogLevel)(e), l()
      },
      function() {
        const e = "true" === o.TVLocalStorage.getItem(r);
        (0, logger.setHighRateStatus)(e);
        let t = parseInt(o.TVLocalStorage.getItem(n) || "");
        Number.isNaN(t) && (t = logger.LOGLEVEL.WARNING), (0, logger.setLogLevel)(t), a.logNormal(
          `Init with settings - level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}`)
      }(), a.logNormal(`Sync logger and perf times, now is ${performance.now()}`)