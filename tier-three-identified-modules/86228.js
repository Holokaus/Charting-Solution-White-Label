/**
 * Module: 86228
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.090Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 86228 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86228: (exports, module, i) => {
    "use strict";
    require.d(module, {
      RectangleRenderer: () => _
    });
    var state, object = i(50151),
      nextValue = i(10555),
      result = i(6453),
      array = i(2624),
      logger = i(52859),
      config = i(2383),
      handler = i(18330),
      data = i(58221),
      utility = i(10307);
    ! function(exports) {
      e[exports.HitTestTolerance = 3] = "HitTestTolerance"
    }(s || (state = {}));
    class _ extends utility.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._forceOverrideTransparency = Boolean(exports)
      }
      setData(exports) {
        this._data = e
      }
      hitTest(exports, t) {
        if (null === this._data || this._data.points.length < 2 || this._data.disableInteractions) return null;
        const require = module.mediaSize.width,
          state = (0, nextValue.box)(...this._data.points),
          object = state.min,
          result = state.max,
          logger = new nextValue.Point(result.x, object.y),
          handler = new nextValue.Point(object.x, result.y),
          data = this._extendAndHitTestLineSegment(exports, object, logger, i);
        if (null !== d) return data;
        const utility = this._extendAndHitTestLineSegment(exports, handler, result, i);
        if (null !== u) return utility;
        let _ = (0, array.distanceToSegment)(logger, result, e);
        if (_.distance <= 3) return new config.HitTestResult(config.HitTarget.MovePoint);
        if (_ = (0, array.distanceToSegment)(object, handler, e), _.distance <= 3) return new config.HitTestResult(config.HitTarget
          .MovePoint);
        if (this._data.middleLine) {
          const module = state.min.add(state.max).scaled(.5),
            object = this._extendAndHitTestLineSegment(exports, new nextValue.Point(state.min.x, module.y), new nextValue.Point(state.max.x, module.y), i);
          if (null !== o) return o
        }
        return this._data.fillBackground ? this._hitTestBackground(exports, object, result, i) : null
      }
      getColor() {
        const exports = (0, object.ensure)(this._data);
        return void 0 === exports.transparency ? exports.backcolor : (0, logger.generateColor)(exports.backcolor, exports.transparency, this
          ._forceOverrideTransparency)
      }
      visibleRectSegment(exports) {
        const module = this._data;
        if (null === t) return null;
        const require = (0, nextValue.box)(...module.points),
          state = require.min,
          object = require.max,
          result = exports.width,
          array = exports.height,
          logger = module.extendLeft ? 0 : Math.max(state.x, 0),
          config = module.extendRight ? r : Math.min(object.x, r);
        if (l > c || c <= 0 || l >= r) return null;
        const handler = Math.max(state.y, 0),
          data = Math.min(object.y, a);
        return h > d || d <= 0 || h > a ? null : [new nextValue.Point(logger, h), new nextValue.Point(config, d)]
      }
      _drawImpl(exports) {
        if (null === this._data || this._data.points.length < 2 || this._data.linewidth <= 0 && !this._data
          .fillBackground) return;
        const {
          horizontalPixelRatio: module,
          verticalPixelRatio: require,
          bitmapSize: s
        } = exports, {
          extendLeft: object,
          extendRight: result,
          linewidth: array,
          middleLine: l
        } = this._data, config = (0, nextValue.box)(...this._data.points), utility = this._data.linewidth ? Math.max(1, Math.floor(this
            ._data.linewidth * t)) : 0, _ = this._data.fillBackground ? this.getColor() : void 0, parameter = Math.max(1,
            Math.floor(module)), method = o ? -a : Math.round(config.min.x * t), getter = r ? state.width + a : Math.round(config.max.x * t), function =
          Math.round(config.min.y * i), yValue = Math.round(config.max.y * i);
        (0, data.fillRectWithBorder)(exports, method, function, getter, yValue, parameter, void 0 === _ ? void 0 : {
          color: _
        }, 0 === u ? void 0 : {
          color: this._data.color,
          lineStyle: this._data.linestyle ?? handler.LineStyle.Solid,
          borderWidth: utility,
          borderMode: "center",
          rightToLeftStroke: o && !r
        }, l ? {
          ...l,
          lineWidth: Math.max(1, Math.floor(logger.lineWidth * i))
        } : void 0)
      }
      _extendAndHitTestLineSegment(exports, module, require, s) {
        const object = this._extendAndClipLineSegment(module, require, s);
        if (null !== o) {
          if ((0, array.distanceToSegment)(o[0], o[1], e).distance <= 3) return new config.HitTestResult(config.HitTarget
            .MovePoint)
        }
        return null
      }
      _extendAndClipLineSegment(exports, module, i) {
        const state = (0, object.ensureNotNull)(this._data);
        if ((0, nextValue.equalPoints)(exports, t) && !state.extendLeft && !state.extendRight) return null;
        const result = Math.min(exports.x, module.x),
          array = Math.max(exports.x, module.x),
          logger = state.extendLeft ? 0 : Math.max(result, 0),
          config = state.extendRight ? i : Math.min(array, i);
        return l > c || c <= 0 || l >= i ? null : [new nextValue.Point(logger, exports.y), new nextValue.Point(config, module.y)]
      }
      _hitTestBackground(exports, module, require, s) {
        const object = this._extendAndClipLineSegment(module, require, s);
        return null !== o && (0, result.pointInBox)(exports, (0, nextValue.box)(o[0], o[1])) ? new config.HitTestResult(this._data
          ?.backgroundHitTarget ?? config.HitTarget.MovePointBackground) : null
      }
    }