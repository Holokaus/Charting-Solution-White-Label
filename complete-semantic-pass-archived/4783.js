/**
 * Module 4783 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4783: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    const watchedValue_s = watchedValue_i(58978).getHexColorByName,
      watchedValue_o = watchedValue_i(19979).Std,
      watchedValue_n = watchedValue_s("color-ripe-red-100"),
      watchedValue_r = watchedValue_s("color-ripe-red-200"),
      watchedValue_a = watchedValue_s("color-ripe-red-500"),
      watchedValue_l = watchedValue_s("color-ripe-red-900"),
      watchedValue_c = watchedValue_s("color-ripe-red-a200"),
      watchedValue_h = watchedValue_s("color-minty-green-100"),
      watchedValue_d = watchedValue_s("color-minty-green-400"),
      watchedValue_u = watchedValue_s("color-minty-green-500");
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return watchedValue_o.or(watchedValue_o.and(watchedValue_o.eq(watchedValue_e, watchedValue_t), watchedValue_o.eq(watchedValue_e, watchedValue_i)), watchedValue_o.eq(watchedValue_t, watchedValue_i)) ? 0 : (2 * watchedValue_e - watchedValue_i - watchedValue_t) / (watchedValue_t - watchedValue_i) * watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this.f_0(watchedValue_o.close(this._context), watchedValue_o.high(this._context), watchedValue_o.low(this._context), watchedValue_o.volume(this
            ._context));
          return [watchedValue_o.cum(watchedValue_i, this._context)]
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
          var watchedValue_i = watchedValue_t.new_var(watchedValue_o.open(watchedValue_t)),
            watchedValue_s = watchedValue_t.new_var(watchedValue_o.high(watchedValue_t)),
            watchedValue_n = watchedValue_t.new_var(watchedValue_o.low(watchedValue_t)),
            watchedValue_r = watchedValue_t.new_var(watchedValue_o.close(watchedValue_t)),
            watchedValue_a = watchedValue_o.abs(watchedValue_s - watchedValue_r.get(1)),
            watchedValue_l = watchedValue_o.abs(watchedValue_n - watchedValue_r.get(1)),
            watchedValue_c = watchedValue_o.abs(watchedValue_s - watchedValue_n),
            watchedValue_h = watchedValue_o.abs(watchedValue_r.get(1) - watchedValue_i.get(1)),
            watchedValue_d = watchedValue_o.max(watchedValue_a, watchedValue_l),
            watchedValue_u = watchedValue_o.iff(watchedValue_a >= watchedValue_o.max(watchedValue_l, watchedValue_c), watchedValue_a - .5 * watchedValue_l + .25 * watchedValue_h, watchedValue_o.iff(watchedValue_l >= watchedValue_o.max(watchedValue_a, watchedValue_c), watchedValue_l - .5 * watchedValue_a + .25 * watchedValue_h, watchedValue_c +
              .25 * watchedValue_h));
          return watchedValue_o.iff(0 === watchedValue_u, 0, (watchedValue_r - watchedValue_r.get(1) + .5 * (watchedValue_r - watchedValue_i) + .25 * (watchedValue_r.get(1) - watchedValue_i.get(1))) / watchedValue_u * watchedValue_d / watchedValue_e * 50)
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          var watchedValue_i = this.f_0(watchedValue_e, watchedValue_t);
          return watchedValue_o.cum(watchedValue_i, watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0);
          return [this.f_1(watchedValue_i, this._context)]
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
          return watchedValue_o.gt(watchedValue_e, watchedValue_t)
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_o.lt(watchedValue_e, watchedValue_t)
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return 0 === watchedValue_t ? watchedValue_e : watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this.f_0(watchedValue_o.close(this._context), watchedValue_o.open(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.sum(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = this.f_1(watchedValue_o.close(this._context), watchedValue_o.open(this._context)),
            watchedValue_l = this._context.new_var(watchedValue_a),
            watchedValue_c = watchedValue_o.sum(watchedValue_l, watchedValue_i, this._context);
          return [this.f_2(watchedValue_r, watchedValue_c)]
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2),
            watchedValue_a = this._context.new_var(watchedValue_i);
          return [watchedValue_o.alma(watchedValue_a, watchedValue_s, watchedValue_n, watchedValue_r)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.high(this._context),
            watchedValue_n = watchedValue_i + 1,
            watchedValue_r = this._context.new_var(watchedValue_s),
            watchedValue_a = watchedValue_o.highestbars(watchedValue_r, watchedValue_n, this._context),
            watchedValue_l = this.f_0(watchedValue_a, watchedValue_i),
            watchedValue_c = watchedValue_o.low(this._context),
            watchedValue_h = this._context.new_var(watchedValue_c),
            watchedValue_d = watchedValue_o.lowestbars(watchedValue_h, watchedValue_n, this._context);
          return [watchedValue_l, this.f_0(watchedValue_d, watchedValue_i)]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          if (this._context = watchedValue_e, this._input = watchedValue_t, "" === this._input(0)) return [watchedValue_o.ohlc4(this._context)];
          this._context.select_sym(0);
          const watchedValue_i = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const watchedValue_s = this._context.new_var(watchedValue_o.ohlc4(this._context)).adopt(this._context.new_var(this._context
            .symbol.time), watchedValue_i, 1);
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
              color: watchedValue_c
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
            var watchedValue_t = this._context.new_var(watchedValue_o.high(this._context)),
              watchedValue_i = watchedValue_o.change(watchedValue_t),
              watchedValue_s = this._context.new_var(watchedValue_o.low(this._context)),
              watchedValue_n = -watchedValue_o.change(watchedValue_s),
              watchedValue_r = this._context.new_var(watchedValue_o.tr(void 0, this._context)),
              watchedValue_a = watchedValue_o.rma(watchedValue_r, watchedValue_e, this._context),
              watchedValue_l = this._context.new_var(watchedValue_o.and(watchedValue_o.gt(watchedValue_i, watchedValue_n), watchedValue_o.gt(watchedValue_i, 0)) ? watchedValue_i : 0),
              watchedValue_c = watchedValue_o.fixnan(100 * watchedValue_o.rma(watchedValue_l, watchedValue_e, this._context) / watchedValue_a, this._context),
              watchedValue_h = this._context.new_var(watchedValue_o.and(watchedValue_o.gt(watchedValue_n, watchedValue_i), watchedValue_o.gt(watchedValue_n, 0)) ? watchedValue_n : 0);
            return [watchedValue_c, watchedValue_o.fixnan(100 * watchedValue_o.rma(watchedValue_h, watchedValue_e, this._context) / watchedValue_a, this._context)]
          }, this.f_1 = function(watchedValue_e, watchedValue_t) {
            var watchedValue_i = this.f_0(watchedValue_e),
              watchedValue_s = watchedValue_i[0],
              watchedValue_n = watchedValue_i[1],
              watchedValue_r = watchedValue_s + watchedValue_n,
              watchedValue_a = this._context.new_var(watchedValue_o.abs(watchedValue_s - watchedValue_n) / (watchedValue_o.eq(watchedValue_r, 0) ? 1 : watchedValue_r));
            return [100 * watchedValue_o.rma(watchedValue_a, watchedValue_t, this._context)]
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
              color: watchedValue_l
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
          var watchedValue_i = watchedValue_t(0);
          return [watchedValue_o.atr(watchedValue_i, watchedValue_e)]
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
                  color: watchedValue_u,
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
          return watchedValue_o.le(watchedValue_e, 0) ? 0 : 1
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.hl2(this._context),
            watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = watchedValue_o.sma(watchedValue_s, 5, this._context),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, 34, this._context),
            watchedValue_l = this.f_0(watchedValue_n, watchedValue_a),
            watchedValue_c = watchedValue_l,
            watchedValue_h = this._context.new_var(watchedValue_l),
            watchedValue_d = watchedValue_o.change(watchedValue_h);
          return [watchedValue_c, this.f_1(watchedValue_d)]
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
                  color: watchedValue_u,
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
          return watchedValue_o.le(watchedValue_e, 0) ? 0 : 1
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.hl2(this._context),
            watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = watchedValue_o.sma(watchedValue_s, 5, this._context),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, 34, this._context),
            watchedValue_l = this.f_0(watchedValue_n, watchedValue_a),
            watchedValue_c = this._context.new_var(watchedValue_l),
            watchedValue_h = watchedValue_o.sma(watchedValue_c, 5, this._context),
            watchedValue_d = this.f_0(watchedValue_l, watchedValue_h),
            watchedValue_u = this._context.new_var(watchedValue_d),
            _ = watchedValue_o.change(watchedValue_u);
          return [watchedValue_d, this.f_1(_)]
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
              color: watchedValue_c
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return (watchedValue_e - watchedValue_t) / (watchedValue_i - watchedValue_s)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          return this._context = watchedValue_e, this._input = watchedValue_t, [this.f_0(watchedValue_o.close(this._context), watchedValue_o.open(this._context), watchedValue_o
            .high(this._context), watchedValue_o.low(this._context))]
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_s, this._context),
            watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.stdev(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = this.f_0(watchedValue_n, watchedValue_c);
          return [watchedValue_a, this.f_1(watchedValue_a, watchedValue_h), this.f_2(watchedValue_a, watchedValue_h)]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(watchedValue_o.time(this._context)),
            watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._input(0),
            watchedValue_r = this._input(1),
            watchedValue_a = this._input(2),
            watchedValue_l = this._input(3);
          if ("" !== watchedValue_n) {
            this._context.select_sym(1);
            var watchedValue_c = this._context.new_var(watchedValue_o.time(this._context));
            watchedValue_s = this._context.new_var(watchedValue_o.close(this._context)).adopt(watchedValue_c, watchedValue_i, 1), this._context.select_sym(0)
          }
          var watchedValue_h = this._context.new_var(watchedValue_s),
            watchedValue_d = watchedValue_o.sma(watchedValue_h, watchedValue_r, this._context),
            watchedValue_u = this._context.new_var(watchedValue_s),
            _ = watchedValue_o.stdev(watchedValue_u, watchedValue_r, this._context),
            watchedValue_p = this.f_0(watchedValue_a, _);
          return [{
            value: watchedValue_d,
            offset: watchedValue_l
          }, {
            value: this.f_1(watchedValue_d, watchedValue_p),
            offset: watchedValue_l
          }, {
            value: this.f_2(watchedValue_d, watchedValue_p),
            offset: watchedValue_l
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
              color: watchedValue_d
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
        }, this.f_3 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return (watchedValue_e - watchedValue_t) / (watchedValue_i - watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_s, this._context),
            watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.stdev(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = this.f_0(watchedValue_n, watchedValue_c),
            watchedValue_d = this.f_1(watchedValue_a, watchedValue_h),
            watchedValue_u = this.f_2(watchedValue_a, watchedValue_h);
          return [this.f_3(watchedValue_i, watchedValue_u, watchedValue_d)]
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
        }, this.f_3 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return (watchedValue_e - watchedValue_t) / watchedValue_i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_s, this._context),
            watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.stdev(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = this.f_0(watchedValue_n, watchedValue_c),
            watchedValue_d = this.f_1(watchedValue_a, watchedValue_h),
            watchedValue_u = this.f_2(watchedValue_a, watchedValue_h);
          return [this.f_3(watchedValue_d, watchedValue_u, watchedValue_a)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return watchedValue_o.or(watchedValue_o.and(watchedValue_o.eq(watchedValue_e, watchedValue_t), watchedValue_o.eq(watchedValue_e, watchedValue_i)), watchedValue_o.eq(watchedValue_t, watchedValue_i)) ? 0 : (2 * watchedValue_e - watchedValue_i - watchedValue_t) / (watchedValue_t - watchedValue_i) * watchedValue_s
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this.f_0(watchedValue_o.close(this._context), watchedValue_o.high(this._context), watchedValue_o.low(this._context), watchedValue_o.volume(this
              ._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.sum(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = watchedValue_o.volume(this._context),
            watchedValue_l = this._context.new_var(watchedValue_a),
            watchedValue_c = watchedValue_o.sum(watchedValue_l, watchedValue_i, this._context);
          return [this.f_1(watchedValue_r, watchedValue_c)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.accdist(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.ema(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = this._context.new_var(watchedValue_n),
            watchedValue_c = watchedValue_o.ema(watchedValue_l, watchedValue_s, this._context);
          return [this.f_0(watchedValue_a, watchedValue_c)]
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
          var watchedValue_i = this._context.new_var(watchedValue_o.high(this._context) - watchedValue_o.low(this._context)),
            watchedValue_s = this._context.new_var(watchedValue_o.ema(watchedValue_i, this.period, this._context));
          return [watchedValue_o.roc(watchedValue_s, this.rocLookback)]
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
          name: "watchedValue_p",
          defval: 10,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_1",
          name: "watchedValue_x",
          defval: 1,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_2",
          name: "watchedValue_q",
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e - watchedValue_t * watchedValue_i
        }, this.f_1 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e + watchedValue_t * watchedValue_i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            watchedValue_r = watchedValue_o.high(this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.highest(watchedValue_a, watchedValue_i, this._context),
            watchedValue_c = watchedValue_o.atr(watchedValue_i, this._context),
            watchedValue_h = this.f_0(watchedValue_l, watchedValue_s, watchedValue_c),
            watchedValue_d = this._context.new_var(watchedValue_r),
            watchedValue_u = watchedValue_o.lowest(watchedValue_d, watchedValue_i, this._context),
            _ = this.f_1(watchedValue_u, watchedValue_s, watchedValue_c),
            watchedValue_p = this._context.new_var(watchedValue_h),
            watchedValue_m = watchedValue_o.highest(watchedValue_p, watchedValue_n, this._context),
            watchedValue_g = this._context.new_var(_);
          return [watchedValue_o.lowest(watchedValue_g, watchedValue_n, this._context), watchedValue_m]
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
          return watchedValue_o.ge(watchedValue_e, 0) ? watchedValue_e : 0
        }, this.f_1 = function(watchedValue_e) {
          return watchedValue_o.ge(watchedValue_e, 0) ? 0 : -watchedValue_e
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return 100 * watchedValue_e / watchedValue_t
        }, this.f_3 = function(watchedValue_e, watchedValue_t) {
          return this.f_2(watchedValue_e - watchedValue_t, watchedValue_e + watchedValue_t)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.change(watchedValue_n),
            watchedValue_a = this.f_0(watchedValue_r),
            watchedValue_l = this.f_1(watchedValue_r),
            watchedValue_c = this._context.new_var(watchedValue_a),
            watchedValue_h = watchedValue_o.sum(watchedValue_c, watchedValue_i, this._context),
            watchedValue_d = this._context.new_var(watchedValue_l),
            watchedValue_u = watchedValue_o.sum(watchedValue_d, watchedValue_i, this._context);
          return [this.f_3(watchedValue_h, watchedValue_u)]
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
                  color: watchedValue_u,
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
          var watchedValue_e = watchedValue_o.close(this._context),
            watchedValue_t = watchedValue_o.hlc3(this._context),
            watchedValue_i = this._context.new_var(watchedValue_o.high(this._context)),
            watchedValue_s = watchedValue_o.highest(watchedValue_i, 30, this._context),
            watchedValue_n = watchedValue_o.lowest(watchedValue_i, 30, this._context),
            watchedValue_r = 25 / (watchedValue_s - watchedValue_n) * watchedValue_n,
            watchedValue_a = this._context.new_var(watchedValue_e),
            watchedValue_l = this._context.new_var(watchedValue_o.ema(watchedValue_a, 34, this._context)),
            watchedValue_c = (watchedValue_l.get(1) - watchedValue_l.get(0)) / watchedValue_t * watchedValue_r,
            watchedValue_h = watchedValue_o.sqrt(1 + watchedValue_c * watchedValue_c),
            watchedValue_d = watchedValue_o.round(180 * watchedValue_o.acos(1 / watchedValue_h) / 3.141592653589793),
            watchedValue_u = watchedValue_o.iff(watchedValue_o.gt(watchedValue_c, 0), -watchedValue_d, watchedValue_d),
            _ = watchedValue_o.and(watchedValue_o.gt(watchedValue_u, -2.14), watchedValue_o.le(watchedValue_u, -.71)) ? 7 : 8,
            watchedValue_p = watchedValue_o.and(watchedValue_o.gt(watchedValue_u, -3.57), watchedValue_o.le(watchedValue_u, -2.14)) ? 6 : _,
            watchedValue_m = watchedValue_o.and(watchedValue_o.gt(watchedValue_u, -5), watchedValue_o.le(watchedValue_u, -3.57)) ? 5 : watchedValue_p,
            watchedValue_g = watchedValue_o.le(watchedValue_u, -5) ? 4 : watchedValue_m,
            watchedValue_f = watchedValue_o.and(watchedValue_o.lt(watchedValue_u, 2.14), watchedValue_o.ge(watchedValue_u, .71)) ? 3 : watchedValue_g,
            watchedValue_y = watchedValue_o.and(watchedValue_o.lt(watchedValue_u, 3.57), watchedValue_o.ge(watchedValue_u, 2.14)) ? 2 : watchedValue_f,
            watchedValue_v = watchedValue_o.and(watchedValue_o.lt(watchedValue_u, 5), watchedValue_o.ge(watchedValue_u, 3.57)) ? 1 : watchedValue_y;
          return [1, watchedValue_o.ge(watchedValue_u, 5) ? 0 : watchedValue_v]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return 100 * watchedValue_o.log10(watchedValue_e / (watchedValue_t - watchedValue_i)) / watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.atr(1, this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.sum(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = watchedValue_o.high(this._context),
            watchedValue_l = this._context.new_var(watchedValue_a),
            watchedValue_c = watchedValue_o.highest(watchedValue_l, watchedValue_i, this._context),
            watchedValue_h = watchedValue_o.low(this._context),
            watchedValue_d = this._context.new_var(watchedValue_h),
            watchedValue_u = watchedValue_o.lowest(watchedValue_d, watchedValue_i, this._context),
            _ = watchedValue_o.log10(watchedValue_i);
          return [this.f_0(watchedValue_r, watchedValue_c, watchedValue_u, _)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return (watchedValue_e - watchedValue_t) / (.015 * watchedValue_i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.hlc3(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_s + watchedValue_r);
          var watchedValue_a, watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.sma(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = this._context.new_var(watchedValue_i),
            watchedValue_d = watchedValue_o.dev(watchedValue_h, watchedValue_s, this._context),
            watchedValue_u = this.f_0(watchedValue_i, watchedValue_c, watchedValue_d),
            _ = this._context.new_var(watchedValue_u);
          return "EMA" === watchedValue_n ? watchedValue_a = watchedValue_o.ema(_, watchedValue_r, this._context) : "WMA" === watchedValue_n ? watchedValue_a = watchedValue_o.wma(_, watchedValue_r, this._context) :
            "SMA" === watchedValue_n && (watchedValue_a = watchedValue_o.sma(_, watchedValue_r, this._context)), [watchedValue_u, watchedValue_a]
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
        this.f_1 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = watchedValue_i.new_var(watchedValue_o.max(watchedValue_o.change(watchedValue_e), 0));
          return watchedValue_o.rma(watchedValue_s, watchedValue_t, watchedValue_i)
        }, this.f_2 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = watchedValue_i.new_var(-watchedValue_o.min(watchedValue_o.change(watchedValue_e), 0));
          return watchedValue_o.rma(watchedValue_s, watchedValue_t, watchedValue_i)
        }, this.f_3 = (watchedValue_e = 0, function(watchedValue_t) {
          var watchedValue_i = watchedValue_t.get(0),
            watchedValue_s = watchedValue_t.get(1);
          return watchedValue_e = watchedValue_i === watchedValue_s ? 0 : watchedValue_i > watchedValue_s ? watchedValue_o.nz(watchedValue_e) <= 0 ? 1 : watchedValue_o.nz(watchedValue_e) + 1 : watchedValue_o.nz(watchedValue_e) >= 0 ? -1 : watchedValue_o.nz(watchedValue_e) - 1,
            this._context.new_var(watchedValue_e)
        }), this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = this._input(0),
            watchedValue_r = this._input(1),
            watchedValue_a = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_a);
          var watchedValue_l = watchedValue_o.rsi(this.f_1(watchedValue_s, watchedValue_n, this._context), this.f_2(watchedValue_s, watchedValue_n, this._context)),
            watchedValue_c = this.f_3(watchedValue_s),
            watchedValue_h = watchedValue_o.rsi(this.f_1(watchedValue_c, watchedValue_r, this._context), this.f_2(watchedValue_c, watchedValue_r, this._context)),
            watchedValue_d = this._context.new_var(watchedValue_o.roc(watchedValue_s, 1)),
            watchedValue_u = watchedValue_o.percentrank(watchedValue_d, watchedValue_a);
          return [watchedValue_o.avg(watchedValue_l, watchedValue_h, watchedValue_u)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_i + Math.max(watchedValue_s, watchedValue_n));
          var watchedValue_r = watchedValue_o.close(this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.roc(watchedValue_a, watchedValue_s),
            watchedValue_c = this._context.new_var(watchedValue_r),
            watchedValue_h = watchedValue_o.roc(watchedValue_c, watchedValue_n),
            watchedValue_d = this.f_0(watchedValue_l, watchedValue_h),
            watchedValue_u = this._context.new_var(watchedValue_d);
          return [watchedValue_o.wma(watchedValue_u, watchedValue_i, this._context)]
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
          this._context = watchedValue_e, this._input = watchedValue_t, this._context.new_sym(this._input(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_unlimited_var(this._context.symbol.time),
            watchedValue_s = (this._input(0), watchedValue_o.period(this._context), watchedValue_o.close(this._context)),
            watchedValue_n = this._input(1);
          this._context.select_sym(1);
          var watchedValue_r = this._context.new_unlimited_var(this._context.symbol.time),
            watchedValue_a = watchedValue_o.close(this._context),
            watchedValue_l = this._context.new_unlimited_var(watchedValue_a);
          this._context.select_sym(0);
          var watchedValue_c = watchedValue_l.adopt(watchedValue_r, watchedValue_i, 0),
            watchedValue_h = this._context.new_var(watchedValue_s),
            watchedValue_d = this._context.new_var(watchedValue_c);
          return [watchedValue_o.correlation(watchedValue_h, watchedValue_d, watchedValue_n, this._context)]
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
          this._context = watchedValue_e, this._input = watchedValue_t, this._context.new_sym(this._input(0), watchedValue_o.period(this._context)),
            this._context.new_sym(this._input(1), watchedValue_o.period(this._context)), this.period = this._input(2)
        }, this.correlationLog = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          var watchedValue_n = watchedValue_o.sma(watchedValue_e, watchedValue_i, watchedValue_s),
            watchedValue_r = watchedValue_o.sma(watchedValue_t, watchedValue_i, watchedValue_s),
            watchedValue_a = watchedValue_s.new_var(watchedValue_e.get() * watchedValue_t.get());
          return (watchedValue_o.sma(watchedValue_a, watchedValue_i, watchedValue_s) - watchedValue_n * watchedValue_r) / Math.sqrt(watchedValue_o.variance2(watchedValue_e, watchedValue_n, watchedValue_i) * watchedValue_o.variance2(watchedValue_t, watchedValue_r, watchedValue_i))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(2);
          var watchedValue_s = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_o.log(watchedValue_s.get() / watchedValue_s.get(1))),
            watchedValue_r = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          var watchedValue_a = this._context.new_var(this._context.symbol.time),
            watchedValue_l = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_c = this._context.new_var(watchedValue_o.log(watchedValue_l.get() / watchedValue_l.get(1))),
            watchedValue_h = this._context.new_var(watchedValue_n.adopt(watchedValue_r, watchedValue_a, 0)),
            watchedValue_d = this._context.new_var(this.correlationLog(watchedValue_c, watchedValue_h, this.period, this._context)),
            watchedValue_u = this._context.new_var(watchedValue_d.adopt(watchedValue_a, watchedValue_i, 0)).get(),
            _ = watchedValue_o.round(1e3 * watchedValue_u) / 1e3;
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
            watchedValue_i = Math.floor(watchedValue_e / 2 + 1);
          this._context.setMinimumAdditionalDepth(watchedValue_e + watchedValue_i);
          var watchedValue_s = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_o.sma(watchedValue_s, watchedValue_e, this._context)),
            watchedValue_r = this._context.new_var(watchedValue_o.close(this._context)).get(watchedValue_i) - watchedValue_n,
            watchedValue_a = watchedValue_o.close(this._context) - watchedValue_n.get(watchedValue_i);
          return [watchedValue_t ? watchedValue_r : watchedValue_a, watchedValue_t ? -watchedValue_i : 0]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this.f_0();
          return [{
            value: watchedValue_i[0],
            offset: watchedValue_i[1]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1);
          return this._context.setMinimumAdditionalDepth(2 * watchedValue_i + watchedValue_s), watchedValue_o.dmi(watchedValue_i, watchedValue_s, this._context)
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.low(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n);
          this._context.setMinimumAdditionalDepth(watchedValue_i + Math.max(watchedValue_s, 0));
          var watchedValue_a = watchedValue_o.lowest(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = watchedValue_o.high(this._context),
            watchedValue_c = this._context.new_var(watchedValue_l),
            watchedValue_h = watchedValue_o.highest(watchedValue_c, watchedValue_i, this._context);
          return [{
            value: watchedValue_a,
            offset: watchedValue_s
          }, {
            value: watchedValue_h,
            offset: watchedValue_s
          }, {
            value: watchedValue_o.avg(watchedValue_h, watchedValue_a),
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
          var watchedValue_i = this._input(0);
          this._context.setMinimumAdditionalDepth(2 * watchedValue_i);
          var watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.ema(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, watchedValue_i, this._context);
          return [this.f_0(watchedValue_r, watchedValue_l)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) {
          return watchedValue_e * watchedValue_t * (watchedValue_i - watchedValue_s) / watchedValue_o
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.hl2(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.change(watchedValue_r),
            watchedValue_l = this.f_0(watchedValue_i, watchedValue_a, watchedValue_o.high(this._context), watchedValue_o.low(this._context), watchedValue_o.volume(this._context)),
            watchedValue_c = this._context.new_var(watchedValue_l);
          return [watchedValue_o.sma(watchedValue_c, watchedValue_s, this._context)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.change(watchedValue_n),
            watchedValue_a = this.f_0(watchedValue_r, watchedValue_o.volume(this._context)),
            watchedValue_l = this._context.new_var(watchedValue_a);
          return [watchedValue_o.ema(watchedValue_l, watchedValue_i, this._context)]
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
          return watchedValue_e ? watchedValue_t : watchedValue_o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.close(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.ema(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = this._context.new_var(watchedValue_n),
            watchedValue_c = watchedValue_o.ema(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = watchedValue_a,
            watchedValue_d = watchedValue_c,
            watchedValue_u = watchedValue_o.cross(watchedValue_a, watchedValue_c, this._context);
          return [watchedValue_h, watchedValue_d, this.f_0(watchedValue_u, watchedValue_a)]
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
          var watchedValue_i = this._context.new_var(watchedValue_o[this._input(4)](this._context)),
            watchedValue_s = watchedValue_o.sma(watchedValue_i, this._input(0), this._context);
          return "Exponential" === this._input(3) ? watchedValue_s = watchedValue_o.ema(watchedValue_i, this._input(0), this._context) : "Weighted" ===
            this._input(3) && (watchedValue_s = watchedValue_o.wma(watchedValue_i, this._input(0), this._context)), [this.f_0(watchedValue_s, this._input(1) / 100),
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
          for (var watchedValue_i, watchedValue_s, watchedValue_n = this._context.new_var(watchedValue_o.close(this._context)), watchedValue_r = 0, watchedValue_a = 0, watchedValue_l = 0; watchedValue_l < this
            .period; watchedValue_l++) watchedValue_r += watchedValue_l + 1, watchedValue_a += watchedValue_n.get(watchedValue_l);
          watchedValue_i = watchedValue_r / this.period, watchedValue_s = watchedValue_a / this.period;
          var watchedValue_c = 0,
            watchedValue_h = 0,
            watchedValue_d = 0;
          for (watchedValue_l = 0; watchedValue_l < this.period; watchedValue_l++) watchedValue_d += Math.pow(watchedValue_s - watchedValue_n.get(watchedValue_l), 2), watchedValue_h += (watchedValue_i - watchedValue_l - 1) * (watchedValue_s - watchedValue_n.get(watchedValue_l)),
            watchedValue_c += Math.pow(watchedValue_i - watchedValue_l - 1, 2);
          return watchedValue_h = Math.pow(watchedValue_h, 2), [Math.sqrt((watchedValue_d - watchedValue_h / watchedValue_c) / (this.period - 2))]
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
          for (var watchedValue_i, watchedValue_s, watchedValue_n = this._context.new_var(watchedValue_o.close(this._context)), watchedValue_r = 0, watchedValue_a = 0, watchedValue_l = 0; watchedValue_l < this
            .period; watchedValue_l++) watchedValue_r += watchedValue_l + 1, watchedValue_a += watchedValue_n.get(watchedValue_l);
          watchedValue_i = watchedValue_r / this.period, watchedValue_s = watchedValue_a / this.period;
          var watchedValue_c = 0,
            watchedValue_h = 0,
            watchedValue_d = 0;
          for (watchedValue_l = 0; watchedValue_l < this.period; watchedValue_l++) watchedValue_d += Math.pow(watchedValue_s - watchedValue_n.get(watchedValue_l), 2), watchedValue_h += (watchedValue_i - watchedValue_l - 1) * (watchedValue_s - watchedValue_n.get(watchedValue_l)),
            watchedValue_c += Math.pow(watchedValue_i - watchedValue_l - 1, 2);
          watchedValue_h = Math.pow(watchedValue_h, 2);
          var watchedValue_u, _, watchedValue_p, watchedValue_m = Math.sqrt((watchedValue_d - watchedValue_h / watchedValue_c) / (this.period - 2)),
            watchedValue_g = watchedValue_o.linreg(watchedValue_n, this.period, 0),
            watchedValue_f = this._context.new_var(watchedValue_g + this.errorDeviation * watchedValue_m),
            watchedValue_y = this._context.new_var(watchedValue_g),
            watchedValue_v = this._context.new_var(watchedValue_g - this.errorDeviation * watchedValue_m);
          return "Simple" === this.maMethod ? (watchedValue_u = watchedValue_o.sma(watchedValue_f, this.averagePeriod, this._context), _ = watchedValue_o.sma(watchedValue_y,
              this.averagePeriod, this._context), watchedValue_p = watchedValue_o.sma(watchedValue_v, this.averagePeriod, this._context)) :
            "Exponential" === this.maMethod ? (watchedValue_u = watchedValue_o.ema(watchedValue_f, this.averagePeriod, this._context), _ = watchedValue_o.ema(watchedValue_y,
              this.averagePeriod, this._context), watchedValue_p = watchedValue_o.ema(watchedValue_v, this.averagePeriod, this._context)) : (watchedValue_u = watchedValue_o.wma(
                watchedValue_f, this.averagePeriod, this._context), _ = watchedValue_o.wma(watchedValue_y, this.averagePeriod, this._context), watchedValue_p = watchedValue_o
              .wma(watchedValue_v, this.averagePeriod, this._context)), [watchedValue_u, _, watchedValue_p]
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
          var watchedValue_t = watchedValue_o.lt(watchedValue_e, -.99) ? -.999 : watchedValue_e;
          return [watchedValue_o.gt(watchedValue_e, .99) ? .999 : watchedValue_t]
        }, this.f_1 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._context.new_var(watchedValue_o.hl2(this._context)),
            watchedValue_i = watchedValue_o.highest(watchedValue_t, watchedValue_e, this._context),
            watchedValue_s = this._context.new_var(watchedValue_o.hl2(this._context)),
            watchedValue_n = watchedValue_o.lowest(watchedValue_s, watchedValue_e, this._context),
            watchedValue_r = this._context.new_var(),
            watchedValue_a = this.f_0(.66 * ((watchedValue_o.hl2(this._context) - watchedValue_n) / watchedValue_o.max(watchedValue_i - watchedValue_n, .001) - .5) + .67 * watchedValue_o.nz(watchedValue_r.get(1)));
          watchedValue_r.set(watchedValue_a[0]);
          var watchedValue_l = this._context.new_var();
          watchedValue_l.set(.5 * watchedValue_o.log((1 + watchedValue_r.get(0)) / watchedValue_o.max(1 - watchedValue_r.get(0), .001)) + .5 * watchedValue_o.nz(watchedValue_l.get(1)));
          var watchedValue_c = watchedValue_l.get(1);
          return [watchedValue_l.get(0), watchedValue_c]
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
            watchedValue_t = watchedValue_o.or(watchedValue_o.isintraday(this._context), watchedValue_o.and(watchedValue_o.isdaily(this._context), watchedValue_o.eq(watchedValue_o.interval(this
              ._context), 1))) ? 1 : 7,
            watchedValue_i = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_s = this._context.new_var(watchedValue_o.log(watchedValue_o.close(this._context) / watchedValue_i.get(1)));
          return [100 * watchedValue_o.stdev(watchedValue_s, watchedValue_e, this._context) * watchedValue_o.sqrt(365 / watchedValue_t)]
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = watchedValue_s / 2;
          this._context.setMinimumAdditionalDepth(Math.ceil(watchedValue_s + watchedValue_n));
          var watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.wma(watchedValue_r, watchedValue_n, this._context),
            watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.wma(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = this.f_0(watchedValue_a, watchedValue_c),
            watchedValue_d = watchedValue_o.sqrt(watchedValue_s),
            watchedValue_u = watchedValue_o.round(watchedValue_d),
            _ = this._context.new_var(watchedValue_h);
          return [watchedValue_o.wma(_, watchedValue_u, this._context)]
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
              color: watchedValue_l
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
              color: watchedValue_r
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
        this.donchian = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = this._context.new_var(watchedValue_e),
            watchedValue_n = this._context.new_var(watchedValue_t);
          return watchedValue_o.avg(watchedValue_o.lowest(watchedValue_s, watchedValue_i, this._context), watchedValue_o.highest(watchedValue_n, watchedValue_i, this._context))
        }, this.f_1 = function() {
          var watchedValue_e = this._input(1),
            watchedValue_t = this._input(2),
            watchedValue_i = this._input(3),
            watchedValue_s = this._input(4) - 1,
            watchedValue_n = this._input(5) - 1,
            watchedValue_r = this._context.new_var(watchedValue_o.time(this._context)),
            watchedValue_a = watchedValue_o.close(this._context),
            watchedValue_l = watchedValue_o.low(this._context),
            watchedValue_c = watchedValue_o.high(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_h = this._context.new_var(watchedValue_o.time(this._context)),
              watchedValue_d = watchedValue_o.close(this._context),
              watchedValue_u = watchedValue_o.low(this._context),
              _ = watchedValue_o.high(this._context);
            watchedValue_a = this._context.new_var(watchedValue_d).adopt(watchedValue_h, watchedValue_r, 1), watchedValue_l = this._context.new_var(watchedValue_u).adopt(watchedValue_h, watchedValue_r, 1), watchedValue_c = this
              ._context.new_var(_).adopt(watchedValue_h, watchedValue_r, 1), this._context.select_sym(0)
          }
          var watchedValue_p = this.donchian(watchedValue_l, watchedValue_c, watchedValue_e),
            watchedValue_m = this.donchian(watchedValue_l, watchedValue_c, watchedValue_t),
            watchedValue_g = watchedValue_o.avg(watchedValue_p, watchedValue_m),
            watchedValue_f = this.donchian(watchedValue_l, watchedValue_c, watchedValue_i);
          return [watchedValue_p, watchedValue_m, watchedValue_a, watchedValue_g, watchedValue_f, -watchedValue_s, watchedValue_s, watchedValue_n, watchedValue_o.gt(watchedValue_g, watchedValue_f) ? 0 : 1]
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this.f_1();
          return [watchedValue_i[0], watchedValue_i[1], {
            value: watchedValue_i[2],
            offset: watchedValue_i[5]
          }, {
            value: watchedValue_i[3],
            offset: watchedValue_i[7]
          }, {
            value: watchedValue_i[4],
            offset: watchedValue_i[7]
          }, watchedValue_i[8]]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return watchedValue_e ? watchedValue_t : watchedValue_i - watchedValue_s
        }, this.f_1 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e + watchedValue_t * watchedValue_i
        }, this.f_2 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e - watchedValue_t * watchedValue_i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2),
            watchedValue_a = this._context.new_var(watchedValue_i),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, watchedValue_n, this._context),
            watchedValue_c = this.f_0(watchedValue_s, watchedValue_o.tr(void 0, this._context), watchedValue_o.high(this._context), watchedValue_o.low(this._context)),
            watchedValue_h = this._context.new_var(watchedValue_c),
            watchedValue_d = watchedValue_o.ema(watchedValue_h, watchedValue_n, this._context);
          return [this.f_1(watchedValue_l, watchedValue_d, watchedValue_r), watchedValue_l, this.f_2(watchedValue_l, watchedValue_d, watchedValue_r)]
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
          return watchedValue_o.ge(watchedValue_e, 0) ? watchedValue_t : -watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e - watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.hlc3(this._context);
          this._context.setMinimumAdditionalDepth(66);
          var watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = watchedValue_o.change(watchedValue_s),
            watchedValue_r = this.f_0(watchedValue_n, watchedValue_o.volume(this._context)),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, 34, this._context),
            watchedValue_c = this._context.new_var(watchedValue_r),
            watchedValue_h = watchedValue_o.ema(watchedValue_c, 55, this._context),
            watchedValue_d = this.f_1(watchedValue_l, watchedValue_h),
            watchedValue_u = this._context.new_var(watchedValue_d);
          return [watchedValue_d, watchedValue_o.ema(watchedValue_u, 13, this._context)]
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
              color: watchedValue_u
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          return watchedValue_e + 2 * watchedValue_t + 3 * watchedValue_i + 4 * watchedValue_s
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            watchedValue_r = this._input(3),
            watchedValue_a = this._input(4),
            watchedValue_l = this._input(5),
            watchedValue_c = this._input(6),
            watchedValue_h = this._input(7),
            watchedValue_d = this._input(8);
          this._context.setMinimumAdditionalDepth(Math.max(watchedValue_a + watchedValue_i, watchedValue_l + watchedValue_s, watchedValue_c + watchedValue_n, watchedValue_h + watchedValue_r) + watchedValue_d);
          var watchedValue_u = watchedValue_o.close(this._context),
            _ = watchedValue_i,
            watchedValue_p = this._context.new_var(watchedValue_u),
            watchedValue_m = watchedValue_o.roc(watchedValue_p, _),
            watchedValue_g = watchedValue_a,
            watchedValue_f = this._context.new_var(watchedValue_m),
            watchedValue_y = watchedValue_o.sma(watchedValue_f, watchedValue_g, this._context),
            watchedValue_v = watchedValue_s,
            S = this._context.new_var(watchedValue_u),
            watchedValue_b = watchedValue_o.roc(S, watchedValue_v),
            watchedValue_w = watchedValue_l,
            C = this._context.new_var(watchedValue_b),
            T = watchedValue_o.sma(C, watchedValue_w, this._context),
            P = watchedValue_n,
            watchedValue_x = this._context.new_var(watchedValue_u),
            M = watchedValue_o.roc(watchedValue_x, P),
            I = watchedValue_c,
            A = this._context.new_var(M),
            L = watchedValue_o.sma(A, I, this._context),
            watchedValue_k = watchedValue_r,
            E = this._context.new_var(watchedValue_u),
            D = watchedValue_o.roc(E, watchedValue_k),
            B = watchedValue_h,
            V = this._context.new_var(D),
            R = watchedValue_o.sma(V, B, this._context),
            N = this.f_0(watchedValue_y, T, L, R),
            O = this._context.new_var(N);
          return [N, watchedValue_o.sma(O, watchedValue_d, this._context)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.close(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n);
          return [watchedValue_o.linreg(watchedValue_r, watchedValue_i, watchedValue_s)]
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._context.new_var(watchedValue_i);
          return [watchedValue_o.linreg(watchedValue_n, watchedValue_s, 0)]
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
              color: watchedValue_c
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
        }, this.linregSlope = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r = 0,
            watchedValue_a = 0,
            watchedValue_l = 0,
            watchedValue_c = 0;
          for (watchedValue_s = 0; watchedValue_s < watchedValue_t; ++watchedValue_s) watchedValue_r += watchedValue_n = watchedValue_t - 1 - watchedValue_s + 1, watchedValue_a += watchedValue_o = watchedValue_e.get(watchedValue_s), watchedValue_l += watchedValue_n * watchedValue_n, watchedValue_c += watchedValue_o * watchedValue_n;
          return (watchedValue_t * watchedValue_c - watchedValue_r * watchedValue_a) / (watchedValue_t * watchedValue_l - watchedValue_r * watchedValue_r)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(watchedValue_o.close(this._context));
          return [this.linregSlope(watchedValue_i, this.period, 0)]
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
          return watchedValue_e ? watchedValue_t : watchedValue_o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.close(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = this._context.new_var(watchedValue_n),
            watchedValue_c = watchedValue_o.sma(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = watchedValue_a,
            watchedValue_d = watchedValue_c,
            watchedValue_u = watchedValue_o.cross(watchedValue_a, watchedValue_c, this._context);
          return [watchedValue_h, watchedValue_d, this.f_0(watchedValue_u, watchedValue_a)]
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
          return watchedValue_e ? watchedValue_t : watchedValue_o.na()
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.close(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = this._context.new_var(watchedValue_n),
            watchedValue_c = watchedValue_o.ema(watchedValue_l, watchedValue_s, this._context),
            watchedValue_h = watchedValue_a,
            watchedValue_d = watchedValue_c,
            watchedValue_u = watchedValue_o.cross(watchedValue_a, watchedValue_c, this._context);
          return [watchedValue_h, watchedValue_d, this.f_0(watchedValue_u, watchedValue_a)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this.f_0(watchedValue_o.high(this._context), watchedValue_o.low(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.ema(watchedValue_n, 9, this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, 9, this._context),
            watchedValue_c = this.f_1(watchedValue_r, watchedValue_l),
            watchedValue_h = this._context.new_var(watchedValue_c);
          return [watchedValue_o.sum(watchedValue_h, watchedValue_i, this._context)]
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
            watchedValue_t = watchedValue_o.close(this._context),
            watchedValue_i = this._context.new_var(watchedValue_t),
            watchedValue_s = watchedValue_o.ema(watchedValue_i, watchedValue_e, this._context),
            watchedValue_n = this._context.new_var(),
            watchedValue_r = watchedValue_n.get(1) + (watchedValue_t - watchedValue_n.get(1)) / (watchedValue_e * watchedValue_o.pow(watchedValue_t / watchedValue_n.get(1), 4));
          return watchedValue_n.set(watchedValue_o.na(watchedValue_n.get(1)) ? watchedValue_s : watchedValue_o.nz(watchedValue_r, watchedValue_s)), [watchedValue_n.get(0)]
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
          return this._context = watchedValue_e, this._input = watchedValue_t, [watchedValue_o.hl2(this._context)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o[this._input(1)](this._context),
            watchedValue_n = this._context.new_var(watchedValue_s).get(watchedValue_i);
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e * (watchedValue_o.le(watchedValue_t, 0) ? 0 : watchedValue_i)
        }, this.f_1 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_e * (watchedValue_o.ge(watchedValue_t, 0) ? 0 : watchedValue_i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.hlc3(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.change(watchedValue_n),
            watchedValue_a = this.f_0(watchedValue_o.volume(this._context), watchedValue_r, watchedValue_s),
            watchedValue_l = this._context.new_var(watchedValue_a),
            watchedValue_c = watchedValue_o.sum(watchedValue_l, watchedValue_i, this._context),
            watchedValue_h = this.f_1(watchedValue_o.volume(this._context), watchedValue_r, watchedValue_s),
            watchedValue_d = this._context.new_var(watchedValue_h),
            watchedValue_u = watchedValue_o.sum(watchedValue_d, watchedValue_i, this._context);
          return [watchedValue_o.rsi(watchedValue_c, watchedValue_u)]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = watchedValue_o[this._input(2)](this._context),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(3),
            watchedValue_a = this._input(4),
            watchedValue_l = this._input(5);
          if (this._context.setMinimumAdditionalDepth(watchedValue_n + watchedValue_l), "" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_c = this._context.new_var(this._context.symbol.time),
              watchedValue_h = watchedValue_o[this._input(2)](this._context);
            watchedValue_s = this._context.new_var(watchedValue_h).adopt(watchedValue_c, watchedValue_i, 1), this._context.select_sym(0)
          }
          var watchedValue_d, watchedValue_u = this._context.new_var(watchedValue_s),
            _ = watchedValue_o.sma(watchedValue_u, watchedValue_n, this._context),
            watchedValue_p = this._context.new_var(_);
          return "EMA" === watchedValue_a ? watchedValue_d = watchedValue_o.ema(watchedValue_p, watchedValue_l, this._context) : "WMA" === watchedValue_a ? watchedValue_d = watchedValue_o.wma(watchedValue_p, watchedValue_l, this._context) :
            "SMA" === watchedValue_a && (watchedValue_d = watchedValue_o.sma(watchedValue_p, watchedValue_l, this._context)), [{
              value: _,
              offset: watchedValue_r
            }, {
              value: watchedValue_d,
              offset: watchedValue_r
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
          var watchedValue_i = watchedValue_o.high(this._context),
            watchedValue_s = watchedValue_o.low(this._context),
            watchedValue_n = this._input(0),
            watchedValue_r = this._input(1),
            watchedValue_a = this._input(2),
            watchedValue_l = this._input(3),
            watchedValue_c = this._context.new_var(watchedValue_i),
            watchedValue_h = this._context.new_var(watchedValue_s);
          return [{
            value: watchedValue_o.sma(watchedValue_c, watchedValue_n, this._context),
            offset: watchedValue_a
          }, {
            value: watchedValue_o.sma(watchedValue_h, watchedValue_r, this._context),
            offset: watchedValue_l
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
              color: watchedValue_c
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
                  color: watchedValue_d,
                  width: 1,
                  style: 0
                },
                1: {
                  color: watchedValue_h,
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
            watchedValue_i = watchedValue_o.change(this._context.new_var(watchedValue_e));
          return watchedValue_t - (watchedValue_o.le(watchedValue_i, 0) ? 0 : 1)
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = watchedValue_o[this._input(3)](this._context),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2),
            watchedValue_a = this._input(4),
            watchedValue_l = this._input(5),
            watchedValue_c = this._input(6);
          if (this._context.setMinimumAdditionalDepth(Math.max(watchedValue_n, watchedValue_r) + watchedValue_a), "" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_h = this._context.new_var(this._context.symbol.time),
              watchedValue_d = watchedValue_o[this._input(3)](this._context);
            watchedValue_s = this._context.new_var(watchedValue_d).adopt(watchedValue_h, watchedValue_i, 0), this._context.select_sym(0)
          }
          var watchedValue_u, _, watchedValue_p = this._context.new_var(watchedValue_s);
          "EMA" === watchedValue_l ? watchedValue_u = watchedValue_o.ema(watchedValue_p, watchedValue_n, this._context) : "WMA" === watchedValue_l ? watchedValue_u = watchedValue_o.wma(watchedValue_p, watchedValue_n, this._context) :
            "SMA" === watchedValue_l && (watchedValue_u = watchedValue_o.sma(watchedValue_p, watchedValue_n, this._context)), "EMA" === watchedValue_l ? _ = watchedValue_o.ema(watchedValue_p, watchedValue_r, this._context) :
            "WMA" === watchedValue_l ? _ = watchedValue_o.wma(watchedValue_p, watchedValue_r, this._context) : "SMA" === watchedValue_l && (_ = watchedValue_o.sma(watchedValue_p, watchedValue_r, this._context));
          var watchedValue_m, watchedValue_g = this.f_0(watchedValue_u, _),
            watchedValue_f = this._context.new_var(watchedValue_g);
          "EMA" === watchedValue_c ? watchedValue_m = watchedValue_o.ema(watchedValue_f, watchedValue_a, this._context) : "WMA" === watchedValue_c ? watchedValue_m = watchedValue_o.wma(watchedValue_f, watchedValue_a, this._context) :
            "SMA" === watchedValue_c && (watchedValue_m = watchedValue_o.sma(watchedValue_f, watchedValue_a, this._context));
          var watchedValue_y = this.f_0(watchedValue_g, watchedValue_m);
          return [watchedValue_y, watchedValue_g, watchedValue_m, this.f_1(watchedValue_y)]
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
          var watchedValue_i = watchedValue_o[this._input(1)](this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(2),
            watchedValue_r = this._input(3),
            watchedValue_a = this._input(4);
          this._context.setMinimumAdditionalDepth(watchedValue_s + watchedValue_a);
          var watchedValue_l, watchedValue_c = this._context.new_var(watchedValue_i),
            watchedValue_h = watchedValue_o.ema(watchedValue_c, watchedValue_s, this._context),
            watchedValue_d = this._context.new_var(watchedValue_h);
          return "EMA" === watchedValue_r ? watchedValue_l = watchedValue_o.ema(watchedValue_d, watchedValue_a, this._context) : "WMA" === watchedValue_r ? watchedValue_l = watchedValue_o.wma(watchedValue_d, watchedValue_a, this._context) :
            "SMA" === watchedValue_r && (watchedValue_l = watchedValue_o.sma(watchedValue_d, watchedValue_a, this._context)), [{
              value: watchedValue_h,
              offset: watchedValue_n
            }, {
              value: watchedValue_l,
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
          var watchedValue_i = watchedValue_o[this._input(1)](this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(2),
            watchedValue_r = this._context.new_var(watchedValue_i);
          return [{
            value: watchedValue_o.wma(watchedValue_r, watchedValue_s, this._context),
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(watchedValue_o.time(this._context)),
            watchedValue_s = watchedValue_o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(watchedValue_o.time(this._context)),
              watchedValue_r = watchedValue_o.close(this._context);
            watchedValue_s = this._context.new_var(watchedValue_r).adopt(watchedValue_n, watchedValue_i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, watchedValue_l, watchedValue_c = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(2) ? (watchedValue_a = watchedValue_o.ema(watchedValue_c, this._input(1), this._context), watchedValue_l = watchedValue_o.ema(watchedValue_c,
            this._input(2), this._context)) : "Weighted" === this._input(2) ? (watchedValue_a = watchedValue_o.wma(watchedValue_c, this._input(1),
            this._context), watchedValue_l = watchedValue_o.wma(watchedValue_c, this._input(2), this._context)) : (watchedValue_a = watchedValue_o.sma(watchedValue_c, this._input(1), this
            ._context), watchedValue_l = watchedValue_o.sma(watchedValue_c, this._input(2), this._context)), [watchedValue_a, watchedValue_l]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = watchedValue_o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(this._context.symbol.time),
              watchedValue_r = watchedValue_o.close(this._context);
            watchedValue_s = this._context.new_var(watchedValue_r).adopt(watchedValue_n, watchedValue_i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, watchedValue_l, watchedValue_c, watchedValue_h = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(4) ? (watchedValue_a = watchedValue_o.ema(watchedValue_h, this._input(1), this._context), watchedValue_l = watchedValue_o.ema(watchedValue_h,
              this._input(2), this._context), watchedValue_c = watchedValue_o.ema(watchedValue_h, this._input(3), this._context)) : "Weighted" === this
            ._input(4) ? (watchedValue_a = watchedValue_o.wma(watchedValue_h, this._input(1), this._context), watchedValue_l = watchedValue_o.wma(watchedValue_h, this._input(2), this
              ._context), watchedValue_c = watchedValue_o.wma(watchedValue_h, this._input(3), this._context)) : (watchedValue_a = watchedValue_o.sma(watchedValue_h, this._input(1), this
              ._context), watchedValue_l = watchedValue_o.sma(watchedValue_h, this._input(2), this._context), watchedValue_c = watchedValue_o.sma(watchedValue_h, this._input(3), this
              ._context)), [watchedValue_a, watchedValue_l, watchedValue_c]
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
          var watchedValue_i = this.periods,
            watchedValue_s = this._context.new_var(),
            watchedValue_n = watchedValue_e.get(),
            watchedValue_r = watchedValue_o.stdev(watchedValue_t, watchedValue_i, this._context),
            watchedValue_a = watchedValue_o.log(watchedValue_n / watchedValue_e.get(watchedValue_i)) / (watchedValue_r * Math.sqrt(watchedValue_i)),
            watchedValue_l = .1 * Math.abs(watchedValue_a),
            watchedValue_c = (watchedValue_n - watchedValue_s.get(1)) * watchedValue_l + watchedValue_s.get(1);
          return watchedValue_s.set(isNaN(watchedValue_c) ? watchedValue_n : watchedValue_c), watchedValue_c
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_s = this._context.new_var(watchedValue_o.log(watchedValue_i.get() / watchedValue_i.get(1)));
          return [this.ama(watchedValue_i, watchedValue_s)]
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
          for (var watchedValue_i = [], watchedValue_s = 0, watchedValue_o = 1; watchedValue_o <= this.periods; ++watchedValue_o) {
            var watchedValue_n = Math.sin((1 + watchedValue_o) / this.periods * Math.PI / 2);
            watchedValue_i.unshift(watchedValue_n), watchedValue_s += watchedValue_n
          }
          this.hmaFactors = watchedValue_i, this.hmaFactorsSum = watchedValue_s
        }, this.hma = function(watchedValue_e) {
          for (var watchedValue_t = this.periods, watchedValue_i = 0, watchedValue_s = 0; watchedValue_s < watchedValue_t; ++watchedValue_s) watchedValue_i += watchedValue_e.get(watchedValue_t - watchedValue_s - 1) * this.hmaFactors[watchedValue_s];
          return watchedValue_i /= this.hmaFactorsSum
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(watchedValue_o.close(this._context));
          return [this.hma(watchedValue_i)]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._context.new_var(this._context.symbol.time),
            watchedValue_s = watchedValue_o.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var watchedValue_n = this._context.new_var(this._context.symbol.time),
              watchedValue_r = watchedValue_o.close(this._context);
            watchedValue_s = this._context.new_var(watchedValue_r).adopt(watchedValue_n, watchedValue_i, 1), this._context.select_sym(0)
          }
          var watchedValue_a, watchedValue_l, watchedValue_c, watchedValue_h, watchedValue_d, watchedValue_u, _ = this._context.new_var(watchedValue_s);
          return "Exponential" === this._input(7) ? (watchedValue_a = watchedValue_o.ema(_, this._input(1), this._context), watchedValue_l = watchedValue_o.ema(_,
            this._input(2), this._context), watchedValue_c = watchedValue_o.ema(_, this._input(3), this._context), watchedValue_h = watchedValue_o.ema(_, this
            ._input(4), this._context), watchedValue_d = watchedValue_o.ema(_, this._input(5), this._context), watchedValue_u = watchedValue_o.ema(_, this
            ._input(6), this._context)) : "Weighted" === this._input(7) ? (watchedValue_a = watchedValue_o.wma(_, this._input(1), this
            ._context), watchedValue_l = watchedValue_o.wma(_, this._input(2), this._context), watchedValue_c = watchedValue_o.wma(_, this._input(3), this
            ._context), watchedValue_h = watchedValue_o.wma(_, this._input(4), this._context), watchedValue_d = watchedValue_o.wma(_, this._input(5), this
            ._context), watchedValue_u = watchedValue_o.wma(_, this._input(6), this._context)) : (watchedValue_a = watchedValue_o.sma(_, this._input(1), this
            ._context), watchedValue_l = watchedValue_o.sma(_, this._input(2), this._context), watchedValue_c = watchedValue_o.sma(_, this._input(3), this
            ._context), watchedValue_h = watchedValue_o.sma(_, this._input(4), this._context), watchedValue_d = watchedValue_o.sma(_, this._input(5), this
            ._context), watchedValue_u = watchedValue_o.sma(_, this._input(6), this._context)), [watchedValue_a, watchedValue_l, watchedValue_c, watchedValue_h, watchedValue_d, watchedValue_u]
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
              color: watchedValue_c
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
          var watchedValue_i, watchedValue_s = watchedValue_o.close(this._context);
          return watchedValue_i = watchedValue_s > this._context.new_var(watchedValue_s).get(1) ? 1 : 0, [100 * watchedValue_o.sma(this._context.new_var(watchedValue_i), this
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_o.gt(watchedValue_e, 0) ? watchedValue_t : watchedValue_o.lt(watchedValue_i, 0) ? -watchedValue_t : 0 * watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = watchedValue_o.change(watchedValue_s);
          return [this.f_0(watchedValue_n, watchedValue_o.volume(this._context), watchedValue_n)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return watchedValue_o.gt(watchedValue_e, 0) ? watchedValue_t : watchedValue_o.lt(watchedValue_i, 0) ? -watchedValue_t : 0 * watchedValue_t
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.close(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.change(watchedValue_r),
            watchedValue_l = this.f_0(watchedValue_a, watchedValue_o.volume(this._context), watchedValue_a),
            watchedValue_c = watchedValue_o.cum(watchedValue_l, this._context);
          this._context.setMinimumAdditionalDepth(watchedValue_s);
          var watchedValue_h, watchedValue_d = this._context.new_var(watchedValue_c);
          return "EMA" === watchedValue_i ? watchedValue_h = watchedValue_o.ema(watchedValue_d, watchedValue_s, this._context) : "WMA" === watchedValue_i ? watchedValue_h = watchedValue_o.wma(watchedValue_d, watchedValue_s, this._context) :
            "SMA" === watchedValue_i && (watchedValue_h = watchedValue_o.sma(watchedValue_d, watchedValue_s, this._context)), [watchedValue_c, watchedValue_h]
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
          this._context = watchedValue_e, "" !== watchedValue_t(0) && this._context.new_sym(watchedValue_t(0), watchedValue_o.period(this._context))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          const watchedValue_i = () => watchedValue_o.sar(this._input(1), this._input(2), this._input(3), this._context);
          if ("" === this._input(0)) return [watchedValue_i()];
          this._context.select_sym(0);
          const watchedValue_s = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const watchedValue_n = this._context.new_var(watchedValue_i()).adopt(this._context.new_var(this._context.symbol.time), watchedValue_s, 1);
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
          var watchedValue_i = watchedValue_o.high(this._context),
            watchedValue_s = this._context.new_var(watchedValue_i),
            watchedValue_n = watchedValue_o.low(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = this._input(0),
            watchedValue_l = this._input(1),
            watchedValue_c = watchedValue_o.highest(watchedValue_s, watchedValue_a, this._context),
            watchedValue_h = watchedValue_o.lowest(watchedValue_r, watchedValue_a, this._context);
          return [{
            value: watchedValue_c,
            offset: watchedValue_l
          }, {
            value: watchedValue_h,
            offset: watchedValue_l
          }, {
            value: watchedValue_o.avg(watchedValue_c, watchedValue_h),
            offset: watchedValue_l
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
              color: watchedValue_u
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._context.new_var(watchedValue_i),
            watchedValue_a = watchedValue_o.sma(watchedValue_r, watchedValue_s, this._context),
            watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.sma(watchedValue_l, watchedValue_n, this._context);
          return [this.f_0(watchedValue_a, watchedValue_c)]
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
          var watchedValue_e = this._context.new_var(watchedValue_o.close(this._context));
          return [watchedValue_o.cum(watchedValue_o.change(watchedValue_e) / watchedValue_e.get(1) * watchedValue_o.volume(this._context), this._context)]
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
        this.orderRank = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          let watchedValue_s = watchedValue_e.get(watchedValue_t),
            watchedValue_n = 1,
            watchedValue_r = 0;
          for (let watchedValue_t = 0; watchedValue_t < watchedValue_i; watchedValue_t++) {
            const watchedValue_i = watchedValue_e.get(watchedValue_t);
            if (watchedValue_o.na(watchedValue_i)) return watchedValue_o.na();
            watchedValue_s < watchedValue_i ? watchedValue_n += 1 : watchedValue_s === watchedValue_i && (watchedValue_r += 1)
          }
          return watchedValue_n + (watchedValue_r - 1) / 2
        }, this.rankDifferences = function(watchedValue_e, watchedValue_t) {
          var watchedValue_i = 0;
          for (let watchedValue_s = 0; watchedValue_s < watchedValue_t; watchedValue_s++) watchedValue_i += Math.pow(watchedValue_s + 1 - this.orderRank(watchedValue_e, watchedValue_s, watchedValue_t), 2);
          return watchedValue_i
        }, this.rci = function(watchedValue_e, watchedValue_t) {
          return 1 - 6 * this.rankDifferences(watchedValue_e, watchedValue_t) / (watchedValue_t * (watchedValue_t * watchedValue_t - 1))
        }, this.main = function(watchedValue_e, watchedValue_t) {
          var watchedValue_i = watchedValue_e.new_var(watchedValue_o.close(watchedValue_e)),
            watchedValue_s = watchedValue_t(0);
          return [this.rci(watchedValue_i, watchedValue_s)]
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
          var watchedValue_i = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_s = this._input(0);
          return [100 * (watchedValue_i.get(0) - watchedValue_i.get(watchedValue_s)) / watchedValue_i.get(watchedValue_s)]
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
          return watchedValue_o.max(watchedValue_e, 0)
        }, this.f_1 = function(watchedValue_e) {
          return -watchedValue_o.min(watchedValue_e, 0)
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_o.eq(watchedValue_e, 0) ? 100 : watchedValue_o.eq(watchedValue_t, 0) ? 0 : 100 - 100 / (1 + watchedValue_t / watchedValue_e)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_s + watchedValue_r);
          var watchedValue_a, watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.change(watchedValue_l),
            watchedValue_h = this.f_0(watchedValue_c),
            watchedValue_d = this._context.new_var(watchedValue_h),
            watchedValue_u = watchedValue_o.rma(watchedValue_d, watchedValue_s, this._context),
            _ = this.f_1(watchedValue_c),
            watchedValue_p = this._context.new_var(_),
            watchedValue_m = watchedValue_o.rma(watchedValue_p, watchedValue_s, this._context),
            watchedValue_g = this.f_2(watchedValue_m, watchedValue_u),
            watchedValue_f = this._context.new_var(watchedValue_g);
          return "EMA" === watchedValue_n ? watchedValue_a = watchedValue_o.ema(watchedValue_f, watchedValue_r, this._context) : "WMA" === watchedValue_n ? watchedValue_a = watchedValue_o.wma(watchedValue_f, watchedValue_r, this._context) :
            "SMA" === watchedValue_n && (watchedValue_a = watchedValue_o.sma(watchedValue_f, watchedValue_r, this._context)), [{
              value: watchedValue_g
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
              color: watchedValue_u
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this.f_0(watchedValue_o.close(this._context), watchedValue_o.open(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.swma(watchedValue_n, this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.sum(watchedValue_a, watchedValue_i, this._context),
            watchedValue_c = this.f_0(watchedValue_o.high(this._context), watchedValue_o.low(this._context)),
            watchedValue_h = this._context.new_var(watchedValue_c),
            watchedValue_d = watchedValue_o.swma(watchedValue_h, this._context),
            watchedValue_u = this._context.new_var(watchedValue_d),
            _ = watchedValue_o.sum(watchedValue_u, watchedValue_i, this._context),
            watchedValue_p = this.f_1(watchedValue_l, _),
            watchedValue_m = this._context.new_var(watchedValue_p);
          return [watchedValue_p, watchedValue_o.swma(watchedValue_m, this._context)]
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
          return watchedValue_o.le(watchedValue_e, 0) ? 0 : watchedValue_t
        }, this.f_1 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_o.gt(watchedValue_e, 0) ? 0 : watchedValue_t
        }, this.f_2 = function(watchedValue_e, watchedValue_t) {
          return watchedValue_e / (watchedValue_e + watchedValue_t) * 100
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0);
          this._context.setMinimumAdditionalDepth(watchedValue_i + 12);
          var watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.stdev(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = this._context.new_var(watchedValue_s),
            watchedValue_l = watchedValue_o.change(watchedValue_a),
            watchedValue_c = this.f_0(watchedValue_l, watchedValue_r),
            watchedValue_h = this._context.new_var(watchedValue_c),
            watchedValue_d = watchedValue_o.ema(watchedValue_h, 14, this._context),
            watchedValue_u = this.f_1(watchedValue_l, watchedValue_r),
            _ = this._context.new_var(watchedValue_u),
            watchedValue_p = watchedValue_o.ema(_, 14, this._context);
          return [this.f_2(watchedValue_d, watchedValue_p)]
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
              color: watchedValue_c
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_i + watchedValue_s + watchedValue_n);
          var watchedValue_r = watchedValue_o.close(this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.tsi(watchedValue_a, watchedValue_i, watchedValue_s, this._context),
            watchedValue_c = this._context.new_var(watchedValue_l),
            watchedValue_h = watchedValue_o.ema(watchedValue_c, watchedValue_n, this._context);
          return [watchedValue_l, watchedValue_h, this.f_0(watchedValue_l, watchedValue_h)]
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
            watchedValue_t = watchedValue_o[this._input(1)](this._context);
          return [watchedValue_o.smma(watchedValue_t, watchedValue_e, this._context)]
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
              color: watchedValue_u
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._context.new_var(watchedValue_o.close(this._context));
          return [watchedValue_o.stdev(watchedValue_n, watchedValue_i, this._context) * watchedValue_s]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(watchedValue_i + watchedValue_s + watchedValue_n);
          var watchedValue_r = watchedValue_o.close(this._context),
            watchedValue_a = watchedValue_o.high(this._context),
            watchedValue_l = watchedValue_o.low(this._context),
            watchedValue_c = this._context.new_var(watchedValue_r),
            watchedValue_h = this._context.new_var(watchedValue_a),
            watchedValue_d = this._context.new_var(watchedValue_l),
            watchedValue_u = watchedValue_o.stoch(watchedValue_c, watchedValue_h, watchedValue_d, watchedValue_i, this._context),
            _ = this._context.new_var(watchedValue_u),
            watchedValue_p = watchedValue_o.sma(_, watchedValue_s, this._context),
            watchedValue_m = this._context.new_var(watchedValue_p);
          return [watchedValue_p, watchedValue_o.sma(watchedValue_m, watchedValue_n, this._context)]
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
        this.f_1 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = watchedValue_i.new_var(watchedValue_o.max(watchedValue_o.change(watchedValue_e), 0));
          return watchedValue_o.rma(watchedValue_s, watchedValue_t, watchedValue_i)
        }, this.f_2 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = watchedValue_i.new_var(-watchedValue_o.min(watchedValue_o.change(watchedValue_e), 0));
          return watchedValue_o.rma(watchedValue_s, watchedValue_t, watchedValue_i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2),
            watchedValue_a = this._input(3);
          watchedValue_e.setMinimumAdditionalDepth(watchedValue_s + watchedValue_n + watchedValue_r + watchedValue_a);
          var watchedValue_l = this._context.new_var(watchedValue_i),
            watchedValue_c = watchedValue_o.rsi(this.f_1(watchedValue_l, watchedValue_s, this._context), this.f_2(watchedValue_l, watchedValue_s, this._context)),
            watchedValue_h = this._context.new_var(watchedValue_c),
            watchedValue_d = this._context.new_var(watchedValue_c),
            watchedValue_u = this._context.new_var(watchedValue_c),
            _ = watchedValue_o.stoch(watchedValue_h, watchedValue_d, watchedValue_u, watchedValue_n, this._context),
            watchedValue_p = this._context.new_var(_),
            watchedValue_m = watchedValue_o.sma(watchedValue_p, watchedValue_r, this._context),
            watchedValue_g = this._context.new_var(watchedValue_m);
          return [watchedValue_m, watchedValue_o.sma(watchedValue_g, watchedValue_a, this._context)]
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
          return watchedValue_o.log(watchedValue_e)
        }, this.f_1 = function(watchedValue_e) {
          return 1e4 * watchedValue_e
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0);
          watchedValue_e.setMinimumAdditionalDepth(3 * watchedValue_i);
          var watchedValue_s = this.f_0(watchedValue_o.close(this._context)),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.ema(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, watchedValue_i, this._context),
            watchedValue_c = this._context.new_var(watchedValue_l),
            watchedValue_h = watchedValue_o.ema(watchedValue_c, watchedValue_i, this._context),
            watchedValue_d = this._context.new_var(watchedValue_h),
            watchedValue_u = watchedValue_o.change(watchedValue_d);
          return [this.f_1(watchedValue_u)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return 3 * (watchedValue_e - watchedValue_t) + watchedValue_i
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0);
          this._context.setMinimumAdditionalDepth(3 * watchedValue_i);
          var watchedValue_s = watchedValue_o.close(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.ema(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.ema(watchedValue_a, watchedValue_i, this._context),
            watchedValue_c = this._context.new_var(watchedValue_l),
            watchedValue_h = watchedValue_o.ema(watchedValue_c, watchedValue_i, this._context);
          return [this.f_0(watchedValue_r, watchedValue_l, watchedValue_h)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2);
          this._context.setMinimumAdditionalDepth(this._input(0) + this._input(1) + this._input(2));
          var watchedValue_r = watchedValue_o.close(this._context),
            watchedValue_a = this._context.new_var(watchedValue_r),
            watchedValue_l = watchedValue_o.tsi(watchedValue_a, watchedValue_s, watchedValue_i, this._context),
            watchedValue_c = this._context.new_var(watchedValue_l);
          return [watchedValue_l, watchedValue_o.ema(watchedValue_c, watchedValue_n, this._context)]
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
              color: watchedValue_c
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
          for (var watchedValue_e = this._context.new_var(watchedValue_o.close(this._context)), watchedValue_t = watchedValue_o.sum(watchedValue_e, this.period, this._context),
              watchedValue_i = 0, watchedValue_s = 0, watchedValue_n = 0; watchedValue_n < this.period; watchedValue_n++) {
            var watchedValue_r = watchedValue_e.get(watchedValue_n);
            watchedValue_s += (this.period - 1 - watchedValue_n) * watchedValue_r, watchedValue_i += watchedValue_r * watchedValue_r
          }
          var watchedValue_a = watchedValue_s - this.invertedPeriod * this.sumX * watchedValue_t,
            watchedValue_l = (this.sumXX - this.invertedPeriodSumXSumX) * (watchedValue_i - this.invertedPeriod * watchedValue_t * watchedValue_t);
          return watchedValue_l < 0 ? 0 == watchedValue_a ? 0 : watchedValue_a > 0 ? 1 : -1 : watchedValue_a / (watchedValue_l = Math.sqrt(watchedValue_l))
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
          return this._context = watchedValue_e, this._input = watchedValue_t, [watchedValue_o.hlc3(this._context)]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = this._context.new_var(watchedValue_e),
            watchedValue_n = this._context.new_var(watchedValue_t);
          return [watchedValue_o.sum(watchedValue_s, watchedValue_i, this._context) / watchedValue_o.sum(watchedValue_n, watchedValue_i, this._context)]
        }, this.f_1 = function() {
          var watchedValue_e = this._input(0),
            watchedValue_t = this._input(1),
            watchedValue_i = this._input(2),
            watchedValue_s = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_n = watchedValue_o.max(watchedValue_o.high(this._context), watchedValue_s.get(1)),
            watchedValue_r = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_a = watchedValue_o.min(watchedValue_o.low(this._context), watchedValue_r.get(1)),
            watchedValue_l = watchedValue_o.close(this._context) - watchedValue_a,
            watchedValue_c = watchedValue_n - watchedValue_a,
            watchedValue_h = this.f_0(watchedValue_l, watchedValue_c, watchedValue_e),
            watchedValue_d = this.f_0(watchedValue_l, watchedValue_c, watchedValue_t),
            watchedValue_u = this.f_0(watchedValue_l, watchedValue_c, watchedValue_i);
          return [100 * (4 * watchedValue_h[0] + 2 * watchedValue_d[0] + watchedValue_u[0]) / 7]
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
        }, this.stdev = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = this.variance(watchedValue_e, watchedValue_t, watchedValue_i);
          return watchedValue_o.sqrt(watchedValue_s)
        }, this.variance = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s = watchedValue_o.sma(watchedValue_e, watchedValue_t, watchedValue_i);
          return this.variance2(watchedValue_e, watchedValue_s, watchedValue_t)
        }, this.variance2 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          var watchedValue_s, watchedValue_o, watchedValue_n = 0;
          for (watchedValue_s = 0; watchedValue_s < watchedValue_i; watchedValue_s++) watchedValue_n += (watchedValue_o = watchedValue_e.get(watchedValue_s) - watchedValue_t) * watchedValue_o;
          return watchedValue_n / (watchedValue_i - 1)
        }, this.standardHistVol = function() {
          var watchedValue_e = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_t = this._context.new_var(watchedValue_o.log(watchedValue_e.get() / watchedValue_e.get(1)));
          return 100 * this.stdev(watchedValue_t, this.period, this._context) * watchedValue_o.sqrt(this.daysPerYear)
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
          for (var watchedValue_e = this._context.new_var(watchedValue_o.close(this._context)), watchedValue_t = this._context.new_var(watchedValue_e.symbol.time),
              watchedValue_i = Math.sqrt((watchedValue_t.get(0) - watchedValue_t.get(1)) / 864e5 / this.daysPerYear), watchedValue_s = Math.log(watchedValue_o.close(this
                ._context) / watchedValue_e.get(1)), watchedValue_n = this._context.new_var(watchedValue_s / watchedValue_i), watchedValue_r = this._context.new_var(Math.pow(watchedValue_n,
                2)), watchedValue_a = 0, watchedValue_l = 0; watchedValue_l < this.period; watchedValue_l++) watchedValue_a += watchedValue_r.get(watchedValue_l);
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
              color: watchedValue_c
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
          var watchedValue_e = this._context.new_var(Math.log(watchedValue_o.open(this._context))),
            watchedValue_t = this._context.new_var(Math.log(watchedValue_o.high(this._context))),
            watchedValue_i = this._context.new_var(Math.log(watchedValue_o.low(this._context))),
            watchedValue_s = this._context.new_var(Math.log(watchedValue_o.close(this._context))),
            watchedValue_n = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_r = this._context.new_var(watchedValue_n.symbol.time),
            watchedValue_a = (watchedValue_r.get(0) - watchedValue_r.get(1)) / 1e3,
            watchedValue_l = .5 * this.square(watchedValue_t.get() - watchedValue_i.get());
          watchedValue_l -= (Math.log(4) - 1) * this.square(watchedValue_s.get() - watchedValue_e.get()), this.marketClosedPercentage > 0 && (watchedValue_l = .12 *
            this.square(watchedValue_e.get() - watchedValue_s.get(1)) / this.marketClosedPercentage + .88 * watchedValue_l / (1 - this
              .marketClosedPercentage)), watchedValue_l /= watchedValue_a, watchedValue_l *= this.secondsPerYear;
          var watchedValue_c = this._context.new_var(watchedValue_l);
          return 100 * Math.sqrt(watchedValue_o.sum(watchedValue_c, this.period, this._context) / this.period)
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
              color: watchedValue_c
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
          var watchedValue_e = watchedValue_o.high(this._context) - watchedValue_o.low(this._context),
            watchedValue_t = watchedValue_o.high(this._context) - this.bars[this.bars.length - 2],
            watchedValue_i = this.bars[this.bars.length - 2] - watchedValue_o.low(this._context);
          return this.tr = Math.max(watchedValue_e, watchedValue_t, watchedValue_i), "Exponential" === this.maMethod ? this.atr = watchedValue_o.ema(this._context
            .new_var(this.tr), this.period, this._context) : this.atr = this.tr / this.period + (1 - 1 / this
            .period) * this.atr, this.atr * this.atrMult
        }, this.calculateVolatility = function() {
          if (watchedValue_o.close(this._context) === this.bars[this.bars.length - 1]) return this.lastSar;
          if (this.bars.push(watchedValue_o.close(this._context)), 1 === this.count) this.atr = watchedValue_o.high(this._context) - watchedValue_o
            .low(this._context), this.sic = watchedValue_o.close(this._context);
          else if (this.count < this.period) {
            var watchedValue_e = watchedValue_o.high(this._context) - watchedValue_o.low(this._context),
              watchedValue_t = watchedValue_o.high(this._context) - this.bars[this.bars.length - 2],
              watchedValue_i = this.bars[this.bars.length - 2] - watchedValue_o.low(this._context);
            this.atr += Math.max(watchedValue_e, watchedValue_t, watchedValue_i), watchedValue_o.close(this._context) > this.sic && (this.sic = watchedValue_o.close(this
              ._context))
          } else if (this.count === this.period) {
            watchedValue_e = watchedValue_o.high(this._context) - watchedValue_o.low(this._context), watchedValue_t = watchedValue_o.high(this._context) - this.bars[this.bars
              .length - 2], watchedValue_i = this.bars[this.bars.length - 2] - watchedValue_o.low(this._context);
            this.atr += Math.max(watchedValue_e, watchedValue_t, watchedValue_i), this.atr *= 1 / this.period, watchedValue_o.close(this._context) > this.sic && (
                this.sic = watchedValue_o.close(this._context)), this.position = "LONG", this.nextsar = this.sic - this.atr *
              this.atrMult
          } else {
            var watchedValue_s = this.nextsar;
            "LONG" === this.position ? watchedValue_o.close(this._context) < watchedValue_s ? (this.position = "SHORT", this.sic = watchedValue_o
              .close(this._context), this.nextsar = this.sic + this.computeATR()) : (this.position = "LONG",
              this.sic = Math.max(watchedValue_o.close(this._context), this.sic), this.nextsar = this.sic - this
              .computeATR()) : "SHORT" === this.position && (watchedValue_o.close(this._context) > watchedValue_s ? (this.position =
              "LONG", this.sic = watchedValue_o.close(this._context), this.nextsar = this.sic - this.computeATR()) : (
              this.position = "SHORT", this.sic = Math.min(watchedValue_o.close(this._context), this.sic), this.nextsar =
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
              return function(watchedValue_t, watchedValue_i) {
                return watchedValue_o.weekofyear(watchedValue_e, watchedValue_t) !== watchedValue_o.weekofyear(watchedValue_e, watchedValue_i) || watchedValue_o.year(watchedValue_e, watchedValue_t) !== watchedValue_o.year(watchedValue_e, watchedValue_i)
              };
            case "Month":
              return function(watchedValue_t, watchedValue_i) {
                return watchedValue_o.month(watchedValue_e, watchedValue_t) !== watchedValue_o.month(watchedValue_e, watchedValue_i) || watchedValue_o.year(watchedValue_e, watchedValue_t) !== watchedValue_o.year(watchedValue_e, watchedValue_i)
              };
            case "Quarter":
              return function(watchedValue_t, watchedValue_i) {
                return Math.floor(watchedValue_o.month(watchedValue_e, watchedValue_t) / 3) !== Math.floor(watchedValue_o.month(watchedValue_e, watchedValue_i) / 3) || watchedValue_o.year(watchedValue_e, watchedValue_t) !== watchedValue_o
                  .year(watchedValue_e, watchedValue_i)
              };
            case "Year":
              return function(watchedValue_t, watchedValue_i) {
                return watchedValue_o.year(watchedValue_e, watchedValue_t) !== watchedValue_o.year(watchedValue_e, watchedValue_i)
              };
            case "Decade":
              return function(watchedValue_t, watchedValue_i) {
                return Math.floor(watchedValue_o.year(watchedValue_e, watchedValue_t) / 10) !== Math.floor(watchedValue_o.year(watchedValue_e, watchedValue_i) / 10)
              };
            case "Century":
              return function(watchedValue_t, watchedValue_i) {
                return Math.floor(watchedValue_o.year(watchedValue_e, watchedValue_t) / 100) !== Math.floor(watchedValue_o.year(watchedValue_e, watchedValue_i) / 100)
              };
            default:
              return watchedValue_e => this._isFirstBarInSession(watchedValue_e)
          }
        }, this.init = function(watchedValue_e, watchedValue_t) {
          this._input = watchedValue_t, this._isFirstBarInSession = null;
          const watchedValue_i = this._input(1) || "Session";
          this._anchorChecker = this.createAnchorChecker(watchedValue_e, watchedValue_i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          const watchedValue_i = this._input(0);
          var watchedValue_s = watchedValue_e.new_var(),
            watchedValue_n = watchedValue_e.new_var(),
            watchedValue_r = watchedValue_e.new_var();
          const watchedValue_a = watchedValue_o.time(this._context),
            watchedValue_l = this._context.new_unlimited_var(watchedValue_a).get(1);
          if (watchedValue_a) {
            if (null === this._isFirstBarInSession) {
              const watchedValue_t = watchedValue_o.createNthBarInSessionCheck(watchedValue_e);
              this._isFirstBarInSession = watchedValue_e => watchedValue_t(watchedValue_e, 0)
            }
            this._anchorChecker(watchedValue_a, watchedValue_l) && (this.f_1(watchedValue_s), this.f_1(watchedValue_n), watchedValue_r.set(watchedValue_a))
          }
          return watchedValue_s.set(watchedValue_o.nz(watchedValue_s.get(1)) + watchedValue_o[watchedValue_i](this._context) * watchedValue_o.volume(this._context)), watchedValue_n.set(watchedValue_o.nz(watchedValue_n.get(1)) + watchedValue_o
            .volume(this._context)), watchedValue_o.na(watchedValue_r.get(0)) ? (watchedValue_e.symbol.isLastBar && watchedValue_o.error(
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
          var watchedValue_i = watchedValue_o.close(this._context),
            watchedValue_s = this._input(0),
            watchedValue_n = this._context.new_var(watchedValue_i);
          return [watchedValue_o.vwma(watchedValue_n, watchedValue_s, this._context)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.volume(this._context),
            watchedValue_r = this._context.new_var(watchedValue_n),
            watchedValue_a = watchedValue_o.ema(watchedValue_r, watchedValue_i, this._context),
            watchedValue_l = this._context.new_var(watchedValue_n),
            watchedValue_c = watchedValue_o.ema(watchedValue_l, watchedValue_s, this._context);
          return [this.f_0(watchedValue_a, watchedValue_c)]
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
            watchedValue_t = this._context.new_var(watchedValue_o.low(this._context)),
            watchedValue_i = this._context.new_var(watchedValue_o.abs(watchedValue_o.high(this._context) - watchedValue_t.get(1))),
            watchedValue_s = watchedValue_o.sum(watchedValue_i, watchedValue_e, this._context),
            watchedValue_n = this._context.new_var(watchedValue_o.high(this._context)),
            watchedValue_r = this._context.new_var(watchedValue_o.abs(watchedValue_o.low(this._context) - watchedValue_n.get(1))),
            watchedValue_a = watchedValue_o.sum(watchedValue_r, watchedValue_e, this._context),
            watchedValue_l = this._context.new_var(watchedValue_o.atr(1, this._context)),
            watchedValue_c = watchedValue_o.sum(watchedValue_l, watchedValue_e, this._context);
          return [watchedValue_s / watchedValue_c, watchedValue_a / watchedValue_c]
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
        this.f_0 = function(watchedValue_e, watchedValue_t, watchedValue_i) {
          return 100 * (watchedValue_e - watchedValue_t) / (watchedValue_t - watchedValue_i)
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this._input(0),
            watchedValue_s = watchedValue_o.high(this._context),
            watchedValue_n = this._context.new_var(watchedValue_s),
            watchedValue_r = watchedValue_o.highest(watchedValue_n, watchedValue_i, this._context),
            watchedValue_a = watchedValue_o.low(this._context),
            watchedValue_l = this._context.new_var(watchedValue_a),
            watchedValue_c = watchedValue_o.lowest(watchedValue_l, watchedValue_i, this._context);
          return [this.f_0(watchedValue_o.close(this._context), watchedValue_r, watchedValue_c)]
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
          var watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = this._input(2),
            watchedValue_r = this._input(3),
            watchedValue_a = this._input(4),
            watchedValue_l = this._input(5),
            watchedValue_c = watchedValue_o.hl2(this._context);
          return [{
            value: watchedValue_o.smma(watchedValue_c, watchedValue_i, this._context),
            offset: watchedValue_r
          }, {
            value: watchedValue_o.smma(watchedValue_c, watchedValue_s, this._context),
            offset: watchedValue_a
          }, {
            value: watchedValue_o.smma(watchedValue_c, watchedValue_n, this._context),
            offset: watchedValue_l
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
              color: watchedValue_u
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
          for (var watchedValue_e = this._input(0), watchedValue_t = this._context.new_var(watchedValue_o.high(this._context)), watchedValue_i = !0, watchedValue_s = !0, watchedValue_n = !0,
              watchedValue_r = !0, watchedValue_a = !0, watchedValue_l = !0, watchedValue_c = 1; watchedValue_c <= watchedValue_e; watchedValue_c++) watchedValue_i = watchedValue_o.and(watchedValue_i, watchedValue_o.lt(watchedValue_t.get(watchedValue_e - watchedValue_c), watchedValue_t.get(watchedValue_e))), watchedValue_s = watchedValue_o.and(
              watchedValue_s, watchedValue_o.lt(watchedValue_t.get(watchedValue_e + watchedValue_c), watchedValue_t.get(watchedValue_e))), watchedValue_n = watchedValue_o.and(watchedValue_n, watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), watchedValue_o.lt(watchedValue_t.get(watchedValue_e +
              watchedValue_c + 1), watchedValue_t.get(watchedValue_e)))),
            watchedValue_r = watchedValue_o.and(watchedValue_r, watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t.get(watchedValue_e)), watchedValue_o.lt(watchedValue_t.get(watchedValue_e +
              watchedValue_c + 2), watchedValue_t.get(watchedValue_e))))), watchedValue_a = watchedValue_o.and(watchedValue_a, watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t
              .get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 3), watchedValue_t.get(watchedValue_e)), watchedValue_o.lt(watchedValue_t.get(watchedValue_e + watchedValue_c + 3), watchedValue_t.get(watchedValue_e)))))), watchedValue_l = watchedValue_o.and(watchedValue_l, watchedValue_o
              .and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 1), watchedValue_t.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 2), watchedValue_t.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 3), watchedValue_t
                .get(watchedValue_e)), watchedValue_o.and(watchedValue_o.le(watchedValue_t.get(watchedValue_e + 4), watchedValue_t.get(watchedValue_e)), watchedValue_o.lt(watchedValue_t.get(watchedValue_e + watchedValue_c + 4), watchedValue_t.get(watchedValue_e)))))));
          var watchedValue_h = watchedValue_o.or(watchedValue_s, watchedValue_o.or(watchedValue_n, watchedValue_o.or(watchedValue_r, watchedValue_o.or(watchedValue_a, watchedValue_l)))),
            watchedValue_d = watchedValue_o.and(watchedValue_i, watchedValue_h),
            watchedValue_u = this._context.new_var(watchedValue_o.low(this._context)),
            _ = 1,
            watchedValue_p = 1,
            watchedValue_m = 1,
            watchedValue_g = 1,
            watchedValue_f = 1,
            watchedValue_y = 1;
          for (watchedValue_c = 1; watchedValue_c <= watchedValue_e; watchedValue_c++) _ = watchedValue_o.and(_, watchedValue_o.gt(watchedValue_u.get(watchedValue_e - watchedValue_c), watchedValue_u.get(watchedValue_e))), watchedValue_p = watchedValue_o.and(watchedValue_p, watchedValue_o.gt(watchedValue_u.get(watchedValue_e + watchedValue_c), watchedValue_u
              .get(watchedValue_e))), watchedValue_m = watchedValue_o.and(watchedValue_m, watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 1), watchedValue_u.get(watchedValue_e)), watchedValue_o.gt(watchedValue_u.get(watchedValue_e + watchedValue_c + 1), watchedValue_u.get(watchedValue_e)))),
            watchedValue_g = watchedValue_o.and(watchedValue_g, watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 1), watchedValue_u.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 2), watchedValue_u.get(watchedValue_e)), watchedValue_o.gt(watchedValue_u.get(watchedValue_e +
              watchedValue_c + 2), watchedValue_u.get(watchedValue_e))))), watchedValue_f = watchedValue_o.and(watchedValue_f, watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 1), watchedValue_u.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 2), watchedValue_u
              .get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 3), watchedValue_u.get(watchedValue_e)), watchedValue_o.gt(watchedValue_u.get(watchedValue_e + watchedValue_c + 3), watchedValue_u.get(watchedValue_e)))))), watchedValue_y = watchedValue_o.and(watchedValue_y, watchedValue_o
              .and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 1), watchedValue_u.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 2), watchedValue_u.get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 3), watchedValue_u
                .get(watchedValue_e)), watchedValue_o.and(watchedValue_o.ge(watchedValue_u.get(watchedValue_e + 4), watchedValue_u.get(watchedValue_e)), watchedValue_o.gt(watchedValue_u.get(watchedValue_e + watchedValue_c + 4), watchedValue_u.get(watchedValue_e)))))));
          var watchedValue_v = watchedValue_o.or(watchedValue_p, watchedValue_o.or(watchedValue_m, watchedValue_o.or(watchedValue_g, watchedValue_o.or(watchedValue_f, watchedValue_y))));
          return [watchedValue_o.and(_, watchedValue_v), watchedValue_d]
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._context = watchedValue_e, this._input = watchedValue_t;
          var watchedValue_i = this.f_0();
          return [{
            value: watchedValue_i[0],
            offset: -this._input(0)
          }, {
            value: watchedValue_i[1],
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
          var watchedValue_i = this._context.new_var(watchedValue_o.close(this._context)),
            watchedValue_s = this._input(0),
            watchedValue_n = this._input(1),
            watchedValue_r = this._input(2),
            watchedValue_a = this._input(3),
            watchedValue_l = this._input(4),
            watchedValue_c = this._input(5),
            watchedValue_h = watchedValue_o.ema(watchedValue_i, watchedValue_s, this._context),
            watchedValue_d = watchedValue_o.ema(watchedValue_i, watchedValue_n, this._context),
            watchedValue_u = watchedValue_o.ema(watchedValue_i, watchedValue_r, this._context),
            _ = watchedValue_o.ema(watchedValue_i, watchedValue_a, this._context),
            watchedValue_p = watchedValue_o.ema(watchedValue_i, watchedValue_l, this._context),
            watchedValue_m = watchedValue_o.ema(watchedValue_i, watchedValue_c, this._context),
            watchedValue_g = this._input(6),
            watchedValue_f = this._input(7),
            watchedValue_y = this._input(8),
            watchedValue_v = this._input(9),
            S = this._input(10),
            watchedValue_b = this._input(11);
          return [watchedValue_h, watchedValue_d, watchedValue_u, _, watchedValue_p, watchedValue_m, watchedValue_o.ema(watchedValue_i, watchedValue_g, this._context), watchedValue_o.ema(watchedValue_i, watchedValue_f, this._context), watchedValue_o.ema(watchedValue_i, watchedValue_y, this
            ._context), watchedValue_o.ema(watchedValue_i, watchedValue_v, this._context), watchedValue_o.ema(watchedValue_i, S, this._context), watchedValue_o.ema(watchedValue_i, watchedValue_b, this._context)]
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
            ._symbolSupports1DResolution && "1D" !== watchedValue_o.period(this._context) && this._context.new_sym(this
              ._context.symbol.ticker, "1D")
        }, this.main = function(watchedValue_e, watchedValue_t) {
          this._symbolSupports1DResolution || watchedValue_o.error(
              `Daily bars are not available for ${this._context.symbol.info.name}`), this._context = watchedValue_e, this
            ._input = watchedValue_t, "1D" !== watchedValue_o.period(this._context) && this._context.select_sym(1);
          const watchedValue_i = this._input(0),
            watchedValue_s = this._input(1),
            watchedValue_n = watchedValue_o.time(this._context),
            watchedValue_r = this._context.new_unlimited_var(watchedValue_n),
            watchedValue_a = this._context.new_unlimited_var(watchedValue_o[watchedValue_i](this._context)),
            watchedValue_l = this._context.new_unlimited_var(watchedValue_o[watchedValue_s](this._context));
          if (watchedValue_r.get(365), !this._context.symbol.isLastBar || !this._context.symbol.isNewBar) return null;
          const watchedValue_c = watchedValue_o.add_years_considering_dst(this._context.symbol.info.timezone, new Date(watchedValue_n), -1),
            watchedValue_h = watchedValue_r.indexOf(watchedValue_c.getTime()),
            watchedValue_d = -1 === watchedValue_h ? NaN : watchedValue_o.highest(watchedValue_a, watchedValue_h, this._context),
            watchedValue_u = -1 === watchedValue_h ? NaN : watchedValue_o.lowest(watchedValue_l, watchedValue_h, this._context);
          if (isNaN(watchedValue_d) || isNaN(watchedValue_u)) return {
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
                      level: watchedValue_d,
                      extendLeft: !0,
                      extendRight: !0
                    }]
                  }, {
                    styleId: "lowest",
                    data: [{
                      startIndex: watchedValue_n,
                      endIndex: watchedValue_n,
                      level: watchedValue_u,
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