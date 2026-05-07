/**
 * Module 64960 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64960: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      VerticalLineRenderer: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(58221),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(33350),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(10307);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_a.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._hitTest = new bitmapCoordinatesPane_s.HitTestResult(bitmapCoordinatesPane_s.HitTarget.MovePoint)
      }
      setData(bitmapCoordinatesPane_e) {
        this._data = bitmapCoordinatesPane_e
      }
      setHitTest(bitmapCoordinatesPane_e) {
        this._hitTest = bitmapCoordinatesPane_e
      }
      hitTest(bitmapCoordinatesPane_e) {
        if (null === this._data || null === this._hitTest) return null;
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_n.interactionTolerance)().line,
          bitmapCoordinatesPane_i = Math.abs(bitmapCoordinatesPane_e.bitmapCoordinatesPane_x - this._data.bitmapCoordinatesPane_x) <= bitmapCoordinatesPane_t + this._data.linewidth / 2,
          bitmapCoordinatesPane_s = void 0 === this._data.top || this._data.top - bitmapCoordinatesPane_e.bitmapCoordinatesPane_y <= bitmapCoordinatesPane_t,
          bitmapCoordinatesPane_o = void 0 === this._data.bottom || bitmapCoordinatesPane_e.bitmapCoordinatesPane_y - this._data.bottom <= bitmapCoordinatesPane_t;
        return bitmapCoordinatesPane_i && bitmapCoordinatesPane_s && bitmapCoordinatesPane_o ? this._hitTest : null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || this._data.linewidth <= 0) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: bitmapCoordinatesPane_i,
          verticalPixelRatio: bitmapCoordinatesPane_s,
          mediaSize: bitmapCoordinatesPane_n
        } = bitmapCoordinatesPane_e;
        if (this._data.bitmapCoordinatesPane_x < -this._data.linewidth / 2 || this._data.bitmapCoordinatesPane_x > bitmapCoordinatesPane_n.width + this._data.linewidth / 2) return;
        bitmapCoordinatesPane_t.lineCap = "butt", bitmapCoordinatesPane_t.strokeStyle = this._data.color, bitmapCoordinatesPane_t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * bitmapCoordinatesPane_i)), void 0 !== this._data.linestyle && (0, bitmapCoordinatesPane_o.setLineStyle)(bitmapCoordinatesPane_t, this._data.linestyle);
        const bitmapCoordinatesPane_a = void 0 !== this._data.top ? Math.max(this._data.top, 0) : 0,
          bitmapCoordinatesPane_l = void 0 !== this._data.bottom ? Math.min(this._data.bottom, bitmapCoordinatesPane_n.height) : bitmapCoordinatesPane_n.height,
          bitmapCoordinatesPane_c = Math.round(this._data.bitmapCoordinatesPane_x * bitmapCoordinatesPane_i),
          bitmapCoordinatesPane_h = Math.floor(bitmapCoordinatesPane_a * bitmapCoordinatesPane_s),
          bitmapCoordinatesPane_d = Math.ceil(bitmapCoordinatesPane_l * bitmapCoordinatesPane_s),
          bitmapCoordinatesPane_u = this._data.excludeBoundaries;
        void 0 !== bitmapCoordinatesPane_u && (0, bitmapCoordinatesPane_r.addExclusionAreaByScope)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_u), (0, bitmapCoordinatesPane_o.drawVerticalLine)(bitmapCoordinatesPane_t, bitmapCoordinatesPane_c, bitmapCoordinatesPane_h, bitmapCoordinatesPane_d)
      }
    }