/**
 * Module 33505 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33505: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      PaneRendererSeriesBase: () => n
    });
    var bitmapCoordinatesPane_s = i(2383),
      o = i(10307);
    class n extends o.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._bars = []
      }
      hitTest(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = this._bars;
        if (0 === bitmapCoordinatesPane_t.length) return null;
        const i = this._getTolerance(),
          bitmapCoordinatesPane_s = bitmapCoordinatesPane_t[0],
          o = bitmapCoordinatesPane_t[bitmapCoordinatesPane_t.length - 1];
        if (bitmapCoordinatesPane_e.x < bitmapCoordinatesPane_s.left - i) return null;
        if (bitmapCoordinatesPane_e.x > o.right + i) return null;
        let n = 0,
          r = bitmapCoordinatesPane_t.length - 1,
          a = -1;
        for (; n <= r;) {
          const i = Math.floor((n + r) / 2),
            bitmapCoordinatesPane_s = bitmapCoordinatesPane_t[i];
          if (bitmapCoordinatesPane_e.x >= bitmapCoordinatesPane_s.left && bitmapCoordinatesPane_e.x <= bitmapCoordinatesPane_s.right) {
            a = i;
            break
          }
          bitmapCoordinatesPane_e.x > bitmapCoordinatesPane_s.right ? n = i + 1 : r = i - 1
        }
        if (-1 === a) return null;
        if (this._isPointAtBar(bitmapCoordinatesPane_t[a], bitmapCoordinatesPane_e.y, i)) return this._getHitTest();
        let l = a;
        for (; l >= 1 && bitmapCoordinatesPane_e.x - bitmapCoordinatesPane_t[l - 1].right < i;) l--;
        let c = a;
        for (; c <= bitmapCoordinatesPane_t.length - 2 && bitmapCoordinatesPane_t[c + 1].left - bitmapCoordinatesPane_e.x < i;) c++;
        const h = Math.max(0, l),
          d = Math.min(bitmapCoordinatesPane_t.length - 1, c);
        for (let bitmapCoordinatesPane_s = h; bitmapCoordinatesPane_s <= d; bitmapCoordinatesPane_s++)
          if (bitmapCoordinatesPane_s !== a && this._isPointAtBar(bitmapCoordinatesPane_t[bitmapCoordinatesPane_s], bitmapCoordinatesPane_e.y, i)) return this._getHitTest();
        return null
      }
      _getHitTest() {
        return new bitmapCoordinatesPane_s.HitTestResult(bitmapCoordinatesPane_s.HitTarget.Regular)
      }
      _isPointAtBar(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) {
        const bitmapCoordinatesPane_s = Math.min(bitmapCoordinatesPane_e.high, bitmapCoordinatesPane_e.low),
          o = Math.max(bitmapCoordinatesPane_e.high, bitmapCoordinatesPane_e.low);
        return bitmapCoordinatesPane_s - i <= bitmapCoordinatesPane_t && bitmapCoordinatesPane_t <= o + i
      }
    }
}
