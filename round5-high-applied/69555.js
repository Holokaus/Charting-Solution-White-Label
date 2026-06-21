/**
 * Module 69555 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69555: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      PanePriceAxisView: () => n
    });
    var bitmapCoordinatesPane_s = i(57658);
    class o {
      constructor(bitmapCoordinatesPane_e) {
        this._priceAxisViewRenderer = null, this._rendererOptions = null, this._align = "right", this
          ._textWidthCache = bitmapCoordinatesPane_e
      }
      setParams(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i, bitmapCoordinatesPane_s, o) {
        this._priceAxisViewRenderer = bitmapCoordinatesPane_e, this._rendererOptions = bitmapCoordinatesPane_t, this._align = o
      }
      draw(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        null !== this._rendererOptions && null !== this._priceAxisViewRenderer && this._priceAxisViewRenderer.draw(bitmapCoordinatesPane_e,
          bitmapCoordinatesPane_t, this._rendererOptions, this._textWidthCache, this._align)
      }
      hitTest(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        return void 0 === this._priceAxisViewRenderer?.hitTest ? null : this._priceAxisViewRenderer?.hitTest(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t,
          this._align)
      }
    }
    class n {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) {
        this._renderer = null, this._invalidated = !0, this._priceAxisView = bitmapCoordinatesPane_e, this._textWidthCache = new bitmapCoordinatesPane_s
          .TextWidthCache(100), this._dataSource = bitmapCoordinatesPane_t, this._chartModel = i, this._fontSize = -1, this
          ._panePriceAxisViewRenderer = new o(this._textWidthCache)
      }
      update(bitmapCoordinatesPane_e) {
        this._invalidated = !0
      }
      renderer(bitmapCoordinatesPane_e) {
        return this._invalidated && this._updateImpl(bitmapCoordinatesPane_e), this._renderer
      }
      _position() {
        const bitmapCoordinatesPane_e = this._chartModel.crosshairSource(),
          bitmapCoordinatesPane_t = this._dataSource === bitmapCoordinatesPane_e ? bitmapCoordinatesPane_e.pane : this._chartModel.paneForSource(this._dataSource);
        if (null === bitmapCoordinatesPane_t) return null;
        const i = this._priceScale();
        if (null === i) return null;
        let bitmapCoordinatesPane_s = bitmapCoordinatesPane_t.priceScalePosition(i);
        return "overlay" === bitmapCoordinatesPane_s && (bitmapCoordinatesPane_s = bitmapCoordinatesPane_t.priceScalePosition(bitmapCoordinatesPane_t.defaultPriceScale())), "overlay" === bitmapCoordinatesPane_s ? null : bitmapCoordinatesPane_s
      }
      _updateImpl(bitmapCoordinatesPane_e) {
        this._renderer = null;
        const bitmapCoordinatesPane_t = this._position();
        if (null === bitmapCoordinatesPane_t) return;
        const i = this._chartModel.priceAxisRendererOptions();
        i.fontSize !== this._fontSize && (this._fontSize = i.fontSize, this._textWidthCache.reset()), this
          ._panePriceAxisViewRenderer.setParams(this._priceAxisView.paneRenderer(), i, bitmapCoordinatesPane_e.mediaSize.width, bitmapCoordinatesPane_e.mediaSize
            .height, bitmapCoordinatesPane_t), this._renderer = this._panePriceAxisViewRenderer, this._invalidated = !1
      }
      _priceScale() {
        return this._dataSource.priceScale()
      }
    }
}
