/**
 * Module 44862 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

44862: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      applyOverridesToStudy: () => d,
      applyOverridesToStudyDefaults: () => u
    });
    var watchedValue_s = i(50151),
      o = i(4359),
      watchedValue_n = i(9343);
    const r = {
        line: o.LineStudyPlotStyle.Line,
        histogram: o.LineStudyPlotStyle.Histogram,
        cross: o.LineStudyPlotStyle.Cross,
        area: o.LineStudyPlotStyle.Area,
        columns: o.LineStudyPlotStyle.Columns,
        circles: o.LineStudyPlotStyle.Circles,
        line_with_breaks: o.LineStudyPlotStyle.LineWithBreaks,
        area_with_breaks: o.LineStudyPlotStyle.AreaWithBreaks,
        step_line: o.LineStudyPlotStyle.StepLine,
        step_line_with_breaks: o.LineStudyPlotStyle.StepLineWithBreaks,
        step_line_with_diamonds: o.LineStudyPlotStyle.StepLineWithDiamonds
      },
      watchedValue_a = (0, watchedValue_n.getLogger)("Chart.Model.StudyPropertiesOverrider");
    var l, c;

    function h(watchedValue_e, watchedValue_t, i, watchedValue_s) {
      const o = i.split(".");
      if (0 === o.length || 0 === o[0].length) return;
      const watchedValue_n = function(watchedValue_e) {
          const watchedValue_t = watchedValue_e.split(":");
          return {
            name: watchedValue_t[0],
            type: 2 === watchedValue_t.length ? watchedValue_t[1] : null
          }
        }(o[0]),
        r = watchedValue_n.name,
        h = watchedValue_n.type,
        d = null !== h,
        u = !d || "band" === h,
        _ = !d || "area" === h,
        p = !d || "input" === h,
        m = !d || "plot" === h ? c.getPlotIdByTitle(watchedValue_e, r) : null,
        g = u ? c.getBandIndexByName(watchedValue_e, r) : null,
        f = _ ? c.getFilledAreaIdByTitle(watchedValue_e, r) : null,
        y = p ? c.getInputByName(watchedValue_e, r) : null,
        v = watchedValue_t.hasOwnProperty(r);
      if ((null !== m ? 1 : 0) + (null !== g ? 1 : 0) + (null !== f ? 1 : 0) + (null !== y ? 1 : 0) + (v ? 1 : 0) > 1)
        return void watchedValue_a.logWarn(`Study '${watchedValue_e.description}' has ambiguous identifier '${r}'`);
      const S = o[1];
      if (null !== m) {
        if (1 === o.length) return void watchedValue_a.logWarn(
          `Path of sub-property of '${r}' plot for study '${watchedValue_e.description}' must be not empty`);
        const i = o.slice(1);
        l.applyPlotProperty(watchedValue_e, watchedValue_t, m, i, watchedValue_s)
      } else if (null !== y) l.applyInputValue(watchedValue_t, y, watchedValue_s);
      else if (null !== g) {
        if (void 0 === S) return void watchedValue_a.logWarn(
        `Property name of '${r}' band for study '${watchedValue_e.description}' must be set`);
        l.applyBandProperty(watchedValue_t, g, S, watchedValue_s)
      } else if (null !== f) {
        if (void 0 === S) return void watchedValue_a.logWarn(
        `Property name of '${r}' area for study '${watchedValue_e.description}' must be set`);
        l.applyFilledAreaProperty(watchedValue_t, f, S, watchedValue_s)
      } else v ? l.setRootProperty(watchedValue_t, o, watchedValue_s) : watchedValue_a.logWarn(`Study '${watchedValue_e.description}' has no plot or input '${r}'`)
    }

    function d(watchedValue_e, watchedValue_t) {
      const i = watchedValue_e.properties(),
        watchedValue_s = i.state();
      for (const i in watchedValue_t) watchedValue_t.hasOwnProperty(i) && h(watchedValue_e.metaInfo(), watchedValue_s, i, watchedValue_t[i]);
      i.mergeAndFire(watchedValue_s)
    }

    function u(watchedValue_e, watchedValue_t, i) {
      for (const watchedValue_s in watchedValue_e) {
        if (!watchedValue_e.hasOwnProperty(watchedValue_s)) continue;
        const o = watchedValue_s.indexOf(".");
        if (-1 === o) continue;
        const watchedValue_n = watchedValue_s.substring(0, o),
          r = c.getMetaInfoByDescription(watchedValue_t, watchedValue_n);
        if (null === r) {
          watchedValue_a.logWarn(`There is no such study ${watchedValue_n}`);
          continue
        }
        const l = i(r);
        null !== l ? h(r, l, watchedValue_s.substring(o + 1), watchedValue_e[watchedValue_s]) : watchedValue_a.logWarn(`Cannot apply overrides for study ${watchedValue_n}`)
      }
    }! function(watchedValue_e) {
      watchedValue_e.applyPlotProperty = function(watchedValue_e, watchedValue_t, i, watchedValue_n, l) {
        if (void 0 === watchedValue_t.styles) return void watchedValue_a.logWarn("Study does not have styles");
        const c = watchedValue_n[0];
        if ("color" === c) {
          const r = function(watchedValue_e, watchedValue_t, i) {
            if (void 0 === watchedValue_e.plots) return null;
            for (const watchedValue_s of watchedValue_e.plots) {
              if (!(0, o.isPaletteColorerPlot)(watchedValue_s) || void 0 === watchedValue_t.palettes) continue;
              const watchedValue_e = watchedValue_t.palettes[watchedValue_s.palette];
              if (watchedValue_s.target === i && void 0 !== watchedValue_e) return watchedValue_e
            }
            return null
          }(watchedValue_e, watchedValue_t, i);
          return void
          function(watchedValue_e, watchedValue_t, i, o, watchedValue_n) {
            void 0 !== watchedValue_e.styles ? null === watchedValue_t && !isNaN(o) && o > 0 ? watchedValue_a.logWarn(
              `Study plot does not have color #${o}`) : ((0 === o || isNaN(o)) && ((0, watchedValue_s.ensureDefined)(watchedValue_e.styles[i])
                .color = String(watchedValue_n), o = 0), null !== watchedValue_t && ((0, watchedValue_s.ensureDefined)(watchedValue_t.colors?.[o]).color = String(watchedValue_n))) : watchedValue_a
              .logWarn("Study does not have styles")
          }(watchedValue_t, r, i, watchedValue_n.length > 1 ? parseInt(watchedValue_n[1]) : NaN, l)
        }
        const h = watchedValue_t.styles[i];
        if (void 0 !== h && h.hasOwnProperty(c)) {
          if ("plottype" === c) {
            const watchedValue_e = r[String(l)];
            if (void 0 === watchedValue_e) return void watchedValue_a.logWarn(`Unsupported plot type for plot: ${l}`);
            l = watchedValue_e
          }
          h[c] = l
        } else watchedValue_a.logWarn(`Study plot does not have property '${c}'`)
      }, watchedValue_e.applyBandProperty = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        if (void 0 === watchedValue_e.bands) return void watchedValue_a.logWarn("Study does not have bands");
        const o = watchedValue_e.bands[watchedValue_t];
        if (void 0 !== o && o.hasOwnProperty(i)) {
          if ("plottype" === i) {
            const watchedValue_e = r[String(watchedValue_s)];
            if (void 0 === watchedValue_e) return void watchedValue_a.logWarn(`Unsupported plot type for band: ${watchedValue_s}`);
            watchedValue_s = watchedValue_e
          }
          o[i] = watchedValue_s
        } else watchedValue_a.logWarn(`Study band does not have property '${i}'`)
      }, watchedValue_e.applyFilledAreaProperty = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        if (void 0 === watchedValue_e.filledAreasStyle) return void watchedValue_a.logWarn("Study does not have areas");
        const o = watchedValue_e.filledAreasStyle[watchedValue_t];
        void 0 !== o && o.hasOwnProperty(i) ? o[i] = watchedValue_s : watchedValue_a.logWarn(`Study area does not have property '${i}'`)
      }, watchedValue_e.applyInputValue = function(watchedValue_e, watchedValue_t, i) {
        void 0 !== watchedValue_e.inputs && watchedValue_e.inputs.hasOwnProperty(watchedValue_t) ? watchedValue_e.inputs[watchedValue_t] = i : watchedValue_a.logWarn(
          `Study does not have input '${watchedValue_t}'`)
      }, watchedValue_e.setRootProperty = function(watchedValue_e, watchedValue_t, i) {
        if (0 === watchedValue_t.length) return;
        let watchedValue_s = watchedValue_e;
        for (const watchedValue_e of watchedValue_t.slice(0, -1)) {
          if (null == watchedValue_s || !watchedValue_s.hasOwnProperty(watchedValue_e)) break;
          watchedValue_s = watchedValue_s[watchedValue_e]
        }
        const o = watchedValue_t[watchedValue_t.length - 1];
        null != watchedValue_s && watchedValue_s.hasOwnProperty(o) ? watchedValue_s[o] = i : watchedValue_a.logWarn(`Study does not have property ${watchedValue_t.join(".")}`)
      }
    }(l || (l = {})),
    function(watchedValue_e) {
      watchedValue_e.getInputByName = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.inputs) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const i of watchedValue_e.inputs)
          if (i.name.toLowerCase() === watchedValue_t) return i.id;
        return null
      }, watchedValue_e.getPlotIdByTitle = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.styles) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const i in watchedValue_e.styles) {
          const watchedValue_s = watchedValue_e.styles[i];
          if ((void 0 !== watchedValue_s && void 0 !== watchedValue_s.title ? watchedValue_s.title : i).toLowerCase() === watchedValue_t) return i
        }
        return null
      }, watchedValue_e.getFilledAreaIdByTitle = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.filledAreas) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const i of watchedValue_e.filledAreas)
          if (i.title.toLowerCase() === watchedValue_t) return i.id;
        return null
      }, watchedValue_e.getBandIndexByName = function(watchedValue_e, watchedValue_t) {
        if (void 0 === watchedValue_e.bands) return null;
        watchedValue_t = watchedValue_t.toLowerCase();
        for (let i = 0; i < watchedValue_e.bands.length; ++i)
          if (watchedValue_e.bands[i].name.toLowerCase() === watchedValue_t) return i;
        return null
      }, watchedValue_e.getMetaInfoByDescription = function(watchedValue_e, watchedValue_t) {
        watchedValue_t = watchedValue_t.toLowerCase();
        for (const i of watchedValue_e)
          if (i.description.toLowerCase() === watchedValue_t || i.shortDescription.toLowerCase() === watchedValue_t) return i;
        return null
      }
    }(c || (c = {}))