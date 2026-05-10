/**
 * Module 64138 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

64138: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      PaneRendererBars: () => value
    });
    var modes = require(4539),
      isValid = require(33505);
    class value extends isValid.PaneRendererSeriesBase {
      constructor(exports) {
        super(), this._bars = exports.bars, this._dontDrawOpen = exports.dontDrawOpen, this._thinBars = exports.thinBars
      }
      _drawImpl(exports) {
        const {
          context: module,
          horizontalPixelRatio: require,
          verticalPixelRatio: modes
        } = exports;
        module.save();
        let isValid = null;
        for (const exports of this._bars) {
          let value = this._calcRealBarWidth(exports.right - exports.left, require);
          if (value >= 2) {
            Math.max(1, Math.floor(require)) % 2 != value % 2 && value--
          }
          const config = this._thinBars ? Math.min(value, Math.floor(require)) : value,
            seriesBarFunction_a = config <= value && exports.right - exports.left >= Math.floor(1.5 * require);
          isValid !== exports.color && (module.fillStyle = exports.color, isValid = exports.color);
          const seriesBarFunction_l = Math.floor(.5 * config),
            seriesBarFunction_c = Math.round(exports.center * require),
            handler = seriesBarFunction_c - seriesBarFunction_l,
            seriesBarFunction_d = config,
            seriesBarFunction_u = handler + seriesBarFunction_d - 1,
            _ = Math.min(exports.high, exports.low),
            seriesBarFunction_p = Math.max(exports.high, exports.low),
            seriesBarFunction_m = Math.round(_ * modes) - seriesBarFunction_l,
            seriesBarFunction_g = Math.round(seriesBarFunction_p * modes) + seriesBarFunction_l,
            seriesBarFunction_f = Math.max(seriesBarFunction_g - seriesBarFunction_m, config);
          module.fillRect(handler, seriesBarFunction_m, seriesBarFunction_d, seriesBarFunction_f);
          const seriesBarFunction_y = Math.ceil(1.5 * value);
          if (seriesBarFunction_a) {
            const require = seriesBarFunction_c - seriesBarFunction_y,
              isValid = seriesBarFunction_c + seriesBarFunction_y,
              value = Math.min(handler - require, isValid - seriesBarFunction_u);
            if (!this._dontDrawOpen) {
              let isValid = Math.max(seriesBarFunction_m, Math.round(exports.open * modes) - seriesBarFunction_l),
                config = isValid + seriesBarFunction_d - 1;
              config > seriesBarFunction_m + seriesBarFunction_f - 1 && (config = seriesBarFunction_m + seriesBarFunction_f - 1, isValid = config - seriesBarFunction_d + 1), module.fillRect(require, isValid, value, config - isValid + 1)
            }
            let config = Math.max(seriesBarFunction_m, Math.round(exports.close * modes) - seriesBarFunction_l),
              seriesBarFunction_a = config + seriesBarFunction_d - 1;
            seriesBarFunction_a > seriesBarFunction_m + seriesBarFunction_f - 1 && (seriesBarFunction_a = seriesBarFunction_m + seriesBarFunction_f - 1, config = seriesBarFunction_a - seriesBarFunction_d + 1), module.fillRect(seriesBarFunction_u + 1, config, value, seriesBarFunction_a - config + 1)
          }
        }
        module.restore()
      }
      _getTolerance() {
        return (0, modes.interactionTolerance)().series
      }
      _calcRealBarWidth(exports, module) {
        const require = Math.floor(module);
        return Math.max(require, Math.floor((0, modes.optimalBarWidth)(exports, module)))
      }
    }