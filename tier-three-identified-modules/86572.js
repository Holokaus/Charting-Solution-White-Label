/**
 * Module: 86572
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.094Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 86572 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86572: (exports, t, i) => {
    "use strict";
    var series, o, newSeries;
    i.d(t, {
        CustomSourceLayer: () => a,
        PlDisplay: () => o,
        RecalcVisibleRangeStudiesReason: () => c,
        TradedGroupHorizontalAlignment: () => newSeries,
        tradingPreferencesDefault: () => r
      }),
      function(exports) {
        e[exports.Initial = 2] = "Initial", e[exports.SeriesZOrderIsAlwaysZero = 3] = "SeriesZOrderIsAlwaysZero", e[exports.Current = 3] =
          "Current"
      }(s || (series = {})),
      function(exports) {
        e[exports.Money = 0] = "Money", e[exports.Pips = 1] = "Pips", e[exports.Percentage = 2] = "Percentage"
      }(o || (o = {})),
      function(exports) {
        e[exports.Left = 0] = "Left", e[exports.Center = 1] = "Center", e[exports.Right = 2] = "Right"
      }(n || (newSeries = {}));
    const r = {
      showPositions: !1,
      positionAndBracketsPL: !1,
      positionPL: {
        visibility: !1,
        display: o.Money
      },
      bracketsPL: {
        visibility: !1,
        display: o.Money
      },
      showOrders: !1,
      showExecutions: !1,
      showExecutionsLabels: !1,
      showReverse: !1,
      extendLeft: !1,
      lineLength: 0,
      horizontalAlignment: newSeries.Right,
      lineWidth: 0,
      lineStyle: 0
    };
    var a, l, c, h;
    ! function(exports) {
      e[exports.Background = 0] = "Background", e[exports.Foreground = 1] = "Foreground", e[exports.Topmost = 2] = "Topmost"
    }(a || (a = {})),
    function(exports) {
      e[exports.Unavailable = 0] = "Unavailable", e[exports.AvailableReadonlyAlwaysDisabled = 1] =
        "AvailableReadonlyAlwaysDisabled", e[exports.AvailableReadonlyAlwaysEnabled = 2] = "AvailableReadonlyAlwaysEnabled",
        e[exports.Available = 3] = "Available"
    }(l || (l = {})),
    function(exports) {
      e[exports.ViewportChangeUserAction = 0] = "ViewportChangeUserAction", e[exports.DataUpdate = 1] = "DataUpdate", e[e
          .SeriesRestart = 2] = "SeriesRestart", e[exports.SeriesCompleted = 3] = "SeriesCompleted", e[exports.StudyCreation = 4] =
        "StudyCreation"
    }(c || (c = {})),
    function(exports) {
      e[exports.Chart = 0] = "Chart"
    }(h || (h = {}))