/**
 * Module 53690 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

53690: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      volumeProfileVisibleRangeStudyItem: () => seriesBarFunction_y
    });
    var seriesBarFunction_s = seriesBarFunction_i(50151),
      seriesBarFunction_o = seriesBarFunction_i(13823),
      seriesBarFunction_n = seriesBarFunction_i(99481),
      seriesBarFunction_r = seriesBarFunction_i(46082),
      seriesBarFunction_a = seriesBarFunction_i(3186),
      seriesBarFunction_l = seriesBarFunction_i(96777),
      seriesBarFunction_c = seriesBarFunction_i(30376);
    class seriesBarFunction_h extends seriesBarFunction_l.VolumeByPriceExpr {
      constructor(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_o, seriesBarFunction_n, seriesBarFunction_r, seriesBarFunction_a, seriesBarFunction_l, seriesBarFunction_h, seriesBarFunction_d) {
        super(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_n, new seriesBarFunction_c.GraphicsList, seriesBarFunction_r, !0, seriesBarFunction_a, seriesBarFunction_l, (() => seriesBarFunction_h), seriesBarFunction_d, seriesBarFunction_s, seriesBarFunction_o, !1), this._firstBarTime = seriesBarFunction_s, this
          ._lastBarTime = seriesBarFunction_o
      }
      update(seriesBarFunction_e) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(seriesBarFunction_e) && super.update(seriesBarFunction_e)
      }
      timeInRequestedRange(seriesBarFunction_e) {
        const seriesBarFunction_t = this._timeScale().get(seriesBarFunction_e);
        return this._firstBarTime <= seriesBarFunction_t && seriesBarFunction_t < this._lastBarTime
      }
    }
    var seriesBarFunction_d = seriesBarFunction_i(45591),
      seriesBarFunction_u = seriesBarFunction_i(75719),
      _ = seriesBarFunction_i(13421),
      seriesBarFunction_p = seriesBarFunction_i(60755),
      seriesBarFunction_m = seriesBarFunction_i(28056),
      seriesBarFunction_g = seriesBarFunction_i(19979);
    class seriesBarFunction_f extends seriesBarFunction_o.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this
          ._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this
          ._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(seriesBarFunction_e, seriesBarFunction_t) {
        this._eraseCmds.push(new seriesBarFunction_u.EraseObj(seriesBarFunction_e, seriesBarFunction_t))
      }
      popEraseCmds() {
        const seriesBarFunction_e = this._eraseCmds;
        return this._eraseCmds = [], seriesBarFunction_e
      }
      init(seriesBarFunction_e, seriesBarFunction_t) {
        this._studyDataUpdate = new _.JStudyDataUpdate(!0), this._hists = new seriesBarFunction_a.GraphicsListColl, this._pocLines =
          new seriesBarFunction_c.GraphicsList, this._valueAreaHists = new seriesBarFunction_a.GraphicsListColl;
        const seriesBarFunction_i = new seriesBarFunction_d.StudyGraphicsData;
        seriesBarFunction_i.getObjsContainer("hhists").push(new seriesBarFunction_d.Container("histBars2", this._hists)),
          seriesBarFunction_i.getObjsContainer("hhists").push(new seriesBarFunction_d.Container("histBarsVA", this._valueAreaHists)), seriesBarFunction_i
          .getObjsContainer("horizlines").push(new seriesBarFunction_d.Container("pocLines", this._pocLines)), this._studyDataUpdate
          .init(seriesBarFunction_i), this._rowsLayout = seriesBarFunction_t(0), this._rowSize = seriesBarFunction_t(1), this._volume = seriesBarFunction_t(2), this._firstBarTime = seriesBarFunction_t(3),
          this._lastBarTime = seriesBarFunction_t(4), this._vaVolumePercent = seriesBarFunction_t(5), this.verifyRowSizeInput(this._rowSize, this
            ._rowsLayout), this._originalResolution = seriesBarFunction_r.Interval.parse(seriesBarFunction_e.symbol.interval + seriesBarFunction_e.symbol.resolution);
        const seriesBarFunction_n = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution :
          this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, seriesBarFunction_n,
            (0, seriesBarFunction_s.ensureDefined)(seriesBarFunction_e.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(
            this._basicResolution), this._hasSecondarySymbol && seriesBarFunction_e.new_sym(seriesBarFunction_e.symbol.tickerid, this._basicResolution
            .value());
        const seriesBarFunction_l = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new seriesBarFunction_p.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new seriesBarFunction_h((0, seriesBarFunction_o
              .numOfSubHists)(this._volume), seriesBarFunction_e, this, this._firstBarTime, seriesBarFunction_n, this._hists, this._pocLines, this
            ._valueAreaHists, this._vaVolumePercent, seriesBarFunction_l, (0, seriesBarFunction_o.maxHHistItems)()), this._volumeByPriceExpr
          .setIdsGeneratorProxy(this), this._developingPocSeries = new seriesBarFunction_m.VolumeProfileOutputSeries, this
          ._developingVAHighSeries = new seriesBarFunction_m.VolumeProfileOutputSeries, this._developingVALowSeries = new seriesBarFunction_m
          .VolumeProfileOutputSeries
      }
      main(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
        this._hasSecondarySymbol && seriesBarFunction_e.select_sym(1), this._timeSeries = seriesBarFunction_e.new_unlimited_var(), this._openSeries = seriesBarFunction_e
          .new_unlimited_var(), this._highSeries = seriesBarFunction_e.new_unlimited_var(), this._lowSeries = seriesBarFunction_e.new_unlimited_var(),
          this._closeSeries = seriesBarFunction_e.new_unlimited_var(), this._volumeSeries = seriesBarFunction_e.new_unlimited_var();
        const seriesBarFunction_o = {
          type: "composite",
          data: []
        };
        if (seriesBarFunction_i && seriesBarFunction_i.period === this._basicResolution.value() && (this._timeSeries.set(seriesBarFunction_g.Std.time(seriesBarFunction_e)), this
            ._openSeries.set(seriesBarFunction_g.Std.open(seriesBarFunction_e)), this._highSeries.set(seriesBarFunction_g.Std.high(seriesBarFunction_e)), this._lowSeries.set(seriesBarFunction_g.Std.low(seriesBarFunction_e)),
            this._closeSeries.set(seriesBarFunction_g.Std.close(seriesBarFunction_e)), this._volumeSeries.set(seriesBarFunction_g.Std.volume(seriesBarFunction_e)), seriesBarFunction_e.symbol.isFirstBar && seriesBarFunction_e
            .symbol.isLastBar || (this._developingPocSeries.addHist(seriesBarFunction_g.Std.time(seriesBarFunction_e)), this._developingVAHighSeries
              .addHist(seriesBarFunction_g.Std.time(seriesBarFunction_e)), this._developingVALowSeries.addHist(seriesBarFunction_g.Std.time(seriesBarFunction_e))), this
            ._vbPCheckHaveVolumeExpr.update(0, seriesBarFunction_e.symbol.isLastBar), this._volumeByPriceExpr.update(0), this
            ._developingPocSeries.removeLastIfNaN(), this._developingVAHighSeries.removeLastIfNaN(), this
            ._developingVALowSeries.removeLastIfNaN(), seriesBarFunction_e.symbol.isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const seriesBarFunction_e = this._studyDataUpdate.getUpdate();
          seriesBarFunction_e.json && seriesBarFunction_o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: seriesBarFunction_e.json
          }), seriesBarFunction_e.jsonUpdate && seriesBarFunction_o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: seriesBarFunction_e.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && seriesBarFunction_e.select_sym(0), seriesBarFunction_i && seriesBarFunction_i.period === this._originalResolution.value()) {
          (0, seriesBarFunction_s.assert)(seriesBarFunction_e.symbol.time === seriesBarFunction_i.time);
          const seriesBarFunction_t = seriesBarFunction_i.time,
            seriesBarFunction_n = seriesBarFunction_t + this._originalResolution.inMilliseconds(seriesBarFunction_t) - 1;
          if (seriesBarFunction_t && seriesBarFunction_t >= this._firstBarTime) {
            const seriesBarFunction_e = this._developingPocSeries.getLeftOrEqual(seriesBarFunction_n),
              seriesBarFunction_t = this._developingVAHighSeries.getLeftOrEqual(seriesBarFunction_n),
              seriesBarFunction_i = this._developingVALowSeries.getLeftOrEqual(seriesBarFunction_n);
            seriesBarFunction_o.data.push([seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i])
          } else seriesBarFunction_o.data.push([NaN, NaN, NaN])
        }
        return seriesBarFunction_o
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
              location: seriesBarFunction_n.HHistLocation.Relative,
              title: "Volume Profile",
              titles: ["Up Volume", "Down Volume"]
            },
            histBarsVA: {
              location: seriesBarFunction_n.HHistLocation.Relative,
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
                direction: seriesBarFunction_n.HHistDirection.RightToLeft,
                percentWidth: 30,
                showValues: !1,
                transparencies: [76, 76],
                valuesColor: "",
                visible: !0
              },
              histBarsVA: {
                colors: ["", ""],
                direction: seriesBarFunction_n.HHistDirection.RightToLeft,
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