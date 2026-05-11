/**
 * Module 44862 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

44862: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      applyOverridesToStudy: () => watchedValue_d,
      applyOverridesToStudyDefaults: () => watchedValue_u
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(4359),
      watchedValue_n = watchedValue_i(9343);
    const watchedValue_r = {
        line: watchedValue_o.LineStudyPlotStyle.Line,
        histogram: watchedValue_o.LineStudyPlotStyle.Histogram,
        cross: watchedValue_o.LineStudyPlotStyle.Cross,
        area: watchedValue_o.LineStudyPlotStyle.Area,
        columns: watchedValue_o.LineStudyPlotStyle.Columns,
        circles: watchedValue_o.LineStudyPlotStyle.Circles,
        line_with_breaks: watchedValue_o.LineStudyPlotStyle.LineWithBreaks,
        area_with_breaks: watchedValue_o.LineStudyPlotStyle.AreaWithBreaks,
        step_line: watchedValue_o.LineStudyPlotStyle.StepLine,
        step_line_with_breaks: watchedValue_o.LineStudyPlotStyle.StepLineWithBreaks,
        step_line_with_diamonds: watchedValue_o.LineStudyPlotStyle.StepLineWithDiamonds
      },
      watchedValue_a = (0, watchedValue_n.getLogger)("Chart.Model.StudyPropertiesOverrider");
    var watchedValue_l, watchedValue_c;

    function watchedValue_h(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
      const watchedValue_o = watchedValue_i.split(".");
      if (0 === watchedValue_o.length || 0 === watchedValue_o[0].length) return;
      const watchedValue_n = function(watchedValue_e) {
          const watchedValue_t = watchedValue_e.split(":");
          return {
            name: watchedValue_t[0],
            type: 2 === watchedValue_t.length ? watchedValue_t[1] : null
          }
        }(watchedValue_o[0]),
        watchedValue_r = watchedValue_n.name,
        watchedValue_h = watchedValue_n.type,
        watchedValue_d = null !== watchedValue_h,
        watchedValue_u = !watchedValue_d || "band" === watchedValue_h,
        _ = !watchedValue_d || "area" === watchedValue_h,
        watchedValue_p = !watchedValue_d || "input" === watchedValue_h,
        watchedValue_m = !watchedValue_d || "plot" === watchedValue_h ? watchedValue_c.getPlotIdByTitle(watchedValue_e, watchedValue_r) : null,
        watchedValue_g = watchedValue_u ? watchedValue_c.getBandIndexByName(watchedValue_e, watchedValue_r) : null,
        watchedValue_f = _ ? watchedValue_c.getFilledAreaIdByTitle(watchedValue_e, watchedValue_r) : null,
        watchedValue_y = watchedValue_p ? watchedValue_c.getInputByName(watchedValue_e, watchedValue_r) : null,
        watchedValue_v = watchedValue_t.hasOwnProperty(watchedValue_r);
      if ((null !== watchedValue_m ? 1 : 0) + (null !== watchedValue_g ? 1 : 0) + (null !== watchedValue_f ? 1 : 0) + (null !== watchedValue_y ? 1 : 0) + (watchedValue_v ? 1 : 0) > 1)
        return void watchedValue_a.logWarn(`Study '${watchedValue_e.description}' has ambiguous identifier '${watchedValue_r}'`);
      const S = watchedValue_o[1];
      if (null !== watchedValue_m) {
        if (1 === watchedValue_o.length) return void watchedValue_a.logWarn(
          `Path of sub-property of '${watchedValue_r}' plot for study '${watchedValue_e.description}' must be not empty`);
        const watchedValue_i = watchedValue_o.slice(1);
        watchedValue_l.applyPlotProperty(watchedValue_e, watchedValue_t, watchedValue_m, watchedValue_i, watchedValue_s)
      } else if (null !== watchedValue_y) watchedValue_l.applyInputValue(watchedValue_t, watchedValue_y, watchedValue_s);
      else if (null !== watchedValue_g) {
        if (void 0 === S) return void watchedValue_a.logWarn(
        `Property name of '${watchedValue_r}' band for study '${watchedValue_e.description}' must be set`);
        watchedValue_l.applyBandProperty(watchedValue_t, watchedValue_g, S, watchedValue_s)
      } else if (null !== watchedValue_f) {
        if (void 0 === S) return void watchedValue_a.logWarn(
        `Property name of '${watchedValue_r}' area for study '${watchedValue_e.description}' must be set`);
        watchedValue_l.applyFilledAreaProperty(watchedValue_t, watchedValue_f, S, watchedValue_s)
      } else watchedValue_v ? watchedValue_l.setRootProperty(watchedValue_t, watchedValue_o, watchedValue_s) : watchedValue_a.logWarn(`Study '${watchedValue_e.description}' has no plot or input '${watchedValue_r}'`)
    }

    function watchedValue_d(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e.properties(),
        watchedValue_s = watchedValue_i.state();
      for (const watchedValue_i in watchedValue_t) watchedValue_t.hasOwnProperty(watchedValue_i) && watchedValue_h(watchedValue_e.metaInfo(), watchedValue_s, watchedValue_i, watchedValue_t[watchedValue_i]);
      watchedValue_i.mergeAndFire(watchedValue_s)
    }

    function watchedValue_u(watchedValue_e, watchedValue_t, watchedValue_i) {
      for (const watchedValue_s in watchedValue_e) {
        if (!watchedValue_e.hasOwnProperty(watchedValue_s)) continue;
        const watchedValue_o = watchedValue_s.indexOf(".");
        if (-1 === watchedValue_o) continue;
        const watchedValue_n = watchedValue_s.substring(0, watchedValue_o),
          watchedValue_r = watchedValue_c.getMetaInfoByDescription(watchedValue_t, watchedValue_n);
        if (null === watchedValue_r) {
          watchedValue_a.logWarn(`There is no such study ${watchedValue_n}`);
          continue
        }
        const watchedValue_l = watchedValue_i(watchedValue_r);
        null !== watchedValue_l ? watchedValue_h(watchedValue_r, watchedValue_l, watchedValue_s.substring(watchedValue_o + 1), watchedValue_e[watchedValue_s]) : watchedValue_a.logWarn(`Cannot apply overrides for study ${watchedValue_n}`)
      }
    }! function(watchedValue_e) {
      watchedValue_e.applyPlotProperty = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_n, watchedValue_l) {
        if (void 0 === watchedValue_t.styles) return void watchedValue_a.logWarn("Study does not have styles");
        const watchedValue_c = watchedValue_n[0];
        if ("color" === watchedValue_c) {
          const watchedValue_r = function(watchedValue_e, watchedValue_t, watchedValue_i) {
            if (void 0 === watchedValue_e.plots) return null;
            for (const watchedValue_s of watchedValue_e.plots) {
              if (!(0, watchedValue_o.isPaletteColorerPlot)(watchedValue_s) || void 0 === watchedValue_t.palettes) continue;
              const watchedValue_e = watchedValue_t.palettes[watchedValue_s.palette];
              if (watchedValue_s.target === watchedValue_i && void 0 !== watchedValue_e) return watchedValue_e
            }
            return null
          }(watchedValue_e, watchedValue_t, watchedValue_i);
          return void
          function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_o, watchedValue_n) {
            void 0 !== watchedValue_e.styles ? null === watchedValue_t && !isNaN(watchedValue_o) && watchedValue_o > 0 ? watchedValue_a.logWarn(
              `Study plot does not have color #${watchedValue_o}`) : ((0 === watchedValue_o || isNaN(watchedValue_o)) && ((0, watchedValue_s.ensureDefined)(watchedValue_e.styles[watchedValue_i])
                .color = String(watchedValue_n), watchedValue_o = 0), null !== watchedValue_t && ((0, watchedValue_s.ensureDefined)(watchedValue_t.colors?.[watchedValue_o]).color = String(watchedValue_n))) : watchedValue_a
              .logWarn("Study does not have styles")
          }(watchedValue_t, watchedValue_r, watchedValue_i, watchedValue_n.length > 1 ? parseInt(watchedValue_n[1]) : NaN, watchedValue_l)
        }
        const watchedValue_h = watchedValue_t.styles[watchedValue_i];
        if (void 0 !== watchedValue_h && watchedValue_h.hasOwnProperty(watchedValue_c)) {
          if ("plottype" === watchedValue_c) {
            const watchedValue_e = watchedValue_r[String(watchedValue_l)];
            if (void 0 === watchedValue_e) return void watchedValue_a.logWarn(`Unsupported plot type for plot: ${watchedValue_l}`);
            watchedValue_l = watchedValue_e
          }
          watchedValue_h[watchedValue_c] = watchedValue_l
        } else watchedValue_a.logWarn(`Study plot does not have property '${watchedValue_c}'`)
      }, watchedValue_e.applyBandProperty = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        if (void 0 === watchedValue_e.bands) return void watchedValue_a.logWarn("Study does not have bands");
        const watchedValue_o = watchedValue_e.bands[watchedValue_t];
        if (void 0 !== watchedValue_o && watchedValue_o.hasOwnProperty(watchedValue_i)) {
          if ("plottype" === watchedValue_i) {
            const watchedValue_e = watchedValue_r[String(watchedValue_s)];
            if (void 0 === watchedValue_e) return void watchedValue_a.logWarn(`Unsupported plot type for band: ${watchedValue_s}`);
            watchedValue_s = watchedValue_e
          }
          watchedValue_o[watchedValue_i] = watchedValue_s
        } else watchedValue_a.logWarn(`Study band does not have property '${watchedValue_i}'`)
      }, watchedValue_e.applyFilledAreaProperty = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        if (void 0 === watchedValue_e.filledAreasStyle) return void watchedValue_a.logWarn("Study does not have areas");
        const watchedValue_o = watchedValue_e.filledAreasStyle[watchedValue_t];
        void 0 !== watchedValue_o && watchedValue_o.hasOwnProperty(watchedValue_i) ? watchedValue_o[watchedValue_i] = watchedValue_s : watchedValue_a.logWarn(`Study area does not have property '${watchedValue_i}'`)
      }, watchedValue_e.applyInputValue = function(watchedValue_e, watchedValue_t, watchedValue_i) {
        void 0 !== watchedValue_e.inputs && watchedValue_e.inputs.hasOwnProperty(watchedValue_t) ? watchedValue_e.inputs[watchedValue_t] = watchedValue_i : watchedValue_a.logWarn(
          `Study does not have input '${watchedValue_t}'`)
      }, watchedValue_e.setRootProperty = function(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (0 === watchedValue_t.length) return;
        let watchedValue_s = watchedValue_e;
        for (const watchedValue_e of watchedValue_t.slice(0, -1)) {
          if (null == watchedValue_s || !watchedValue_s.hasOwnProperty(watchedValue_e)) break;
          watchedValue_s = watchedValue_s[watchedValue_e]
        }
        const watchedValue_o = watchedValue_t[watchedValue_t.length - 1];
        null != watchedValue_s && watchedValue_s.hasOwnProperty(watchedValue_o) ? watchedValue_s[watchedValue_o] = watchedValue_i : watchedValue_a.logWarn(`Study does not have property ${watchedValue_t.join(".")}`)
      }
    }(watchedValue_l || (watchedValue_l = {})),
    function(watchedValue_e) {
      watchedValue_e.getInputByName = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.inputs) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const watchedValue_i of watchedValue_e.inputs)
          if (watchedValue_i.name.toLowerCase() === watchedValue_t) return watchedValue_i.id;
        return null
      }, watchedValue_e.getPlotIdByTitle = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.styles) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const watchedValue_i in watchedValue_e.styles) {
          const watchedValue_s = watchedValue_e.styles[watchedValue_i];
          if ((void 0 !== watchedValue_s && void 0 !== watchedValue_s.title ? watchedValue_s.title : watchedValue_i).toLowerCase() === watchedValue_t) return watchedValue_i
        }
        return null
      }, watchedValue_e.getFilledAreaIdByTitle = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.filledAreas) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const watchedValue_i of watchedValue_e.filledAreas)
          if (watchedValue_i.title.toLowerCase() === watchedValue_t) return watchedValue_i.id;
        return null
      }, watchedValue_e.getBandIndexByName = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.bands) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_e.bands.length; ++watchedValue_i)
          if (watchedValue_e.bands[watchedValue_i].name.toLowerCase() === watchedValue_t) return watchedValue_i;
        return null
      }, watchedValue_e.getMetaInfoByDescription = function(watchedValue_e, watchedValue_t) {
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const watchedValue_i of watchedValue_e)
          if (watchedValue_i.description.toLowerCase() === watchedValue_t || watchedValue_i.shortDescription.toLowerCase() === watchedValue_t) return watchedValue_i;
        return null
      }
    }(watchedValue_c || (watchedValue_c = {}))
}
