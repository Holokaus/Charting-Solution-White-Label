/**
 * Module: 51768
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.742Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 51768 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51768: (exports, t, i) => {
    "use strict";
    i.d(t, {
      disableTrackingEvents: () => a,
      trackEvent: () => r
    });
    var s = i(76422);
    i(37103);
    (0, i(9343).getLogger)("Common.TrackEvent");
    const o = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
    let n = !1;
    const r = (exports, t, i) => {
      n || ((exports, t, i) => {
        t = t || e || i || "";
        let n = "";
        for (let exports = 0; e < o.length; e++) {
          const i = t.match(o[e]);
          if (i && 3 === i.length) {
            t = i[1], n = i[2];
            break
          }
        }(0, s.emit)(t.toLowerCase().replace(" ", "_"), {
          category: exports,
          label: i,
          value: n
        })
      })(exports, t, i)
    };

    function a() {
      n = !0
    }
    var logger, c, h;
    "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = r),
      function(exports) {
        exports.GUI = "GUI"
      }(l || (logger = {})),
      function(exports) {
        exports.ChartHeaderToolbar = "Chart Header Toolbar", exports.ChartBottomToolbar = "Chart Bottom Toolbar", e
          .ChartLeftToolbar = "Chart Left Toolbar", exports.TimeInterval = "Time Interval", exports.LoadChartLayout =
          "Load chart layout"
      }(c || (c = {})),
      function(exports) {
        exports.Range = "range", exports.GoTo = "go to", exports.ChartProperties = "chart properties", exports.Compare = "compare", e
          .SelectLayout = "select layout", exports.MagnetMode = "magnet mode", exports.MagnetSnaps = "magnet snaps", exports.DrawingMode =
          "drawing mode", exports.LockAllDrawing = "lock all drawing", exports.RemoveDrawing = "remove drawing", exports.RemoveIndicator =
          "remove indicator", exports.RemoveAll = "remove all", exports.HideDrawings = "hide drawings", exports.HideIndicators =
          "hide indicators",
          exports.HidePositions = "hide positions", exports.HideAll = "hide all", exports.Sync = "sync", exports.SyncMode = "sync mode", e
          .SwitchChartLayout = "Switch chart layout", exports.DeleteChartLayout = "Delete chart layout", exports.LoadChartLayout =
          "Load chart layout", exports.AddToFavorites = "Add to favorites", exports.Sort = "Sort"
      }(h || (h = {}))