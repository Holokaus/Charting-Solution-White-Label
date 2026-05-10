/**
 * Module 53690 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (15181 bytes) - comprehensive remediation applied
 */

53690: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      volumeProfileVisibleRangeStudyItem: () => seriesBarFunction_y
    });
    var modes = require(50151),
      isValid = require(13823),
      value = require(99481),
      config = require(46082),
      items = require(3186),
      length = require(96777),
      context = require(30376);
    class handler extends length.VolumeByPriceExpr {
      constructor(exports, module, require, modes, isValid, value, config, items, length, handler, seriesBarFunction_d) {
        super(exports, module, require, value, new context.GraphicsList, config, !0, items, length, (() => handler), seriesBarFunction_d, modes, isValid, !1), this._firstBarTime = modes, this
          ._lastBarTime = isValid
      }
      update(exports) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(exports) && super.update(exports)
      }
      timeInRequestedRange(exports) {
        const module = this._timeScale().get(exports);
        return this._firstBarTime <= module && module < this._lastBarTime
      }
    }
    var seriesBarFunction_d = require(45591),
      seriesBarFunction_u = require(75719),
      _ = require(13421),
      seriesBarFunction_p = require(60755),
      seriesBarFunction_m = require(28056),
      seriesBarFunction_g = require(19979);
    class seriesBarFunction_f extends isValid.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this
          ._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this
          ._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(exports, module) {
        this._eraseCmds.push(new seriesBarFunction_u.EraseObj(exports, module))
      }
      popEraseCmds() {
        const exports = this._eraseCmds;
        return this._eraseCmds = [], exports
      }
      init(exports, module) {
        this._studyDataUpdate = new _.JStudyDataUpdate(!0), this._hists = new items.GraphicsListColl, this._pocLines =
          new context.GraphicsList, this._valueAreaHists = new items.GraphicsListColl;
        const require = new seriesBarFunction_d.StudyGraphicsData;
        require.getObjsContainer("hhists").push(new seriesBarFunction_d.Container("histBars2", this._hists)),
          require.getObjsContainer("hhists").push(new seriesBarFunction_d.Container("histBarsVA", this._valueAreaHists)), require
          .getObjsContainer("horizlines").push(new seriesBarFunction_d.Container("pocLines", this._pocLines)), this._studyDataUpdate
          .init(require), this._rowsLayout = module(0), this._rowSize = module(1), this._volume = module(2), this._firstBarTime = module(3),
          this._lastBarTime = module(4), this._vaVolumePercent = module(5), this.verifyRowSizeInput(this._rowSize, this
            ._rowsLayout), this._originalResolution = config.Interval.parse(exports.symbol.interval + exports.symbol.resolution);
        const value = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution :
          this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, value,
            (0, modes.ensureDefined)(exports.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(
            this._basicResolution), this._hasSecondarySymbol && exports.new_sym(exports.symbol.tickerid, this._basicResolution
            .value());
        const length = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new seriesBarFunction_p.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new handler((0, isValid
              .numOfSubHists)(this._volume), exports, this, this._firstBarTime, value, this._hists, this._pocLines, this
            ._valueAreaHists, this._vaVolumePercent, length, (0, isValid.maxHHistItems)()), this._volumeByPriceExpr
          .setIdsGeneratorProxy(this), this._developingPocSeries = new seriesBarFunction_m.VolumeProfileOutputSeries, this
          ._developingVAHighSeries = new seriesBarFunction_m.VolumeProfileOutputSeries, this._developingVALowSeries = new seriesBarFunction_m
          .VolumeProfileOutputSeries
      }
      main(exports, module, require) {
        this._hasSecondarySymbol && exports.select_sym(1), this._timeSeries = exports.new_unlimited_var(), this._openSeries = exports
          .new_unlimited_var(), this._highSeries = exports.new_unlimited_var(), this._lowSeries = exports.new_unlimited_var(),
          this._closeSeries = exports.new_unlimited_var(), this._volumeSeries = exports.new_unlimited_var();
        const isValid = {
          type: "composite",
          data: []
        };
        if (require && require.period === this._basicResolution.value() && (this._timeSeries.set(seriesBarFunction_g.Std.time(exports)), this
            ._openSeries.set(seriesBarFunction_g.Std.open(exports)), this._highSeries.set(seriesBarFunction_g.Std.high(exports)), this._lowSeries.set(seriesBarFunction_g.Std.low(exports)),
            this._closeSeries.set(seriesBarFunction_g.Std.close(exports)), this._volumeSeries.set(seriesBarFunction_g.Std.volume(exports)), exports.symbol.isFirstBar && exports
            .symbol.isLastBar || (this._developingPocSeries.addHist(seriesBarFunction_g.Std.time(exports)), this._developingVAHighSeries
              .addHist(seriesBarFunction_g.Std.time(exports)), this._developingVALowSeries.addHist(seriesBarFunction_g.Std.time(exports))), this
            ._vbPCheckHaveVolumeExpr.update(0, exports.symbol.isLastBar), this._volumeByPriceExpr.update(0), this
            ._developingPocSeries.removeLastIfNaN(), this._developingVAHighSeries.removeLastIfNaN(), this
            ._developingVALowSeries.removeLastIfNaN(), exports.symbol.isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const exports = this._studyDataUpdate.getUpdate();
          exports.json && isValid.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.json
          }), exports.jsonUpdate && isValid.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: exports.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && exports.select_sym(0), require && require.period === this._originalResolution.value()) {
          (0, modes.assert)(exports.symbol.time === require.time);
          const module = require.time,
            value = module + this._originalResolution.inMilliseconds(module) - 1;
          if (module && module >= this._firstBarTime) {
            const exports = this._developingPocSeries.getLeftOrEqual(value),
              module = this._developingVAHighSeries.getLeftOrEqual(value),
              require = this._developingVALowSeries.getLeftOrEqual(value);
            isValid.data.push([exports, module, require])
          } else isValid.data.push([NaN, NaN, NaN])
        }
        return isValid
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
    const seriesBarFunction_y = {
      constructor: seriesBarFunction_f,
      name: "Volume Profile Visible Range",
      metainfo: {
        _metainfoVersion: 51,
        id: "VbPVisible@tv-basicstudies-49",
        description: "Volume Profile Visible Range",
        shortDescription: "VPVR",
        format: {
          type: "volume"
        },
        is_price_study: !0,
        linkedToSeries: !0,
        palettes: {},
        inputs: [{
          id: "rowsLayout",
          name: "Rows Layout",
          defval: "Number Of Rows",
          options: ["Number Of Rows", "Ticks Per Row"],
          type: "text"
        }, {
          id: "rows",
          name: "Row Size",
          defval: 24,
          max: 1e6,
          min: 1,
          type: "integer"
        }, {
          id: "volume",
          name: "Volume",
          defval: "Up/Down",
          options: ["Up/Down", "Total", "Delta"],
          type: "text"
        }, {
          id: "first_visible_bar_time",
          name: "First Visible Bar Time",
          defval: 0,
          isHidden: !0,
          max: 253370764800,
          min: -253370764800,
          type: "time"
        }, {
          id: "last_visible_bar_time",
          name: "Last Visible Bar Time",
          defval: 0,
          isHidden: !0,
          max: 253370764800,
          min: -253370764800,
          type: "time"
        }, {
          id: "vaVolume",
          name: "Value Area Volume",
          defval: 70,
          max: 100,
          min: 0,
          type: "integer"
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
        graphics: {
          hhists: {
            histBars2: {
              location: value.HHistLocation.Relative,
              title: "Volume Profile",
              titles: ["Up Volume", "Down Volume"]
            },
            histBarsVA: {
              location: value.HHistLocation.Relative,
              title: "Value Area",
              titles: ["Value Area Up", "Value Area Down"]
            }
          },
          horizlines: {
            pocLines: {
              name: "POC",
              showPrice: !0
            }
          }
        },
        defaults: {
          graphics: {
            hhists: {
              histBars2: {
                colors: ["", ""],
                direction: value.HHistDirection.RightToLeft,
                percentWidth: 30,
                showValues: !1,
                transparencies: [76, 76],
                valuesColor: "",
                visible: !0
              },
              histBarsVA: {
                colors: ["", ""],
                direction: value.HHistDirection.RightToLeft,
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
                style: 0,
                visible: !0,
                width: 2
              },
              vahLines: {
                color: "",
                style: 0,
                visible: !1,
                width: 2
              },
              valLines: {
                color: "",
                style: 0,
                visible: !1,
                width: 2
              }
            }
          },
          inputs: {
            first_visible_bar_time: 0,
            last_visible_bar_time: 0,
            rows: 24,
            rowsLayout: "Number Of Rows",
            vaVolume: 70,
            volume: "Up/Down"
          },
          styles: {
            developingPoc: {
              color: "",
              linestyle: 0,
              linewidth: 1,
              plottype: 9,
              trackPrice: !1,
              transparency: 0,
              display: 0
            },
            developingVAHigh: {
              color: "",
              linestyle: 0,
              linewidth: 1,
              plottype: 9,
              trackPrice: !1,
              transparency: 0,
              display: 0
            },
            developingVALow: {
              color: "",
              linestyle: 0,
              linewidth: 1,
              plottype: 9,
              trackPrice: !1,
              transparency: 0,
              display: 0
            }
          }
        },
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
        }
      }
    }