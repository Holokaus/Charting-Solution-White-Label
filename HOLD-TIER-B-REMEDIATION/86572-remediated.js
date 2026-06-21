/**
 * Module 86572 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

86572: (exports, module, require) => {
    "use strict";
    var studyIds, isLineTool, name;
    require.register(module, {
        CustomSourceLayer: () => lineToolManager_a,
        PlDisplay: () => isLineTool,
        RecalcVisibleRangeStudiesReason: () => lineToolManager_c,
        TradedGroupHorizontalAlignment: () => name,
        tradingPreferencesDefault: () => config
      }),
      function(exports) {
        exports[exports.Initial = 2] = "Initial", exports[exports.SeriesZOrderIsAlwaysZero = 3] = "SeriesZOrderIsAlwaysZero", exports[exports.Current = 3] =
          "Current"
      }(studyIds || (studyIds = {})),
      function(exports) {
        exports[exports.Money = 0] = "Money", exports[exports.Pips = 1] = "Pips", exports[exports.Percentage = 2] = "Percentage"
      }(isLineTool || (isLineTool = {})),
      function(exports) {
        exports[exports.Left = 0] = "Left", exports[exports.Center = 1] = "Center", exports[exports.Right = 2] = "Right"
      }(name || (name = {}));
    const config = {
      showPositions: !1,
      positionAndBracketsPL: !1,
      positionPL: {
        visibility: !1,
        display: isLineTool.Money
      },
      bracketsPL: {
        visibility: !1,
        display: isLineTool.Money
      },
      showOrders: !1,
      showExecutions: !1,
      showExecutionsLabels: !1,
      showReverse: !1,
      extendLeft: !1,
      lineLength: 0,
      horizontalAlignment: name.Right,
      lineWidth: 0,
      lineStyle: 0
    };
    var lineToolManager_a, lineToolManager_l, lineToolManager_c, handler;
    ! function(exports) {
      exports[exports.Background = 0] = "Background", exports[exports.Foreground = 1] = "Foreground", exports[exports.Topmost = 2] = "Topmost"
    }(lineToolManager_a || (lineToolManager_a = {})),
    function(exports) {
      exports[exports.Unavailable = 0] = "Unavailable", exports[exports.AvailableReadonlyAlwaysDisabled = 1] =
        "AvailableReadonlyAlwaysDisabled", exports[exports.AvailableReadonlyAlwaysEnabled = 2] = "AvailableReadonlyAlwaysEnabled",
        exports[exports.Available = 3] = "Available"
    }(lineToolManager_l || (lineToolManager_l = {})),
    function(exports) {
      exports[exports.ViewportChangeUserAction = 0] = "ViewportChangeUserAction", exports[exports.DataUpdate = 1] = "DataUpdate", exports[exports
          .SeriesRestart = 2] = "SeriesRestart", exports[exports.SeriesCompleted = 3] = "SeriesCompleted", exports[exports.StudyCreation = 4] =
        "StudyCreation"
    }(lineToolManager_c || (lineToolManager_c = {})),
    function(exports) {
      exports[exports.Chart = 0] = "Chart"
    }(handler || (handler = {}))