/**
 * Module: 97126
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.189Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 97126 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97126: (exports, t, i) => {
    "use strict";
    i.d(t, {
      AreaBackgroundItem: () => h,
      AreaBackgroundItemsGroup: () => l,
      AreaBackgroundRenderer: () => d,
      CachedMap: () => c
    });
    var series, o, newSeries = i(50151),
      r = i(10307),
      a = i(7793);
    ! function(exports) {
      e[exports.Solid = 0] = "Solid", e[exports.Gradient = 1] = "Gradient"
    }(s || (series = {})),
    function(exports) {
      e[exports.PurgeCachedMapCacheIterations = 50] = "PurgeCachedMapCacheIterations"
    }(o || (o = {}));
    class l extends a.CachedContainer {
      constructor(exports) {
        super(), this.color = e
      }
    }
    class c {
      constructor() {
        this._map = new Map, this._usedKeys = new Set, this._invalidations = 0
      }
      invalidateCache() {
        this._invalidations += 1, 50 === this._invalidations && (this._deleteUnused(), this._invalidations = 0), this
          ._usedKeys.clear(), this._map.forEach(((exports, t) => exports.invalidateCache()))
      }
      get(exports) {
        const t = this._map.get(exports);
        return void 0 !== t && this._usedKeys.add(exports), t
      }
      set(exports, t) {
        this._usedKeys.add(exports), this._map.set(exports, t)
      } [Symbol.iterator]() {
        const exports = Array.from(this._usedKeys)[Symbol.iterator]();
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => {
            const t = exports.next();
            return t.value ? {
              value: [t.value, (0, newSeries.ensureDefined)(this._map.get(t.value))],
              done: !1
            } : {
              value: void 0,
              done: !0
            }
          }
        }
      }
      forEach(exports) {
        this._map.forEach(((t, i) => {
          this._usedKeys.has(i) && e(t, i)
        }))
      }
      delete(exports) {
        const t = this._map.get(exports);
        void 0 !== t && t.invalidateCache(), this._usedKeys.delete(exports)
      }
      _deleteUnused() {
        const exports = [];
        this._map.forEach(((t, i) => {
          this._usedKeys.has(i) || exports.push(i)
        }));
        for (const t of e) this._map.delete(t)
      }
    }
    class h extends a.CachedContainer {
      constructor() {
        super(), this.points1 = new a.CachedContainer, this.points2 = new a.CachedContainer, this.push(this
          .points1), this.push(this.points2)
      }
      addPoints1Point(exports, t) {
        let i = this.points1.newItem();
        null !== i ? (i.x = exports, i.y = t) : i = {
          x: exports,
          y: t
        }, this.points1.push(i)
      }
      addPoints2Point(exports, t) {
        let i = this.points2.newItem();
        null !== i ? (i.x = exports, i.y = t) : i = {
          x: exports,
          y: t
        }, this.points2.push(i)
      }
      invalidateCache() {
        this.points1.invalidateCache(), this.points2.invalidateCache()
      }
    }
    class d extends r.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._data = e ?? null
      }
      setData(exports) {
        this._data = e
      }
      hitTest(exports) {
        return null
      }
      _drawImpl(exports) {
        if (null === this._data) return;
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s
        } = exports, o = .25 * this._data.barSpacing;
        for (const [, e] of this._data.colorAreas) {
          t.beginPath();
          for (let newSeries = 0; n < exports.length(); n++) {
            const r = exports.at(newSeries);
            if (r.points1.isEmpty() || r.points2.isEmpty()) continue;
            const a = r.points1.at(0).x,
              l = r.points1.at(0).y;
            if (t.moveTo(Math.round(a * i), l * s), 1 !== r.points1.length() && 1 !== r.points2.length()) {
              for (const e of r.points1.iterator(1)) t.lineTo(Math.round(exports.x * i), exports.y * s);
              for (const e of r.points2.iterator(r.points2.length() - 1, !0)) t.lineTo(Math.round(exports.x * i), exports.y * s)
            } else {
              const exports = r.points2.at(0).x,
                newSeries = r.points2.at(0).y;
              t.lineTo(Math.round((a + o) * i), l * s), t.lineTo(Math.round((e + o) * i), n * s), t.lineTo(Math
                .round((e - o) * i), n * s), t.lineTo(Math.round((a - o) * i), l * s)
            }
          }
          if (t.closePath(), 0 === exports.color.type) t.fillStyle = exports.color.color;
          else {
            const i = t.createLinearGradient(0, exports.color.coordinate1 * series, 0, exports.color.coordinate2 * s);
            i.addColorStop(0, exports.color.color1 ?? "transparent"), i.addColorStop(1, exports.color.color2 ?? "transparent"),
              t.fillStyle = i
          }
          t.fill()
        }
      }
    }