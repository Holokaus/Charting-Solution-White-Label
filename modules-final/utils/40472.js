/**
 * Module 40472 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40472: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      crosshairMoveEvent: () => bitmapCoordinatesPane_m,
      globalChangeEvent: () => bitmapCoordinatesPane_a,
      hoverChangeEvent: () => _,
      selectionChangeEvent: () => bitmapCoordinatesPane_d,
      sourceChangeEvent: () => bitmapCoordinatesPane_n,
      viewportChangeEvent: () => bitmapCoordinatesPane_c
    });
    var bitmapCoordinatesPane_s, bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(83873);

    function bitmapCoordinatesPane_n(bitmapCoordinatesPane_e) {
      return (0, bitmapCoordinatesPane_o.default)(bitmapCoordinatesPane_e) ? {
        type: "data-source-change",
        sourceId: bitmapCoordinatesPane_e
      } : {
        type: "data-source-change",
        ...bitmapCoordinatesPane_e
      }
    }! function(bitmapCoordinatesPane_e) {
      bitmapCoordinatesPane_e.DataSourceChange = "data-source-change", bitmapCoordinatesPane_e.ViewportChange = "viewport-change", bitmapCoordinatesPane_e.GlobalChange = "global-change",
        bitmapCoordinatesPane_e.SelectionChange = "selection-change", bitmapCoordinatesPane_e.HoverChange = "hover-change", bitmapCoordinatesPane_e.CrosshairMove = "crosshair-move"
    }(bitmapCoordinatesPane_s || (bitmapCoordinatesPane_s = {}));
    const bitmapCoordinatesPane_r = {
      type: "global-change"
    };

    function bitmapCoordinatesPane_a() {
      return bitmapCoordinatesPane_r
    }
    const bitmapCoordinatesPane_l = {
      type: "viewport-change"
    };

    function bitmapCoordinatesPane_c(bitmapCoordinatesPane_e) {
      return bitmapCoordinatesPane_e ? {
        type: "viewport-change",
        pane: bitmapCoordinatesPane_e
      } : bitmapCoordinatesPane_l
    }
    const bitmapCoordinatesPane_h = {
      type: "selection-change"
    };

    function bitmapCoordinatesPane_d() {
      return bitmapCoordinatesPane_h
    }
    const bitmapCoordinatesPane_u = {
      type: "hover-change"
    };

    function _() {
      return bitmapCoordinatesPane_u
    }
    const bitmapCoordinatesPane_p = {
      type: "crosshair-move"
    };

    function bitmapCoordinatesPane_m() {
      return bitmapCoordinatesPane_p
    }
}
