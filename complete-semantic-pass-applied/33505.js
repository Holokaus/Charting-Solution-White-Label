/**
 * Module 33505 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33505: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      PaneRendererSeriesBase: () => bitmapCoordinatesPane_n
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(10307);
    class bitmapCoordinatesPane_n extends bitmapCoordinatesPane_o.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._bars = []
      }
      hitTest(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = this._bars;
        if (0 === bitmapCoordinatesPane_t.length) return null;
        const bitmapCoordinatesPane_i = this._getTolerance(),
          bitmapCoordinatesPane_s = bitmapCoordinatesPane_t[0],
          bitmapCoordinatesPane_o = bitmapCoordinatesPane_t[bitmapCoordinatesPane_t.length - 1];
        if (bitmapCoordinatesPane_e.bitmapCoordinatesPane_x < bitmapCoordinatesPane_s.left - bitmapCoordinatesPane_i) return null;
        if (bitmapCoordinatesPane_e.bitmapCoordinatesPane_x > bitmapCoordinatesPane_o.right + bitmapCoordinatesPane_i) return null;
        let bitmapCoordinatesPane_n = 0,
          bitmapCoordinatesPane_r = bitmapCoordinatesPane_t.length - 1,
          bitmapCoordinatesPane_a = -1;
        for (; bitmapCoordinatesPane_n <= bitmapCoordinatesPane_r;) {
          const bitmapCoordinatesPane_i = Math.floor((bitmapCoordinatesPane_n + bitmapCoordinatesPane_r) / 2),
            bitmapCoordinatesPane_s = bitmapCoordinatesPane_t[bitmapCoordinatesPane_i];
          if (bitmapCoordinatesPane_e.bitmapCoordinatesPane_x >= bitmapCoordinatesPane_s.left && bitmapCoordinatesPane_e.bitmapCoordinatesPane_x <= bitmapCoordinatesPane_s.right) {
            bitmapCoordinatesPane_a = bitmapCoordinatesPane_i;
            break
          }
          bitmapCoordinatesPane_e.bitmapCoordinatesPane_x > bitmapCoordinatesPane_s.right ? bitmapCoordinatesPane_n = bitmapCoordinatesPane_i + 1 : bitmapCoordinatesPane_r = bitmapCoordinatesPane_i - 1
        }
        if (-1 === bitmapCoordinatesPane_a) return null;
        if (this._isPointAtBar(bitmapCoordinatesPane_t[bitmapCoordinatesPane_a], bitmapCoordinatesPane_e.bitmapCoordinatesPane_y, bitmapCoordinatesPane_i)) return this._getHitTest();
        let bitmapCoordinatesPane_l = bitmapCoordinatesPane_a;
        for (; bitmapCoordinatesPane_l >= 1 && bitmapCoordinatesPane_e.bitmapCoordinatesPane_x - bitmapCoordinatesPane_t[bitmapCoordinatesPane_l - 1].right < bitmapCoordinatesPane_i;) bitmapCoordinatesPane_l--;
        let bitmapCoordinatesPane_c = bitmapCoordinatesPane_a;
        for (; bitmapCoordinatesPane_c <= bitmapCoordinatesPane_t.length - 2 && bitmapCoordinatesPane_t[bitmapCoordinatesPane_c + 1].left - bitmapCoordinatesPane_e.bitmapCoordinatesPane_x < bitmapCoordinatesPane_i;) bitmapCoordinatesPane_c++;
        const bitmapCoordinatesPane_h = Math.max(0, bitmapCoordinatesPane_l),
          bitmapCoordinatesPane_d = Math.min(bitmapCoordinatesPane_t.length - 1, bitmapCoordinatesPane_c);
        for (let bitmapCoordinatesPane_s = bitmapCoordinatesPane_h; bitmapCoordinatesPane_s <= bitmapCoordinatesPane_d; bitmapCoordinatesPane_s++)
          if (bitmapCoordinatesPane_s !== bitmapCoordinatesPane_a && this._isPointAtBar(bitmapCoordinatesPane_t[bitmapCoordinatesPane_s], bitmapCoordinatesPane_e.bitmapCoordinatesPane_y, bitmapCoordinatesPane_i)) return this._getHitTest();
        return null
      }
      _getHitTest() {
        return new bitmapCoordinatesPane_s.HitTestResult(bitmapCoordinatesPane_s.HitTarget.Regular)
      }
      _isPointAtBar(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) {
        const bitmapCoordinatesPane_s = Math.min(bitmapCoordinatesPane_e.high, bitmapCoordinatesPane_e.low),
          bitmapCoordinatesPane_o = Math.max(bitmapCoordinatesPane_e.high, bitmapCoordinatesPane_e.low);
        return bitmapCoordinatesPane_s - bitmapCoordinatesPane_i <= bitmapCoordinatesPane_t && bitmapCoordinatesPane_t <= bitmapCoordinatesPane_o + bitmapCoordinatesPane_i
      }
    }