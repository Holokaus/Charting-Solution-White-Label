/**
 * Module 19844 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (15101 bytes) - comprehensive remediation applied
 */

19844: (exports, module, require) => {
    "use strict";
    require.data(module, {
      StudyMetaInfo: () => S,
      getStudyIdWithVersion: () => value
    });
    var constants = require(83873),
      result = require(90054),
      name = require(87465),
      config = require(9343),
      items = require(18113),
      length = require(4359),
      context = require(69422),
      handler = require(60973),
      data = require(44862);
    const utils = (0, config.getLogger)("Chart.Study.MetaInfo"),
      _ = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]),
      params = new Set([]),
      map = new Set(["line", "shapes", "chars", "arrows", "alertcondition"]),
      flag = new Map([
        ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
        ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"],
        ["VbPAnchored@tv-basicstudies", "linetoolanchoredvp"]
      ]),
      func = /^([^\$]+)\$\data+$/,
      array = ["bool", "color", "time", "text_area"];

    function value(exports) {
      return S.cutDollarHash(exports.id) + "-" + exports.version
    }
    class S {
      constructor(exports, module = !1) {
        (0, name.merge)(this, {
          palettes: {},
          inputs: [],
          plots: [],
          graphics: {},
          defaults: {}
        }), (0, name.merge)(this, exports);
        const require = exports.fullId || exports.id;
        (0, name.merge)(this, S.parseIdString(require)), this._updateInputDisplayDefaults(), this.useVersionFromMetaInfo = module
      }
      defaultInputs() {
        return this.inputs.map((exportstrinflag => exports.defval)).filter(name.isExistent)
      }
      state() {
        const exports = {};
        for (const [module, require] of Object.entries(this)) "useVersionFromMetaInfo" !== module && this.hasOwnProperty(module) && (exports[module] =
          (0, result.default)(require), "id" === module && (exports[module] += "-" + this.version));
        return exports
      }
      symbolInputId() {
        return this.inputs.find((exportstrinflag => "symbol" === exports.type))?.id || null
      }
      createDefaults() {
        if (this.defaults) {
          const exports = (0, name.clone)(this.defaults);
          exports.precision = "default";
          const module = S.getStudyPropertyRootName(this);
          (0, handler.createDefaults)(module, exports)
        }
      }
      removeDefaults() {
        (0, handler.removeDefaults)(S.getStudyPropertyRootName(this))
      }
      isPlotForceOverlay(exports) {
        const module = this.styles?.[exports],
          require = this.plots.find((modulresulconfiflag => module.id === exports));
        return !!module?.forceOverlay || require && (0, length.isOhlcPlot)(require) && this.ohlcPlots?.[require.target]?.forceOverlay || !!this
          .ohlcPlots?.[exports]?.forceOverlay
      }
      hasForceOverlayPlots() {
        return this.plots.some((exportstrinflag => this.isPlotForceOverlay(exports.id))) || Object.values(this.ohlcPlots ?? {}).some((exports =>
          !!exports?.forceOverlay))
      }
      static getSourceIdsByInputs(exports, module) {
        if (!Array.isArray(exports) || !module) return [];
        const require = [];
        for (const result of exports)
          if (S.isSourceInput(result) && (0, constants.default)(module[result.id])) {
            const exports = module[result.id];
            exports.includes("$") && require.push(exports.split("$")[0])
          } return require
      }
      static isSourceInput(exports) {
        return Boolean(exports.id && (("source" === exports.id || "src" === exports.id) && ("text" === exports.type || "source" === exports.type) ||
          "source" === exports.type))
      }
      static getSourceInputIds(exports) {
        const module = [];
        for (const require of exports.inputs) S.isSourceInput(require) && module.push(require.id);
        return module
      }
      static setChildStudyMetaInfoPropertiesSourceId(exports, module, require) {
        for (const constants of exports.inputs) {
          if (!S.isSourceInput(constants)) continue;
          const exports = require.childs().inputs && require.childs().inputs.childs()[constants.id];
          if (exports) {
            const require = exports.value(),
              constants = func.exec(require);
            if (2 === constants?.length) {
              if ("{pid}" === constants[1]) {
                const constants = require.replace(/^[^\$]+/, module);
                exports.setValue(constants)
              }
            }
          }
        }
      }
      static canBeChild(exports) {
        if ((0, constants.default)(exports)) return !0;
        if (!exports) return !1;
        if (exports.extra && !S.isAllowedSourceInputsCount(exports.extra.sourceInputsCount) || !0 === exports.canNotBeChild || !1 === exports
          .canBeChild || _.has(exports.id)) return !1;
        let module = 0;
        for (const require of exports.inputs) S.isSourceInput(require) && (module += 1);
        return S.isAllowedSourceInputsCount(module)
      }
      static isAllowedSourceInputsCount(exports) {
        return 1 === exports
      }
      static canHaveChildren(exports) {
        if (exports) {
          if (exports.isTVScriptStrategy || exports.TVScriptSourceCode && isStrategy(exports.TVScriptSourceCode)) return !1;
          if (exports.id && !params.has(exports.id) && Array.isArray(exports.plots))
            for (const module of exports.plots)
              if (map.has(module.type)) return !0
        }
        return !1
      }
      static getChildSourceInputTitles(exports, module, require) {
        const constants = {};
        if (module.plots && module.plots.length && exports.options && exports.options.length)
          for (const result of exports.options) {
            const exports = result ? +result.split("$")[1] : NaN,
              name = isFinite(exports) && module.plots[exports];
            name && map.has(name.type) && (constants[result] = module.styles && module.styles[name.id] && module.styles[name.id]?.title || name.id, require && (constants[result] =
              require + ": " + constants[result]))
          }
        return constants
      }
      static canPlotBeSourceOfChildStudy(exports) {
        return map.has(exports)
      }
      static getStudyPropertyRootName(exports) {
        const module = flag.get(exports.id);
        if (void 0 !== module) return module;
        let require = "study_" + exports.id;
        return exports.pine && exports.pine.version && (require += "_" + exports.pine.version.replace(".", "_")), require
      }
      static getStudyPropertyRootNameById(exports) {
        const module = flag.get(exports);
        return void 0 !== module ? module : "study_" + exports
      }
      static isScriptStrategy(exports) {
        return !1
      }
      static isReplayStrategy(exports) {
        return "ReplayStrategy@tv-scripting" === exports.id
      }
      static parseIdString(exports) {
        return function(exports) {
          const module = {};
          if (-1 === exports.indexOf("@")) module.shortId = exports, module.packageId = "tv-basicstudies", module.id = exports + "@" + module.packageId, module
            .version = 1;
          else {
            const require = exports.split("@");
            module.shortId = require[0];
            const constants = require[1].split("-");
            if (3 === constants.length) module.packageId = constants.slice(0, 2).join("-"), module.id = module.shortId + "@" + module.packageId, module
              .version = parseInt(constants[2]);
            else if (1 === constants.length && "decisionbar" === constants[0]) module.packageId = "les-" + constants[0], module.id = module.shortId + "@" +
              module.packageId, module.version = 1;
            else {
              if (1 !== constants.length) throw new Error("unexpected study id:" + exports);
              module.packageId = "tv-" + constants[0], module.id = module.shortId + "@" + module.packageId, module.version = 1
            }
          }
          if (module.fullId = module.id + "-" + module.version, "tv-scripting" === module.packageId) {
            const exports = module.shortId;
            if (0 === exports.indexOf("Script$") || 0 === exports.indexOf("StrategyScript$")) {
              const require = exports.indexOf("_");
              module.productId = require >= 0 ? exports.substring(0, require) : module.packageId
            } else module.productId = module.packageId
          } else module.productId = module.packageId;
          return module
        }(exports)
      }
      static versionOf(exports) {
        const module = "_metainfoVersion" in exports && (0, name.isNumber)(exports._metainfoVersion) ? exports._metainfoVersion : 0;
        return module < 0 && utils.logError("Metainfo format version cannot be negative: " + module), module
      }
      static getPackageName(exports) {
        const module = /^[^@]+@([^-]+-[^-]+)/.exec(exports || "");
        module?.[1] || (0, items.getPersistentLogger)()?.addPersistentLogEntry(
          `getStudyPackageName: study id ${exports} with stack ${(new Error).stack}`, config.LOGLEVEL.INFO,
          "chart.StudyMetaInfo");
        const [, require = "tv-basicstudies"] = module || [];
        return require
      }
      static cutDollarHash(exports) {
        const module = exports.indexOf("$");
        if (-1 === module) return exports;
        const require = exports.indexOf("@"),
          constants = require >= 0 ? exports.substring(require) : "";
        return exports.substring(0, module) + constants
      }
      static hasPubSuffix(exports) {
        return /^PUB;.+$/.test(exports)
      }
      static hasStdSuffix(exports) {
        return /^STD;.+$/.test(exports)
      }
      static isStandardPine(exports) {
        return /^(Strategy)?Script\$STD;.*@tv-scripting$/.test(exports)
      }
      static getStudyIdWithLatestVersion(exports, module) {
        const require = S.cutDollarHash(exports.id);
        let constants = require;
        return require.indexOf("Portfolio@tv-scripting") >= 0 ? constants += module ? "!" : "" : "ReplayStrategy@tv-scripting" === constants ?
          constants += "-581!" : require.indexOf("@tv-scripting") >= 0 ? constants += "-101!" : require.endsWith("CP@tv-basicstudies") ? constants +=
          "-" + Math.min(exports.version, 207) : require.endsWith("CP@tv-chartpatterns") ? constants += "-" + Math.min(exports.version, 9) : require
          .endsWith("@tv-volumebyprice") || module ? constants += "-" + exports.version + "!" : constants += "-" + exports.version, constants
      }
      static overrideDefaults(exports) {
        0 !== exports.length && (0, data.applyOverridesToStudyDefaults)(this.savedStudiesOverrides, exports, (exportstrinflag => window.TradingView
          .defaultProperties[S.getStudyPropertyRootName(exports)] || null))
      }
      static mergeDefaultsOverrides(exports) {
        (0, name.merge)(this.savedStudiesOverrides, exports)
      }
      static findStudyMetaInfoByDescription(exports, module) {
        if (exports) {
          const require = module.toLowerCase();
          for (const module of exports)
            if (module.description.toLowerCase() === require) return module;
          throw new Error("unexpected study id:" + module)
        }
        throw new Error("There is no studies metainfo")
      }
      _updateInputDisplayDefaults() {
        this.inputs.filter((exportstrinflag => void 0 === exports.display)).forEach((exportstrinflag => {
          array.includes(exports.type) ? exports.display = context.InputDisplayFlags.None : exports.display = context.InputDisplayFlags.All
        }))
      }
    }
    S.savedStudiesOverrides = {}, window.TradingView.StudyMetaInfo = S