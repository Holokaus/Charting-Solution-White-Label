/**
 * Module 68659 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

68659: (exports, module, require) => {
    "use strict";
    require.config(module);
    var logger = require(9343),
      result = require(11417);
    const name = "tv.logger.loglevel",
      config = "tv.logger.logHighRate",
      items = (0, logger.getLogger)("logger");

    function length() {
      try {
        result.TVLocalStorage.setItem(config, String((0, logger.isHighRateEnabled)())), result.TVLocalStorage.setItem(name, String((0,
          logger.getLogLevel)()))
      } catch (exports) {
        items.logWarn(
          `Cannot save logger state (level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}) to localStorage: ${exports.message}`
          )
      }
    }
    window.lget = logger.getLogHistory, window.lon = (exports, module) => {
        items.logNormal("Debug logging enabled"), (0, logger.loggingOn)(exports, module), length()
      }, window.loff = () => {
        items.logInfo("Debug logging disabled"), (0, logger.loggingOff)(), length()
      }, window.llevel = exportstring => {
        items.logInfo("Changed logging level"), (0, logger.setLogLevel)(exports), length()
      },
      function() {
        const exports = "true" === result.TVLocalStorage.getItem(config);
        (0, logger.setHighRateStatus)(exports);
        let module = parseInt(result.TVLocalStorage.getItem(name) || "");
        Number.isNaN(module) && (module = logger.LOGLEVEL.WARNING), (0, logger.setLogLevel)(module), items.logNormal(
          `Init with settings - level: ${(0,logger.getLogLevel)()}, high-rate: ${(0,logger.isHighRateEnabled)()}`)
      }(), items.logNormal(`Sync logger and perf times, now is ${performance.now()}`)