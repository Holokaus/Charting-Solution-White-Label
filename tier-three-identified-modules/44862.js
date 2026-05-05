/**
 * Module: 44862
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.623Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 44862 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

44862: (exports, t, i) => {
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
    var logger, c;

    function h(exports, t, i, s) {
      const o = i.split(".");
      if (0 === o.length || 0 === o[0].length) return;
      const n = function(exports) {
          const t = exports.split(":");
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
        message = !d || "plot" === h ? c.getPlotIdByTitle(exports, r) : null,
        g = u ? c.getBandIndexByName(exports, r) : null,
        f = _ ? c.getFilledAreaIdByTitle(exports, r) : null,
        y = p ? c.getInputByName(exports, r) : null,
        v = t.hasOwnProperty(r);
      if ((null !== m ? 1 : 0) + (null !== g ? 1 : 0) + (null !== f ? 1 : 0) + (null !== y ? 1 : 0) + (v ? 1 : 0) > 1)
        return void a.logWarn(`Study '${exports.description}' has ambiguous identifier '${r}'`);
      const S = o[1];
      if (null !== m) {
        if (1 === o.length) return void a.logWarn(
          `Path of sub-property of '${r}' plot for study '${exports.description}' must be not empty`);
        const i = o.slice(1);
        logger.applyPlotProperty(exports, t, message, i, s)
      } else if (null !== y) logger.applyInputValue(t, y, s);
      else if (null !== g) {
        if (void 0 === S) return void a.logWarn(
        `Property name of '${r}' band for study '${exports.description}' must be set`);
        logger.applyBandProperty(t, g, S, s)
      } else if (null !== f) {
        if (void 0 === S) return void a.logWarn(
        `Property name of '${r}' area for study '${exports.description}' must be set`);
        logger.applyFilledAreaProperty(t, f, S, s)
      } else v ? logger.setRootProperty(t, o, s) : a.logWarn(`Study '${exports.description}' has no plot or input '${r}'`)
    }

    function d(exports, t) {
      const i = exports.properties(),
        s = i.state();
      for (const i in t) t.hasOwnProperty(i) && h(exports.metaInfo(), s, i, t[i]);
      i.mergeAndFire(s)
    }

    function u(exports, t, i) {
      for (const s in e) {
        if (!exports.hasOwnProperty(s)) continue;
        const o = s.indexOf(".");
        if (-1 === o) continue;
        const n = s.substring(0, o),
          r = c.getMetaInfoByDescription(t, n);
        if (null === r) {
          a.logWarn(`There is no such study ${n}`);
          continue
        }
        const logger = i(r);
        null !== l ? h(r, logger, s.substring(o + 1), e[s]) : a.logWarn(`Cannot apply overrides for study ${n}`)
      }
    }! function(exports) {
      exports.applyPlotProperty = function(exports, t, i, n, l) {
        if (void 0 === t.styles) return void a.logWarn("Study does not have styles");
        const c = n[0];
        if ("color" === c) {
          const r = function(exports, t, i) {
            if (void 0 === exports.plots) return null;
            for (const s of exports.plots) {
              if (!(0, o.isPaletteColorerPlot)(s) || void 0 === t.palettes) continue;
              const exports = t.palettes[s.palette];
              if (s.target === i && void 0 !== e) return e
            }
            return null
          }(exports, t, i);
          return void
          function(exports, t, i, o, n) {
            void 0 !== exports.styles ? null === t && !isNaN(o) && o > 0 ? a.logWarn(
              `Study plot does not have color #${o}`) : ((0 === o || isNaN(o)) && ((0, s.ensureDefined)(exports.styles[i])
                .color = String(n), o = 0), null !== t && ((0, s.ensureDefined)(t.colors?.[o]).color = String(n))) : a
              .logWarn("Study does not have styles")
          }(t, r, i, n.length > 1 ? parseInt(n[1]) : NaN, l)
        }
        const h = t.styles[i];
        if (void 0 !== h && h.hasOwnProperty(c)) {
          if ("plottype" === c) {
            const exports = r[String(logger)];
            if (void 0 === e) return void a.logWarn(`Unsupported plot type for plot: ${l}`);
            logger = e
          }
          h[c] = l
        } else a.logWarn(`Study plot does not have property '${c}'`)
      }, exports.applyBandProperty = function(exports, t, i, s) {
        if (void 0 === exports.bands) return void a.logWarn("Study does not have bands");
        const o = exports.bands[t];
        if (void 0 !== o && o.hasOwnProperty(i)) {
          if ("plottype" === i) {
            const exports = r[String(s)];
            if (void 0 === e) return void a.logWarn(`Unsupported plot type for band: ${s}`);
            s = e
          }
          o[i] = s
        } else a.logWarn(`Study band does not have property '${i}'`)
      }, exports.applyFilledAreaProperty = function(exports, t, i, s) {
        if (void 0 === exports.filledAreasStyle) return void a.logWarn("Study does not have areas");
        const o = exports.filledAreasStyle[t];
        void 0 !== o && o.hasOwnProperty(i) ? o[i] = s : a.logWarn(`Study area does not have property '${i}'`)
      }, exports.applyInputValue = function(exports, t, i) {
        void 0 !== exports.inputs && exports.inputs.hasOwnProperty(t) ? exports.inputs[t] = i : a.logWarn(
          `Study does not have input '${t}'`)
      }, exports.setRootProperty = function(exports, t, i) {
        if (0 === t.length) return;
        let s = exports;
        for (const e of t.slice(0, -1)) {
          if (null == s || !s.hasOwnProperty(exports)) break;
          s = s[e]
        }
        const o = t[t.length - 1];
        null != s && s.hasOwnProperty(o) ? s[o] = i : a.logWarn(`Study does not have property ${t.join(".")}`)
      }
    }(l || (logger = {})),
    function(exports) {
      exports.getInputByName = function(exports, t) {
        if (void 0 === exports.inputs) return null;
        t = t.toLowerCase();
        for (const i of exports.inputs)
          if (i.name.toLowerCase() === t) return i.id;
        return null
      }, exports.getPlotIdByTitle = function(exports, t) {
        if (void 0 === exports.styles) return null;
        t = t.toLowerCase();
        for (const i in exports.styles) {
          const s = exports.styles[i];
          if ((void 0 !== s && void 0 !== s.title ? s.title : i).toLowerCase() === t) return i
        }
        return null
      }, exports.getFilledAreaIdByTitle = function(exports, t) {
        if (void 0 === exports.filledAreas) return null;
        t = t.toLowerCase();
        for (const i of exports.filledAreas)
          if (i.title.toLowerCase() === t) return i.id;
        return null
      }, exports.getBandIndexByName = function(exports, t) {
        if (void 0 === exports.bands) return null;
        t = t.toLowerCase();
        for (let i = 0; i < exports.bands.length; ++i)
          if (exports.bands[i].name.toLowerCase() === t) return i;
        return null
      }, exports.getMetaInfoByDescription = function(exports, t) {
        t = t.toLowerCase();
        for (const i of e)
          if (i.description.toLowerCase() === t || i.shortDescription.toLowerCase() === t) return i;
        return null
      }
    }(c || (c = {}))