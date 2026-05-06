/**
 * Module 19844 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19844: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      StudyMetaInfo: () => S,
      getStudyIdWithVersion: () => watchedValue_v
    });
    var watchedValue_s = watchedValue_i(83873),
      watchedValue_o = watchedValue_i(90054),
      watchedValue_n = watchedValue_i(87465),
      watchedValue_r = watchedValue_i(9343),
      watchedValue_a = watchedValue_i(18113),
      watchedValue_l = watchedValue_i(4359),
      watchedValue_c = watchedValue_i(69422),
      watchedValue_h = watchedValue_i(60973),
      watchedValue_d = watchedValue_i(44862);
    const watchedValue_u = (0, watchedValue_r.getLogger)("Chart.Study.MetaInfo"),
      _ = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]),
      watchedValue_p = new Set([]),
      watchedValue_m = new Set(["line", "shapes", "chars", "arrows", "alertcondition"]),
      watchedValue_g = new Map([
        ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
        ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"],
        ["VbPAnchored@tv-basicstudies", "linetoolanchoredvp"]
      ]),
      watchedValue_f = /^([^\$]+)\$\watchedValue_d+$/,
      watchedValue_y = ["bool", "color", "time", "text_area"];

    function watchedValue_v(watchedValue_e) {
      return S.cutDollarHash(watchedValue_e.id) + "-" + watchedValue_e.version
    }
    class S {
      constructor(watchedValue_e, watchedValue_t = !1) {
        (0, watchedValue_n.merge)(this, {
          palettes: {},
          inputs: [],
          plots: [],
          graphics: {},
          defaults: {}
        }), (0, watchedValue_n.merge)(this, watchedValue_e);
        const watchedValue_i = watchedValue_e.fullId || watchedValue_e.id;
        (0, watchedValue_n.merge)(this, S.parseIdString(watchedValue_i)), this._updateInputDisplayDefaults(), this.useVersionFromMetaInfo = watchedValue_t
      }
      defaultInputs() {
        return this.inputs.map((watchedValue_e => watchedValue_e.defval)).filter(watchedValue_n.isExistent)
      }
      state() {
        const watchedValue_e = {};
        for (const [watchedValue_t, watchedValue_i] of Object.entries(this)) "useVersionFromMetaInfo" !== watchedValue_t && this.hasOwnProperty(watchedValue_t) && (watchedValue_e[watchedValue_t] =
          (0, watchedValue_o.default)(watchedValue_i), "id" === watchedValue_t && (watchedValue_e[watchedValue_t] += "-" + this.version));
        return watchedValue_e
      }
      symbolInputId() {
        return this.inputs.find((watchedValue_e => "symbol" === watchedValue_e.type))?.id || null
      }
      createDefaults() {
        if (this.defaults) {
          const watchedValue_e = (0, watchedValue_n.clone)(this.defaults);
          watchedValue_e.precision = "default";
          const watchedValue_t = S.getStudyPropertyRootName(this);
          (0, watchedValue_h.createDefaults)(watchedValue_t, watchedValue_e)
        }
      }
      removeDefaults() {
        (0, watchedValue_h.removeDefaults)(S.getStudyPropertyRootName(this))
      }
      isPlotForceOverlay(watchedValue_e) {
        const watchedValue_t = this.styles?.[watchedValue_e],
          watchedValue_i = this.plots.find((watchedValue_t => watchedValue_t.id === watchedValue_e));
        return !!watchedValue_t?.forceOverlay || watchedValue_i && (0, watchedValue_l.isOhlcPlot)(watchedValue_i) && this.ohlcPlots?.[watchedValue_i.target]?.forceOverlay || !!this
          .ohlcPlots?.[watchedValue_e]?.forceOverlay
      }
      hasForceOverlayPlots() {
        return this.plots.some((watchedValue_e => this.isPlotForceOverlay(watchedValue_e.id))) || Object.values(this.ohlcPlots ?? {}).some((watchedValue_e =>
          !!watchedValue_e?.forceOverlay))
      }
      static getSourceIdsByInputs(watchedValue_e, watchedValue_t) {
        if (!Array.isArray(watchedValue_e) || !watchedValue_t) return [];
        const watchedValue_i = [];
        for (const watchedValue_o of watchedValue_e)
          if (S.isSourceInput(watchedValue_o) && (0, watchedValue_s.default)(watchedValue_t[watchedValue_o.id])) {
            const watchedValue_e = watchedValue_t[watchedValue_o.id];
            watchedValue_e.includes("$") && watchedValue_i.push(watchedValue_e.split("$")[0])
          } return watchedValue_i
      }
      static isSourceInput(watchedValue_e) {
        return Boolean(watchedValue_e.id && (("source" === watchedValue_e.id || "src" === watchedValue_e.id) && ("text" === watchedValue_e.type || "source" === watchedValue_e.type) ||
          "source" === watchedValue_e.type))
      }
      static getSourceInputIds(watchedValue_e) {
        const watchedValue_t = [];
        for (const watchedValue_i of watchedValue_e.inputs) S.isSourceInput(watchedValue_i) && watchedValue_t.push(watchedValue_i.id);
        return watchedValue_t
      }
      static setChildStudyMetaInfoPropertiesSourceId(watchedValue_e, watchedValue_t, watchedValue_i) {
        for (const watchedValue_s of watchedValue_e.inputs) {
          if (!S.isSourceInput(watchedValue_s)) continue;
          const watchedValue_e = watchedValue_i.childs().inputs && watchedValue_i.childs().inputs.childs()[watchedValue_s.id];
          if (watchedValue_e) {
            const watchedValue_i = watchedValue_e.value(),
              watchedValue_s = watchedValue_f.exec(watchedValue_i);
            if (2 === watchedValue_s?.length) {
              if ("{pid}" === watchedValue_s[1]) {
                const watchedValue_s = watchedValue_i.replace(/^[^\$]+/, watchedValue_t);
                watchedValue_e.setValue(watchedValue_s)
              }
            }
          }
        }
      }
      static canBeChild(watchedValue_e) {
        if ((0, watchedValue_s.default)(watchedValue_e)) return !0;
        if (!watchedValue_e) return !1;
        if (watchedValue_e.extra && !S.isAllowedSourceInputsCount(watchedValue_e.extra.sourceInputsCount) || !0 === watchedValue_e.canNotBeChild || !1 === watchedValue_e
          .canBeChild || _.has(watchedValue_e.id)) return !1;
        let watchedValue_t = 0;
        for (const watchedValue_i of watchedValue_e.inputs) S.isSourceInput(watchedValue_i) && (watchedValue_t += 1);
        return S.isAllowedSourceInputsCount(watchedValue_t)
      }
      static isAllowedSourceInputsCount(watchedValue_e) {
        return 1 === watchedValue_e
      }
      static canHaveChildren(watchedValue_e) {
        if (watchedValue_e) {
          if (watchedValue_e.isTVScriptStrategy || watchedValue_e.TVScriptSourceCode && isStrategy(watchedValue_e.TVScriptSourceCode)) return !1;
          if (watchedValue_e.id && !watchedValue_p.has(watchedValue_e.id) && Array.isArray(watchedValue_e.plots))
            for (const watchedValue_t of watchedValue_e.plots)
              if (watchedValue_m.has(watchedValue_t.type)) return !0
        }
        return !1
      }
      static getChildSourceInputTitles(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = {};
        if (watchedValue_t.plots && watchedValue_t.plots.length && watchedValue_e.options && watchedValue_e.options.length)
          for (const watchedValue_o of watchedValue_e.options) {
            const watchedValue_e = watchedValue_o ? +watchedValue_o.split("$")[1] : NaN,
              watchedValue_n = isFinite(watchedValue_e) && watchedValue_t.plots[watchedValue_e];
            watchedValue_n && watchedValue_m.has(watchedValue_n.type) && (watchedValue_s[watchedValue_o] = watchedValue_t.styles && watchedValue_t.styles[watchedValue_n.id] && watchedValue_t.styles[watchedValue_n.id]?.title || watchedValue_n.id, watchedValue_i && (watchedValue_s[watchedValue_o] =
              watchedValue_i + ": " + watchedValue_s[watchedValue_o]))
          }
        return watchedValue_s
      }
      static canPlotBeSourceOfChildStudy(watchedValue_e) {
        return watchedValue_m.has(watchedValue_e)
      }
      static getStudyPropertyRootName(watchedValue_e) {
        const watchedValue_t = watchedValue_g.get(watchedValue_e.id);
        if (void 0 !== watchedValue_t) return watchedValue_t;
        let watchedValue_i = "study_" + watchedValue_e.id;
        return watchedValue_e.pine && watchedValue_e.pine.version && (watchedValue_i += "_" + watchedValue_e.pine.version.replace(".", "_")), watchedValue_i
      }
      static getStudyPropertyRootNameById(watchedValue_e) {
        const watchedValue_t = watchedValue_g.get(watchedValue_e);
        return void 0 !== watchedValue_t ? watchedValue_t : "study_" + watchedValue_e
      }
      static isScriptStrategy(watchedValue_e) {
        return !1
      }
      static isReplayStrategy(watchedValue_e) {
        return "ReplayStrategy@tv-scripting" === watchedValue_e.id
      }
      static parseIdString(watchedValue_e) {
        return function(watchedValue_e) {
          const watchedValue_t = {};
          if (-1 === watchedValue_e.indexOf("@")) watchedValue_t.shortId = watchedValue_e, watchedValue_t.packageId = "tv-basicstudies", watchedValue_t.id = watchedValue_e + "@" + watchedValue_t.packageId, watchedValue_t
            .version = 1;
          else {
            const watchedValue_i = watchedValue_e.split("@");
            watchedValue_t.shortId = watchedValue_i[0];
            const watchedValue_s = watchedValue_i[1].split("-");
            if (3 === watchedValue_s.length) watchedValue_t.packageId = watchedValue_s.slice(0, 2).join("-"), watchedValue_t.id = watchedValue_t.shortId + "@" + watchedValue_t.packageId, watchedValue_t
              .version = parseInt(watchedValue_s[2]);
            else if (1 === watchedValue_s.length && "decisionbar" === watchedValue_s[0]) watchedValue_t.packageId = "les-" + watchedValue_s[0], watchedValue_t.id = watchedValue_t.shortId + "@" +
              watchedValue_t.packageId, watchedValue_t.version = 1;
            else {
              if (1 !== watchedValue_s.length) throw new Error("unexpected study id:" + watchedValue_e);
              watchedValue_t.packageId = "tv-" + watchedValue_s[0], watchedValue_t.id = watchedValue_t.shortId + "@" + watchedValue_t.packageId, watchedValue_t.version = 1
            }
          }
          if (watchedValue_t.fullId = watchedValue_t.id + "-" + watchedValue_t.version, "tv-scripting" === watchedValue_t.packageId) {
            const watchedValue_e = watchedValue_t.shortId;
            if (0 === watchedValue_e.indexOf("Script$") || 0 === watchedValue_e.indexOf("StrategyScript$")) {
              const watchedValue_i = watchedValue_e.indexOf("_");
              watchedValue_t.productId = watchedValue_i >= 0 ? watchedValue_e.substring(0, watchedValue_i) : watchedValue_t.packageId
            } else watchedValue_t.productId = watchedValue_t.packageId
          } else watchedValue_t.productId = watchedValue_t.packageId;
          return watchedValue_t
        }(watchedValue_e)
      }
      static versionOf(watchedValue_e) {
        const watchedValue_t = "_metainfoVersion" in watchedValue_e && (0, watchedValue_n.isNumber)(watchedValue_e._metainfoVersion) ? watchedValue_e._metainfoVersion : 0;
        return watchedValue_t < 0 && watchedValue_u.logError("Metainfo format version cannot be negative: " + watchedValue_t), watchedValue_t
      }
      static getPackageName(watchedValue_e) {
        const watchedValue_t = /^[^@]+@([^-]+-[^-]+)/.exec(watchedValue_e || "");
        watchedValue_t?.[1] || (0, watchedValue_a.getPersistentLogger)()?.addPersistentLogEntry(
          `getStudyPackageName: study id ${watchedValue_e} with stack ${(new Error).stack}`, watchedValue_r.LOGLEVEL.INFO,
          "chart.StudyMetaInfo");
        const [, watchedValue_i = "tv-basicstudies"] = watchedValue_t || [];
        return watchedValue_i
      }
      static cutDollarHash(watchedValue_e) {
        const watchedValue_t = watchedValue_e.indexOf("$");
        if (-1 === watchedValue_t) return watchedValue_e;
        const watchedValue_i = watchedValue_e.indexOf("@"),
          watchedValue_s = watchedValue_i >= 0 ? watchedValue_e.substring(watchedValue_i) : "";
        return watchedValue_e.substring(0, watchedValue_t) + watchedValue_s
      }
      static hasPubSuffix(watchedValue_e) {
        return /^PUB;.+$/.test(watchedValue_e)
      }
      static hasStdSuffix(watchedValue_e) {
        return /^STD;.+$/.test(watchedValue_e)
      }
      static isStandardPine(watchedValue_e) {
        return /^(Strategy)?Script\$STD;.*@tv-scripting$/.test(watchedValue_e)
      }
      static getStudyIdWithLatestVersion(watchedValue_e, watchedValue_t) {
        const watchedValue_i = S.cutDollarHash(watchedValue_e.id);
        let watchedValue_s = watchedValue_i;
        return watchedValue_i.indexOf("Portfolio@tv-scripting") >= 0 ? watchedValue_s += watchedValue_t ? "!" : "" : "ReplayStrategy@tv-scripting" === watchedValue_s ?
          watchedValue_s += "-581!" : watchedValue_i.indexOf("@tv-scripting") >= 0 ? watchedValue_s += "-101!" : watchedValue_i.endsWith("CP@tv-basicstudies") ? watchedValue_s +=
          "-" + Math.min(watchedValue_e.version, 207) : watchedValue_i.endsWith("CP@tv-chartpatterns") ? watchedValue_s += "-" + Math.min(watchedValue_e.version, 9) : watchedValue_i
          .endsWith("@tv-volumebyprice") || watchedValue_t ? watchedValue_s += "-" + watchedValue_e.version + "!" : watchedValue_s += "-" + watchedValue_e.version, watchedValue_s
      }
      static overrideDefaults(watchedValue_e) {
        0 !== watchedValue_e.length && (0, watchedValue_d.applyOverridesToStudyDefaults)(this.savedStudiesOverrides, watchedValue_e, (watchedValue_e => window.TradingView
          .defaultProperties[S.getStudyPropertyRootName(watchedValue_e)] || null))
      }
      static mergeDefaultsOverrides(watchedValue_e) {
        (0, watchedValue_n.merge)(this.savedStudiesOverrides, watchedValue_e)
      }
      static findStudyMetaInfoByDescription(watchedValue_e, watchedValue_t) {
        if (watchedValue_e) {
          const watchedValue_i = watchedValue_t.toLowerCase();
          for (const watchedValue_t of watchedValue_e)
            if (watchedValue_t.description.toLowerCase() === watchedValue_i) return watchedValue_t;
          throw new Error("unexpected study id:" + watchedValue_t)
        }
        throw new Error("There is no studies metainfo")
      }
      _updateInputDisplayDefaults() {
        this.inputs.filter((watchedValue_e => void 0 === watchedValue_e.display)).forEach((watchedValue_e => {
          watchedValue_y.includes(watchedValue_e.type) ? watchedValue_e.display = watchedValue_c.InputDisplayFlags.None : watchedValue_e.display = watchedValue_c.InputDisplayFlags.All
        }))
      }
    }
    S.savedStudiesOverrides = {}, window.TradingView.StudyMetaInfo = S