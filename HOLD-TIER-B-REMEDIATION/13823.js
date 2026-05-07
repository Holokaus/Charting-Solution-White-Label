/**
 * Module 13823 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

13823: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      VolumeProfileBase: () => logger_p,
      maxHHistItems: () => logger_u,
      numOfSubHists: () => _
    });
    var logger_s, logger_o = logger_i(37103),
      logger_n = logger_i(46082);
    ! function(logger_e) {
      logger_e[logger_e.NumberOfRows = 0] = "NumberOfRows", logger_e[logger_e.TicksPerRow = 1] = "TicksPerRow"
    }(logger_s || (logger_s = {}));
    class logger_r {
      constructor(logger_e, logger_t) {
        this._minTick = NaN, this._minPrice = NaN, this._maxPrice = NaN, this._low = NaN, this._high = NaN, this
          ._startPrice = NaN, this._indexLowVbP = NaN, this._indexHighVbP = NaN, this._rowSize = logger_e, this._type = logger_t
      }
      init(logger_e, logger_t, logger_i, logger_s, logger_o) {
        this._minTick = logger_e, this._minPrice = logger_t, this._maxPrice = logger_i, this._low = logger_s, this._high = logger_o
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
    class logger_a extends logger_r {
      constructor(logger_e) {
        super(logger_e, 0)
      }
      calculate() {
        this.setStartPrice(this._minPrice);
        const logger_e = this.rowWidth();
        let logger_t = Math.floor((this._low - this._minPrice) / logger_e),
          logger_i = Math.ceil((this._high - this._minPrice) / logger_e) - 1;
        logger_t = Math.max(logger_t, 0), logger_i = Math.max(logger_i, 0), logger_i = Math.min(logger_i, this._rowSize - 1), logger_t = Math.min(logger_t, logger_i), this
          .setIndexLowVbP(logger_t), this.setIndexHighVbP(logger_i)
      }
      rowWidth() {
        return Math.max((this._maxPrice - this._minPrice) / this._rowSize, this._minTick)
      }
    }
    class logger_l extends logger_r {
      constructor(logger_e) {
        super(logger_e, 1)
      }
      calculate() {
        this.setStartPrice(0);
        const logger_e = this.rowWidth();
        let logger_t = Math.floor(this._low / logger_e);
        const logger_i = Math.ceil(this._high / logger_e) - 1;
        logger_t = Math.min(logger_t, logger_i), this.setIndexLowVbP(logger_t), this.setIndexHighVbP(logger_i)
      }
      rowWidth() {
        return this._minTick * this._rowSize
      }
    }
    var logger_c, logger_h = logger_i(19979),
      logger_d = logger_i(47132);

    function logger_u() {
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
          logger_h.Std.error(`Invalid study argument value: ${logger_e}`)
      }
    }! function(logger_e) {
      logger_e.VolumeUpDown = "Up/Down", logger_e.VolumeTotal = "Total", logger_e.VolumeDelta = "Delta", logger_e.NumberOfRows = "Number Of Rows", logger_e
        .TicksPerRow = "Ticks Per Row"
    }(logger_c || (logger_c = {}));
    class logger_p {
      findBasicResolutionForFromTo(logger_e, logger_t, logger_i, logger_s) {
        const logger_r = (0, logger_d.getVolumeProfileResolutionForPeriod)(logger_e.value(), logger_t, logger_i, logger_s),
          logger_a = logger_n.Interval.parse(logger_r);
        return logger_o.enabled("charting_library_debug_mode") && console.log(
          `${(new Date).toISOString()} Selected resolution ${logger_a.value()} for (${logger_e.value()}, ${logger_t}, ${logger_i})`), logger_a
      }
      verifyRowSizeInput(logger_e, logger_t) {
        "Number Of Rows" === logger_t && logger_e > 6e3 && logger_h.Std.error('Histogram is too large, please reduce "Row Size" input.')
      }
      _getRowsLayout(logger_e, logger_t) {
        return "Number Of Rows" === logger_e ? new logger_a(logger_t) : new logger_l(logger_t)
      }
    }