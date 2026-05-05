/**
 * Module: 39697
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.575Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 39697 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39697: (exports, module, i) => {
    "use strict";
    require.d(module, {
      CircleRenderer: () => r
    });
    var state = i(6453),
      object = i(2383),
      nextValue = i(4539);
    class r {
      constructor(exports) {
        this._data = e ?? null
      }
      setData(exports) {
        this._data = e
      }
      draw(exports, t) {
        if (null === this._data) return;
        const {
          center: require,
          radius: state,
          lineWidth: object,
          color: nextValue,
          backColor: r
        } = this._data;
        exports.save();
        const {
          horizontalPixelRatio: array,
          verticalPixelRatio: l
        } = module, config = Math.max(1, Math.floor(array)), handler = c % 2 / 2, data = Math.round(require.x * a) + handler, utility = Math.round(require.y * l) +
          handler, _ = Math.round(d + s * a), parameter = Math.max(1, Math.floor(o * a)), method = _ - d - parameter;
        m > 0 && (exports.fillStyle = result, exports.beginPath(), exports.moveTo(d + method, u), exports.arc(data, utility, method, 0, 2 * Math.PI, !1), exports.fill());
        const getter = Math.max(c / 2, _ - d - p / 2);
        exports.strokeStyle = nextValue, exports.lineWidth = parameter, exports.beginPath(), exports.moveTo(d + getter, u), exports.arc(data, utility, getter, 0, 2 * Math.PI, !1), e
          .stroke(), exports.restore()
      }
      hitTest(exports) {
        if (null === this._data || this._data.disableInteractions) return null;
        const {
          center: module,
          radius: require,
          backgroundHitTarget: r
        } = this._data, array = (0, nextValue.interactionTolerance)().curve;
        if (!(0, state.pointInCircle)(exports, module, i + a)) return null;
        const logger = i > a && (0, state.pointInCircle)(exports, module, i - a) ? r ?? object.HitTarget.MovePointBackground : object.HitTarget
          .MovePoint;
        return new object.HitTestResult(logger)
      }
    }