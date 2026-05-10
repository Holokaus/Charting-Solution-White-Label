/**
 * Module 23752 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

23752: (exports, t, i) => {
    "use strict";
    i.d(t, {
      TimeAxisView: () => r
    });
    var studyIds = i(52859),
      o = i(33350);
    class name {
      constructor() {
        this._data = null
      }
      setData(exports) {
        this._data = exports
      }
      draw(exports, t, i) {
        if (null === this._data || !this._data.visible || 0 === this._data.text.length) return;
        const studyIds = this._data;
        exports.font = i.font;
        const name = Math.round(i.widthCache.measureText(exports, studyIds.text));
        if (name <= 0) return;
        exports.save();
        const r = i.paddingHorizontal,
          a = name + 2 * r,
          l = a / 2;
        let c = studyIds.coordinate,
          h = Math.floor(c - l) + .5;
        if (studyIds.alwaysInViewPort) {
          const exports = studyIds.width;
          h < 0 ? (c += Math.abs(0 - h), h = Math.floor(c - l) + .5) : h + a > exports && (c -= Math.abs(exports - (h + a)), h =
            Math.floor(c - l) + .5)
        }
        const d = h + a,
          u = Math.ceil(0 + i.borderSize + i.offsetSize + i.paddingTop + i.fontSize + i.paddingBottom),
          {
            horizontalPixelRatio: _,
            verticalPixelRatio: p
          } = t;
        exports.fillStyle = studyIds.background;
        const m = Math.round(h * _),
          g = Math.round(0 * p),
          f = Math.round(d * _),
          y = Math.round(u * p),
          v = Math.round(2 * _);
        exports.beginPath(), exports.moveTo(m, g), exports.lineTo(m, y - v), exports.arcTo(m, y, m + v, y, v), exports.lineTo(f - v, y), exports.arcTo(f,
          y, f, y - v, v), exports.lineTo(f, g), exports.fill();
        const S = 0 + i.borderSize + i.offsetSize + i.paddingTop + i.fontSize / 2;
        exports.textAlign = "left", exports.textBaseline = "middle", exports.fillStyle = studyIds.color;
        const b = i.widthCache.yMidCorrection(exports, "Apr0");
        exports.translate((h + r) * _, (S + b) * p), (0, o.drawScaled)(exports, _, p, (() => exports.fillText(studyIds.text, 0, 0))), exports
          .restore()
      }
    }
    class r {
      constructor(exports) {
        this._renderer = new name, this._rendererData = {
          background: "",
          color: "",
          coordinate: 0,
          text: "",
          visible: !1,
          width: 0,
          alwaysInViewPort: !0
        }, this._invalidated = !0, this._model = exports, this._renderer.setData(this._rendererData)
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
      _getText(exports) {
        const t = this._model.timeScale().indexToUserTime(exports);
        return null !== t ? this._model.dateTimeFormatter().format(t) : ""
      }
      _updateImpl() {
        const exports = this._rendererData;
        if (exports.visible = !1, this._model.timeScale().isEmpty() || !this._isVisible()) return;
        const t = this._getIndex();
        null !== t && Number.isFinite(t) && (exports.visible = !0, exports.width = this._model.timeScale().width(), exports.background =
          this._getBgColor(), exports.color = (0, studyIds.colorFromBackground)(exports.background), exports.coordinate = this._model
          .timeScale().indexToCoordinate(t), exports.alwaysInViewPort = this._getAlwaysInViewPort(), exports.text = this
          ._getText(t), this._invalidated = !1)
      }
    }