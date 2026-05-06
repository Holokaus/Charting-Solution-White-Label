/**
 * Module 93387 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93387: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      PaneRendererColumns: () => n
    });
    var bitmapCoordinatesPane_s = i(10307),
      o = i(2383);
    class n extends bitmapCoordinatesPane_s.BitmapCoordinatesPaneRenderer {
      constructor(bitmapCoordinatesPane_e) {
        super(), this._data = null, this._precalculatedCache = [], this.setData(bitmapCoordinatesPane_e)
      }
      setData(bitmapCoordinatesPane_e) {
        this._data = bitmapCoordinatesPane_e, this._precalculatedCache = []
      }
      hitTest(bitmapCoordinatesPane_e) {
        if (null === this._data) return null;
        const bitmapCoordinatesPane_t = this._data.visibleItemsRange?.startItemIndex ?? 0,
          i = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let bitmapCoordinatesPane_s = bitmapCoordinatesPane_t; bitmapCoordinatesPane_s <= i; bitmapCoordinatesPane_s++) {
          const bitmapCoordinatesPane_t = this._data.items[bitmapCoordinatesPane_s];
          if (bitmapCoordinatesPane_e.x >= bitmapCoordinatesPane_t.left && bitmapCoordinatesPane_e.x <= bitmapCoordinatesPane_t.right) {
            const i = bitmapCoordinatesPane_t.y;
            if (bitmapCoordinatesPane_e.y >= Math.min(i, this._data.histogramBase) && bitmapCoordinatesPane_e.y <= Math.max(i, this._data.histogramBase))
            return new o.HitTestResult(o.HitTarget.Regular)
          }
        }
        return null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        if (null === this._data || 0 === this._data.items.length) return;
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        this._precalculatedCache.length || this._fillPrecalculatedCache(i);
        const o = Math.max(1, Math.floor(i)),
          n = Math.max(1, Math.floor(bitmapCoordinatesPane_s)),
          r = Math.round(this._data.histogramBase * bitmapCoordinatesPane_s) - Math.floor(o / 2),
          a = r + o,
          l = this._data.lineColor,
          c = this._data.visibleItemsRange?.startItemIndex ?? 0,
          h = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let bitmapCoordinatesPane_e = c; bitmapCoordinatesPane_e <= h; bitmapCoordinatesPane_e++) {
          const i = this._data.items[bitmapCoordinatesPane_e],
            o = this._precalculatedCache[bitmapCoordinatesPane_e - c],
            h = Math.round(i.y * bitmapCoordinatesPane_s);
          let d, u;
          bitmapCoordinatesPane_t.fillStyle = i.style ? i.style.color : l, h <= r ? (d = h, u = a) : (d = r, u = h - Math.floor(n / 2) +
            n), bitmapCoordinatesPane_t.fillRect(o.left, d, o.right - o.left + 1, u - d)
        }
      }
      _fillPrecalculatedCache(bitmapCoordinatesPane_e) {
        if (null === this._data || 0 === this._data.items.length) return void(this._precalculatedCache = []);
        const {
          barSpacing: bitmapCoordinatesPane_t,
          visibleItemsRange: i,
          items: bitmapCoordinatesPane_s
        } = this._data, o = Math.ceil(bitmapCoordinatesPane_t * bitmapCoordinatesPane_e) <= 1 ? 0 : Math.max(1, Math.floor(bitmapCoordinatesPane_e)), n = i?.startItemIndex ?? 0, r =
          (i?.endItemIndex ?? bitmapCoordinatesPane_s.length) - 1, a = r - n + 1;
        if (a <= 0) return void(this._precalculatedCache = []);
        this._precalculatedCache = new Array(a);
        for (let bitmapCoordinatesPane_t = n; bitmapCoordinatesPane_t <= r; bitmapCoordinatesPane_t++) {
          const i = bitmapCoordinatesPane_s[bitmapCoordinatesPane_t],
            r = Math.round(i.center * bitmapCoordinatesPane_e);
          let a, l;
          const c = Math.round((i.right - i.left) * bitmapCoordinatesPane_e) - o;
          if (c % 2) {
            const bitmapCoordinatesPane_e = (c - 1) / 2;
            a = r - bitmapCoordinatesPane_e, l = r + bitmapCoordinatesPane_e
          } else {
            const bitmapCoordinatesPane_e = c / 2;
            a = r - bitmapCoordinatesPane_e, l = r + bitmapCoordinatesPane_e - 1
          }
          this._precalculatedCache[bitmapCoordinatesPane_t - n] = {
            left: a,
            right: l,
            roundedCenter: r,
            center: i.center * bitmapCoordinatesPane_e,
            time: i.timePointIndex
          }
        }
        for (let bitmapCoordinatesPane_e = n + 1; bitmapCoordinatesPane_e <= r; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - n],
            i = this._precalculatedCache[bitmapCoordinatesPane_e - n - 1];
          bitmapCoordinatesPane_t.time === i.time + 1 && (bitmapCoordinatesPane_t.left - i.right !== o + 1 && (i.roundedCenter > i.center ? i.right = bitmapCoordinatesPane_t.left -
            o - 1 : bitmapCoordinatesPane_t.left = i.right + o + 1))
        }
        let l = Math.ceil(bitmapCoordinatesPane_t * bitmapCoordinatesPane_e);
        for (let bitmapCoordinatesPane_e = n + 1; bitmapCoordinatesPane_e <= r; bitmapCoordinatesPane_e++) {
          const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - n];
          bitmapCoordinatesPane_t.right < bitmapCoordinatesPane_t.left && (bitmapCoordinatesPane_t.right = bitmapCoordinatesPane_t.left);
          const i = bitmapCoordinatesPane_t.right - bitmapCoordinatesPane_t.left + 1;
          l = Math.min(i, l)
        }
        if (o > 0 && l < 4)
          for (let bitmapCoordinatesPane_e = n + 1; bitmapCoordinatesPane_e <= r; bitmapCoordinatesPane_e++) {
            const bitmapCoordinatesPane_t = this._precalculatedCache[bitmapCoordinatesPane_e - n];
            bitmapCoordinatesPane_t.right - bitmapCoordinatesPane_t.left + 1 > l && (bitmapCoordinatesPane_t.roundedCenter > bitmapCoordinatesPane_t.center ? bitmapCoordinatesPane_t.right -= 1 : bitmapCoordinatesPane_t.left += 1)
          }
      }
    }