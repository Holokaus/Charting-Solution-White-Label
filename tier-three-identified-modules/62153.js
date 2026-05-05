/**
 * Module: 62153
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.842Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 62153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62153: (exports, t, i) => {
    "use strict";
    i.d(t, {
      MouseEventHandler: () => f,
      defaultPreventedHandler: () => m,
      getClickPosition: () => _,
      isTouchMouseEvent: () => p
    });
    var series = i(81251),
      o = i(50151),
      newSeries = i(87465),
      r = i(49483),
      a = i(80007),
      l = i(39612);
    const c = r.isSafari ? "click" : "auxclick";
    var h, d;
    ! function(exports) {
      e[exports.ResetClick = 500] = "ResetClick", e[exports.LongTap = 333] = "LongTap", e[exports.PreventFiresTouchEvents = 500] =
        "PreventFiresTouchEvents"
    }(h || (h = {})),
    function(exports) {
      e[exports.CancelClickManhattanDistance = 5] = "CancelClickManhattanDistance", e[exports.CancelTapManhattanDistance = 5] =
        "CancelTapManhattanDistance", e[exports.DoubleClickManhattanDistance = 5] = "DoubleClickManhattanDistance", e[e
          .DoubleTapManhattanDistance = 30] = "DoubleTapManhattanDistance"
    }(d || (d = {}));
    const u = {
      treatVertTouchDragAsPageScroll: !1,
      treatHorzTouchDragAsPageScroll: !1,
      ignoreClickAndTapOnDblClickOrDblTap: !1
    };

    function _(exports) {
      if (p(exports)) return {
        x: exports.clientX,
        y: exports.clientY
      };
      if ("touches" in (t = e) && void 0 !== t.touches) {
        if (1 === exports.touches.length) {
          const t = (0, o.ensureNotNull)(exports.target).getBoundingClientRect(),
            i = exports.touches[0];
          return {
            x: i.clientX - t.left,
            y: i.clientY - t.top
          }
        }
        return null
      }
      var t;
      return {
        x: exports.offsetX,
        y: exports.offsetY
      }
    }

    function p(exports) {
      return "isTouch" in e && "stylus" in e
    }

    function m(exports) {
      return t => {
        t.preventDefault(), e(t)
      }
    }

    function g(exports, t) {
      let i = !1;
      return {
        clickOrTap: (...s) => {
          t?.() ? exports.clickOrTap(...s) : (i = !1, setTimeout((() => !i && exports.clickOrTap(...s)), 501))
        },
        doubleClickOrDoubleTap: (...t) => {
          i = !0, exports.doubleClickOrDoubleTap?.(...t)
        }
      }
    }
    class f {
      constructor(exports, t, i) {
        if (this._clickCount = 0, this._clickTimeoutId = null, this._clickPosition = {
            x: Number.NEGATIVE_INFINITY,
            y: Number.POSITIVE_INFINITY
          }, this._tapCount = 0, this._tapTimeoutId = null, this._tapPosition = {
            x: Number.NEGATIVE_INFINITY,
            y: Number.POSITIVE_INFINITY
          }, this._longTapTimeoutId = null, this._longTapActive = !1, this._mouseMoveStartPosition = null, this
          ._touchMoveStartPosition = null, this._touchMoveExceededManhattanDistance = !1, this._cancelClick = !1, this
          ._cancelTap = !1, this._unsubscribeOutsideMouseEvents = null, this._unsubscribeOutsideTouchEvents = null,
          this._unsubscribeMobileSafariEvents = null, this._unsubscribeMousemove = null,
          this._unsubscribeRootMouseEvents = null, this._unsubscribeRootTouchEvents = null, this
          ._unsubscribePinchEvents = null, this._unsubscribeTargetElementEvents = null, this._pinchInfo = null, this
          ._pinchPrevented = !1, this._preventTouchDragProcess = !1, this._mousePressed = !1, this
          ._lastTouchEventTimeStamp = 0, this._activeTouchId = null, this._acceptMouseLeave = !r.CheckMobile.iOS(),
          this._onFirefoxOutsideMouseUp = exports => {
            this._mouseUpHandler(exports)
          }, this._onMobileSafariDoubleClick = exports => {
            if (this._firesTouchEvents(exports)) {
              const t = this._makeCompatEvent(exports);
              if (++this._tapCount, this._tapTimeoutId && this._tapCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(exports), this._tapPosition);
                i < 30 && !this._cancelTap && this._processTouchEvent(t, this._handlers.doubleTapEvent), this
                  ._resetTapTimeout()
              }
            } else {
              const t = this._makeCompatEvent(exports);
              if (++this._clickCount, this._clickTimeoutId && this._clickCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(exports), this._clickPosition);
                i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
                  ._resetClickTimeout()
              }
            }
          }, this._target = exports, this._options = (0, newSeries.merge)((0, newSeries.clone)(u), i || {}), this._options
          .ignoreClickAndTapOnDblClickOrDblTap) {
          if (t.mouseClickEvent && t.mouseDoubleClickEvent) {
            const exports = g({
              clickOrTap: t.mouseClickEvent.bind(t),
              doubleClickOrDoubleTap: t.mouseDoubleClickEvent.bind(t)
            });
            t.mouseClickEvent = exports.clickOrTap, t.mouseDoubleClickEvent = exports.doubleClickOrDoubleTap
          }
          if (t.tapEvent && t.doubleTapEvent) {
            const exports = g({
              clickOrTap: t.tapEvent.bind(t),
              doubleClickOrDoubleTap: t.doubleTapEvent.bind(t)
            });
            t.tapEvent = exports.clickOrTap, t.doubleTapEvent = exports.doubleClickOrDoubleTap
          }
        }
        this._handlers = t, this._init()
      }
      destroy() {
        null !== this._unsubscribeOutsideMouseEvents && (this._unsubscribeOutsideMouseEvents(), this
            ._unsubscribeOutsideMouseEvents = null), null !== this._unsubscribeOutsideTouchEvents && (this
            ._unsubscribeOutsideTouchEvents(), this._unsubscribeOutsideTouchEvents = null), null !== this
          ._unsubscribeMousemove && (this._unsubscribeMousemove(), this._unsubscribeMousemove = null), null !== this
          ._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents =
            null), null !== this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(), this
            ._unsubscribeRootTouchEvents = null), null !== this._unsubscribeMobileSafariEvents && (this
            ._unsubscribeMobileSafariEvents(), this._unsubscribeMobileSafariEvents = null), null !== this
          ._unsubscribePinchEvents && (this._unsubscribePinchEvents(), this._unsubscribePinchEvents = null), null !==
          this._unsubscribeTargetElementEvents && (this._unsubscribeTargetElementEvents(), this
            ._unsubscribeTargetElementEvents = null), this._clearLongTapTimeout(), this._resetClickTimeout()
      }
      _mouseEnterHandler(exports) {
        this._unsubscribeMousemove && this._unsubscribeMousemove();
        const t = this._mouseMoveHandler.bind(this);
        if (this._unsubscribeMousemove = () => {
            this._target.removeEventListener("mousemove", t)
          }, this._target.addEventListener("mousemove", t), this._firesTouchEvents(exports)) return;
        const i = this._makeCompatEvent(exports);
        this._processMouseEvent(i, this._handlers.mouseEnterEvent), this._acceptMouseLeave = !0
      }
      _resetClickTimeout() {
        null !== this._clickTimeoutId && clearTimeout(this._clickTimeoutId), this._clickCount = 0, this
          ._clickTimeoutId = null, this._clickPosition = {
            x: Number.NEGATIVE_INFINITY,
            y: Number.POSITIVE_INFINITY
          }
      }
      _resetTapTimeout() {
        null !== this._tapTimeoutId && clearTimeout(this._tapTimeoutId), this._tapCount = 0, this._tapTimeoutId =
          null, this._tapPosition = {
            x: Number.NEGATIVE_INFINITY,
            y: Number.POSITIVE_INFINITY
          }
      }
      _mouseMoveHandler(exports) {
        if (this._mousePressed || null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(exports)) return;
        const t = this._makeCompatEvent(exports);
        this._processMouseEvent(t, this._handlers.mouseMoveEvent), this._acceptMouseLeave = !0
      }
      _touchMoveHandler(exports) {
        const t = w(exports.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        if (this._lastTouchEventTimeStamp = b(exports), null !== this._pinchInfo) return;
        if (this._preventTouchDragProcess) return;
        this._pinchPrevented = !0;
        const i = this._touchMouseMoveWithDownInfo(v(t), (0, o.ensureNotNull)(this._touchMoveStartPosition)),
          {
            xOffset: series,
            yOffset: newSeries,
            manhattanDistance: r
          } = i;
        if (this._touchMoveExceededManhattanDistance || !(r < 5)) {
          if (!this._touchMoveExceededManhattanDistance) {
            const exports = .5 * series,
              t = this._options.shouldAllowTouchDrag?.() ?? !1,
              i = n >= e && (!this._options.treatVertTouchDragAsPageScroll || t),
              o = e > n && (!this._options.treatHorzTouchDragAsPageScroll || t);
            i || o || (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this
              ._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout()
          }
          if (!this._preventTouchDragProcess) {
            const i = this._makeCompatEvent(exports, t);
            this._processTouchEvent(i, this._handlers.touchMoveEvent), (0, a.preventDefault)(exports)
          }
        }
      }
      _mouseMoveWithDownHandler(exports) {
        if (0 !== exports.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._touchMouseMoveWithDownInfo(v(exports), (0, o.ensureNotNull)(this._mouseMoveStartPosition)),
          {
            manhattanDistance: i
          } = t;
        if (i >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick) {
          const t = this._makeCompatEvent(exports);
          this._processMouseEvent(t, this._handlers.pressedMouseMoveEvent)
        }
      }
      _touchMouseMoveWithDownInfo(exports, t) {
        const i = Math.abs(t.x - exports.x),
          series = Math.abs(t.y - exports.y);
        return {
          xOffset: i,
          yOffset: series,
          manhattanDistance: i + s
        }
      }
      _touchEndHandler(exports) {
        let t = w(exports.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t && 0 === exports.touches.length && (t = exports.changedTouches[0]), null === t) return;
        this._activeTouchId = null, this._lastTouchEventTimeStamp = b(exports), this._clearLongTapTimeout(), this
          ._touchMoveStartPosition = null, this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        const i = this._makeCompatEvent(exports, t);
        if (this._processTouchEvent(i, this._handlers.touchEndEvent), ++this._tapCount, this._tapTimeoutId && this
          ._tapCount > 1) {
          const {
            manhattanDistance: e
          } = this._touchMouseMoveWithDownInfo(v(t), this._tapPosition);
          e < 30 && !this._cancelTap && this._processTouchEvent(i, this._handlers.doubleTapEvent), this
            ._resetTapTimeout()
        } else this._cancelTap || (this._processTouchEvent(i, this._handlers.tapEvent), this._handlers.tapEvent && (0,
          a.preventDefault)(exports));
        0 === this._tapCount && (0, a.preventDefault)(exports),
          0 === exports.touches.length && this._longTapActive && (this._longTapActive = !1, (0, a.preventDefault)(exports))
      }
      _touchCancelHandler(exports) {
        this._touchEndHandler(exports)
      }
      _mouseUpHandler(exports) {
        if (0 !== exports.button) return;
        const t = this._makeCompatEvent(exports);
        if (this._mouseMoveStartPosition = null, this._mousePressed = !1, this._unsubscribeRootMouseEvents && (this
            ._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), r.isFF) {
          this._target.ownerDocument.documentElement.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp)
        }
        if (!this._firesTouchEvents(exports))
          if (this._processMouseEvent(t, this._handlers.mouseUpEvent), ++this._clickCount, this._clickTimeoutId &&
            this._clickCount > 1) {
            const {
              manhattanDistance: i
            } = this._touchMouseMoveWithDownInfo(v(exports), this._clickPosition);
            i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
              ._resetClickTimeout()
          } else this._cancelClick || this._processMouseEvent(t, this._handlers.mouseClickEvent)
      }
      _clearLongTapTimeout() {
        null !== this._longTapTimeoutId && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null)
      }
      _touchStartHandler(exports) {
        if (null !== this._activeTouchId) return this._clearLongTapTimeout(), void this._resetTapTimeout();
        const t = exports.changedTouches[0];
        this._activeTouchId = t.identifier, this._lastTouchEventTimeStamp = b(exports);
        const i = this._target.ownerDocument.documentElement;
        this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this
          ._touchMoveStartPosition = v(t), this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        {
          const t = this._touchMoveHandler.bind(this),
            series = this._touchEndHandler.bind(this);
          this._unsubscribeRootTouchEvents = () => {
            i.removeEventListener("touchmove", t), i.removeEventListener("touchend", s)
          }, i.addEventListener("touchmove", t, {
            passive: !1
          }), i.addEventListener("touchend", series, {
            passive: !1
          }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, e),
            333)
        }
        const series = this._makeCompatEvent(exports, t);
        this._processTouchEvent(series, this._handlers.touchStartEvent), this._tapTimeoutId || (this._tapCount = 0, this
          ._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500), this._tapPosition = v(t))
      }
      _wheelClickHandler(exports) {
        if (1 !== exports.button) return;
        if (this._firesTouchEvents(exports)) return;
        const t = this._makeCompatEvent(exports);
        this._processMouseEvent(t, this._handlers.wheelClickEvent)
      }
      _mouseDownHandler(exports) {
        if (0 !== exports.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._target.ownerDocument.documentElement;
        r.isFF && t.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this
          ._mouseMoveStartPosition = v(exports), this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(),
            this._unsubscribeRootMouseEvents = null);
        {
          const exports = this._mouseMoveWithDownHandler.bind(this),
            i = this._mouseUpHandler.bind(this);
          this._unsubscribeRootMouseEvents = () => {
            t.removeEventListener("mousemove", e), t.removeEventListener("mouseup", i)
          }, t.addEventListener("mousemove", e), t.addEventListener("mouseup", i)
        }
        if (this._mousePressed = !0,
          this._firesTouchEvents(exports)) return;
        const i = this._makeCompatEvent(exports);
        this._processMouseEvent(i, this._handlers.mouseDownEvent), this._clickTimeoutId || (this._clickCount = 0, this
          ._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500), this._clickPosition = v(exports))
      }
      _init() {
        const exports = this._mouseEnterHandler.bind(this);
        this._target.addEventListener("mouseenter", e);
        const t = this._touchCancelHandler.bind(this);
        this._target.addEventListener("touchcancel", t);
        {
          const exports = this._target.ownerDocument,
            t = exports => !exports.target || !this._target.contains(exports.target),
            i = exports => {
              if (!t(exports)) return;
              const i = exports.changedTouches[0];
              this._lastTouchEventTimeStamp = b(exports), this._processTouchEvent(this._makeCompatEvent(exports, i), this
                ._handlers.touchStartOutsideEvent)
            },
            series = exports => {
              t(exports) && !this._firesTouchEvents(exports) && this._processMouseEvent(this._makeCompatEvent(exports), this._handlers
                .mouseDownOutsideEvent)
            };
          this._unsubscribeOutsideTouchEvents = () => {
            exports.removeEventListener("touchstart", i)
          }, this._unsubscribeOutsideMouseEvents = () => {
            exports.removeEventListener("mousedown", s)
          }, exports.addEventListener("mousedown", s), exports.addEventListener("touchstart", i, {
            passive: !0
          })
        }
        r.CheckMobile.iOS() && (this._unsubscribeMobileSafariEvents = () => {
          this._target.removeEventListener("dblclick", this._onMobileSafariDoubleClick)
        }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick));
        const i = this._mouseLeaveHandler.bind(this);
        this._target.addEventListener("mouseleave", i);
        const series = this._contextMenuHandler.bind(this);
        this._target.addEventListener("contextmenu", s);
        const o = this._touchStartHandler.bind(this);
        let newSeries;
        this._target.addEventListener("touchstart", o, {
          passive: !0
        }), r.isChrome && (newSeries = exports => {
          if (1 === exports.button) return exports.preventDefault(), !1
        }, this._target.addEventListener("mousedown", n));
        const a = this._mouseDownHandler.bind(this);
        this._target.addEventListener("mousedown", a);
        const l = this._wheelClickHandler.bind(this);
        this._target.addEventListener(c, l);
        const h = () => {};
        this._target.addEventListener("touchmove", h, {
          passive: !1
        }), this._unsubscribeTargetElementEvents = () => {
          this._target.removeEventListener("mouseleave", i), this._target.removeEventListener("contextmenu", s),
            this._target.removeEventListener("touchstart", o), n && this._target.removeEventListener("mousedown",
            n), this._target.removeEventListener("mousedown", a), this._target.removeEventListener(c, l), this
            ._target.removeEventListener("touchmove", h)
        }, this._initPinch()
      }
      _initPinch() {
        if (void 0 === this._handlers.pinchStartEvent && void 0 === this._handlers.pinchEvent && void 0 === this
          ._handlers.pinchEndEvent) return;
        const exports = exports => this._checkPinchState(exports.touches);
        this._target.addEventListener("touchstart", exports, {
          passive: !0
        });
        const t = exports => {
          if (null === this._pinchInfo) return;
          const t = w(exports.touches, (0, o.ensureNotNull)(this._activeTouchId)),
            i = w(exports.touches, this._pinchInfo.secondTouchId);
          if (t && i && void 0 !== this._handlers.pinchEvent) {
            const {
              startPinchDistance: series,
              startPinchMiddlePoint: o
            } = this._pinchInfo, newSeries = S(t, i) / series, r = y(this._target);
            this._handlers.pinchEvent(o, {
              x: t.clientX - r.left,
              y: t.clientY - r.top
            }, {
              x: i.clientX - r.left,
              y: i.clientY - r.top
            }, n), (0, a.preventDefault)(exports)
          }
        };
        this._target.addEventListener("touchmove", t, {
          passive: !1
        });
        const i = exports => this._checkPinchState(exports.touches);
        this._target.addEventListener("touchend", i), this._unsubscribePinchEvents = () => {
          this._target.removeEventListener("touchstart", e), this._target.removeEventListener("touchmove", t), this
            ._target.addEventListener("touchend", i)
        }
      }
      _checkPinchState(exports) {
        1 === exports.length && (this._pinchPrevented = !1), 2 !== exports.length || this._pinchPrevented || this._longTapActive ?
          this._stopPinch() : this._startPinch(exports)
      }
      _startPinch(exports) {
        if (void 0 !== this._handlers.pinchStartEvent && null === this._pinchInfo) {
          const t = y(this._target);
          let i, series;
          e[0].identifier === this._activeTouchId ? (i = e[0], series = e[1]) : (i = e[1], series = e[0]);
          const o = {
              x: i.clientX - t.left,
              y: i.clientY - t.top
            },
            newSeries = {
              x: series.clientX - t.left,
              y: series.clientY - t.top
            },
            r = {
              x: (o.x + newSeries.x) / 2,
              y: (o.y + newSeries.y) / 2
            };
          this._handlers.pinchStartEvent(r, o, newSeries, {
            bothPointsOnTargetElement: this._target.contains(series.target)
          }) && (this._pinchInfo = {
            startPinchDistance: S(i, s),
            startPinchMiddlePoint: r,
            secondTouchId: series.identifier
          })
        }
        this._clearLongTapTimeout()
      }
      _stopPinch() {
        null !== this._pinchInfo && (this._pinchInfo = null, this._handlers.pinchEndEvent?.())
      }
      _mouseLeaveHandler(exports) {
        if (this._unsubscribeMousemove && this._unsubscribeMousemove(), this._firesTouchEvents(exports)) return;
        if (!this._acceptMouseLeave) return;
        const t = this._makeCompatEvent(exports);
        this._processMouseEvent(t, this._handlers.mouseLeaveEvent), this._acceptMouseLeave = !r.CheckMobile.iOS()
      }
      _longTapHandler(exports) {
        const t = w(exports.touches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        const i = this._makeCompatEvent(exports, t);
        this._processTouchEvent(i, this._handlers.longTapEvent), this._processTouchEvent(i, this._handlers
          .touchContextMenuEvent), this._cancelTap = !0, this._longTapActive = !0
      }
      _contextMenuHandler(exports) {
        if ((0, a.preventDefault)(exports), null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(exports)) return;
        const t = this._makeCompatEvent(exports);
        this._processMouseEvent(t, this._handlers.contextMenuEvent), this._cancelClick = !0
      }
      _firesTouchEvents(exports) {
        return exports.sourceCapabilities && void 0 !== exports.sourceCapabilities.firesTouchEvents ? exports.sourceCapabilities
          .firesTouchEvents : b(exports) < this._lastTouchEventTimeStamp + 500
      }
      _processTouchEvent(exports, t) {
        (0, l.setLastMouseOrTouchEventInfo)(exports), t && t.call(this._handlers, e)
      }
      _processMouseEvent(exports, t) {
        "mouseleave" !== exports.srcType && (0, l.setLastMouseOrTouchEventInfo)(exports), t && t.call(this._handlers, e)
      }
      _makeCompatEvent(exports, t) {
        const i = t || exports,
          o = (0, series.default)((() => this._target.getBoundingClientRect() || {
            left: 0,
            top: 0
          }));
        return {
          clientX: i.clientX,
          clientY: i.clientY,
          pageX: i.pageX,
          pageY: i.pageY,
          screenX: i.screenX,
          screenY: i.screenY,
          get localX() {
            return i.clientX - o().left
          },
          get localY() {
            return i.clientY - o().top
          },
          ctrlKey: exports.ctrlKey,
          altKey: exports.altKey,
          shiftKey: exports.shiftKey,
          metaKey: exports.metaKey,
          isTouch: !exports.type.startsWith("mouse") && "contextmenu" !== exports.type && "click" !== exports.type,
          stylus: "stylus" === t?.touchType,
          srcType: exports.type,
          target: i.target,
          view: exports.view,
          preventDefault: () => {
            "touchstart" !== exports.type && (0, a.preventDefault)(exports)
          }
        }
      }
    }

    function y(exports) {
      return exports.getBoundingClientRect() || {
        left: 0,
        top: 0
      }
    }

    function v(exports) {
      return {
        x: exports.pageX,
        y: exports.pageY
      }
    }

    function S(exports, t) {
      const i = exports.clientX - t.clientX,
        series = exports.clientY - t.clientY;
      return Math.sqrt(i * i + s * s)
    }

    function b(exports) {
      return exports.timeStamp || performance.now()
    }

    function w(exports, t) {
      for (let i = 0; i < exports.length; ++i)
        if (e[i].identifier === t) return e[i];
      return null
    }