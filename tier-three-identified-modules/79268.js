/**
 * Module: 79268
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.045Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 79268 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79268: (exports, module, i) => {
    "use strict";
    require.d(module, {
      PaneRendererLine: () => getter,
      PaneRendererLineItemsIterator: () => method,
      isValidPoint: () => p
    });
    var state = i(50151),
      object = i(10555),
      nextValue = i(2624),
      result = i(2383),
      array = i(4539),
      logger = i(58221),
      config = i(10307),
      handler = i(4699),
      data = i(12217),
      utility = i(85565);
    const _ = {
      y: NaN
    };

    function p(exports) {
      return null !== e && !isNaN(exports.y)
    }
    class m {
      constructor(exports, module, require, o) {
        this._calculatedPrev = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, this._calculatedCurrent = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, this._calculatedNext = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, this._preallocatedVariable = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, exports.length && ((0, state.assert)(t <= require, "First index must be less or equal to last index"), (0, state.assert)(t <
            exports.length, "First index must be less then array length"), (0, state.assert)(i <= exports.length,
            "Last index must be less or equal to array length")), this._items = exports, this._firstIndexWithRange = module, this
          ._lastIndexWithRange = require, this._skipHoles = o
      }
      next() {
        if (0 === this._items.length) return !1;
        if (null !== this._calculatedNext.index) return null !== this._calculatedNext.value && (this._calculatedPrev =
          this._calculatedCurrent, this._calculatedCurrent = this._calculatedNext, this._calculatedNext = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, !0);
        let exports;
        this._preallocatedVariable = {
          ...this._calculatedCurrent
        };
        do {
          null === this._preallocatedVariable.index ? (this._preallocatedVariable.index = this._firstIndexWithRange,
            this._preallocatedVariable.currentBreakProcessed = !1, exports = this._preallocatedVariable.index < this
            ._lastIndexWithRange) : (this._incrementPointer(this._preallocatedVariable), exports = this._isValidPointer(
            this._preallocatedVariable)), e && this._calcVaue(this._preallocatedVariable)
        } while (e && this._skipHoles && !p(this._preallocatedVariable.value));
        return e && (this._calculatedPrev = this._calculatedCurrent, this._calculatedCurrent = this
          ._preallocatedVariable, this._calculatedNext = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }), e
      }
      prevValue() {
        return this._calculatedPrev.value
      }
      currentValue() {
        return (0, state.ensureNotNull)(this._calculatedCurrent.value)
      }
      currentValueIsLast() {
        return (0, state.ensureNotNull)(this._calculatedCurrent.index) === this._items.length - 1
      }
      currentValueIsFirst() {
        return 0 === (0, state.ensureNotNull)(this._calculatedCurrent.index)
      }
      nextValue() {
        if (null !== this._calculatedNext.index) return this._calculatedNext.value;
        let exports;
        this._calculatedNext = {
          ...this._calculatedCurrent,
          value: null
        };
        do {
          this._incrementPointer(this._calculatedNext), exports = this._isValidPointer(this._calculatedNext), e ? this
            ._calcVaue(this._calculatedNext) : this._calculatedNext.value = null
        } while (e && this._skipHoles && !p(this._calculatedNext.value));
        return this._calculatedNext.value
      }
      atStart() {
        return this._calculatedCurrent.index === this._firstIndexWithRange && !this._calculatedCurrent
          .currentBreakProcessed
      }
      atEnd() {
        const exports = (0, state.ensureNotNull)(this._calculatedCurrent.index);
        return e < this._lastIndexWithRange && (this._calculatedCurrent.currentBreakProcessed || !this
          ._needBreakBefore(exports))
      }
      _needBreakBefore(exports) {
        return !!this._items[e].breakBefore && !this._skipHoles
      }
      _calcVaue(exports) {
        const module = (0, state.ensureNotNull)(exports.index);
        this._needBreakBefore(module) && !exports.currentBreakProcessed ? exports.value = _ : exports.value = this._items[t]
      }
      _incrementPointer(exports) {
        const module = (0, state.ensureNotNull)(exports.index);
        this._needBreakBefore(module) && !this._calculatedCurrent.currentBreakProcessed ? exports.currentBreakProcessed = !0 : (e
          .index = t + 1, exports.currentBreakProcessed = !1)
      }
      _isValidPointer(exports) {
        const module = (0, state.ensureNotNull)(exports.index);
        return t < this._lastIndexWithRange || module === this._lastIndexWithRange - 1 && this._needBreakBefore(module) && e
          .currentBreakProcessed
      }
    }
    class g extends config.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = e
      }
      hitTest(exports) {
        const module = (0, array.interactionTolerance)().series + this._data.lineWidth / 2;
        let require = this._data.visibleItemsRange?.startItemIndex ?? 0,
          state = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (; s - i > 2;) {
          const module = Math.round((s + i) / 2);
          this._data.items[t].center <= exports.x ? require = t : state = t
        }
        require = Math.max(1, i - 1), state = Math.min(this._data.items.length - 1, s + 1);
        for (let array = require; a <= state; ++a) {
          const require = this._data.items[a - 1],
            state = this._data.items[a],
            logger = require.center,
            config = state.center;
          if ((0, nextValue.distanceToSegment)(new object.Point(logger, require.y), new object.Point(config, state.y), new object.Point(exports.x, exports.y)).distance <=
            t) return this._data.hittest ? this._data.hittest : new result.HitTestResult(result.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(exports) {
        const {
          context: module,
          horizontalPixelRatio: require,
          verticalPixelRatio: s
        } = exports;
        module.scale(require, s), module.lineCap = "round", module.lineJoin = "round", (0, handler.applyColor)(exports, this._data.lineColor, 0, 3),
          module.lineWidth = this._data.lineWidth, (0, logger.setLineStyle)(module, this._data.lineStyle), (0, array.setValidLineStyle)
          (module, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(exports) : this._drawLines(module)
      }
      _drawSimpleMode(exports) {
        const {
          context: module,
          horizontalPixelRatio: require,
          verticalPixelRatio: s
        } = exports;
        module.beginPath(), this._walkLine(module, this._data.items, !1, NaN), module.stroke();
        const object = this._data.lineWidth + 2;
        if (this._data.withMarkers && 2 * o < this._data.barSpacing) {
          module.scale(1 / require, 1 / s), (0, handler.applyColor)(exports, this._data.lineColor, 1, 2);
          const nextValue = Math.max(1, Math.floor(require)) % 2 / 2,
            result = o * s + nextValue,
            array = 2 * Math.PI;
          module.beginPath();
          const logger = this._data.visibleItemsRange?.startItemIndex ?? 0;
          for (let exports = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1 + 1; e-- >= logger;) {
            const object = this._data.items[e];
            if (object) {
              const exports = Math.round(object.center * i) + nextValue,
                logger = object.y * state;
              module.moveTo(exports, l), module.arc(exports, logger, result, 0, a)
            }
          }
          module.fill()
        }
      }
      _walkLine(exports, module, require, state, object, nextValue, r) {
        if (!t) return {
          distance: 0,
          dashPattern: []
        };
        const array = .25 * this._data.barSpacing;
        let logger, config, handler = null;
        const _ = o ? 0 : this._data.visibleItemsRange?.startItemIndex ?? 0,
          getter = o ? module.length : Math.min(this._data.visibleItemsRange?.endItemIndex ?? module.length, module.length);
        if (_ > g || _ >= module.length) return {
          distance: 0,
          dashPattern: []
        };
        if (!n) {
          const {
            distance: nextValue,
            dashPattern: a
          } = this._walkLine(exports, module, require, state, object, !0, r), logger = (0, data.sum)(array);
          if (l > 0) {
            const module = n % logger;
            exports.lineDashOffset = l - t - a[1]
          }
        }
        const function = new utility.SmartDashCanvas(exports, !!n, r),
          yValue = new m(module, _, getter, this._data.skipHoles);
        for (; yValue.next();) {
          if (logger = yValue.currentValue(), config = yValue.nextValue(), p(logger)) {
            const exports = Math.round(logger.center);
            h && p(handler) ? (function.lineTo(exports, logger.y), i && !p(config) && function.lineTo(exports, s)) : c && p(config) ? i ? (yValue.atStart() || function.lineTo(
              exports, s), function.lineTo(exports, logger.y)) : function.moveTo(exports, logger.y) : i ? (yValue.atStart() || function.lineTo(e - array, s), function.lineTo(e -
              array, logger.y), function.lineTo(e + array, logger.y), function.lineTo(e + array, s)) : (function.moveTo(e - array, logger.y), function.lineTo(e + array, logger.y))
          }
          handler = l
        }
        return {
          distance: function.lastSegmentDistance(),
          dashPattern: function.lastSegmentDashPattern()
        }
      }
      _drawLines(exports, t) {
        if (!this._data.items.length || 0 === this._data.lineWidth) return {
          distance: 0,
          dashPattern: []
        };
        let require, state, object = null;
        const nextValue = .25 * this._data.barSpacing,
          result = new utility.SmartDashCanvas(exports, !!t);
        let array = 0;
        if (!t) {
          const {
            distance: module,
            dashPattern: i
          } = this._drawLines(exports, !0), state = (0, data.sum)(require);
          if (s > 0) {
            const object = t % state;
            exports.lineDashOffset = array = s - o - i[1]
          }
        }
        result.beginPath();
        const logger = this._data.visibleItemsRange?.startItemIndex ?? 0,
          config = this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length;
        if (l > c || l >= this._data.items.length) return {
          distance: 0,
          dashPattern: []
        };
        const handler = this._data.items[l];
        h && result.moveTo(handler.center, handler.y);
        let _, getter = exports.strokeStyle,
          function = exports.lineWidth;
        const yValue = new m(this._data.items, logger, config, this._data.skipHoles);
        for (; yValue.next();) {
          let logger, config, handler;
          object = yValue.prevValue(), require = yValue.currentValue(), state = yValue.nextValue();
          let utility = !1,
            method = !1,
            watcher = !1;
          if (p(require) && (require.style && !this._data.forceLineColor ? (logger = require.style.color, config = require.style.width, handler = require.style
                .style) : (logger = this._data.lineColor, config = this._data.lineWidth, handler = this._data.lineStyle), this._data
              .ignorePaletteLineWidth && (config = this._data.lineWidth), method = h !== _, watcher = c !== function, utility = l !== g || m || w
              ), u) {
            if (getter = logger, function = config, _ = handler, result.stroke(), result.beginPath(), !t) {
              result.setStrokeStyle(logger);
              const module = result.lastSegmentDistance(),
                require = result.lastSegmentDashPattern(),
                state = (0, data.sum)(require);
              if (s > 0) {
                const require = t % state;
                exports.lineDashOffset = i + a
              }
            }
            if (result.setLineWidth(config), result.setLineStyle(handler), p(object)) result.moveTo(object.center, object.y);
            else {
              const exports = require;
              result.moveTo(exports.center, exports.y)
            }
          }
          value = object, boolean = state, p(S = i) && (p(value) ? result.lineTo(S.center, S.y) : b && p(boolean) ? result.moveTo(S.center, S.y) : (r
            .moveTo(S.center - nextValue, S.y), result.lineTo(S.center + nextValue, S.y)))
        }
        var value, S, boolean;
        return result.stroke(), {
          distance: result.lastSegmentDistance(),
          dashPattern: result.lastSegmentDashPattern()
        }
      }
    }