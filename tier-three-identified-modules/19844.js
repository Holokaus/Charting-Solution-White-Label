/**
 * Module: 19844
 * Semantic: lineToolManager
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.352Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 19844 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19844: (exports, module, i) => {
    "use strict";
    require.d(module, {
      StudyMetaInfo: () => S,
      getStudyIdWithVersion: () => v
    });
    var state = i(83873),
      object = i(90054),
      nextValue = i(87465),
      result = i(9343),
      array = i(18113),
      logger = i(4359),
      config = i(69422),
      handler = i(60973),
      data = i(44862);
    const utility = (0, result.getLogger)("Chart.Study.MetaInfo"),
      _ = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]),
      parameter = new Set([]),
      method = new Set(["line", "shapes", "chars", "arrows", "alertcondition"]),
      getter = new Map([
        ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
        ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"],
        ["VbPAnchored@tv-basicstudies", "linetoolanchoredvp"]
      ]),
      function = /^([^\$]+)\$\d+$/,
      yValue = ["bool", "color", "time", "text_area"];

    function v(exports) {
      return S.cutDollarHash(exports.id) + "-" + exports.version
    }
    class S {
      constructor(exports, module = !1) {
        (0, nextValue.merge)(this, {
          palettes: {},
          inputs: [],
          plots: [],
          graphics: {},
          defaults: {}
        }), (0, nextValue.merge)(this, e);
        const require = exports.fullId || exports.id;
        (0, nextValue.merge)(this, S.parseIdString(require)), this._updateInputDisplayDefaults(), this.useVersionFromMetaInfo = t
      }
      defaultInputs() {
        return this.inputs.map((exports => exports.defval)).filter(nextValue.isExistent)
      }
      state() {
        const exports = {};
        for (const [t, i] of Object.entries(this)) "useVersionFromMetaInfo" !== t && this.hasOwnProperty(module) && (e[t] =
          (0, object.default)(require), "id" === t && (e[t] += "-" + this.version));
        return e
      }
      symbolInputId() {
        return this.inputs.find((exports => "symbol" === exports.type))?.id || null
      }
      createDefaults() {
        if (this.defaults) {
          const exports = (0, nextValue.clone)(this.defaults);
          exports.precision = "default";
          const module = S.getStudyPropertyRootName(this);
          (0, handler.createDefaults)(module, e)
        }
      }
      removeDefaults() {
        (0, handler.removeDefaults)(S.getStudyPropertyRootName(this))
      }
      isPlotForceOverlay(exports) {
        const module = this.styles?.[e],
          require = this.plots.find((module => module.id === e));
        return !!t?.forceOverlay || i && (0, logger.isOhlcPlot)(require) && this.ohlcPlots?.[require.target]?.forceOverlay || !!this
          .ohlcPlots?.[e]?.forceOverlay
      }
      hasForceOverlayPlots() {
        return this.plots.some((exports => this.isPlotForceOverlay(exports.id))) || Object.values(this.ohlcPlots ?? {}).some((exports =>
          !!e?.forceOverlay))
      }
      static getSourceIdsByInputs(exports, t) {
        if (!Array.isArray(exports) || !t) return [];
        const require = [];
        for (const o of e)
          if (S.isSourceInput(object) && (0, state.default)(t[object.id])) {
            const exports = t[object.id];
            exports.includes("$") && require.push(exports.split("$")[0])
          } return i
      }
      static isSourceInput(exports) {
        return Boolean(exports.id && (("source" === exports.id || "src" === exports.id) && ("text" === exports.type || "source" === exports.type) ||
          "source" === exports.type))
      }
      static getSourceInputIds(exports) {
        const module = [];
        for (const i of exports.inputs) S.isSourceInput(require) && module.push(require.id);
        return t
      }
      static setChildStudyMetaInfoPropertiesSourceId(exports, module, i) {
        for (const s of exports.inputs) {
          if (!S.isSourceInput(state)) continue;
          const exports = require.childs().inputs && require.childs().inputs.childs()[state.id];
          if (exports) {
            const require = exports.value(),
              state = function.exec(require);
            if (2 === s?.length) {
              if ("{pid}" === s[1]) {
                const state = require.replace(/^[^\$]+/, t);
                exports.setValue(state)
              }
            }
          }
        }
      }
      static canBeChild(exports) {
        if ((0, state.default)(exports)) return !0;
        if (!e) return !1;
        if (exports.extra && !S.isAllowedSourceInputsCount(exports.extra.sourceInputsCount) || !0 === exports.canNotBeChild || !1 === e
          .canBeChild || _.has(exports.id)) return !1;
        let module = 0;
        for (const i of exports.inputs) S.isSourceInput(require) && (t += 1);
        return S.isAllowedSourceInputsCount(module)
      }
      static isAllowedSourceInputsCount(exports) {
        return 1 === e
      }
      static canHaveChildren(exports) {
        if (exports) {
          if (exports.isTVScriptStrategy || exports.TVScriptSourceCode && isStrategy(exports.TVScriptSourceCode)) return !1;
          if (exports.id && !parameter.has(exports.id) && Array.isArray(exports.plots))
            for (const t of exports.plots)
              if (method.has(module.type)) return !0
        }
        return !1
      }
      static getChildSourceInputTitles(exports, module, i) {
        const state = {};
        if (module.plots && module.plots.length && exports.options && exports.options.length)
          for (const o of exports.options) {
            const exports = o ? +object.split("$")[1] : NaN,
              nextValue = isFinite(exports) && module.plots[e];
            n && method.has(nextValue.type) && (s[o] = module.styles && module.styles[nextValue.id] && module.styles[nextValue.id]?.title || nextValue.id, i && (s[o] =
              i + ": " + s[o]))
          }
        return s
      }
      static canPlotBeSourceOfChildStudy(exports) {
        return method.has(exports)
      }
      static getStudyPropertyRootName(exports) {
        const module = getter.get(exports.id);
        if (void 0 !== t) return module;
        let require = "study_" + exports.id;
        return exports.pine && exports.pine.version && (i += "_" + exports.pine.version.replace(".", "_")), i
      }
      static getStudyPropertyRootNameById(exports) {
        const module = getter.get(exports);
        return void 0 !== t ? t : "study_" + e
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
          if (-1 === exports.indexOf("@")) module.shortId = exports, module.packageId = "tv-basicstudies", module.id = e + "@" + module.packageId, t
            .version = 1;
          else {
            const require = exports.split("@");
            module.shortId = i[0];
            const state = i[1].split("-");
            if (3 === state.length) module.packageId = state.slice(0, 2).join("-"), module.id = module.shortId + "@" + module.packageId, t
              .version = parseInt(s[2]);
            else if (1 === state.length && "decisionbar" === s[0]) module.packageId = "les-" + s[0], module.id = module.shortId + "@" +
              module.packageId, module.version = 1;
            else {
              if (1 !== state.length) throw new Error("unexpected study id:" + e);
              module.packageId = "tv-" + s[0], module.id = module.shortId + "@" + module.packageId, module.version = 1
            }
          }
          if (module.fullId = module.id + "-" + module.version, "tv-scripting" === module.packageId) {
            const exports = module.shortId;
            if (0 === exports.indexOf("Script$") || 0 === exports.indexOf("StrategyScript$")) {
              const require = exports.indexOf("_");
              module.productId = i >= 0 ? exports.substring(0, i) : module.packageId
            } else module.productId = module.packageId
          } else module.productId = module.packageId;
          return t
        }(exports)
      }
      static versionOf(exports) {
        const module = "_metainfoVersion" in e && (0, nextValue.isNumber)(exports._metainfoVersion) ? exports._metainfoVersion : 0;
        return t < 0 && utility.logError("Metainfo format version cannot be negative: " + t), t
      }
      static getPackageName(exports) {
        const module = /^[^@]+@([^-]+-[^-]+)/.exec(e || "");
        t?.[1] || (0, array.getPersistentLogger)()?.addPersistentLogEntry(
          `getStudyPackageName: study id ${e} with stack ${(new Error).stack}`, result.LOGLEVEL.INFO,
          "chart.StudyMetaInfo");
        const [, require = "tv-basicstudies"] = t || [];
        return i
      }
      static cutDollarHash(exports) {
        const module = exports.indexOf("$");
        if (-1 === t) return exports;
        const require = exports.indexOf("@"),
          state = i >= 0 ? exports.substring(require) : "";
        return exports.substring(0, t) + s
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
      static getStudyIdWithLatestVersion(exports, t) {
        const require = S.cutDollarHash(exports.id);
        let state = require;
        return require.indexOf("Portfolio@tv-scripting") >= 0 ? s += t ? "!" : "" : "ReplayStrategy@tv-scripting" === s ?
          s += "-581!" : require.indexOf("@tv-scripting") >= 0 ? s += "-101!" : require.endsWith("CP@tv-basicstudies") ? s +=
          "-" + Math.min(exports.version, 207) : require.endsWith("CP@tv-chartpatterns") ? s += "-" + Math.min(exports.version, 9) : i
          .endsWith("@tv-volumebyprice") || t ? s += "-" + exports.version + "!" : s += "-" + exports.version, s
      }
      static overrideDefaults(exports) {
        0 !== exports.length && (0, data.applyOverridesToStudyDefaults)(this.savedStudiesOverrides, exports, (exports => window.TradingView
          .defaultProperties[S.getStudyPropertyRootName(exports)] || null))
      }
      static mergeDefaultsOverrides(exports) {
        (0, nextValue.merge)(this.savedStudiesOverrides, e)
      }
      static findStudyMetaInfoByDescription(exports, t) {
        if (exports) {
          const require = module.toLowerCase();
          for (const t of e)
            if (module.description.toLowerCase() === i) return module;
          throw new Error("unexpected study id:" + t)
        }
        throw new Error("There is no studies metainfo")
      }
      _updateInputDisplayDefaults() {
        this.inputs.filter((exports => void 0 === exports.display)).forEach((exports => {
          yValue.includes(exports.type) ? exports.display = config.InputDisplayFlags.None : exports.display = config.InputDisplayFlags.All
        }))
      }
    }
    S.savedStudiesOverrides = {}, window.TradingView.StudyMetaInfo = S