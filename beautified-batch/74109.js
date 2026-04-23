/**
 * Module 74109 - Auto-beautified from TradingView webpack bundle
 *
 * @module 74109
 * @date 2026-04-23
 * @size 7750 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3186, 4359, 13421, 13823, 18330, 19979, 28056, 30376, 45591, 46082, 50151, 60755, 75719, 96777, 99481
 *
 * Exports:
 *   - volumeProfileFixedRangeBSStudyItem (internal: w)
 *   - volumeProfileFixedRangeVbPStudyItem (internal: b)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

74109: (e, t, i) => {
    "use strict";
    i.d(t, {
      volumeProfileFixedRangeBSStudyItem: () => w,
      volumeProfileFixedRangeVbPStudyItem: () => b
    });
    var s = i(50151),
      o = i(13823),
      n = i(4359),
      r = i(99481),
      a = i(46082),
      l = i(3186),
      c = i(45591),
      h = i(75719),
      d = i(30376),
      u = i(13421),
      _ = i(60755),
      p = i(18330),
      m = i(96777);
    class g extends m.VolumeByPriceExpr {
      constructor(e, t, i, s, o, n, r, a, l, c, h, d, u) {
        super(e, t, i, n, r, a, !1, l, c, (() => h), d, s, o, !1, u), this._firstBarTime = s, this._lastBarTime = o
      }
      update(e) {
        this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(e) && super.update(e)
      }
      timeInRequestedRange(e) {
        const t = this._timeScale().get(e);
        return this._firstBarTime <= t && t < this._lastBarTime
      }
    }
    var f = i(28056),
      y = i(19979);
    class v extends o.VolumeProfileBase {
      constructor() {
        super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this._eraseCmds = []
      }
      nextGraphicsObjId() {
        return ++this._anInt
      }
      pushEraseObjCmd(e, t) {
        this._eraseCmds.push(new h.EraseObj(e, t))
      }
      popEraseCmds() {
        const e = this._eraseCmds;
        return this._eraseCmds = [], e
      }
      init(e, t) {
        this._studyDataUpdate = new u.JStudyDataUpdate(!0), this._hists = new l.GraphicsListColl, this._boxPolygons = new d.GraphicsList, this._pocLines = new d.GraphicsList, this._valueAreaHists = new l.GraphicsListColl;
        const i = new c.StudyGraphicsData;
        i.getObjsContainer("hhists").push(new c.Container("histBars2", this._hists)), i.getObjsContainer("hhists").push(new c.Container("histBarsVA", this._valueAreaHists)), i.getObjsContainer("horizlines").push(new c.Container("pocLines", this._pocLines)), i.getObjsContainer("polygons").push(new c.Container("histBoxBg", this._boxPolygons)), this._studyDataUpdate.init(i), this._rowsLayout = t(0), this._rowSize = t(1), this._volume = t(2), this._firstBarTime = t(3), this._lastBarTime = t(4), this._vaVolumePercent = t(5), this.verifyRowSizeInput(this._rowSize, this._rowsLayout), this._originalResolution = a.Interval.parse(e.symbol.interval + e.symbol.resolution);
        const n = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
        0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution : this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, n, (0, s.ensureDefined)(e.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(this._basicResolution), this._hasSecondarySymbol && e.new_sym(e.symbol.tickerid, this._basicResolution.value());
        const r = this._getRowsLayout(this._rowsLayout, this._rowSize);
        this._vbPCheckHaveVolumeExpr = new _.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new g((0, o.numOfSubHists)(this._volume), e, this, this._firstBarTime, n, this._hists, this._boxPolygons, this._pocLines, this._valueAreaHists, this._vaVolumePercent, r, (0, o.maxHHistItems)(), this._lastBarTime), this._volumeByPriceExpr.setIdsGeneratorProxy(this), this._developingPocSeries = new f.VolumeProfileOutputSeries, this._developingVAHighSeries = new f.VolumeProfileOutputSeries, this._developingVALowSeries = new f.VolumeProfileOutputSeries
      }
      main(e, t, i) {
        this._hasSecondarySymbol && e.select_sym(1), this._timeSeries = e.new_unlimited_var(), this._openSeries = e.new_unlimited_var(), this._highSeries = e.new_unlimited_var(), this._lowSeries = e.new_unlimited_var(), this._closeSeries = e.new_unlimited_var(), this._volumeSeries = e.new_unlimited_var();
        const o = {
          type: "composite",
          data: []
        };
        if (i && i.period === this._basicResolution.value() && (this._timeSeries.set(y.Std.time(e)), this._openSeries.set(y.Std.open(e)), this._highSeries.set(y.Std.high(e)), this._lowSeries.set(y.Std.low(e)), this._closeSeries.set(y.Std.close(e)), this._volumeSeries.set(y.Std.volume(e)), this._developingPocSeries.addHist(y.Std.time(e)), this._developingVAHighSeries.addHist(y.Std.time(e)), this._developingVALowSeries.addHist(y.Std.time(e)), this._vbPCheckHaveVolumeExpr.update(0, e.symbol.isLastBar), this._volumeByPriceExpr.update(0), this._developingPocSeries.removeLastIfNaN(), this._developingVAHighSeries.removeLastIfNaN(), this._developingVALowSeries.removeLastIfNaN(), e.symbol.isLastBar)) {
          this._studyDataUpdate.setEraseCmds(this.popEraseCmds()), this._studyDataUpdate.update();
          const e = this._studyDataUpdate.getUpdate();
          e.json && o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: e.json
          }), e.jsonUpdate && o.data.push({
            nonseries: !0,
            type: "study_graphics",
            data: e.jsonUpdate
          })
        }
        if (this._hasSecondarySymbol && e.select_sym(0), i && i.period === this._originalResolution.value()) {
          (0, s.assert)(e.symbol.time === i.time);
          const t = i.time,
            n = t + this._originalResolution.inMilliseconds(t) - 1;
          if (t && t >= this._firstBarTime) {
            const e = this._developingPocSeries.getLeftOrEqual(n),
              t = this._developingVAHighSeries.getLeftOrEqual(n),
              i = this._developingVALowSeries.getLeftOrEqual(n);
            o.data.push([e, t, i])
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

    function S(e) {
      return {
        constructor: v,
        name: e.description,
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
                plottype: n.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVAHigh: {
                color: "",
                linestyle: p.LineStyle.Solid,
                linewidth: 1,
                plottype: n.LineStudyPlotStyle.StepLine,
                trackPrice: !1,
                transparency: 0,
                display: 0
              },
              developingVALow: {
                color: "",
                linestyle: p.LineStyle.Solid,
                linewidth: 1,
                plottype: n.LineStudyPlotStyle.StepLine,
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
          ...e
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
