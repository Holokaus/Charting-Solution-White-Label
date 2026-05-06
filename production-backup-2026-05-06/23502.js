/**
 * Module 23502 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23502: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      prepareStudyProperties: () => logger_w,
      prepareStudyPropertiesForLoadChart: () => logger_g
    });
    var logger_s = logger_i(16738),
      logger_o = logger_i(30551),
      logger_n = logger_i(9343),
      logger_r = logger_i(87465),
      logger_a = logger_i(19844),
      logger_l = logger_i(69558),
      logger_c = logger_i(60973),
      logger_h = logger_i(15219),
      logger_d = logger_i(37293),
      logger_u = logger_i(78176),
      _ = logger_i(97719),
      logger_p = logger_i(4359);
    const logger_m = (0, logger_n.getLogger)("Chart.Study");

    function logger_g(logger_e, logger_t, logger_i, logger_o, logger_n, logger_l) {
      return function(logger_e, logger_t, logger_i, logger_o, logger_n, logger_l, logger_h) {
        const logger_d = function(logger_e, logger_t, logger_i, logger_o, logger_n) {
          logger_e.version && logger_i.version && logger_e.version !== logger_i.version && logger_m.logWarn("Serialized metaInfo version " + logger_e
            .version + " is not equal to the saved state version " + logger_i.version);
          const logger_l = logger_t || logger_e,
            logger_h = (0, logger_r.clone)(logger_l.defaults) ?? {},
            logger_d = logger_a.StudyMetaInfo.getStudyPropertyRootName(logger_l),
            logger_u = logger_a.StudyMetaInfo.getStudyPropertyRootName(logger_e);
          let _ = logger_y();
          (0, logger_s.default)(_, logger_f(logger_e)), (0, logger_s.default)(_, (0, logger_r.clone)(logger_e.defaults)), (0, logger_s.default)(_, logger_h), (0, logger_s.default)
          (_, (0, logger_c.factoryDefaults)(logger_d)), (0, logger_s.default)(_, (0, logger_c.factoryDefaults)(logger_u)), (0, logger_s.default)(_, logger_v(logger_l, logger_o,
            logger_d)), (0, logger_s.default)(_, logger_v(logger_e, logger_o, logger_u)), (0, logger_s.default)(_, logger_i), _ = logger_o.updateStudyState(_, logger_e, logger_t), void 0 !==
            logger_n && logger_t && (_ = logger_n(logger_i, _, logger_e, logger_t));
          logger_a.StudyMetaInfo.versionOf(logger_l) >= 1 && (0, logger_s.default)(_, S(logger_h, _));
          return _
        }(logger_e, logger_t, logger_i, logger_o, logger_l);
        return T(logger_t || logger_e, logger_n, logger_d, logger_h, !0)
      }(logger_e, logger_t, logger_i, logger_o, logger_a.StudyMetaInfo.getStudyPropertyRootName(logger_e), logger_n, logger_l)
    }

    function logger_f(logger_e) {
      const logger_t = {};
      if (logger_e.plots)
        for (let logger_i = 0; logger_i < logger_e.plots.length; logger_i++) {
          const logger_s = logger_e.plots[logger_i],
            logger_o = logger_s.id;
          if ((0, logger_p.isColorerPlot)(logger_s)) continue;
          const logger_n = {
            display: 15,
            color: "#0496FF",
            linestyle: logger_l.LINESTYLE_SOLID,
            linewidth: 2,
            plottype: logger_p.LineStudyPlotStyle.Line,
            trackPrice: !1
          };
          (0, logger_p.isBarColorerPlot)(logger_s) && (logger_n.transparency = 0), logger_n.plottype = logger_s.type, logger_n.title = logger_o, logger_t[logger_o] = logger_n
        }
      return {
        styles: logger_t
      }
    }

    function logger_y() {
      const logger_e = (0, logger_r.clone)((0, logger_c.defaults)("study"));
      return logger_e.intervalsVisibilities = (0, logger_r.clone)(logger_d.intervalsVisibilitiesDefaults), logger_e
    }

    function logger_v(logger_e, logger_t, logger_i) {
      let logger_s = (0, logger_r.clone)((0, logger_c.defaults)(logger_i, logger_t));
      return "Overlay" !== logger_e.shortId && "Compare" !== logger_e.shortId || (logger_s.currencyId = null, logger_s.unitId = null), logger_e
        .isTVScript && logger_e.TVScriptSourceCode !== logger_s.TVScriptSourceCode && (logger_s = (0, logger_r.clone)((0, logger_c.factoryDefaults)(logger_i))), logger_s
    }

    function S(logger_e, logger_t) {
      const logger_i = {};
      return logger_h.StudyVersioning.mergeInputsObjPart(logger_i, logger_e.inputs ?? {}), logger_h.StudyVersioning.mergeInputsObjPart(logger_i, logger_t
      .inputs), {
        inputs: logger_i
      }
    }

    function logger_b(logger_e, logger_t, logger_i, logger_n) {
      if (logger_a.StudyMetaInfo.versionOf(logger_e) < 1) throw new Error(
        "This function cannot work with metainfo of the old format version. Required format version >= 1");
      const logger_l = logger_a.StudyMetaInfo.getStudyPropertyRootName(logger_e),
        logger_h = (0, logger_r.clone)(logger_e.defaults),
        logger_d = (0, logger_c.factoryDefaults)(logger_l),
        logger_u = logger_y();
      if ((0, logger_s.default)(logger_u, logger_f(logger_e)), (0, logger_s.default)(logger_u, logger_h), (0, logger_s.default)(logger_u, logger_d), (0, logger_s.default)(logger_u, logger_v(logger_e, logger_n, logger_l)), (0, logger_s
          .default)(logger_u, logger_t), (0, logger_s.default)(logger_u, S(logger_h, logger_u)), null !== logger_i) {
        const logger_t = logger_i.model().studiesColorRotatorFactory().getColorRotator(logger_e);
        null !== logger_t && ("Overlay@tv-basicstudies" === logger_e.id ? logger_u.lineStyle.color = logger_t.getColor(logger_u.lineStyle.color, logger_d
          .lineStyle.color === logger_u.lineStyle.color) : (0, logger_s.default)(logger_u, function(logger_e, logger_t) {
          for (const logger_i of Object.keys(logger_e.styles)) {
            const logger_s = logger_e.styles[logger_i];
            if ((0, logger_o.isObject)(logger_s) && "color" in logger_s) {
              const logger_e = logger_s.color;
              logger_s.color = logger_t.getColor(logger_e)
            }
          }
          return logger_e
        }(logger_u, logger_t)))
      }
      return logger_n.updateStudyInputsIfNeeded(logger_u, logger_u.version ?? logger_e.version, logger_e), logger_u
    }

    function logger_w(logger_e, logger_t, logger_i, logger_s, logger_o) {
      return function(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n) {
        const logger_l = logger_b(logger_e, logger_t, logger_i, logger_s),
          logger_c = logger_a.StudyMetaInfo.getSourceInputIds(logger_e);
        return logger_c.forEach(((logger_e, logger_t) => {
          const logger_i = logger_l.inputs[logger_e];
          logger_t < logger_n.length ? logger_l.inputs[logger_e] = `${logger_n[logger_t].id()}$0` : (0, logger_r.isString)(logger_i) && logger_i.includes("$") && (logger_l.inputs[
            logger_e] = "close")
        })), T(logger_e, logger_o, logger_l)
      }(logger_e, logger_t, logger_i, logger_s, logger_a.StudyMetaInfo.getStudyPropertyRootName(logger_e), logger_o)
    }
    const C = ["id", "description", "description_localized", "shortDescription", "_metainfoVersion", "is_price_study",
      "is_hidden_study", "priceScale", "fullId", "shortId", "scriptIdPart", "packageId", "productId",
      "isTVScriptStub", "defaults", "symbolSource", "historyCalculationMayChange", "format", "linkedToSeries",
      "isTVLibrary", "docs", "exports", "exportTypes", "extra", "usesPrivateLib", "financialPeriod", "groupingKey",
      "pine", "isRGB", "isTVScript", "TVScriptMetaInfoExprs", "usePlotsZOrder", "isTVScriptStrategy",
      "TVScriptSourceCode", "lookaheadFutureData", "hasAlertFunction", "defaultStrategyAlertMessage", "tags",
      "canBeChild", "canNotBeChild", "_serverMetaInfoVersion", "warnings"
    ];

    function T(logger_e, logger_t, logger_i, logger_s, logger_o) {
      for (const logger_e of C) delete logger_i[logger_e];
      const logger_n = ["visible", "precision", "minTick", "intervalsVisibilities", "inputs.first_visible_bar_time",
        "inputs.last_visible_bar_time", "inputs.subscribeRealtime", "patchMetaInfoDefaults"
      ];
      for (let logger_t = 0; logger_t < logger_e.inputs.length; ++logger_t) {
        const logger_i = logger_e.inputs[logger_t];
        logger_i.isHidden && (logger_n.push(`inputs.${logger_t}`), logger_n.push(`inputs.${logger_i.id}`))
      }
      const logger_r = new logger_u.DefaultProperty({
        defaultName: logger_t,
        state: logger_i,
        excludedDefaultsKeys: logger_n,
        excludedStateKeys: ["version"],
        theme: logger_s
      });
      logger_r.removeProperty("intervalsVisibilities"), logger_r.addChild("intervalsVisibilities", new _
          .IntervalsVisibilitiesProperty(logger_i && logger_i.intervalsVisibilities)), "PivotPointsStandard@tv-basicstudies" !== logger_e
        .id && "PivotPointsHighLow@tv-basicstudies" !== logger_e.id || !logger_r.hasChild("font") || logger_r.removeProperty("font");
      const logger_l = logger_a.StudyMetaInfo.versionOf(logger_e);
      return logger_r.hasChild("version") ? logger_r.childs().version?.setValue(logger_l) : logger_r.addProperty("version", logger_l), logger_r
    }