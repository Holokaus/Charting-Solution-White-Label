/**
 * Module: 2383
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.393Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 2383 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2383: (exports, t, i) => {
    "use strict";
    i.d(t, {
      AreaName: () => series,
      HitTarget: () => newSeries,
      HitTestResult: () => d,
      hitTestResultDataAreEqual: () => h,
      shouldDefaultActionBeExecuted: () => c,
      tryCallHandler: () => l
    });
    var series, o, newSeries, r = i(50279),
      a = i(50151);

    function l(exports, t, i, s) {
      if (exports.isTouch) {
        if (void 0 !== s) return s(exports, t), !0
      } else if (void 0 !== i) return i(exports, t), !0;
      return !1
    }

    function c(exports, t, i, s) {
      return void 0 !== t.executeDefaultAction && (exports.isTouch ? Boolean(t.executeDefaultAction[s]) : Boolean(t
        .executeDefaultAction[i]))
    }

    function h(exports, t) {
      return e && t && exports.equals && t.equals ? exports.equals(t) : (0, r.default)(exports, t)
    }! function(exports) {
      exports.Style = "Style", exports.Text = "Text", exports.Line = "Line", exports.Tooltip = "Tooltip", exports.Button = "Button", e
        .SourceItemMove = "SourceItemMove", exports.AnchorPoint = "AnchorPoint"
    }(s || (series = {})),
    function(exports) {
      e[exports.Both = 0] = "Both", e[exports.Horz = 1] = "Horz", e[exports.Vert = 2] = "Vert"
    }(o || (o = {})),
    function(exports) {
      e[exports.MovePointBackground = 1] = "MovePointBackground", e[exports.Regular = 2] = "Regular", e[exports.MovePoint = 3] =
        "MovePoint", e[exports.ChangePoint = 4] = "ChangePoint", e[exports.Custom = 5] = "Custom"
    }(n || (newSeries = {}));
    class d {
      constructor(exports, t, i) {
        this._target = exports, this._data = t || null, this._eraseMarker = i
      }
      target() {
        return this._target
      }
      data() {
        return this._data
      }
      mergeData(exports) {
        this._data = {
          ...(0, a.ensureNotNull)(this._data),
          ...e
        }
      }
      hasPressedMoveHandler(exports) {
        return null !== this._data && function(exports, t, i) {
          if (exports.isTouch) {
            if (void 0 !== i) return !0
          } else if (void 0 !== t) return !0;
          return !1
        }(exports, this._data.pressedMouseMoveHandler, this._data.touchMoveHandler)
      }
      tryCallMouseDownOrTouchStartHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.mouseDownHandler, this._data.touchStartHandler)
      }
      tryCallMouseUpOrTouchEndHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.mouseUpHandler, this._data.touchEndHandler)
      }
      tryCallMouseEnterHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.mouseEnterHandler)
      }
      tryCallMouseLeaveHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.mouseLeaveHandler)
      }
      tryCallMouseMoveHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.mouseMoveHandler)
      }
      tryCallClickOrTapHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.clickHandler, this._data.tapHandler)
      }
      tryCallDblClickOrDblTapHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.doubleClickHandler, this._data.doubleTapHandler)
      }
      tryCallContextMenuHandler(exports, t) {
        return null !== this._data && l(exports, t, this._data.contextMenuHandler, this._data.touchContextMenuHandler)
      }
      eraseMarker() {
        return this._eraseMarker
      }
    }