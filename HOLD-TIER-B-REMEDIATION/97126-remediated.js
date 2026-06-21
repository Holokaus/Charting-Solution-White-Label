/**
 * Module 97126 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

97126: (exports, module, require) => {
    "use strict";
    require.register(module, {
      AreaBackgroundItem: () => handler,
      AreaBackgroundItemsGroup: () => lineToolManager_l,
      AreaBackgroundRenderer: () => register,
      CachedMap: () => lineToolManager_c
    });
    var studyIds, isLineTool, name = require(50151),
      config = require(10307),
      lineToolManager_a = require(7793);
    ! function(exports) {
      exports[exports.Solid = 0] = "Solid", exports[exports.Gradient = 1] = "Gradient"
    }(studyIds || (studyIds = {})),
    function(exports) {
      exports[exports.PurgeCachedMapCacheIterations = 50] = "PurgeCachedMapCacheIterations"
    }(isLineTool || (isLineTool = {}));
    class lineToolManager_l extends lineToolManager_a.CachedContainer {
      constructor(exports) {
        super(), this.color = exports
      }
    }
    class lineToolManager_c {
      constructor() {
        this._map = new Map, this._usedKeys = new Set, this._invalidations = 0
      }
      invalidateCache() {
        this._invalidations += 1, 50 === this._invalidations && (this._deleteUnused(), this._invalidations = 0), this
          ._usedKeys.clear(), this._map.forEach(((exports, module) => exports.invalidateCache()))
      }
      get(exports) {
        const module = this._map.get(exports);
        return void 0 !== module && this._usedKeys.add(exports), module
      }
      set(exports, module) {
        this._usedKeys.add(exports), this._map.set(exports, module)
      } [Symbol.iterator]() {
        const exports = Array.from(this._usedKeys)[Symbol.iterator]();
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => {
            const module = exports.next();
            return module.value ? {
              value: [module.value, (0, name.ensureDefined)(this._map.get(module.value))],
              done: !1
            } : {
              value: void 0,
              done: !0
            }
          }
        }
      }
      forEach(exports) {
        this._map.forEach(((module, require) => {
          this._usedKeys.has(require) && exports(module, require)
        }))
      }
      delete(exports) {
        const module = this._map.get(exports);
        void 0 !== module && module.invalidateCache(), this._usedKeys.delete(exports)
      }
      _deleteUnused() {
        const exports = [];
        this._map.forEach(((module, require) => {
          this._usedKeys.has(require) || exports.push(require)
        }));
        for (const module of exports) this._map.delete(module)
      }
    }
    class handler extends lineToolManager_a.CachedContainer {
      constructor() {
        super(), this.points1 = new lineToolManager_a.CachedContainer, this.points2 = new lineToolManager_a.CachedContainer, this.push(this
          .points1), this.push(this.points2)
      }
      addPoints1Point(exports, module) {
        let require = this.points1.newItem();
        null !== require ? (require.lineToolManager_x = exports, require.lineToolManager_y = module) : require = {
          lineToolManager_x: exports,
          lineToolManager_y: module
        }, this.points1.push(require)
      }
      addPoints2Point(exports, module) {
        let require = this.points2.newItem();
        null !== require ? (require.lineToolManager_x = exports, require.lineToolManager_y = module) : require = {
          lineToolManager_x: exports,
          lineToolManager_y: module
        }, this.points2.push(require)
      }
      invalidateCache() {
        this.points1.invalidateCache(), this.points2.invalidateCache()
      }
    }
    class register extends config.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._data = exports ?? null
      }
      setData(exports) {
        this._data = exports
      }
      hitTest(exports) {
        return null
      }
      _drawImpl(exports) {
        if (null === this._data) return;
        const {
          context: module,
          horizontalPixelRatio: require,
          verticalPixelRatio: studyIds
        } = exports, isLineTool = .25 * this._data.barSpacing;
        for (const [, exports] of this._data.colorAreas) {
          module.beginPath();
          for (let name = 0; name < exports.length(); name++) {
            const config = exports.at(name);
            if (config.points1.isEmpty() || config.points2.isEmpty()) continue;
            const lineToolManager_a = config.points1.at(0).lineToolManager_x,
              lineToolManager_l = config.points1.at(0).lineToolManager_y;
            if (module.moveTo(Math.round(lineToolManager_a * require), lineToolManager_l * studyIds), 1 !== config.points1.length() && 1 !== config.points2.length()) {
              for (const exports of config.points1.iterator(1)) module.lineTo(Math.round(exports.lineToolManager_x * require), exports.lineToolManager_y * studyIds);
              for (const exports of config.points2.iterator(config.points2.length() - 1, !0)) module.lineTo(Math.round(exports.lineToolManager_x * require), exports.lineToolManager_y * studyIds)
            } else {
              const exports = config.points2.at(0).lineToolManager_x,
                name = config.points2.at(0).lineToolManager_y;
              module.lineTo(Math.round((lineToolManager_a + isLineTool) * require), lineToolManager_l * studyIds), module.lineTo(Math.round((exports + isLineTool) * require), name * studyIds), module.lineTo(Math
                .round((exports - isLineTool) * require), name * studyIds), module.lineTo(Math.round((lineToolManager_a - isLineTool) * require), lineToolManager_l * studyIds)
            }
          }
          if (module.closePath(), 0 === exports.color.type) module.fillStyle = exports.color.color;
          else {
            const require = module.createLinearGradient(0, exports.color.coordinate1 * studyIds, 0, exports.color.coordinate2 * studyIds);
            require.addColorStop(0, exports.color.color1 ?? "transparent"), require.addColorStop(1, exports.color.color2 ?? "transparent"),
              module.fillStyle = require
          }
          module.fill()
        }
      }
    }