/**
 * Module 23752 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23752: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      TimeAxisView: () => lineToolManager_r
    });
    var lineToolManager_s = lineToolManager_i(52859),
      lineToolManager_o = lineToolManager_i(33350);
    class lineToolManager_n {
      constructor() {
        this._data = null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      draw(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        if (null === this._data || !this._data.visible || 0 === this._data.text.length) return;
        const lineToolManager_s = this._data;
        lineToolManager_e.font = lineToolManager_i.font;
        const lineToolManager_n = Math.round(lineToolManager_i.widthCache.measureText(lineToolManager_e, lineToolManager_s.text));
        if (lineToolManager_n <= 0) return;
        lineToolManager_e.save();
        const lineToolManager_r = lineToolManager_i.paddingHorizontal,
          lineToolManager_a = lineToolManager_n + 2 * lineToolManager_r,
          lineToolManager_l = lineToolManager_a / 2;
        let lineToolManager_c = lineToolManager_s.coordinate,
          lineToolManager_h = Math.floor(lineToolManager_c - lineToolManager_l) + .5;
        if (lineToolManager_s.alwaysInViewPort) {
          const lineToolManager_e = lineToolManager_s.width;
          lineToolManager_h < 0 ? (lineToolManager_c += Math.abs(0 - lineToolManager_h), lineToolManager_h = Math.floor(lineToolManager_c - lineToolManager_l) + .5) : lineToolManager_h + lineToolManager_a > lineToolManager_e && (lineToolManager_c -= Math.abs(lineToolManager_e - (lineToolManager_h + lineToolManager_a)), lineToolManager_h =
            Math.floor(lineToolManager_c - lineToolManager_l) + .5)
        }
        const lineToolManager_d = lineToolManager_h + lineToolManager_a,
          lineToolManager_u = Math.ceil(0 + lineToolManager_i.borderSize + lineToolManager_i.offsetSize + lineToolManager_i.paddingTop + lineToolManager_i.fontSize + lineToolManager_i.paddingBottom),
          {
            horizontalPixelRatio: _,
            verticalPixelRatio: lineToolManager_p
          } = lineToolManager_t;
        lineToolManager_e.fillStyle = lineToolManager_s.background;
        const lineToolManager_m = Math.round(lineToolManager_h * _),
          lineToolManager_g = Math.round(0 * lineToolManager_p),
          lineToolManager_f = Math.round(lineToolManager_d * _),
          lineToolManager_y = Math.round(lineToolManager_u * lineToolManager_p),
          lineToolManager_v = Math.round(2 * _);
        lineToolManager_e.beginPath(), lineToolManager_e.moveTo(lineToolManager_m, lineToolManager_g), lineToolManager_e.lineTo(lineToolManager_m, lineToolManager_y - lineToolManager_v), lineToolManager_e.arcTo(lineToolManager_m, lineToolManager_y, lineToolManager_m + lineToolManager_v, lineToolManager_y, lineToolManager_v), lineToolManager_e.lineTo(lineToolManager_f - lineToolManager_v, lineToolManager_y), lineToolManager_e.arcTo(lineToolManager_f,
          lineToolManager_y, lineToolManager_f, lineToolManager_y - lineToolManager_v, lineToolManager_v), lineToolManager_e.lineTo(lineToolManager_f, lineToolManager_g), lineToolManager_e.fill();
        const S = 0 + lineToolManager_i.borderSize + lineToolManager_i.offsetSize + lineToolManager_i.paddingTop + lineToolManager_i.fontSize / 2;
        lineToolManager_e.textAlign = "left", lineToolManager_e.textBaseline = "middle", lineToolManager_e.fillStyle = lineToolManager_s.color;
        const lineToolManager_b = lineToolManager_i.widthCache.yMidCorrection(lineToolManager_e, "Apr0");
        lineToolManager_e.translate((lineToolManager_h + lineToolManager_r) * _, (S + lineToolManager_b) * lineToolManager_p), (0, lineToolManager_o.drawScaled)(lineToolManager_e, _, lineToolManager_p, (() => lineToolManager_e.fillText(lineToolManager_s.text, 0, 0))), lineToolManager_e
          .restore()
      }
    }
    class lineToolManager_r {
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
        const lineToolManager_t = this._model.timeScale().indexToUserTime(lineToolManager_e);
        return null !== lineToolManager_t ? this._model.dateTimeFormatter().format(lineToolManager_t) : ""
      }
      _updateImpl() {
        const lineToolManager_e = this._rendererData;
        if (lineToolManager_e.visible = !1, this._model.timeScale().isEmpty() || !this._isVisible()) return;
        const lineToolManager_t = this._getIndex();
        null !== lineToolManager_t && Number.isFinite(lineToolManager_t) && (lineToolManager_e.visible = !0, lineToolManager_e.width = this._model.timeScale().width(), lineToolManager_e.background =
          this._getBgColor(), lineToolManager_e.color = (0, lineToolManager_s.colorFromBackground)(lineToolManager_e.background), lineToolManager_e.coordinate = this._model
          .timeScale().indexToCoordinate(lineToolManager_t), lineToolManager_e.alwaysInViewPort = this._getAlwaysInViewPort(), lineToolManager_e.text = this
          ._getText(lineToolManager_t), this._invalidated = !1)
      }
    }