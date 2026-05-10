/**
 * Module 2383 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

2383: (exports, module, require) => {
    "use strict";
    require.register(module, {
      AreaName: () => studyIds,
      HitTarget: () => name,
      HitTestResult: () => register,
      hitTestResultDataAreEqual: () => handler,
      shouldDefaultActionBeExecuted: () => lineToolManager_c,
      tryCallHandler: () => lineToolManager_l
    });
    var studyIds, isLineTool, name, config = require(50279),
      lineToolManager_a = require(50151);

    function lineToolManager_l(exports, module, require, studyIds) {
      if (exports.isTouch) {
        if (void 0 !== studyIds) return studyIds(exports, module), !0
      } else if (void 0 !== require) return require(exports, module), !0;
      return !1
    }

    function lineToolManager_c(exports, module, require, studyIds) {
      return void 0 !== module.executeDefaultAction && (exports.isTouch ? Boolean(module.executeDefaultAction[studyIds]) : Boolean(module
        .executeDefaultAction[require]))
    }

    function handler(exports, module) {
      return exports && module && exports.equals && module.equals ? exports.equals(module) : (0, config.default)(exports, module)
    }! function(exports) {
      exports.Style = "Style", exports.Text = "Text", exports.Line = "Line", exports.Tooltip = "Tooltip", exports.Button = "Button", exports
        .SourceItemMove = "SourceItemMove", exports.AnchorPoint = "AnchorPoint"
    }(studyIds || (studyIds = {})),
    function(exports) {
      exports[exports.Both = 0] = "Both", exports[exports.Horz = 1] = "Horz", exports[exports.Vert = 2] = "Vert"
    }(isLineTool || (isLineTool = {})),
    function(exports) {
      exports[exports.MovePointBackground = 1] = "MovePointBackground", exports[exports.Regular = 2] = "Regular", exports[exports.MovePoint = 3] =
        "MovePoint", exports[exports.ChangePoint = 4] = "ChangePoint", exports[exports.Custom = 5] = "Custom"
    }(name || (name = {}));
    class register {
      constructor(exports, module, require) {
        this._target = exports, this._data = module || null, this._eraseMarker = require
      }
      target() {
        return this._target
      }
      data() {
        return this._data
      }
      mergeData(exports) {
        this._data = {
          ...(0, lineToolManager_a.ensureNotNull)(this._data),
          ...exports
        }
      }
      hasPressedMoveHandler(exports) {
        return null !== this._data && function(exports, module, require) {
          if (exports.isTouch) {
            if (void 0 !== require) return !0
          } else if (void 0 !== module) return !0;
          return !1
        }(exports, this._data.pressedMouseMoveHandler, this._data.touchMoveHandler)
      }
      tryCallMouseDownOrTouchStartHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.mouseDownHandler, this._data.touchStartHandler)
      }
      tryCallMouseUpOrTouchEndHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.mouseUpHandler, this._data.touchEndHandler)
      }
      tryCallMouseEnterHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.mouseEnterHandler)
      }
      tryCallMouseLeaveHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.mouseLeaveHandler)
      }
      tryCallMouseMoveHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.mouseMoveHandler)
      }
      tryCallClickOrTapHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.clickHandler, this._data.tapHandler)
      }
      tryCallDblClickOrDblTapHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.doubleClickHandler, this._data.doubleTapHandler)
      }
      tryCallContextMenuHandler(exports, module) {
        return null !== this._data && lineToolManager_l(exports, module, this._data.contextMenuHandler, this._data.touchContextMenuHandler)
      }
      eraseMarker() {
        return this._eraseMarker
      }
    }