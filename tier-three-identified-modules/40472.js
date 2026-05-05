/**
 * Module: 40472
 * Semantic: dataSource
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.579Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 40472 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40472: (exports, t, i) => {
    "use strict";
    i.d(t, {
      crosshairMoveEvent: () => m,
      globalChangeEvent: () => a,
      hoverChangeEvent: () => _,
      selectionChangeEvent: () => data,
      sourceChangeEvent: () => n,
      viewportChangeEvent: () => c
    });
    var source, o = i(83873);

    function n(exports) {
      return (0, o.default)(exports) ? {
        type: "data-source-change",
        sourceId: e
      } : {
        type: "data-source-change",
        ...e
      }
    }! function(exports) {
      exports.DataSourceChange = "data-source-change", exports.ViewportChange = "viewport-change", exports.GlobalChange = "global-change",
        exports.SelectionChange = "selection-change", exports.HoverChange = "hover-change", exports.CrosshairMove = "crosshair-move"
    }(s || (source = {}));
    const r = {
      type: "global-change"
    };

    function a() {
      return r
    }
    const l = {
      type: "viewport-change"
    };

    function c(exports) {
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