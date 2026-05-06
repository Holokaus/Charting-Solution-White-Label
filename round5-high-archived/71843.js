/**
 * Module 71843 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

71843: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      loadTheme: () => r
    });
    var seriesBarFunction_s = i(22489),
      o = i(76422),
      n = i(60973);
    async function r(seriesBarFunction_e, t) {
      const {
        themeName: i,
        standardTheme: r,
        syncState: seriesBarFunction_a = !0,
        noUndo: l = !1,
        applyOverrides: c = !1,
        onlyActiveChart: h = !1
      } = t, d = await (r ? Promise.resolve((0, seriesBarFunction_s.getStdTheme)(i)) : (0, seriesBarFunction_s.getTheme)(i)), u = !r;
      if (void 0 !== d.content) {
        const t = !r || h;
        c && (void 0 !== (_ = d.content).chartProperties && (0, n.applyDefaultsOverrides)(_.chartProperties),
            void 0 !== _.mainSourceProperties && (0, n.applyDefaultsOverrides)(_.mainSourceProperties, void 0, !0,
              "mainSeriesProperties")),
          await seriesBarFunction_e.applyTheme({
            theme: d.content,
            onlyActiveChart: t,
            restoreNonThemeDefaults: u,
            themeName: i,
            standardTheme: r,
            syncState: seriesBarFunction_a,
            noUndo: l
          }), (0, o.emit)("chart_theme_changed", i, r, t)
      }
      var _;
      return d
    }