/**
 * Module 71843 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

71843: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      loadTheme: () => r
    });
    var modes = i(22489),
      o = i(76422),
      n = i(60973);
    async function r(exports, t) {
      const {
        themeName: i,
        standardTheme: r,
        syncState: seriesBarFunction_a = !0,
        noUndo: l = !1,
        applyOverrides: c = !1,
        onlyActiveChart: h = !1
      } = t, d = await (r ? Promise.resolve((0, modes.getStdTheme)(i)) : (0, modes.getTheme)(i)), u = !r;
      if (void 0 !== d.content) {
        const t = !r || h;
        c && (void 0 !== (_ = d.content).chartProperties && (0, n.applyDefaultsOverrides)(_.chartProperties),
            void 0 !== _.mainSourceProperties && (0, n.applyDefaultsOverrides)(_.mainSourceProperties, void 0, !0,
              "mainSeriesProperties")),
          await exports.applyTheme({
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