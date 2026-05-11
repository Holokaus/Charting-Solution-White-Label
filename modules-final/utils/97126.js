/**
 * Module 97126 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97126: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      AreaBackgroundItem: () => lineToolManager_h,
      AreaBackgroundItemsGroup: () => lineToolManager_l,
      AreaBackgroundRenderer: () => lineToolManager_d,
      CachedMap: () => lineToolManager_c
    });
    var lineToolManager_s, lineToolManager_o, lineToolManager_n = lineToolManager_i(50151),
      lineToolManager_r = lineToolManager_i(10307),
      lineToolManager_a = lineToolManager_i(7793);
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Solid = 0] = "Solid", lineToolManager_e[lineToolManager_e.Gradient = 1] = "Gradient"
    }(lineToolManager_s || (lineToolManager_s = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.PurgeCachedMapCacheIterations = 50] = "PurgeCachedMapCacheIterations"
    }(lineToolManager_o || (lineToolManager_o = {}));
    class lineToolManager_l extends lineToolManager_a.CachedContainer {
      constructor(lineToolManager_e) {
        super(), this.color = lineToolManager_e
      }
    }
    class lineToolManager_c {
      constructor() {
        this._map = new Map, this._usedKeys = new Set, this._invalidations = 0
      }
      invalidateCache() {
        this._invalidations += 1, 50 === this._invalidations && (this._deleteUnused(), this._invalidations = 0), this
          ._usedKeys.clear(), this._map.forEach(((lineToolManager_e, lineToolManager_t) => lineToolManager_e.invalidateCache()))
      }
      get(lineToolManager_e) {
        const lineToolManager_t = this._map.get(lineToolManager_e);
        return void 0 !== lineToolManager_t && this._usedKeys.add(lineToolManager_e), lineToolManager_t
      }
      set(lineToolManager_e, lineToolManager_t) {
        this._usedKeys.add(lineToolManager_e), this._map.set(lineToolManager_e, lineToolManager_t)
      } [Symbol.iterator]() {
        const lineToolManager_e = Array.from(this._usedKeys)[Symbol.iterator]();
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => {
            const lineToolManager_t = lineToolManager_e.next();
            return lineToolManager_t.value ? {
              value: [lineToolManager_t.value, (0, lineToolManager_n.ensureDefined)(this._map.get(lineToolManager_t.value))],
              done: !1
            } : {
              value: void 0,
              done: !0
            }
          }
        }
      }
      forEach(lineToolManager_e) {
        this._map.forEach(((lineToolManager_t, lineToolManager_i) => {
          this._usedKeys.has(lineToolManager_i) && lineToolManager_e(lineToolManager_t, lineToolManager_i)
        }))
      }
      delete(lineToolManager_e) {
        const lineToolManager_t = this._map.get(lineToolManager_e);
        void 0 !== lineToolManager_t && lineToolManager_t.invalidateCache(), this._usedKeys.delete(lineToolManager_e)
      }
      _deleteUnused() {
        const lineToolManager_e = [];
        this._map.forEach(((lineToolManager_t, lineToolManager_i) => {
          this._usedKeys.has(lineToolManager_i) || lineToolManager_e.push(lineToolManager_i)
        }));
        for (const lineToolManager_t of lineToolManager_e) this._map.delete(lineToolManager_t)
      }
    }
    class lineToolManager_h extends lineToolManager_a.CachedContainer {
      constructor() {
        super(), this.points1 = new lineToolManager_a.CachedContainer, this.points2 = new lineToolManager_a.CachedContainer, this.push(this
          .points1), this.push(this.points2)
      }
      addPoints1Point(lineToolManager_e, lineToolManager_t) {
        let lineToolManager_i = this.points1.newItem();
        null !== lineToolManager_i ? (lineToolManager_i.lineToolManager_x = lineToolManager_e, lineToolManager_i.lineToolManager_y = lineToolManager_t) : lineToolManager_i = {
          lineToolManager_x: lineToolManager_e,
          lineToolManager_y: lineToolManager_t
        }, this.points1.push(lineToolManager_i)
      }
      addPoints2Point(lineToolManager_e, lineToolManager_t) {
        let lineToolManager_i = this.points2.newItem();
        null !== lineToolManager_i ? (lineToolManager_i.lineToolManager_x = lineToolManager_e, lineToolManager_i.lineToolManager_y = lineToolManager_t) : lineToolManager_i = {
          lineToolManager_x: lineToolManager_e,
          lineToolManager_y: lineToolManager_t
        }, this.points2.push(lineToolManager_i)
      }
      invalidateCache() {
        this.points1.invalidateCache(), this.points2.invalidateCache()
      }
    }
    class lineToolManager_d extends lineToolManager_r.BitmapCoordinatesPaneRenderer {
      constructor(lineToolManager_e) {
        super(), this._data = null, this._data = lineToolManager_e ?? null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      hitTest(lineToolManager_e) {
        return null
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data) return;
        const {
          context: lineToolManager_t,
          horizontalPixelRatio: lineToolManager_i,
          verticalPixelRatio: lineToolManager_s
        } = lineToolManager_e, lineToolManager_o = .25 * this._data.barSpacing;
        for (const [, lineToolManager_e] of this._data.colorAreas) {
          lineToolManager_t.beginPath();
          for (let lineToolManager_n = 0; lineToolManager_n < lineToolManager_e.length(); lineToolManager_n++) {
            const lineToolManager_r = lineToolManager_e.at(lineToolManager_n);
            if (lineToolManager_r.points1.isEmpty() || lineToolManager_r.points2.isEmpty()) continue;
            const lineToolManager_a = lineToolManager_r.points1.at(0).lineToolManager_x,
              lineToolManager_l = lineToolManager_r.points1.at(0).lineToolManager_y;
            if (lineToolManager_t.moveTo(Math.round(lineToolManager_a * lineToolManager_i), lineToolManager_l * lineToolManager_s), 1 !== lineToolManager_r.points1.length() && 1 !== lineToolManager_r.points2.length()) {
              for (const lineToolManager_e of lineToolManager_r.points1.iterator(1)) lineToolManager_t.lineTo(Math.round(lineToolManager_e.lineToolManager_x * lineToolManager_i), lineToolManager_e.lineToolManager_y * lineToolManager_s);
              for (const lineToolManager_e of lineToolManager_r.points2.iterator(lineToolManager_r.points2.length() - 1, !0)) lineToolManager_t.lineTo(Math.round(lineToolManager_e.lineToolManager_x * lineToolManager_i), lineToolManager_e.lineToolManager_y * lineToolManager_s)
            } else {
              const lineToolManager_e = lineToolManager_r.points2.at(0).lineToolManager_x,
                lineToolManager_n = lineToolManager_r.points2.at(0).lineToolManager_y;
              lineToolManager_t.lineTo(Math.round((lineToolManager_a + lineToolManager_o) * lineToolManager_i), lineToolManager_l * lineToolManager_s), lineToolManager_t.lineTo(Math.round((lineToolManager_e + lineToolManager_o) * lineToolManager_i), lineToolManager_n * lineToolManager_s), lineToolManager_t.lineTo(Math
                .round((lineToolManager_e - lineToolManager_o) * lineToolManager_i), lineToolManager_n * lineToolManager_s), lineToolManager_t.lineTo(Math.round((lineToolManager_a - lineToolManager_o) * lineToolManager_i), lineToolManager_l * lineToolManager_s)
            }
          }
          if (lineToolManager_t.closePath(), 0 === lineToolManager_e.color.type) lineToolManager_t.fillStyle = lineToolManager_e.color.color;
          else {
            const lineToolManager_i = lineToolManager_t.createLinearGradient(0, lineToolManager_e.color.coordinate1 * lineToolManager_s, 0, lineToolManager_e.color.coordinate2 * lineToolManager_s);
            lineToolManager_i.addColorStop(0, lineToolManager_e.color.color1 ?? "transparent"), lineToolManager_i.addColorStop(1, lineToolManager_e.color.color2 ?? "transparent"),
              lineToolManager_t.fillStyle = lineToolManager_i
          }
          lineToolManager_t.fill()
        }
      }
    }
}
