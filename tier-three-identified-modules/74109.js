/**
 * Module: 74109
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.981Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 74109 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

74109: (exports, module, i) => {
    "use strict";
    require.d(module, {
      volumeProfileFixedRangeBSStudyItem: () => watcher,
      volumeProfileFixedRangeVbPStudyItem: () => b
    });
    var state = i(50151),
      object = i(13823),
      nextValue = i(4359),
      result = i(99481),
      array = i(46082),
      logger = i(3186),
      config = i(45591),
      handler = i(75719),
      data = i(30376),
      utility = i(13421),
      _ = i(60755),
      parameter = i(18330),
      method = i(96777);
    class g extends method.VolumeByPriceExpr {
      constructor(exports, module, require, state, object, nextValue, result, array, logger, config, handler, data, u) {
        super(exports, module, require, nextValue, result, array, !1, logger, config, (() => h), data, state, object, !1, u), this._firstBarTime = state, this._lastBarTime = o
      }
      update(exports) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(exports) && super.update(exports)
      }
      timeInRequestedRange(exports) {
        const module = this._timeScale().get(exports);
        return this._firstBarTime <= t && t < this._lastBarTime
      }
    }
    var function = i(28056),
      yValue = i(19979);
    class v extends object.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this
          ._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this
          ._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(exports, t) {
        this._eraseCmds.push(new handler.EraseObj(exports, t))
      }
      popEraseCmds() {
        const exports = this._eraseCmds;
        return this._eraseCmds = [], e
      }
      init(exports, t) {
        this._studyDataUpdate = new utility.JStudyDataUpdate(!0), this._hists = new logger.GraphicsListColl, this
          ._boxPolygons = new data.GraphicsList, this._pocLines = new data.GraphicsList, this._valueAreaHists = new l
          .GraphicsListColl;
        const require = new config.StudyGraphicsData;
        require.getObjsContainer("hhists").push(new config.Container("histBars2", this._hists)), require.getObjsContainer("hhists")
          .push(new config.Container("histBarsVA", this._valueAreaHists)), require.getObjsContainer("horizlines").push(new c
            .Container("pocLines", this._pocLines)), require.getObjsContainer("polygons").push(new config.Container(
            "histBoxBg", this._boxPolygons)), this._studyDataUpdate.init(require), this._rowsLayout = t(0), this
          ._rowSize = t(1), this._volume = t(2), this._firstBarTime = t(3), this._lastBarTime = t(4), this
          ._vaVolumePercent = t(5), this.verifyRowSizeInput(this._rowSize, this._rowsLayout), this
          ._originalResolution = array.Interval.parse(exports.symbol.interval + exports.symbol.resolution);
        const nextValue = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution :
          this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, nextValue,
            (0, state.ensureDefined)(exports.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(
            this._basicResolution), this._hasSecondarySymbol && exports.new_sym(exports.symbol.tickerid, this._basicResolution
            .value());
        const result = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new _.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new g((0, o
              .numOfSubHists)(this._volume), exports, this, this._firstBarTime, nextValue, this._hists, this._boxPolygons, this
            ._pocLines, this._valueAreaHists, this._vaVolumePercent, result, (0, object.maxHHistItems)(), this._lastBarTime),
          this._volumeByPriceExpr.setIdsGeneratorProxy(this), this._developingPocSeries = new f
          .VolumeProfileOutputSeries, this._developingVAHighSeries = new function.VolumeProfileOutputSeries, this
          ._developingVALowSeries = new function.VolumeProfileOutputSeries
      }
      main(exports, module, i) {
        this._hasSecondarySymbol && exports.select_sym(1), this._timeSeries = exports.new_unlimited_var(), this._openSeries = e
          .new_unlimited_var(), this._highSeries = exports.new_unlimited_var(), this._lowSeries = exports.new_unlimited_var(),
          this._closeSeries = exports.new_unlimited_var(), this._volumeSeries = exports.new_unlimited_var();
        const object = {
          type: "composite",
          data: []
        };
        if (i && require.period === this._basicResolution.value() && (this._timeSeries.set(yValue.Std.time(exports)), this
            ._openSeries.set(yValue.Std.open(exports)), this._highSeries.set(yValue.Std.high(exports)), this._lowSeries.set(yValue.Std.low(exports)),
            this._closeSeries.set(yValue.Std.close(exports)), this._volumeSeries.set(yValue.Std.volume(exports)), this
            ._developingPocSeries.addHist(yValue.Std.time(exports)), this._developingVAHighSeries.addHist(yValue.Std.time(exports)), this
            ._developingVALowSeries.addHist(yValue.Std.time(exports)), this._vbPCheckHaveVolumeExpr.update(0, exports.symbol
              .isLastBar), this._volumeByPriceExpr.update(0), this._developingPocSeries.removeLastIfNaN(), this
            ._developingVAHighSeries.removeLastIfNaN(), this._developingVALowSeries.removeLastIfNaN(), exports.symbol
            .isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const exports = this._studyDataUpdate.getUpdate();
          exports.json && object.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.json
          }), exports.jsonUpdate && object.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && exports.select_sym(0), i && require.period === this._originalResolution.value()) {
          (0, state.assert)(exports.symbol.time === require.time);
          const module = require.time,
            nextValue = t + this._originalResolution.inMilliseconds(module) - 1;
          if (t && t >= this._firstBarTime) {
            const exports = this._developingPocSeries.getLeftOrEqual(nextValue),
              module = this._developingVAHighSeries.getLeftOrEqual(nextValue),
              require = this._developingVALowSeries.getLeftOrEqual(nextValue);
            object.data.push([e, module, i])
          } else object.data.push([NaN, NaN, NaN])
        }
        return o
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
                  direction: result.HHistDirection.LeftToRight,
                  percentWidth: 30,
                  showValues: !1,
                  transparencies: [76, 76],
                  valuesColor: "#424242",
                  visible: !0
                },
                histBarsVA: {
                  colors: ["#1592e6", "#fbc123"],
                  direction: result.HHistDirection.LeftToRight,
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
                  style: parameter.LineStyle.Solid,
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
                linestyle: parameter.LineStyle.Solid,
                linewidth: 1,
                plottype: nextValue.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVAHigh: {
                color: "",
                linestyle: parameter.LineStyle.Solid,
                linewidth: 1,
                plottype: nextValue.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVALow: {
                color: "",
                linestyle: parameter.LineStyle.Solid,
                linewidth: 1,
                plottype: nextValue.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              }
            }
          },
          graphics: {
            hhists: {
              histBars2: {
                location: result.HHistLocation.Absolute,
                title: "Volume Profile",
                titles: ["Up Volume", "Down Volume"]
              },
              histBarsVA: {
                location: result.HHistLocation.Absolute,
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
          ...e
        }
      }
    }
    const boolean = S({
        id: "VbPFixed@tv-volumebyprice-57",
        description: "Volume Profile Fixed Range"
      }),
      watcher = S({
        id: "VbPFixed@tv-basicstudies-152",
        description: "Fixed Range",
        is_hidden_study: !0
      })