/**
 * Module 71843 - Auto-beautified from TradingView webpack bundle
 *
 * @module 71843
 * @date 2026-04-23
 * @size 733 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22489, 60973, 76422
 *
 * Exports:
 *   - loadTheme (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.r(t), i.d(t, {
  loadTheme: () => r
});
var s = i(22489),
  o = i(76422),
  n = i(60973);
async function r(e, t) {
    const {
      themeName: i,
      standardTheme: r,
      syncState: a = !0,
      noUndo: l = !1,
      applyOverrides: c = !1,
      onlyActiveChart: h = !1
    } = t, d = await (r ? Promise.resolve((0, s.getStdTheme)(i)) : (0, s.getTheme)(i)), u = !r;
    if (void 0 !== d.content) {
      const t = !r || h;
      c && (void 0 !== (_ = d.content).chartProperties && (0, n.applyDefaultsOverrides)(_.chartProperties), void 0 !== _.mainSourceProperties && (0, n.applyDefaultsOverrides)(_.mainSourceProperties, void 0, !0, "mainSeriesProperties")),
        await e.applyTheme({
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
