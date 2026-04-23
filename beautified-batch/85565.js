/**
 * Module 85565 - Auto-beautified from TradingView webpack bundle
 *
 * @module 85565
 * @date 2026-04-23
 * @size 1570 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4539, 10555, 50151, 58221, 69558
 *
 * Exports:
 *   - SmartDashCanvas (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SmartDashCanvas: () => l
});
var s = i(50151),
  o = i(10555),
  n = i(4539),
  r = i(69558),
  a = i(58221);
class l {
  constructor(e, t, i) {
    this._lastSegmentDistance = 0, this._lastLineWidth = -1, this._lastLineStyle = -1, this._ctx = e, this._calculateOnly = t, this._lastDashPattern = e.getLineDash(), this._lastPoint = i ?? null
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
    const i = (0, s.ensureNotNull)(this._lastPoint),
      n = i.x - e,
      r = i.y - t;
    this._lastSegmentDistance += Math.sqrt(n * n + r * r), this._calculateOnly || this._ctx.lineTo(e, t), this._lastPoint = (0, o.point)(e, t)
  }
  setLineWidth(e) {
    this._lastLineWidth !== e && (this._lastLineWidth = e, this._lastDashPattern = this._lastLineStyle === r.LINESTYLE_SOLID ? [] : (0, a.computeDashPattern)(e, this._lastLineStyle), this._calculateOnly || (this._ctx.lineWidth = e, this._lastLineStyle >= 0 && (0, n.setValidLineStyle)(this._ctx, this._lastLineStyle)))
  }
  setLineStyle(e) {
    this._lastLineStyle !== e && (this._lastLineStyle = e ?? this._lastLineStyle), void 0 !== e && this._lastLineWidth > 0 && (this._lastDashPattern = e === r.LINESTYLE_SOLID ? [] : (0, a.computeDashPattern)(this._lastLineWidth, e)), this._calculateOnly || (0, n.setValidLineStyle)(this._ctx, e)
  }
  setStrokeStyle(e) {
    this._calculateOnly || (this._ctx.strokeStyle = e)
  }
  context() {
    return this._ctx
  }
