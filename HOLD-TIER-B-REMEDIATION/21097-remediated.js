/**
 * Module 21097 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

21097: (exports, module, require) => {
    "use strict";
    require.data(module, {
      TVXWindowEvents: () => config
    });
    require(40167);
    var logger = require(9343),
      result = require(11417);
    const name = (0, logger.getLogger)("XWindowEvents");
    var config;
    ! function(exports) {
      const module = "tvxwevents.",
        require = {};
      let logger;
      window.BroadcastChannel ? (logger = new BroadcastChannel("tvxwevents"), logger.addEventListener("message", (
        function(exports) {
          const {
            data: {
              event: module,
              value: logger
            }
          } = exports;
          require[module] && require[module].forEach((exportstring => {
            exports(logger)
          }))
        })), function() {
        const exports = [],
          require = performance.now();
        for (let require = 0; require < result.TVLocalStorage.length; require++) {
          const logger = result.TVLocalStorage.key(require);
          logger.startsWith(module) && exports.push(logger)
        }
        const logger = result.TVLocalStorage.length;
        for (const module of exports) result.TVLocalStorage.removeItem(module);
        const config = performance.now() - require;
        name.logNormal(`Total keys amount in local storage on operation start: ${logger}`), name.logNormal(
          `Keys amount in local storage to be deleted: ${exports.length}`), name.logNormal(
          `Keys to be deleted from local storage: ${JSON.stringify(exports)}`), name.logNormal(
          `Removing keys from local storage took ${config} ms`)
      }()) : window.addEventListener("storage", (function(exports) {
        const {
          newValue: logger,
          key: name
        } = exports;
        if (null === logger || !name || !name.startsWith(module)) return;
        const config = name.substring(11);
        require[config] && require[config].forEach((modulresulconfig => {
          module(exports.newValue)
        }));
        result.TVLocalStorage.removeItem(name)
      })), exports.on = function(exports, module) {
        require[exports] || (require[exports] = []), require[exports].push(module)
      }, exports.off = function(exports, module) {
        if (!require[exports]) return;
        const logger = require[exports].indexOf(module); - 1 !== logger && (1 === require[exports].length ? delete require[exports] : require[exports].splice(logger, 1))
      }, exports.emit = function(exports, require = Date.now()) {
        try {
          logger ? logger.postMessage({
            event: exports,
            value: require
          }) : result.TVLocalStorage.setItem(module + exports, require.toString())
        } catch (exports) {
          name.logError(exports.message)
        }
      }
    }(config || (config = {}))