/**
 * Module 31269 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

31269: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      ContextMenuManager: () => seriesBarFunction_s
    });
    var seriesBarFunction_s, seriesBarFunction_o = seriesBarFunction_i(12217),
      seriesBarFunction_n = seriesBarFunction_i(41706),
      seriesBarFunction_r = seriesBarFunction_i(87713);
    ! function(seriesBarFunction_e) {
      let seriesBarFunction_t = null,
        seriesBarFunction_s = null;
      const seriesBarFunction_a = [],
        seriesBarFunction_l = {
          createAction: seriesBarFunction_e => new seriesBarFunction_n.Action({
            actionId: "Chart.CustomActionId",
            options: seriesBarFunction_e
          }),
          createAsyncAction: seriesBarFunction_e => new seriesBarFunction_n.Action({
            actionId: "Chart.CustomActionId",
            options: {},
            optionsLoader: seriesBarFunction_e
          }),
          createSeparator: () => new seriesBarFunction_n.Separator
        };
      async function seriesBarFunction_c(seriesBarFunction_e, seriesBarFunction_n = {}, seriesBarFunction_r = {
        menuName: ""
      }, seriesBarFunction_c) {
        null !== seriesBarFunction_t && (seriesBarFunction_e = await seriesBarFunction_t(seriesBarFunction_e, seriesBarFunction_l, seriesBarFunction_r));
        let seriesBarFunction_d = null;
        const seriesBarFunction_u = () => {
          const seriesBarFunction_e = (0, seriesBarFunction_o.indexOf)(seriesBarFunction_a, (seriesBarFunction_e => seriesBarFunction_e.renderer === seriesBarFunction_d)); - 1 !== seriesBarFunction_e && seriesBarFunction_a.splice(seriesBarFunction_e, 1), void 0 !== seriesBarFunction_c && seriesBarFunction_c()
        };
        let _ = !1;
        if (null !== seriesBarFunction_s && (seriesBarFunction_d = await seriesBarFunction_s(seriesBarFunction_e, seriesBarFunction_r, seriesBarFunction_u)), seriesBarFunction_d) _ = !0, seriesBarFunction_h();
        else {
          const seriesBarFunction_t = await Promise.all([seriesBarFunction_i.seriesBarFunction_e(4109), seriesBarFunction_i.seriesBarFunction_e(1681), seriesBarFunction_i.seriesBarFunction_e(6032), seriesBarFunction_i.seriesBarFunction_e(3425), seriesBarFunction_i.seriesBarFunction_e(8260), seriesBarFunction_i.seriesBarFunction_e(1979), seriesBarFunction_i.seriesBarFunction_e(7780), seriesBarFunction_i
            .seriesBarFunction_e(1667), seriesBarFunction_i.seriesBarFunction_e(3290), seriesBarFunction_i.seriesBarFunction_e(2227), seriesBarFunction_i.seriesBarFunction_e(3179), seriesBarFunction_i.seriesBarFunction_e(6376), seriesBarFunction_i.seriesBarFunction_e(1584)
          ]).then(seriesBarFunction_i.bind(seriesBarFunction_i, 14474));
          seriesBarFunction_d = new seriesBarFunction_t.ContextMenuRenderer(seriesBarFunction_e, seriesBarFunction_n, seriesBarFunction_u, seriesBarFunction_h)
        }
        return seriesBarFunction_a.push({
          renderer: seriesBarFunction_d,
          isExternal: _
        }), seriesBarFunction_d
      }

      function seriesBarFunction_h() {
        (0, seriesBarFunction_r.globalCloseMenu)(), seriesBarFunction_a.forEach((seriesBarFunction_e => {
          seriesBarFunction_e.isExternal && seriesBarFunction_e.renderer.isShown() && seriesBarFunction_e.renderer.hide()
        }))
      }
      seriesBarFunction_e.createMenu = seriesBarFunction_c, seriesBarFunction_e.showMenu = function(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i = {}, seriesBarFunction_s, seriesBarFunction_o) {
        return seriesBarFunction_c(seriesBarFunction_e, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_o).then((seriesBarFunction_e => seriesBarFunction_e.show(seriesBarFunction_t)))
      }, seriesBarFunction_e.setCustomRendererFactory = function(seriesBarFunction_e) {
        seriesBarFunction_s = seriesBarFunction_e
      }, seriesBarFunction_e.setCustomItemsProcessor = function(seriesBarFunction_e) {
        seriesBarFunction_t = seriesBarFunction_e
      }, seriesBarFunction_e.hideAll = seriesBarFunction_h, seriesBarFunction_e.getShown = function() {
        for (let seriesBarFunction_e = 0; seriesBarFunction_e < seriesBarFunction_a.length; seriesBarFunction_e++)
          if (seriesBarFunction_a[seriesBarFunction_e].renderer.isShown()) return seriesBarFunction_a[seriesBarFunction_e].renderer;
        return null
      }
    }(seriesBarFunction_s || (seriesBarFunction_s = {}))