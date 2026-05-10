/**
 * Module 74109 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (15562 bytes) - comprehensive remediation applied
 */

74109: (exports, module, require) => {
    "use strict";
    require.data(module, {
      volumeProfileFixedRangeBSStudyItem: () => width,
      volumeProfileFixedRangeVbPStudyItem: () => bool
    });
    var constants = require(50151),
      result = require(13823),
      name = require(4359),
      config = require(99481),
      items = require(46082),
      length = require(3186),
      context = require(45591),
      handler = require(75719),
      data = require(30376),
      utils = require(13421),
      _ = require(60755),
      params = require(18330),
      map = require(96777);
    class flag extends map.VolumeByPriceExpr {
      constructor(exports, module, require, constants, result, name, config, items, length, context, handler, data, utils) {
        super(exports, module, require, name, config, items, !1, length, context, (() => handler), data, constants, result, !1, utils), this._firstBarTime = constants, this._lastBarTime = result
      }
      update(exports) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(exports) && super.update(exports)
      }
      timeInRequestedRange(exports) {
        const module = this._timeScale().get(exports);
        return this._firstBarTime <= module && module < this._lastBarTime
      }
    }
    var func = require(28056),
      array = require(19979);
    class value extends result.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this
          ._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this
          ._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(exports, module) {
        this._eraseCmds.push(new handler.EraseObj(exports, module))
      }
      popEraseCmds() {
        const exports = this._eraseCmds;
        return this._eraseCmds = [], exports
      }
      init(exports, module) {
        this._studyDataUpdate = new utils.JStudyDataUpdate(!0), this._hists = new length.GraphicsListColl, this
          ._boxPolygons = new data.GraphicsList, this._pocLines = new data.GraphicsList, this._valueAreaHists = new length
          .GraphicsListColl;
        const require = new context.StudyGraphicsData;
        require.getObjsContainer("hhists").push(new context.Container("histBars2", this._hists)), require.getObjsContainer("hhists")
          .push(new context.Container("histBarsVA", this._valueAreaHists)), require.getObjsContainer("horizlines").push(new context
            .Container("pocLines", this._pocLines)), require.getObjsContainer("polygons").push(new context.Container(
            "histBoxBg", this._boxPolygons)), this._studyDataUpdate.init(require), this._rowsLayout = module(0), this
          ._rowSize = module(1), this._volume = module(2), this._firstBarTime = module(3), this._lastBarTime = module(4), this
          ._vaVolumePercent = module(5), this.verifyRowSizeInput(this._rowSize, this._rowsLayout), this
          ._originalResolution = items.Interval.parse(exports.symbol.interval + exports.symbol.resolution);
        const name = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution :
          this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, name,
            (0, constants.ensureDefined)(exports.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(
            this._basicResolution), this._hasSecondarySymbol && exports.new_sym(exports.symbol.tickerid, this._basicResolution
            .value());
        const config = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new _.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new flag((0, result
              .numOfSubHists)(this._volume), exports, this, this._firstBarTime, name, this._hists, this._boxPolygons, this
            ._pocLines, this._valueAreaHists, this._vaVolumePercent, config, (0, result.maxHHistItems)(), this._lastBarTime),
          this._volumeByPriceExpr.setIdsGeneratorProxy(this), this._developingPocSeries = new func
          .VolumeProfileOutputSeries, this._developingVAHighSeries = new func.VolumeProfileOutputSeries, this
          ._developingVALowSeries = new func.VolumeProfileOutputSeries
      }
      main(exports, module, require) {
        this._hasSecondarySymbol && exports.select_sym(1), this._timeSeries = exports.new_unlimited_var(), this._openSeries = exports
          .new_unlimited_var(), this._highSeries = exports.new_unlimited_var(), this._lowSeries = exports.new_unlimited_var(),
          this._closeSeries = exports.new_unlimited_var(), this._volumeSeries = exports.new_unlimited_var();
        const result = {
          type: "composite",
          data: []
        };
        if (require && require.period === this._basicResolution.value() && (this._timeSeries.set(array.Std.time(exports)), this
            ._openSeries.set(array.Std.open(exports)), this._highSeries.set(array.Std.high(exports)), this._lowSeries.set(array.Std.low(exports)),
            this._closeSeries.set(array.Std.close(exports)), this._volumeSeries.set(array.Std.volume(exports)), this
            ._developingPocSeries.addHist(array.Std.time(exports)), this._developingVAHighSeries.addHist(array.Std.time(exports)), this
            ._developingVALowSeries.addHist(array.Std.time(exports)), this._vbPCheckHaveVolumeExpr.update(0, exports.symbol
              .isLastBar), this._volumeByPriceExpr.update(0), this._developingPocSeries.removeLastIfNaN(), this
            ._developingVAHighSeries.removeLastIfNaN(), this._developingVALowSeries.removeLastIfNaN(), exports.symbol
            .isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const exports = this._studyDataUpdate.getUpdate();
          exports.json && result.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.json
          }), exports.jsonUpdate && result.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && exports.select_sym(0), require && require.period === this._originalResolution.value()) {
          (0, constants.assert)(exports.symbol.time === require.time);
          const module = require.time,
            name = module + this._originalResolution.inMilliseconds(module) - 1;
          if (module && module >= this._firstBarTime) {
            const exports = this._developingPocSeries.getLeftOrEqual(name),
              module = this._developingVAHighSeries.getLeftOrEqual(name),
              require = this._developingVALowSeries.getLeftOrEqual(name);
            result.data.push([exports, module, require])
          } else result.data.push([NaN, NaN, NaN])
        }
        return result
      }
      time() {
        return this._timeSeries
      }
      open() {
        return this._openSeries
      }
      high() {
        return this._highSeries
      }
      low() {
        return this._lowSeries
      }
      close() {
        return this._closeSeries
      }
      volume() {
        return this._volumeSeries
      }
      developingPoc() {
        return this._developingPocSeries
      }
      developingVAHigh() {
        return this._developingVAHighSeries
      }
      developingVALow() {
        return this._developingVALowSeries
      }
    }

    function S(exports) {
      return {
        constructor: value,
        name: exports.description,
        metainfo: {
          _metainfoVersion: 51,
          shortDescription: "VPFR",
          format: {
            type: "volume"
          },
          is_price_study: !0,
          defaults: {
            graphics: {
              hhists: {
                histBars2: {
                  colors: ["", ""],
                  direction: config.HHistDirection.LeftToRight,
                  percentWidth: 30,
                  showValues: !1,
                  transparencies: [76, 76],
                  valuesColor: "#424242",
                  visible: !0
                },
                histBarsVA: {
                  colors: ["#1592e6", "#fbc123"],
                  direction: config.HHistDirection.LeftToRight,
                  percentWidth: 30,
                  showValues: !1,
                  transparencies: [30, 30],
                  valuesColor: "",
                  visible: !0
                }
              },
              horizlines: {
                pocLines: {
                  color: "",
                  style: params.LineStyle.Solid,
                  visible: !0,
                  width: 2
                }
              },
              polygons: {
                histBoxBg: {
                  color: "",
                  transparency: 94
                }
              }
            },
            inputs: {
              first_bar_time: 0,
              last_bar_time: 0,
              rows: 24,
              rowsLayout: "Number Of Rows",
              subscribeRealtime: !0,
              vaVolume: 70,
              volume: "Up/Down"
            },
            styles: {
              developingPoc: {
                color: "",
                linestyle: params.LineStyle.Solid,
                linewidth: 1,
                plottype: name.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVAHigh: {
                color: "",
                linestyle: params.LineStyle.Solid,
                linewidth: 1,
                plottype: name.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVALow: {
                color: "",
                linestyle: params.LineStyle.Solid,
                linewidth: 1,
                plottype: name.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              }
            }
          },
          graphics: {
            hhists: {
              histBars2: {
                location: config.HHistLocation.Absolute,
                title: "Volume Profile",
                titles: ["Up Volume", "Down Volume"]
              },
              histBarsVA: {
                location: config.HHistLocation.Absolute,
                title: "Value Area",
                titles: ["Value Area Up", "Value Area Down"]
              }
            },
            horizlines: {
              pocLines: {
                name: "POC",
                showPrice: !0
              }
            },
            polygons: {
              histBoxBg: {
                mouseTouchable: !1,
                name: "Histogram Box",
                showBorder: !1
              }
            }
          },
          inputs: [{
            defval: "Number Of Rows",
            id: "rowsLayout",
            name: "Rows Layout",
            options: ["Number Of Rows", "Ticks Per Row"],
            type: "text"
          }, {
            defval: 24,
            id: "rows",
            max: 1e6,
            min: 1,
            name: "Row Size",
            type: "integer"
          }, {
            defval: "Up/Down",
            id: "volume",
            name: "Volume",
            options: ["Up/Down", "Total", "Delta"],
            type: "text"
          }, {
            defval: 0,
            id: "first_bar_time",
            isHidden: !0,
            max: 253370764800,
            min: -253370764800,
            name: "First Bar Time",
            type: "time"
          }, {
            defval: 0,
            id: "last_bar_time",
            isHidden: !0,
            max: 253370764800,
            min: -253370764800,
            name: "Last Bar Time",
            type: "time"
          }, {
            defval: 70,
            id: "vaVolume",
            max: 100,
            min: 0,
            name: "Value Area Volume",
            type: "integer"
          }, {
            defval: !0,
            id: "subscribeRealtime",
            isHidden: !0,
            name: "SubscribeRealtime",
            type: "bool"
          }],
          plots: [{
            id: "developingPoc",
            type: "line"
          }, {
            id: "developingVAHigh",
            type: "line"
          }, {
            id: "developingVALow",
            type: "line"
          }],
          styles: {
            developingPoc: {
              histogramBase: 0,
              title: "Developing Poc"
            },
            developingVAHigh: {
              histogramBase: 0,
              title: "Developing VA High"
            },
            developingVALow: {
              histogramBase: 0,
              title: "Developing VA Low"
            }
          },
          ...exports
        }
      }
    }
    const bool = S({
        id: "VbPFixed@tv-volumebyprice-57",
        description: "Volume Profile Fixed Range"
      }),
      width = S({
        id: "VbPFixed@tv-basicstudies-152",
        description: "Fixed Range",
        is_hidden_study: !0
      })