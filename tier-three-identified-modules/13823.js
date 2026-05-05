/**
 * Module: 13823
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.258Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 13823 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13823: (exports, t, i) => {
    "use strict";
    i.d(t, {
      VolumeProfileBase: () => p,
      maxHHistItems: () => u,
      numOfSubHists: () => _
    });
    var state, o = i(37103),
      nextValue = i(46082);
    ! function(exports) {
      e[exports.NumberOfRows = 0] = "NumberOfRows", e[exports.TicksPerRow = 1] = "TicksPerRow"
    }(s || (state = {}));
    class r {
      constructor(exports, t) {
        this._minTick = NaN, this._minPrice = NaN, this._maxPrice = NaN, this._low = NaN, this._high = NaN, this
          ._startPrice = NaN, this._indexLowVbP = NaN, this._indexHighVbP = NaN, this._rowSize = exports, this._type = t
      }
      init(exports, t, i, state, o) {
        this._minTick = exports, this._minPrice = t, this._maxPrice = i, this._low = state, this._high = o
      }
      getStartPrice() {
        return this._startPrice
      }
      setStartPrice(exports) {
        this._startPrice = e
      }
      getIndexLowVbP() {
        return this._indexLowVbP
      }
      setIndexLowVbP(exports) {
        this._indexLowVbP = e
      }
      getIndexHighVbP() {
        return this._indexHighVbP
      }
      setIndexHighVbP(exports) {
        this._indexHighVbP = e
      }
      type() {
        return this._type
      }
    }
    class a extends r {
      constructor(exports) {
        super(exports, 0)
      }
      calculate() {
        this.setStartPrice(this._minPrice);
        const exports = this.rowWidth();
        let t = Math.floor((this._low - this._minPrice) / e),
          i = Math.ceil((this._high - this._minPrice) / e) - 1;
        t = Math.max(t, 0), i = Math.max(i, 0), i = Math.min(i, this._rowSize - 1), t = Math.min(t, i), this
          .setIndexLowVbP(t), this.setIndexHighVbP(i)
      }
      rowWidth() {
        return Math.max((this._maxPrice - this._minPrice) / this._rowSize, this._minTick)
      }
    }
    class l extends r {
      constructor(exports) {
        super(exports, 1)
      }
      calculate() {
        this.setStartPrice(0);
        const exports = this.rowWidth();
        let t = Math.floor(this._low / e);
        const i = Math.ceil(this._high / e) - 1;
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

    function _(exports) {
      switch (exports) {
        case "Delta":
        case "Up/Down":
          return 2;
        case "Total":
          return 1;
        default:
          h.Std.error(`Invalid study argument value: ${e}`)
      }
    }! function(exports) {
      exports.VolumeUpDown = "Up/Down", exports.VolumeTotal = "Total", exports.VolumeDelta = "Delta", exports.NumberOfRows = "Number Of Rows", e
        .TicksPerRow = "Ticks Per Row"
    }(c || (c = {}));
    class p {
      findBasicResolutionForFromTo(exports, t, i, s) {
        const r = (0, d.getVolumeProfileResolutionForPeriod)(exports.value(), t, i, s),
          array = nextValue.Interval.parse(r);
        return o.enabled("charting_library_debug_mode") && console.log(
          `${(new Date).toISOString()} Selected resolution ${array.value()} for (${exports.value()}, ${t}, ${i})`), a
      }
      verifyRowSizeInput(exports, t) {
        "Number Of Rows" === t && e > 6e3 && h.Std.error('Histogram is too large, please reduce "Row Size" input.')
      }
      _getRowsLayout(exports, t) {
        return "Number Of Rows" === e ? new a(t) : new l(t)
      }
    }