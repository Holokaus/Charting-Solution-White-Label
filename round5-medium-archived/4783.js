/**
 * Module 4783 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4783: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    const watchedValue_s = i(58978).getHexColorByName,
      o = i(19979).Std,
      watchedValue_n = watchedValue_s("color-ripe-red-100"),
      r = watchedValue_s("color-ripe-red-200"),
      watchedValue_a = watchedValue_s("color-ripe-red-500"),
      l = watchedValue_s("color-ripe-red-900"),
      c = watchedValue_s("color-ripe-red-a200"),
      h = watchedValue_s("color-minty-green-100"),
      d = watchedValue_s("color-minty-green-400"),
      u = watchedValue_s("color-minty-green-500");
    JSServer.studyLibrary = [{
      name: "Accumulation/Distribution",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Accumulation/Distribution",
        shortDescription: "Accum/Dist",
        is_price_study: !1,
        inputs: [],
        id: "Accumulation/Distribution@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Accumulation/Distribution",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return o.or(o.and(o.eq(watchedValue_e, watchedValue_t), o.eq(watchedValue_e, i)), o.eq(watchedValue_t, i)) ? 0 : (2 * watchedValue_e - i - watchedValue_t) / (watchedValue_t - i) * watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this.f_0(o.close(this._context), o.high(this._context), o.low(this._context), o.volume(this
            ._context));
          return [o.cum(i, this._context)]
        }
      }
    }, {
      name: "Accumulative Swing Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "ASI",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Accumulative Swing Index",
        shortDescription: "ASI",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "Limit Move Value",
          defval: 10,
          type: "float",
          min: .1,
          max: 1e5
        }],
        id: "Accumulative Swing Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Accumulative Swing Index",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          var i = watchedValue_t.new_var(o.open(watchedValue_t)),
            watchedValue_s = watchedValue_t.new_var(o.high(watchedValue_t)),
            watchedValue_n = watchedValue_t.new_var(o.low(watchedValue_t)),
            r = watchedValue_t.new_var(o.close(watchedValue_t)),
            watchedValue_a = o.abs(watchedValue_s - r.get(1)),
            l = o.abs(watchedValue_n - r.get(1)),
            c = o.abs(watchedValue_s - watchedValue_n),
            h = o.abs(r.get(1) - i.get(1)),
            d = o.max(watchedValue_a, l),
            u = o.iff(watchedValue_a >= o.max(l, c), watchedValue_a - .5 * l + .25 * h, o.iff(l >= o.max(watchedValue_a, c), l - .5 * watchedValue_a + .25 * h, c +
              .25 * h));
          return o.iff(0 === u, 0, (r - r.get(1) + .5 * (r - i) + .25 * (r.get(1) - i.get(1))) / u * d / watchedValue_e * 50)
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          var i = this.f_0(watchedValue_e, watchedValue_t);
          return o.cum(i, watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0);
          return [this.f_1(i, this._context)]
        }
      }
    }, {
      name: "Advance/Decline",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Advance/Decline",
        shortDescription: "AD",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Advance/Decline@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Advance/Decline",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return o.gt(watchedValue_e, watchedValue_t)
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return o.lt(watchedValue_e, watchedValue_t)
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return 0 === watchedValue_t ? watchedValue_e : watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this.f_0(o.close(this._context), o.open(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.sum(watchedValue_n, i, this._context),
            watchedValue_a = this.f_1(o.close(this._context), o.open(this._context)),
            l = this._context.new_var(watchedValue_a),
            c = o.sum(l, i, this._context);
          return [this.f_2(r, c)]
        }
      }
    }, {
      name: "Arnaud Legoux Moving Average",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9,
            in_1: .85,
            in_2: 6
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Arnaud Legoux Moving Average",
        shortDescription: "ALMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Window Size",
          defval: 9,
          type: "integer",
          min: 0,
          max: 5e3
        }, {
          id: "in_1",
          name: "Offset",
          defval: .85,
          type: "float",
          min: -1e12,
          max: 1e12
        }, {
          id: "in_2",
          name: "Sigma",
          defval: 6,
          type: "float",
          min: -1e12,
          max: 1e12
        }],
        id: "Arnaud Legoux Moving Average@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Arnaud Legoux Moving Average",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2),
            watchedValue_a = this._context.new_var(i);
          return [o.alma(watchedValue_a, watchedValue_s, watchedValue_n, r)]
        }
      }
    }, {
      name: "Aroon",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FB8C00"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Aroon",
        shortDescription: "Aroon",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Aroon@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Aroon",
        format: {
          precision: 2,
          type: "percent"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return 100 * (watchedValue_e + watchedValue_t) / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.high(this._context),
            watchedValue_n = i + 1,
            r = this._context.new_var(watchedValue_s),
            watchedValue_a = o.highestbars(r, watchedValue_n, this._context),
            l = this.f_0(watchedValue_a, i),
            c = o.low(this._context),
            h = this._context.new_var(c),
            d = o.lowestbars(h, watchedValue_n, this._context);
          return [l, this.f_0(d, i)]
        }
      }
    }, {
      name: "Average Price",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        id: "AveragePrice@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Average Price",
        description: "Average Price",
        shortDescription: "Average Price",
        is_price_study: !0,
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#2196F3"
            }
          },
          inputs: {
            symbol: ""
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          if (this._context = watchedValue_e, this._input = watchedValue_t, "" === this._input(0)) return [o.ohlc4(this._context)];
          this._context.select_sym(0);
          const i = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const watchedValue_s = this._context.new_var(o.ohlc4(this._context)).adopt(this._context.new_var(this._context
            .symbol.time), i, 1);
          return this._context.select_sym(0), [watchedValue_s]
        }
      }
    }, {
      name: "Average Directional Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: c
            }
          },
          inputs: {
            in_0: 14,
            in_1: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "ADX",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Average Directional Index",
        shortDescription: "ADX",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "ADX Smoothing",
          defval: 14,
          type: "integer",
          min: -1e12,
          max: 1e12
        }, {
          id: "in_1",
          name: "DI Length",
          defval: 14,
          type: "integer",
          min: -1e12,
          max: 1e12
        }],
        id: "average_directional_Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Average Directional Index",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e) {
            var watchedValue_t = this._context.new_var(o.high(this._context)),
              i = o.change(watchedValue_t),
              watchedValue_s = this._context.new_var(o.low(this._context)),
              watchedValue_n = -o.change(watchedValue_s),
              r = this._context.new_var(o.tr(void 0, this._context)),
              watchedValue_a = o.rma(r, watchedValue_e, this._context),
              l = this._context.new_var(o.and(o.gt(i, watchedValue_n), o.gt(i, 0)) ? i : 0),
              c = o.fixnan(100 * o.rma(l, watchedValue_e, this._context) / watchedValue_a, this._context),
              h = this._context.new_var(o.and(o.gt(watchedValue_n, i), o.gt(watchedValue_n, 0)) ? watchedValue_n : 0);
            return [c, o.fixnan(100 * o.rma(h, watchedValue_e, this._context) / watchedValue_a, this._context)]
          }, this.f_1 = function(watchedValue_e, watchedValue_t) {
            var i = this.f_0(watchedValue_e),
              watchedValue_s = i[0],
              watchedValue_n = i[1],
              r = watchedValue_s + watchedValue_n,
              watchedValue_a = this._context.new_var(o.abs(watchedValue_s - watchedValue_n) / (o.eq(r, 0) ? 1 : r));
            return [100 * o.rma(watchedValue_a, watchedValue_t, this._context)]
          },
          this.main = function(watchedValue_e, watchedValue_t) {
            return this._context = watchedValue_e, this._input = watchedValue_t, this._context.setMinimumAdditionalDepth(this._input(0) +
              this._input(1)), this.f_1(this._input(1), this._input(0))
          }
      }
    }, {
      name: "Average True Range",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: l
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Average True Range",
        shortDescription: "ATR",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Average True Range@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Average True Range",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          var i = watchedValue_t(0);
          return [o.atr(i, watchedValue_e)]
        }
      }
    }, {
      name: "Awesome Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 1,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#000080"
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: watchedValue_a,
                  width: 1,
                  style: 0
                },
                1: {
                  color: u,
                  width: 1,
                  style: 0
                }
              }
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          palette: "palette_0",
          target: "plot_0",
          type: "colorer"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Awesome Oscillator",
        shortDescription: "AO",
        is_price_study: !1,
        palettes: {
          palette_0: {
            colors: {
              0: {
                name: "Color 0"
              },
              1: {
                name: "Color 1"
              }
            }
          }
        },
        inputs: [],
        id: "Awesome Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Awesome Oscillator",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_1 = function(watchedValue_e) {
          return o.le(watchedValue_e, 0) ? 0 : 1
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.hl2(this._context),
            watchedValue_s = this._context.new_var(i),
            watchedValue_n = o.sma(watchedValue_s, 5, this._context),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, 34, this._context),
            l = this.f_0(watchedValue_n, watchedValue_a),
            c = l,
            h = this._context.new_var(l),
            d = o.change(h);
          return [c, this.f_1(d)]
        }
      }
    }, {
      name: "Accelerator Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 1,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#000080"
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: watchedValue_a,
                  width: 1,
                  style: 0
                },
                1: {
                  color: u,
                  width: 1,
                  style: 0
                }
              }
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          palette: "palette_0",
          target: "plot_0",
          type: "colorer"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Accelerator Oscillator",
        shortDescription: "AO",
        is_price_study: !1,
        palettes: {
          palette_0: {
            colors: {
              0: {
                name: "Color 0"
              },
              1: {
                name: "Color 1"
              }
            }
          }
        },
        inputs: [],
        id: "Accelerator Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Accelerator Oscillator",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_1 = function(watchedValue_e) {
          return o.le(watchedValue_e, 0) ? 0 : 1
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.hl2(this._context),
            watchedValue_s = this._context.new_var(i),
            watchedValue_n = o.sma(watchedValue_s, 5, this._context),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, 34, this._context),
            l = this.f_0(watchedValue_n, watchedValue_a),
            c = this._context.new_var(l),
            h = o.sma(c, 5, this._context),
            d = this.f_0(l, h),
            u = this._context.new_var(d),
            _ = o.change(u);
          return [d, this.f_1(_)]
        }
      }
    }, {
      name: "Balance of Power",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: c
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Balance of Power",
        shortDescription: "Balance of Power",
        is_price_study: !1,
        inputs: [],
        id: "Balance of Power@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Balance of Power",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return (watchedValue_e - watchedValue_t) / (i - watchedValue_s)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.f_0(o.close(this._context), o.open(this._context), o
            .high(this._context), o.low(this._context))]
        }
      }
    }, {
      name: "BB",
      metainfo: {
        _metainfoVersion: 23,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !0,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 35,
              visible: !0,
              color: "#FF0000"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 35,
              visible: !0,
              color: "#0000FF"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 35,
              visible: !0,
              color: "#0000FF"
            }
          },
          precision: 4,
          filledAreasStyle: {
            fill_0: {
              color: "#000080",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            in_1: 2
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Median",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Bollinger Bands",
        shortDescription: "BB",
        is_price_study: !0,
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_1",
          objBId: "plot_2",
          type: "plot_plot",
          title: "Plots Background"
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "mult",
          defval: 2,
          type: "float",
          min: .001,
          max: 50
        }],
        id: "BB@tv-basicstudies-1"
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e + watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, watchedValue_s, this._context),
            l = this._context.new_var(i),
            c = o.stdev(l, watchedValue_s, this._context),
            h = this.f_0(watchedValue_n, c);
          return [watchedValue_a, this.f_1(watchedValue_a, h), this.f_2(watchedValue_a, h)]
        }
      }
    }, {
      name: "Bollinger Bands",
      metainfo: {
        _metainfoVersion: 53,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 95,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            in_1: 2,
            symbol: "",
            offset: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Median",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Bollinger Bands",
        shortDescription: "BB",
        is_price_study: !0,
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_1",
          objBId: "plot_2",
          type: "plot_plot",
          title: "Plots Background"
        }],
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "mult",
          defval: 2,
          type: "float",
          min: .001,
          max: 50
        }, {
          id: "offset",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }],
        id: "Bollinger Bands@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Bollinger Bands",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e + watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.time(this._context)),
            watchedValue_s = o.close(this._context),
            watchedValue_n = this._input(0),
            r = this._input(1),
            watchedValue_a = this._input(2),
            l = this._input(3);
          if ("" !== watchedValue_n) {
            this._context.select_sym(1);
            var c = this._context.new_var(o.time(this._context));
            watchedValue_s = this._context.new_var(o.close(this._context)).adopt(c, i, 1), this._context.select_sym(0)
          }
          var h = this._context.new_var(watchedValue_s),
            d = o.sma(h, r, this._context),
            u = this._context.new_var(watchedValue_s),
            _ = o.stdev(u, r, this._context),
            p = this.f_0(watchedValue_a, _);
          return [{
            value: d,
            offset: l
          }, {
            value: this.f_1(d, p),
            offset: l
          }, {
            value: this.f_2(d, p),
            offset: l
          }]
        }
      }
    }, {
      name: "Bollinger Bands %B",
      metainfo: {
        _metainfoVersion: 53,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: d
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 1
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#26A69A",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            in_1: 2
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Bollinger Bands %B",
        shortDescription: "BB %B",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "mult",
          defval: 2,
          type: "float",
          min: .001,
          max: 50
        }],
        id: "Bollinger Bands %B@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Bollinger Bands %B",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e + watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_3 = function(watchedValue_e, watchedValue_t, i) {
          return (watchedValue_e - watchedValue_t) / (i - watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, watchedValue_s, this._context),
            l = this._context.new_var(i),
            c = o.stdev(l, watchedValue_s, this._context),
            h = this.f_0(watchedValue_n, c),
            d = this.f_1(watchedValue_a, h),
            u = this.f_2(watchedValue_a, h);
          return [this.f_3(i, u, d)]
        }
      }
    }, {
      name: "Bollinger Bands Width",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          inputs: {
            in_0: 20,
            in_1: 2
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Bollinger Bands Width",
        shortDescription: "BBW",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "mult",
          defval: 2,
          type: "float",
          min: .001,
          max: 50
        }],
        id: "Bollinger Bands Width@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Bollinger Bands Width",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e + watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_3 = function(watchedValue_e, watchedValue_t, i) {
          return (watchedValue_e - watchedValue_t) / i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, watchedValue_s, this._context),
            l = this._context.new_var(i),
            c = o.stdev(l, watchedValue_s, this._context),
            h = this.f_0(watchedValue_n, c),
            d = this.f_1(watchedValue_a, h),
            u = this.f_2(watchedValue_a, h);
          return [this.f_3(d, u, watchedValue_a)]
        }
      }
    }, {
      name: "Chaikin Money Flow",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 20
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Chaikin Money Flow",
        shortDescription: "CMF",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Chaikin Money Flow@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chaikin Money Flow",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return o.or(o.and(o.eq(watchedValue_e, watchedValue_t), o.eq(watchedValue_e, i)), o.eq(watchedValue_t, i)) ? 0 : (2 * watchedValue_e - i - watchedValue_t) / (watchedValue_t - i) * watchedValue_s
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this.f_0(o.close(this._context), o.high(this._context), o.low(this._context), o.volume(this
              ._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.sum(watchedValue_n, i, this._context),
            watchedValue_a = o.volume(this._context),
            l = this._context.new_var(watchedValue_a),
            c = o.sum(l, i, this._context);
          return [this.f_1(r, c)]
        }
      }
    }, {
      name: "Chaikin Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#EC407A"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 3,
            in_1: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Chaikin Oscillator",
        shortDescription: "Chaikin Osc",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "short",
          defval: 3,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "long",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Chaikin Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chaikin Oscillator",
        format: {
          type: "volume"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.accdist(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.ema(r, i, this._context),
            l = this._context.new_var(watchedValue_n),
            c = o.ema(l, watchedValue_s, this._context);
          return [this.f_0(watchedValue_a, c)]
        }
      }
    }, {
      name: "Chaikin Volatility",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Chaikin Volatility@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chaikin Volatility",
        description: "Chaikin Volatility",
        shortDescription: "Chaikin Volatility",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#AB47BC"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            periods: 10,
            rocLookback: 10
          }
        },
        styles: {
          plot_0: {
            title: "Plot",
            zorder: 1
          }
        },
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "periods",
          type: "integer",
          name: "Periods"
        }, {
          id: "rocLookback",
          type: "integer",
          name: "Rate of Change Lookback"
        }],
        format: {
          type: "volume"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.rocLookback = this._input(1)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this._context.setMinimumAdditionalDepth(this.period + this
            .rocLookback);
          var i = this._context.new_var(o.high(this._context) - o.low(this._context)),
            watchedValue_s = this._context.new_var(o.ema(i, this.period, this._context));
          return [o.roc(watchedValue_s, this.rocLookback)]
        }
      }
    }, {
      name: "Chande Kroll Stop",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          inputs: {
            in_0: 10,
            in_1: 1,
            in_2: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Long",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Short",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Chande Kroll Stop",
        shortDescription: "Chande Kroll Stop",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "p",
          defval: 10,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_1",
          name: "x",
          defval: 1,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_2",
          name: "q",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "Chande Kroll Stop@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chande Kroll Stop",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e - watchedValue_t * i
        }, this.f_1 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e + watchedValue_t * i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            r = o.high(this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.highest(watchedValue_a, i, this._context),
            c = o.atr(i, this._context),
            h = this.f_0(l, watchedValue_s, c),
            d = this._context.new_var(r),
            u = o.lowest(d, i, this._context),
            _ = this.f_1(u, watchedValue_s, c),
            p = this._context.new_var(h),
            m = o.highest(p, watchedValue_n, this._context),
            g = this._context.new_var(_);
          return [o.lowest(g, watchedValue_n, this._context), m]
        }
      }
    }, {
      name: "Chande Momentum Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Chande Momentum Oscillator",
        shortDescription: "ChandeMO",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Chande Momentum Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chande Momentum Oscillator",
        format: {
          type: "price",
          precision: 2
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e) {
          return o.ge(watchedValue_e, 0) ? watchedValue_e : 0
        }, this.f_1 = function(watchedValue_e) {
          return o.ge(watchedValue_e, 0) ? 0 : -watchedValue_e
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return 100 * watchedValue_e / watchedValue_t
        }, this.f_3 = function(watchedValue_e, watchedValue_t) {
          return this.f_2(watchedValue_e - watchedValue_t, watchedValue_e + watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.change(watchedValue_n),
            watchedValue_a = this.f_0(r),
            l = this.f_1(r),
            c = this._context.new_var(watchedValue_a),
            h = o.sum(c, i, this._context),
            d = this._context.new_var(l),
            u = o.sum(d, i, this._context);
          return [this.f_3(h, u)]
        }
      }
    }, {
      name: "Chop Zone",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 5,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#000080"
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: "#26C6DA",
                  width: 1,
                  style: 0
                },
                1: {
                  color: "#43A047",
                  width: 1,
                  style: 0
                },
                2: {
                  color: "#A5D6A7",
                  width: 1,
                  style: 0
                },
                3: {
                  color: u,
                  width: 1,
                  style: 0
                },
                4: {
                  color: "#D50000",
                  width: 1,
                  style: 0
                },
                5: {
                  color: "#E91E63",
                  width: 1,
                  style: 0
                },
                6: {
                  color: "#FF6D00",
                  width: 1,
                  style: 0
                },
                7: {
                  color: "#FFB74D",
                  width: 1,
                  style: 0
                },
                8: {
                  color: "#FDD835",
                  width: 1,
                  style: 0
                }
              }
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          palette: "palette_0",
          target: "plot_0",
          type: "colorer"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Chop Zone",
        shortDescription: "Chop Zone",
        is_price_study: !1,
        palettes: {
          palette_0: {
            colors: {
              0: {
                name: "Color 0"
              },
              1: {
                name: "Color 1"
              },
              2: {
                name: "Color 2"
              },
              3: {
                name: "Color 3"
              },
              4: {
                name: "Color 4"
              },
              5: {
                name: "Color 5"
              },
              6: {
                name: "Color 6"
              },
              7: {
                name: "Color 7"
              },
              8: {
                name: "Color 8"
              }
            },
            valToIndex: {
              0: 0,
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8
            }
          }
        },
        inputs: [],
        id: "chop_zone@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Chop Zone",
        format: {
          precision: 0,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = o.close(this._context),
            watchedValue_t = o.hlc3(this._context),
            i = this._context.new_var(o.high(this._context)),
            watchedValue_s = o.highest(i, 30, this._context),
            watchedValue_n = o.lowest(i, 30, this._context),
            r = 25 / (watchedValue_s - watchedValue_n) * watchedValue_n,
            watchedValue_a = this._context.new_var(watchedValue_e),
            l = this._context.new_var(o.ema(watchedValue_a, 34, this._context)),
            c = (l.get(1) - l.get(0)) / watchedValue_t * r,
            h = o.sqrt(1 + c * c),
            d = o.round(180 * o.acos(1 / h) / 3.141592653589793),
            u = o.iff(o.gt(c, 0), -d, d),
            _ = o.and(o.gt(u, -2.14), o.le(u, -.71)) ? 7 : 8,
            p = o.and(o.gt(u, -3.57), o.le(u, -2.14)) ? 6 : _,
            m = o.and(o.gt(u, -5), o.le(u, -3.57)) ? 5 : p,
            g = o.le(u, -5) ? 4 : m,
            f = o.and(o.lt(u, 2.14), o.ge(u, .71)) ? 3 : g,
            y = o.and(o.lt(u, 3.57), o.ge(u, 2.14)) ? 2 : f,
            v = o.and(o.lt(u, 5), o.ge(u, 3.57)) ? 1 : y;
          return [1, o.ge(u, 5) ? 0 : v]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_0()
        }
      }
    }, {
      name: "Choppiness Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 61.8
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 38.2
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Choppiness Index",
        shortDescription: "CHOP",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Choppiness Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Choppiness Index",
        format: {
          type: "price",
          precision: 2
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return 100 * o.log10(watchedValue_e / (watchedValue_t - i)) / watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.atr(1, this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.sum(watchedValue_n, i, this._context),
            watchedValue_a = o.high(this._context),
            l = this._context.new_var(watchedValue_a),
            c = o.highest(l, i, this._context),
            h = o.low(this._context),
            d = this._context.new_var(h),
            u = o.lowest(d, i, this._context),
            _ = o.log10(i);
          return [this.f_0(r, c, u, _)]
        }
      }
    }, {
      name: "Commodity Channel Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 100
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: -100
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            smoothingLine: "SMA",
            smoothingLength: 20
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 2
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Commodity Channel Index",
        shortDescription: "CCI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "smoothingLine",
          name: "Smoothing Line",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["smoothedMA"]
        }, {
          id: "smoothingLength",
          name: "Smoothing Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["smoothedMA"]
        }],
        id: "Commodity Channel Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Commodity Channel Index",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return (watchedValue_e - watchedValue_t) / (.015 * i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.hlc3(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_s + r);
          var watchedValue_a, l = this._context.new_var(i),
            c = o.sma(l, watchedValue_s, this._context),
            h = this._context.new_var(i),
            d = o.dev(h, watchedValue_s, this._context),
            u = this.f_0(i, c, d),
            _ = this._context.new_var(u);
          return "EMA" === watchedValue_n ? watchedValue_a = o.ema(_, r, this._context) : "WMA" === watchedValue_n ? watchedValue_a = o.wma(_, r, this._context) :
            "SMA" === watchedValue_n && (watchedValue_a = o.sma(_, r, this._context)), [u, watchedValue_a]
        }
      }
    }, {
      name: "Connors RSI",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 70
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 30
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 3,
            in_1: 2,
            in_2: 100
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "CRSI",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Connors RSI",
        shortDescription: "CRSI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "RSI Length",
          defval: 3,
          type: "integer",
          min: 1
        }, {
          id: "in_1",
          name: "UpDown Length",
          defval: 2,
          type: "integer",
          min: 1
        }, {
          id: "in_2",
          name: "ROC Length",
          defval: 100,
          type: "integer",
          min: 1
        }],
        id: "Connors RSI@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Connors RSI",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        var watchedValue_e;
        this.f_1 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = i.new_var(o.max(o.change(watchedValue_e), 0));
          return o.rma(watchedValue_s, watchedValue_t, i)
        }, this.f_2 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = i.new_var(-o.min(o.change(watchedValue_e), 0));
          return o.rma(watchedValue_s, watchedValue_t, i)
        }, this.f_3 = (watchedValue_e = 0, function(watchedValue_t) {
          var i = watchedValue_t.get(0),
            watchedValue_s = watchedValue_t.get(1);
          return watchedValue_e = i === watchedValue_s ? 0 : i > watchedValue_s ? o.nz(watchedValue_e) <= 0 ? 1 : o.nz(watchedValue_e) + 1 : o.nz(watchedValue_e) >= 0 ? -1 : o.nz(watchedValue_e) - 1,
            this._context.new_var(watchedValue_e)
        }), this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._context.new_var(i),
            watchedValue_n = this._input(0),
            r = this._input(1),
            watchedValue_a = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_a);
          var l = o.rsi(this.f_1(watchedValue_s, watchedValue_n, this._context), this.f_2(watchedValue_s, watchedValue_n, this._context)),
            c = this.f_3(watchedValue_s),
            h = o.rsi(this.f_1(c, r, this._context), this.f_2(c, r, this._context)),
            d = this._context.new_var(o.roc(watchedValue_s, 1)),
            u = o.percentrank(d, watchedValue_a);
          return [o.avg(l, h, u)]
        }
      }
    }, {
      name: "Coppock Curve",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10,
            in_1: 14,
            in_2: 11
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Coppock Curve",
        shortDescription: "Coppock Curve",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "WMA Length",
          defval: 10,
          type: "integer",
          min: -1e12,
          max: 5e3
        }, {
          id: "in_1",
          name: "Long RoC Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_2",
          name: "Short RoC Length",
          defval: 11,
          type: "integer",
          min: 1,
          max: 4999
        }],
        id: "Coppock Curve@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Coppock Curve",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e + watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(i + Math.max(watchedValue_s, watchedValue_n));
          var r = o.close(this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.roc(watchedValue_a, watchedValue_s),
            c = this._context.new_var(r),
            h = o.roc(c, watchedValue_n),
            d = this.f_0(l, h),
            u = this._context.new_var(d);
          return [o.wma(u, i, this._context)]
        }
      }
    }, {
      name: "Correlation Coeff",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 4,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: "",
            in_1: 20
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Correlation Coefficient",
        shortDescription: "CC",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "symbol",
          defval: "",
          type: "symbol"
        }, {
          id: "in_1",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Correlation Coeff@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Correlation Coeff",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this._context.new_sym(this._input(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_unlimited_var(this._context.symbol.time),
            watchedValue_s = (this._input(0), o.period(this._context), o.close(this._context)),
            watchedValue_n = this._input(1);
          this._context.select_sym(1);
          var r = this._context.new_unlimited_var(this._context.symbol.time),
            watchedValue_a = o.close(this._context),
            l = this._context.new_unlimited_var(watchedValue_a);
          this._context.select_sym(0);
          var c = l.adopt(r, i, 0),
            h = this._context.new_var(watchedValue_s),
            d = this._context.new_var(c);
          return [o.correlation(h, d, watchedValue_n, this._context)]
        }
      }
    }, {
      name: "Correlation - Log",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Correlation - Log@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Correlation - Log",
        description: "Correlation - Log",
        shortDescription: "Correlation - Log",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#2196F3"
            }
          },
          inputs: {
            instrument: "",
            instrument2: "",
            periods: 25
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "instrument",
          name: "Instrument 1",
          type: "symbol",
          defval: "",
          confirm: !0
        }, {
          id: "instrument2",
          name: "Instrument 2",
          type: "symbol",
          defval: "",
          confirm: !0
        }, {
          id: "periods",
          name: "Periods",
          type: "integer",
          defval: 25
        }],
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this._context.new_sym(this._input(0), o.period(this._context)),
            this._context.new_sym(this._input(1), o.period(this._context)), this.period = this._input(2)
        }, this.correlationLog = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          var watchedValue_n = o.sma(watchedValue_e, i, watchedValue_s),
            r = o.sma(watchedValue_t, i, watchedValue_s),
            watchedValue_a = watchedValue_s.new_var(watchedValue_e.get() * watchedValue_t.get());
          return (o.sma(watchedValue_a, i, watchedValue_s) - watchedValue_n * r) / Math.sqrt(o.variance2(watchedValue_e, watchedValue_n, i) * o.variance2(watchedValue_t, r, i))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(2);
          var watchedValue_s = this._context.new_var(o.close(this._context)),
            watchedValue_n = this._context.new_var(o.log(watchedValue_s.get() / watchedValue_s.get(1))),
            r = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          var watchedValue_a = this._context.new_var(this._context.symbol.time),
            l = this._context.new_var(o.close(this._context)),
            c = this._context.new_var(o.log(l.get() / l.get(1))),
            h = this._context.new_var(watchedValue_n.adopt(r, watchedValue_a, 0)),
            d = this._context.new_var(this.correlationLog(c, h, this.period, this._context)),
            u = this._context.new_var(d.adopt(watchedValue_a, i, 0)).get(),
            _ = o.round(1e3 * u) / 1e3;
          return this._context.select_sym(0), [_]
        }
      }
    }, {
      name: "Detrended Price Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 21,
            in_1: !1
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "DPO",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 1
          }
        },
        description: "Detrended Price Oscillator",
        shortDescription: "DPO",
        is_price_study: !1,
        is_hidden_study: !1,
        id: "detrended_price_oscillator@tv-basicstudies-1",
        bands: [{
          id: "hline_0",
          name: "Zero",
          isHidden: !1,
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "Period",
          defval: 21,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "isCentered",
          defval: !1,
          type: "bool"
        }],
        scriptIdPart: "",
        name: "Detrended Price Oscillator",
        format: {
          type: "price",
          precision: 2
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._input(1),
            i = Math.floor(watchedValue_e / 2 + 1);
          this._context.setMinimumAdditionalDepth(watchedValue_e + i);
          var watchedValue_s = this._context.new_var(o.close(this._context)),
            watchedValue_n = this._context.new_var(o.sma(watchedValue_s, watchedValue_e, this._context)),
            r = this._context.new_var(o.close(this._context)).get(i) - watchedValue_n,
            watchedValue_a = o.close(this._context) - watchedValue_n.get(i);
          return [watchedValue_t ? r : watchedValue_a, watchedValue_t ? -i : 0]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this.f_0();
          return [{
            value: i[0],
            offset: i[1]
          }]
        }
      }
    }, {
      name: "Directional Movement Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_3: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#F50057"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FFA726"
            },
            plot_4: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#ab47bc"
            }
          },
          inputs: {
            in_0: 14,
            in_1: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }, {
          id: "plot_3",
          type: "line"
        }, {
          id: "plot_4",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "+DI",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "-DI",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "DX",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_3: {
            title: "ADX",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_4: {
            title: "ADXR",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Directional Movement",
        shortDescription: "DMI",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "DI Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "ADX Smoothing",
          defval: 14,
          type: "integer",
          min: 1,
          max: 50
        }],
        id: "Directional Movement Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Directional Movement Index",
        format: {
          precision: 4,
          type: "price"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1);
          return this._context.setMinimumAdditionalDepth(2 * i + watchedValue_s), o.dmi(i, watchedValue_s, this._context)
        }
      }
    }, {
      name: "Donchian Channels",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 95,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            offset: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Basis",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Donchian Channels",
        shortDescription: "DC",
        is_price_study: !0,
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_1",
          objBId: "plot_0",
          type: "plot_plot",
          title: "Plots Background"
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "offset",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e3,
          max: 1e3
        }],
        id: "Donchian Channels@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Donchian Channels",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.low(this._context),
            r = this._context.new_var(watchedValue_n);
          this._context.setMinimumAdditionalDepth(i + Math.max(watchedValue_s, 0));
          var watchedValue_a = o.lowest(r, i, this._context),
            l = o.high(this._context),
            c = this._context.new_var(l),
            h = o.highest(c, i, this._context);
          return [{
            value: watchedValue_a,
            offset: watchedValue_s
          }, {
            value: h,
            offset: watchedValue_s
          }, {
            value: o.avg(h, watchedValue_a),
            offset: watchedValue_s
          }]
        }
      }
    }, {
      name: "Double Exponential Moving Average",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            }
          },
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Double EMA",
        shortDescription: "DEMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "Double Exponential Moving Average@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Double Exponential Moving Average",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return 2 * watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0);
          this._context.setMinimumAdditionalDepth(2 * i);
          var watchedValue_s = o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.ema(watchedValue_n, i, this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.ema(watchedValue_a, i, this._context);
          return [this.f_0(r, l)]
        }
      }
    }, {
      name: "Ease of Movement",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            }
          },
          inputs: {
            in_0: 1e4,
            in_1: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Ease Of Movement",
        shortDescription: "EOM",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "Divisor",
          defval: 1e4,
          type: "integer",
          min: 1,
          max: 1e9
        }, {
          id: "in_1",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Ease of Movement@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Ease of Movement",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s, o) {
          return watchedValue_e * watchedValue_t * (i - watchedValue_s) / o
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.hl2(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.change(r),
            l = this.f_0(i, watchedValue_a, o.high(this._context), o.low(this._context), o.volume(this._context)),
            c = this._context.new_var(l);
          return [o.sma(c, watchedValue_s, this._context)]
        }
      }
    }, {
      name: "Elders Force Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: watchedValue_a
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 13
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Elder'watchedValue_s Force Index",
        shortDescription: "EFI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 13,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Elders Force Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Elders Force Index",
        format: {
          type: "volume"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.change(watchedValue_n),
            watchedValue_a = this.f_0(r, o.volume(this._context)),
            l = this._context.new_var(watchedValue_a);
          return [o.ema(l, i, this._context)]
        }
      }
    }, {
      name: "EMA Cross",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 4,
              plottype: 3,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9,
            in_1: 26
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Short",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Long",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Crosses",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "EMA Cross",
        shortDescription: "EMA Cross",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Short",
          defval: 9,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_0", "plot_2"]
        }, {
          id: "in_1",
          name: "Long",
          defval: 26,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1", "plot_2"]
        }],
        id: "EMA Cross@tv-basicstudies-1",
        scriptIdPart: "",
        name: "EMA Cross",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e ? watchedValue_t : o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.close(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.ema(r, i, this._context),
            l = this._context.new_var(watchedValue_n),
            c = o.ema(l, watchedValue_s, this._context),
            h = watchedValue_a,
            d = c,
            u = o.cross(watchedValue_a, c, this._context);
          return [h, d, this.f_0(u, watchedValue_a)]
        }
      }
    }, {
      name: "Envelopes",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 95,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            in_1: 10,
            in_2: 10,
            in_3: "Simple",
            in_4: "close"
          }
        },
        plots: [{
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Average",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Envelopes",
        shortDescription: "Envelopes",
        is_price_study: !0,
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_1",
          objBId: "plot_2",
          type: "plot_plot",
          title: "Plots Background"
        }],
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "Upper Percentage",
          defval: 2,
          type: "float",
          min: 0
        }, {
          id: "in_2",
          name: "Lower Percentage",
          defval: 2,
          type: "float",
          min: 0
        }, {
          id: "in_3",
          name: "Method",
          type: "text",
          defval: "Simple",
          options: ["Simple", "Exponential", "Weighted"]
        }, {
          id: "in_4",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }],
        id: "Envelope@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Envelopes",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * (1 + watchedValue_t)
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e * (1 - watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o[this._input(4)](this._context)),
            watchedValue_s = o.sma(i, this._input(0), this._context);
          return "Exponential" === this._input(3) ? watchedValue_s = o.ema(i, this._input(0), this._context) : "Weighted" ===
            this._input(3) && (watchedValue_s = o.wma(i, this._input(0), this._context)), [this.f_0(watchedValue_s, this._input(1) / 100),
              watchedValue_s, this.f_1(watchedValue_s, this._input(2) / 100)
            ]
        }
      }
    }, {
      name: "Standard Error",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Standard Error@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Standard Error",
        description: "Standard Error",
        shortDescription: "Standard Error",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#FF6D00"
            }
          },
          inputs: {
            length: 14
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "length",
          type: "integer",
          name: "Length",
          min: 3
        }],
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          for (var i, watchedValue_s, watchedValue_n = this._context.new_var(o.close(this._context)), r = 0, watchedValue_a = 0, l = 0; l < this
            .period; l++) r += l + 1, watchedValue_a += watchedValue_n.get(l);
          i = r / this.period, watchedValue_s = watchedValue_a / this.period;
          var c = 0,
            h = 0,
            d = 0;
          for (l = 0; l < this.period; l++) d += Math.pow(watchedValue_s - watchedValue_n.get(l), 2), h += (i - l - 1) * (watchedValue_s - watchedValue_n.get(l)),
            c += Math.pow(i - l - 1, 2);
          return h = Math.pow(h, 2), [Math.sqrt((d - h / c) / (this.period - 2))]
        }
      }
    }, {
      name: "Standard Error Bands",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Standard Error Bands@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Standard Error Bands",
        description: "Standard Error Bands",
        shortDescription: "Standard Error Bands",
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              transparency: 0,
              trackPrice: !1,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#FF6D00"
            },
            plot_2: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#2196F3"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 95,
              visible: !0
            }
          },
          inputs: {
            periods: 21,
            errors: 2,
            method: "Simple",
            averagePeriods: 3
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          },
          plot_1: {
            title: "Plot 2"
          },
          plot_2: {
            title: "Plot 3"
          }
        },
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_0",
          objBId: "plot_2",
          type: "plot_plot",
          title: "Background"
        }],
        inputs: [{
          id: "periods",
          type: "integer",
          name: "Periods"
        }, {
          id: "errors",
          type: "float",
          name: "Standard Errors"
        }, {
          id: "method",
          name: "Method",
          type: "text",
          defval: "Simple",
          options: ["Simple", "Exponential", "Weighted"]
        }, {
          id: "averagePeriods",
          type: "integer",
          name: "Averaging Periods"
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.errorDeviation = this._input(
            1), this.maMethod = this._input(2), this.averagePeriod = this._input(3)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          for (var i, watchedValue_s, watchedValue_n = this._context.new_var(o.close(this._context)), r = 0, watchedValue_a = 0, l = 0; l < this
            .period; l++) r += l + 1, watchedValue_a += watchedValue_n.get(l);
          i = r / this.period, watchedValue_s = watchedValue_a / this.period;
          var c = 0,
            h = 0,
            d = 0;
          for (l = 0; l < this.period; l++) d += Math.pow(watchedValue_s - watchedValue_n.get(l), 2), h += (i - l - 1) * (watchedValue_s - watchedValue_n.get(l)),
            c += Math.pow(i - l - 1, 2);
          h = Math.pow(h, 2);
          var u, _, p, m = Math.sqrt((d - h / c) / (this.period - 2)),
            g = o.linreg(watchedValue_n, this.period, 0),
            f = this._context.new_var(g + this.errorDeviation * m),
            y = this._context.new_var(g),
            v = this._context.new_var(g - this.errorDeviation * m);
          return "Simple" === this.maMethod ? (u = o.sma(f, this.averagePeriod, this._context), _ = o.sma(y,
              this.averagePeriod, this._context), p = o.sma(v, this.averagePeriod, this._context)) :
            "Exponential" === this.maMethod ? (u = o.ema(f, this.averagePeriod, this._context), _ = o.ema(y,
              this.averagePeriod, this._context), p = o.ema(v, this.averagePeriod, this._context)) : (u = o.wma(
                f, this.averagePeriod, this._context), _ = o.wma(y, this.averagePeriod, this._context), p = o
              .wma(v, this.averagePeriod, this._context)), [u, _, p]
        }
      }
    }, {
      name: "Fisher Transform",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          bands: [{
            color: "#E91E63",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 1.5
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: .75
          }, {
            color: "#E91E63",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: -.75
          }, {
            color: "#E91E63",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: -1.5
          }],
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Fisher",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 1
          },
          plot_1: {
            title: "Trigger",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 1.1
          }
        },
        description: "Fisher Transform",
        shortDescription: "Fisher",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Level",
          isHidden: !1,
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "Level",
          isHidden: !1,
          zorder: -1.11
        }, {
          id: "hline_2",
          name: "Level",
          isHidden: !1,
          zorder: -1.111
        }, {
          id: "hline_3",
          name: "Level",
          isHidden: !1,
          zorder: -1.1111
        }, {
          id: "hline_4",
          name: "Level",
          isHidden: !1,
          zorder: -1.11111
        }],
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "fisher_transform@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Fisher Transform",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e) {
          var watchedValue_t = o.lt(watchedValue_e, -.99) ? -.999 : watchedValue_e;
          return [o.gt(watchedValue_e, .99) ? .999 : watchedValue_t]
        }, this.f_1 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._context.new_var(o.hl2(this._context)),
            i = o.highest(watchedValue_t, watchedValue_e, this._context),
            watchedValue_s = this._context.new_var(o.hl2(this._context)),
            watchedValue_n = o.lowest(watchedValue_s, watchedValue_e, this._context),
            r = this._context.new_var(),
            watchedValue_a = this.f_0(.66 * ((o.hl2(this._context) - watchedValue_n) / o.max(i - watchedValue_n, .001) - .5) + .67 * o.nz(r.get(1)));
          r.set(watchedValue_a[0]);
          var l = this._context.new_var();
          l.set(.5 * o.log((1 + r.get(0)) / o.max(1 - r.get(0), .001)) + .5 * o.nz(l.get(1)));
          var c = l.get(1);
          return [l.get(0), c]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_1()
        }
      }
    }, {
      name: "Historical Volatility",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Historical Volatility",
        shortDescription: "HV",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "historical_volatility@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Historical Volatility",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = o.or(o.isintraday(this._context), o.and(o.isdaily(this._context), o.eq(o.interval(this
              ._context), 1))) ? 1 : 7,
            i = this._context.new_var(o.close(this._context)),
            watchedValue_s = this._context.new_var(o.log(o.close(this._context) / i.get(1)));
          return [100 * o.stdev(watchedValue_s, watchedValue_e, this._context) * o.sqrt(365 / watchedValue_t)]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_0()
        }
      }
    }, {
      name: "Hull MA",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Hull Moving Average",
        shortDescription: "HMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "Hull MA@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Hull MA",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return 2 * watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = watchedValue_s / 2;
          this._context.setMinimumAdditionalDepth(Math.ceil(watchedValue_s + watchedValue_n));
          var r = this._context.new_var(i),
            watchedValue_a = o.wma(r, watchedValue_n, this._context),
            l = this._context.new_var(i),
            c = o.wma(l, watchedValue_s, this._context),
            h = this.f_0(watchedValue_a, c),
            d = o.sqrt(watchedValue_s),
            u = o.round(d),
            _ = this._context.new_var(h);
          return [o.wma(_, u, this._context)]
        }
      }
    }, {
      name: "Ichimoku Cloud",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: l
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            },
            plot_3: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#A5D6A7"
            },
            plot_4: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: r
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: "#43A047",
                  width: 1,
                  style: 0
                },
                1: {
                  color: watchedValue_a,
                  width: 1,
                  style: 0
                }
              }
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#000080",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            symbol: "",
            in_0: 9,
            in_1: 26,
            in_2: 52,
            in_3: 26,
            in_4: 26
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }, {
          id: "plot_3",
          type: "line"
        }, {
          id: "plot_4",
          type: "line"
        }, {
          id: "plot_5",
          palette: "palette_0",
          target: "fill_0",
          type: "colorer"
        }],
        styles: {
          plot_0: {
            title: "Conversion Line",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_1: {
            title: "Base Line",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_2: {
            title: "Lagging Span",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_3: {
            title: "Leading Span A",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_4: {
            title: "Leading Span B",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Ichimoku Cloud",
        shortDescription: "Ichimoku",
        is_price_study: !0,
        is_hidden_study: !1,
        id: "Ichimoku Cloud@tv-basicstudies-1",
        palettes: {
          palette_0: {
            colors: {
              0: {
                name: "Color 0"
              },
              1: {
                name: "Color 1"
              }
            },
            valToIndex: {
              0: 0,
              1: 1
            }
          }
        },
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_3",
          objBId: "plot_4",
          type: "plot_plot",
          title: "Plots Background",
          isHidden: !1,
          palette: "palette_0"
        }],
        inputs: [{
          id: "symbol",
          name: "Another symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "in_0",
          name: "Conversion Line Periods",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "Base Line Periods",
          defval: 26,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_2",
          name: "Leading Span Periods",
          defval: 52,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_3",
          name: "Lagging Span Periods",
          defval: 26,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_4",
          name: "Leading Shift Periods",
          defval: 26,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        scriptIdPart: "",
        name: "Ichimoku Cloud",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.donchian = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = this._context.new_var(watchedValue_e),
            watchedValue_n = this._context.new_var(watchedValue_t);
          return o.avg(o.lowest(watchedValue_s, i, this._context), o.highest(watchedValue_n, i, this._context))
        }, this.f_1 = function() {
          var watchedValue_e = this._input(1),
            watchedValue_t = this._input(2),
            i = this._input(3),
            watchedValue_s = this._input(4) - 1,
            watchedValue_n = this._input(5) - 1,
            r = this._context.new_var(o.time(this._context)),
            watchedValue_a = o.close(this._context),
            l = o.low(this._context),
            c = o.high(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var h = this._context.new_var(o.time(this._context)),
              d = o.close(this._context),
              u = o.low(this._context),
              _ = o.high(this._context);
            watchedValue_a = this._context.new_var(d).adopt(h, r, 1), l = this._context.new_var(u).adopt(h, r, 1), c = this
              ._context.new_var(_).adopt(h, r, 1), this._context.select_sym(0)
          }
          var p = this.donchian(l, c, watchedValue_e),
            m = this.donchian(l, c, watchedValue_t),
            g = o.avg(p, m),
            f = this.donchian(l, c, i);
          return [p, m, watchedValue_a, g, f, -watchedValue_s, watchedValue_s, watchedValue_n, o.gt(g, f) ? 0 : 1]
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this.f_1();
          return [i[0], i[1], {
            value: i[2],
            offset: i[5]
          }, {
            value: i[3],
            offset: i[7]
          }, {
            value: i[4],
            offset: i[7]
          }, i[8]]
        }
      }
    }, {
      name: "Keltner Channels",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 95,
              visible: !0
            }
          },
          inputs: {
            in_0: !0,
            in_1: 20,
            in_2: 1
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Middle",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Keltner Channels",
        shortDescription: "KC",
        is_price_study: !0,
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_0",
          objBId: "plot_2",
          type: "plot_plot",
          title: "Plots Background"
        }],
        inputs: [{
          id: "in_0",
          name: "useTrueRange",
          defval: !0,
          type: "bool"
        }, {
          id: "in_1",
          name: "length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_2",
          name: "mult",
          defval: 1,
          type: "float",
          min: -1e12,
          max: 1e12
        }],
        id: "Keltner Channels@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Keltner Channels",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return watchedValue_e ? watchedValue_t : i - watchedValue_s
        }, this.f_1 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e + watchedValue_t * i
        }, this.f_2 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e - watchedValue_t * i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2),
            watchedValue_a = this._context.new_var(i),
            l = o.ema(watchedValue_a, watchedValue_n, this._context),
            c = this.f_0(watchedValue_s, o.tr(void 0, this._context), o.high(this._context), o.low(this._context)),
            h = this._context.new_var(c),
            d = o.ema(h, watchedValue_n, this._context);
          return [this.f_1(l, d, r), l, this.f_2(l, d, r)]
        }
      }
    }, {
      name: "Klinger Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Klinger Oscillator",
        shortDescription: "Klinger Oscillator",
        is_price_study: !1,
        inputs: [],
        id: "Klinger Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Klinger Oscillator",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return o.ge(watchedValue_e, 0) ? watchedValue_t : -watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.hlc3(this._context);
          this._context.setMinimumAdditionalDepth(66);
          var watchedValue_s = this._context.new_var(i),
            watchedValue_n = o.change(watchedValue_s),
            r = this.f_0(watchedValue_n, o.volume(this._context)),
            watchedValue_a = this._context.new_var(r),
            l = o.ema(watchedValue_a, 34, this._context),
            c = this._context.new_var(r),
            h = o.ema(c, 55, this._context),
            d = this.f_1(l, h),
            u = this._context.new_var(d);
          return [d, o.ema(u, 13, this._context)]
        }
      }
    }, {
      name: "Know Sure Thing",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: u
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: watchedValue_a
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 10,
            in_1: 15,
            in_2: 20,
            in_3: 30,
            in_4: 10,
            in_5: 10,
            in_6: 10,
            in_7: 15,
            in_8: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "KST",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.1
          },
          plot_1: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.11
          }
        },
        description: "Know Sure Thing",
        shortDescription: "KST",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "roclen1",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "roclen2",
          defval: 15,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_2",
          name: "roclen3",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_3",
          name: "roclen4",
          defval: 30,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_4",
          name: "smalen1",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_5",
          name: "smalen2",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_6",
          name: "smalen3",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_7",
          name: "smalen4",
          defval: 15,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_8",
          name: "siglen",
          defval: 9,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1"]
        }],
        id: "Know Sure Thing@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Know Sure Thing",
        format: {
          type: "price",
          precision: 4
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          return watchedValue_e + 2 * watchedValue_t + 3 * i + 4 * watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            r = this._input(3),
            watchedValue_a = this._input(4),
            l = this._input(5),
            c = this._input(6),
            h = this._input(7),
            d = this._input(8);
          this._context.setMinimumAdditionalDepth(Math.max(watchedValue_a + i, l + watchedValue_s, c + watchedValue_n, h + r) + d);
          var u = o.close(this._context),
            _ = i,
            p = this._context.new_var(u),
            m = o.roc(p, _),
            g = watchedValue_a,
            f = this._context.new_var(m),
            y = o.sma(f, g, this._context),
            v = watchedValue_s,
            S = this._context.new_var(u),
            b = o.roc(S, v),
            w = l,
            C = this._context.new_var(b),
            T = o.sma(C, w, this._context),
            P = watchedValue_n,
            x = this._context.new_var(u),
            M = o.roc(x, P),
            I = c,
            A = this._context.new_var(M),
            L = o.sma(A, I, this._context),
            k = r,
            E = this._context.new_var(u),
            D = o.roc(E, k),
            B = h,
            V = this._context.new_var(D),
            R = o.sma(V, B, this._context),
            N = this.f_0(y, T, L, R),
            O = this._context.new_var(N);
          return [N, o.sma(O, d, this._context)]
        }
      }
    }, {
      name: "Least Squares Moving Average",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 25,
            in_1: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Least Squares Moving Average",
        shortDescription: "LSMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 25,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e12,
          max: 1e12
        }],
        id: "Least Squares Moving Average@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Least Squares Moving Average",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.close(this._context),
            r = this._context.new_var(watchedValue_n);
          return [o.linreg(r, i, watchedValue_s)]
        }
      }
    }, {
      name: "Linear Regression Curve",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Linear Regression Curve",
        shortDescription: "LRC",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Linear Regression Curve@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Linear Regression Curve",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._context.new_var(i);
          return [o.linreg(watchedValue_n, watchedValue_s, 0)]
        }
      }
    }, {
      name: "Linear Regression Slope",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Linear Regression Slope@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Linear Regression Slope",
        description: "Linear Regression Slope",
        shortDescription: "Linear Regression Slope",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: c
            }
          },
          inputs: {
            periods: 14
          }
        },
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0
          }
        },
        inputs: [{
          id: "periods",
          type: "integer",
          name: "Periods",
          min: 2
        }],
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0)
        }, this.linregSlope = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s, o, watchedValue_n, r = 0,
            watchedValue_a = 0,
            l = 0,
            c = 0;
          for (watchedValue_s = 0; watchedValue_s < watchedValue_t; ++watchedValue_s) r += watchedValue_n = watchedValue_t - 1 - watchedValue_s + 1, watchedValue_a += o = watchedValue_e.get(watchedValue_s), l += watchedValue_n * watchedValue_n, c += o * watchedValue_n;
          return (watchedValue_t * c - r * watchedValue_a) / (watchedValue_t * l - r * r)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.close(this._context));
          return [this.linregSlope(i, this.period, 0)]
        }
      }
    }, {
      name: "MA Cross",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 4,
              plottype: 3,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9,
            in_1: 26
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Short",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Long",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Crosses",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "MA Cross",
        shortDescription: "MA Cross",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Short",
          defval: 9,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_0", "plot_2"]
        }, {
          id: "in_1",
          name: "Long",
          defval: 26,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1", "plot_2"]
        }],
        id: "MA Cross@tv-basicstudies-1",
        scriptIdPart: "",
        name: "MA Cross",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e ? watchedValue_t : o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.close(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.sma(r, i, this._context),
            l = this._context.new_var(watchedValue_n),
            c = o.sma(l, watchedValue_s, this._context),
            h = watchedValue_a,
            d = c,
            u = o.cross(watchedValue_a, c, this._context);
          return [h, d, this.f_0(u, watchedValue_a)]
        }
      }
    }, {
      name: "MA with EMA Cross",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#43A047"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 4,
              plottype: 3,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10,
            in_1: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "MA",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "EMA",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Crosses",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "MA with EMA Cross",
        shortDescription: "MA/EMA Cross",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length MA",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_0", "plot_2"]
        }, {
          id: "in_1",
          name: "Length EMA",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1", "plot_2"]
        }],
        id: "MA with EMA Cross@tv-basicstudies-1",
        scriptIdPart: "",
        name: "MA with EMA Cross",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e ? watchedValue_t : o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.close(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.sma(r, i, this._context),
            l = this._context.new_var(watchedValue_n),
            c = o.ema(l, watchedValue_s, this._context),
            h = watchedValue_a,
            d = c,
            u = o.cross(watchedValue_a, c, this._context);
          return [h, d, this.f_0(u, watchedValue_a)]
        }
      }
    }, {
      name: "Mass Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Mass Index",
        shortDescription: "Mass Index",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Mass Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Mass Index",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this.f_0(o.high(this._context), o.low(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.ema(watchedValue_n, 9, this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.ema(watchedValue_a, 9, this._context),
            c = this.f_1(r, l),
            h = this._context.new_var(c);
          return [o.sum(h, i, this._context)]
        }
      }
    }, {
      name: "McGinley Dynamic",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "McGinley Dynamic",
        shortDescription: "McGinley Dynamic",
        is_price_study: !0,
        is_hidden_study: !1,
        id: "mcginley_dynamic@tv-basicstudies-1",
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        scriptIdPart: "",
        name: "McGinley Dynamic",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = o.close(this._context),
            i = this._context.new_var(watchedValue_t),
            watchedValue_s = o.ema(i, watchedValue_e, this._context),
            watchedValue_n = this._context.new_var(),
            r = watchedValue_n.get(1) + (watchedValue_t - watchedValue_n.get(1)) / (watchedValue_e * o.pow(watchedValue_t / watchedValue_n.get(1), 4));
          return watchedValue_n.set(o.na(watchedValue_n.get(1)) ? watchedValue_s : o.nz(r, watchedValue_s)), [watchedValue_n.get(0)]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_0()
        }
      }
    }, {
      name: "Median Price",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        id: "Median Price@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Median Price",
        description: "Median Price",
        shortDescription: "Median Price",
        is_price_study: !0,
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#FF6D00"
            }
          },
          inputs: {}
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [o.hl2(this._context)]
        }
      }
    }, {
      name: "Momentum",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 10,
            in_1: "close"
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Mom",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 0
          }
        },
        description: "Momentum",
        shortDescription: "Mom",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }],
        id: "Momentum@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Momentum",
        format: {
          type: "inherit"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o[this._input(1)](this._context),
            watchedValue_n = this._context.new_var(watchedValue_s).get(i);
          return [watchedValue_n ? watchedValue_s - watchedValue_n : null]
        }
      }
    }, {
      name: "Money Flow Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#7E57C2"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 80
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 20
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#7E57C2",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Money Flow Index",
        shortDescription: "MFI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Money Flow@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Money Flow Index",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e * (o.le(watchedValue_t, 0) ? 0 : i)
        }, this.f_1 = function(watchedValue_e, watchedValue_t, i) {
          return watchedValue_e * (o.ge(watchedValue_t, 0) ? 0 : i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.hlc3(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.change(watchedValue_n),
            watchedValue_a = this.f_0(o.volume(this._context), r, watchedValue_s),
            l = this._context.new_var(watchedValue_a),
            c = o.sum(l, i, this._context),
            h = this.f_1(o.volume(this._context), r, watchedValue_s),
            d = this._context.new_var(h),
            u = o.sum(d, i, this._context);
          return [o.rsi(c, u)]
        }
      }
    }, {
      name: "Moving Average",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1
            }
          },
          inputs: {
            symbol: "",
            length: 9,
            source: "close",
            offset: 0,
            smoothingLine: "SMA",
            smoothingLength: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Moving Average",
        shortDescription: "MA",
        is_price_study: !0,
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "length",
          name: "Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "source",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }, {
          id: "offset",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }, {
          id: "smoothingLine",
          name: "Smoothing Line",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["smoothedMA"]
        }, {
          id: "smoothingLength",
          name: "Smoothing Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["smoothedMA"]
        }],
        id: "Moving Average@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average",
        format: {
          type: "inherit"
        },
        symbolSource: {
          type: "symbolInputSymbolSource",
          inputId: "symbol"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = o[this._input(2)](this._context),
            watchedValue_n = this._input(1),
            r = this._input(3),
            watchedValue_a = this._input(4),
            l = this._input(5);
          if (this._context.setMinimumAdditionalDepth(watchedValue_n + l), "" !== this._input(0)) {
            this._context.select_sym(1);
            var c = this._context.new_var(this._context.symbol.time),
              h = o[this._input(2)](this._context);
            watchedValue_s = this._context.new_var(h).adopt(c, i, 1), this._context.select_sym(0)
          }
          var d, u = this._context.new_var(watchedValue_s),
            _ = o.sma(u, watchedValue_n, this._context),
            p = this._context.new_var(_);
          return "EMA" === watchedValue_a ? d = o.ema(p, l, this._context) : "WMA" === watchedValue_a ? d = o.wma(p, l, this._context) :
            "SMA" === watchedValue_a && (d = o.sma(p, l, this._context)), [{
              value: _,
              offset: r
            }, {
              value: d,
              offset: r
            }]
        }
      }
    }, {
      name: "Moving Average Channel",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 20,
            in_1: 20,
            in_2: 0,
            in_3: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Upper",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Lower",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        filledAreas: [{
          id: "fill_0",
          objAId: "plot_0",
          objBId: "plot_1",
          type: "plot_plot",
          title: "Plots Background"
        }],
        description: "Moving Average Channel",
        shortDescription: "MAC",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Upper Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "Lower Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_2",
          name: "Upper Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }, {
          id: "in_3",
          name: "Lower Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }],
        id: "Moving Average Channel@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Channel",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.high(this._context),
            watchedValue_s = o.low(this._context),
            watchedValue_n = this._input(0),
            r = this._input(1),
            watchedValue_a = this._input(2),
            l = this._input(3),
            c = this._context.new_var(i),
            h = this._context.new_var(watchedValue_s);
          return [{
            value: o.sma(c, watchedValue_n, this._context),
            offset: watchedValue_a
          }, {
            value: o.sma(h, r, this._context),
            offset: l
          }]
        }
      }
    }, {
      name: "Moving Average Convergence/Divergence",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 5,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: c
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: d,
                  width: 1,
                  style: 0
                },
                1: {
                  color: h,
                  width: 1,
                  style: 0
                },
                2: {
                  color: watchedValue_n,
                  width: 1,
                  style: 0
                },
                3: {
                  color: "#FF5252",
                  width: 1,
                  style: 0
                }
              }
            }
          },
          inputs: {
            symbol: "",
            in_0: 12,
            in_1: 26,
            in_3: "close",
            in_2: 9,
            oscillatorMAType: "EMA",
            signalLineMAType: "EMA"
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }, {
          id: "plot_3",
          palette: "palette_0",
          target: "plot_0",
          type: "colorer"
        }],
        styles: {
          plot_0: {
            title: "Histogram",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "MACD",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "MACD",
        shortDescription: "MACD",
        is_price_study: !1,
        palettes: {
          palette_0: {
            colors: {
              0: {
                name: "Color 0"
              },
              1: {
                name: "Color 1"
              },
              2: {
                name: "Color 2"
              },
              3: {
                name: "Color 3"
              }
            }
          }
        },
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "in_0",
          name: "Fast Length",
          defval: 12,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "Slow Length",
          defval: 26,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_3",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }, {
          id: "in_2",
          name: "Signal Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 50
        }, {
          id: "oscillatorMAType",
          name: "Oscillator MA Type",
          defval: "EMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"]
        }, {
          id: "signalLineMAType",
          name: "Signal Line MA Type",
          defval: "EMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"]
        }],
        id: "Moving Average Convergence/Divergence@tv-basicstudies-1",
        scriptIdPart: "",
        name: "MACD",
        format: {
          type: "inherit"
        },
        symbolSource: {
          type: "symbolInputSymbolSource",
          inputId: "symbol"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_1 = function(watchedValue_e) {
          var watchedValue_t = watchedValue_e > 0 ? 1 : 3,
            i = o.change(this._context.new_var(watchedValue_e));
          return watchedValue_t - (o.le(i, 0) ? 0 : 1)
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = o[this._input(3)](this._context),
            watchedValue_n = this._input(1),
            r = this._input(2),
            watchedValue_a = this._input(4),
            l = this._input(5),
            c = this._input(6);
          if (this._context.setMinimumAdditionalDepth(Math.max(watchedValue_n, r) + watchedValue_a), "" !== this._input(0)) {
            this._context.select_sym(1);
            var h = this._context.new_var(this._context.symbol.time),
              d = o[this._input(3)](this._context);
            watchedValue_s = this._context.new_var(d).adopt(h, i, 0), this._context.select_sym(0)
          }
          var u, _, p = this._context.new_var(watchedValue_s);
          "EMA" === l ? u = o.ema(p, watchedValue_n, this._context) : "WMA" === l ? u = o.wma(p, watchedValue_n, this._context) :
            "SMA" === l && (u = o.sma(p, watchedValue_n, this._context)), "EMA" === l ? _ = o.ema(p, r, this._context) :
            "WMA" === l ? _ = o.wma(p, r, this._context) : "SMA" === l && (_ = o.sma(p, r, this._context));
          var m, g = this.f_0(u, _),
            f = this._context.new_var(g);
          "EMA" === c ? m = o.ema(f, watchedValue_a, this._context) : "WMA" === c ? m = o.wma(f, watchedValue_a, this._context) :
            "SMA" === c && (m = o.sma(f, watchedValue_a, this._context));
          var y = this.f_0(g, m);
          return [y, g, m, this.f_1(y)]
        }
      }
    }, {
      name: "Moving Average Exponential",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1
            }
          },
          inputs: {
            length: 9,
            source: "close",
            offset: 0,
            smoothingLine: "SMA",
            smoothingLength: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Moving Average Exponential",
        shortDescription: "EMA",
        is_price_study: !0,
        inputs: [{
          id: "length",
          name: "Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "source",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }, {
          id: "offset",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }, {
          id: "smoothingLine",
          name: "Smoothing Line",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["smoothedMA"]
        }, {
          id: "smoothingLength",
          name: "Smoothing Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["smoothedMA"]
        }],
        id: "Moving Average Exponential@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Exponential",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o[this._input(1)](this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(2),
            r = this._input(3),
            watchedValue_a = this._input(4);
          this._context.setMinimumAdditionalDepth(watchedValue_s + watchedValue_a);
          var l, c = this._context.new_var(i),
            h = o.ema(c, watchedValue_s, this._context),
            d = this._context.new_var(h);
          return "EMA" === r ? l = o.ema(d, watchedValue_a, this._context) : "WMA" === r ? l = o.wma(d, watchedValue_a, this._context) :
            "SMA" === r && (l = o.sma(d, watchedValue_a, this._context)), [{
              value: h,
              offset: watchedValue_n
            }, {
              value: l,
              offset: watchedValue_n
            }]
        }
      }
    }, {
      name: "Moving Average Weighted",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9,
            in_1: "close",
            in_2: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Moving Average Weighted",
        shortDescription: "WMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }, {
          id: "in_2",
          name: "Offset",
          defval: 0,
          type: "integer",
          min: -1e4,
          max: 1e4
        }],
        id: "Moving Average Weighted@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Weighted",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o[this._input(1)](this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(2),
            r = this._context.new_var(i);
          return [{
            value: o.wma(r, watchedValue_s, this._context),
            offset: watchedValue_n
          }]
        }
      }
    }, {
      name: "Moving Average Double",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        id: "Moving Average Double@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Double",
        description: "Moving Average Double",
        shortDescription: "Moving Average Double",
        is_price_study: !0,
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#2196F3"
            }
          },
          inputs: {
            symbol: "",
            firstPeriods: 14,
            secondPeriods: 21,
            method: "Simple"
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          },
          plot_1: {
            title: "Plot 2"
          }
        },
        inputs: [{
          id: "symbol",
          name: "Another symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "firstPeriods",
          name: "1st Period",
          type: "integer",
          defval: 14,
          min: 1,
          max: 1e4
        }, {
          id: "secondPeriods",
          name: "2nd Period",
          type: "integer",
          defval: 21,
          min: 1,
          max: 1e4
        }, {
          id: "method",
          name: "Method",
          type: "text",
          defval: "Simple",
          options: ["Simple", "Exponential", "Weighted"]
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.time(this._context)),
            watchedValue_s = o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(o.time(this._context)),
              r = o.close(this._context);
            watchedValue_s = this._context.new_var(r).adopt(watchedValue_n, i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, l, c = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(2) ? (watchedValue_a = o.ema(c, this._input(1), this._context), l = o.ema(c,
            this._input(2), this._context)) : "Weighted" === this._input(2) ? (watchedValue_a = o.wma(c, this._input(1),
            this._context), l = o.wma(c, this._input(2), this._context)) : (watchedValue_a = o.sma(c, this._input(1), this
            ._context), l = o.sma(c, this._input(2), this._context)), [watchedValue_a, l]
        }
      }
    }, {
      name: "Moving Average Triple",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Moving Average Triple@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Triple",
        description: "Moving Average Triple",
        shortDescription: "Moving Average Triple",
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              transparency: 0,
              trackPrice: !1,
              color: "#FF6D00"
            },
            plot_1: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#2196F3"
            },
            plot_2: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#26C6DA"
            }
          },
          inputs: {
            symbol: "",
            firstPeriods: 14,
            secondPeriods: 21,
            thirdPeriods: 35,
            method: "Simple"
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          },
          plot_1: {
            title: "Plot 2"
          },
          plot_2: {
            title: "Plot 3"
          }
        },
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "firstPeriods",
          name: "1st Period",
          type: "integer",
          defval: 14,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_0"]
        }, {
          id: "secondPeriods",
          name: "2nd Period",
          type: "integer",
          defval: 21,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_1"]
        }, {
          id: "thirdPeriods",
          name: "3rd Period",
          type: "integer",
          defval: 35,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_2"]
        }, {
          id: "method",
          name: "Method",
          type: "text",
          defval: "Simple",
          options: ["Simple", "Exponential", "Weighted"]
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(this._context.symbol.time),
              r = o.close(this._context);
            watchedValue_s = this._context.new_var(r).adopt(watchedValue_n, i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, l, c, h = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(4) ? (watchedValue_a = o.ema(h, this._input(1), this._context), l = o.ema(h,
              this._input(2), this._context), c = o.ema(h, this._input(3), this._context)) : "Weighted" === this
            ._input(4) ? (watchedValue_a = o.wma(h, this._input(1), this._context), l = o.wma(h, this._input(2), this
              ._context), c = o.wma(h, this._input(3), this._context)) : (watchedValue_a = o.sma(h, this._input(1), this
              ._context), l = o.sma(h, this._input(2), this._context), c = o.sma(h, this._input(3), this
              ._context)), [watchedValue_a, l, c]
        }
      }
    }, {
      name: "Moving Average Adaptive",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Moving Average Adaptive@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Adaptive",
        description: "Moving Average Adaptive",
        shortDescription: "Moving Average Adaptive",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              transparency: 0,
              trackPrice: !1,
              color: "#AB47BC"
            }
          },
          inputs: {
            periods: 10
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          }
        },
        inputs: [{
          id: "periods",
          name: "Period",
          type: "integer",
          defval: 10,
          min: 2,
          max: 1e4
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.periods = this._input(0)
        }, this.ama = function(watchedValue_e, watchedValue_t) {
          var i = this.periods,
            watchedValue_s = this._context.new_var(),
            watchedValue_n = watchedValue_e.get(),
            r = o.stdev(watchedValue_t, i, this._context),
            watchedValue_a = o.log(watchedValue_n / watchedValue_e.get(i)) / (r * Math.sqrt(i)),
            l = .1 * Math.abs(watchedValue_a),
            c = (watchedValue_n - watchedValue_s.get(1)) * l + watchedValue_s.get(1);
          return watchedValue_s.set(isNaN(c) ? watchedValue_n : c), c
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.close(this._context)),
            watchedValue_s = this._context.new_var(o.log(i.get() / i.get(1)));
          return [this.ama(i, watchedValue_s)]
        }
      }
    }, {
      name: "Moving Average Hamming",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Moving Average Hamming@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Hamming",
        description: "Moving Average Hamming",
        shortDescription: "Moving Average Hamming",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              transparency: 0,
              trackPrice: !1,
              color: "#4CAF50"
            }
          },
          inputs: {
            periods: 10
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          }
        },
        inputs: [{
          id: "periods",
          name: "Period",
          type: "integer",
          defval: 10,
          min: 1,
          max: 1e4
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.periods = this._input(0);
          for (var i = [], watchedValue_s = 0, o = 1; o <= this.periods; ++o) {
            var watchedValue_n = Math.sin((1 + o) / this.periods * Math.PI / 2);
            i.unshift(watchedValue_n), watchedValue_s += watchedValue_n
          }
          this.hmaFactors = i, this.hmaFactorsSum = watchedValue_s
        }, this.hma = function(watchedValue_e) {
          for (var watchedValue_t = this.periods, i = 0, watchedValue_s = 0; watchedValue_s < watchedValue_t; ++watchedValue_s) i += watchedValue_e.get(watchedValue_t - watchedValue_s - 1) * this.hmaFactors[watchedValue_s];
          return i /= this.hmaFactorsSum
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.close(this._context));
          return [this.hma(i)]
        }
      }
    }, {
      name: "Moving Average Multiple",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Moving Average Multiple@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Moving Average Multiple",
        description: "Moving Average Multiple",
        shortDescription: "Moving Average Multiple",
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }, {
          id: "plot_3",
          type: "line"
        }, {
          id: "plot_4",
          type: "line"
        }, {
          id: "plot_5",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              transparency: 0,
              trackPrice: !1,
              color: "#9C27B0"
            },
            plot_1: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#FF6D00"
            },
            plot_2: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#43A047"
            },
            plot_3: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#26C6DA"
            },
            plot_4: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#F50057"
            },
            plot_5: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              transparency: 0,
              plottype: 0,
              trackPrice: !1,
              color: "#2196F3"
            }
          },
          inputs: {
            symbol: "",
            firstPeriods: 14,
            secondPeriods: 21,
            thirdPeriods: 35,
            fourthPeriods: 50,
            fifthPeriods: 100,
            sixthPeriods: 200,
            method: "Simple"
          }
        },
        styles: {
          plot_0: {
            title: "Plot 1"
          },
          plot_1: {
            title: "Plot 2"
          },
          plot_2: {
            title: "Plot 3"
          },
          plot_3: {
            title: "Plot 4"
          },
          plot_4: {
            title: "Plot 5"
          },
          plot_5: {
            title: "Plot 6"
          }
        },
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "firstPeriods",
          name: "1st Period",
          type: "integer",
          defval: 14,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_0"]
        }, {
          id: "secondPeriods",
          name: "2nd Period",
          type: "integer",
          defval: 21,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_1"]
        }, {
          id: "thirdPeriods",
          name: "3rd Period",
          type: "integer",
          defval: 35,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_2"]
        }, {
          id: "fourthPeriods",
          name: "4th Period",
          type: "integer",
          defval: 50,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_3"]
        }, {
          id: "fifthPeriods",
          name: "5th Period",
          type: "integer",
          defval: 100,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_4"]
        }, {
          id: "sixthPeriods",
          name: "6th Period",
          type: "integer",
          defval: 200,
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["plot_5"]
        }, {
          id: "method",
          name: "Method",
          type: "text",
          defval: "Simple",
          options: ["Simple", "Exponential", "Weighted"]
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(this._context.symbol.time),
              r = o.close(this._context);
            watchedValue_s = this._context.new_var(r).adopt(watchedValue_n, i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, l, c, h, d, u, _ = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(7) ? (watchedValue_a = o.ema(_, this._input(1), this._context), l = o.ema(_,
            this._input(2), this._context), c = o.ema(_, this._input(3), this._context), h = o.ema(_, this
            ._input(4), this._context), d = o.ema(_, this._input(5), this._context), u = o.ema(_, this
            ._input(6), this._context)) : "Weighted" === this._input(7) ? (watchedValue_a = o.wma(_, this._input(1), this
            ._context), l = o.wma(_, this._input(2), this._context), c = o.wma(_, this._input(3), this
            ._context), h = o.wma(_, this._input(4), this._context), d = o.wma(_, this._input(5), this
            ._context), u = o.wma(_, this._input(6), this._context)) : (watchedValue_a = o.sma(_, this._input(1), this
            ._context), l = o.sma(_, this._input(2), this._context), c = o.sma(_, this._input(3), this
            ._context), h = o.sma(_, this._input(4), this._context), d = o.sma(_, this._input(5), this
            ._context), u = o.sma(_, this._input(6), this._context)), [watchedValue_a, l, c, h, d, u]
        }
      }
    }, {
      name: "Majority Rule",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Majority Rule@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Majority Rule",
        description: "Majority Rule",
        shortDescription: "Majority Rule",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: c
            }
          },
          inputs: {
            rollingPeriod: 14
          }
        },
        styles: {
          plot_0: {
            title: "Majority Rule"
          }
        },
        inputs: [{
          id: "rollingPeriod",
          type: "integer",
          name: "Rolling Period",
          min: 1
        }],
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.rollingPeriod = this._input(0)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i, watchedValue_s = o.close(this._context);
          return i = watchedValue_s > this._context.new_var(watchedValue_s).get(1) ? 1 : 0, [100 * o.sma(this._context.new_var(i), this
            .rollingPeriod, this._context)]
        }
      }
    }, {
      name: "Net Volume",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Net Volume",
        shortDescription: "Net Volume",
        is_price_study: !1,
        inputs: [],
        id: "Net Volume@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Net Volume",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return o.gt(watchedValue_e, 0) ? watchedValue_t : o.lt(i, 0) ? -watchedValue_t : 0 * watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._context.new_var(i),
            watchedValue_n = o.change(watchedValue_s);
          return [this.f_0(watchedValue_n, o.volume(this._context), watchedValue_n)]
        }
      }
    }, {
      name: "On Balance Volume",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1
            }
          },
          inputs: {
            smoothingLine: "SMA",
            smoothingLength: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "On Balance Volume",
        shortDescription: "OBV",
        is_price_study: !1,
        inputs: [{
          id: "smoothingLine",
          name: "Smoothing Line",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["smoothedMA"]
        }, {
          id: "smoothingLength",
          name: "Smoothing Length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["smoothedMA"]
        }],
        id: "On Balance Volume@tv-basicstudies-1",
        scriptIdPart: "",
        name: "On Balance Volume",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return o.gt(watchedValue_e, 0) ? watchedValue_t : o.lt(i, 0) ? -watchedValue_t : 0 * watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.close(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.change(r),
            l = this.f_0(watchedValue_a, o.volume(this._context), watchedValue_a),
            c = o.cum(l, this._context);
          this._context.setMinimumAdditionalDepth(watchedValue_s);
          var h, d = this._context.new_var(c);
          return "EMA" === i ? h = o.ema(d, watchedValue_s, this._context) : "WMA" === i ? h = o.wma(d, watchedValue_s, this._context) :
            "SMA" === i && (h = o.sma(d, watchedValue_s, this._context)), [c, h]
        }
      }
    }, {
      name: "Parabolic SAR",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 3,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: .02,
            in_1: .02,
            in_2: .2,
            symbol: ""
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Parabolic SAR",
        shortDescription: "SAR",
        is_price_study: !0,
        inputs: [{
          id: "symbol",
          name: "Other Symbol",
          defval: "",
          type: "symbol",
          optional: !0,
          isHidden: !1
        }, {
          id: "in_0",
          name: "start",
          defval: .02,
          type: "float",
          min: -1e12,
          max: 1e12
        }, {
          id: "in_1",
          name: "increment",
          defval: .02,
          type: "float",
          min: -1e12,
          max: 1e12
        }, {
          id: "in_2",
          name: "maximum",
          defval: .2,
          type: "float",
          min: -1e12,
          max: 1e12
        }],
        id: "Parabolic SAR@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Parabolic SAR",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          const i = () => o.sar(this._input(1), this._input(2), this._input(3), this._context);
          if ("" === this._input(0)) return [i()];
          this._context.select_sym(0);
          const watchedValue_s = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const watchedValue_n = this._context.new_var(i()).adopt(this._context.new_var(this._context.symbol.time), watchedValue_s, 1);
          return this._context.select_sym(0), [watchedValue_n]
        }
      }
    }, {
      name: "Price Channel",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#F50057"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#F50057"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 20,
            in_1: 0
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Highprice Line",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Lowprice Line",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Centerprice Line",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Price Channel",
        shortDescription: "PC",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "Offset Length",
          defval: 0,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Price Channel@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Price Channel",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.high(this._context),
            watchedValue_s = this._context.new_var(i),
            watchedValue_n = o.low(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = this._input(0),
            l = this._input(1),
            c = o.highest(watchedValue_s, watchedValue_a, this._context),
            h = o.lowest(r, watchedValue_a, this._context);
          return [{
            value: c,
            offset: l
          }, {
            value: h,
            offset: l
          }, {
            value: o.avg(c, h),
            offset: l
          }]
        }
      }
    }, {
      name: "Price Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: u
            }
          },
          inputs: {
            in_0: 10,
            in_1: 21
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Price Oscillator",
        shortDescription: "PPO",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "shortlen",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "longlen",
          defval: 21,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Price Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Price Oscillator",
        format: {
          type: "price",
          precision: 2
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return (watchedValue_e - watchedValue_t) / watchedValue_t * 100
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._context.new_var(i),
            watchedValue_a = o.sma(r, watchedValue_s, this._context),
            l = this._context.new_var(i),
            c = o.sma(l, watchedValue_n, this._context);
          return [this.f_0(watchedValue_a, c)]
        }
      }
    }, {
      name: "Price Volume Trend",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {}
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "PVT",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Price Volume Trend",
        shortDescription: "PVT",
        is_price_study: !1,
        is_hidden_study: !1,
        id: "price_volume_trend@tv-basicstudies-1",
        inputs: [],
        scriptIdPart: "",
        name: "Price Volume Trend",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._context.new_var(o.close(this._context));
          return [o.cum(o.change(watchedValue_e) / watchedValue_e.get(1) * o.volume(this._context), this._context)]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e,
            this._input = watchedValue_t, [this.f_0()[0]]
        }
      }
    }, {
      name: "Rank Correlation Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 12
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "RCI",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 1
          }
        },
        description: "Rank Correlation Index",
        shortDescription: "RCI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero Line",
          isHidden: !1,
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 12,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "rank_correlation_index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Rank Correlation Index",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.orderRank = function(watchedValue_e, watchedValue_t, i) {
          let watchedValue_s = watchedValue_e.get(watchedValue_t),
            watchedValue_n = 1,
            r = 0;
          for (let watchedValue_t = 0; watchedValue_t < i; watchedValue_t++) {
            const i = watchedValue_e.get(watchedValue_t);
            if (o.na(i)) return o.na();
            watchedValue_s < i ? watchedValue_n += 1 : watchedValue_s === i && (r += 1)
          }
          return watchedValue_n + (r - 1) / 2
        }, this.rankDifferences = function(watchedValue_e, watchedValue_t) {
          var i = 0;
          for (let watchedValue_s = 0; watchedValue_s < watchedValue_t; watchedValue_s++) i += Math.pow(watchedValue_s + 1 - this.orderRank(watchedValue_e, watchedValue_s, watchedValue_t), 2);
          return i
        }, this.rci = function(watchedValue_e, watchedValue_t) {
          return 1 - 6 * this.rankDifferences(watchedValue_e, watchedValue_t) / (watchedValue_t * (watchedValue_t * watchedValue_t - 1))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          var i = watchedValue_e.new_var(o.close(watchedValue_e)),
            watchedValue_s = watchedValue_t(0);
          return [this.rci(i, watchedValue_s)]
        }
      }
    }, {
      name: "Rate Of Change",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "ROC",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1,
            zorder: 1
          }
        },
        description: "Rate Of Change",
        shortDescription: "ROC",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero Line",
          isHidden: !1,
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "rate_of_change@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Rate Of Change",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.close(this._context)),
            watchedValue_s = this._input(0);
          return [100 * (i.get(0) - i.get(watchedValue_s)) / i.get(watchedValue_s)]
        }
      }
    }, {
      name: "Relative Strength Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#7E57C2"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 70,
            zorder: -1.1
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 50,
            zorder: -1.11
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 30,
            zorder: -1.111
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#7E57C2",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            length: 14,
            smoothingLine: "SMA",
            smoothingLength: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 2
          }
        },
        description: "Relative Strength Index",
        shortDescription: "RSI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_2",
          name: "MiddleLimit",
          zorder: -1.11
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.111
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "length",
          name: "Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "smoothingLine",
          name: "Smoothing Line",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["smoothedMA"]
        }, {
          id: "smoothingLength",
          name: "Smoothing Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e4,
          hideWhenPlotsHidden: ["smoothedMA"]
        }],
        id: "Relative Strength Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Relative Strength Index",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e) {
          return o.max(watchedValue_e, 0)
        }, this.f_1 = function(watchedValue_e) {
          return -o.min(watchedValue_e, 0)
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return o.eq(watchedValue_e, 0) ? 100 : o.eq(watchedValue_t, 0) ? 0 : 100 - 100 / (1 + watchedValue_t / watchedValue_e)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_s + r);
          var watchedValue_a, l = this._context.new_var(i),
            c = o.change(l),
            h = this.f_0(c),
            d = this._context.new_var(h),
            u = o.rma(d, watchedValue_s, this._context),
            _ = this.f_1(c),
            p = this._context.new_var(_),
            m = o.rma(p, watchedValue_s, this._context),
            g = this.f_2(m, u),
            f = this._context.new_var(g);
          return "EMA" === watchedValue_n ? watchedValue_a = o.ema(f, r, this._context) : "WMA" === watchedValue_n ? watchedValue_a = o.wma(f, r, this._context) :
            "SMA" === watchedValue_n && (watchedValue_a = o.sma(f, r, this._context)), [{
              value: g
            }, {
              value: watchedValue_a
            }]
        }
      }
    }, {
      name: "Relative Vigor Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: u
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: watchedValue_a
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "RVGI",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Relative Vigor Index",
        shortDescription: "RVGI",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Relative Vigor Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Relative Vigor Index",
        format: {
          precision: 4,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this.f_0(o.close(this._context), o.open(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.swma(watchedValue_n, this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.sum(watchedValue_a, i, this._context),
            c = this.f_0(o.high(this._context), o.low(this._context)),
            h = this._context.new_var(c),
            d = o.swma(h, this._context),
            u = this._context.new_var(d),
            _ = o.sum(u, i, this._context),
            p = this.f_1(l, _),
            m = this._context.new_var(p);
          return [p, o.swma(m, this._context)]
        }
      }
    }, {
      name: "Relative Volatility Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#7E57C2"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 80
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 20
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#7E57C2",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Relative Volatility Index",
        shortDescription: "RVI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Relative Volatility Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Relative Volatility Index",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return o.le(watchedValue_e, 0) ? 0 : watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return o.gt(watchedValue_e, 0) ? 0 : watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / (watchedValue_e + watchedValue_t) * 100
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0);
          this._context.setMinimumAdditionalDepth(i + 12);
          var watchedValue_s = o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.stdev(watchedValue_n, i, this._context),
            watchedValue_a = this._context.new_var(watchedValue_s),
            l = o.change(watchedValue_a),
            c = this.f_0(l, r),
            h = this._context.new_var(c),
            d = o.ema(h, 14, this._context),
            u = this.f_1(l, r),
            _ = this._context.new_var(u),
            p = o.ema(_, 14, this._context);
          return [this.f_2(d, p)]
        }
      }
    }, {
      name: "SMI Ergodic Indicator/Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 1,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: c
            }
          },
          inputs: {
            in_0: 5,
            in_1: 20,
            in_2: 5
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Indicator",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Oscillator",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "SMI Ergodic Indicator/Oscillator",
        shortDescription: "SMIIO",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "shortlen",
          defval: 5,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_1",
          name: "longlen",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3
        }, {
          id: "in_2",
          name: "siglen",
          defval: 5,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1"]
        }],
        id: "SMI Ergodic Indicator/Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "SMI Ergodic Indicator/Oscillator",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(i + watchedValue_s + watchedValue_n);
          var r = o.close(this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.tsi(watchedValue_a, i, watchedValue_s, this._context),
            c = this._context.new_var(l),
            h = o.ema(c, watchedValue_n, this._context);
          return [l, h, this.f_0(l, h)]
        }
      }
    }, {
      name: "Smoothed Moving Average",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#673AB7"
            }
          },
          inputs: {
            in_0: 7,
            in_1: "close"
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Smoothed Moving Average",
        shortDescription: "SMMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 7,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "Source",
          defval: "close",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }],
        id: "smoothed_moving_average@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Smoothed Moving Average",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = o[this._input(1)](this._context);
          return [o.smma(watchedValue_t, watchedValue_e, this._context)]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_0()
        }
      }
    }, {
      name: "Standard Deviation",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        id: "Standard Deviation@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Standard Deviation",
        description: "Standard Deviation",
        shortDescription: "Standard Deviation",
        is_price_study: !1,
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: u
            }
          },
          inputs: {
            periods: 5,
            deviations: 1
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "periods",
          name: "Periods",
          type: "integer"
        }, {
          id: "deviations",
          name: "Deviations",
          type: "float"
        }],
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._context.new_var(o.close(this._context));
          return [o.stdev(watchedValue_n, i, this._context) * watchedValue_s]
        }
      }
    }, {
      name: "Stochastic",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 80
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 20
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 14,
            in_1: 1,
            in_2: 3
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "%K",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.1
          },
          plot_1: {
            title: "%D",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.11
          }
        },
        description: "Stochastic",
        shortDescription: "Stoch",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "%K Length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "%K Smoothing",
          defval: 1,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_2",
          name: "%D Smoothing",
          defval: 3,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "Stochastic@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Stochastic",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(i + watchedValue_s + watchedValue_n);
          var r = o.close(this._context),
            watchedValue_a = o.high(this._context),
            l = o.low(this._context),
            c = this._context.new_var(r),
            h = this._context.new_var(watchedValue_a),
            d = this._context.new_var(l),
            u = o.stoch(c, h, d, i, this._context),
            _ = this._context.new_var(u),
            p = o.sma(_, watchedValue_s, this._context),
            m = this._context.new_var(p);
          return [p, o.sma(m, watchedValue_n, this._context)]
        }
      }
    }, {
      name: "Stochastic RSI",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#FF6D00"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 80
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 20
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#2196F3",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 14,
            in_1: 14,
            in_2: 3,
            in_3: 3
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "%K",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.1
          },
          plot_1: {
            title: "%D",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.11
          }
        },
        description: "Stochastic RSI",
        shortDescription: "Stoch RSI",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "lengthRSI",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_1",
          name: "lengthStoch",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_2",
          name: "smoothK",
          defval: 3,
          type: "integer",
          min: 1,
          max: 1e4
        }, {
          id: "in_3",
          name: "smoothD",
          defval: 3,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "Stochastic RSI@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Stochastic RSI",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_1 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = i.new_var(o.max(o.change(watchedValue_e), 0));
          return o.rma(watchedValue_s, watchedValue_t, i)
        }, this.f_2 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = i.new_var(-o.min(o.change(watchedValue_e), 0));
          return o.rma(watchedValue_s, watchedValue_t, i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2),
            watchedValue_a = this._input(3);
          watchedValue_e.setMinimumAdditionalDepth(watchedValue_s + watchedValue_n + r + watchedValue_a);
          var l = this._context.new_var(i),
            c = o.rsi(this.f_1(l, watchedValue_s, this._context), this.f_2(l, watchedValue_s, this._context)),
            h = this._context.new_var(c),
            d = this._context.new_var(c),
            u = this._context.new_var(c),
            _ = o.stoch(h, d, u, watchedValue_n, this._context),
            p = this._context.new_var(_),
            m = o.sma(p, r, this._context),
            g = this._context.new_var(m);
          return [m, o.sma(g, watchedValue_a, this._context)]
        }
      }
    }, {
      name: "TRIX",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: watchedValue_a
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 18
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "TRIX",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "TRIX",
        shortDescription: "TRIX",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 18,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "TRIX@tv-basicstudies-1",
        scriptIdPart: "",
        name: "TRIX",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e) {
          return o.log(watchedValue_e)
        }, this.f_1 = function(watchedValue_e) {
          return 1e4 * watchedValue_e
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0);
          watchedValue_e.setMinimumAdditionalDepth(3 * i);
          var watchedValue_s = this.f_0(o.close(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.ema(watchedValue_n, i, this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.ema(watchedValue_a, i, this._context),
            c = this._context.new_var(l),
            h = o.ema(c, i, this._context),
            d = this._context.new_var(h),
            u = o.change(d);
          return [this.f_1(u)]
        }
      }
    }, {
      name: "Triple EMA",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 9
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Triple EMA",
        shortDescription: "TEMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 9,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "Triple EMA@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Triple EMA",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return 3 * (watchedValue_e - watchedValue_t) + i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0);
          this._context.setMinimumAdditionalDepth(3 * i);
          var watchedValue_s = o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.ema(watchedValue_n, i, this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.ema(watchedValue_a, i, this._context),
            c = this._context.new_var(l),
            h = o.ema(c, i, this._context);
          return [this.f_0(r, l, h)]
        }
      }
    }, {
      name: "True Strength Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#E91E63"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 25,
            in_1: 13,
            in_2: 13
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "True Strength Index",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.1
          },
          plot_1: {
            title: "Signal",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1.11
          }
        },
        description: "True Strength Index",
        shortDescription: "True Strength Index",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "long",
          defval: 25,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_1",
          name: "short",
          defval: 13,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_2",
          name: "siglen",
          defval: 13,
          type: "integer",
          min: 1,
          max: 4999,
          hideWhenPlotsHidden: ["plot_1"]
        }],
        id: "True Strength Indicator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "True Strength Index",
        format: {
          precision: 4,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(this._input(0) + this._input(1) + this._input(2));
          var r = o.close(this._context),
            watchedValue_a = this._context.new_var(r),
            l = o.tsi(watchedValue_a, watchedValue_s, i, this._context),
            c = this._context.new_var(l);
          return [l, o.ema(c, watchedValue_n, this._context)]
        }
      }
    }, {
      name: "Trend Strength Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Trend Strength Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Trend Strength Index",
        description: "Trend Strength Index",
        shortDescription: "Trend Strength Index",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: c
            }
          },
          inputs: {
            periods: 14
          }
        },
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0
          }
        },
        inputs: [{
          id: "periods",
          type: "integer",
          name: "Periods"
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.invertedPeriod = 1 / this
            .period, this.sumX = (this.period - 1) * this.period / 2, this.sumXX = (this.period - 1) * this
            .period * (2 * this.period - 1) / 6, this.invertedPeriodSumXSumX = this.invertedPeriod * this.sumX *
            this.sumX
        }, this.trendStrengthIndex = function() {
          for (var watchedValue_e = this._context.new_var(o.close(this._context)), watchedValue_t = o.sum(watchedValue_e, this.period, this._context),
              i = 0, watchedValue_s = 0, watchedValue_n = 0; watchedValue_n < this.period; watchedValue_n++) {
            var r = watchedValue_e.get(watchedValue_n);
            watchedValue_s += (this.period - 1 - watchedValue_n) * r, i += r * r
          }
          var watchedValue_a = watchedValue_s - this.invertedPeriod * this.sumX * watchedValue_t,
            l = (this.sumXX - this.invertedPeriodSumXSumX) * (i - this.invertedPeriod * watchedValue_t * watchedValue_t);
          return l < 0 ? 0 == watchedValue_a ? 0 : watchedValue_a > 0 ? 1 : -1 : watchedValue_a / (l = Math.sqrt(l))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.trendStrengthIndex()]
        }
      }
    }, {
      name: "Typical Price",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        id: "TypicalPrice@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Typical Price",
        description: "Typical Price",
        shortDescription: "Typical Price",
        is_price_study: !0,
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#FF6D00"
            }
          },
          inputs: {}
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [o.hlc3(this._context)]
        }
      }
    }, {
      name: "Ultimate Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: watchedValue_a
            }
          },
          inputs: {
            in_0: 7,
            in_1: 14,
            in_2: 28
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "UO",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Ultimate Oscillator",
        shortDescription: "UO",
        is_price_study: !1,
        inputs: [{
          id: "in_0",
          name: "length7",
          defval: 7,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_1",
          name: "length14",
          defval: 14,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_2",
          name: "length28",
          defval: 28,
          type: "integer",
          min: 1,
          max: 1e12
        }],
        id: "ultimate_oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Ultimate Oscillator",
        format: {
          precision: 2,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = this._context.new_var(watchedValue_e),
            watchedValue_n = this._context.new_var(watchedValue_t);
          return [o.sum(watchedValue_s, i, this._context) / o.sum(watchedValue_n, i, this._context)]
        }, this.f_1 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._input(1),
            i = this._input(2),
            watchedValue_s = this._context.new_var(o.close(this._context)),
            watchedValue_n = o.max(o.high(this._context), watchedValue_s.get(1)),
            r = this._context.new_var(o.close(this._context)),
            watchedValue_a = o.min(o.low(this._context), r.get(1)),
            l = o.close(this._context) - watchedValue_a,
            c = watchedValue_n - watchedValue_a,
            h = this.f_0(l, c, watchedValue_e),
            d = this.f_0(l, c, watchedValue_t),
            u = this.f_0(l, c, i);
          return [100 * (4 * h[0] + 2 * d[0] + u[0]) / 7]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_1()
        }
      }
    }, {
      name: "Volatility Close-to-Close",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Volatility Close-to-Close@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Volatility Close-to-Close",
        description: "Volatility Close-to-Close",
        shortDescription: "Volatility Close-to-Close",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#2196F3"
            }
          },
          inputs: {
            periods: 10,
            daysPerYear: 252
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "periods",
          name: "Periods",
          type: "integer",
          defval: 10,
          min: 2
        }, {
          id: "daysPerYear",
          name: "Days Per Year",
          type: "integer",
          defval: 252,
          min: 1,
          max: 366
        }],
        format: {
          precision: 2,
          type: "percent"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.daysPerYear = this._input(1)
        }, this.stdev = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = this.variance(watchedValue_e, watchedValue_t, i);
          return o.sqrt(watchedValue_s)
        }, this.variance = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s = o.sma(watchedValue_e, watchedValue_t, i);
          return this.variance2(watchedValue_e, watchedValue_s, watchedValue_t)
        }, this.variance2 = function(watchedValue_e, watchedValue_t, i) {
          var watchedValue_s, o, watchedValue_n = 0;
          for (watchedValue_s = 0; watchedValue_s < i; watchedValue_s++) watchedValue_n += (o = watchedValue_e.get(watchedValue_s) - watchedValue_t) * o;
          return watchedValue_n / (i - 1)
        }, this.standardHistVol = function() {
          var watchedValue_e = this._context.new_var(o.close(this._context)),
            watchedValue_t = this._context.new_var(o.log(watchedValue_e.get() / watchedValue_e.get(1)));
          return 100 * this.stdev(watchedValue_t, this.period, this._context) * o.sqrt(this.daysPerYear)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.standardHistVol()]
        }
      }
    }, {
      name: "Volatility Zero Trend Close-to-Close",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Volatility Zero Trend Close-to-Close@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Volatility Zero Trend Close-to-Close",
        description: "Volatility Zero Trend Close-to-Close",
        shortDescription: "Volatility Zero Trend Close-to-Close",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: "#2196F3"
            }
          },
          inputs: {
            periods: 10,
            daysPerYear: 252
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "periods",
          name: "Periods",
          type: "integer",
          min: 0,
          max: 1e4
        }, {
          id: "daysPerYear",
          name: "Days Per Year",
          type: "integer"
        }],
        format: {
          precision: 2,
          type: "percent"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.daysPerYear = this._input(1)
        }, this.volatliityZTCTC = function() {
          this._context.setMinimumAdditionalDepth(this._input(0) + 1);
          for (var watchedValue_e = this._context.new_var(o.close(this._context)), watchedValue_t = this._context.new_var(watchedValue_e.symbol.time),
              i = Math.sqrt((watchedValue_t.get(0) - watchedValue_t.get(1)) / 864e5 / this.daysPerYear), watchedValue_s = Math.log(o.close(this
                ._context) / watchedValue_e.get(1)), watchedValue_n = this._context.new_var(watchedValue_s / i), r = this._context.new_var(Math.pow(watchedValue_n,
                2)), watchedValue_a = 0, l = 0; l < this.period; l++) watchedValue_a += r.get(l);
          return 100 * Math.sqrt(watchedValue_a / this.period)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.volatliityZTCTC()]
        }
      }
    }, {
      name: "Volatility O-H-L-C",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !1,
        id: "Volatility O-H-L-C@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Volatility O-H-L-C",
        description: "Volatility O-H-L-C",
        shortDescription: "Volatility O-H-L-C",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: c
            }
          },
          inputs: {
            periods: 10,
            marketClosedPercentage: 0,
            daysPerYear: 252
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "periods",
          type: "integer",
          name: "Periods"
        }, {
          id: "marketClosedPercentage",
          type: "float",
          name: "Market Closed Percentage",
          min: 0,
          max: .999
        }, {
          id: "daysPerYear",
          type: "integer",
          name: "Days Per Year"
        }],
        format: {
          precision: 2,
          type: "percent"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this.period = this._input(0), this.marketClosedPercentage = this
            ._input(1), this.daysPerYear = this._input(2), this.secondsPerYear = 86400 * this.daysPerYear
        }, this.square = function(watchedValue_e) {
          return watchedValue_e * watchedValue_e
        }, this.volatilityOHLC = function() {
          var watchedValue_e = this._context.new_var(Math.log(o.open(this._context))),
            watchedValue_t = this._context.new_var(Math.log(o.high(this._context))),
            i = this._context.new_var(Math.log(o.low(this._context))),
            watchedValue_s = this._context.new_var(Math.log(o.close(this._context))),
            watchedValue_n = this._context.new_var(o.close(this._context)),
            r = this._context.new_var(watchedValue_n.symbol.time),
            watchedValue_a = (r.get(0) - r.get(1)) / 1e3,
            l = .5 * this.square(watchedValue_t.get() - i.get());
          l -= (Math.log(4) - 1) * this.square(watchedValue_s.get() - watchedValue_e.get()), this.marketClosedPercentage > 0 && (l = .12 *
            this.square(watchedValue_e.get() - watchedValue_s.get(1)) / this.marketClosedPercentage + .88 * l / (1 - this
              .marketClosedPercentage)), l /= watchedValue_a, l *= this.secondsPerYear;
          var c = this._context.new_var(l);
          return 100 * Math.sqrt(o.sum(c, this.period, this._context) / this.period)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.volatilityOHLC()]
        }
      }
    }, {
      name: "Volatility Index",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        is_price_study: !0,
        id: "Volatility Index@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Volatility Index",
        description: "Volatility Index",
        shortDescription: "Volatility Index",
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              visible: !0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              color: c
            }
          },
          inputs: {
            periods: 10,
            atrMult: 3,
            method: "Wilder Smoothing"
          }
        },
        styles: {
          plot_0: {
            title: "Plot"
          }
        },
        inputs: [{
          id: "periods",
          name: "Periods",
          type: "integer"
        }, {
          id: "atrMult",
          name: "ATR Mult",
          type: "float"
        }, {
          id: "method",
          name: "Method",
          type: "text",
          defval: "Exponential",
          options: ["Exponential", "Wilder Smoothing"]
        }],
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t,
            this.period = this._input(0), this.atrMult = this._input(1), this.maMethod = this._input(2), this
            .nextsar = null, this.position = null, this.sic = null, this.bars = [], this.count = 0, this
            .lastSar = null, this._context.setMinimumAdditionalDepth("Exponential" === this.maMethod ? 2 * this
              .period + 2 : this.period)
        }, this.computeATR = function() {
          var watchedValue_e = o.high(this._context) - o.low(this._context),
            watchedValue_t = o.high(this._context) - this.bars[this.bars.length - 2],
            i = this.bars[this.bars.length - 2] - o.low(this._context);
          return this.tr = Math.max(watchedValue_e, watchedValue_t, i), "Exponential" === this.maMethod ? this.atr = o.ema(this._context
            .new_var(this.tr), this.period, this._context) : this.atr = this.tr / this.period + (1 - 1 / this
            .period) * this.atr, this.atr * this.atrMult
        }, this.calculateVolatility = function() {
          if (o.close(this._context) === this.bars[this.bars.length - 1]) return this.lastSar;
          if (this.bars.push(o.close(this._context)), 1 === this.count) this.atr = o.high(this._context) - o
            .low(this._context), this.sic = o.close(this._context);
          else if (this.count < this.period) {
            var watchedValue_e = o.high(this._context) - o.low(this._context),
              watchedValue_t = o.high(this._context) - this.bars[this.bars.length - 2],
              i = this.bars[this.bars.length - 2] - o.low(this._context);
            this.atr += Math.max(watchedValue_e, watchedValue_t, i), o.close(this._context) > this.sic && (this.sic = o.close(this
              ._context))
          } else if (this.count === this.period) {
            watchedValue_e = o.high(this._context) - o.low(this._context), watchedValue_t = o.high(this._context) - this.bars[this.bars
              .length - 2], i = this.bars[this.bars.length - 2] - o.low(this._context);
            this.atr += Math.max(watchedValue_e, watchedValue_t, i), this.atr *= 1 / this.period, o.close(this._context) > this.sic && (
                this.sic = o.close(this._context)), this.position = "LONG", this.nextsar = this.sic - this.atr *
              this.atrMult
          } else {
            var watchedValue_s = this.nextsar;
            "LONG" === this.position ? o.close(this._context) < watchedValue_s ? (this.position = "SHORT", this.sic = o
              .close(this._context), this.nextsar = this.sic + this.computeATR()) : (this.position = "LONG",
              this.sic = Math.max(o.close(this._context), this.sic), this.nextsar = this.sic - this
              .computeATR()) : "SHORT" === this.position && (o.close(this._context) > watchedValue_s ? (this.position =
              "LONG", this.sic = o.close(this._context), this.nextsar = this.sic - this.computeATR()) : (
              this.position = "SHORT", this.sic = Math.min(o.close(this._context), this.sic), this.nextsar =
              this.sic + this.computeATR())), this.lastSar = watchedValue_s
          }
          return this.count++, watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this._context.select_sym(0), [this.calculateVolatility()]
        }
      }
    }, {
      name: "VWAP",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          inputs: {
            in_0: "hlc3",
            in_anchor: "Session"
          },
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: 0,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "VWAP",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "VWAP",
        shortDescription: "VWAP",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Source",
          defval: "hlc3",
          type: "source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"]
        }, {
          id: "in_anchor",
          name: "Anchor Period",
          defval: "Session",
          type: "text",
          options: ["Session", "Week", "Month", "Quarter", "Year", "Decade", "Century"]
        }],
        id: "VWAP@tv-basicstudies-1",
        scriptIdPart: "",
        name: "VWAP",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_1 = function(watchedValue_e) {
          watchedValue_e.reset_hist()
        }, this.createAnchorChecker = function(watchedValue_e, watchedValue_t) {
          switch (watchedValue_t) {
            case "Week":
              return function(watchedValue_t, i) {
                return o.weekofyear(watchedValue_e, watchedValue_t) !== o.weekofyear(watchedValue_e, i) || o.year(watchedValue_e, watchedValue_t) !== o.year(watchedValue_e, i)
              };
            case "Month":
              return function(watchedValue_t, i) {
                return o.month(watchedValue_e, watchedValue_t) !== o.month(watchedValue_e, i) || o.year(watchedValue_e, watchedValue_t) !== o.year(watchedValue_e, i)
              };
            case "Quarter":
              return function(watchedValue_t, i) {
                return Math.floor(o.month(watchedValue_e, watchedValue_t) / 3) !== Math.floor(o.month(watchedValue_e, i) / 3) || o.year(watchedValue_e, watchedValue_t) !== o
                  .year(watchedValue_e, i)
              };
            case "Year":
              return function(watchedValue_t, i) {
                return o.year(watchedValue_e, watchedValue_t) !== o.year(watchedValue_e, i)
              };
            case "Decade":
              return function(watchedValue_t, i) {
                return Math.floor(o.year(watchedValue_e, watchedValue_t) / 10) !== Math.floor(o.year(watchedValue_e, i) / 10)
              };
            case "Century":
              return function(watchedValue_t, i) {
                return Math.floor(o.year(watchedValue_e, watchedValue_t) / 100) !== Math.floor(o.year(watchedValue_e, i) / 100)
              };
            default:
              return watchedValue_e => this._isFirstBarInSession(watchedValue_e)
          }
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._input = watchedValue_t, this._isFirstBarInSession = null;
          const i = this._input(1) || "Session";
          this._anchorChecker = this.createAnchorChecker(watchedValue_e, i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          const i = this._input(0);
          var watchedValue_s = watchedValue_e.new_var(),
            watchedValue_n = watchedValue_e.new_var(),
            r = watchedValue_e.new_var();
          const watchedValue_a = o.time(this._context),
            l = this._context.new_unlimited_var(watchedValue_a).get(1);
          if (watchedValue_a) {
            if (null === this._isFirstBarInSession) {
              const watchedValue_t = o.createNthBarInSessionCheck(watchedValue_e);
              this._isFirstBarInSession = watchedValue_e => watchedValue_t(watchedValue_e, 0)
            }
            this._anchorChecker(watchedValue_a, l) && (this.f_1(watchedValue_s), this.f_1(watchedValue_n), r.set(watchedValue_a))
          }
          return watchedValue_s.set(o.nz(watchedValue_s.get(1)) + o[i](this._context) * o.volume(this._context)), watchedValue_n.set(o.nz(watchedValue_n.get(1)) + o
            .volume(this._context)), o.na(r.get(0)) ? (watchedValue_e.symbol.isLastBar && o.error(
            "To calculate the VWAP indicator, more data is needed. Zoom out or scroll left to load more historical data.",
            "VWAP is waiting for more data"), [NaN]) : [watchedValue_s.get(0) / watchedValue_n.get(0)]
        }
      }
    }, {
      name: "VWMA",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 20
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "VWMA",
        shortDescription: "VWMA",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "len",
          defval: 20,
          type: "integer",
          min: 1,
          max: 1e4
        }],
        id: "VWMA@tv-basicstudies-1",
        scriptIdPart: "",
        name: "VWMA",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._context.new_var(i);
          return [o.vwma(watchedValue_n, watchedValue_s, this._context)]
        }
      }
    }, {
      name: "Volume Oscillator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: 0
          }],
          inputs: {
            in_0: 5,
            in_1: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Volume Oscillator",
        shortDescription: "Volume Osc",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "Zero",
          zorder: -1
        }],
        inputs: [{
          id: "in_0",
          name: "shortlen",
          defval: 5,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_1",
          name: "longlen",
          defval: 10,
          type: "integer",
          min: 1,
          max: 4999
        }],
        id: "Volume Oscillator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Volume Oscillator",
        format: {
          precision: 2,
          type: "percent"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t) {
          return 100 * (watchedValue_e - watchedValue_t) / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.volume(this._context),
            r = this._context.new_var(watchedValue_n),
            watchedValue_a = o.ema(r, i, this._context),
            l = this._context.new_var(watchedValue_n),
            c = o.ema(l, watchedValue_s, this._context);
          return [this.f_0(watchedValue_a, c)]
        }
      }
    }, {
      name: "Vortex Indicator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#E91E63"
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "VI +",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_1: {
            title: "VI -",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "Vortex Indicator",
        shortDescription: "VI",
        is_price_study: !1,
        is_hidden_study: !1,
        id: "vortex_indicator@tv-basicstudies-1",
        inputs: [{
          id: "in_0",
          name: "Period",
          defval: 14,
          type: "integer",
          min: 2,
          max: 1e12
        }],
        scriptIdPart: "",
        name: "Vortex Indicator",
        format: {
          precision: 4,
          type: "price"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._context.new_var(o.low(this._context)),
            i = this._context.new_var(o.abs(o.high(this._context) - watchedValue_t.get(1))),
            watchedValue_s = o.sum(i, watchedValue_e, this._context),
            watchedValue_n = this._context.new_var(o.high(this._context)),
            r = this._context.new_var(o.abs(o.low(this._context) - watchedValue_n.get(1))),
            watchedValue_a = o.sum(r, watchedValue_e, this._context),
            l = this._context.new_var(o.atr(1, this._context)),
            c = o.sum(l, watchedValue_e, this._context);
          return [watchedValue_s / c, watchedValue_a / c]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, this.f_0()
        }
      }
    }, {
      name: "Willams %R",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#7E57C2"
            }
          },
          bands: [{
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: -20
          }, {
            color: "#787B86",
            linestyle: 2,
            linewidth: 1,
            visible: !0,
            value: -80
          }],
          filledAreasStyle: {
            fill_0: {
              color: "#7E57C2",
              transparency: 90,
              visible: !0
            }
          },
          inputs: {
            in_0: 14
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1,
            zorder: 1
          }
        },
        description: "Williams %R",
        shortDescription: "%R",
        is_price_study: !1,
        bands: [{
          id: "hline_0",
          name: "UpperLimit",
          zorder: -1.1
        }, {
          id: "hline_1",
          name: "LowerLimit",
          zorder: -1.11
        }],
        filledAreas: [{
          id: "fill_0",
          objAId: "hline_0",
          objBId: "hline_1",
          type: "hline_hline",
          title: "Hlines Background",
          zorder: -2
        }],
        inputs: [{
          id: "in_0",
          name: "length",
          defval: 14,
          type: "integer",
          min: 1,
          max: 2e3
        }],
        id: "Willams %R@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Willams %R",
        format: {
          precision: 2,
          type: "price"
        },
        usePlotsZOrder: !0
      },
      constructor: function() {
        this.f_0 = function(watchedValue_e, watchedValue_t, i) {
          return 100 * (watchedValue_e - watchedValue_t) / (watchedValue_t - i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = o.high(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            r = o.highest(watchedValue_n, i, this._context),
            watchedValue_a = o.low(this._context),
            l = this._context.new_var(watchedValue_a),
            c = o.lowest(l, i, this._context);
          return [this.f_0(o.close(this._context), r, c)]
        }
      }
    }, {
      name: "Williams Alligator",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#E91E63"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#66BB6A"
            }
          },
          inputs: {
            in_0: 21,
            in_1: 13,
            in_2: 8,
            in_3: 8,
            in_4: 5,
            in_5: 3
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          type: "line"
        }, {
          id: "plot_2",
          type: "line"
        }],
        styles: {
          plot_0: {
            title: "Jaw",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_1: {
            title: "Teeth",
            histogramBase: 0,
            joinPoints: !1
          },
          plot_2: {
            title: "Lips",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Williams Alligator",
        shortDescription: "Alligator",
        is_price_study: !0,
        inputs: [{
          id: "in_0",
          name: "Jaw Length",
          defval: 21,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_0"]
        }, {
          id: "in_1",
          name: "Teeth Length",
          defval: 13,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1"]
        }, {
          id: "in_2",
          name: "Lips Length",
          defval: 8,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_2"]
        }, {
          id: "in_3",
          name: "Jaw Offset",
          defval: 8,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_0"]
        }, {
          id: "in_4",
          name: "Teeth Offset",
          defval: 5,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_1"]
        }, {
          id: "in_5",
          name: "Lips Offset",
          defval: 3,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["plot_2"]
        }],
        id: "Williams Alligator@tv-basicstudies-1",
        scriptIdPart: "",
        name: "Williams Alligator",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            r = this._input(3),
            watchedValue_a = this._input(4),
            l = this._input(5),
            c = o.hl2(this._context);
          return [{
            value: o.smma(c, i, this._context),
            offset: r
          }, {
            value: o.smma(c, watchedValue_s, this._context),
            offset: watchedValue_a
          }, {
            value: o.smma(c, watchedValue_n, this._context),
            offset: l
          }]
        }
      }
    }, {
      name: "Williams Fractals",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        defaults: {
          styles: {
            plot_0: {
              plottype: "shape_triangle_down",
              visible: !0,
              location: "BelowBar",
              transparency: 0,
              color: watchedValue_a
            },
            plot_1: {
              plottype: "shape_triangle_up",
              visible: !0,
              location: "AboveBar",
              transparency: 0,
              color: u
            }
          },
          inputs: {
            in_0: 2
          }
        },
        plots: [{
          id: "plot_0",
          type: "shapes"
        }, {
          id: "plot_1",
          type: "shapes"
        }],
        styles: {
          plot_0: {
            title: "Down fractals",
            isHidden: !1
          },
          plot_1: {
            title: "Up fractals",
            isHidden: !1
          }
        },
        description: "Williams Fractal",
        shortDescription: "Fractals",
        is_price_study: !0,
        is_hidden_study: !1,
        id: "Williams Fractals@tv-basicstudies-1",
        inputs: [{
          id: "in_0",
          name: "Periods",
          defval: 2,
          type: "integer",
          min: 2,
          max: 1e12
        }],
        scriptIdPart: "",
        name: "Williams Fractals",
        isCustomIndicator: !0,
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.f_0 = function() {
          for (var watchedValue_e = this._input(0), watchedValue_t = this._context.new_var(o.high(this._context)), i = !0, watchedValue_s = !0, watchedValue_n = !0,
              r = !0, watchedValue_a = !0, l = !0, c = 1; c <= watchedValue_e; c++) i = o.and(i, o.lt(watchedValue_t.get(watchedValue_e - c), watchedValue_t.get(watchedValue_e))), watchedValue_s = o.and(
              watchedValue_s, o.lt(watchedValue_t.get(watchedValue_e + c), watchedValue_t.get(watchedValue_e))), watchedValue_n = o.and(watchedValue_n, o.and(o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), o.lt(watchedValue_t.get(watchedValue_e +
              c + 1), watchedValue_t.get(watchedValue_e)))),
            r = o.and(r, o.and(o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t.get(watchedValue_e)), o.lt(watchedValue_t.get(watchedValue_e +
              c + 2), watchedValue_t.get(watchedValue_e))))), watchedValue_a = o.and(watchedValue_a, o.and(o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t
              .get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 3), watchedValue_t.get(watchedValue_e)), o.lt(watchedValue_t.get(watchedValue_e + c + 3), watchedValue_t.get(watchedValue_e)))))), l = o.and(l, o
              .and(o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t.get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 3), watchedValue_t
                .get(watchedValue_e)), o.and(o.le(watchedValue_t.get(watchedValue_e + 4), watchedValue_t.get(watchedValue_e)), o.lt(watchedValue_t.get(watchedValue_e + c + 4), watchedValue_t.get(watchedValue_e)))))));
          var h = o.or(watchedValue_s, o.or(watchedValue_n, o.or(r, o.or(watchedValue_a, l)))),
            d = o.and(i, h),
            u = this._context.new_var(o.low(this._context)),
            _ = 1,
            p = 1,
            m = 1,
            g = 1,
            f = 1,
            y = 1;
          for (c = 1; c <= watchedValue_e; c++) _ = o.and(_, o.gt(u.get(watchedValue_e - c), u.get(watchedValue_e))), p = o.and(p, o.gt(u.get(watchedValue_e + c), u
              .get(watchedValue_e))), m = o.and(m, o.and(o.ge(u.get(watchedValue_e + 1), u.get(watchedValue_e)), o.gt(u.get(watchedValue_e + c + 1), u.get(watchedValue_e)))),
            g = o.and(g, o.and(o.ge(u.get(watchedValue_e + 1), u.get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 2), u.get(watchedValue_e)), o.gt(u.get(watchedValue_e +
              c + 2), u.get(watchedValue_e))))), f = o.and(f, o.and(o.ge(u.get(watchedValue_e + 1), u.get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 2), u
              .get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 3), u.get(watchedValue_e)), o.gt(u.get(watchedValue_e + c + 3), u.get(watchedValue_e)))))), y = o.and(y, o
              .and(o.ge(u.get(watchedValue_e + 1), u.get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 2), u.get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 3), u
                .get(watchedValue_e)), o.and(o.ge(u.get(watchedValue_e + 4), u.get(watchedValue_e)), o.gt(u.get(watchedValue_e + c + 4), u.get(watchedValue_e)))))));
          var v = o.or(p, o.or(m, o.or(g, o.or(f, y))));
          return [o.and(_, v), d]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this.f_0();
          return [{
            value: i[0],
            offset: -this._input(0)
          }, {
            value: i[1],
            offset: -this._input(0)
          }]
        }
      }
    }, {
      name: "Guppy Multiple Moving Average",
      metainfo: {
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        description: "Guppy Multiple Moving Average",
        shortDescription: "GMMA",
        is_price_study: !0,
        id: "Guppy Multiple Moving Average@tv-basicstudies-1",
        _metainfoVersion: 52,
        format: {
          type: "inherit"
        },
        defaults: {
          inputs: {
            traderEMA1Length: 3,
            traderEMA2Length: 5,
            traderEMA3Length: 8,
            traderEMA4Length: 10,
            traderEMA5Length: 12,
            traderEMA6Length: 15,
            investorEMA1Length: 30,
            investorEMA2Length: 35,
            investorEMA3Length: 40,
            investorEMA4Length: 45,
            investorEMA5Length: 50,
            investorEMA6Length: 60
          },
          styles: {
            traderEMA1: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 15,
              visible: !0
            },
            traderEMA2: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 12,
              visible: !0
            },
            traderEMA3: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 9,
              visible: !0
            },
            traderEMA4: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 6,
              visible: !0
            },
            traderEMA5: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 3,
              visible: !0
            },
            traderEMA6: {
              color: "#00FFFF",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0
            },
            investorEMA1: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 15,
              visible: !0
            },
            investorEMA2: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 12,
              visible: !0
            },
            investorEMA3: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 9,
              visible: !0
            },
            investorEMA4: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 6,
              visible: !0
            },
            investorEMA5: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 3,
              visible: !0
            },
            investorEMA6: {
              color: "#FF0000",
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0
            }
          }
        },
        inputs: [{
          defval: 3,
          id: "traderEMA1Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 1 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA1"]
        }, {
          defval: 5,
          id: "traderEMA2Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 2 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA2"]
        }, {
          defval: 8,
          id: "traderEMA3Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 3 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA3"]
        }, {
          defval: 10,
          id: "traderEMA4Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 4 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA4"]
        }, {
          defval: 12,
          id: "traderEMA5Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 5 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA5"]
        }, {
          defval: 15,
          id: "traderEMA6Length",
          max: 1e3,
          min: 1,
          name: "Trader EMA 6 length",
          type: "integer",
          hideWhenPlotsHidden: ["traderEMA6"]
        }, {
          defval: 30,
          id: "investorEMA1Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 1 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA1"]
        }, {
          defval: 35,
          id: "investorEMA2Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 2 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA2"]
        }, {
          defval: 40,
          id: "investorEMA3Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 3 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA3"]
        }, {
          defval: 45,
          id: "investorEMA4Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 4 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA4"]
        }, {
          defval: 50,
          id: "investorEMA5Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 5 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA5"]
        }, {
          defval: 60,
          id: "investorEMA6Length",
          max: 1e3,
          min: 1,
          name: "Investor EMA 6 length",
          type: "integer",
          hideWhenPlotsHidden: ["investorEMA6"]
        }],
        plots: [{
          id: "traderEMA1",
          type: "line"
        }, {
          id: "traderEMA2",
          type: "line"
        }, {
          id: "traderEMA3",
          type: "line"
        }, {
          id: "traderEMA4",
          type: "line"
        }, {
          id: "traderEMA5",
          type: "line"
        }, {
          id: "traderEMA6",
          type: "line"
        }, {
          id: "investorEMA1",
          type: "line"
        }, {
          id: "investorEMA2",
          type: "line"
        }, {
          id: "investorEMA3",
          type: "line"
        }, {
          id: "investorEMA4",
          type: "line"
        }, {
          id: "investorEMA5",
          type: "line"
        }, {
          id: "investorEMA6",
          type: "line"
        }],
        styles: {
          traderEMA1: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 1"
          },
          traderEMA2: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 2"
          },
          traderEMA3: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 3"
          },
          traderEMA4: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 4"
          },
          traderEMA5: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 5"
          },
          traderEMA6: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Trader EMA 6"
          },
          investorEMA1: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 1"
          },
          investorEMA2: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 2"
          },
          investorEMA3: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 3"
          },
          investorEMA4: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 4"
          },
          investorEMA5: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 5"
          },
          investorEMA6: {
            histogramBase: 0,
            isHidden: !1,
            joinPoints: !1,
            title: "Investor EMA 6"
          }
        }
      },
      constructor: function() {
        this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var i = this._context.new_var(o.close(this._context)),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            r = this._input(2),
            watchedValue_a = this._input(3),
            l = this._input(4),
            c = this._input(5),
            h = o.ema(i, watchedValue_s, this._context),
            d = o.ema(i, watchedValue_n, this._context),
            u = o.ema(i, r, this._context),
            _ = o.ema(i, watchedValue_a, this._context),
            p = o.ema(i, l, this._context),
            m = o.ema(i, c, this._context),
            g = this._input(6),
            f = this._input(7),
            y = this._input(8),
            v = this._input(9),
            S = this._input(10),
            b = this._input(11);
          return [h, d, u, _, p, m, o.ema(i, g, this._context), o.ema(i, f, this._context), o.ema(i, y, this
            ._context), o.ema(i, v, this._context), o.ema(i, S, this._context), o.ema(i, b, this._context)]
        }
      }
    }, {
      name: "52 Week High/Low",
      metainfo: {
        _metainfoVersion: 52,
        id: "52 Week High/Low@tv-basicstudies-1",
        description: "52 Week High/Low",
        shortDescription: "52W H/L",
        is_price_study: !0,
        format: {
          type: "inherit"
        },
        plots: [],
        graphics: {
          horizlines: {
            highest: {
              name: "Highest"
            },
            lowest: {
              name: "Lowest"
            }
          }
        },
        inputs: [{
          defval: "close",
          id: "highestSource",
          name: "High source",
          options: ["close", "high"],
          type: "text"
        }, {
          defval: "close",
          id: "lowestSource",
          name: "Low source",
          options: ["close", "low"],
          type: "text"
        }],
        defaults: {
          graphics: {
            horizlines: {
              highest: {
                color: "rgb(93, 96, 107)",
                showPrice: !0,
                style: 1,
                visible: !0,
                width: 2
              },
              lowest: {
                color: "rgb(93, 96, 107)",
                showPrice: !0,
                style: 1,
                visible: !0,
                width: 2
              }
            }
          },
          inputs: {
            highestSource: "close",
            lowestSource: "close"
          }
        }
      },
      constructor: function() {
        this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t, this._symbolSupports1DResolution = !this._context.symbol.info
            .supported_resolutions || -1 !== this._context.symbol.info.supported_resolutions.indexOf("1D"), this
            ._symbolSupports1DResolution && "1D" !== o.period(this._context) && this._context.new_sym(this
              ._context.symbol.ticker, "1D")
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._symbolSupports1DResolution || o.error(
              `Daily bars are not available for ${this._context.symbol.info.name}`), this._context = watchedValue_e, this
            ._input = watchedValue_t, "1D" !== o.period(this._context) && this._context.select_sym(1);
          const i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = o.time(this._context),
            r = this._context.new_unlimited_var(watchedValue_n),
            watchedValue_a = this._context.new_unlimited_var(o[i](this._context)),
            l = this._context.new_unlimited_var(o[watchedValue_s](this._context));
          if (r.get(365), !this._context.symbol.isLastBar || !this._context.symbol.isNewBar) return null;
          const c = o.add_years_considering_dst(this._context.symbol.info.timezone, new Date(watchedValue_n), -1),
            h = r.indexOf(c.getTime()),
            d = -1 === h ? NaN : o.highest(watchedValue_a, h, this._context),
            u = -1 === h ? NaN : o.lowest(l, h, this._context);
          if (isNaN(d) || isNaN(u)) return {
            nonseries: !0,
            type: "study_graphics",
            data: {
              graphicsCmds: {
                erase: [{
                  action: "all"
                }]
              }
            }
          };
          return {
            nonseries: !0,
            type: "study_graphics",
            data: {
              graphicsCmds: {
                create: {
                  horizlines: [{
                    styleId: "highest",
                    data: [{
                      startIndex: watchedValue_n,
                      endIndex: watchedValue_n,
                      level: d,
                      extendLeft: !0,
                      extendRight: !0
                    }]
                  }, {
                    styleId: "lowest",
                    data: [{
                      startIndex: watchedValue_n,
                      endIndex: watchedValue_n,
                      level: u,
                      extendLeft: !0,
                      extendRight: !0
                    }]
                  }]
                },
                erase: [{
                  action: "all"
                }]
              }
            }
          }
        }
      }
    }]