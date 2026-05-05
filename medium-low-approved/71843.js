/**
 * Module: 71843
 * Semantic: series
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.875Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 71843 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

71843: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      loadTheme: () => r
    });
    var series = i(22489),
      o = i(76422),
      newSeries = i(60973);
    async function r(exports, t) {
      const {
        themeName: i,
        standardTheme: r,
        syncState: a = !0,
        noUndo: l = !1,
        applyOverrides: c = !1,
        onlyActiveChart: h = !1
      } = t, d = await (r ? Promise.resolve((0, series.getStdTheme)(i)) : (0, series.getTheme)(i)), u = !r;
      if (void 0 !== d.content) {
        const t = !r || h;
        c && (void 0 !== (_ = d.content).chartProperties && (0, newSeries.applyDefaultsOverrides)(_.chartProperties),
            void 0 !== _.mainSourceProperties && (0, newSeries.applyDefaultsOverrides)(_.mainSourceProperties, void 0, !0,
              "mainSeriesProperties")),
          await exports.applyTheme({
            theme: d.content,
            onlyActiveChart: t,
            restoreNonThemeDefaults: u,
            themeName: i,
            standardTheme: r,
            syncState: a,
            noUndo: l
          }), (0, o.emit)("chart_theme_changed", i, r, t)
      }
      var _;
      return d
    }