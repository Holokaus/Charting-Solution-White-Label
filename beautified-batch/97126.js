/**
 * Module 97126 - Auto-beautified from TradingView webpack bundle
 *
 * @module 97126
 * @date 2026-04-23
 * @size 3002 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 7793, 10307, 50151
 *
 * Exports:
 *   - AreaBackgroundItem (internal: h)
 *   - AreaBackgroundItemsGroup (internal: l)
 *   - AreaBackgroundRenderer (internal: d)
 *   - CachedMap (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  AreaBackgroundItem: () => h,
  AreaBackgroundItemsGroup: () => l,
  AreaBackgroundRenderer: () => d,
  CachedMap: () => c
});
var s, o, n = i(50151),
  r = i(10307),
  a = i(7793);
! function(e) {
  e[e.Solid = 0] = "Solid", e[e.Gradient = 1] = "Gradient"
}(s || (s = {})),
function(e) {
  e[e.PurgeCachedMapCacheIterations = 50] = "PurgeCachedMapCacheIterations"
}(o || (o = {}));
class l extends a.CachedContainer {
  constructor(e) {
    super(), this.color = e
  }
}
class c {
  constructor() {
    this._map = new Map, this._usedKeys = new Set, this._invalidations = 0
  }
  invalidateCache() {
    this._invalidations += 1, 50 === this._invalidations && (this._deleteUnused(), this._invalidations = 0), this._usedKeys.clear(), this._map.forEach(((e, t) => e.invalidateCache()))
  }
  get(e) {
    const t = this._map.get(e);
    return void 0 !== t && this._usedKeys.add(e), t
  }
  set(e, t) {
    this._usedKeys.add(e), this._map.set(e, t)
  } [Symbol.iterator]() {
    const e = Array.from(this._usedKeys)[Symbol.iterator]();
    return {
      [Symbol.iterator]() {
        return this
      },
      next: () => {
        const t = e.next();
        return t.value ? {
          value: [t.value, (0, n.ensureDefined)(this._map.get(t.value))],
          done: !1
        } : {
          value: void 0,
          done: !0
        }
      }
    }
  }
  forEach(e) {
    this._map.forEach(((t, i) => {
      this._usedKeys.has(i) && e(t, i)
    }))
  }
  delete(e) {
    const t = this._map.get(e);
    void 0 !== t && t.invalidateCache(), this._usedKeys.delete(e)
  }
  _deleteUnused() {
    const e = [];
    this._map.forEach(((t, i) => {
      this._usedKeys.has(i) || e.push(i)
    }));
    for (const t of e) this._map.delete(t)
  }
}
class h extends a.CachedContainer {
  constructor() {
    super(), this.points1 = new a.CachedContainer, this.points2 = new a.CachedContainer, this.push(this.points1), this.push(this.points2)
  }
  addPoints1Point(e, t) {
    let i = this.points1.newItem();
    null !== i ? (i.x = e, i.y = t) : i = {
      x: e,
      y: t
    }, this.points1.push(i)
  }
  addPoints2Point(e, t) {
    let i = this.points2.newItem();
    null !== i ? (i.x = e, i.y = t) : i = {
      x: e,
      y: t
    }, this.points2.push(i)
  }
  invalidateCache() {
    this.points1.invalidateCache(), this.points2.invalidateCache()
  }
}
class d extends r.BitmapCoordinatesPaneRenderer {
    constructor(e) {
      super(), this._data = null, this._data = e ?? null
    }
    setData(e) {
      this._data = e
    }
    hitTest(e) {
      return null
    }
    _drawImpl(e) {
      if (null === this._data) return;
      const {
        context: t,
        horizontalPixelRatio: i,
        verticalPixelRatio: s
      } = e, o = .25 * this._data.barSpacing;
      for (const [, e] of this._data.colorAreas) {
        t.beginPath();
        for (let n = 0; n < e.length(); n++) {
          const r = e.at(n);
          if (r.points1.isEmpty() || r.points2.isEmpty()) continue;
          const a = r.points1.at(0).x,
            l = r.points1.at(0).y;
          if (t.moveTo(Math.round(a * i), l * s), 1 !== r.points1.length() && 1 !== r.points2.length()) {
            for (const e of r.points1.iterator(1)) t.lineTo(Math.round(e.x * i), e.y * s);
            for (const e of r.points2.iterator(r.points2.length() - 1, !0)) t.lineTo(Math.round(e.x * i), e.y * s)
          } else {
            const e = r.points2.at(0).x,
              n = r.points2.at(0).y;
            t.lineTo(Math.round((a + o) * i), l * s), t.lineTo(Math.round((e + o) * i), n * s), t.lineTo(Math.round((e - o) * i), n * s), t.lineTo(Math.round((a - o) * i), l * s)
          }
        }
        if (t.closePath(), 0 === e.color.type) t.fillStyle = e.color.color;
        else {
          const i = t.createLinearGradient(0, e.color.coordinate1 * s, 0, e.color.coordinate2 * s);
          i.addColorStop(0, e.color.color1 ?? "transparent"), i.addColorStop(1, e.color.color2 ?? "transparent"), t.fillStyle = i
        }
        t.fill()
      }
    }
