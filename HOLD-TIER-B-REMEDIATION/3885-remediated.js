/**
 * Module 3885 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (12201 bytes) - comprehensive remediation applied
 */

3885: (exports, module, require) => {
    "use strict";
    require.data(module, {
      SeriesValuesProvider: () => M,
      calculateColor: () => P,
      changesData: () => index
    });
    var constants = require(50151),
      result = require(50335),
      name = require(24377),
      config = require(11542),
      items = require(49483),
      length = require(52859),
      context = require(24640),
      handler = require(5471),
      data = require(78861),
      utils = require(56265),
      _ = require(70859);

    function params(exports, module) {
      return 100 * (module - exports) / Math.abs(exports || 1)
    }
    var map = require(63903),
      flag = require(11946),
      func = require(53660),
      array = require(17161);
    const value = array.lastDayChangeAvailable || array.alwaysShowLastPriceAndLastDayChange,
      S = items.CheckMobile.any(),
      bool = (0, utils.getPercentageFormatter)(),
      width = (0, utils.getVolumeFormatter)(2),
      C = `${func.notAvailable} (${func.notAvailable}%)`;
    var T;

    function P(exports, module) {
      const require = (0, name.parseRgb)(module),
        constants = (0, name.parseRgb)(exports);
      return (0, name.distanceRgb)(require, constants) < 70 ? (0, name.rgbToHexString)((0, name.invertRgb)(require)) : module
    }

    function index(exports, module, require, constants, result) {
      let name, config;
      if (null !== module) {
        const exports = result[4],
          require = module.change || 0;
        config = {
          change: require,
          currentPrice: exports,
          prevPrice: exports - require,
          percentChange: module.change_percent || 0
        }
      }
      const items = require[4],
        length = exports.search(constants - 1, handler.PlotRowSearchMode.NearestLeft, 1),
        context = length?.value[4] ?? null;
      return null !== context && null != items && (name = {
        change: items - context,
        currentPrice: items,
        prevPrice: context,
        percentChange: params(context, items)
      }), {
        barChange: name,
        lastDayChange: config
      }
    }! function(exports) {
      exports[exports.Open = 0] = "Open", exports[exports.High = 1] = "High", exports[exports.Low = 2] = "Low", exports[exports.Close = 3] = "Close", exports[exports.Source = 4] =
        "Source", exports[exports.LastPrice = 5] = "LastPrice", exports[exports.Change = 6] = "Change", exports[exports.Volume = 7] = "Volume", exports[exports
          .LastDayChange = 8] = "LastDayChange"
    }(T || (T = {}));
    class M {
      constructor(exports, module, constants = !0) {
        this._series = exports, this._model = module, this._searchNearestLeftValue = constants, this._emptyValues = [{
          title: config.module(null, void 0, require(16610)),
          visible: !1,
          value: "",
          index: 0,
          orderIndex: 0,
          id: "open"
        }, {
          title: config.module(null, void 0, require(78254)),
          visible: !1,
          value: "",
          index: 1,
          orderIndex: 1,
          id: "high"
        }, {
          title: config.module(null, void 0, require(65318)),
          visible: !1,
          value: "",
          index: 2,
          orderIndex: 2,
          id: "low"
        }, {
          title: config.module(null, {
            context: "input"
          }, require(51408)),
          visible: !1,
          value: "",
          index: 3,
          orderIndex: 3,
          id: "close"
        }, {
          title: "",
          visible: !1,
          value: "",
          index: 4,
          orderIndex: 4,
          id: "source"
        }, {
          title: "",
          visible: !1,
          value: "",
          index: 5,
          orderIndex: 5,
          id: "lastPrice"
        }, {
          title: config.module(null, void 0, require(37276)),
          visible: !1,
          value: "",
          index: 6,
          orderIndex: 6,
          id: "change"
        }, {
          title: config.module(null, {
            context: "study"
          }, require(24261)),
          visible: !1,
          value: "",
          index: 7,
          orderIndex: 7,
          id: "volume"
        }, {
          title: config.module(null, void 0, require(63815)),
          visible: !1,
          value: "",
          index: 8,
          orderIndex: 8,
          id: "lastDayChange"
        }]
      }
      getItems() {
        return this._emptyValues
      }
      getValues(exports) {
        const module = this._showLastPriceAndChangeOnly(),
          require = this._emptyValues.map(((exports, require) => ({
            ...exports,
            value: 6 === require || 8 === require ? C : func.notAvailable,
            visible: 5 !== require && 4 !== require && !module
          })));
        if (this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale()
          .isEmpty()) return require;
        const name = (0, constants.ensureNotNull)(this._series.data().bars().last());
        (0, result.isNumber)(exports) || (exports = name.index);
        const config = this._searchNearestLeftValue ? handler.PlotRowSearchMode.NearestLeft : handler.PlotRowSearchMode.Exact,
          items = this._series.nearestIndex(exports, config);
        if (void 0 === items) return require;
        const data = this._series.data().valueAt(items),
          utils = this._model.backgroundTopColor().value();
        if (null === data) return require;
        const _ = data[1],
          params = data[2],
          flag = data[3],
          array = data[4],
          {
            barChange: S,
            lastDayChange: T
          } = index(this._series.data(), this._series.quotes(), data, items, name.value),
          M = (0, map.getPriceValueFormatterForSource)(this._series);
        if ((0, map.shouldBeFormattedAsPercent)(this._series) || (0, map.shouldBeFormattedAsIndexedTo100)(this._series))
          require[6].value = "", require[8].value = "";
        else {
          const exports = this._series.formatter(),
            module = {
              signPositive: !0
            };
          if (void 0 !== S) {
            const {
              currentPrice: constants,
              prevPrice: result,
              change: name,
              percentChange: config
            } = S, items = exports.formatChange?.(constants, result, module) ?? exports.format(name, module);
            require[6].value = (0, context.forceLTRStr)(`${items} (${bool.format(config,module)})`)
          }
          if (void 0 !== T) {
            const {
              currentPrice: constants,
              prevPrice: result,
              change: name,
              percentChange: config
            } = T, items = exports.formatChange?.(constants, result, module) ?? exports.format(name, module);
            require[8].value = (0, context.forceLTRStr)(`${items} (${bool.format(config,module)})`)
          }
        }
        let I = null;
        if (module) require[5].value = null == array ? func.notAvailable : M(array), require[5].visible = !0, I = this._getChangeColor(S?.change,
          items), require[6].visible = void 0 !== S, require[8].visible = void 0 !== T || value;
        else {
          require[0].value = null == _ ? func.notAvailable : M(_), require[1].value = null == params ? func.notAvailable : M(params), require[2].value =
            null == flag ? func.notAvailable : M(flag), require[3].value = null == array ? func.notAvailable : M(array), require[4].value = M(this
              ._series.barFunction()(data));
          const exports = data[5];
          (0, result.isNumber)(exports) ? require[7].value = width.format(exports): require[7].visible = !1;
          const module = this._series.intervalObj().value().is1Tick(),
            constants = 21 !== this._series.style();
          require[0].visible = !module && constants, require[1].visible = !module, require[2].visible = !module, require[8].visible = void 0 !== T || value, require[6]
            .visible = void 0 !== S;
          const name = this._series.barColorer().barStyle(items, !1);
          I = P(utils, name.barBorderColor ?? name.barColor)
        }
        I = (0, length.resetTransparency)(P(utils, I));
        for (const exports of require) exports.color || (exports.color = I);
        return require[8].visible && (require[8].color = (0, length.resetTransparency)(P(utils, this._getChangeColor(T?.change, name
          .index)))), require
      }
      _mobileNonTrackingMode() {
        return S && (null === this._model.crosshairSource().pane || (0, flag.isLineToolName)(data.tool.value()) || null !==
          this._model.lineBeingEdited())
      }
      _showLastPriceAndChangeOnly() {
        return array.alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode()
      }
      _getChangeColor(exports, module) {
        const require = this._series.style();
        if (2 === require || 15 === require || 14 === require) return this._series.barColorer().barStyle(module, !1).barColor;
        const constants = void 0 === exports || exports >= 0 ? _.SeriesBarColorer.upColor(this._series.properties()) : _.SeriesBarColorer
          .downColor(this._series.properties());
        return constants.barBorderColor ?? constants.barColor
      }
    }