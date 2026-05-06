/**
 * Module 2383 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2383: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      AreaName: () => lineToolManager_s,
      HitTarget: () => lineToolManager_n,
      HitTestResult: () => lineToolManager_d,
      hitTestResultDataAreEqual: () => lineToolManager_h,
      shouldDefaultActionBeExecuted: () => lineToolManager_c,
      tryCallHandler: () => lineToolManager_l
    });
    var lineToolManager_s, lineToolManager_o, lineToolManager_n, lineToolManager_r = lineToolManager_i(50279),
      lineToolManager_a = lineToolManager_i(50151);

    function lineToolManager_l(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
      if (lineToolManager_e.isTouch) {
        if (void 0 !== lineToolManager_s) return lineToolManager_s(lineToolManager_e, lineToolManager_t), !0
      } else if (void 0 !== lineToolManager_i) return lineToolManager_i(lineToolManager_e, lineToolManager_t), !0;
      return !1
    }

    function lineToolManager_c(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
      return void 0 !== lineToolManager_t.executeDefaultAction && (lineToolManager_e.isTouch ? Boolean(lineToolManager_t.executeDefaultAction[lineToolManager_s]) : Boolean(lineToolManager_t
        .executeDefaultAction[lineToolManager_i]))
    }

    function lineToolManager_h(lineToolManager_e, lineToolManager_t) {
      return lineToolManager_e && lineToolManager_t && lineToolManager_e.equals && lineToolManager_t.equals ? lineToolManager_e.equals(lineToolManager_t) : (0, lineToolManager_r.default)(lineToolManager_e, lineToolManager_t)
    }! function(lineToolManager_e) {
      lineToolManager_e.Style = "Style", lineToolManager_e.Text = "Text", lineToolManager_e.Line = "Line", lineToolManager_e.Tooltip = "Tooltip", lineToolManager_e.Button = "Button", lineToolManager_e
        .SourceItemMove = "SourceItemMove", lineToolManager_e.AnchorPoint = "AnchorPoint"
    }(lineToolManager_s || (lineToolManager_s = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Both = 0] = "Both", lineToolManager_e[lineToolManager_e.Horz = 1] = "Horz", lineToolManager_e[lineToolManager_e.Vert = 2] = "Vert"
    }(lineToolManager_o || (lineToolManager_o = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.MovePointBackground = 1] = "MovePointBackground", lineToolManager_e[lineToolManager_e.Regular = 2] = "Regular", lineToolManager_e[lineToolManager_e.MovePoint = 3] =
        "MovePoint", lineToolManager_e[lineToolManager_e.ChangePoint = 4] = "ChangePoint", lineToolManager_e[lineToolManager_e.Custom = 5] = "Custom"
    }(lineToolManager_n || (lineToolManager_n = {}));
    class lineToolManager_d {
      constructor(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        this._target = lineToolManager_e, this._data = lineToolManager_t || null, this._eraseMarker = lineToolManager_i
      }
      target() {
        return this._target
      }
      data() {
        return this._data
      }
      mergeData(lineToolManager_e) {
        this._data = {
          ...(0, lineToolManager_a.ensureNotNull)(this._data),
          ...lineToolManager_e
        }
      }
      hasPressedMoveHandler(lineToolManager_e) {
        return null !== this._data && function(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
          if (lineToolManager_e.isTouch) {
            if (void 0 !== lineToolManager_i) return !0
          } else if (void 0 !== lineToolManager_t) return !0;
          return !1
        }(lineToolManager_e, this._data.pressedMouseMoveHandler, this._data.touchMoveHandler)
      }
      tryCallMouseDownOrTouchStartHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.mouseDownHandler, this._data.touchStartHandler)
      }
      tryCallMouseUpOrTouchEndHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.mouseUpHandler, this._data.touchEndHandler)
      }
      tryCallMouseEnterHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.mouseEnterHandler)
      }
      tryCallMouseLeaveHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.mouseLeaveHandler)
      }
      tryCallMouseMoveHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.mouseMoveHandler)
      }
      tryCallClickOrTapHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.clickHandler, this._data.tapHandler)
      }
      tryCallDblClickOrDblTapHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.doubleClickHandler, this._data.doubleTapHandler)
      }
      tryCallContextMenuHandler(lineToolManager_e, lineToolManager_t) {
        return null !== this._data && lineToolManager_l(lineToolManager_e, lineToolManager_t, this._data.contextMenuHandler, this._data.touchContextMenuHandler)
      }
      eraseMarker() {
        return this._eraseMarker
      }
    }