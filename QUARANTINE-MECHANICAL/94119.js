/**
 * Module 94119 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94119: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      HorizontalLineRenderer: () => l
    });
    var bitmapCoordinatesPane_s = i(2383),
      o = i(58221),
      n = i(4539),
      r = i(10307),
      a = i(33350);
    class l extends r.BitmapCoordinatesPaneRenderer {
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
        const bitmapCoordinatesPane_t = (0, n.interactionTolerance)().line,
          i = Math.abs(bitmapCoordinatesPane_e.y - this._data.y) <= bitmapCoordinatesPane_t + this._data.linewidth / 2,
          bitmapCoordinatesPane_s = void 0 === this._data.left || this._data.left - bitmapCoordinatesPane_e.x <= bitmapCoordinatesPane_t,
          o = void 0 === this._data.right || bitmapCoordinatesPane_e.x - this._data.right <= bitmapCoordinatesPane_t;
        return i && bitmapCoordinatesPane_s && o ? this._hitTest : null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || !1 === this._data.visible) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: i,
          verticalPixelRatio: bitmapCoordinatesPane_s,
          mediaSize: n
        } = bitmapCoordinatesPane_e;
        if (this._data.y < -this._data.linewidth / 2 || this._data.y > n.height + this._data.linewidth / 2) return;
        bitmapCoordinatesPane_t.lineCap = "butt", bitmapCoordinatesPane_t.strokeStyle = this._data.color, bitmapCoordinatesPane_t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * i)), void 0 !== this._data.linestyle && (0, o.setLineStyle)(bitmapCoordinatesPane_t, this._data.linestyle);
        const r = void 0 !== this._data.left ? Math.max(this._data.left, 0) : 0,
          l = void 0 !== this._data.right ? Math.min(this._data.right, n.width) : n.width,
          c = Math.round(this._data.y * bitmapCoordinatesPane_s),
          h = Math.round(r * i),
          d = Math.round(l * i),
          u = this._data.excludeBoundaries;
        void 0 !== u && (0, a.addExclusionAreaByScope)(bitmapCoordinatesPane_e, u), (0, o.drawHorizontalLine)(bitmapCoordinatesPane_t, c, h, d)
      }
    }