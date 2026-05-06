/**
 * Module 40472 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40472: (e, t, i) => {
    "use strict";
    i.d(t, {
      crosshairMoveEvent: () => m,
      globalChangeEvent: () => a,
      hoverChangeEvent: () => _,
      selectionChangeEvent: () => d,
      sourceChangeEvent: () => n,
      viewportChangeEvent: () => c
    });
    var s, o = i(83873);

    function n(e) {
      return (0, o.default)(e) ? {
        type: "data-source-change",
        sourceId: e
      } : {
        type: "data-source-change",
        ...e
      }
    }! function(e) {
      e.DataSourceChange = "data-source-change", e.ViewportChange = "viewport-change", e.GlobalChange = "global-change",
        e.SelectionChange = "selection-change", e.HoverChange = "hover-change", e.CrosshairMove = "crosshair-move"
    }(s || (s = {}));
    const r = {
      type: "global-change"
    };

    function a() {
      return r
    }
    const l = {
      type: "viewport-change"
    };

    function c(e) {
      return e ? {
        type: "viewport-change",
        pane: e
      } : l
    }
    const h = {
      type: "selection-change"
    };

    function d() {
      return h
    }
    const u = {
      type: "hover-change"
    };

    function _() {
      return u
    }
    const p = {
      type: "crosshair-move"
    };

    function m() {
      return p
    }