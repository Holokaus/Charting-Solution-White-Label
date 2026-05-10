/**
 * Module: 85565
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.079Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 85565 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

85565: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SmartDashCanvas: () => l
    });
    var assertionUtils = i(50151),
      object = i(10555),
      nextValue = i(4539),
      result = i(69558),
      array = i(58221);
    class l {
      constructor(exports, module, i) {
        this._lastSegmentDistance = 0, this._lastLineWidth = -1, this._lastLineStyle = -1, this._ctx = exports, this
          ._calculateOnly = module, this._lastDashPattern = exports.getLineDash(), this._lastPoint = i ?? null
      }
      beginPath() {
        this._calculateOnly || this._ctx.beginPath()
      }
      stroke() {
        this._calculateOnly || this._ctx.stroke()
      }
      fill() {
        this._calculateOnly || this._ctx.fill()
      }
      lastSegmentDistance() {
        return this._lastSegmentDistance
      }
      lastSegmentDashPattern() {
        return this._lastDashPattern
      }
      lastLineWidth() {
        return this._lastLineWidth
      }
      moveTo(exports, t) {
        this._lastPoint = (0, object.point)(exports, t), this._calculateOnly || this._ctx.moveTo(exports, t)
      }
      lineTo(exports, t) {
        const require = (0, assertionUtils.ensureNotNull)(this._lastPoint),
          nextValue = require.x - exports,
          result = require.y - module;
        this._lastSegmentDistance += Math.sqrt(n * n + r * r), this._calculateOnly || this._ctx.lineTo(exports, t), this
          ._lastPoint = (0, object.point)(exports, t)
      }
      setLineWidth(exports) {
        this._lastLineWidth !== e && (this._lastLineWidth = exports, this._lastDashPattern = this._lastLineStyle === r
          .LINESTYLE_SOLID ? [] : (0, array.computeDashPattern)(exports, this._lastLineStyle), this._calculateOnly || (this
            ._ctx.lineWidth = exports, this._lastLineStyle >= 0 && (0, nextValue.setValidLineStyle)(this._ctx, this
              ._lastLineStyle)))
      }
      setLineStyle(exports) {
        this._lastLineStyle !== e && (this._lastLineStyle = e ?? this._lastLineStyle), void 0 !== e && this
          ._lastLineWidth > 0 && (this._lastDashPattern = exports === result.LINESTYLE_SOLID ? [] : (0, array.computeDashPattern)(
            this._lastLineWidth, e)), this._calculateOnly || (0, nextValue.setValidLineStyle)(this._ctx, e)
      }
      setStrokeStyle(exports) {
        this._calculateOnly || (this._ctx.strokeStyle = e)
      }
      context() {
        return this._ctx
      }
    }