/**
 * Module 62153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62153: (watchedValue_e, t, i) => {
    "use strict";
    i.d(t, {
      MouseEventHandler: () => f,
      defaultPreventedHandler: () => m,
      getClickPosition: () => _,
      isTouchMouseEvent: () => p
    });
    var watchedValue_s = i(81251),
      o = i(50151),
      watchedValue_n = i(87465),
      r = i(49483),
      a = i(80007),
      l = i(39612);
    const c = r.isSafari ? "click" : "auxclick";
    var h, d;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.ResetClick = 500] = "ResetClick", watchedValue_e[watchedValue_e.LongTap = 333] = "LongTap", watchedValue_e[watchedValue_e.PreventFiresTouchEvents = 500] =
        "PreventFiresTouchEvents"
    }(h || (h = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.CancelClickManhattanDistance = 5] = "CancelClickManhattanDistance", watchedValue_e[watchedValue_e.CancelTapManhattanDistance = 5] =
        "CancelTapManhattanDistance", watchedValue_e[watchedValue_e.DoubleClickManhattanDistance = 5] = "DoubleClickManhattanDistance", watchedValue_e[watchedValue_e
          .DoubleTapManhattanDistance = 30] = "DoubleTapManhattanDistance"
    }(d || (d = {}));
    const u = {
      treatVertTouchDragAsPageScroll: !1,
      treatHorzTouchDragAsPageScroll: !1,
      ignoreClickAndTapOnDblClickOrDblTap: !1
    };

    function _(watchedValue_e) {
      if (p(watchedValue_e)) return {
        x: watchedValue_e.clientX,
        y: watchedValue_e.clientY
      };
      if ("touches" in (t = watchedValue_e) && void 0 !== t.touches) {
        if (1 === watchedValue_e.touches.length) {
          const t = (0, o.ensureNotNull)(watchedValue_e.target).getBoundingClientRect(),
            i = watchedValue_e.touches[0];
          return {
            x: i.clientX - t.left,
            y: i.clientY - t.top
          }
        }
        return null
      }
      var t;
      return {
        x: watchedValue_e.offsetX,
        y: watchedValue_e.offsetY
      }
    }

    function p(watchedValue_e) {
      return "isTouch" in watchedValue_e && "stylus" in watchedValue_e
    }

    function m(watchedValue_e) {
      return t => {
        t.preventDefault(), watchedValue_e(t)
      }
    }

    function g(watchedValue_e, t) {
      let i = !1;
      return {
        clickOrTap: (...watchedValue_s) => {
          t?.() ? watchedValue_e.clickOrTap(...watchedValue_s) : (i = !1, setTimeout((() => !i && watchedValue_e.clickOrTap(...watchedValue_s)), 501))
        },
        doubleClickOrDoubleTap: (...t) => {
          i = !0, watchedValue_e.doubleClickOrDoubleTap?.(...t)
        }
      }
    }
    class f {
      constructor(watchedValue_e, t, i) {
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
          this._onFirefoxOutsideMouseUp = watchedValue_e => {
            this._mouseUpHandler(watchedValue_e)
          }, this._onMobileSafariDoubleClick = watchedValue_e => {
            if (this._firesTouchEvents(watchedValue_e)) {
              const t = this._makeCompatEvent(watchedValue_e);
              if (++this._tapCount, this._tapTimeoutId && this._tapCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(watchedValue_e), this._tapPosition);
                i < 30 && !this._cancelTap && this._processTouchEvent(t, this._handlers.doubleTapEvent), this
                  ._resetTapTimeout()
              }
            } else {
              const t = this._makeCompatEvent(watchedValue_e);
              if (++this._clickCount, this._clickTimeoutId && this._clickCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(watchedValue_e), this._clickPosition);
                i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
                  ._resetClickTimeout()
              }
            }
          }, this._target = watchedValue_e, this._options = (0, watchedValue_n.merge)((0, watchedValue_n.clone)(u), i || {}), this._options
          .ignoreClickAndTapOnDblClickOrDblTap) {
          if (t.mouseClickEvent && t.mouseDoubleClickEvent) {
            const watchedValue_e = g({
              clickOrTap: t.mouseClickEvent.bind(t),
              doubleClickOrDoubleTap: t.mouseDoubleClickEvent.bind(t)
            });
            t.mouseClickEvent = watchedValue_e.clickOrTap, t.mouseDoubleClickEvent = watchedValue_e.doubleClickOrDoubleTap
          }
          if (t.tapEvent && t.doubleTapEvent) {
            const watchedValue_e = g({
              clickOrTap: t.tapEvent.bind(t),
              doubleClickOrDoubleTap: t.doubleTapEvent.bind(t)
            });
            t.tapEvent = watchedValue_e.clickOrTap, t.doubleTapEvent = watchedValue_e.doubleClickOrDoubleTap
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
      _mouseEnterHandler(watchedValue_e) {
        this._unsubscribeMousemove && this._unsubscribeMousemove();
        const t = this._mouseMoveHandler.bind(this);
        if (this._unsubscribeMousemove = () => {
            this._target.removeEventListener("mousemove", t)
          }, this._target.addEventListener("mousemove", t), this._firesTouchEvents(watchedValue_e)) return;
        const i = this._makeCompatEvent(watchedValue_e);
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
      _mouseMoveHandler(watchedValue_e) {
        if (this._mousePressed || null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(t, this._handlers.mouseMoveEvent), this._acceptMouseLeave = !0
      }
      _touchMoveHandler(watchedValue_e) {
        const t = w(watchedValue_e.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        if (this._lastTouchEventTimeStamp = b(watchedValue_e), null !== this._pinchInfo) return;
        if (this._preventTouchDragProcess) return;
        this._pinchPrevented = !0;
        const i = this._touchMouseMoveWithDownInfo(v(t), (0, o.ensureNotNull)(this._touchMoveStartPosition)),
          {
            xOffset: watchedValue_s,
            yOffset: watchedValue_n,
            manhattanDistance: r
          } = i;
        if (this._touchMoveExceededManhattanDistance || !(r < 5)) {
          if (!this._touchMoveExceededManhattanDistance) {
            const watchedValue_e = .5 * watchedValue_s,
              t = this._options.shouldAllowTouchDrag?.() ?? !1,
              i = watchedValue_n >= watchedValue_e && (!this._options.treatVertTouchDragAsPageScroll || t),
              o = watchedValue_e > watchedValue_n && (!this._options.treatHorzTouchDragAsPageScroll || t);
            i || o || (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this
              ._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout()
          }
          if (!this._preventTouchDragProcess) {
            const i = this._makeCompatEvent(watchedValue_e, t);
            this._processTouchEvent(i, this._handlers.touchMoveEvent), (0, a.preventDefault)(watchedValue_e)
          }
        }
      }
      _mouseMoveWithDownHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._touchMouseMoveWithDownInfo(v(watchedValue_e), (0, o.ensureNotNull)(this._mouseMoveStartPosition)),
          {
            manhattanDistance: i
          } = t;
        if (i >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick) {
          const t = this._makeCompatEvent(watchedValue_e);
          this._processMouseEvent(t, this._handlers.pressedMouseMoveEvent)
        }
      }
      _touchMouseMoveWithDownInfo(watchedValue_e, t) {
        const i = Math.abs(t.x - watchedValue_e.x),
          watchedValue_s = Math.abs(t.y - watchedValue_e.y);
        return {
          xOffset: i,
          yOffset: watchedValue_s,
          manhattanDistance: i + watchedValue_s
        }
      }
      _touchEndHandler(watchedValue_e) {
        let t = w(watchedValue_e.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t && 0 === watchedValue_e.touches.length && (t = watchedValue_e.changedTouches[0]), null === t) return;
        this._activeTouchId = null, this._lastTouchEventTimeStamp = b(watchedValue_e), this._clearLongTapTimeout(), this
          ._touchMoveStartPosition = null, this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        const i = this._makeCompatEvent(watchedValue_e, t);
        if (this._processTouchEvent(i, this._handlers.touchEndEvent), ++this._tapCount, this._tapTimeoutId && this
          ._tapCount > 1) {
          const {
            manhattanDistance: watchedValue_e
          } = this._touchMouseMoveWithDownInfo(v(t), this._tapPosition);
          watchedValue_e < 30 && !this._cancelTap && this._processTouchEvent(i, this._handlers.doubleTapEvent), this
            ._resetTapTimeout()
        } else this._cancelTap || (this._processTouchEvent(i, this._handlers.tapEvent), this._handlers.tapEvent && (0,
          a.preventDefault)(watchedValue_e));
        0 === this._tapCount && (0, a.preventDefault)(watchedValue_e),
          0 === watchedValue_e.touches.length && this._longTapActive && (this._longTapActive = !1, (0, a.preventDefault)(watchedValue_e))
      }
      _touchCancelHandler(watchedValue_e) {
        this._touchEndHandler(watchedValue_e)
      }
      _mouseUpHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        const t = this._makeCompatEvent(watchedValue_e);
        if (this._mouseMoveStartPosition = null, this._mousePressed = !1, this._unsubscribeRootMouseEvents && (this
            ._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), r.isFF) {
          this._target.ownerDocument.documentElement.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp)
        }
        if (!this._firesTouchEvents(watchedValue_e))
          if (this._processMouseEvent(t, this._handlers.mouseUpEvent), ++this._clickCount, this._clickTimeoutId &&
            this._clickCount > 1) {
            const {
              manhattanDistance: i
            } = this._touchMouseMoveWithDownInfo(v(watchedValue_e), this._clickPosition);
            i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
              ._resetClickTimeout()
          } else this._cancelClick || this._processMouseEvent(t, this._handlers.mouseClickEvent)
      }
      _clearLongTapTimeout() {
        null !== this._longTapTimeoutId && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null)
      }
      _touchStartHandler(watchedValue_e) {
        if (null !== this._activeTouchId) return this._clearLongTapTimeout(), void this._resetTapTimeout();
        const t = watchedValue_e.changedTouches[0];
        this._activeTouchId = t.identifier, this._lastTouchEventTimeStamp = b(watchedValue_e);
        const i = this._target.ownerDocument.documentElement;
        this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this
          ._touchMoveStartPosition = v(t), this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        {
          const t = this._touchMoveHandler.bind(this),
            watchedValue_s = this._touchEndHandler.bind(this);
          this._unsubscribeRootTouchEvents = () => {
            i.removeEventListener("touchmove", t), i.removeEventListener("touchend", watchedValue_s)
          }, i.addEventListener("touchmove", t, {
            passive: !1
          }), i.addEventListener("touchend", watchedValue_s, {
            passive: !1
          }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, watchedValue_e),
            333)
        }
        const watchedValue_s = this._makeCompatEvent(watchedValue_e, t);
        this._processTouchEvent(watchedValue_s, this._handlers.touchStartEvent), this._tapTimeoutId || (this._tapCount = 0, this
          ._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500), this._tapPosition = v(t))
      }
      _wheelClickHandler(watchedValue_e) {
        if (1 !== watchedValue_e.button) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(t, this._handlers.wheelClickEvent)
      }
      _mouseDownHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._target.ownerDocument.documentElement;
        r.isFF && t.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this
          ._mouseMoveStartPosition = v(watchedValue_e), this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(),
            this._unsubscribeRootMouseEvents = null);
        {
          const watchedValue_e = this._mouseMoveWithDownHandler.bind(this),
            i = this._mouseUpHandler.bind(this);
          this._unsubscribeRootMouseEvents = () => {
            t.removeEventListener("mousemove", watchedValue_e), t.removeEventListener("mouseup", i)
          }, t.addEventListener("mousemove", watchedValue_e), t.addEventListener("mouseup", i)
        }
        if (this._mousePressed = !0,
          this._firesTouchEvents(watchedValue_e)) return;
        const i = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(i, this._handlers.mouseDownEvent), this._clickTimeoutId || (this._clickCount = 0, this
          ._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500), this._clickPosition = v(watchedValue_e))
      }
      _init() {
        const watchedValue_e = this._mouseEnterHandler.bind(this);
        this._target.addEventListener("mouseenter", watchedValue_e);
        const t = this._touchCancelHandler.bind(this);
        this._target.addEventListener("touchcancel", t);
        {
          const watchedValue_e = this._target.ownerDocument,
            t = watchedValue_e => !watchedValue_e.target || !this._target.contains(watchedValue_e.target),
            i = watchedValue_e => {
              if (!t(watchedValue_e)) return;
              const i = watchedValue_e.changedTouches[0];
              this._lastTouchEventTimeStamp = b(watchedValue_e), this._processTouchEvent(this._makeCompatEvent(watchedValue_e, i), this
                ._handlers.touchStartOutsideEvent)
            },
            watchedValue_s = watchedValue_e => {
              t(watchedValue_e) && !this._firesTouchEvents(watchedValue_e) && this._processMouseEvent(this._makeCompatEvent(watchedValue_e), this._handlers
                .mouseDownOutsideEvent)
            };
          this._unsubscribeOutsideTouchEvents = () => {
            watchedValue_e.removeEventListener("touchstart", i)
          }, this._unsubscribeOutsideMouseEvents = () => {
            watchedValue_e.removeEventListener("mousedown", watchedValue_s)
          }, watchedValue_e.addEventListener("mousedown", watchedValue_s), watchedValue_e.addEventListener("touchstart", i, {
            passive: !0
          })
        }
        r.CheckMobile.iOS() && (this._unsubscribeMobileSafariEvents = () => {
          this._target.removeEventListener("dblclick", this._onMobileSafariDoubleClick)
        }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick));
        const i = this._mouseLeaveHandler.bind(this);
        this._target.addEventListener("mouseleave", i);
        const watchedValue_s = this._contextMenuHandler.bind(this);
        this._target.addEventListener("contextmenu", watchedValue_s);
        const o = this._touchStartHandler.bind(this);
        let watchedValue_n;
        this._target.addEventListener("touchstart", o, {
          passive: !0
        }), r.isChrome && (watchedValue_n = watchedValue_e => {
          if (1 === watchedValue_e.button) return watchedValue_e.preventDefault(), !1
        }, this._target.addEventListener("mousedown", watchedValue_n));
        const a = this._mouseDownHandler.bind(this);
        this._target.addEventListener("mousedown", a);
        const l = this._wheelClickHandler.bind(this);
        this._target.addEventListener(c, l);
        const h = () => {};
        this._target.addEventListener("touchmove", h, {
          passive: !1
        }), this._unsubscribeTargetElementEvents = () => {
          this._target.removeEventListener("mouseleave", i), this._target.removeEventListener("contextmenu", watchedValue_s),
            this._target.removeEventListener("touchstart", o), watchedValue_n && this._target.removeEventListener("mousedown",
            watchedValue_n), this._target.removeEventListener("mousedown", a), this._target.removeEventListener(c, l), this
            ._target.removeEventListener("touchmove", h)
        }, this._initPinch()
      }
      _initPinch() {
        if (void 0 === this._handlers.pinchStartEvent && void 0 === this._handlers.pinchEvent && void 0 === this
          ._handlers.pinchEndEvent) return;
        const watchedValue_e = watchedValue_e => this._checkPinchState(watchedValue_e.touches);
        this._target.addEventListener("touchstart", watchedValue_e, {
          passive: !0
        });
        const t = watchedValue_e => {
          if (null === this._pinchInfo) return;
          const t = w(watchedValue_e.touches, (0, o.ensureNotNull)(this._activeTouchId)),
            i = w(watchedValue_e.touches, this._pinchInfo.secondTouchId);
          if (t && i && void 0 !== this._handlers.pinchEvent) {
            const {
              startPinchDistance: watchedValue_s,
              startPinchMiddlePoint: o
            } = this._pinchInfo, watchedValue_n = S(t, i) / watchedValue_s, r = y(this._target);
            this._handlers.pinchEvent(o, {
              x: t.clientX - r.left,
              y: t.clientY - r.top
            }, {
              x: i.clientX - r.left,
              y: i.clientY - r.top
            }, watchedValue_n), (0, a.preventDefault)(watchedValue_e)
          }
        };
        this._target.addEventListener("touchmove", t, {
          passive: !1
        });
        const i = watchedValue_e => this._checkPinchState(watchedValue_e.touches);
        this._target.addEventListener("touchend", i), this._unsubscribePinchEvents = () => {
          this._target.removeEventListener("touchstart", watchedValue_e), this._target.removeEventListener("touchmove", t), this
            ._target.addEventListener("touchend", i)
        }
      }
      _checkPinchState(watchedValue_e) {
        1 === watchedValue_e.length && (this._pinchPrevented = !1), 2 !== watchedValue_e.length || this._pinchPrevented || this._longTapActive ?
          this._stopPinch() : this._startPinch(watchedValue_e)
      }
      _startPinch(watchedValue_e) {
        if (void 0 !== this._handlers.pinchStartEvent && null === this._pinchInfo) {
          const t = y(this._target);
          let i, watchedValue_s;
          watchedValue_e[0].identifier === this._activeTouchId ? (i = watchedValue_e[0], watchedValue_s = watchedValue_e[1]) : (i = watchedValue_e[1], watchedValue_s = watchedValue_e[0]);
          const o = {
              x: i.clientX - t.left,
              y: i.clientY - t.top
            },
            watchedValue_n = {
              x: watchedValue_s.clientX - t.left,
              y: watchedValue_s.clientY - t.top
            },
            r = {
              x: (o.x + watchedValue_n.x) / 2,
              y: (o.y + watchedValue_n.y) / 2
            };
          this._handlers.pinchStartEvent(r, o, watchedValue_n, {
            bothPointsOnTargetElement: this._target.contains(watchedValue_s.target)
          }) && (this._pinchInfo = {
            startPinchDistance: S(i, watchedValue_s),
            startPinchMiddlePoint: r,
            secondTouchId: watchedValue_s.identifier
          })
        }
        this._clearLongTapTimeout()
      }
      _stopPinch() {
        null !== this._pinchInfo && (this._pinchInfo = null, this._handlers.pinchEndEvent?.())
      }
      _mouseLeaveHandler(watchedValue_e) {
        if (this._unsubscribeMousemove && this._unsubscribeMousemove(), this._firesTouchEvents(watchedValue_e)) return;
        if (!this._acceptMouseLeave) return;
        const t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(t, this._handlers.mouseLeaveEvent), this._acceptMouseLeave = !r.CheckMobile.iOS()
      }
      _longTapHandler(watchedValue_e) {
        const t = w(watchedValue_e.touches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        const i = this._makeCompatEvent(watchedValue_e, t);
        this._processTouchEvent(i, this._handlers.longTapEvent), this._processTouchEvent(i, this._handlers
          .touchContextMenuEvent), this._cancelTap = !0, this._longTapActive = !0
      }
      _contextMenuHandler(watchedValue_e) {
        if ((0, a.preventDefault)(watchedValue_e), null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(t, this._handlers.contextMenuEvent), this._cancelClick = !0
      }
      _firesTouchEvents(watchedValue_e) {
        return watchedValue_e.sourceCapabilities && void 0 !== watchedValue_e.sourceCapabilities.firesTouchEvents ? watchedValue_e.sourceCapabilities
          .firesTouchEvents : b(watchedValue_e) < this._lastTouchEventTimeStamp + 500
      }
      _processTouchEvent(watchedValue_e, t) {
        (0, l.setLastMouseOrTouchEventInfo)(watchedValue_e), t && t.call(this._handlers, watchedValue_e)
      }
      _processMouseEvent(watchedValue_e, t) {
        "mouseleave" !== watchedValue_e.srcType && (0, l.setLastMouseOrTouchEventInfo)(watchedValue_e), t && t.call(this._handlers, watchedValue_e)
      }
      _makeCompatEvent(watchedValue_e, t) {
        const i = t || watchedValue_e,
          o = (0, watchedValue_s.default)((() => this._target.getBoundingClientRect() || {
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
          ctrlKey: watchedValue_e.ctrlKey,
          altKey: watchedValue_e.altKey,
          shiftKey: watchedValue_e.shiftKey,
          metaKey: watchedValue_e.metaKey,
          isTouch: !watchedValue_e.type.startsWith("mouse") && "contextmenu" !== watchedValue_e.type && "click" !== watchedValue_e.type,
          stylus: "stylus" === t?.touchType,
          srcType: watchedValue_e.type,
          target: i.target,
          view: watchedValue_e.view,
          preventDefault: () => {
            "touchstart" !== watchedValue_e.type && (0, a.preventDefault)(watchedValue_e)
          }
        }
      }
    }

    function y(watchedValue_e) {
      return watchedValue_e.getBoundingClientRect() || {
        left: 0,
        top: 0
      }
    }

    function v(watchedValue_e) {
      return {
        x: watchedValue_e.pageX,
        y: watchedValue_e.pageY
      }
    }

    function S(watchedValue_e, t) {
      const i = watchedValue_e.clientX - t.clientX,
        watchedValue_s = watchedValue_e.clientY - t.clientY;
      return Math.sqrt(i * i + watchedValue_s * watchedValue_s)
    }

    function b(watchedValue_e) {
      return watchedValue_e.timeStamp || performance.now()
    }

    function w(watchedValue_e, t) {
      for (let i = 0; i < watchedValue_e.length; ++i)
        if (watchedValue_e[i].identifier === t) return watchedValue_e[i];
      return null
    }
}
