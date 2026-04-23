/**
 * Module 2383 - Auto-beautified from TradingView webpack bundle
 *
 * @module 2383
 * @date 2026-04-23
 * @size 2316 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151, 50279
 *
 * Exports:
 *   - AreaName (internal: s)
 *   - HitTarget (internal: n)
 *   - HitTestResult (internal: d)
 *   - hitTestResultDataAreEqual (internal: h)
 *   - shouldDefaultActionBeExecuted (internal: c)
 *   - tryCallHandler (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  AreaName: () => s,
  HitTarget: () => n,
  HitTestResult: () => d,
  hitTestResultDataAreEqual: () => h,
  shouldDefaultActionBeExecuted: () => c,
  tryCallHandler: () => l
});
var s, o, n, r = i(50279),
  a = i(50151);

function l(e, t, i, s) {
  if (e.isTouch) {
    if (void 0 !== s) return s(e, t), !0
  } else if (void 0 !== i) return i(e, t), !0;
  return !1
}

function c(e, t, i, s) {
  return void 0 !== t.executeDefaultAction && (e.isTouch ? Boolean(t.executeDefaultAction[s]) : Boolean(t.executeDefaultAction[i]))
}

function h(e, t) {
  return e && t && e.equals && t.equals ? e.equals(t) : (0, r.default)(e, t)
}! function(e) {
  e.Style = "Style", e.Text = "Text", e.Line = "Line", e.Tooltip = "Tooltip", e.Button = "Button", e.SourceItemMove = "SourceItemMove", e.AnchorPoint = "AnchorPoint"
}(s || (s = {})),
function(e) {
  e[e.Both = 0] = "Both", e[e.Horz = 1] = "Horz", e[e.Vert = 2] = "Vert"
}(o || (o = {})),
function(e) {
  e[e.MovePointBackground = 1] = "MovePointBackground", e[e.Regular = 2] = "Regular", e[e.MovePoint = 3] = "MovePoint", e[e.ChangePoint = 4] = "ChangePoint", e[e.Custom = 5] = "Custom"
}(n || (n = {}));
class d {
  constructor(e, t, i) {
    this._target = e, this._data = t || null, this._eraseMarker = i
  }
  target() {
    return this._target
  }
  data() {
    return this._data
  }
  mergeData(e) {
    this._data = {
      ...(0, a.ensureNotNull)(this._data),
      ...e
    }
  }
  hasPressedMoveHandler(e) {
    return null !== this._data && function(e, t, i) {
      if (e.isTouch) {
        if (void 0 !== i) return !0
      } else if (void 0 !== t) return !0;
      return !1
    }(e, this._data.pressedMouseMoveHandler, this._data.touchMoveHandler)
  }
  tryCallMouseDownOrTouchStartHandler(e, t) {
    return null !== this._data && l(e, t, this._data.mouseDownHandler, this._data.touchStartHandler)
  }
  tryCallMouseUpOrTouchEndHandler(e, t) {
    return null !== this._data && l(e, t, this._data.mouseUpHandler, this._data.touchEndHandler)
  }
  tryCallMouseEnterHandler(e, t) {
    return null !== this._data && l(e, t, this._data.mouseEnterHandler)
  }
  tryCallMouseLeaveHandler(e, t) {
    return null !== this._data && l(e, t, this._data.mouseLeaveHandler)
  }
  tryCallMouseMoveHandler(e, t) {
    return null !== this._data && l(e, t, this._data.mouseMoveHandler)
  }
  tryCallClickOrTapHandler(e, t) {
    return null !== this._data && l(e, t, this._data.clickHandler, this._data.tapHandler)
  }
  tryCallDblClickOrDblTapHandler(e, t) {
    return null !== this._data && l(e, t, this._data.doubleClickHandler, this._data.doubleTapHandler)
  }
  tryCallContextMenuHandler(e, t) {
    return null !== this._data && l(e, t, this._data.contextMenuHandler, this._data.touchContextMenuHandler)
  }
  eraseMarker() {
    return this._eraseMarker
  }
