/**
 * Module 62153 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62153: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      MouseEventHandler: () => watchedValue_f,
      defaultPreventedHandler: () => watchedValue_m,
      getClickPosition: () => _,
      isTouchMouseEvent: () => watchedValue_p
    });
    var watchedValue_s = watchedValue_i(81251),
      watchedValue_o = watchedValue_i(50151),
      watchedValue_n = watchedValue_i(87465),
      watchedValue_r = watchedValue_i(49483),
      watchedValue_a = watchedValue_i(80007),
      watchedValue_l = watchedValue_i(39612);
    const watchedValue_c = watchedValue_r.isSafari ? "click" : "auxclick";
    var watchedValue_h, watchedValue_d;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.ResetClick = 500] = "ResetClick", watchedValue_e[watchedValue_e.LongTap = 333] = "LongTap", watchedValue_e[watchedValue_e.PreventFiresTouchEvents = 500] =
        "PreventFiresTouchEvents"
    }(watchedValue_h || (watchedValue_h = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.CancelClickManhattanDistance = 5] = "CancelClickManhattanDistance", watchedValue_e[watchedValue_e.CancelTapManhattanDistance = 5] =
        "CancelTapManhattanDistance", watchedValue_e[watchedValue_e.DoubleClickManhattanDistance = 5] = "DoubleClickManhattanDistance", watchedValue_e[watchedValue_e
          .DoubleTapManhattanDistance = 30] = "DoubleTapManhattanDistance"
    }(watchedValue_d || (watchedValue_d = {}));
    const watchedValue_u = {
      treatVertTouchDragAsPageScroll: !1,
      treatHorzTouchDragAsPageScroll: !1,
      ignoreClickAndTapOnDblClickOrDblTap: !1
    };

    function _(watchedValue_e) {
      if (watchedValue_p(watchedValue_e)) return {
        watchedValue_x: watchedValue_e.clientX,
        watchedValue_y: watchedValue_e.clientY
      };
      if ("touches" in (watchedValue_t = watchedValue_e) && void 0 !== watchedValue_t.touches) {
        if (1 === watchedValue_e.touches.length) {
          const watchedValue_t = (0, watchedValue_o.ensureNotNull)(watchedValue_e.target).getBoundingClientRect(),
            watchedValue_i = watchedValue_e.touches[0];
          return {
            watchedValue_x: watchedValue_i.clientX - watchedValue_t.left,
            watchedValue_y: watchedValue_i.clientY - watchedValue_t.top
          }
        }
        return null
      }
      var watchedValue_t;
      return {
        watchedValue_x: watchedValue_e.offsetX,
        watchedValue_y: watchedValue_e.offsetY
      }
    }

    function watchedValue_p(watchedValue_e) {
      return "isTouch" in watchedValue_e && "stylus" in watchedValue_e
    }

    function watchedValue_m(watchedValue_e) {
      return watchedValue_t => {
        watchedValue_t.preventDefault(), watchedValue_e(watchedValue_t)
      }
    }

    function watchedValue_g(watchedValue_e, watchedValue_t) {
      let watchedValue_i = !1;
      return {
        clickOrTap: (...watchedValue_s) => {
          watchedValue_t?.() ? watchedValue_e.clickOrTap(...watchedValue_s) : (watchedValue_i = !1, setTimeout((() => !watchedValue_i && watchedValue_e.clickOrTap(...watchedValue_s)), 501))
        },
        doubleClickOrDoubleTap: (...watchedValue_t) => {
          watchedValue_i = !0, watchedValue_e.doubleClickOrDoubleTap?.(...watchedValue_t)
        }
      }
    }
    class watchedValue_f {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this._clickCount = 0, this._clickTimeoutId = null, this._clickPosition = {
            watchedValue_x: Number.NEGATIVE_INFINITY,
            watchedValue_y: Number.POSITIVE_INFINITY
          }, this._tapCount = 0, this._tapTimeoutId = null, this._tapPosition = {
            watchedValue_x: Number.NEGATIVE_INFINITY,
            watchedValue_y: Number.POSITIVE_INFINITY
          }, this._longTapTimeoutId = null, this._longTapActive = !1, this._mouseMoveStartPosition = null, this
          ._touchMoveStartPosition = null, this._touchMoveExceededManhattanDistance = !1, this._cancelClick = !1, this
          ._cancelTap = !1, this._unsubscribeOutsideMouseEvents = null, this._unsubscribeOutsideTouchEvents = null,
          this._unsubscribeMobileSafariEvents = null, this._unsubscribeMousemove = null,
          this._unsubscribeRootMouseEvents = null, this._unsubscribeRootTouchEvents = null, this
          ._unsubscribePinchEvents = null, this._unsubscribeTargetElementEvents = null, this._pinchInfo = null, this
          ._pinchPrevented = !1, this._preventTouchDragProcess = !1, this._mousePressed = !1, this
          ._lastTouchEventTimeStamp = 0, this._activeTouchId = null, this._acceptMouseLeave = !watchedValue_r.CheckMobile.iOS(),
          this._onFirefoxOutsideMouseUp = watchedValue_e => {
            this._mouseUpHandler(watchedValue_e)
          }, this._onMobileSafariDoubleClick = watchedValue_e => {
            if (this._firesTouchEvents(watchedValue_e)) {
              const watchedValue_t = this._makeCompatEvent(watchedValue_e);
              if (++this._tapCount, this._tapTimeoutId && this._tapCount > 1) {
                const {
                  manhattanDistance: watchedValue_i
                } = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_e), this._tapPosition);
                watchedValue_i < 30 && !this._cancelTap && this._processTouchEvent(watchedValue_t, this._handlers.doubleTapEvent), this
                  ._resetTapTimeout()
              }
            } else {
              const watchedValue_t = this._makeCompatEvent(watchedValue_e);
              if (++this._clickCount, this._clickTimeoutId && this._clickCount > 1) {
                const {
                  manhattanDistance: watchedValue_i
                } = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_e), this._clickPosition);
                watchedValue_i < 5 && !this._cancelClick && this._processMouseEvent(watchedValue_t, this._handlers.mouseDoubleClickEvent), this
                  ._resetClickTimeout()
              }
            }
          }, this._target = watchedValue_e, this._options = (0, watchedValue_n.merge)((0, watchedValue_n.clone)(watchedValue_u), watchedValue_i || {}), this._options
          .ignoreClickAndTapOnDblClickOrDblTap) {
          if (watchedValue_t.mouseClickEvent && watchedValue_t.mouseDoubleClickEvent) {
            const watchedValue_e = watchedValue_g({
              clickOrTap: watchedValue_t.mouseClickEvent.bind(watchedValue_t),
              doubleClickOrDoubleTap: watchedValue_t.mouseDoubleClickEvent.bind(watchedValue_t)
            });
            watchedValue_t.mouseClickEvent = watchedValue_e.clickOrTap, watchedValue_t.mouseDoubleClickEvent = watchedValue_e.doubleClickOrDoubleTap
          }
          if (watchedValue_t.tapEvent && watchedValue_t.doubleTapEvent) {
            const watchedValue_e = watchedValue_g({
              clickOrTap: watchedValue_t.tapEvent.bind(watchedValue_t),
              doubleClickOrDoubleTap: watchedValue_t.doubleTapEvent.bind(watchedValue_t)
            });
            watchedValue_t.tapEvent = watchedValue_e.clickOrTap, watchedValue_t.doubleTapEvent = watchedValue_e.doubleClickOrDoubleTap
          }
        }
        this._handlers = watchedValue_t, this._init()
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
        const watchedValue_t = this._mouseMoveHandler.bind(this);
        if (this._unsubscribeMousemove = () => {
            this._target.removeEventListener("mousemove", watchedValue_t)
          }, this._target.addEventListener("mousemove", watchedValue_t), this._firesTouchEvents(watchedValue_e)) return;
        const watchedValue_i = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_i, this._handlers.mouseEnterEvent), this._acceptMouseLeave = !0
      }
      _resetClickTimeout() {
        null !== this._clickTimeoutId && clearTimeout(this._clickTimeoutId), this._clickCount = 0, this
          ._clickTimeoutId = null, this._clickPosition = {
            watchedValue_x: Number.NEGATIVE_INFINITY,
            watchedValue_y: Number.POSITIVE_INFINITY
          }
      }
      _resetTapTimeout() {
        null !== this._tapTimeoutId && clearTimeout(this._tapTimeoutId), this._tapCount = 0, this._tapTimeoutId =
          null, this._tapPosition = {
            watchedValue_x: Number.NEGATIVE_INFINITY,
            watchedValue_y: Number.POSITIVE_INFINITY
          }
      }
      _mouseMoveHandler(watchedValue_e) {
        if (this._mousePressed || null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const watchedValue_t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_t, this._handlers.mouseMoveEvent), this._acceptMouseLeave = !0
      }
      _touchMoveHandler(watchedValue_e) {
        const watchedValue_t = watchedValue_w(watchedValue_e.changedTouches, (0, watchedValue_o.ensureNotNull)(this._activeTouchId));
        if (null === watchedValue_t) return;
        if (this._lastTouchEventTimeStamp = watchedValue_b(watchedValue_e), null !== this._pinchInfo) return;
        if (this._preventTouchDragProcess) return;
        this._pinchPrevented = !0;
        const watchedValue_i = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_t), (0, watchedValue_o.ensureNotNull)(this._touchMoveStartPosition)),
          {
            xOffset: watchedValue_s,
            yOffset: watchedValue_n,
            manhattanDistance: watchedValue_r
          } = watchedValue_i;
        if (this._touchMoveExceededManhattanDistance || !(watchedValue_r < 5)) {
          if (!this._touchMoveExceededManhattanDistance) {
            const watchedValue_e = .5 * watchedValue_s,
              watchedValue_t = this._options.shouldAllowTouchDrag?.() ?? !1,
              watchedValue_i = watchedValue_n >= watchedValue_e && (!this._options.treatVertTouchDragAsPageScroll || watchedValue_t),
              watchedValue_o = watchedValue_e > watchedValue_n && (!this._options.treatHorzTouchDragAsPageScroll || watchedValue_t);
            watchedValue_i || watchedValue_o || (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this
              ._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout()
          }
          if (!this._preventTouchDragProcess) {
            const watchedValue_i = this._makeCompatEvent(watchedValue_e, watchedValue_t);
            this._processTouchEvent(watchedValue_i, this._handlers.touchMoveEvent), (0, watchedValue_a.preventDefault)(watchedValue_e)
          }
        }
      }
      _mouseMoveWithDownHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const watchedValue_t = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_e), (0, watchedValue_o.ensureNotNull)(this._mouseMoveStartPosition)),
          {
            manhattanDistance: watchedValue_i
          } = watchedValue_t;
        if (watchedValue_i >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick) {
          const watchedValue_t = this._makeCompatEvent(watchedValue_e);
          this._processMouseEvent(watchedValue_t, this._handlers.pressedMouseMoveEvent)
        }
      }
      _touchMouseMoveWithDownInfo(watchedValue_e, watchedValue_t) {
        const watchedValue_i = Math.abs(watchedValue_t.watchedValue_x - watchedValue_e.watchedValue_x),
          watchedValue_s = Math.abs(watchedValue_t.watchedValue_y - watchedValue_e.watchedValue_y);
        return {
          xOffset: watchedValue_i,
          yOffset: watchedValue_s,
          manhattanDistance: watchedValue_i + watchedValue_s
        }
      }
      _touchEndHandler(watchedValue_e) {
        let watchedValue_t = watchedValue_w(watchedValue_e.changedTouches, (0, watchedValue_o.ensureNotNull)(this._activeTouchId));
        if (null === watchedValue_t && 0 === watchedValue_e.touches.length && (watchedValue_t = watchedValue_e.changedTouches[0]), null === watchedValue_t) return;
        this._activeTouchId = null, this._lastTouchEventTimeStamp = watchedValue_b(watchedValue_e), this._clearLongTapTimeout(), this
          ._touchMoveStartPosition = null, this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        const watchedValue_i = this._makeCompatEvent(watchedValue_e, watchedValue_t);
        if (this._processTouchEvent(watchedValue_i, this._handlers.touchEndEvent), ++this._tapCount, this._tapTimeoutId && this
          ._tapCount > 1) {
          const {
            manhattanDistance: watchedValue_e
          } = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_t), this._tapPosition);
          watchedValue_e < 30 && !this._cancelTap && this._processTouchEvent(watchedValue_i, this._handlers.doubleTapEvent), this
            ._resetTapTimeout()
        } else this._cancelTap || (this._processTouchEvent(watchedValue_i, this._handlers.tapEvent), this._handlers.tapEvent && (0,
          watchedValue_a.preventDefault)(watchedValue_e));
        0 === this._tapCount && (0, watchedValue_a.preventDefault)(watchedValue_e),
          0 === watchedValue_e.touches.length && this._longTapActive && (this._longTapActive = !1, (0, watchedValue_a.preventDefault)(watchedValue_e))
      }
      _touchCancelHandler(watchedValue_e) {
        this._touchEndHandler(watchedValue_e)
      }
      _mouseUpHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        const watchedValue_t = this._makeCompatEvent(watchedValue_e);
        if (this._mouseMoveStartPosition = null, this._mousePressed = !1, this._unsubscribeRootMouseEvents && (this
            ._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), watchedValue_r.isFF) {
          this._target.ownerDocument.documentElement.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp)
        }
        if (!this._firesTouchEvents(watchedValue_e))
          if (this._processMouseEvent(watchedValue_t, this._handlers.mouseUpEvent), ++this._clickCount, this._clickTimeoutId &&
            this._clickCount > 1) {
            const {
              manhattanDistance: watchedValue_i
            } = this._touchMouseMoveWithDownInfo(watchedValue_v(watchedValue_e), this._clickPosition);
            watchedValue_i < 5 && !this._cancelClick && this._processMouseEvent(watchedValue_t, this._handlers.mouseDoubleClickEvent), this
              ._resetClickTimeout()
          } else this._cancelClick || this._processMouseEvent(watchedValue_t, this._handlers.mouseClickEvent)
      }
      _clearLongTapTimeout() {
        null !== this._longTapTimeoutId && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null)
      }
      _touchStartHandler(watchedValue_e) {
        if (null !== this._activeTouchId) return this._clearLongTapTimeout(), void this._resetTapTimeout();
        const watchedValue_t = watchedValue_e.changedTouches[0];
        this._activeTouchId = watchedValue_t.identifier, this._lastTouchEventTimeStamp = watchedValue_b(watchedValue_e);
        const watchedValue_i = this._target.ownerDocument.documentElement;
        this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this
          ._touchMoveStartPosition = watchedValue_v(watchedValue_t), this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(),
            this._unsubscribeRootTouchEvents = null);
        {
          const watchedValue_t = this._touchMoveHandler.bind(this),
            watchedValue_s = this._touchEndHandler.bind(this);
          this._unsubscribeRootTouchEvents = () => {
            watchedValue_i.removeEventListener("touchmove", watchedValue_t), watchedValue_i.removeEventListener("touchend", watchedValue_s)
          }, watchedValue_i.addEventListener("touchmove", watchedValue_t, {
            passive: !1
          }), watchedValue_i.addEventListener("touchend", watchedValue_s, {
            passive: !1
          }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, watchedValue_e),
            333)
        }
        const watchedValue_s = this._makeCompatEvent(watchedValue_e, watchedValue_t);
        this._processTouchEvent(watchedValue_s, this._handlers.touchStartEvent), this._tapTimeoutId || (this._tapCount = 0, this
          ._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500), this._tapPosition = watchedValue_v(watchedValue_t))
      }
      _wheelClickHandler(watchedValue_e) {
        if (1 !== watchedValue_e.button) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const watchedValue_t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_t, this._handlers.wheelClickEvent)
      }
      _mouseDownHandler(watchedValue_e) {
        if (0 !== watchedValue_e.button) return;
        if (this._options.isMouseMoveHandlingEnabled && !this._options.isMouseMoveHandlingEnabled?.()) return;
        const watchedValue_t = this._target.ownerDocument.documentElement;
        watchedValue_r.isFF && watchedValue_t.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this
          ._mouseMoveStartPosition = watchedValue_v(watchedValue_e), this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(),
            this._unsubscribeRootMouseEvents = null);
        {
          const watchedValue_e = this._mouseMoveWithDownHandler.bind(this),
            watchedValue_i = this._mouseUpHandler.bind(this);
          this._unsubscribeRootMouseEvents = () => {
            watchedValue_t.removeEventListener("mousemove", watchedValue_e), watchedValue_t.removeEventListener("mouseup", watchedValue_i)
          }, watchedValue_t.addEventListener("mousemove", watchedValue_e), watchedValue_t.addEventListener("mouseup", watchedValue_i)
        }
        if (this._mousePressed = !0,
          this._firesTouchEvents(watchedValue_e)) return;
        const watchedValue_i = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_i, this._handlers.mouseDownEvent), this._clickTimeoutId || (this._clickCount = 0, this
          ._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500), this._clickPosition = watchedValue_v(watchedValue_e))
      }
      _init() {
        const watchedValue_e = this._mouseEnterHandler.bind(this);
        this._target.addEventListener("mouseenter", watchedValue_e);
        const watchedValue_t = this._touchCancelHandler.bind(this);
        this._target.addEventListener("touchcancel", watchedValue_t);
        {
          const watchedValue_e = this._target.ownerDocument,
            watchedValue_t = watchedValue_e => !watchedValue_e.target || !this._target.contains(watchedValue_e.target),
            watchedValue_i = watchedValue_e => {
              if (!watchedValue_t(watchedValue_e)) return;
              const watchedValue_i = watchedValue_e.changedTouches[0];
              this._lastTouchEventTimeStamp = watchedValue_b(watchedValue_e), this._processTouchEvent(this._makeCompatEvent(watchedValue_e, watchedValue_i), this
                ._handlers.touchStartOutsideEvent)
            },
            watchedValue_s = watchedValue_e => {
              watchedValue_t(watchedValue_e) && !this._firesTouchEvents(watchedValue_e) && this._processMouseEvent(this._makeCompatEvent(watchedValue_e), this._handlers
                .mouseDownOutsideEvent)
            };
          this._unsubscribeOutsideTouchEvents = () => {
            watchedValue_e.removeEventListener("touchstart", watchedValue_i)
          }, this._unsubscribeOutsideMouseEvents = () => {
            watchedValue_e.removeEventListener("mousedown", watchedValue_s)
          }, watchedValue_e.addEventListener("mousedown", watchedValue_s), watchedValue_e.addEventListener("touchstart", watchedValue_i, {
            passive: !0
          })
        }
        watchedValue_r.CheckMobile.iOS() && (this._unsubscribeMobileSafariEvents = () => {
          this._target.removeEventListener("dblclick", this._onMobileSafariDoubleClick)
        }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick));
        const watchedValue_i = this._mouseLeaveHandler.bind(this);
        this._target.addEventListener("mouseleave", watchedValue_i);
        const watchedValue_s = this._contextMenuHandler.bind(this);
        this._target.addEventListener("contextmenu", watchedValue_s);
        const watchedValue_o = this._touchStartHandler.bind(this);
        let watchedValue_n;
        this._target.addEventListener("touchstart", watchedValue_o, {
          passive: !0
        }), watchedValue_r.isChrome && (watchedValue_n = watchedValue_e => {
          if (1 === watchedValue_e.button) return watchedValue_e.preventDefault(), !1
        }, this._target.addEventListener("mousedown", watchedValue_n));
        const watchedValue_a = this._mouseDownHandler.bind(this);
        this._target.addEventListener("mousedown", watchedValue_a);
        const watchedValue_l = this._wheelClickHandler.bind(this);
        this._target.addEventListener(watchedValue_c, watchedValue_l);
        const watchedValue_h = () => {};
        this._target.addEventListener("touchmove", watchedValue_h, {
          passive: !1
        }), this._unsubscribeTargetElementEvents = () => {
          this._target.removeEventListener("mouseleave", watchedValue_i), this._target.removeEventListener("contextmenu", watchedValue_s),
            this._target.removeEventListener("touchstart", watchedValue_o), watchedValue_n && this._target.removeEventListener("mousedown",
            watchedValue_n), this._target.removeEventListener("mousedown", watchedValue_a), this._target.removeEventListener(watchedValue_c, watchedValue_l), this
            ._target.removeEventListener("touchmove", watchedValue_h)
        }, this._initPinch()
      }
      _initPinch() {
        if (void 0 === this._handlers.pinchStartEvent && void 0 === this._handlers.pinchEvent && void 0 === this
          ._handlers.pinchEndEvent) return;
        const watchedValue_e = watchedValue_e => this._checkPinchState(watchedValue_e.touches);
        this._target.addEventListener("touchstart", watchedValue_e, {
          passive: !0
        });
        const watchedValue_t = watchedValue_e => {
          if (null === this._pinchInfo) return;
          const watchedValue_t = watchedValue_w(watchedValue_e.touches, (0, watchedValue_o.ensureNotNull)(this._activeTouchId)),
            watchedValue_i = watchedValue_w(watchedValue_e.touches, this._pinchInfo.secondTouchId);
          if (watchedValue_t && watchedValue_i && void 0 !== this._handlers.pinchEvent) {
            const {
              startPinchDistance: watchedValue_s,
              startPinchMiddlePoint: watchedValue_o
            } = this._pinchInfo, watchedValue_n = S(watchedValue_t, watchedValue_i) / watchedValue_s, watchedValue_r = watchedValue_y(this._target);
            this._handlers.pinchEvent(watchedValue_o, {
              watchedValue_x: watchedValue_t.clientX - watchedValue_r.left,
              watchedValue_y: watchedValue_t.clientY - watchedValue_r.top
            }, {
              watchedValue_x: watchedValue_i.clientX - watchedValue_r.left,
              watchedValue_y: watchedValue_i.clientY - watchedValue_r.top
            }, watchedValue_n), (0, watchedValue_a.preventDefault)(watchedValue_e)
          }
        };
        this._target.addEventListener("touchmove", watchedValue_t, {
          passive: !1
        });
        const watchedValue_i = watchedValue_e => this._checkPinchState(watchedValue_e.touches);
        this._target.addEventListener("touchend", watchedValue_i), this._unsubscribePinchEvents = () => {
          this._target.removeEventListener("touchstart", watchedValue_e), this._target.removeEventListener("touchmove", watchedValue_t), this
            ._target.addEventListener("touchend", watchedValue_i)
        }
      }
      _checkPinchState(watchedValue_e) {
        1 === watchedValue_e.length && (this._pinchPrevented = !1), 2 !== watchedValue_e.length || this._pinchPrevented || this._longTapActive ?
          this._stopPinch() : this._startPinch(watchedValue_e)
      }
      _startPinch(watchedValue_e) {
        if (void 0 !== this._handlers.pinchStartEvent && null === this._pinchInfo) {
          const watchedValue_t = watchedValue_y(this._target);
          let watchedValue_i, watchedValue_s;
          watchedValue_e[0].identifier === this._activeTouchId ? (watchedValue_i = watchedValue_e[0], watchedValue_s = watchedValue_e[1]) : (watchedValue_i = watchedValue_e[1], watchedValue_s = watchedValue_e[0]);
          const watchedValue_o = {
              watchedValue_x: watchedValue_i.clientX - watchedValue_t.left,
              watchedValue_y: watchedValue_i.clientY - watchedValue_t.top
            },
            watchedValue_n = {
              watchedValue_x: watchedValue_s.clientX - watchedValue_t.left,
              watchedValue_y: watchedValue_s.clientY - watchedValue_t.top
            },
            watchedValue_r = {
              watchedValue_x: (watchedValue_o.watchedValue_x + watchedValue_n.watchedValue_x) / 2,
              watchedValue_y: (watchedValue_o.watchedValue_y + watchedValue_n.watchedValue_y) / 2
            };
          this._handlers.pinchStartEvent(watchedValue_r, watchedValue_o, watchedValue_n, {
            bothPointsOnTargetElement: this._target.contains(watchedValue_s.target)
          }) && (this._pinchInfo = {
            startPinchDistance: S(watchedValue_i, watchedValue_s),
            startPinchMiddlePoint: watchedValue_r,
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
        const watchedValue_t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_t, this._handlers.mouseLeaveEvent), this._acceptMouseLeave = !watchedValue_r.CheckMobile.iOS()
      }
      _longTapHandler(watchedValue_e) {
        const watchedValue_t = watchedValue_w(watchedValue_e.touches, (0, watchedValue_o.ensureNotNull)(this._activeTouchId));
        if (null === watchedValue_t) return;
        const watchedValue_i = this._makeCompatEvent(watchedValue_e, watchedValue_t);
        this._processTouchEvent(watchedValue_i, this._handlers.longTapEvent), this._processTouchEvent(watchedValue_i, this._handlers
          .touchContextMenuEvent), this._cancelTap = !0, this._longTapActive = !0
      }
      _contextMenuHandler(watchedValue_e) {
        if ((0, watchedValue_a.preventDefault)(watchedValue_e), null !== this._touchMoveStartPosition) return;
        if (this._firesTouchEvents(watchedValue_e)) return;
        const watchedValue_t = this._makeCompatEvent(watchedValue_e);
        this._processMouseEvent(watchedValue_t, this._handlers.contextMenuEvent), this._cancelClick = !0
      }
      _firesTouchEvents(watchedValue_e) {
        return watchedValue_e.sourceCapabilities && void 0 !== watchedValue_e.sourceCapabilities.firesTouchEvents ? watchedValue_e.sourceCapabilities
          .firesTouchEvents : watchedValue_b(watchedValue_e) < this._lastTouchEventTimeStamp + 500
      }
      _processTouchEvent(watchedValue_e, watchedValue_t) {
        (0, watchedValue_l.setLastMouseOrTouchEventInfo)(watchedValue_e), watchedValue_t && watchedValue_t.call(this._handlers, watchedValue_e)
      }
      _processMouseEvent(watchedValue_e, watchedValue_t) {
        "mouseleave" !== watchedValue_e.srcType && (0, watchedValue_l.setLastMouseOrTouchEventInfo)(watchedValue_e), watchedValue_t && watchedValue_t.call(this._handlers, watchedValue_e)
      }
      _makeCompatEvent(watchedValue_e, watchedValue_t) {
        const watchedValue_i = watchedValue_t || watchedValue_e,
          watchedValue_o = (0, watchedValue_s.default)((() => this._target.getBoundingClientRect() || {
            left: 0,
            top: 0
          }));
        return {
          clientX: watchedValue_i.clientX,
          clientY: watchedValue_i.clientY,
          pageX: watchedValue_i.pageX,
          pageY: watchedValue_i.pageY,
          screenX: watchedValue_i.screenX,
          screenY: watchedValue_i.screenY,
          get localX() {
            return watchedValue_i.clientX - watchedValue_o().left
          },
          get localY() {
            return watchedValue_i.clientY - watchedValue_o().top
          },
          ctrlKey: watchedValue_e.ctrlKey,
          altKey: watchedValue_e.altKey,
          shiftKey: watchedValue_e.shiftKey,
          metaKey: watchedValue_e.metaKey,
          isTouch: !watchedValue_e.type.startsWith("mouse") && "contextmenu" !== watchedValue_e.type && "click" !== watchedValue_e.type,
          stylus: "stylus" === watchedValue_t?.touchType,
          srcType: watchedValue_e.type,
          target: watchedValue_i.target,
          view: watchedValue_e.view,
          preventDefault: () => {
            "touchstart" !== watchedValue_e.type && (0, watchedValue_a.preventDefault)(watchedValue_e)
          }
        }
      }
    }

    function watchedValue_y(watchedValue_e) {
      return watchedValue_e.getBoundingClientRect() || {
        left: 0,
        top: 0
      }
    }

    function watchedValue_v(watchedValue_e) {
      return {
        watchedValue_x: watchedValue_e.pageX,
        watchedValue_y: watchedValue_e.pageY
      }
    }

    function S(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e.clientX - watchedValue_t.clientX,
        watchedValue_s = watchedValue_e.clientY - watchedValue_t.clientY;
      return Math.sqrt(watchedValue_i * watchedValue_i + watchedValue_s * watchedValue_s)
    }

    function watchedValue_b(watchedValue_e) {
      return watchedValue_e.timeStamp || performance.now()
    }

    function watchedValue_w(watchedValue_e, watchedValue_t) {
      for (let watchedValue_i = 0; watchedValue_i < watchedValue_e.length; ++watchedValue_i)
        if (watchedValue_e[watchedValue_i].identifier === watchedValue_t) return watchedValue_e[watchedValue_i];
      return null
    }