/**
 * Module 85565 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

85565: (e, t, i) => {
    "use strict";
    i.d(t, {
      SmartDashCanvas: () => l
    });
    var assertionUtils = i(50151),
      o = i(10555),
      n = i(4539),
      r = i(69558),
      a = i(58221);
    class l {
      constructor(e, t, i) {
        this._lastSegmentDistance = 0, this._lastLineWidth = -1, this._lastLineStyle = -1, this._ctx = e, this
          ._calculateOnly = t, this._lastDashPattern = e.getLineDash(), this._lastPoint = i ?? null
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
      moveTo(e, t) {
        this._lastPoint = (0, o.point)(e, t), this._calculateOnly || this._ctx.moveTo(e, t)
      }
      lineTo(e, t) {
        const i = (0, assertionUtils.ensureNotNull)(this._lastPoint),
          n = i.x - e,
          r = i.y - t;
        this._lastSegmentDistance += Math.sqrt(n * n + r * r), this._calculateOnly || this._ctx.lineTo(e, t), this
          ._lastPoint = (0, o.point)(e, t)
      }
      setLineWidth(e) {
        this._lastLineWidth !== e && (this._lastLineWidth = e, this._lastDashPattern = this._lastLineStyle === r
          .LINESTYLE_SOLID ? [] : (0, a.computeDashPattern)(e, this._lastLineStyle), this._calculateOnly || (this
            ._ctx.lineWidth = e, this._lastLineStyle >= 0 && (0, n.setValidLineStyle)(this._ctx, this
              ._lastLineStyle)))
      }
      setLineStyle(e) {
        this._lastLineStyle !== e && (this._lastLineStyle = e ?? this._lastLineStyle), void 0 !== e && this
          ._lastLineWidth > 0 && (this._lastDashPattern = e === r.LINESTYLE_SOLID ? [] : (0, a.computeDashPattern)(
            this._lastLineWidth, e)), this._calculateOnly || (0, n.setValidLineStyle)(this._ctx, e)
      }
      setStrokeStyle(e) {
        this._calculateOnly || (this._ctx.strokeStyle = e)
      }
      context() {
        return this._ctx
      }
    }