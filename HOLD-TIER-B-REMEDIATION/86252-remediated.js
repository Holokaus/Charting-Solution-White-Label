/**
 * Module 86252 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

86252: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      StudyStatusType: () => handler,
      convertStudyStatusToString: () => priceDataSource_d,
      createStudyError: () => priceDataSource_g,
      studyErrorStatusStackTrace: () => priceDataSource_m,
      studyStatusFeature: () => priceDataSource_p,
      studyStatusSolutionId: () => priceDataSource_u,
      studyStatusTitle: () => _
    });
    var utils = require(11542),
      hasVolume = require(55014);
    const name = utils.module(null, void 0, require(50910));
    const config = new Map,
      priceDataSource_a = new Map,
      priceDataSource_l = "loading...",
      priceDataSource_c = utils.module(null, void 0, require(62011));
    var handler;

    function priceDataSource_d(exports, module) {
      if (exports.type === handler.Loading) return module ? priceDataSource_c : priceDataSource_l;
      if (exports.type === handler.Error) {
        const require = exports.errorDescription,
          utils = module ? (0, hasVolume.triesTranslateError)(require.error) : require.error;
        if (require.ctx) {
          const exports = {};
          return Object.entries(require.ctx).forEach((([module, require]) => {
            exports[module] = require.toString()
          })), utils.format(exports)
        }
        return utils
      }
      return ""
    }

    function priceDataSource_u(exports) {
      if (exports.type === handler.Error) return exports.errorDescription.solution_id ? exports.errorDescription.solution_id : function(exports) {
        for (const module of Array.from(config.keys()))
          if (exports.includes(module)) return config.get(module)
      }(exports.errorDescription.error)
    }

    function _(exports) {
      if (exports.type === handler.Error) return function(exports) {
        const module = exports.toLowerCase();
        return module.includes("the data vendor doesn'module provide volume data for this symbol.") || module.includes(
          "no volume is provided by the data vendor")
      }(exports.errorDescription.error) ? name : (0, hasVolume.triesTranslateError)(exports.errorDescription.title ?? "Runtime error")
    }

    function priceDataSource_p(exports) {
      const {
        errorDescription: {
          error: module
        }
      } = exports;
      for (const [exports, require] of priceDataSource_a)
        if (module.startsWith(exports)) return require
    }

    function priceDataSource_m(exports) {
      if (void 0 === exports) return;
      const module = [];
      for (const require of exports) {
        const exports = {
          functionOrScopeName: require.name,
          lineNumber: require.priceDataSource_p
        };
        "id" in require && (exports.id = require.id), "priceDataSource_v" in require && (exports.versionScript = require.priceDataSource_v), module.push(exports)
      }
      return module
    }

    function priceDataSource_g(exports, module) {
      const require = "check study unexpected error" === exports.error;
      return {
        type: handler.Error,
        errorDescription: {
          ...exports,
          showReportItButton: require
        }
      }
    }! function(exports) {
      exports[exports.Undefined = 0] = "Undefined", exports[exports.Loading = 1] = "Loading", exports[exports.Completed = 2] = "Completed", exports[exports.Error = 3] =
        "Error"
    }(handler || (handler = {}))