/**
 * Module 53690 - Auto-beautified from TradingView webpack bundle
 *
 * @module 53690
 * @date 2026-04-23
 * @size 7261 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3186, 13421, 13823, 19979, 28056, 30376, 45591, 46082, 50151, 60755, 75719, 96777, 99481
 *
 * Exports:
 *   - volumeProfileVisibleRangeStudyItem (internal: y)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  volumeProfileVisibleRangeStudyItem: () => y
});
var s = i(50151),
  o = i(13823),
  n = i(99481),
  r = i(46082),
  a = i(3186),
  l = i(96777),
  c = i(30376);
class h extends l.VolumeByPriceExpr {
  constructor(e, t, i, s, o, n, r, a, l, h, d) {
    super(e, t, i, n, new c.GraphicsList, r, !0, a, l, (() => h), d, s, o, !1), this._firstBarTime = s, this._lastBarTime = o
  }
  update(e) {
    this._supplyRowsLayout(this._ctx), this.timeInRequestedRange(e) && super.update(e)
  }
  timeInRequestedRange(e) {
    const t = this._timeScale().get(e);
    return this._firstBarTime <= t && t < this._lastBarTime
  }
}
var d = i(45591),
  u = i(75719),
  _ = i(13421),
  p = i(60755),
  m = i(28056),
  g = i(19979);
class f extends o.VolumeProfileBase {
  constructor() {
    super(...arguments), this._rowsLayout = "Number Of Rows", this._rowSize = 24, this._volume = "Up/Down", this._firstBarTime = 0, this._lastBarTime = 0, this._vaVolumePercent = 70, this._anInt = 0, this._eraseCmds = []
  }
  nextGraphicsObjId() {
    return ++this._anInt
  }
  pushEraseObjCmd(e, t) {
    this._eraseCmds.push(new u.EraseObj(e, t))
  }
  popEraseCmds() {
    const e = this._eraseCmds;
    return this._eraseCmds = [], e
  }
  init(e, t) {
    this._studyDataUpdate = new _.JStudyDataUpdate(!0), this._hists = new a.GraphicsListColl, this._pocLines = new c.GraphicsList, this._valueAreaHists = new a.GraphicsListColl;
    const i = new d.StudyGraphicsData;
    i.getObjsContainer("hhists").push(new d.Container("histBars2", this._hists)),
      i.getObjsContainer("hhists").push(new d.Container("histBarsVA", this._valueAreaHists)), i.getObjsContainer("horizlines").push(new d.Container("pocLines", this._pocLines)), this._studyDataUpdate.init(i), this._rowsLayout = t(0), this._rowSize = t(1), this._volume = t(2), this._firstBarTime = t(3), this._lastBarTime = t(4), this._vaVolumePercent = t(5), this.verifyRowSizeInput(this._rowSize, this._rowsLayout), this._originalResolution = r.Interval.parse(e.symbol.interval + e.symbol.resolution);
    const n = this._lastBarTime + this._originalResolution.inMilliseconds(this._lastBarTime);
    0 === this._firstBarTime && 0 === this._lastBarTime ? this._basicResolution = this._originalResolution : this._basicResolution = this.findBasicResolutionForFromTo(this._originalResolution, this._firstBarTime, n, (0, s.ensureDefined)(e.symbol.info)), this._hasSecondarySymbol = !this._originalResolution.isEqualTo(this._basicResolution), this._hasSecondarySymbol && e.new_sym(e.symbol.tickerid, this._basicResolution.value());
    const l = this._getRowsLayout(this._rowsLayout, this._rowSize);
    this._vbPCheckHaveVolumeExpr = new p.VbPCheckHaveVolumeExpr(this), this._volumeByPriceExpr = new h((0, o.numOfSubHists)(this._volume), e, this, this._firstBarTime, n, this._hists, this._pocLines, this._valueAreaHists, this._vaVolumePercent, l, (0, o.maxHHistItems)()), this._volumeByPriceExpr.setIdsGeneratorProxy(this), this._developingPocSeries = new m.VolumeProfileOutputSeries, this._developingVAHighSeries = new m.VolumeProfileOutputSeries, this._developingVALowSeries = new m.VolumeProfileOutputSeries
  }
  main(e, t, i) {
    this._hasSecondarySymbol && e.select_sym(1), this._timeSeries = e.new_unlimited_var(), this._openSeries = e.new_unlimited_var(), this._highSeries = e.new_unlimited_var(), this._lowSeries = e.new_unlimited_var(), this._closeSeries = e.new_unlimited_var(), this._volumeSeries = e.new_unlimited_var();
    const o = {
      type: "composite",
      data: []
    };
    if (i && i.period === this._basicResolution.value() && (this._timeSeries.set(g.Std.time(e)), this._openSeries.set(g.Std.open(e)), this._highSeries.set(g.Std.high(e)), this._lowSeries.set(g.Std.low(e)), this._closeSeries.set(g.Std.close(e)), this._volumeSeries.set(g.Std.volume(e)), e.symbol.isFirstBar && e.symbol.isLastBar || (this._developingPocSeries.addHist(g.Std.time(e)), this._developingVAHighSeries.addHist(g.Std.time(e)), this._developingVALowSeries.addHist(g.Std.time(e))), this._vbPCheckHaveVolumeExpr.update(0, e.symbol.isLastBar), this._volumeByPriceExpr.update(0), this._developingPocSeries.removeLastIfNaN(), this._developingVAHighSeries.removeLastIfNaN(), this._developingVALowSeries.removeLastIfNaN(), e.symbol.isLastBar)) {
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
const y = {
    constructor: f,
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
            location: n.HHistLocation.Relative,
            title: "Volume Profile",
            titles: ["Up Volume", "Down Volume"]
          },
          histBarsVA: {
            location: n.HHistLocation.Relative,
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
              direction: n.HHistDirection.RightToLeft,
              percentWidth: 30,
              showValues: !1,
              transparencies: [76, 76],
              valuesColor: "",
              visible: !0
            },
            histBarsVA: {
              colors: ["", ""],
              direction: n.HHistDirection.RightToLeft,
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
