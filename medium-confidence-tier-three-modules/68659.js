/**
 * Module: 68659
 * Semantic: timeInterval
 * Confidence: 55.0%
 * Generated: 2026-05-03T17:36:55.162Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 68659 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

68659: (exports, module, i) => {
    "use strict";
    require.r(module);
    var logger = i(9343),
      object = i(11417);
    const nextValue = "tv.logger.loglevel",
      result = "tv.logger.logHighRate",
      array = (0, logger.getLogger)("logger");

    function l() {
      try {
        object.TVLocalStorage.setItem(result, String((0, logger.isHighRateEnabled)())), object.TVLocalStorage.setItem(nextValue, String((0,
          logger.getLogLevel)()))
      } catch (exports) {
        array.logWarn(
          `Cannot save logger state (level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}) to localStorage: ${exports.message}`
          )
      }
    }
    window.lget = logger.getLogHistory, window.lon = (exports, t) => {
        array.logNormal("Debug logging enabled"), (0, logger.loggingOn)(exports, t), l()
      }, window.loff = () => {
        array.logInfo("Debug logging disabled"), (0, logger.loggingOff)(), l()
      }, window.llevel = exports => {
        array.logInfo("Changed logging level"), (0, logger.setLogLevel)(exports), l()
      },
      function() {
        const exports = "true" === object.TVLocalStorage.getItem(result);
        (0, logger.setHighRateStatus)(exports);
        let module = parseInt(object.TVLocalStorage.getItem(nextValue) || "");
        Number.isNaN(module) && (module = logger.LOGLEVEL.WARNING), (0, logger.setLogLevel)(module), array.logNormal(
          `Init with settings - level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}`)
      }(), array.logNormal(`Sync logger and perf times, now is ${performance.now()}`)