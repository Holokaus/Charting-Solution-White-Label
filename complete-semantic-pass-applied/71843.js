/**
 * Module 71843 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

71843: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_r(seriesBarFunction_t), seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      loadTheme: () => seriesBarFunction_r
    });
    var seriesBarFunction_s = seriesBarFunction_i(22489),
      seriesBarFunction_o = seriesBarFunction_i(76422),
      seriesBarFunction_n = seriesBarFunction_i(60973);
    async function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t) {
      const {
        themeName: seriesBarFunction_i,
        standardTheme: seriesBarFunction_r,
        syncState: seriesBarFunction_a = !0,
        noUndo: seriesBarFunction_l = !1,
        applyOverrides: seriesBarFunction_c = !1,
        onlyActiveChart: seriesBarFunction_h = !1
      } = seriesBarFunction_t, seriesBarFunction_d = await (seriesBarFunction_r ? Promise.resolve((0, seriesBarFunction_s.getStdTheme)(seriesBarFunction_i)) : (0, seriesBarFunction_s.getTheme)(seriesBarFunction_i)), seriesBarFunction_u = !seriesBarFunction_r;
      if (void 0 !== seriesBarFunction_d.content) {
        const seriesBarFunction_t = !seriesBarFunction_r || seriesBarFunction_h;
        seriesBarFunction_c && (void 0 !== (_ = seriesBarFunction_d.content).chartProperties && (0, seriesBarFunction_n.applyDefaultsOverrides)(_.chartProperties),
            void 0 !== _.mainSourceProperties && (0, seriesBarFunction_n.applyDefaultsOverrides)(_.mainSourceProperties, void 0, !0,
              "mainSeriesProperties")),
          await seriesBarFunction_e.applyTheme({
            theme: seriesBarFunction_d.content,
            onlyActiveChart: seriesBarFunction_t,
            restoreNonThemeDefaults: seriesBarFunction_u,
            themeName: seriesBarFunction_i,
            standardTheme: seriesBarFunction_r,
            syncState: seriesBarFunction_a,
            noUndo: seriesBarFunction_l
          }), (0, seriesBarFunction_o.emit)("chart_theme_changed", seriesBarFunction_i, seriesBarFunction_r, seriesBarFunction_t)
      }
      var _;
      return seriesBarFunction_d
    }