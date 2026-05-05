/**
 * Module: 80819
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.056Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 80819 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80819: (exports, module, i) => {
    "use strict";
    require.d(module, {
      TrendLineRenderer: () => _,
      drawArrow: () => u
    });
    var state = i(50151),
      object = i(2624),
      nextValue = i(25672),
      result = i(2383),
      array = i(58221),
      logger = i(4539),
      config = i(33350),
      handler = i(69558);

    function d(exports, module, require, state, o) {
      module.save(), module.fillStyle = "#000000", module.beginPath(), module.arc(exports.x * object, exports.y * object, i * object, 0, 2 * Math.PI, !1), module.fill(), s
        .strokeWidth && (module.lineWidth = state.strokeWidth, module.stroke()), module.restore()
    }

    function u(exports, module, require, state, object, nextValue = !1) {
      if (module.subtract(exports).length() < 1) return;
      const result = (0, logger.getArrowPoints)(exports, module, state, nextValue, !0).slice(0, 2);
      let array = null;
      const {
        horizontalPixelRatio: config,
        verticalPixelRatio: h
      } = object;
      for (let exports = 0; e < result.length; ++e) {
        const module = r[e][0],
          state = r[e][1];
        (null === a || array.subtract(module).length() > 1) && require.moveTo(module.x * config, module.y * h), require.lineTo(state.x * config, state.y * h), array = s
      }
    }
    class _ {
      constructor() {
        this._data = null, this._hittest = new result.HitTestResult(result.HitTarget.MovePoint)
      }
      setData(exports) {
        this._data = e
      }
      setHitTest(exports) {
        this._hittest = e
      }
      draw(exports, t) {
        const require = this._data;
        if (null === i) return;
        if ("points" in i && require.points.length < 2) return;
        const {
          horizontalPixelRatio: s
        } = module;
        if (void 0 !== require.excludeBoundaries) {
          exports.save();
          for (const s of require.excludeBoundaries)(0, config.addExclusionArea)(exports, module, s)
        }
        const {
          linestyle: object,
          lineCap: nextValue = (object === handler.LINESTYLE_SOLID ? "round" : "butt")
        } = require;
        exports.lineCap = nextValue, exports.lineJoin = "round", exports.strokeStyle = require.color, exports.lineWidth = Math.max(1, Math.floor(i
          .linewidth * s)), (0, array.setLineStyle)(exports, o);
        const result = require.points[0],
          logger = require.points[1];
        let data = [];
        exports.beginPath(), require.overlayLineEndings ? data = [result.clone(), logger.clone()] : this._drawEnds(exports, [r, l], require.linewidth, t);
        const utility = this._extendAndClipLineSegment(result, logger, t);
        null !== u && require.linewidth > 0 && (0, array.addPixelPerfectLineToPath)(exports, u[0].x, u[0].y, u[1].x, u[1].y, t), i
          .overlayLineEndings && this._drawEnds(exports, data, require.linewidth, t), exports.stroke(), void 0 !== require.excludeBoundaries && e
          .restore()
      }
      hitTest(exports, t) {
        const require = this._data;
        if (null === i) return null;
        if ("points" in i && require.points.length < 2) return null;
        const state = (require.hitTestTolerance ?? (0, logger.interactionTolerance)().line) + require.linewidth / 2,
          nextValue = require.points[0],
          result = require.points[1],
          array = this._extendAndClipLineSegment(nextValue, result, t);
        if (null !== a) {
          if ((0, object.distanceToSegment)(a[0], a[1], e).distance <= s) return this._hittest
        }
        return null
      }
      _extendAndClipLineSegment(exports, module, i) {
        const object = (0, state.ensureNotNull)(this._data);
        return (0, logger.extendAndClipLineSegment)(exports, module, require.mediaSize.width, require.mediaSize.height, object.extendleft, o
          .extendright)
      }
      _drawEnds(exports, module, require, o) {
        const result = t[0],
          array = t[1],
          logger = (0, state.ensureNotNull)(this._data);
        switch (logger.leftend) {
          case nextValue.LineEnd.Arrow:
            u(array, result, exports, require, o);
            break;
          case nextValue.LineEnd.Circle:
            d(result, exports, require, (0, state.ensureDefined)(logger.endstyle), object.horizontalPixelRatio)
        }
        switch (logger.rightend) {
          case nextValue.LineEnd.Arrow:
            u(result, array, exports, require, o);
            break;
          case nextValue.LineEnd.Circle:
            d(array, exports, require, (0, state.ensureDefined)(logger.endstyle), object.horizontalPixelRatio)
        }
      }
    }