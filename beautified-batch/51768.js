/**
 * Module 51768 - Auto-beautified from TradingView webpack bundle
 *
 * @module 51768
 * @date 2026-04-23
 * @size 1566 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343, 37103, 76422
 *
 * Exports:
 *   - disableTrackingEvents (internal: a)
 *   - trackEvent (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

51768: (e, t, i) => {
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
    const r = (e, t, i) => {
      n || ((e, t, i) => {
        t = t || e || i || "";
        let n = "";
        for (let e = 0; e < o.length; e++) {
          const i = t.match(o[e]);
          if (i && 3 === i.length) {
            t = i[1], n = i[2];
            break
          }
        }(0, s.emit)(t.toLowerCase().replace(" ", "_"), {
          category: e,
          label: i,
          value: n
        })
      })(e, t, i)
    };

    function a() {
      n = !0
    }
    var l, c, h;
    "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = r),
      function(e) {
        e.GUI = "GUI"
      }(l || (l = {})),
      function(e) {
        e.ChartHeaderToolbar = "Chart Header Toolbar", e.ChartBottomToolbar = "Chart Bottom Toolbar", e.ChartLeftToolbar = "Chart Left Toolbar", e.TimeInterval = "Time Interval", e.LoadChartLayout = "Load chart layout"
      }(c || (c = {})),
      function(e) {
        e.Range = "range", e.GoTo = "go to", e.ChartProperties = "chart properties", e.Compare = "compare", e.SelectLayout = "select layout", e.MagnetMode = "magnet mode", e.MagnetSnaps = "magnet snaps", e.DrawingMode = "drawing mode", e.LockAllDrawing = "lock all drawing", e.RemoveDrawing = "remove drawing", e.RemoveIndicator = "remove indicator", e.RemoveAll = "remove all", e.HideDrawings = "hide drawings", e.HideIndicators = "hide indicators",
          e.HidePositions = "hide positions", e.HideAll = "hide all", e.Sync = "sync", e.SyncMode = "sync mode", e.SwitchChartLayout = "Switch chart layout", e.DeleteChartLayout = "Delete chart layout", e.LoadChartLayout = "Load chart layout", e.AddToFavorites = "Add to favorites", e.Sort = "Sort"
      }(h || (h = {}))
