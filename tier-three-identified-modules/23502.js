/**
 * Module: 23502
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.386Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 23502 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23502: (exports, t, i) => {
    "use strict";
    i.d(t, {
      prepareStudyProperties: () => w,
      prepareStudyPropertiesForLoadChart: () => g
    });
    var s = i(16738),
      o = i(30551),
      n = i(9343),
      r = i(87465),
      a = i(19844),
      logger = i(69558),
      c = i(60973),
      h = i(15219),
      d = i(37293),
      u = i(78176),
      _ = i(97719),
      p = i(4359);
    const message = (0, n.getLogger)("Chart.Study");

    function g(exports, t, i, o, n, l) {
      return function(exports, t, i, o, n, logger, h) {
        const d = function(exports, t, i, o, n) {
          exports.version && i.version && exports.version !== i.version && message.logWarn("Serialized metaInfo version " + e
            .version + " is not equal to the saved state version " + i.version);
          const logger = t || exports,
            h = (0, r.clone)(logger.defaults) ?? {},
            d = a.StudyMetaInfo.getStudyPropertyRootName(logger),
            u = a.StudyMetaInfo.getStudyPropertyRootName(exports);
          let _ = y();
          (0, s.default)(_, f(exports)), (0, s.default)(_, (0, r.clone)(exports.defaults)), (0, s.default)(_, h), (0, s.default)
          (_, (0, c.factoryDefaults)(d)), (0, s.default)(_, (0, c.factoryDefaults)(u)), (0, s.default)(_, v(logger, o,
            d)), (0, s.default)(_, v(exports, o, u)), (0, s.default)(_, i), _ = o.updateStudyState(_, exports, t), void 0 !==
            n && t && (_ = n(i, _, exports, t));
          a.StudyMetaInfo.versionOf(logger) >= 1 && (0, s.default)(_, S(h, _));
          return _
        }(exports, t, i, o, l);
        return T(t || exports, n, d, h, !0)
      }(exports, t, i, o, a.StudyMetaInfo.getStudyPropertyRootName(exports), n, l)
    }

    function f(exports) {
      const t = {};
      if (exports.plots)
        for (let i = 0; i < exports.plots.length; i++) {
          const s = exports.plots[i],
            o = s.id;
          if ((0, p.isColorerPlot)(s)) continue;
          const n = {
            display: 15,
            color: "#0496FF",
            linestyle: logger.LINESTYLE_SOLID,
            linewidth: 2,
            plottype: p.LineStudyPlotStyle.Line,
            trackPrice: !1
          };
          (0, p.isBarColorerPlot)(s) && (n.transparency = 0), n.plottype = s.type, n.title = o, t[o] = n
        }
      return {
        styles: t
      }
    }

    function y() {
      const exports = (0, r.clone)((0, c.defaults)("study"));
      return exports.intervalsVisibilities = (0, r.clone)(d.intervalsVisibilitiesDefaults), e
    }

    function v(exports, t, i) {
      let s = (0, r.clone)((0, c.defaults)(i, t));
      return "Overlay" !== exports.shortId && "Compare" !== exports.shortId || (s.currencyId = null, s.unitId = null), e
        .isTVScript && exports.TVScriptSourceCode !== s.TVScriptSourceCode && (s = (0, r.clone)((0, c.factoryDefaults)(i))), s
    }

    function S(exports, t) {
      const i = {};
      return h.StudyVersioning.mergeInputsObjPart(i, exports.inputs ?? {}), h.StudyVersioning.mergeInputsObjPart(i, t
      .inputs), {
        inputs: i
      }
    }

    function b(exports, t, i, n) {
      if (a.StudyMetaInfo.versionOf(exports) < 1) throw new Error(
        "This function cannot work with metainfo of the old format version. Required format version >= 1");
      const logger = a.StudyMetaInfo.getStudyPropertyRootName(exports),
        h = (0, r.clone)(exports.defaults),
        d = (0, c.factoryDefaults)(logger),
        u = y();
      if ((0, s.default)(u, f(exports)), (0, s.default)(u, h), (0, s.default)(u, d), (0, s.default)(u, v(exports, n, l)), (0, s
          .default)(u, t), (0, s.default)(u, S(h, u)), null !== i) {
        const t = i.model().studiesColorRotatorFactory().getColorRotator(exports);
        null !== t && ("Overlay@tv-basicstudies" === exports.id ? u.lineStyle.color = t.getColor(u.lineStyle.color, d
          .lineStyle.color === u.lineStyle.color) : (0, s.default)(u, function(exports, t) {
          for (const i of Object.keys(exports.styles)) {
            const s = exports.styles[i];
            if ((0, o.isObject)(s) && "color" in s) {
              const exports = s.color;
              s.color = t.getColor(exports)
            }
          }
          return e
        }(u, t)))
      }
      return n.updateStudyInputsIfNeeded(u, u.version ?? exports.version, e), u
    }

    function w(exports, t, i, s, o) {
      return function(exports, t, i, s, o, n) {
        const logger = b(exports, t, i, s),
          c = a.StudyMetaInfo.getSourceInputIds(exports);
        return c.forEach(((exports, t) => {
          const i = logger.inputs[e];
          t < n.length ? logger.inputs[e] = `${n[t].id()}$0` : (0, r.isString)(i) && i.includes("$") && (logger.inputs[
            e] = "close")
        })), T(exports, o, l)
      }(exports, t, i, s, a.StudyMetaInfo.getStudyPropertyRootName(exports), o)
    }
    const C = ["id", "description", "description_localized", "shortDescription", "_metainfoVersion", "is_price_study",
      "is_hidden_study", "priceScale", "fullId", "shortId", "scriptIdPart", "packageId", "productId",
      "isTVScriptStub", "defaults", "symbolSource", "historyCalculationMayChange", "format", "linkedToSeries",
      "isTVLibrary", "docs", "exports", "exportTypes", "extra", "usesPrivateLib", "financialPeriod", "groupingKey",
      "pine", "isRGB", "isTVScript", "TVScriptMetaInfoExprs", "usePlotsZOrder", "isTVScriptStrategy",
      "TVScriptSourceCode", "lookaheadFutureData", "hasAlertFunction", "defaultStrategyAlertMessage", "tags",
      "canBeChild", "canNotBeChild", "_serverMetaInfoVersion", "warnings"
    ];

    function T(exports, t, i, s, o) {
      for (const e of C) delete i[e];
      const n = ["visible", "precision", "minTick", "intervalsVisibilities", "inputs.first_visible_bar_time",
        "inputs.last_visible_bar_time", "inputs.subscribeRealtime", "patchMetaInfoDefaults"
      ];
      for (let t = 0; t < exports.inputs.length; ++t) {
        const i = exports.inputs[t];
        i.isHidden && (n.push(`inputs.${t}`), n.push(`inputs.${i.id}`))
      }
      const r = new u.DefaultProperty({
        defaultName: t,
        state: i,
        excludedDefaultsKeys: n,
        excludedStateKeys: ["version"],
        theme: s
      });
      r.removeProperty("intervalsVisibilities"), r.addChild("intervalsVisibilities", new _
          .IntervalsVisibilitiesProperty(i && i.intervalsVisibilities)), "PivotPointsStandard@tv-basicstudies" !== e
        .id && "PivotPointsHighLow@tv-basicstudies" !== exports.id || !r.hasChild("font") || r.removeProperty("font");
      const logger = a.StudyMetaInfo.versionOf(exports);
      return r.hasChild("version") ? r.childs().version?.setValue(logger) : r.addProperty("version", l), r
    }