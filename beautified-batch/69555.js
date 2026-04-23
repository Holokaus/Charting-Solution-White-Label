/**
 * Module 69555 - Auto-beautified from TradingView webpack bundle
 *
 * @module 69555
 * @date 2026-04-23
 * @size 1729 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 57658
 *
 * Exports:
 *   - PanePriceAxisView (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  PanePriceAxisView: () => n
});
var s = i(57658);
class o {
  constructor(e) {
    this._priceAxisViewRenderer = null, this._rendererOptions = null, this._align = "right", this._textWidthCache = e
  }
  setParams(e, t, i, s, o) {
    this._priceAxisViewRenderer = e, this._rendererOptions = t, this._align = o
  }
  draw(e, t) {
    null !== this._rendererOptions && null !== this._priceAxisViewRenderer && this._priceAxisViewRenderer.draw(e, t, this._rendererOptions, this._textWidthCache, this._align)
  }
  hitTest(e, t) {
    return void 0 === this._priceAxisViewRenderer?.hitTest ? null : this._priceAxisViewRenderer?.hitTest(e, t, this._align)
  }
}
class n {
  constructor(e, t, i) {
    this._renderer = null, this._invalidated = !0, this._priceAxisView = e, this._textWidthCache = new s.TextWidthCache(100), this._dataSource = t, this._chartModel = i, this._fontSize = -1, this._panePriceAxisViewRenderer = new o(this._textWidthCache)
  }
  update(e) {
    this._invalidated = !0
  }
  renderer(e) {
    return this._invalidated && this._updateImpl(e), this._renderer
  }
  _position() {
    const e = this._chartModel.crosshairSource(),
      t = this._dataSource === e ? e.pane : this._chartModel.paneForSource(this._dataSource);
    if (null === t) return null;
    const i = this._priceScale();
    if (null === i) return null;
    let s = t.priceScalePosition(i);
    return "overlay" === s && (s = t.priceScalePosition(t.defaultPriceScale())), "overlay" === s ? null : s
  }
  _updateImpl(e) {
    this._renderer = null;
    const t = this._position();
    if (null === t) return;
    const i = this._chartModel.priceAxisRendererOptions();
    i.fontSize !== this._fontSize && (this._fontSize = i.fontSize, this._textWidthCache.reset()), this._panePriceAxisViewRenderer.setParams(this._priceAxisView.paneRenderer(), i, e.mediaSize.width, e.mediaSize.height, t), this._renderer = this._panePriceAxisViewRenderer, this._invalidated = !1
  }
  _priceScale() {
    return this._dataSource.priceScale()
  }
