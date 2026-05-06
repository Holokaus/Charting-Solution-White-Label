/**
 * Module 86572 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86572: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    var lineToolManager_s, lineToolManager_o, lineToolManager_n;
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
        CustomSourceLayer: () => lineToolManager_a,
        PlDisplay: () => lineToolManager_o,
        RecalcVisibleRangeStudiesReason: () => lineToolManager_c,
        TradedGroupHorizontalAlignment: () => lineToolManager_n,
        tradingPreferencesDefault: () => lineToolManager_r
      }),
      function(lineToolManager_e) {
        lineToolManager_e[lineToolManager_e.Initial = 2] = "Initial", lineToolManager_e[lineToolManager_e.SeriesZOrderIsAlwaysZero = 3] = "SeriesZOrderIsAlwaysZero", lineToolManager_e[lineToolManager_e.Current = 3] =
          "Current"
      }(lineToolManager_s || (lineToolManager_s = {})),
      function(lineToolManager_e) {
        lineToolManager_e[lineToolManager_e.Money = 0] = "Money", lineToolManager_e[lineToolManager_e.Pips = 1] = "Pips", lineToolManager_e[lineToolManager_e.Percentage = 2] = "Percentage"
      }(lineToolManager_o || (lineToolManager_o = {})),
      function(lineToolManager_e) {
        lineToolManager_e[lineToolManager_e.Left = 0] = "Left", lineToolManager_e[lineToolManager_e.Center = 1] = "Center", lineToolManager_e[lineToolManager_e.Right = 2] = "Right"
      }(lineToolManager_n || (lineToolManager_n = {}));
    const lineToolManager_r = {
      showPositions: !1,
      positionAndBracketsPL: !1,
      positionPL: {
        visibility: !1,
        display: lineToolManager_o.Money
      },
      bracketsPL: {
        visibility: !1,
        display: lineToolManager_o.Money
      },
      showOrders: !1,
      showExecutions: !1,
      showExecutionsLabels: !1,
      showReverse: !1,
      extendLeft: !1,
      lineLength: 0,
      horizontalAlignment: lineToolManager_n.Right,
      lineWidth: 0,
      lineStyle: 0
    };
    var lineToolManager_a, lineToolManager_l, lineToolManager_c, lineToolManager_h;
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Background = 0] = "Background", lineToolManager_e[lineToolManager_e.Foreground = 1] = "Foreground", lineToolManager_e[lineToolManager_e.Topmost = 2] = "Topmost"
    }(lineToolManager_a || (lineToolManager_a = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Unavailable = 0] = "Unavailable", lineToolManager_e[lineToolManager_e.AvailableReadonlyAlwaysDisabled = 1] =
        "AvailableReadonlyAlwaysDisabled", lineToolManager_e[lineToolManager_e.AvailableReadonlyAlwaysEnabled = 2] = "AvailableReadonlyAlwaysEnabled",
        lineToolManager_e[lineToolManager_e.Available = 3] = "Available"
    }(lineToolManager_l || (lineToolManager_l = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.ViewportChangeUserAction = 0] = "ViewportChangeUserAction", lineToolManager_e[lineToolManager_e.DataUpdate = 1] = "DataUpdate", lineToolManager_e[lineToolManager_e
          .SeriesRestart = 2] = "SeriesRestart", lineToolManager_e[lineToolManager_e.SeriesCompleted = 3] = "SeriesCompleted", lineToolManager_e[lineToolManager_e.StudyCreation = 4] =
        "StudyCreation"
    }(lineToolManager_c || (lineToolManager_c = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Chart = 0] = "Chart"
    }(lineToolManager_h || (lineToolManager_h = {}))