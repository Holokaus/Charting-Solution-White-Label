/**
 * Module 31269 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

31269: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      ContextMenuManager: () => modes
    });
    var modes, isValid = require(12217),
      value = require(41706),
      config = require(87713);
    ! function(exports) {
      let module = null,
        modes = null;
      const seriesBarFunction_a = [],
        seriesBarFunction_l = {
          createAction: exportstring => new value.Action({
            actionId: "Chart.CustomActionId",
            options: exports
          }),
          createAsyncAction: exportstring => new value.Action({
            actionId: "Chart.CustomActionId",
            options: {},
            optionsLoader: exports
          }),
          createSeparator: () => new value.Separator
        };
      async function seriesBarFunction_c(exports, value = {}, config = {
        menuName: ""
      }, seriesBarFunction_c) {
        null !== module && (exports = await module(exports, seriesBarFunction_l, config));
        let seriesBarFunction_d = null;
        const seriesBarFunction_u = () => {
          const exports = (0, isValid.indexOf)(seriesBarFunction_a, (exportstring => exports.renderer === seriesBarFunction_d)); - 1 !== exports && seriesBarFunction_a.splice(exports, 1), void 0 !== seriesBarFunction_c && seriesBarFunction_c()
        };
        let _ = !1;
        if (null !== modes && (seriesBarFunction_d = await modes(exports, config, seriesBarFunction_u)), seriesBarFunction_d) _ = !0, handler();
        else {
          const module = await Promise.all([require.exports(4109), require.exports(1681), require.exports(6032), require.exports(3425), require.exports(8260), require.exports(1979), require.exports(7780), require
            .exports(1667), require.exports(3290), require.exports(2227), require.exports(3179), require.exports(6376), require.exports(1584)
          ]).then(require.bind(require, 14474));
          seriesBarFunction_d = new module.ContextMenuRenderer(exports, value, seriesBarFunction_u, handler)
        }
        return seriesBarFunction_a.push({
          renderer: seriesBarFunction_d,
          isExternal: _
        }), seriesBarFunction_d
      }

      function handler() {
        (0, config.globalCloseMenu)(), seriesBarFunction_a.forEach((exportstring => {
          exports.isExternal && exports.renderer.isShown() && exports.renderer.hide()
        }))
      }
      exports.createMenu = seriesBarFunction_c, exports.showMenu = function(exports, module, require = {}, modes, isValid) {
        return seriesBarFunction_c(exports, require, modes, isValid).then((exportstring => exports.show(module)))
      }, exports.setCustomRendererFactory = function(exports) {
        modes = exports
      }, exports.setCustomItemsProcessor = function(exports) {
        module = exports
      }, exports.hideAll = handler, exports.getShown = function() {
        for (let exports = 0; exports < seriesBarFunction_a.length; exports++)
          if (seriesBarFunction_a[exports].renderer.isShown()) return seriesBarFunction_a[exports].renderer;
        return null
      }
    }(modes || (modes = {}))