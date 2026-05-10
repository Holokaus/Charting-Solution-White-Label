/**
 * Module 23752 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23752: (lineToolManager_e, t, i) => {
    "use strict";
    i.d(t, {
      TimeAxisView: () => r
    });
    var lineToolManager_s = i(52859),
      o = i(33350);
    class lineToolManager_n {
      constructor() {
        this._data = null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      draw(lineToolManager_e, t, i) {
        if (null === this._data || !this._data.visible || 0 === this._data.text.length) return;
        const lineToolManager_s = this._data;
        lineToolManager_e.font = i.font;
        const lineToolManager_n = Math.round(i.widthCache.measureText(lineToolManager_e, lineToolManager_s.text));
        if (lineToolManager_n <= 0) return;
        lineToolManager_e.save();
        const r = i.paddingHorizontal,
          a = lineToolManager_n + 2 * r,
          l = a / 2;
        let c = lineToolManager_s.coordinate,
          h = Math.floor(c - l) + .5;
        if (lineToolManager_s.alwaysInViewPort) {
          const lineToolManager_e = lineToolManager_s.width;
          h < 0 ? (c += Math.abs(0 - h), h = Math.floor(c - l) + .5) : h + a > lineToolManager_e && (c -= Math.abs(lineToolManager_e - (h + a)), h =
            Math.floor(c - l) + .5)
        }
        const d = h + a,
          u = Math.ceil(0 + i.borderSize + i.offsetSize + i.paddingTop + i.fontSize + i.paddingBottom),
          {
            horizontalPixelRatio: _,
            verticalPixelRatio: p
          } = t;
        lineToolManager_e.fillStyle = lineToolManager_s.background;
        const m = Math.round(h * _),
          g = Math.round(0 * p),
          f = Math.round(d * _),
          y = Math.round(u * p),
          v = Math.round(2 * _);
        lineToolManager_e.beginPath(), lineToolManager_e.moveTo(m, g), lineToolManager_e.lineTo(m, y - v), lineToolManager_e.arcTo(m, y, m + v, y, v), lineToolManager_e.lineTo(f - v, y), lineToolManager_e.arcTo(f,
          y, f, y - v, v), lineToolManager_e.lineTo(f, g), lineToolManager_e.fill();
        const S = 0 + i.borderSize + i.offsetSize + i.paddingTop + i.fontSize / 2;
        lineToolManager_e.textAlign = "left", lineToolManager_e.textBaseline = "middle", lineToolManager_e.fillStyle = lineToolManager_s.color;
        const b = i.widthCache.yMidCorrection(lineToolManager_e, "Apr0");
        lineToolManager_e.translate((h + r) * _, (S + b) * p), (0, o.drawScaled)(lineToolManager_e, _, p, (() => lineToolManager_e.fillText(lineToolManager_s.text, 0, 0))), lineToolManager_e
          .restore()
      }
    }
    class r {
      constructor(lineToolManager_e) {
        this._renderer = new lineToolManager_n, this._rendererData = {
          background: "",
          color: "",
          coordinate: 0,
          text: "",
          visible: !1,
          width: 0,
          alwaysInViewPort: !0
        }, this._invalidated = !0, this._model = lineToolManager_e, this._renderer.setData(this._rendererData)
      }
      update() {
        this._invalidated = !0
      }
      renderer() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
      }
      coordinate() {
        return this._rendererData.coordinate
      }
      _getAlwaysInViewPort() {
        return !0
      }
      _getText(lineToolManager_e) {
        const t = this._model.timeScale().indexToUserTime(lineToolManager_e);
        return null !== t ? this._model.dateTimeFormatter().format(t) : ""
      }
      _updateImpl() {
        const lineToolManager_e = this._rendererData;
        if (lineToolManager_e.visible = !1, this._model.timeScale().isEmpty() || !this._isVisible()) return;
        const t = this._getIndex();
        null !== t && Number.isFinite(t) && (lineToolManager_e.visible = !0, lineToolManager_e.width = this._model.timeScale().width(), lineToolManager_e.background =
          this._getBgColor(), lineToolManager_e.color = (0, lineToolManager_s.colorFromBackground)(lineToolManager_e.background), lineToolManager_e.coordinate = this._model
          .timeScale().indexToCoordinate(t), lineToolManager_e.alwaysInViewPort = this._getAlwaysInViewPort(), lineToolManager_e.text = this
          ._getText(t), this._invalidated = !1)
      }
    }
}
