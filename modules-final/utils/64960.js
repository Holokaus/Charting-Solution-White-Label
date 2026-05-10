/**
 * Module 64960 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64960: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      VerticalLineRenderer: () => l
    });
    var bitmapCoordinatesPane_s = i(2383),
      o = i(58221),
      n = i(4539),
      r = i(33350),
      a = i(10307);
    class l extends a.BitmapCoordinatesPaneRenderer {
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
        const bitmapCoordinatesPane_t = (0, n.interactionTolerance)().line,
          i = Math.abs(bitmapCoordinatesPane_e.x - this._data.x) <= bitmapCoordinatesPane_t + this._data.linewidth / 2,
          bitmapCoordinatesPane_s = void 0 === this._data.top || this._data.top - bitmapCoordinatesPane_e.y <= bitmapCoordinatesPane_t,
          o = void 0 === this._data.bottom || bitmapCoordinatesPane_e.y - this._data.bottom <= bitmapCoordinatesPane_t;
        return i && bitmapCoordinatesPane_s && o ? this._hitTest : null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || this._data.linewidth <= 0) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: i,
          verticalPixelRatio: bitmapCoordinatesPane_s,
          mediaSize: n
        } = bitmapCoordinatesPane_e;
        if (this._data.x < -this._data.linewidth / 2 || this._data.x > n.width + this._data.linewidth / 2) return;
        bitmapCoordinatesPane_t.lineCap = "butt", bitmapCoordinatesPane_t.strokeStyle = this._data.color, bitmapCoordinatesPane_t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * i)), void 0 !== this._data.linestyle && (0, o.setLineStyle)(bitmapCoordinatesPane_t, this._data.linestyle);
        const a = void 0 !== this._data.top ? Math.max(this._data.top, 0) : 0,
          l = void 0 !== this._data.bottom ? Math.min(this._data.bottom, n.height) : n.height,
          c = Math.round(this._data.x * i),
          h = Math.floor(a * bitmapCoordinatesPane_s),
          d = Math.ceil(l * bitmapCoordinatesPane_s),
          u = this._data.excludeBoundaries;
        void 0 !== u && (0, r.addExclusionAreaByScope)(bitmapCoordinatesPane_e, u), (0, o.drawVerticalLine)(bitmapCoordinatesPane_t, c, h, d)
      }
    }
}
