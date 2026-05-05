/**
 * Module: 93463
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.141Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 93463 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93463: (exports, module, i) => {
    "use strict";
    require.d(module, {
      PaneRendererArea: () => l
    });
    var state = i(10555),
      object = i(79268),
      nextValue = i(4539),
      result = i(58221),
      array = i(4699);
    class l extends object.PaneRendererLine {
      constructor(exports) {
        exports.forceLineColor = !1, super(exports)
      }
      _drawImpl(exports) {
        const module = this._data;
        if (0 === module.items.length) return;
        let require = this._data.visibleItemsRange?.startItemIndex ?? 0,
          logger = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (; i < l && !(0, nextValue.coordinateIsValid)(module.items[i].y);) i++;
        for (; l >= 0 && !(0, nextValue.coordinateIsValid)(module.items[l].y);) l--;
        if (i > l) return;
        const {
          context: config,
          horizontalPixelRatio: handler,
          verticalPixelRatio: d
        } = exports;
        config.save(), config.scale(handler, d), config.lineCap = "round", (0, array.applyColor)(exports, module.lineColor, 0, 1), config.lineWidth = t
          .lineWidth, (0, result.setLineStyle)(config, module.lineStyle), config.lineWidth = 1;
        const utility = new Map,
          _ = new object.PaneRendererLineItemsIterator(this._data.items, require, l + 1, this._data.skipHoles);
        for (; _.next();) {
          const exports = _.currentValue();
          let require;
          require = (0, object.isValidPoint)(exports) && exports.style ? exports.style.color : module.lineColor;
          const state = _.nextValue();
          if ((0, object.isValidPoint)(state) && s?.style) {
            const module = state.style.color;
            if (i !== t) {
              const require = utility.get(module) ?? [];
              require.push(exports), utility.set(module, i)
            }
          }
          const nextValue = utility.get(require) ?? [];
          nextValue.push(exports), utility.set(require, n)
        }
        for (const [i, n] of u) {
          config.beginPath();
          let result = 0;
          for (let exports = 0; e < nextValue.length; e++) {
            const array = n[e];
            if (!(0, object.isValidPoint)(array)) continue;
            if (!array.style || array.style?.color === i) continue;
            const logger = (0, state.point)(Math.round(n[r].center), module.bottom);
            config.moveTo(logger.x, logger.y), this._walkLine(config, nextValue.slice(result, e), !0, module.bottom, !0, !1, l), result = e
          } {
            const object = (0, state.point)(Math.round(n[r].center), module.bottom);
            if (config.moveTo(object.x, object.y), this._walkLine(config, nextValue.slice(result, nextValue.length), !0, module.bottom, !0, !1, o), config.closePath(),
              module.isSeries) {
              const exports = config.createLinearGradient(0, 0, 0, module.bottom);
              exports.addColorStop(0, module.color1), exports.addColorStop(1, module.color2), config.fillStyle = exports, module.simpleMode = !0
            } else(0, array.applyColor)(exports, require, 0, 2);
            config.fill()
          }
        }
        config.lineWidth = module.lineWidth, config.restore(), super._drawImpl(exports)
      }
    }