/**
 * Module 62153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62153: (e, t, i) => {
    "use strict";
    i.d(t, {
      MouseEventHandler: () => f,
      defaultPreventedHandler: () => m,
      getClickPosition: () => _,
      isTouchMouseEvent: () => p
    });
    var s = i(81251),
      o = i(50151),
      n = i(87465),
      r = i(49483),
      a = i(80007),
      l = i(39612);
    const c = r.isSafari ? "click" : "auxclick";
    var h, d;
    ! function(e) {
      e[e.ResetClick = 500] = "ResetClick", e[e.LongTap = 333] = "LongTap", e[e.PreventFiresTouchEvents = 500] =
        "PreventFiresTouchEvents"
    }(h || (h = {})),
    function(e) {
      e[e.CancelClickManhattanDistance = 5] = "CancelClickManhattanDistance", e[e.CancelTapManhattanDistance = 5] =
        "CancelTapManhattanDistance", e[e.DoubleClickManhattanDistance = 5] = "DoubleClickManhattanDistance", e[e
          .DoubleTapManhattanDistance = 30] = "DoubleTapManhattanDistance"
    }(d || (d = {}));
    const u = {
      treatVertTouchDragAsPageScroll: !1,
      treatHorzTouchDragAsPageScroll: !1,
      ignoreClickAndTapOnDblClickOrDblTap: !1
    };

    function _(e) {
      if (p(e)) return {
        x: e.clientX,
        y: e.clientY
      };
      if ("touches" in (t = e) && void 0 !== t.touches) {
        if (1 === e.touches.length) {
          const t = (0, o.ensureNotNull)(e.target).getBoundingClientRect(),
            i = e.touches[0];
          return {
            x: i.clientX - t.left,
            y: i.clientY - t.top
          }
        }
        return null
      }
      var t;
      return {
        x: e.offsetX,
        y: e.offsetY
      }
    }

    function p(e) {
      return "isTouch" in e && "stylus" in e
    }

    function m(e) {
      return t => {
        t.preventDefault(), e(t)
      }
    }

    function g(e, t) {
      let i = !1;
      return {
        clickOrTap: (...s) => {
          t?.() ? e.clickOrTap(...s) : (i = !1, setTimeout((() => !i && e.clickOrTap(...s)), 501))
        },
        doubleClickOrDoubleTap: (...t) => {
          i = !0, e.doubleClickOrDoubleTap?.(...t)
        }
      }
    }
    class f {
      constructor(e, t, i) {
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
          this._onFirefoxOutsideMouseUp = e => {
            this._mouseUpHandler(e)
          }, this._onMobileSafariDoubleClick = e => {
            if (this._firesTouchEvents(e)) {
              const t = this._makeCompatEvent(e);
              if (++this._tapCount, this._tapTimeoutId && this._tapCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(e), this._tapPosition);
                i < 30 && !this._cancelTap && this._processTouchEvent(t, this._handlers.doubleTapEvent), this
                  ._resetTapTimeout()
              }
            } else {
              const t = this._makeCompatEvent(e);
              if (++this._clickCount, this._clickTimeoutId && this._clickCount > 1) {
                const {
                  manhattanDistance: i
                } = this._touchMouseMoveWithDownInfo(v(e), this._clickPosition);
                i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
                  ._resetClickTimeout()
              }
            }
          }, this._target = e, this._options = (0, n.merge)((0, n.clone)(u), i || {}), this._options
          .ignoreClickAndTapOnDblClickOrDblTap) {
          if (t.mouseClickEvent && t.mouseDoubleClickEvent) {
            const e = g({
              clickOrTap: t.mouseClickEvent.bind(t),
              doubleClickOrDoubleTap: t.mouseDoubleClickEvent.bind(t)
            });
            t.mouseClickEvent = e.clickOrTap, t.mouseDoubleClickEvent = e.doubleClickOrDoubleTap
          }
          if (t.tapEvent && t.doubleTapEvent) {
            const e = g({
              clickOrTap: t.tapEvent.bind(t),
              doubleClickOrDoubleTap: t.doubleTapEvent.bind(t)
            });
            t.tapEvent = e.clickOrTap, t.doubleTapEvent = e.doubleClickOrDoubleTap
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
      _mouseEnterHandler(e) {
        this._unsubscribeMousemove && this._unsubscribeMousemove();
        const t = this._mouseMoveHandler.bind(this);
        if (this._unsubscribeMousemove = () => {
            this._target.removeEventListener("mousemove", t)
          }, this._target.addEventListener("mousemove", t), this._firesTouchEvents(e)) return;
        const i = this._makeCompatEvent(e);
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
      _mouseMoveHandler(e) {
        if (this._mousePressed || null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(e)) return;
        const t = this._makeCompatEvent(e);
        this._processMouseEvent(t, this._handlers.mouseMoveEvent), this._acceptMouseLeave = !0
      }
      _touchMoveHandler(e) {
        const t = w(e.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        if (this._lastTouchEventTimeStamp = b(e), null !== this._pinchInfo) return;
        if (this._preventTouchDragProcess) return;
        this._pinchPrevented = !0;
        const i = this._touchMouseMoveWithDownInfo(v(t), (0, o.ensureNotNull)(this._touchMoveStartPosition)),
          {
            xOffset: s,
            yOffset: n,
            manhattanDistance: r
          } = i;
        if (this._touchMoveExceededManhattanDistance || !(r < 5)) {
          if (!this._touchMoveExceededManhattanDistance) {
            const e = .5 * s,
              t = this._options.shouldAllowTouchDrag?.() ?? !1,
              i = n >= e && (!this._options.treatVertTouchDragAsPageScroll || t),
              o = e > n && (!this._options.treatHorzTouchDragAsPageScroll || t);
            i || o || (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this
              ._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout()
          }
          if (!this._preventTouchDragProcess) {
            const i = this._makeCompatEvent(e, t);
            this._processTouchEvent(i, this._handlers.touchMoveEvent), (0, a.preventDefault)(e)
          }
        }
      }
      _mouseMoveWithDownHandler(e) {
        if (0 !== e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._touchMouseMoveWithDownInfo(v(e), (0, o.ensureNotNull)(this._mouseMoveStartPosition)),
          {
            manhattanDistance: i
          } = t;
        if (i >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick) {
          const t = this._makeCompatEvent(e);
          this._processMouseEvent(t, this._handlers.pressedMouseMoveEvent)
        }
      }
      _touchMouseMoveWithDownInfo(e, t) {
        const i = Math.abs(t.x - e.x),
          s = Math.abs(t.y - e.y);
        return {
          xOffset: i,
          yOffset: s,
          manhattanDistance: i + s
        }
      }
      _touchEndHandler(e) {
        let t = w(e.changedTouches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t && 0 === e.touches.length && (t = e.changedTouches[0]), null === t) return;
        this._activeTouchId = null, this._lastTouchEventTimeStamp = b(e), this._clearLongTapTimeout(), this
          ._touchMoveStartPosition = null, this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        const i = this._makeCompatEvent(e, t);
        if (this._processTouchEvent(i, this._handlers.touchEndEvent), ++this._tapCount, this._tapTimeoutId && this
          ._tapCount > 1) {
          const {
            manhattanDistance: e
          } = this._touchMouseMoveWithDownInfo(v(t), this._tapPosition);
          e < 30 && !this._cancelTap && this._processTouchEvent(i, this._handlers.doubleTapEvent), this
            ._resetTapTimeout()
        } else this._cancelTap || (this._processTouchEvent(i, this._handlers.tapEvent), this._handlers.tapEvent && (0,
          a.preventDefault)(e));
        0 === this._tapCount && (0, a.preventDefault)(e),
          0 === e.touches.length && this._longTapActive && (this._longTapActive = !1, (0, a.preventDefault)(e))
      }
      _touchCancelHandler(e) {
        this._touchEndHandler(e)
      }
      _mouseUpHandler(e) {
        if (0 !== e.button) return;
        const t = this._makeCompatEvent(e);
        if (this._mouseMoveStartPosition = null, this._mousePressed = !1, this._unsubscribeRootMouseEvents && (this
            ._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), r.isFF) {
          this._target.ownerDocument.documentElement.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp)
        }
        if (!this._firesTouchEvents(e))
          if (this._processMouseEvent(t, this._handlers.mouseUpEvent), ++this._clickCount, this._clickTimeoutId &&
            this._clickCount > 1) {
            const {
              manhattanDistance: i
            } = this._touchMouseMoveWithDownInfo(v(e), this._clickPosition);
            i < 5 && !this._cancelClick && this._processMouseEvent(t, this._handlers.mouseDoubleClickEvent), this
              ._resetClickTimeout()
          } else this._cancelClick || this._processMouseEvent(t, this._handlers.mouseClickEvent)
      }
      _clearLongTapTimeout() {
        null !== this._longTapTimeoutId && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null)
      }
      _touchStartHandler(e) {
        if (null !== this._activeTouchId) return this._clearLongTapTimeout(), void this._resetTapTimeout();
        const t = e.changedTouches[0];
        this._activeTouchId = t.identifier, this._lastTouchEventTimeStamp = b(e);
        const i = this._target.ownerDocument.documentElement;
        this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this
          ._touchMoveStartPosition = v(t), this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        {
          const t = this._touchMoveHandler.bind(this),
            s = this._touchEndHandler.bind(this);
          this._unsubscribeRootTouchEvents = () => {
            i.removeEventListener("touchmove", t), i.removeEventListener("touchend", s)
          }, i.addEventListener("touchmove", t, {
            passive: !1
          }), i.addEventListener("touchend", s, {
            passive: !1
          }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, e),
            333)
        }
        const s = this._makeCompatEvent(e, t);
        this._processTouchEvent(s, this._handlers.touchStartEvent), this._tapTimeoutId || (this._tapCount = 0, this
          ._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500), this._tapPosition = v(t))
      }
      _wheelClickHandler(e) {
        if (1 !== e.button) return;
        if (this._firesTouchEvents(e)) return;
        const t = this._makeCompatEvent(e);
        this._processMouseEvent(t, this._handlers.wheelClickEvent)
      }
      _mouseDownHandler(e) {
        if (0 !== e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const t = this._target.ownerDocument.documentElement;
        r.isFF && t.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this
          ._mouseMoveStartPosition = v(e), this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(),
            this._unsubscribeRootMouseEvents = null);
        {
          const e = this._mouseMoveWithDownHandler.bind(this),
            i = this._mouseUpHandler.bind(this);
          this._unsubscribeRootMouseEvents = () => {
            t.removeEventListener("mousemove", e), t.removeEventListener("mouseup", i)
          }, t.addEventListener("mousemove", e), t.addEventListener("mouseup", i)
        }
        if (this._mousePressed = !0,
          this._firesTouchEvents(e)) return;
        const i = this._makeCompatEvent(e);
        this._processMouseEvent(i, this._handlers.mouseDownEvent), this._clickTimeoutId || (this._clickCount = 0, this
          ._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500), this._clickPosition = v(e))
      }
      _init() {
        const e = this._mouseEnterHandler.bind(this);
        this._target.addEventListener("mouseenter", e);
        const t = this._touchCancelHandler.bind(this);
        this._target.addEventListener("touchcancel", t);
        {
          const e = this._target.ownerDocument,
            t = e => !e.target || !this._target.contains(e.target),
            i = e => {
              if (!t(e)) return;
              const i = e.changedTouches[0];
              this._lastTouchEventTimeStamp = b(e), this._processTouchEvent(this._makeCompatEvent(e, i), this
                ._handlers.touchStartOutsideEvent)
            },
            s = e => {
              t(e) && !this._firesTouchEvents(e) && this._processMouseEvent(this._makeCompatEvent(e), this._handlers
                .mouseDownOutsideEvent)
            };
          this._unsubscribeOutsideTouchEvents = () => {
            e.removeEventListener("touchstart", i)
          }, this._unsubscribeOutsideMouseEvents = () => {
            e.removeEventListener("mousedown", s)
          }, e.addEventListener("mousedown", s), e.addEventListener("touchstart", i, {
            passive: !0
          })
        }
        r.CheckMobile.iOS() && (this._unsubscribeMobileSafariEvents = () => {
          this._target.removeEventListener("dblclick", this._onMobileSafariDoubleClick)
        }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick));
        const i = this._mouseLeaveHandler.bind(this);
        this._target.addEventListener("mouseleave", i);
        const s = this._contextMenuHandler.bind(this);
        this._target.addEventListener("contextmenu", s);
        const o = this._touchStartHandler.bind(this);
        let n;
        this._target.addEventListener("touchstart", o, {
          passive: !0
        }), r.isChrome && (n = e => {
          if (1 === e.button) return e.preventDefault(), !1
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
        const e = e => this._checkPinchState(e.touches);
        this._target.addEventListener("touchstart", e, {
          passive: !0
        });
        const t = e => {
          if (null === this._pinchInfo) return;
          const t = w(e.touches, (0, o.ensureNotNull)(this._activeTouchId)),
            i = w(e.touches, this._pinchInfo.secondTouchId);
          if (t && i && void 0 !== this._handlers.pinchEvent) {
            const {
              startPinchDistance: s,
              startPinchMiddlePoint: o
            } = this._pinchInfo, n = S(t, i) / s, r = y(this._target);
            this._handlers.pinchEvent(o, {
              x: t.clientX - r.left,
              y: t.clientY - r.top
            }, {
              x: i.clientX - r.left,
              y: i.clientY - r.top
            }, n), (0, a.preventDefault)(e)
          }
        };
        this._target.addEventListener("touchmove", t, {
          passive: !1
        });
        const i = e => this._checkPinchState(e.touches);
        this._target.addEventListener("touchend", i), this._unsubscribePinchEvents = () => {
          this._target.removeEventListener("touchstart", e), this._target.removeEventListener("touchmove", t), this
            ._target.addEventListener("touchend", i)
        }
      }
      _checkPinchState(e) {
        1 === e.length && (this._pinchPrevented = !1), 2 !== e.length || this._pinchPrevented || this._longTapActive ?
          this._stopPinch() : this._startPinch(e)
      }
      _startPinch(e) {
        if (void 0 !== this._handlers.pinchStartEvent && null === this._pinchInfo) {
          const t = y(this._target);
          let i, s;
          e[0].identifier === this._activeTouchId ? (i = e[0], s = e[1]) : (i = e[1], s = e[0]);
          const o = {
              x: i.clientX - t.left,
              y: i.clientY - t.top
            },
            n = {
              x: s.clientX - t.left,
              y: s.clientY - t.top
            },
            r = {
              x: (o.x + n.x) / 2,
              y: (o.y + n.y) / 2
            };
          this._handlers.pinchStartEvent(r, o, n, {
            bothPointsOnTargetElement: this._target.contains(s.target)
          }) && (this._pinchInfo = {
            startPinchDistance: S(i, s),
            startPinchMiddlePoint: r,
            secondTouchId: s.identifier
          })
        }
        this._clearLongTapTimeout()
      }
      _stopPinch() {
        null !== this._pinchInfo && (this._pinchInfo = null, this._handlers.pinchEndEvent?.())
      }
      _mouseLeaveHandler(e) {
        if (this._unsubscribeMousemove && this._unsubscribeMousemove(), this._firesTouchEvents(e)) return;
        if (!this._acceptMouseLeave) return;
        const t = this._makeCompatEvent(e);
        this._processMouseEvent(t, this._handlers.mouseLeaveEvent), this._acceptMouseLeave = !r.CheckMobile.iOS()
      }
      _longTapHandler(e) {
        const t = w(e.touches, (0, o.ensureNotNull)(this._activeTouchId));
        if (null === t) return;
        const i = this._makeCompatEvent(e, t);
        this._processTouchEvent(i, this._handlers.longTapEvent), this._processTouchEvent(i, this._handlers
          .touchContextMenuEvent), this._cancelTap = !0, this._longTapActive = !0
      }
      _contextMenuHandler(e) {
        if ((0, a.preventDefault)(e), null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(e)) return;
        const t = this._makeCompatEvent(e);
        this._processMouseEvent(t, this._handlers.contextMenuEvent), this._cancelClick = !0
      }
      _firesTouchEvents(e) {
        return e.sourceCapabilities && void 0 !== e.sourceCapabilities.firesTouchEvents ? e.sourceCapabilities
          .firesTouchEvents : b(e) < this._lastTouchEventTimeStamp + 500
      }
      _processTouchEvent(e, t) {
        (0, l.setLastMouseOrTouchEventInfo)(e), t && t.call(this._handlers, e)
      }
      _processMouseEvent(e, t) {
        "mouseleave" !== e.srcType && (0, l.setLastMouseOrTouchEventInfo)(e), t && t.call(this._handlers, e)
      }
      _makeCompatEvent(e, t) {
        const i = t || e,
          o = (0, s.default)((() => this._target.getBoundingClientRect() || {
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
          ctrlKey: e.ctrlKey,
          altKey: e.altKey,
          shiftKey: e.shiftKey,
          metaKey: e.metaKey,
          isTouch: !e.type.startsWith("mouse") && "contextmenu" !== e.type && "click" !== e.type,
          stylus: "stylus" === t?.touchType,
          srcType: e.type,
          target: i.target,
          view: e.view,
          preventDefault: () => {
            "touchstart" !== e.type && (0, a.preventDefault)(e)
          }
        }
      }
    }

    function y(e) {
      return e.getBoundingClientRect() || {
        left: 0,
        top: 0
      }
    }

    function v(e) {
      return {
        x: e.pageX,
        y: e.pageY
      }
    }

    function S(e, t) {
      const i = e.clientX - t.clientX,
        s = e.clientY - t.clientY;
      return Math.sqrt(i * i + s * s)
    }

    function b(e) {
      return e.timeStamp || performance.now()
    }

    function w(e, t) {
      for (let i = 0; i < e.length; ++i)
        if (e[i].identifier === t) return e[i];
      return null
    }