/**
 * Module 94119 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94119: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      HorizontalLineRenderer: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(58221),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(10307),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(33350);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_r.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._hitTest = new bitmapCoordinatesPane_s.HitTestResult(bitmapCoordinatesPane_s.HitTarget.Regular)
      }
      setData(bitmapCoordinatesPane_e) {
        this._data = bitmapCoordinatesPane_e
      }
      setHitTest(bitmapCoordinatesPane_e) {
        this._hitTest = bitmapCoordinatesPane_e
      }
      hitTest(bitmapCoordinatesPane_e) {
        if (null === this._data || !1 === this._data.visible || null === this._hitTest) return null;
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_n.interactionTolerance)().line,
          bitmapCoordinatesPane_i = Math.abs(bitmapCoordinatesPane_e.bitmapCoordinatesPane_y - this._data.bitmapCoordinatesPane_y) <= bitmapCoordinatesPane_t + this._data.linewidth / 2,
          bitmapCoordinatesPane_s = void 0 === this._data.left || this._data.left - bitmapCoordinatesPane_e.bitmapCoordinatesPane_x <= bitmapCoordinatesPane_t,
          bitmapCoordinatesPane_o = void 0 === this._data.right || bitmapCoordinatesPane_e.bitmapCoordinatesPane_x - this._data.right <= bitmapCoordinatesPane_t;
        return bitmapCoordinatesPane_i && bitmapCoordinatesPane_s && bitmapCoordinatesPane_o ? this._hitTest : null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || !1 === this._data.visible) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: bitmapCoordinatesPane_i,
          verticalPixelRatio: bitmapCoordinatesPane_s,
          mediaSize: bitmapCoordinatesPane_n
        } = bitmapCoordinatesPane_e;
        if (this._data.bitmapCoordinatesPane_y < -this._data.linewidth / 2 || this._data.bitmapCoordinatesPane_y > bitmapCoordinatesPane_n.height + this._data.linewidth / 2) return;
        bitmapCoordinatesPane_t.lineCap = "butt", bitmapCoordinatesPane_t.strokeStyle = this._data.color, bitmapCoordinatesPane_t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * bitmapCoordinatesPane_i)), void 0 !== this._data.linestyle && (0, bitmapCoordinatesPane_o.setLineStyle)(bitmapCoordinatesPane_t, this._data.linestyle);
        const bitmapCoordinatesPane_r = void 0 !== this._data.left ? Math.max(this._data.left, 0) : 0,
          bitmapCoordinatesPane_l = void 0 !== this._data.right ? Math.min(this._data.right, bitmapCoordinatesPane_n.width) : bitmapCoordinatesPane_n.width,
          bitmapCoordinatesPane_c = Math.round(this._data.bitmapCoordinatesPane_y * bitmapCoordinatesPane_s),
          bitmapCoordinatesPane_h = Math.round(bitmapCoordinatesPane_r * bitmapCoordinatesPane_i),
          bitmapCoordinatesPane_d = Math.round(bitmapCoordinatesPane_l * bitmapCoordinatesPane_i),
          bitmapCoordinatesPane_u = this._data.excludeBoundaries;
        void 0 !== bitmapCoordinatesPane_u && (0, bitmapCoordinatesPane_a.addExclusionAreaByScope)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_u), (0, bitmapCoordinatesPane_o.drawHorizontalLine)(bitmapCoordinatesPane_t, bitmapCoordinatesPane_c, bitmapCoordinatesPane_h, bitmapCoordinatesPane_d)
      }
    }