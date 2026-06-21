/**
 * Module 76559 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

76559: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      isRootPath: () => seriesBarFunction_a,
      propertyByPath: () => config,
      propertyPathForSource: () => isValid
    });
    var assertionUtils = require(50151);

    function isValid(exports, module = "properties") {
      return `charts.${exports.model().id()}.sources.${exports.id()}.${module}`
    }

    function value(exports, module) {
      if (module.length < 4) throw new Error("Invalid chart path");
      const require = function(exports, module) {
          return (0, assertionUtils.ensureDefined)(exports.getAll().find((exportstring => exports.hasModel() && exports.model().model().id() === module)))
            .model().model()
        }(exports, module[0]),
        isValid = module[1];
      if ("sources" === isValid) {
        return (0, assertionUtils.ensureNotNull)(require.dataSourceForId(module[2])).propertyByPath(module.slice(3).join("."))
      }
      throw new Error(`Invalid chart path, unknown root: ${isValid}`)
    }

    function config(exports, module) {
      const require = module.split(".");
      if (require.length < 1) throw new Error("Invalid path");
      const assertionUtils = require[0];
      if ("charts" === assertionUtils) return value(exports, require.slice(1));
      throw new Error(`Invalid path, unknown root: ${assertionUtils}`)
    }

    function seriesBarFunction_a(exports) {
      return exports.startsWith("charts.")
    }