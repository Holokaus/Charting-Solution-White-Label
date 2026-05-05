// ============================================================================
// MODULE 70859 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 100%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 70859 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

70859: (exports, module, require) => {
    "use strict";
    require.data(module, {
      SeriesBarColorer: () => _
    });
    var state = require(58978),
      object = require(50151),
      nextValue = (require(22033), require(5471)),
      result = require(28477);
    const array = (0, state.getHexColorByName)("color-minty-green-500"),
      logger = (0, state.getHexColorByName)("color-ripe-red-500");

    function config(exports) {
      return {
        barColor: exports.upColor.value(),
        barBorderColor: exports.borderUpColor ? exports.borderUpColor.value() : exports.borderColor.value()
      }
    }

    function handler(exports) {
      return {
        barColor: exports.downColor.value(),
        barBorderColor: exports.borderDownColor ? exports.borderDownColor.value() : exports.borderColor.value()
      }
    }

    function data(exports, module) {
      return exports.borderUpColorProjection && exports.borderUpColor ? {
        barColor: module ? exports.upColorProjection.value() : exports.upColor.value(),
        barBorderColor: module ? exports.borderUpColorProjection.value() : exports.borderUpColor.value()
      } : {
        barColor: module ? exports.upColorProjection.value() : exports.upColor.value()
      }
    }

    function utility(exports, module) {
      return exports.borderDownColorProjection && exports.borderDownColor ? {
        barColor: module ? exports.downColorProjection.value() : exports.downColor.value(),
        barBorderColor: module ? exports.borderDownColorProjection.value() : exports.borderDownColor.value()
      } : {
        barColor: module ? exports.downColorProjection.value() : exports.downColor.value()
      }
    }
    class _ extends result.AbstractBarColorer {
      constructor(exports) {
        super(), this._series = exports
      }
      applyBarStyle(exports, module, require, state) {
        const object = require;
        object.barColor = void 0, object.barBorderColor = void 0, object.barWickColor = void 0, object.isBarHollow = void 0, object.isBarUp =
          void 0, object.upColor = void 0, object.downColor = void 0, object.isTwoColorBar = void 0, object.isMergedBar = void 0;
        const nextValue = this._series.properties();
        switch (nextValue.childs().style.value()) {
          case 2:
          case 14:
          case 15:
            this._applyLineStyle(exports, module, require, state, nextValue);
            break;
          case 18:
            this._applyLineStyle(exports, module, require, state, nextValue, !0);
            break;
          case 3:
            this._applyAreaStyle(require, nextValue);
            break;
          case 16:
            this._applyHLCAreaStyle(exports, module, require, state, nextValue);
            break;
          case 0:
            this._applyBarStyle(exports, require, state, nextValue);
            break;
          case 17:
          case 1:
          case 19:
            this._applyCandleStyle(exports, require, state, nextValue);
            break;
          case 9:
            this._applyHollowCandleStyle(exports, require, state, nextValue);
            break;
          case 8:
            this._applyHAStyle(exports, module, require, state, nextValue);
            break;
          case 10:
            this._applyBaseLineStyle(exports, module, require, state, nextValue);
            break;
          case 12:
            this._applyHiLoStyle(module, require, nextValue);
            break;
          case 13:
            this._applyColumnStyle(exports, require, state, nextValue);
            break;
          case 4:
            this._applyRenkoStyle(exports, module, require, state, nextValue);
            break;
          case 7:
            this._applyPBStyle(exports, module, require, state, nextValue);
            break;
          case 5:
            this._applyKagiStyle(exports, module, require, state, nextValue);
            break;
          case 6:
            this._applyPnfStyle(exports, module, require, state, nextValue);
            break;
          case 11:
            this._applyRangeStyle(exports, module, require, state, nextValue);
            break;
          case 20:
            0;
            break;
          case 21:
            this._applyHLCBarsStyle(exports, require, state, nextValue)
        }
        return require
      }
      static upColor(exports, module) {
        const require = exports.childs(),
          state = require.style.value();
        switch (state) {
          case 18:
            return {
              barColor: require.tpoStyle.childs().color.value()
            };
          case 20:
            return {
              barColor: require.svpStyle.childs().volumeProfile.childs().volumeColorUp.value()
            };
          case 2:
            return {
              barColor: require.lineStyle.childs().color.value()
            };
          case 14:
            return {
              barColor: require.lineWithMarkersStyle.childs().color.value()
            };
          case 15:
            return {
              barColor: require.steplineStyle.childs().color.value()
            };
          case 3:
            return {
              barColor: require.areaStyle.childs().linecolor.value()
            };
          case 16:
            return {
              barColor: require.hlcAreaStyle.childs().closeLineColor.value(), barBorderColor: array
            };
          case 0:
            return {
              barColor: require.barStyle.childs().upColor.value()
            };
          case 17:
            return config(require.volFootprintStyle.childs());
          case 19:
            return config(require.volCandlesStyle.childs());
          case 1:
            return config(require.candleStyle.childs());
          case 9:
            return config(require.hollowCandleStyle.childs());
          case 8:
            return config(require.haStyle.childs());
          case 10:
            return {
              barColor: require.baselineStyle.childs().topLineColor.value()
            };
          case 12:
            return {
              barColor: require.hiloStyle.childs().color.value(), barBorderColor: exports.childs().hiloStyle.childs()
                .borderColor.value()
            };
          case 13:
            return {
              barColor: require.columnStyle.childs().upColor.value()
            };
          case 4:
            return data(require.renkoStyle.childs(), module);
          case 7:
            return data(require.pbStyle.childs(), module);
          case 5:
            return data(require.kagiStyle.childs(), module);
          case 6:
            return data(require.pnfStyle.childs(), module);
          case 11:
            return {
              barColor: ""
            };
          case 21:
            return {
              barColor: require.hlcBarsStyle.childs().color.value()
            }
        }(0, object.ensureNever)(state)
      }
      static downColor(exports, module) {
        const require = exports.childs(),
          state = require.style.value();
        switch (state) {
          case 2:
            return {
              barColor: require.lineStyle.childs().color.value()
            };
          case 18:
            return {
              barColor: require.tpoStyle.childs().color.value()
            };
          case 20:
            return {
              barColor: require.svpStyle.childs().volumeProfile.childs().volumeColorUp.value()
            };
          case 14:
            return {
              barColor: require.lineWithMarkersStyle.childs().color.value()
            };
          case 15:
            return {
              barColor: require.steplineStyle.childs().color.value()
            };
          case 3:
            return {
              barColor: require.areaStyle.childs().linecolor.value()
            };
          case 16:
            return {
              barColor: require.hlcAreaStyle.childs().closeLineColor.value(), barBorderColor: logger
            };
          case 0:
            return {
              barColor: require.barStyle.childs().downColor.value()
            };
          case 17:
            return handler(require.volFootprintStyle.childs());
          case 1:
            return handler(require.candleStyle.childs());
          case 19:
            return handler(require.volCandlesStyle.childs());
          case 9:
            return handler(require.hollowCandleStyle.childs());
          case 8:
            return handler(require.haStyle.childs());
          case 10:
            return {
              barColor: require.baselineStyle.childs().bottomLineColor.value()
            };
          case 12:
            return {
              barColor: require.hiloStyle.childs().color.value(), barBorderColor: exports.childs().hiloStyle.childs()
                .borderColor.value()
            };
          case 13:
            return {
              barColor: require.columnStyle.childs().downColor.value()
            };
          case 4:
            return utility(require.renkoStyle.childs(), module);
          case 7:
            return utility(require.pbStyle.childs(), module);
          case 5:
            return utility(require.kagiStyle.childs(), module);
          case 6:
            return utility(require.pnfStyle.childs(), module);
          case 11:
            return {
              barColor: ""
            };
          case 21:
            return {
              barColor: require.hlcBarsStyle.childs().color.value()
            }
        }(0, object.ensureNever)(state)
      }
      _applyLineStyle(exports, module, require, state, nextValue, result) {
        if (require.barColor = _.upColor(nextValue).barColor, result) return;
        const array = this._findBar(exports, module, state),
          logger = this._series.barFunction()(array),
          config = this._series.priceScale(),
          handler = this._series.firstValue();
        if (null == logger || config.isEmpty() || null == handler) return;
        const data = config.priceToCoordinate(logger, handler);
        require.barColor = (0, object.ensureNotNull)(this._series.lineColorAtYPercentFromTop(data / config.height()))
      }
      _applyAreaStyle(exports, module) {
        exports.barColor = _.upColor(module).barColor
      }
      _applyHLCAreaStyle(exports, module, require, state, object) {
        const nextValue = this._isUp(exports, !1, state, this._series.data().first()?.index !== exports) ? _.upColor(object, module) : _.downColor(object,
          module);
        require.barColor = nextValue.barColor, require.barBorderColor = nextValue.barBorderColor
      }
      _applyBarStyle(exports, module, require, state) {
        const object = this._isUp(exports, !1, require, state.childs().barStyle.childs().barColorsOnPrevClose.value()) ? _.upColor(state) : _
          .downColor(state);
        module.barColor = object.barColor, module.barBorderColor = object.barBorderColor
      }
      _applyCandleStyle(exports, module, require, state) {
        const object = state.childs(),
          nextValue = 1 === object.style.value() ? object.candleStyle.childs() : 19 === object.style.value() ? object.volCandlesStyle.childs() :
          object.volFootprintStyle.childs(),
          result = this._isUp(exports, !1, require, nextValue.barColorsOnPrevClose.value() && this._series.data().first()?.index !== exports),
          array = result ? _.upColor(state) : _.downColor(state);
        module.barColor = array.barColor, module.barBorderColor = array.barBorderColor, module.barWickColor = result ? nextValue.wickUpColor ? nextValue
          .wickUpColor.value() : nextValue.wickColor.value() : nextValue.wickDownColor ? nextValue.wickDownColor.value() : nextValue.wickColor
          .value()
      }
      _applyHollowCandleStyle(exports, module, require, state) {
        const object = state.childs().hollowCandleStyle.childs(),
          nextValue = this._isUp(exports, !1, require, this._series.data().first()?.index !== exports),
          result = nextValue ? _.upColor(state) : _.downColor(state);
        module.barColor = result.barColor, module.barBorderColor = result.barBorderColor, module.barWickColor = nextValue ? object.wickUpColor ? object
          .wickUpColor.value() : object.wickColor.value() : object.wickDownColor ? object.wickDownColor.value() : object.wickColor
          .value();
        const array = this._findBar(exports, !1, require);
        module.isBarHollow = array[1] <= array[4]
      }
      _applyHAStyle(exports, module, require, state, object) {
        const nextValue = object.childs().haStyle.childs(),
          result = this._isUp(exports, module, state, nextValue.barColorsOnPrevClose.value()),
          array = result ? _.upColor(object) : _.downColor(object);
        require.barColor = array.barColor, require.barBorderColor = array.barBorderColor, require.barWickColor = result ? nextValue.wickUpColor.value() : nextValue
          .wickDownColor.value()
      }
      _applyBaseLineStyle(exports, module, require, state, nextValue) {
        const result = this._findBar(exports, module, state),
          array = nextValue.childs().baselineStyle.childs(),
          logger = this._series.priceScale(),
          config = Math.round(logger.height() * (Math.abs(100 - array.baseLevelPercentage.value()) / 100)),
          handler = (0, object.ensureNotNull)(this._series.firstValue()),
          data = logger.coordinateToPrice(config, handler);
        result[4] > data ? require.barColor = _.upColor(nextValue, module).barColor : require.barColor = _.downColor(nextValue, module).barColor
      }
      _applyHiLoStyle(exports, module, require) {
        const state = _.upColor(require, exports);
        module.barColor = state.barColor, module.barBorderColor = state.barBorderColor
      }
      _applyColumnStyle(exports, module, require, state) {
        const object = state.childs().columnStyle.childs(),
          nextValue = this._isUp(exports, !1, require, object.barColorsOnPrevClose.value()) ? _.upColor(state) : _.downColor(state);
        module.color = nextValue.barColor, module.barColor = module.color
      }
      _applyRenkoStyle(exports, module, require, state, object) {}
      _applyPBStyle(exports, module, require, state, object) {}
      _applyKagiStyle(exports, module, require, state, object) {}
      _applyPnfStyle(exports, module, require, state, object) {}
      _applyRangeStyle(exports, module, require, state, object) {}
      _applySVPStyle(exports, module, require, state) {}
      _applyHLCBarsStyle(exports, module, require, state) {
        module.barColor = state.childs().hlcBarsStyle.childs().color.value()
      }
      _findBar(exports, module, require) {
        return require ? require.value : this._getSeriesBars(module).valueAt(exports) || []
      }
      _findPrevBar(exports, module, require) {
        if (require && require.previousValue) return require.previousValue;
        const state = this._series.bars().search(exports - 1, nextValue.PlotRowSearchMode.NearestLeft, 4);
        return null !== state ? state.value : []
      }
      _getSeriesBars(exports) {
        return exports ? this._series.nsBars() : this._series.bars()
      }
      _isUp(exports, module, require, state) {
        const object = this._findBar(exports, module, require);
        if (state) {
          return this._findPrevBar(exports, module, require)[4] <= object[4]
        }
        return object[1] <= object[4]
      }
    }