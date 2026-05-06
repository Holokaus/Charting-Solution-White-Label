/**
 * Module 51768 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51768: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      disableTrackingEvents: () => bitmapCoordinatesPane_a,
      trackEvent: () => bitmapCoordinatesPane_r
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(76422);
    bitmapCoordinatesPane_i(37103);
    (0, bitmapCoordinatesPane_i(9343).getLogger)("Common.TrackEvent");
    const bitmapCoordinatesPane_o = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
    let bitmapCoordinatesPane_n = !1;
    const bitmapCoordinatesPane_r = (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
      bitmapCoordinatesPane_n || ((bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
        bitmapCoordinatesPane_t = bitmapCoordinatesPane_t || bitmapCoordinatesPane_e || bitmapCoordinatesPane_i || "";
        let bitmapCoordinatesPane_n = "";
        for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < bitmapCoordinatesPane_o.length; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_i = bitmapCoordinatesPane_t.match(bitmapCoordinatesPane_o[bitmapCoordinatesPane_e]);
          if (bitmapCoordinatesPane_i && 3 === bitmapCoordinatesPane_i.length) {
            bitmapCoordinatesPane_t = bitmapCoordinatesPane_i[1], bitmapCoordinatesPane_n = bitmapCoordinatesPane_i[2];
            break
          }
        }(0, bitmapCoordinatesPane_s.emit)(bitmapCoordinatesPane_t.toLowerCase().replace(" ", "_"), {
          category: bitmapCoordinatesPane_e,
          label: bitmapCoordinatesPane_i,
          value: bitmapCoordinatesPane_n
        })
      })(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i)
    };

    function bitmapCoordinatesPane_a() {
      bitmapCoordinatesPane_n = !0
    }
    var bitmapCoordinatesPane_l, bitmapCoordinatesPane_c, bitmapCoordinatesPane_h;
    "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = bitmapCoordinatesPane_r),
      function(bitmapCoordinatesPane_e) {
        bitmapCoordinatesPane_e.GUI = "GUI"
      }(bitmapCoordinatesPane_l || (bitmapCoordinatesPane_l = {})),
      function(bitmapCoordinatesPane_e) {
        bitmapCoordinatesPane_e.ChartHeaderToolbar = "Chart Header Toolbar", bitmapCoordinatesPane_e.ChartBottomToolbar = "Chart Bottom Toolbar", bitmapCoordinatesPane_e
          .ChartLeftToolbar = "Chart Left Toolbar", bitmapCoordinatesPane_e.TimeInterval = "Time Interval", bitmapCoordinatesPane_e.LoadChartLayout =
          "Load chart layout"
      }(bitmapCoordinatesPane_c || (bitmapCoordinatesPane_c = {})),
      function(bitmapCoordinatesPane_e) {
        bitmapCoordinatesPane_e.Range = "range", bitmapCoordinatesPane_e.GoTo = "go to", bitmapCoordinatesPane_e.ChartProperties = "chart properties", bitmapCoordinatesPane_e.Compare = "compare", bitmapCoordinatesPane_e
          .SelectLayout = "select layout", bitmapCoordinatesPane_e.MagnetMode = "magnet mode", bitmapCoordinatesPane_e.MagnetSnaps = "magnet snaps", bitmapCoordinatesPane_e.DrawingMode =
          "drawing mode", bitmapCoordinatesPane_e.LockAllDrawing = "lock all drawing", bitmapCoordinatesPane_e.RemoveDrawing = "remove drawing", bitmapCoordinatesPane_e.RemoveIndicator =
          "remove indicator", bitmapCoordinatesPane_e.RemoveAll = "remove all", bitmapCoordinatesPane_e.HideDrawings = "hide drawings", bitmapCoordinatesPane_e.HideIndicators =
          "hide indicators",
          bitmapCoordinatesPane_e.HidePositions = "hide positions", bitmapCoordinatesPane_e.HideAll = "hide all", bitmapCoordinatesPane_e.Sync = "sync", bitmapCoordinatesPane_e.SyncMode = "sync mode", bitmapCoordinatesPane_e
          .SwitchChartLayout = "Switch chart layout", bitmapCoordinatesPane_e.DeleteChartLayout = "Delete chart layout", bitmapCoordinatesPane_e.LoadChartLayout =
          "Load chart layout", bitmapCoordinatesPane_e.AddToFavorites = "Add to favorites", bitmapCoordinatesPane_e.Sort = "Sort"
      }(bitmapCoordinatesPane_h || (bitmapCoordinatesPane_h = {}))