/**
 * Module 93387 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93387: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      PaneRendererColumns: () => bitmapCoordinatesPane_n
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(10307),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(2383);
    class bitmapCoordinatesPane_n extends bitmapCoordinatesPane_s.BitmapCoordinatesPaneRenderer {
      constructor(bitmapCoordinatesPane_e) {
        super(), this._data = null, this._precalculatedCache = [], this.setData(bitmapCoordinatesPane_e)
      }
      setData(bitmapCoordinatesPane_e) {
        this._data = bitmapCoordinatesPane_e, this._precalculatedCache = []
      }
      hitTest(bitmapCoordinatesPane_e) {
        if (null === this._data) return null;
        const bitmapCoordinatesPane_t = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_i = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let bitmapCoordinatesPane_s = bitmapCoordinatesPane_t; bitmapCoordinatesPane_s <= bitmapCoordinatesPane_i; bitmapCoordinatesPane_s++) {
          const bitmapCoordinatesPane_t = this._data.items[bitmapCoordinatesPane_s];
          if (bitmapCoordinatesPane_e.bitmapCoordinatesPane_x >= bitmapCoordinatesPane_t.left && bitmapCoordinatesPane_e.bitmapCoordinatesPane_x <= bitmapCoordinatesPane_t.right) {
            const bitmapCoordinatesPane_i = bitmapCoordinatesPane_t.bitmapCoordinatesPane_y;
            if (bitmapCoordinatesPane_e.bitmapCoordinatesPane_y >= Math.min(bitmapCoordinatesPane_i, this._data.histogramBase) && bitmapCoordinatesPane_e.bitmapCoordinatesPane_y <= Math.max(bitmapCoordinatesPane_i, this._data.histogramBase))
            return new bitmapCoordinatesPane_o.HitTestResult(bitmapCoordinatesPane_o.HitTarget.Regular)
          }
        }
        return null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || 0 === this._data.items.length) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: bitmapCoordinatesPane_i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        this._precalculatedCache.length || this._fillPrecalculatedCache(bitmapCoordinatesPane_i);
        const bitmapCoordinatesPane_o = Math.max(1, Math.floor(bitmapCoordinatesPane_i)),
          bitmapCoordinatesPane_n = Math.max(1, Math.floor(bitmapCoordinatesPane_s)),
          bitmapCoordinatesPane_r = Math.round(this._data.histogramBase * bitmapCoordinatesPane_s) - Math.floor(bitmapCoordinatesPane_o / 2),
          bitmapCoordinatesPane_a = bitmapCoordinatesPane_r + bitmapCoordinatesPane_o,
          bitmapCoordinatesPane_l = this._data.lineColor,
          bitmapCoordinatesPane_c = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_h = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let bitmapCoordinatesPane_e = bitmapCoordinatesPane_c; bitmapCoordinatesPane_e <= bitmapCoordinatesPane_h; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_i = this._data.items[bitmapCoordinatesPane_e],
            bitmapCoordinatesPane_o = this._precalculatedCache[bitmapCoordinatesPane_e - bitmapCoordinatesPane_c],
            bitmapCoordinatesPane_h = Math.round(bitmapCoordinatesPane_i.bitmapCoordinatesPane_y * bitmapCoordinatesPane_s);
          let bitmapCoordinatesPane_d, bitmapCoordinatesPane_u;
          bitmapCoordinatesPane_t.fillStyle = bitmapCoordinatesPane_i.style ? bitmapCoordinatesPane_i.style.color : bitmapCoordinatesPane_l, bitmapCoordinatesPane_h <= bitmapCoordinatesPane_r ? (bitmapCoordinatesPane_d = bitmapCoordinatesPane_h, bitmapCoordinatesPane_u = bitmapCoordinatesPane_a) : (bitmapCoordinatesPane_d = bitmapCoordinatesPane_r, bitmapCoordinatesPane_u = bitmapCoordinatesPane_h - Math.floor(bitmapCoordinatesPane_n / 2) +
            bitmapCoordinatesPane_n), bitmapCoordinatesPane_t.fillRect(bitmapCoordinatesPane_o.left, bitmapCoordinatesPane_d, bitmapCoordinatesPane_o.right - bitmapCoordinatesPane_o.left + 1, bitmapCoordinatesPane_u - bitmapCoordinatesPane_d)
        }
      }
      _fillPrecalculatedCache(bitmapCoordinatesPane_e) {
        if (null === this._data || 0 === this._data.items.length) return void(this._precalculatedCache = []);
        const {
          barSpacing: bitmapCoordinatesPane_t,
          visibleItemsRange: bitmapCoordinatesPane_i,
          items: bitmapCoordinatesPane_s
        } = this._data, bitmapCoordinatesPane_o = Math.ceil(bitmapCoordinatesPane_t * bitmapCoordinatesPane_e) <= 1 ? 0 : Math.max(1, Math.floor(bitmapCoordinatesPane_e)), bitmapCoordinatesPane_n = bitmapCoordinatesPane_i?.startItemIndex ?? 0, bitmapCoordinatesPane_r =
          (bitmapCoordinatesPane_i?.endItemIndex ?? bitmapCoordinatesPane_s.length) - 1, bitmapCoordinatesPane_a = bitmapCoordinatesPane_r - bitmapCoordinatesPane_n + 1;
        if (bitmapCoordinatesPane_a <= 0) return void(this._precalculatedCache = []);
        this._precalculatedCache = new Array(bitmapCoordinatesPane_a);
        for (let bitmapCoordinatesPane_t = bitmapCoordinatesPane_n; bitmapCoordinatesPane_t <= bitmapCoordinatesPane_r; bitmapCoordinatesPane_t++) {
          const bitmapCoordinatesPane_i = bitmapCoordinatesPane_s[bitmapCoordinatesPane_t],
            bitmapCoordinatesPane_r = Math.round(bitmapCoordinatesPane_i.center * bitmapCoordinatesPane_e);
          let bitmapCoordinatesPane_a, bitmapCoordinatesPane_l;
          const bitmapCoordinatesPane_c = Math.round((bitmapCoordinatesPane_i.right - bitmapCoordinatesPane_i.left) * bitmapCoordinatesPane_e) - bitmapCoordinatesPane_o;
          if (bitmapCoordinatesPane_c % 2) {
            const bitmapCoordinatesPane_e = (bitmapCoordinatesPane_c - 1) / 2;
            bitmapCoordinatesPane_a = bitmapCoordinatesPane_r - bitmapCoordinatesPane_e, bitmapCoordinatesPane_l = bitmapCoordinatesPane_r + bitmapCoordinatesPane_e
          } else {
            const bitmapCoordinatesPane_e = bitmapCoordinatesPane_c / 2;
            bitmapCoordinatesPane_a = bitmapCoordinatesPane_r - bitmapCoordinatesPane_e, bitmapCoordinatesPane_l = bitmapCoordinatesPane_r + bitmapCoordinatesPane_e - 1
          }
          this._precalculatedCache[bitmapCoordinatesPane_t - bitmapCoordinatesPane_n] = {
            left: bitmapCoordinatesPane_a,
            right: bitmapCoordinatesPane_l,
            roundedCenter: bitmapCoordinatesPane_r,
            center: bitmapCoordinatesPane_i.center * bitmapCoordinatesPane_e,
            time: bitmapCoordinatesPane_i.timePointIndex
          }
        }
        for (let bitmapCoordinatesPane_e = bitmapCoordinatesPane_n + 1; bitmapCoordinatesPane_e <= bitmapCoordinatesPane_r; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - bitmapCoordinatesPane_n],
            bitmapCoordinatesPane_i = this._precalculatedCache[bitmapCoordinatesPane_e - bitmapCoordinatesPane_n - 1];
          bitmapCoordinatesPane_t.time === bitmapCoordinatesPane_i.time + 1 && (bitmapCoordinatesPane_t.left - bitmapCoordinatesPane_i.right !== bitmapCoordinatesPane_o + 1 && (bitmapCoordinatesPane_i.roundedCenter > bitmapCoordinatesPane_i.center ? bitmapCoordinatesPane_i.right = bitmapCoordinatesPane_t.left -
            bitmapCoordinatesPane_o - 1 : bitmapCoordinatesPane_t.left = bitmapCoordinatesPane_i.right + bitmapCoordinatesPane_o + 1))
        }
        let bitmapCoordinatesPane_l = Math.ceil(bitmapCoordinatesPane_t * bitmapCoordinatesPane_e);
        for (let bitmapCoordinatesPane_e = bitmapCoordinatesPane_n + 1; bitmapCoordinatesPane_e <= bitmapCoordinatesPane_r; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - bitmapCoordinatesPane_n];
          bitmapCoordinatesPane_t.right < bitmapCoordinatesPane_t.left && (bitmapCoordinatesPane_t.right = bitmapCoordinatesPane_t.left);
          const bitmapCoordinatesPane_i = bitmapCoordinatesPane_t.right - bitmapCoordinatesPane_t.left + 1;
          bitmapCoordinatesPane_l = Math.min(bitmapCoordinatesPane_i, bitmapCoordinatesPane_l)
        }
        if (bitmapCoordinatesPane_o > 0 && bitmapCoordinatesPane_l < 4)
          for (let bitmapCoordinatesPane_e = bitmapCoordinatesPane_n + 1; bitmapCoordinatesPane_e <= bitmapCoordinatesPane_r; bitmapCoordinatesPane_e++) {
            const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - bitmapCoordinatesPane_n];
            bitmapCoordinatesPane_t.right - bitmapCoordinatesPane_t.left + 1 > bitmapCoordinatesPane_l && (bitmapCoordinatesPane_t.roundedCenter > bitmapCoordinatesPane_t.center ? bitmapCoordinatesPane_t.right -= 1 : bitmapCoordinatesPane_t.left += 1)
          }
      }
    }