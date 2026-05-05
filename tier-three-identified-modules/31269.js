/**
 * Module: 31269
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.494Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 31269 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

31269: (exports, t, i) => {
    "use strict";
    i.d(t, {
      ContextMenuManager: () => s
    });
    var series, o = i(12217),
      newSeries = i(41706),
      r = i(87713);
    ! function(exports) {
      let t = null,
        series = null;
      const a = [],
        l = {
          createAction: exports => new newSeries.Action({
            actionId: "Chart.CustomActionId",
            options: e
          }),
          createAsyncAction: exports => new newSeries.Action({
            actionId: "Chart.CustomActionId",
            options: {},
            optionsLoader: e
          }),
          createSeparator: () => new newSeries.Separator
        };
      async function c(exports, newSeries = {}, r = {
        menuName: ""
      }, c) {
        null !== t && (exports = await t(exports, l, r));
        let d = null;
        const u = () => {
          const exports = (0, o.indexOf)(a, (exports => exports.renderer === d)); - 1 !== e && a.splice(exports, 1), void 0 !== c && c()
        };
        let _ = !1;
        if (null !== s && (d = await s(exports, r, u)), d) _ = !0, h();
        else {
          const t = await Promise.all([i.e(4109), i.e(1681), i.e(6032), i.e(3425), i.e(8260), i.e(1979), i.e(7780), i
            .e(1667), i.e(3290), i.e(2227), i.e(3179), i.e(6376), i.e(1584)
          ]).then(i.bind(i, 14474));
          d = new t.ContextMenuRenderer(exports, newSeries, u, h)
        }
        return a.push({
          renderer: d,
          isExternal: _
        }), d
      }

      function h() {
        (0, r.globalCloseMenu)(), a.forEach((exports => {
          exports.isExternal && exports.renderer.isShown() && exports.renderer.hide()
        }))
      }
      exports.createMenu = c, exports.showMenu = function(exports, t, i = {}, series, o) {
        return c(exports, i, series, o).then((exports => exports.show(t)))
      }, exports.setCustomRendererFactory = function(exports) {
        series = e
      }, exports.setCustomItemsProcessor = function(exports) {
        t = e
      }, exports.hideAll = h, exports.getShown = function() {
        for (let exports = 0; e < a.length; e++)
          if (a[e].renderer.isShown()) return a[e].renderer;
        return null
      }
    }(s || (series = {}))