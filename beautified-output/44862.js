/**
 * Module 44862 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

44862: (e, t, i) => {
    "use strict";
    i.d(t, {
      applyOverridesToStudy: () => d,
      applyOverridesToStudyDefaults: () => u
    });
    var s = i(50151),
      o = i(4359),
      n = i(9343);
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
      a = (0, n.getLogger)("Chart.Model.StudyPropertiesOverrider");
    var l, c;

    function h(e, t, i, s) {
      const o = i.split(".");
      if (0 === o.length || 0 === o[0].length) return;
      const n = function(e) {
          const t = e.split(":");
          return {
            name: t[0],
            type: 2 === t.length ? t[1] : null
          }
        }(o[0]),
        r = n.name,
        h = n.type,
        d = null !== h,
        u = !d || "band" === h,
        _ = !d || "area" === h,
        p = !d || "input" === h,
        m = !d || "plot" === h ? c.getPlotIdByTitle(e, r) : null,
        g = u ? c.getBandIndexByName(e, r) : null,
        f = _ ? c.getFilledAreaIdByTitle(e, r) : null,
        y = p ? c.getInputByName(e, r) : null,
        v = t.hasOwnProperty(r);
      if ((null !== m ? 1 : 0) + (null !== g ? 1 : 0) + (null !== f ? 1 : 0) + (null !== y ? 1 : 0) + (v ? 1 : 0) > 1)
        return void a.logWarn(`Study '${e.description}' has ambiguous identifier '${r}'`);
      const S = o[1];
      if (null !== m) {
        if (1 === o.length) return void a.logWarn(
          `Path of sub-property of '${r}' plot for study '${e.description}' must be not empty`);
        const i = o.slice(1);
        l.applyPlotProperty(e, t, m, i, s)
      } else if (null !== y) l.applyInputValue(t, y, s);
      else if (null !== g) {
        if (void 0 === S) return void a.logWarn(
        `Property name of '${r}' band for study '${e.description}' must be set`);
        l.applyBandProperty(t, g, S, s)
      } else if (null !== f) {
        if (void 0 === S) return void a.logWarn(
        `Property name of '${r}' area for study '${e.description}' must be set`);
        l.applyFilledAreaProperty(t, f, S, s)
      } else v ? l.setRootProperty(t, o, s) : a.logWarn(`Study '${e.description}' has no plot or input '${r}'`)
    }

    function d(e, t) {
      const i = e.properties(),
        s = i.state();
      for (const i in t) t.hasOwnProperty(i) && h(e.metaInfo(), s, i, t[i]);
      i.mergeAndFire(s)
    }

    function u(e, t, i) {
      for (const s in e) {
        if (!e.hasOwnProperty(s)) continue;
        const o = s.indexOf(".");
        if (-1 === o) continue;
        const n = s.substring(0, o),
          r = c.getMetaInfoByDescription(t, n);
        if (null === r) {
          a.logWarn(`There is no such study ${n}`);
          continue
        }
        const l = i(r);
        null !== l ? h(r, l, s.substring(o + 1), e[s]) : a.logWarn(`Cannot apply overrides for study ${n}`)
      }
    }! function(e) {
      e.applyPlotProperty = function(e, t, i, n, l) {
        if (void 0 === t.styles) return void a.logWarn("Study does not have styles");
        const c = n[0];
        if ("color" === c) {
          const r = function(e, t, i) {
            if (void 0 === e.plots) return null;
            for (const s of e.plots) {
              if (!(0, o.isPaletteColorerPlot)(s) || void 0 === t.palettes) continue;
              const e = t.palettes[s.palette];
              if (s.target === i && void 0 !== e) return e
            }
            return null
          }(e, t, i);
          return void
          function(e, t, i, o, n) {
            void 0 !== e.styles ? null === t && !isNaN(o) && o > 0 ? a.logWarn(
              `Study plot does not have color #${o}`) : ((0 === o || isNaN(o)) && ((0, s.ensureDefined)(e.styles[i])
                .color = String(n), o = 0), null !== t && ((0, s.ensureDefined)(t.colors?.[o]).color = String(n))) : a
              .logWarn("Study does not have styles")
          }(t, r, i, n.length > 1 ? parseInt(n[1]) : NaN, l)
        }
        const h = t.styles[i];
        if (void 0 !== h && h.hasOwnProperty(c)) {
          if ("plottype" === c) {
            const e = r[String(l)];
            if (void 0 === e) return void a.logWarn(`Unsupported plot type for plot: ${l}`);
            l = e
          }
          h[c] = l
        } else a.logWarn(`Study plot does not have property '${c}'`)
      }, e.applyBandProperty = function(e, t, i, s) {
        if (void 0 === e.bands) return void a.logWarn("Study does not have bands");
        const o = e.bands[t];
        if (void 0 !== o && o.hasOwnProperty(i)) {
          if ("plottype" === i) {
            const e = r[String(s)];
            if (void 0 === e) return void a.logWarn(`Unsupported plot type for band: ${s}`);
            s = e
          }
          o[i] = s
        } else a.logWarn(`Study band does not have property '${i}'`)
      }, e.applyFilledAreaProperty = function(e, t, i, s) {
        if (void 0 === e.filledAreasStyle) return void a.logWarn("Study does not have areas");
        const o = e.filledAreasStyle[t];
        void 0 !== o && o.hasOwnProperty(i) ? o[i] = s : a.logWarn(`Study area does not have property '${i}'`)
      }, e.applyInputValue = function(e, t, i) {
        void 0 !== e.inputs && e.inputs.hasOwnProperty(t) ? e.inputs[t] = i : a.logWarn(
          `Study does not have input '${t}'`)
      }, e.setRootProperty = function(e, t, i) {
        if (0 === t.length) return;
        let s = e;
        for (const e of t.slice(0, -1)) {
          if (null == s || !s.hasOwnProperty(e)) break;
          s = s[e]
        }
        const o = t[t.length - 1];
        null != s && s.hasOwnProperty(o) ? s[o] = i : a.logWarn(`Study does not have property ${t.join(".")}`)
      }
    }(l || (l = {})),
    function(e) {
      e.getInputByName = function(e, t) {
        if (void 0 === e.inputs) return null;
        t = t.toLowerCase();
        for (const i of e.inputs)
          if (i.name.toLowerCase() === t) return i.id;
        return null
      }, e.getPlotIdByTitle = function(e, t) {
        if (void 0 === e.styles) return null;
        t = t.toLowerCase();
        for (const i in e.styles) {
          const s = e.styles[i];
          if ((void 0 !== s && void 0 !== s.title ? s.title : i).toLowerCase() === t) return i
        }
        return null
      }, e.getFilledAreaIdByTitle = function(e, t) {
        if (void 0 === e.filledAreas) return null;
        t = t.toLowerCase();
        for (const i of e.filledAreas)
          if (i.title.toLowerCase() === t) return i.id;
        return null
      }, e.getBandIndexByName = function(e, t) {
        if (void 0 === e.bands) return null;
        t = t.toLowerCase();
        for (let i = 0; i < e.bands.length; ++i)
          if (e.bands[i].name.toLowerCase() === t) return i;
        return null
      }, e.getMetaInfoByDescription = function(e, t) {
        t = t.toLowerCase();
        for (const i of e)
          if (i.description.toLowerCase() === t || i.shortDescription.toLowerCase() === t) return i;
        return null
      }
    }(c || (c = {}))