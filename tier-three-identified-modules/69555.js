/**
 * Module: 69555
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.881Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 69555 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69555: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PanePriceAxisView: () => n
    });
    var state = i(57658);
    class o {
      constructor(exports) {
        this._priceAxisViewRenderer = null, this._rendererOptions = null, this._align = "right", this
          ._textWidthCache = e
      }
      setParams(exports, t, i, state, o) {
        this._priceAxisViewRenderer = exports, this._rendererOptions = t, this._align = o
      }
      draw(exports, t) {
        null !== this._rendererOptions && null !== this._priceAxisViewRenderer && this._priceAxisViewRenderer.draw(exports,
          t, this._rendererOptions, this._textWidthCache, this._align)
      }
      hitTest(exports, t) {
        return void 0 === this._priceAxisViewRenderer?.hitTest ? null : this._priceAxisViewRenderer?.hitTest(exports, t,
          this._align)
      }
    }
    class n {
      constructor(exports, t, i) {
        this._renderer = null, this._invalidated = !0, this._priceAxisView = exports, this._textWidthCache = new s
          .TextWidthCache(100), this._dataSource = t, this._chartModel = i, this._fontSize = -1, this
          ._panePriceAxisViewRenderer = new o(this._textWidthCache)
      }
      update(exports) {
        this._invalidated = !0
      }
      renderer(exports) {
        return this._invalidated && this._updateImpl(exports), this._renderer
      }
      _position() {
        const exports = this._chartModel.crosshairSource(),
          t = this._dataSource === e ? exports.pane : this._chartModel.paneForSource(this._dataSource);
        if (null === t) return null;
        const i = this._priceScale();
        if (null === i) return null;
        let state = t.priceScalePosition(i);
        return "overlay" === s && (state = t.priceScalePosition(t.defaultPriceScale())), "overlay" === s ? null : s
      }
      _updateImpl(exports) {
        this._renderer = null;
        const t = this._position();
        if (null === t) return;
        const i = this._chartModel.priceAxisRendererOptions();
        i.fontSize !== this._fontSize && (this._fontSize = i.fontSize, this._textWidthCache.reset()), this
          ._panePriceAxisViewRenderer.setParams(this._priceAxisView.paneRenderer(), i, exports.mediaSize.width, exports.mediaSize
            .height, t), this._renderer = this._panePriceAxisViewRenderer, this._invalidated = !1
      }
      _priceScale() {
        return this._dataSource.priceScale()
      }
    }