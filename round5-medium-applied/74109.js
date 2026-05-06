/**
 * Module 74109 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

74109: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      volumeProfileFixedRangeBSStudyItem: () => w,
      volumeProfileFixedRangeVbPStudyItem: () => b
    });
    var watchedValue_s = i(50151),
      o = i(13823),
      watchedValue_n = i(4359),
      r = i(99481),
      watchedValue_a = i(46082),
      l = i(3186),
      c = i(45591),
      h = i(75719),
      d = i(30376),
      u = i(13421),
      _ = i(60755),
      p = i(18330),
      m = i(96777);
    class g extends m.VolumeByPriceExpr {
      constructor(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n, r, watchedValue_a, l, c, h, d, u) {
        super(watchedValue_e, watchedValue_t, i, watchedValue_n, r, watchedValue_a, !1, l, c, (() => h), d, watchedValue_s, o, !1, u), this._firstBarTime = watchedValue_s, this._lastBarTime = o
      }
      update(watchedValue_e) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(watchedValue_e) && super.update(watchedValue_e)
      }
      timeInRequestedRange(watchedValue_e) {
        const watchedValue_t = this._timeScale().get(watchedValue_e);
        return this._firstBarTime <= watchedValue_t && watchedValue_t < this._lastBarTime
      }
    }
    var f = i(28056),
      y = i(19979);
    class v extends o.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this
          ._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this
          ._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(watchedValue_e, watchedValue_t) {
        this._eraseCmds.push(new h.EraseObj(watchedValue_e, watchedValue_t))
      }
      popEraseCmds() {
        const watchedValue_e = this._eraseCmds;
        return this._eraseCmds = [], watchedValue_e
      }
      init(watchedValue_e, watchedValue_t) {
        this._studyDataUpdate = new u.JStudyDataUpdate(!0), this._hists = new l.GraphicsListColl, this
          ._boxPolygons = new d.GraphicsList, this._pocLines = new d.GraphicsList, this._valueAreaHists = new l
          .GraphicsListColl;
        const i = new c.StudyGraphicsData;
        i.getObjsContainer("hhists").push(new c.Container("histBars2", this._hists)), i.getObjsContainer("hhists")
          .push(new c.Container("histBarsVA", this._valueAreaHists)), i.getObjsContainer("horizlines").push(new c
            .Container("pocLines", this._pocLines)), i.getObjsContainer("polygons").push(new c.Container(
            "histBoxBg", this._boxPolygons)), this._studyDataUpdate.init(i), this._rowsLayout = watchedValue_t(0), this
          ._rowSize = watchedValue_t(1), this._volume = watchedValue_t(2), this._firstBarTime = watchedValue_t(3), this._lastBarTime = watchedValue_t(4), this
          ._vaVolumePercent = watchedValue_t(5), this.verifyRowSizeInput(this._rowSize, this._rowsLayout), this
          ._originalResolution = watchedValue_a.Interval.parse(watchedValue_e.symbol.interval + watchedValue_e.symbol.resolution);
        const watchedValue_n = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution :
          this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, watchedValue_n,
            (0, watchedValue_s.ensureDefined)(watchedValue_e.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(
            this._basicResolution), this._hasSecondarySymbol && watchedValue_e.new_sym(watchedValue_e.symbol.tickerid, this._basicResolution
            .value());
        const r = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new _.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new g((0, o
              .numOfSubHists)(this._volume), watchedValue_e, this, this._firstBarTime, watchedValue_n, this._hists, this._boxPolygons, this
            ._pocLines, this._valueAreaHists, this._vaVolumePercent, r, (0, o.maxHHistItems)(), this._lastBarTime),
          this._volumeByPriceExpr.setIdsGeneratorProxy(this), this._developingPocSeries = new f
          .VolumeProfileOutputSeries, this._developingVAHighSeries = new f.VolumeProfileOutputSeries, this
          ._developingVALowSeries = new f.VolumeProfileOutputSeries
      }
      main(watchedValue_e, watchedValue_t, i) {
        this._hasSecondarySymbol && watchedValue_e.select_sym(1), this._timeSeries = watchedValue_e.new_unlimited_var(), this._openSeries = watchedValue_e
          .new_unlimited_var(), this._highSeries = watchedValue_e.new_unlimited_var(), this._lowSeries = watchedValue_e.new_unlimited_var(),
          this._closeSeries = watchedValue_e.new_unlimited_var(), this._volumeSeries = watchedValue_e.new_unlimited_var();
        const o = {
          type: "composite",
          data: []
        };
        if (i && i.period === this._basicResolution.value() && (this._timeSeries.set(y.Std.time(watchedValue_e)), this
            ._openSeries.set(y.Std.open(watchedValue_e)), this._highSeries.set(y.Std.high(watchedValue_e)), this._lowSeries.set(y.Std.low(watchedValue_e)),
            this._closeSeries.set(y.Std.close(watchedValue_e)), this._volumeSeries.set(y.Std.volume(watchedValue_e)), this
            ._developingPocSeries.addHist(y.Std.time(watchedValue_e)), this._developingVAHighSeries.addHist(y.Std.time(watchedValue_e)), this
            ._developingVALowSeries.addHist(y.Std.time(watchedValue_e)), this._vbPCheckHaveVolumeExpr.update(0, watchedValue_e.symbol
              .isLastBar), this._volumeByPriceExpr.update(0), this._developingPocSeries.removeLastIfNaN(), this
            ._developingVAHighSeries.removeLastIfNaN(), this._developingVALowSeries.removeLastIfNaN(), watchedValue_e.symbol
            .isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const watchedValue_e = this._studyDataUpdate.getUpdate();
          watchedValue_e.json && o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: watchedValue_e.json
          }), watchedValue_e.jsonUpdate && o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: watchedValue_e.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && watchedValue_e.select_sym(0), i && i.period === this._originalResolution.value()) {
          (0, watchedValue_s.assert)(watchedValue_e.symbol.time === i.time);
          const watchedValue_t = i.time,
            watchedValue_n = watchedValue_t + this._originalResolution.inMilliseconds(watchedValue_t) - 1;
          if (watchedValue_t && watchedValue_t >= this._firstBarTime) {
            const watchedValue_e = this._developingPocSeries.getLeftOrEqual(watchedValue_n),
              watchedValue_t = this._developingVAHighSeries.getLeftOrEqual(watchedValue_n),
              i = this._developingVALowSeries.getLeftOrEqual(watchedValue_n);
            o.data.push([watchedValue_e, watchedValue_t, i])
          } else o.data.push([NaN, NaN, NaN])
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

    function S(watchedValue_e) {
      return {
        constructor: v,
        name: watchedValue_e.description,
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
                  direction: r.HHistDirection.LeftToRight,
                  percentWidth: 30,
                  showValues: !1,
                  transparencies: [76, 76],
                  valuesColor: "#424242",
                  visible: !0
                },
                histBarsVA: {
                  colors: ["#1592e6", "#fbc123"],
                  direction: r.HHistDirection.LeftToRight,
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
                  style: p.LineStyle.Solid,
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
                linestyle: p.LineStyle.Solid,
                linewidth: 1,
                plottype: watchedValue_n.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVAHigh: {
                color: "",
                linestyle: p.LineStyle.Solid,
                linewidth: 1,
                plottype: watchedValue_n.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVALow: {
                color: "",
                linestyle: p.LineStyle.Solid,
                linewidth: 1,
                plottype: watchedValue_n.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              }
            }
          },
          graphics: {
            hhists: {
              histBars2: {
                location: r.HHistLocation.Absolute,
                title: "Volume Profile",
                titles: ["Up Volume", "Down Volume"]
              },
              histBarsVA: {
                location: r.HHistLocation.Absolute,
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
          ...watchedValue_e
        }
      }
    }
    const b = S({
        id: "VbPFixed@tv-volumebyprice-57",
        description: "Volume Profile Fixed Range"
      }),
      w = S({
        id: "VbPFixed@tv-basicstudies-152",
        description: "Fixed Range",
        is_hidden_study: !0
      })