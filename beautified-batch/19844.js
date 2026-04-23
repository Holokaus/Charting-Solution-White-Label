/**
 * Module 19844 - Auto-beautified from TradingView webpack bundle
 *
 * @module 19844
 * @date 2026-04-23
 * @size 6677 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4359, 9343, 18113, 44862, 60973, 69422, 83873, 87465, 90054
 *
 * Exports:
 *   - StudyMetaInfo (internal: S)
 *   - getStudyIdWithVersion (internal: v)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

19844: (e, t, i) => {
    "use strict";
    i.d(t, {
      StudyMetaInfo: () => S,
      getStudyIdWithVersion: () => v
    });
    var s = i(83873),
      o = i(90054),
      n = i(87465),
      r = i(9343),
      a = i(18113),
      l = i(4359),
      c = i(69422),
      h = i(60973),
      d = i(44862);
    const u = (0, r.getLogger)("Chart.Study.MetaInfo"),
      _ = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]),
      p = new Set([]),
      m = new Set(["line", "shapes", "chars", "arrows", "alertcondition"]),
      g = new Map([["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"], ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"], ["VbPAnchored@tv-basicstudies", "linetoolanchoredvp"]]),
      f = /^([^\$]+)\$\d+$/,
      y = ["bool", "color", "time", "text_area"];

    function v(e) {
      return S.cutDollarHash(e.id) + "-" + e.version
    }
    class S {
      constructor(e, t = !1) {
        (0, n.merge)(this, {
          palettes: {},
          inputs: [],
          plots: [],
          graphics: {},
          defaults: {}
        }), (0, n.merge)(this, e);
        const i = e.fullId || e.id;
        (0, n.merge)(this, S.parseIdString(i)), this._updateInputDisplayDefaults(), this.useVersionFromMetaInfo = t
      }
      defaultInputs() {
        return this.inputs.map((e => e.defval)).filter(n.isExistent)
      }
      state() {
        const e = {};
        for (const [t, i] of Object.entries(this)) "useVersionFromMetaInfo" !== t && this.hasOwnProperty(t) && (e[t] = (0, o.default)(i), "id" === t && (e[t] += "-" + this.version));
        return e
      }
      symbolInputId() {
        return this.inputs.find((e => "symbol" === e.type))?.id || null
      }
      createDefaults() {
        if (this.defaults) {
          const e = (0, n.clone)(this.defaults);
          e.precision = "default";
          const t = S.getStudyPropertyRootName(this);
          (0, h.createDefaults)(t, e)
        }
      }
      removeDefaults() {
        (0, h.removeDefaults)(S.getStudyPropertyRootName(this))
      }
      isPlotForceOverlay(e) {
        const t = this.styles?.[e],
          i = this.plots.find((t => t.id === e));
        return !!t?.forceOverlay || i && (0, l.isOhlcPlot)(i) && this.ohlcPlots?.[i.target]?.forceOverlay || !!this.ohlcPlots?.[e]?.forceOverlay
      }
      hasForceOverlayPlots() {
        return this.plots.some((e => this.isPlotForceOverlay(e.id))) || Object.values(this.ohlcPlots ?? {}).some((e => !!e?.forceOverlay))
      }
      static getSourceIdsByInputs(e, t) {
        if (!Array.isArray(e) || !t) return [];
        const i = [];
        for (const o of e)
          if (S.isSourceInput(o) && (0, s.default)(t[o.id])) {
            const e = t[o.id];
            e.includes("$") && i.push(e.split("$")[0])
          } return i
      }
      static isSourceInput(e) {
        return Boolean(e.id && (("source" === e.id || "src" === e.id) && ("text" === e.type || "source" === e.type) || "source" === e.type))
      }
      static getSourceInputIds(e) {
        const t = [];
        for (const i of e.inputs) S.isSourceInput(i) && t.push(i.id);
        return t
      }
      static setChildStudyMetaInfoPropertiesSourceId(e, t, i) {
        for (const s of e.inputs) {
          if (!S.isSourceInput(s)) continue;
          const e = i.childs().inputs && i.childs().inputs.childs()[s.id];
          if (e) {
            const i = e.value(),
              s = f.exec(i);
            if (2 === s?.length) {
              if ("{pid}" === s[1]) {
                const s = i.replace(/^[^\$]+/, t);
                e.setValue(s)
              }
            }
          }
        }
      }
      static canBeChild(e) {
        if ((0, s.default)(e)) return !0;
        if (!e) return !1;
        if (e.extra && !S.isAllowedSourceInputsCount(e.extra.sourceInputsCount) || !0 === e.canNotBeChild || !1 === e.canBeChild || _.has(e.id)) return !1;
        let t = 0;
        for (const i of e.inputs) S.isSourceInput(i) && (t += 1);
        return S.isAllowedSourceInputsCount(t)
      }
      static isAllowedSourceInputsCount(e) {
        return 1 === e
      }
      static canHaveChildren(e) {
        if (e) {
          if (e.isTVScriptStrategy || e.TVScriptSourceCode && isStrategy(e.TVScriptSourceCode)) return !1;
          if (e.id && !p.has(e.id) && Array.isArray(e.plots))
            for (const t of e.plots)
              if (m.has(t.type)) return !0
        }
        return !1
      }
      static getChildSourceInputTitles(e, t, i) {
        const s = {};
        if (t.plots && t.plots.length && e.options && e.options.length)
          for (const o of e.options) {
            const e = o ? +o.split("$")[1] : NaN,
              n = isFinite(e) && t.plots[e];
            n && m.has(n.type) && (s[o] = t.styles && t.styles[n.id] && t.styles[n.id]?.title || n.id, i && (s[o] = i + ": " + s[o]))
          }
        return s
      }
      static canPlotBeSourceOfChildStudy(e) {
        return m.has(e)
      }
      static getStudyPropertyRootName(e) {
        const t = g.get(e.id);
        if (void 0 !== t) return t;
        let i = "study_" + e.id;
        return e.pine && e.pine.version && (i += "_" + e.pine.version.replace(".", "_")), i
      }
      static getStudyPropertyRootNameById(e) {
        const t = g.get(e);
        return void 0 !== t ? t : "study_" + e
      }
      static isScriptStrategy(e) {
        return !1
      }
      static isReplayStrategy(e) {
        return "ReplayStrategy@tv-scripting" === e.id
      }
      static parseIdString(e) {
        return function(e) {
          const t = {};
          if (-1 === e.indexOf("@")) t.shortId = e, t.packageId = "tv-basicstudies", t.id = e + "@" + t.packageId, t.version = 1;
          else {
            const i = e.split("@");
            t.shortId = i[0];
            const s = i[1].split("-");
            if (3 === s.length) t.packageId = s.slice(0, 2).join("-"), t.id = t.shortId + "@" + t.packageId, t.version = parseInt(s[2]);
            else if (1 === s.length && "decisionbar" === s[0]) t.packageId = "les-" + s[0], t.id = t.shortId + "@" + t.packageId, t.version = 1;
            else {
              if (1 !== s.length) throw new Error("unexpected study id:" + e);
              t.packageId = "tv-" + s[0], t.id = t.shortId + "@" + t.packageId, t.version = 1
            }
          }
          if (t.fullId = t.id + "-" + t.version, "tv-scripting" === t.packageId) {
            const e = t.shortId;
            if (0 === e.indexOf("Script$") || 0 === e.indexOf("StrategyScript$")) {
              const i = e.indexOf("_");
              t.productId = i >= 0 ? e.substring(0, i) : t.packageId
            } else t.productId = t.packageId
          } else t.productId = t.packageId;
          return t
        }(e)
      }
      static versionOf(e) {
        const t = "_metainfoVersion" in e && (0, n.isNumber)(e._metainfoVersion) ? e._metainfoVersion : 0;
        return t < 0 && u.logError("Metainfo format version cannot be negative: " + t), t
      }
      static getPackageName(e) {
        const t = /^[^@]+@([^-]+-[^-]+)/.exec(e || "");
        t?.[1] || (0, a.getPersistentLogger)()?.addPersistentLogEntry(`getStudyPackageName: study id ${e} with stack ${(new Error).stack}`, r.LOGLEVEL.INFO, "chart.StudyMetaInfo");
        const [, i = "tv-basicstudies"] = t || [];
        return i
      }
      static cutDollarHash(e) {
        const t = e.indexOf("$");
        if (-1 === t) return e;
        const i = e.indexOf("@"),
          s = i >= 0 ? e.substring(i) : "";
        return e.substring(0, t) + s
      }
      static hasPubSuffix(e) {
        return /^PUB;.+$/.test(e)
      }
      static hasStdSuffix(e) {
        return /^STD;.+$/.test(e)
      }
      static isStandardPine(e) {
        return /^(Strategy)?Script\$STD;.*@tv-scripting$/.test(e)
      }
      static getStudyIdWithLatestVersion(e, t) {
        const i = S.cutDollarHash(e.id);
        let s = i;
        return i.indexOf("Portfolio@tv-scripting") >= 0 ? s += t ? "!" : "" : "ReplayStrategy@tv-scripting" === s ? s += "-581!" : i.indexOf("@tv-scripting") >= 0 ? s += "-101!" : i.endsWith("CP@tv-basicstudies") ? s += "-" + Math.min(e.version, 207) : i.endsWith("CP@tv-chartpatterns") ? s += "-" + Math.min(e.version, 9) : i.endsWith("@tv-volumebyprice") || t ? s += "-" + e.version + "!" : s += "-" + e.version, s
      }
      static overrideDefaults(e) {
        0 !== e.length && (0, d.applyOverridesToStudyDefaults)(this.savedStudiesOverrides, e, (e => window.TradingView.defaultProperties[S.getStudyPropertyRootName(e)] || null))
      }
      static mergeDefaultsOverrides(e) {
        (0, n.merge)(this.savedStudiesOverrides, e)
      }
      static findStudyMetaInfoByDescription(e, t) {
        if (e) {
          const i = t.toLowerCase();
          for (const t of e)
            if (t.description.toLowerCase() === i) return t;
          throw new Error("unexpected study id:" + t)
        }
        throw new Error("There is no studies metainfo")
      }
      _updateInputDisplayDefaults() {
        this.inputs.filter((e => void 0 === e.display)).forEach((e => {
          y.includes(e.type) ? e.display = c.InputDisplayFlags.None : e.display = c.InputDisplayFlags.All
        }))
      }
    }
    S.savedStudiesOverrides = {}, window.TradingView.StudyMetaInfo = S
