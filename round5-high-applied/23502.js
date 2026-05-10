/**
 * Module 23502 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23502: (logger_e, t, i) => {
    "use strict";
    i.d(t, {
      prepareStudyProperties: () => w,
      prepareStudyPropertiesForLoadChart: () => g
    });
    var logger_s = i(16738),
      o = i(30551),
      logger_n = i(9343),
      r = i(87465),
      a = i(19844),
      l = i(69558),
      c = i(60973),
      h = i(15219),
      d = i(37293),
      u = i(78176),
      _ = i(97719),
      p = i(4359);
    const m = (0, logger_n.getLogger)("Chart.Study");

    function g(logger_e, t, i, o, logger_n, l) {
      return function(logger_e, t, i, o, logger_n, l, h) {
        const d = function(logger_e, t, i, o, logger_n) {
          logger_e.version && i.version && logger_e.version !== i.version && m.logWarn("Serialized metaInfo version " + logger_e
            .version + " is not equal to the saved state version " + i.version);
          const l = t || logger_e,
            h = (0, r.clone)(l.defaults) ?? {},
            d = a.StudyMetaInfo.getStudyPropertyRootName(l),
            u = a.StudyMetaInfo.getStudyPropertyRootName(logger_e);
          let _ = y();
          (0, logger_s.default)(_, f(logger_e)), (0, logger_s.default)(_, (0, r.clone)(logger_e.defaults)), (0, logger_s.default)(_, h), (0, logger_s.default)
          (_, (0, c.factoryDefaults)(d)), (0, logger_s.default)(_, (0, c.factoryDefaults)(u)), (0, logger_s.default)(_, v(l, o,
            d)), (0, logger_s.default)(_, v(logger_e, o, u)), (0, logger_s.default)(_, i), _ = o.updateStudyState(_, logger_e, t), void 0 !==
            logger_n && t && (_ = logger_n(i, _, logger_e, t));
          a.StudyMetaInfo.versionOf(l) >= 1 && (0, logger_s.default)(_, S(h, _));
          return _
        }(logger_e, t, i, o, l);
        return T(t || logger_e, logger_n, d, h, !0)
      }(logger_e, t, i, o, a.StudyMetaInfo.getStudyPropertyRootName(logger_e), logger_n, l)
    }

    function f(logger_e) {
      const t = {};
      if (logger_e.plots)
        for (let i = 0; i < logger_e.plots.length; i++) {
          const logger_s = logger_e.plots[i],
            o = logger_s.id;
          if ((0, p.isColorerPlot)(logger_s)) continue;
          const logger_n = {
            display: 15,
            color: "#0496FF",
            linestyle: l.LINESTYLE_SOLID,
            linewidth: 2,
            plottype: p.LineStudyPlotStyle.Line,
            trackPrice: !1
          };
          (0, p.isBarColorerPlot)(logger_s) && (logger_n.transparency = 0), logger_n.plottype = logger_s.type, logger_n.title = o, t[o] = logger_n
        }
      return {
        styles: t
      }
    }

    function y() {
      const logger_e = (0, r.clone)((0, c.defaults)("study"));
      return logger_e.intervalsVisibilities = (0, r.clone)(d.intervalsVisibilitiesDefaults), logger_e
    }

    function v(logger_e, t, i) {
      let logger_s = (0, r.clone)((0, c.defaults)(i, t));
      return "Overlay" !== logger_e.shortId && "Compare" !== logger_e.shortId || (logger_s.currencyId = null, logger_s.unitId = null), logger_e
        .isTVScript && logger_e.TVScriptSourceCode !== logger_s.TVScriptSourceCode && (logger_s = (0, r.clone)((0, c.factoryDefaults)(i))), logger_s
    }

    function S(logger_e, t) {
      const i = {};
      return h.StudyVersioning.mergeInputsObjPart(i, logger_e.inputs ?? {}), h.StudyVersioning.mergeInputsObjPart(i, t
      .inputs), {
        inputs: i
      }
    }

    function b(logger_e, t, i, logger_n) {
      if (a.StudyMetaInfo.versionOf(logger_e) < 1) throw new Error(
        "This function cannot work with metainfo of the old format version. Required format version >= 1");
      const l = a.StudyMetaInfo.getStudyPropertyRootName(logger_e),
        h = (0, r.clone)(logger_e.defaults),
        d = (0, c.factoryDefaults)(l),
        u = y();
      if ((0, logger_s.default)(u, f(logger_e)), (0, logger_s.default)(u, h), (0, logger_s.default)(u, d), (0, logger_s.default)(u, v(logger_e, logger_n, l)), (0, logger_s
          .default)(u, t), (0, logger_s.default)(u, S(h, u)), null !== i) {
        const t = i.model().studiesColorRotatorFactory().getColorRotator(logger_e);
        null !== t && ("Overlay@tv-basicstudies" === logger_e.id ? u.lineStyle.color = t.getColor(u.lineStyle.color, d
          .lineStyle.color === u.lineStyle.color) : (0, logger_s.default)(u, function(logger_e, t) {
          for (const i of Object.keys(logger_e.styles)) {
            const logger_s = logger_e.styles[i];
            if ((0, o.isObject)(logger_s) && "color" in logger_s) {
              const logger_e = logger_s.color;
              logger_s.color = t.getColor(logger_e)
            }
          }
          return logger_e
        }(u, t)))
      }
      return logger_n.updateStudyInputsIfNeeded(u, u.version ?? logger_e.version, logger_e), u
    }

    function w(logger_e, t, i, logger_s, o) {
      return function(logger_e, t, i, logger_s, o, logger_n) {
        const l = b(logger_e, t, i, logger_s),
          c = a.StudyMetaInfo.getSourceInputIds(logger_e);
        return c.forEach(((logger_e, t) => {
          const i = l.inputs[logger_e];
          t < logger_n.length ? l.inputs[logger_e] = `${logger_n[t].id()}$0` : (0, r.isString)(i) && i.includes("$") && (l.inputs[
            logger_e] = "close")
        })), T(logger_e, o, l)
      }(logger_e, t, i, logger_s, a.StudyMetaInfo.getStudyPropertyRootName(logger_e), o)
    }
    const C = ["id", "description", "description_localized", "shortDescription", "_metainfoVersion", "is_price_study",
      "is_hidden_study", "priceScale", "fullId", "shortId", "scriptIdPart", "packageId", "productId",
      "isTVScriptStub", "defaults", "symbolSource", "historyCalculationMayChange", "format", "linkedToSeries",
      "isTVLibrary", "docs", "exports", "exportTypes", "extra", "usesPrivateLib", "financialPeriod", "groupingKey",
      "pine", "isRGB", "isTVScript", "TVScriptMetaInfoExprs", "usePlotsZOrder", "isTVScriptStrategy",
      "TVScriptSourceCode", "lookaheadFutureData", "hasAlertFunction", "defaultStrategyAlertMessage", "tags",
      "canBeChild", "canNotBeChild", "_serverMetaInfoVersion", "warnings"
    ];

    function T(logger_e, t, i, logger_s, o) {
      for (const logger_e of C) delete i[logger_e];
      const logger_n = ["visible", "precision", "minTick", "intervalsVisibilities", "inputs.first_visible_bar_time",
        "inputs.last_visible_bar_time", "inputs.subscribeRealtime", "patchMetaInfoDefaults"
      ];
      for (let t = 0; t < logger_e.inputs.length; ++t) {
        const i = logger_e.inputs[t];
        i.isHidden && (logger_n.push(`inputs.${t}`), logger_n.push(`inputs.${i.id}`))
      }
      const r = new u.DefaultProperty({
        defaultName: t,
        state: i,
        excludedDefaultsKeys: logger_n,
        excludedStateKeys: ["version"],
        theme: logger_s
      });
      r.removeProperty("intervalsVisibilities"), r.addChild("intervalsVisibilities", new _
          .IntervalsVisibilitiesProperty(i && i.intervalsVisibilities)), "PivotPointsStandard@tv-basicstudies" !== logger_e
        .id && "PivotPointsHighLow@tv-basicstudies" !== logger_e.id || !r.hasChild("font") || r.removeProperty("font");
      const l = a.StudyMetaInfo.versionOf(logger_e);
      return r.hasChild("version") ? r.childs().version?.setValue(l) : r.addProperty("version", l), r
    }
}
