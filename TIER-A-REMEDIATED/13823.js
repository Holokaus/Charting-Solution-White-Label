/**
 * Module 13823 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13823: (logger_e, t, i) => {
    "use strict";
    i.d(t, {
      VolumeProfileBase: () => p,
      maxHHistItems: () => u,
      numOfSubHists: () => _
    });
    var logger_s, o = i(37103),
      logger_n = i(46082);
    ! function(logger_e) {
      logger_e[logger_e.NumberOfRows = 0] = "NumberOfRows", logger_e[logger_e.TicksPerRow = 1] = "TicksPerRow"
    }(logger_s || (logger_s = {}));
    class r {
      constructor(logger_e, t) {
        this._minTick = NaN, this._minPrice = NaN, this._maxPrice = NaN, this._low = NaN, this._high = NaN, this
          ._startPrice = NaN, this._indexLowVbP = NaN, this._indexHighVbP = NaN, this._rowSize = logger_e, this._type = t
      }
      init(logger_e, t, i, logger_s, o) {
        this._minTick = logger_e, this._minPrice = t, this._maxPrice = i, this._low = logger_s, this._high = o
      }
      getStartPrice() {
        return this._startPrice
      }
      setStartPrice(logger_e) {
        this._startPrice = logger_e
      }
      getIndexLowVbP() {
        return this._indexLowVbP
      }
      setIndexLowVbP(logger_e) {
        this._indexLowVbP = logger_e
      }
      getIndexHighVbP() {
        return this._indexHighVbP
      }
      setIndexHighVbP(logger_e) {
        this._indexHighVbP = logger_e
      }
      type() {
        return this._type
      }
    }
    class a extends r {
      constructor(logger_e) {
        super(logger_e, 0)
      }
      calculate() {
        this.setStartPrice(this._minPrice);
        const logger_e = this.rowWidth();
        let t = Math.floor((this._low - this._minPrice) / logger_e),
          i = Math.ceil((this._high - this._minPrice) / logger_e) - 1;
        t = Math.max(t, 0), i = Math.max(i, 0), i = Math.min(i, this._rowSize - 1), t = Math.min(t, i), this
          .setIndexLowVbP(t), this.setIndexHighVbP(i)
      }
      rowWidth() {
        return Math.max((this._maxPrice - this._minPrice) / this._rowSize, this._minTick)
      }
    }
    class l extends r {
      constructor(logger_e) {
        super(logger_e, 1)
      }
      calculate() {
        this.setStartPrice(0);
        const logger_e = this.rowWidth();
        let t = Math.floor(this._low / logger_e);
        const i = Math.ceil(this._high / logger_e) - 1;
        t = Math.min(t, i), this.setIndexLowVbP(t), this.setIndexHighVbP(i)
      }
      rowWidth() {
        return this._minTick * this._rowSize
      }
    }
    var c, h = i(19979),
      d = i(47132);

    function u() {
      return 6e3
    }

    function _(logger_e) {
      switch (logger_e) {
        case "Delta":
        case "Up/Down":
          return 2;
        case "Total":
          return 1;
        default:
          h.Std.error(`Invalid study argument value: ${logger_e}`)
      }
    }! function(logger_e) {
      logger_e.VolumeUpDown = "Up/Down", logger_e.VolumeTotal = "Total", logger_e.VolumeDelta = "Delta", logger_e.NumberOfRows = "Number Of Rows", logger_e
        .TicksPerRow = "Ticks Per Row"
    }(c || (c = {}));
    class p {
      findBasicResolutionForFromTo(logger_e, t, i, logger_s) {
        const r = (0, d.getVolumeProfileResolutionForPeriod)(logger_e.value(), t, i, logger_s),
          a = logger_n.Interval.parse(r);
        return o.enabled("charting_library_debug_mode") && console.log(
          `${(new Date).toISOString()} Selected resolution ${a.value()} for (${logger_e.value()}, ${t}, ${i})`), a
      }
      verifyRowSizeInput(logger_e, t) {
        "Number Of Rows" === t && logger_e > 6e3 && h.Std.error('Histogram is too large, please reduce "Row Size" input.')
      }
      _getRowsLayout(logger_e, t) {
        return "Number Of Rows" === logger_e ? new a(t) : new l(t)
      }
    }
}
