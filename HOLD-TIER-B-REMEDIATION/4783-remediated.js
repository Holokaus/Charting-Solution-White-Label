/**
 * Module 4783 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note MASSIVE module (348473 bytes) - comprehensive remediation applied
 * @warning Large file - review may be needed for complex patterns
 */

4783: (exports, module, require) => {
    "use strict";
    const constants = require(58978).getHexColorByName,
      result = require(19979).Std,
      name = constants("color-ripe-red-100"),
      config = constants("color-ripe-red-200"),
      items = constants("color-ripe-red-500"),
      length = constants("color-ripe-red-900"),
      context = constants("color-ripe-red-a200"),
      handler = constants("color-minty-green-100"),
      data = constants("color-minty-green-400"),
      utils = constants("color-minty-green-500");
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
        this.f_0 = function(exports, module, require, constants) {
          return result.or(result.and(result.eq(exports, module), result.eq(exports, require)), result.eq(module, require)) ? 0 : (2 * exports - require - module) / (module - require) * constants
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this.f_0(result.close(this._context), result.high(this._context), result.low(this._context), result.volume(this
            ._context));
          return [result.cum(require, this._context)]
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
        this.f_0 = function(exports, module) {
          var require = module.new_var(result.open(module)),
            constants = module.new_var(result.high(module)),
            name = module.new_var(result.low(module)),
            config = module.new_var(result.close(module)),
            items = result.abs(constants - config.get(1)),
            length = result.abs(name - config.get(1)),
            context = result.abs(constants - name),
            handler = result.abs(config.get(1) - require.get(1)),
            data = result.max(items, length),
            utils = result.iff(items >= result.max(length, context), items - .5 * length + .25 * handler, result.iff(length >= result.max(items, context), length - .5 * items + .25 * handler, context +
              .25 * handler));
          return result.iff(0 === utils, 0, (config - config.get(1) + .5 * (config - require) + .25 * (config.get(1) - require.get(1))) / utils * data / exports * 50)
        }, this.f_1 = function(exports, module) {
          var require = this.f_0(exports, module);
          return result.cum(require, module)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0);
          return [this.f_1(require, this._context)]
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
        this.f_0 = function(exports, module) {
          return result.gt(exports, module)
        }, this.f_1 = function(exports, module) {
          return result.lt(exports, module)
        }, this.f_2 = function(exports, module) {
          return 0 === module ? exports : exports / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this.f_0(result.close(this._context), result.open(this._context)),
            name = this._context.new_var(constants),
            config = result.sum(name, require, this._context),
            items = this.f_1(result.close(this._context), result.open(this._context)),
            length = this._context.new_var(items),
            context = result.sum(length, require, this._context);
          return [this.f_2(config, context)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2),
            items = this._context.new_var(require);
          return [result.alma(items, constants, name, config)]
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
        this.f_0 = function(exports, module) {
          return 100 * (exports + module) / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.high(this._context),
            name = require + 1,
            config = this._context.new_var(constants),
            items = result.highestbars(config, name, this._context),
            length = this.f_0(items, require),
            context = result.low(this._context),
            handler = this._context.new_var(context),
            data = result.lowestbars(handler, name, this._context);
          return [length, this.f_0(data, require)]
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          if (this._context = exports, this._input = module, "" === this._input(0)) return [result.ohlc4(this._context)];
          this._context.select_sym(0);
          const require = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const constants = this._context.new_var(result.ohlc4(this._context)).adopt(this._context.new_var(this._context
            .symbol.time), require, 1);
          return this._context.select_sym(0), [constants]
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
              color: context
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
        this.f_0 = function(exports) {
            var module = this._context.new_var(result.high(this._context)),
              require = result.change(module),
              constants = this._context.new_var(result.low(this._context)),
              name = -result.change(constants),
              config = this._context.new_var(result.tr(void 0, this._context)),
              items = result.rma(config, exports, this._context),
              length = this._context.new_var(result.and(result.gt(require, name), result.gt(require, 0)) ? require : 0),
              context = result.fixnan(100 * result.rma(length, exports, this._context) / items, this._context),
              handler = this._context.new_var(result.and(result.gt(name, require), result.gt(name, 0)) ? name : 0);
            return [context, result.fixnan(100 * result.rma(handler, exports, this._context) / items, this._context)]
          }, this.f_1 = function(exports, module) {
            var require = this.f_0(exports),
              constants = require[0],
              name = require[1],
              config = constants + name,
              items = this._context.new_var(result.abs(constants - name) / (result.eq(config, 0) ? 1 : config));
            return [100 * result.rma(items, module, this._context)]
          },
          this.main = function(exports, module) {
            return this._context = exports, this._input = module, this._context.setMinimumAdditionalDepth(this._input(0) +
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
              color: length
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
        this.main = function(exports, module) {
          var require = module(0);
          return [result.atr(require, exports)]
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
                  color: items,
                  width: 1,
                  style: 0
                },
                1: {
                  color: utils,
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.f_1 = function(exports) {
          return result.le(exports, 0) ? 0 : 1
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.hl2(this._context),
            constants = this._context.new_var(require),
            name = result.sma(constants, 5, this._context),
            config = this._context.new_var(require),
            items = result.sma(config, 34, this._context),
            length = this.f_0(name, items),
            context = length,
            handler = this._context.new_var(length),
            data = result.change(handler);
          return [context, this.f_1(data)]
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
                  color: items,
                  width: 1,
                  style: 0
                },
                1: {
                  color: utils,
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.f_1 = function(exports) {
          return result.le(exports, 0) ? 0 : 1
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.hl2(this._context),
            constants = this._context.new_var(require),
            name = result.sma(constants, 5, this._context),
            config = this._context.new_var(require),
            items = result.sma(config, 34, this._context),
            length = this.f_0(name, items),
            context = this._context.new_var(length),
            handler = result.sma(context, 5, this._context),
            data = this.f_0(length, handler),
            utils = this._context.new_var(data),
            _ = result.change(utils);
          return [data, this.f_1(_)]
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
              color: context
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
        this.f_0 = function(exports, module, require, constants) {
          return (exports - module) / (require - constants)
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, [this.f_0(result.close(this._context), result.open(this._context), result
            .high(this._context), result.low(this._context))]
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
        this.f_0 = function(exports, module) {
          return exports * module
        }, this.f_1 = function(exports, module) {
          return exports + module
        }, this.f_2 = function(exports, module) {
          return exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._context.new_var(require),
            items = result.sma(config, constants, this._context),
            length = this._context.new_var(require),
            context = result.stdev(length, constants, this._context),
            handler = this.f_0(name, context);
          return [items, this.f_1(items, handler), this.f_2(items, handler)]
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
        this.f_0 = function(exports, module) {
          return exports * module
        }, this.f_1 = function(exports, module) {
          return exports + module
        }, this.f_2 = function(exports, module) {
          return exports - module
        }, this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.time(this._context)),
            constants = result.close(this._context),
            name = this._input(0),
            config = this._input(1),
            items = this._input(2),
            length = this._input(3);
          if ("" !== name) {
            this._context.select_sym(1);
            var context = this._context.new_var(result.time(this._context));
            constants = this._context.new_var(result.close(this._context)).adopt(context, require, 1), this._context.select_sym(0)
          }
          var handler = this._context.new_var(constants),
            data = result.sma(handler, config, this._context),
            utils = this._context.new_var(constants),
            _ = result.stdev(utils, config, this._context),
            params = this.f_0(items, _);
          return [{
            value: data,
            offset: length
          }, {
            value: this.f_1(data, params),
            offset: length
          }, {
            value: this.f_2(data, params),
            offset: length
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
              color: data
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
        this.f_0 = function(exports, module) {
          return exports * module
        }, this.f_1 = function(exports, module) {
          return exports + module
        }, this.f_2 = function(exports, module) {
          return exports - module
        }, this.f_3 = function(exports, module, require) {
          return (exports - module) / (require - module)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._context.new_var(require),
            items = result.sma(config, constants, this._context),
            length = this._context.new_var(require),
            context = result.stdev(length, constants, this._context),
            handler = this.f_0(name, context),
            data = this.f_1(items, handler),
            utils = this.f_2(items, handler);
          return [this.f_3(require, utils, data)]
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
        this.f_0 = function(exports, module) {
          return exports * module
        }, this.f_1 = function(exports, module) {
          return exports + module
        }, this.f_2 = function(exports, module) {
          return exports - module
        }, this.f_3 = function(exports, module, require) {
          return (exports - module) / require
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._context.new_var(require),
            items = result.sma(config, constants, this._context),
            length = this._context.new_var(require),
            context = result.stdev(length, constants, this._context),
            handler = this.f_0(name, context),
            data = this.f_1(items, handler),
            utils = this.f_2(items, handler);
          return [this.f_3(data, utils, items)]
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
        this.f_0 = function(exports, module, require, constants) {
          return result.or(result.and(result.eq(exports, module), result.eq(exports, require)), result.eq(module, require)) ? 0 : (2 * exports - require - module) / (module - require) * constants
        }, this.f_1 = function(exports, module) {
          return exports / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this.f_0(result.close(this._context), result.high(this._context), result.low(this._context), result.volume(this
              ._context)),
            name = this._context.new_var(constants),
            config = result.sum(name, require, this._context),
            items = result.volume(this._context),
            length = this._context.new_var(items),
            context = result.sum(length, require, this._context);
          return [this.f_1(config, context)]
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.accdist(this._context),
            config = this._context.new_var(name),
            items = result.ema(config, require, this._context),
            length = this._context.new_var(name),
            context = result.ema(length, constants, this._context);
          return [this.f_0(items, context)]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.rocLookback = this._input(1)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module, this._context.setMinimumAdditionalDepth(this.period + this
            .rocLookback);
          var require = this._context.new_var(result.high(this._context) - result.low(this._context)),
            constants = this._context.new_var(result.ema(require, this.period, this._context));
          return [result.roc(constants, this.rocLookback)]
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
          name: "params",
          defval: 10,
          type: "integer",
          min: 1,
          max: 4999
        }, {
          id: "in_1",
          name: "index",
          defval: 1,
          type: "integer",
          min: 1,
          max: 1e12
        }, {
          id: "in_2",
          name: "query",
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
        this.f_0 = function(exports, module, require) {
          return exports - module * require
        }, this.f_1 = function(exports, module, require) {
          return exports + module * require
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2),
            config = result.high(this._context),
            items = this._context.new_var(config),
            length = result.highest(items, require, this._context),
            context = result.atr(require, this._context),
            handler = this.f_0(length, constants, context),
            data = this._context.new_var(config),
            utils = result.lowest(data, require, this._context),
            _ = this.f_1(utils, constants, context),
            params = this._context.new_var(handler),
            map = result.highest(params, name, this._context),
            flag = this._context.new_var(_);
          return [result.lowest(flag, name, this._context), map]
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
        this.f_0 = function(exports) {
          return result.ge(exports, 0) ? exports : 0
        }, this.f_1 = function(exports) {
          return result.ge(exports, 0) ? 0 : -exports
        }, this.f_2 = function(exports, module) {
          return 100 * exports / module
        }, this.f_3 = function(exports, module) {
          return this.f_2(exports - module, exports + module)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.close(this._context),
            name = this._context.new_var(constants),
            config = result.change(name),
            items = this.f_0(config),
            length = this.f_1(config),
            context = this._context.new_var(items),
            handler = result.sum(context, require, this._context),
            data = this._context.new_var(length),
            utils = result.sum(data, require, this._context);
          return [this.f_3(handler, utils)]
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
                  color: utils,
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
          var exports = result.close(this._context),
            module = result.hlc3(this._context),
            require = this._context.new_var(result.high(this._context)),
            constants = result.highest(require, 30, this._context),
            name = result.lowest(require, 30, this._context),
            config = 25 / (constants - name) * name,
            items = this._context.new_var(exports),
            length = this._context.new_var(result.ema(items, 34, this._context)),
            context = (length.get(1) - length.get(0)) / module * config,
            handler = result.sqrt(1 + context * context),
            data = result.round(180 * result.acos(1 / handler) / 3.141592653589793),
            utils = result.iff(result.gt(context, 0), -data, data),
            _ = result.and(result.gt(utils, -2.14), result.le(utils, -.71)) ? 7 : 8,
            params = result.and(result.gt(utils, -3.57), result.le(utils, -2.14)) ? 6 : _,
            map = result.and(result.gt(utils, -5), result.le(utils, -3.57)) ? 5 : params,
            flag = result.le(utils, -5) ? 4 : map,
            func = result.and(result.lt(utils, 2.14), result.ge(utils, .71)) ? 3 : flag,
            array = result.and(result.lt(utils, 3.57), result.ge(utils, 2.14)) ? 2 : func,
            value = result.and(result.lt(utils, 5), result.ge(utils, 3.57)) ? 1 : array;
          return [1, result.ge(utils, 5) ? 0 : value]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_0()
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
        this.f_0 = function(exports, module, require, constants) {
          return 100 * result.log10(exports / (module - require)) / constants
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.atr(1, this._context),
            name = this._context.new_var(constants),
            config = result.sum(name, require, this._context),
            items = result.high(this._context),
            length = this._context.new_var(items),
            context = result.highest(length, require, this._context),
            handler = result.low(this._context),
            data = this._context.new_var(handler),
            utils = result.lowest(data, require, this._context),
            _ = result.log10(require);
          return [this.f_0(config, context, utils, _)]
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
        this.f_0 = function(exports, module, require) {
          return (exports - module) / (.015 * require)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.hlc3(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2);
          this._context.setMinimumAdditionalDepth(constants + config);
          var items, length = this._context.new_var(require),
            context = result.sma(length, constants, this._context),
            handler = this._context.new_var(require),
            data = result.dev(handler, constants, this._context),
            utils = this.f_0(require, context, data),
            _ = this._context.new_var(utils);
          return "EMA" === name ? items = result.ema(_, config, this._context) : "WMA" === name ? items = result.wma(_, config, this._context) :
            "SMA" === name && (items = result.sma(_, config, this._context)), [utils, items]
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
        var exports;
        this.f_1 = function(exports, module, require) {
          var constants = require.new_var(result.max(result.change(exports), 0));
          return result.rma(constants, module, require)
        }, this.f_2 = function(exports, module, require) {
          var constants = require.new_var(-result.min(result.change(exports), 0));
          return result.rma(constants, module, require)
        }, this.f_3 = (exports = 0, function(module) {
          var require = module.get(0),
            constants = module.get(1);
          return exports = require === constants ? 0 : require > constants ? result.nz(exports) <= 0 ? 1 : result.nz(exports) + 1 : result.nz(exports) >= 0 ? -1 : result.nz(exports) - 1,
            this._context.new_var(exports)
        }), this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._context.new_var(require),
            name = this._input(0),
            config = this._input(1),
            items = this._input(2);
          this._context.setMinimumAdditionalDepth(items);
          var length = result.rsi(this.f_1(constants, name, this._context), this.f_2(constants, name, this._context)),
            context = this.f_3(constants),
            handler = result.rsi(this.f_1(context, config, this._context), this.f_2(context, config, this._context)),
            data = this._context.new_var(result.roc(constants, 1)),
            utils = result.percentrank(data, items);
          return [result.avg(length, handler, utils)]
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
        this.f_0 = function(exports, module) {
          return exports + module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2);
          this._context.setMinimumAdditionalDepth(require + Math.max(constants, name));
          var config = result.close(this._context),
            items = this._context.new_var(config),
            length = result.roc(items, constants),
            context = this._context.new_var(config),
            handler = result.roc(context, name),
            data = this.f_0(length, handler),
            utils = this._context.new_var(data);
          return [result.wma(utils, require, this._context)]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this._context.new_sym(this._input(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_unlimited_var(this._context.symbol.time),
            constants = (this._input(0), result.period(this._context), result.close(this._context)),
            name = this._input(1);
          this._context.select_sym(1);
          var config = this._context.new_unlimited_var(this._context.symbol.time),
            items = result.close(this._context),
            length = this._context.new_unlimited_var(items);
          this._context.select_sym(0);
          var context = length.adopt(config, require, 0),
            handler = this._context.new_var(constants),
            data = this._context.new_var(context);
          return [result.correlation(handler, data, name, this._context)]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this._context.new_sym(this._input(0), result.period(this._context)),
            this._context.new_sym(this._input(1), result.period(this._context)), this.period = this._input(2)
        }, this.correlationLog = function(exports, module, require, constants) {
          var name = result.sma(exports, require, constants),
            config = result.sma(module, require, constants),
            items = constants.new_var(exports.get() * module.get());
          return (result.sma(items, require, constants) - name * config) / Math.sqrt(result.variance2(exports, name, require) * result.variance2(module, config, require))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(2);
          var constants = this._context.new_var(result.close(this._context)),
            name = this._context.new_var(result.log(constants.get() / constants.get(1))),
            config = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          var items = this._context.new_var(this._context.symbol.time),
            length = this._context.new_var(result.close(this._context)),
            context = this._context.new_var(result.log(length.get() / length.get(1))),
            handler = this._context.new_var(name.adopt(config, items, 0)),
            data = this._context.new_var(this.correlationLog(context, handler, this.period, this._context)),
            utils = this._context.new_var(data.adopt(items, require, 0)).get(),
            _ = result.round(1e3 * utils) / 1e3;
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
          var exports = this._input(0),
            module = this._input(1),
            require = Math.floor(exports / 2 + 1);
          this._context.setMinimumAdditionalDepth(exports + require);
          var constants = this._context.new_var(result.close(this._context)),
            name = this._context.new_var(result.sma(constants, exports, this._context)),
            config = this._context.new_var(result.close(this._context)).get(require) - name,
            items = result.close(this._context) - name.get(require);
          return [module ? config : items, module ? -require : 0]
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this.f_0();
          return [{
            value: require[0],
            offset: require[1]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1);
          return this._context.setMinimumAdditionalDepth(2 * require + constants), result.dmi(require, constants, this._context)
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.low(this._context),
            config = this._context.new_var(name);
          this._context.setMinimumAdditionalDepth(require + Math.max(constants, 0));
          var items = result.lowest(config, require, this._context),
            length = result.high(this._context),
            context = this._context.new_var(length),
            handler = result.highest(context, require, this._context);
          return [{
            value: items,
            offset: constants
          }, {
            value: handler,
            offset: constants
          }, {
            value: result.avg(handler, items),
            offset: constants
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
        this.f_0 = function(exports, module) {
          return 2 * exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0);
          this._context.setMinimumAdditionalDepth(2 * require);
          var constants = result.close(this._context),
            name = this._context.new_var(constants),
            config = result.ema(name, require, this._context),
            items = this._context.new_var(config),
            length = result.ema(items, require, this._context);
          return [this.f_0(config, length)]
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
        this.f_0 = function(exports, module, require, constants, result) {
          return exports * module * (require - constants) / result
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.hl2(this._context),
            config = this._context.new_var(name),
            items = result.change(config),
            length = this.f_0(require, items, result.high(this._context), result.low(this._context), result.volume(this._context)),
            context = this._context.new_var(length);
          return [result.sma(context, constants, this._context)]
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
              color: items
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
        description: "Elder'constants Force Index",
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
        this.f_0 = function(exports, module) {
          return exports * module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.close(this._context),
            name = this._context.new_var(constants),
            config = result.change(name),
            items = this.f_0(config, result.volume(this._context)),
            length = this._context.new_var(items);
          return [result.ema(length, require, this._context)]
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
        this.f_0 = function(exports, module) {
          return exports ? module : result.na()
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.close(this._context),
            config = this._context.new_var(name),
            items = result.ema(config, require, this._context),
            length = this._context.new_var(name),
            context = result.ema(length, constants, this._context),
            handler = items,
            data = context,
            utils = result.cross(items, context, this._context);
          return [handler, data, this.f_0(utils, items)]
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
        this.f_0 = function(exports, module) {
          return exports * (1 + module)
        }, this.f_1 = function(exports, module) {
          return exports * (1 - module)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result[this._input(4)](this._context)),
            constants = result.sma(require, this._input(0), this._context);
          return "Exponential" === this._input(3) ? constants = result.ema(require, this._input(0), this._context) : "Weighted" ===
            this._input(3) && (constants = result.wma(require, this._input(0), this._context)), [this.f_0(constants, this._input(1) / 100),
              constants, this.f_1(constants, this._input(2) / 100)
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          for (var require, constants, name = this._context.new_var(result.close(this._context)), config = 0, items = 0, length = 0; length < this
            .period; length++) config += length + 1, items += name.get(length);
          require = config / this.period, constants = items / this.period;
          var context = 0,
            handler = 0,
            data = 0;
          for (length = 0; length < this.period; length++) data += Math.pow(constants - name.get(length), 2), handler += (require - length - 1) * (constants - name.get(length)),
            context += Math.pow(require - length - 1, 2);
          return handler = Math.pow(handler, 2), [Math.sqrt((data - handler / context) / (this.period - 2))]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.errorDeviation = this._input(
            1), this.maMethod = this._input(2), this.averagePeriod = this._input(3)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          for (var require, constants, name = this._context.new_var(result.close(this._context)), config = 0, items = 0, length = 0; length < this
            .period; length++) config += length + 1, items += name.get(length);
          require = config / this.period, constants = items / this.period;
          var context = 0,
            handler = 0,
            data = 0;
          for (length = 0; length < this.period; length++) data += Math.pow(constants - name.get(length), 2), handler += (require - length - 1) * (constants - name.get(length)),
            context += Math.pow(require - length - 1, 2);
          handler = Math.pow(handler, 2);
          var utils, _, params, map = Math.sqrt((data - handler / context) / (this.period - 2)),
            flag = result.linreg(name, this.period, 0),
            func = this._context.new_var(flag + this.errorDeviation * map),
            array = this._context.new_var(flag),
            value = this._context.new_var(flag - this.errorDeviation * map);
          return "Simple" === this.maMethod ? (utils = result.sma(func, this.averagePeriod, this._context), _ = result.sma(array,
              this.averagePeriod, this._context), params = result.sma(value, this.averagePeriod, this._context)) :
            "Exponential" === this.maMethod ? (utils = result.ema(func, this.averagePeriod, this._context), _ = result.ema(array,
              this.averagePeriod, this._context), params = result.ema(value, this.averagePeriod, this._context)) : (utils = result.wma(
                func, this.averagePeriod, this._context), _ = result.wma(array, this.averagePeriod, this._context), params = result
              .wma(value, this.averagePeriod, this._context)), [utils, _, params]
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
        this.f_0 = function(exports) {
          var module = result.lt(exports, -.99) ? -.999 : exports;
          return [result.gt(exports, .99) ? .999 : module]
        }, this.f_1 = function() {
          var exports = this._input(0),
            module = this._context.new_var(result.hl2(this._context)),
            require = result.highest(module, exports, this._context),
            constants = this._context.new_var(result.hl2(this._context)),
            name = result.lowest(constants, exports, this._context),
            config = this._context.new_var(),
            items = this.f_0(.66 * ((result.hl2(this._context) - name) / result.max(require - name, .001) - .5) + .67 * result.nz(config.get(1)));
          config.set(items[0]);
          var length = this._context.new_var();
          length.set(.5 * result.log((1 + config.get(0)) / result.max(1 - config.get(0), .001)) + .5 * result.nz(length.get(1)));
          var context = length.get(1);
          return [length.get(0), context]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_1()
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
          var exports = this._input(0),
            module = result.or(result.isintraday(this._context), result.and(result.isdaily(this._context), result.eq(result.interval(this
              ._context), 1))) ? 1 : 7,
            require = this._context.new_var(result.close(this._context)),
            constants = this._context.new_var(result.log(result.close(this._context) / require.get(1)));
          return [100 * result.stdev(constants, exports, this._context) * result.sqrt(365 / module)]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_0()
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
        this.f_0 = function(exports, module) {
          return 2 * exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = constants / 2;
          this._context.setMinimumAdditionalDepth(Math.ceil(constants + name));
          var config = this._context.new_var(require),
            items = result.wma(config, name, this._context),
            length = this._context.new_var(require),
            context = result.wma(length, constants, this._context),
            handler = this.f_0(items, context),
            data = result.sqrt(constants),
            utils = result.round(data),
            _ = this._context.new_var(handler);
          return [result.wma(_, utils, this._context)]
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
              color: length
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
              color: config
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
                  color: items,
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
        this.donchian = function(exports, module, require) {
          var constants = this._context.new_var(exports),
            name = this._context.new_var(module);
          return result.avg(result.lowest(constants, require, this._context), result.highest(name, require, this._context))
        }, this.f_1 = function() {
          var exports = this._input(1),
            module = this._input(2),
            require = this._input(3),
            constants = this._input(4) - 1,
            name = this._input(5) - 1,
            config = this._context.new_var(result.time(this._context)),
            items = result.close(this._context),
            length = result.low(this._context),
            context = result.high(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var handler = this._context.new_var(result.time(this._context)),
              data = result.close(this._context),
              utils = result.low(this._context),
              _ = result.high(this._context);
            items = this._context.new_var(data).adopt(handler, config, 1), length = this._context.new_var(utils).adopt(handler, config, 1), context = this
              ._context.new_var(_).adopt(handler, config, 1), this._context.select_sym(0)
          }
          var params = this.donchian(length, context, exports),
            map = this.donchian(length, context, module),
            flag = result.avg(params, map),
            func = this.donchian(length, context, require);
          return [params, map, items, flag, func, -constants, constants, name, result.gt(flag, func) ? 0 : 1]
        }, this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this.f_1();
          return [require[0], require[1], {
            value: require[2],
            offset: require[5]
          }, {
            value: require[3],
            offset: require[7]
          }, {
            value: require[4],
            offset: require[7]
          }, require[8]]
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
        this.f_0 = function(exports, module, require, constants) {
          return exports ? module : require - constants
        }, this.f_1 = function(exports, module, require) {
          return exports + module * require
        }, this.f_2 = function(exports, module, require) {
          return exports - module * require
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2),
            items = this._context.new_var(require),
            length = result.ema(items, name, this._context),
            context = this.f_0(constants, result.tr(void 0, this._context), result.high(this._context), result.low(this._context)),
            handler = this._context.new_var(context),
            data = result.ema(handler, name, this._context);
          return [this.f_1(length, data, config), length, this.f_2(length, data, config)]
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
        this.f_0 = function(exports, module) {
          return result.ge(exports, 0) ? module : -module
        }, this.f_1 = function(exports, module) {
          return exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.hlc3(this._context);
          this._context.setMinimumAdditionalDepth(66);
          var constants = this._context.new_var(require),
            name = result.change(constants),
            config = this.f_0(name, result.volume(this._context)),
            items = this._context.new_var(config),
            length = result.ema(items, 34, this._context),
            context = this._context.new_var(config),
            handler = result.ema(context, 55, this._context),
            data = this.f_1(length, handler),
            utils = this._context.new_var(data);
          return [data, result.ema(utils, 13, this._context)]
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
              color: utils
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: items
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
        this.f_0 = function(exports, module, require, constants) {
          return exports + 2 * module + 3 * require + 4 * constants
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2),
            config = this._input(3),
            items = this._input(4),
            length = this._input(5),
            context = this._input(6),
            handler = this._input(7),
            data = this._input(8);
          this._context.setMinimumAdditionalDepth(Math.max(items + require, length + constants, context + name, handler + config) + data);
          var utils = result.close(this._context),
            _ = require,
            params = this._context.new_var(utils),
            map = result.roc(params, _),
            flag = items,
            func = this._context.new_var(map),
            array = result.sma(func, flag, this._context),
            value = constants,
            S = this._context.new_var(utils),
            bool = result.roc(S, value),
            width = length,
            C = this._context.new_var(bool),
            T = result.sma(C, width, this._context),
            P = name,
            index = this._context.new_var(utils),
            M = result.roc(index, P),
            I = context,
            A = this._context.new_var(M),
            L = result.sma(A, I, this._context),
            key = config,
            E = this._context.new_var(utils),
            D = result.roc(E, key),
            B = handler,
            V = this._context.new_var(D),
            R = result.sma(V, B, this._context),
            N = this.f_0(array, T, L, R),
            O = this._context.new_var(N);
          return [N, result.sma(O, data, this._context)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.close(this._context),
            config = this._context.new_var(name);
          return [result.linreg(config, require, constants)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._context.new_var(require);
          return [result.linreg(name, constants, 0)]
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
              color: context
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0)
        }, this.linregSlope = function(exports, module, require) {
          var constants, result, name, config = 0,
            items = 0,
            length = 0,
            context = 0;
          for (constants = 0; constants < module; ++constants) config += name = module - 1 - constants + 1, items += result = exports.get(constants), length += name * name, context += result * name;
          return (module * context - config * items) / (module * length - config * config)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.close(this._context));
          return [this.linregSlope(require, this.period, 0)]
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
        this.f_0 = function(exports, module) {
          return exports ? module : result.na()
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.close(this._context),
            config = this._context.new_var(name),
            items = result.sma(config, require, this._context),
            length = this._context.new_var(name),
            context = result.sma(length, constants, this._context),
            handler = items,
            data = context,
            utils = result.cross(items, context, this._context);
          return [handler, data, this.f_0(utils, items)]
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
        this.f_0 = function(exports, module) {
          return exports ? module : result.na()
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.close(this._context),
            config = this._context.new_var(name),
            items = result.sma(config, require, this._context),
            length = this._context.new_var(name),
            context = result.ema(length, constants, this._context),
            handler = items,
            data = context,
            utils = result.cross(items, context, this._context);
          return [handler, data, this.f_0(utils, items)]
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.f_1 = function(exports, module) {
          return exports / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this.f_0(result.high(this._context), result.low(this._context)),
            name = this._context.new_var(constants),
            config = result.ema(name, 9, this._context),
            items = this._context.new_var(config),
            length = result.ema(items, 9, this._context),
            context = this.f_1(config, length),
            handler = this._context.new_var(context);
          return [result.sum(handler, require, this._context)]
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
          var exports = this._input(0),
            module = result.close(this._context),
            require = this._context.new_var(module),
            constants = result.ema(require, exports, this._context),
            name = this._context.new_var(),
            config = name.get(1) + (module - name.get(1)) / (exports * result.pow(module / name.get(1), 4));
          return name.set(result.na(name.get(1)) ? constants : result.nz(config, constants)), [name.get(0)]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_0()
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
        this.main = function(exports, module) {
          return this._context = exports, this._input = module, [result.hl2(this._context)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result[this._input(1)](this._context),
            name = this._context.new_var(constants).get(require);
          return [name ? constants - name : null]
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
        this.f_0 = function(exports, module, require) {
          return exports * (result.le(module, 0) ? 0 : require)
        }, this.f_1 = function(exports, module, require) {
          return exports * (result.ge(module, 0) ? 0 : require)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.hlc3(this._context),
            name = this._context.new_var(constants),
            config = result.change(name),
            items = this.f_0(result.volume(this._context), config, constants),
            length = this._context.new_var(items),
            context = result.sum(length, require, this._context),
            handler = this.f_1(result.volume(this._context), config, constants),
            data = this._context.new_var(handler),
            utils = result.sum(data, require, this._context);
          return [result.rsi(context, utils)]
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(this._context.symbol.time),
            constants = result[this._input(2)](this._context),
            name = this._input(1),
            config = this._input(3),
            items = this._input(4),
            length = this._input(5);
          if (this._context.setMinimumAdditionalDepth(name + length), "" !== this._input(0)) {
            this._context.select_sym(1);
            var context = this._context.new_var(this._context.symbol.time),
              handler = result[this._input(2)](this._context);
            constants = this._context.new_var(handler).adopt(context, require, 1), this._context.select_sym(0)
          }
          var data, utils = this._context.new_var(constants),
            _ = result.sma(utils, name, this._context),
            params = this._context.new_var(_);
          return "EMA" === items ? data = result.ema(params, length, this._context) : "WMA" === items ? data = result.wma(params, length, this._context) :
            "SMA" === items && (data = result.sma(params, length, this._context)), [{
              value: _,
              offset: config
            }, {
              value: data,
              offset: config
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.high(this._context),
            constants = result.low(this._context),
            name = this._input(0),
            config = this._input(1),
            items = this._input(2),
            length = this._input(3),
            context = this._context.new_var(require),
            handler = this._context.new_var(constants);
          return [{
            value: result.sma(context, name, this._context),
            offset: items
          }, {
            value: result.sma(handler, config, this._context),
            offset: length
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
              color: context
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
                  color: data,
                  width: 1,
                  style: 0
                },
                1: {
                  color: handler,
                  width: 1,
                  style: 0
                },
                2: {
                  color: name,
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.f_1 = function(exports) {
          var module = exports > 0 ? 1 : 3,
            require = result.change(this._context.new_var(exports));
          return module - (result.le(require, 0) ? 0 : 1)
        }, this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(this._context.symbol.time),
            constants = result[this._input(3)](this._context),
            name = this._input(1),
            config = this._input(2),
            items = this._input(4),
            length = this._input(5),
            context = this._input(6);
          if (this._context.setMinimumAdditionalDepth(Math.max(name, config) + items), "" !== this._input(0)) {
            this._context.select_sym(1);
            var handler = this._context.new_var(this._context.symbol.time),
              data = result[this._input(3)](this._context);
            constants = this._context.new_var(data).adopt(handler, require, 0), this._context.select_sym(0)
          }
          var utils, _, params = this._context.new_var(constants);
          "EMA" === length ? utils = result.ema(params, name, this._context) : "WMA" === length ? utils = result.wma(params, name, this._context) :
            "SMA" === length && (utils = result.sma(params, name, this._context)), "EMA" === length ? _ = result.ema(params, config, this._context) :
            "WMA" === length ? _ = result.wma(params, config, this._context) : "SMA" === length && (_ = result.sma(params, config, this._context));
          var map, flag = this.f_0(utils, _),
            func = this._context.new_var(flag);
          "EMA" === context ? map = result.ema(func, items, this._context) : "WMA" === context ? map = result.wma(func, items, this._context) :
            "SMA" === context && (map = result.sma(func, items, this._context));
          var array = this.f_0(flag, map);
          return [array, flag, map, this.f_1(array)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result[this._input(1)](this._context),
            constants = this._input(0),
            name = this._input(2),
            config = this._input(3),
            items = this._input(4);
          this._context.setMinimumAdditionalDepth(constants + items);
          var length, context = this._context.new_var(require),
            handler = result.ema(context, constants, this._context),
            data = this._context.new_var(handler);
          return "EMA" === config ? length = result.ema(data, items, this._context) : "WMA" === config ? length = result.wma(data, items, this._context) :
            "SMA" === config && (length = result.sma(data, items, this._context)), [{
              value: handler,
              offset: name
            }, {
              value: length,
              offset: name
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result[this._input(1)](this._context),
            constants = this._input(0),
            name = this._input(2),
            config = this._context.new_var(require);
          return [{
            value: result.wma(config, constants, this._context),
            offset: name
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.time(this._context)),
            constants = result.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var name = this._context.new_var(result.time(this._context)),
              config = result.close(this._context);
            constants = this._context.new_var(config).adopt(name, require, 1), this._context.select_sym(0)
          }
          var items, length, context = this._context.new_var(constants);
          return "Exponential" === this._input(2) ? (items = result.ema(context, this._input(1), this._context), length = result.ema(context,
            this._input(2), this._context)) : "Weighted" === this._input(2) ? (items = result.wma(context, this._input(1),
            this._context), length = result.wma(context, this._input(2), this._context)) : (items = result.sma(context, this._input(1), this
            ._context), length = result.sma(context, this._input(2), this._context)), [items, length]
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(this._context.symbol.time),
            constants = result.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var name = this._context.new_var(this._context.symbol.time),
              config = result.close(this._context);
            constants = this._context.new_var(config).adopt(name, require, 1), this._context.select_sym(0)
          }
          var items, length, context, handler = this._context.new_var(constants);
          return "Exponential" === this._input(4) ? (items = result.ema(handler, this._input(1), this._context), length = result.ema(handler,
              this._input(2), this._context), context = result.ema(handler, this._input(3), this._context)) : "Weighted" === this
            ._input(4) ? (items = result.wma(handler, this._input(1), this._context), length = result.wma(handler, this._input(2), this
              ._context), context = result.wma(handler, this._input(3), this._context)) : (items = result.sma(handler, this._input(1), this
              ._context), length = result.sma(handler, this._input(2), this._context), context = result.sma(handler, this._input(3), this
              ._context)), [items, length, context]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.periods = this._input(0)
        }, this.ama = function(exports, module) {
          var require = this.periods,
            constants = this._context.new_var(),
            name = exports.get(),
            config = result.stdev(module, require, this._context),
            items = result.log(name / exports.get(require)) / (config * Math.sqrt(require)),
            length = .1 * Math.abs(items),
            context = (name - constants.get(1)) * length + constants.get(1);
          return constants.set(isNaN(context) ? name : context), context
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.close(this._context)),
            constants = this._context.new_var(result.log(require.get() / require.get(1)));
          return [this.ama(require, constants)]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.periods = this._input(0);
          for (var require = [], constants = 0, result = 1; result <= this.periods; ++result) {
            var name = Math.sin((1 + result) / this.periods * Math.PI / 2);
            require.unshift(name), constants += name
          }
          this.hmaFactors = require, this.hmaFactorsSum = constants
        }, this.hma = function(exports) {
          for (var module = this.periods, require = 0, constants = 0; constants < module; ++constants) require += exports.get(module - constants - 1) * this.hmaFactors[constants];
          return require /= this.hmaFactorsSum
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.close(this._context));
          return [this.hma(require)]
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(this._context.symbol.time),
            constants = result.close(this._context);
          if ("" !== this._input(0)) {
            this._context.select_sym(1);
            var name = this._context.new_var(this._context.symbol.time),
              config = result.close(this._context);
            constants = this._context.new_var(config).adopt(name, require, 1), this._context.select_sym(0)
          }
          var items, length, context, handler, data, utils, _ = this._context.new_var(constants);
          return "Exponential" === this._input(7) ? (items = result.ema(_, this._input(1), this._context), length = result.ema(_,
            this._input(2), this._context), context = result.ema(_, this._input(3), this._context), handler = result.ema(_, this
            ._input(4), this._context), data = result.ema(_, this._input(5), this._context), utils = result.ema(_, this
            ._input(6), this._context)) : "Weighted" === this._input(7) ? (items = result.wma(_, this._input(1), this
            ._context), length = result.wma(_, this._input(2), this._context), context = result.wma(_, this._input(3), this
            ._context), handler = result.wma(_, this._input(4), this._context), data = result.wma(_, this._input(5), this
            ._context), utils = result.wma(_, this._input(6), this._context)) : (items = result.sma(_, this._input(1), this
            ._context), length = result.sma(_, this._input(2), this._context), context = result.sma(_, this._input(3), this
            ._context), handler = result.sma(_, this._input(4), this._context), data = result.sma(_, this._input(5), this
            ._context), utils = result.sma(_, this._input(6), this._context)), [items, length, context, handler, data, utils]
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
              color: context
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.rollingPeriod = this._input(0)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require, constants = result.close(this._context);
          return require = constants > this._context.new_var(constants).get(1) ? 1 : 0, [100 * result.sma(this._context.new_var(require), this
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
        this.f_0 = function(exports, module, require) {
          return result.gt(exports, 0) ? module : result.lt(require, 0) ? -module : 0 * module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._context.new_var(require),
            name = result.change(constants);
          return [this.f_0(name, result.volume(this._context), name)]
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
        this.f_0 = function(exports, module, require) {
          return result.gt(exports, 0) ? module : result.lt(require, 0) ? -module : 0 * module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.close(this._context),
            config = this._context.new_var(name),
            items = result.change(config),
            length = this.f_0(items, result.volume(this._context), items),
            context = result.cum(length, this._context);
          this._context.setMinimumAdditionalDepth(constants);
          var handler, data = this._context.new_var(context);
          return "EMA" === require ? handler = result.ema(data, constants, this._context) : "WMA" === require ? handler = result.wma(data, constants, this._context) :
            "SMA" === require && (handler = result.sma(data, constants, this._context)), [context, handler]
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
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), result.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          const require = () => result.sar(this._input(1), this._input(2), this._input(3), this._context);
          if ("" === this._input(0)) return [require()];
          this._context.select_sym(0);
          const constants = this._context.new_var(this._context.symbol.time);
          this._context.select_sym(1);
          const name = this._context.new_var(require()).adopt(this._context.new_var(this._context.symbol.time), constants, 1);
          return this._context.select_sym(0), [name]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.high(this._context),
            constants = this._context.new_var(require),
            name = result.low(this._context),
            config = this._context.new_var(name),
            items = this._input(0),
            length = this._input(1),
            context = result.highest(constants, items, this._context),
            handler = result.lowest(config, items, this._context);
          return [{
            value: context,
            offset: length
          }, {
            value: handler,
            offset: length
          }, {
            value: result.avg(context, handler),
            offset: length
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
              color: utils
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
        this.f_0 = function(exports, module) {
          return (exports - module) / module * 100
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._context.new_var(require),
            items = result.sma(config, constants, this._context),
            length = this._context.new_var(require),
            context = result.sma(length, name, this._context);
          return [this.f_0(items, context)]
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
          var exports = this._context.new_var(result.close(this._context));
          return [result.cum(result.change(exports) / exports.get(1) * result.volume(this._context), this._context)]
        }, this.main = function(exports, module) {
          return this._context = exports,
            this._input = module, [this.f_0()[0]]
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
        this.orderRank = function(exports, module, require) {
          let constants = exports.get(module),
            name = 1,
            config = 0;
          for (let module = 0; module < require; module++) {
            const require = exports.get(module);
            if (result.na(require)) return result.na();
            constants < require ? name += 1 : constants === require && (config += 1)
          }
          return name + (config - 1) / 2
        }, this.rankDifferences = function(exports, module) {
          var require = 0;
          for (let constants = 0; constants < module; constants++) require += Math.pow(constants + 1 - this.orderRank(exports, constants, module), 2);
          return require
        }, this.rci = function(exports, module) {
          return 1 - 6 * this.rankDifferences(exports, module) / (module * (module * module - 1))
        }, this.main = function(exports, module) {
          var require = exports.new_var(result.close(exports)),
            constants = module(0);
          return [this.rci(require, constants)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.close(this._context)),
            constants = this._input(0);
          return [100 * (require.get(0) - require.get(constants)) / require.get(constants)]
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
        this.f_0 = function(exports) {
          return result.max(exports, 0)
        }, this.f_1 = function(exports) {
          return -result.min(exports, 0)
        }, this.f_2 = function(exports, module) {
          return result.eq(exports, 0) ? 100 : result.eq(module, 0) ? 0 : 100 - 100 / (1 + module / exports)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2);
          this._context.setMinimumAdditionalDepth(constants + config);
          var items, length = this._context.new_var(require),
            context = result.change(length),
            handler = this.f_0(context),
            data = this._context.new_var(handler),
            utils = result.rma(data, constants, this._context),
            _ = this.f_1(context),
            params = this._context.new_var(_),
            map = result.rma(params, constants, this._context),
            flag = this.f_2(map, utils),
            func = this._context.new_var(flag);
          return "EMA" === name ? items = result.ema(func, config, this._context) : "WMA" === name ? items = result.wma(func, config, this._context) :
            "SMA" === name && (items = result.sma(func, config, this._context)), [{
              value: flag
            }, {
              value: items
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
              color: utils
            },
            plot_1: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: items
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.f_1 = function(exports, module) {
          return exports / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this.f_0(result.close(this._context), result.open(this._context)),
            name = this._context.new_var(constants),
            config = result.swma(name, this._context),
            items = this._context.new_var(config),
            length = result.sum(items, require, this._context),
            context = this.f_0(result.high(this._context), result.low(this._context)),
            handler = this._context.new_var(context),
            data = result.swma(handler, this._context),
            utils = this._context.new_var(data),
            _ = result.sum(utils, require, this._context),
            params = this.f_1(length, _),
            map = this._context.new_var(params);
          return [params, result.swma(map, this._context)]
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
        this.f_0 = function(exports, module) {
          return result.le(exports, 0) ? 0 : module
        }, this.f_1 = function(exports, module) {
          return result.gt(exports, 0) ? 0 : module
        }, this.f_2 = function(exports, module) {
          return exports / (exports + module) * 100
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0);
          this._context.setMinimumAdditionalDepth(require + 12);
          var constants = result.close(this._context),
            name = this._context.new_var(constants),
            config = result.stdev(name, require, this._context),
            items = this._context.new_var(constants),
            length = result.change(items),
            context = this.f_0(length, config),
            handler = this._context.new_var(context),
            data = result.ema(handler, 14, this._context),
            utils = this.f_1(length, config),
            _ = this._context.new_var(utils),
            params = result.ema(_, 14, this._context);
          return [this.f_2(data, params)]
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
              color: context
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
        this.f_0 = function(exports, module) {
          return exports - module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2);
          this._context.setMinimumAdditionalDepth(require + constants + name);
          var config = result.close(this._context),
            items = this._context.new_var(config),
            length = result.tsi(items, require, constants, this._context),
            context = this._context.new_var(length),
            handler = result.ema(context, name, this._context);
          return [length, handler, this.f_0(length, handler)]
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
          var exports = this._input(0),
            module = result[this._input(1)](this._context);
          return [result.smma(module, exports, this._context)]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_0()
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
              color: utils
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._context.new_var(result.close(this._context));
          return [result.stdev(name, require, this._context) * constants]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2);
          this._context.setMinimumAdditionalDepth(require + constants + name);
          var config = result.close(this._context),
            items = result.high(this._context),
            length = result.low(this._context),
            context = this._context.new_var(config),
            handler = this._context.new_var(items),
            data = this._context.new_var(length),
            utils = result.stoch(context, handler, data, require, this._context),
            _ = this._context.new_var(utils),
            params = result.sma(_, constants, this._context),
            map = this._context.new_var(params);
          return [params, result.sma(map, name, this._context)]
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
        this.f_1 = function(exports, module, require) {
          var constants = require.new_var(result.max(result.change(exports), 0));
          return result.rma(constants, module, require)
        }, this.f_2 = function(exports, module, require) {
          var constants = require.new_var(-result.min(result.change(exports), 0));
          return result.rma(constants, module, require)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2),
            items = this._input(3);
          exports.setMinimumAdditionalDepth(constants + name + config + items);
          var length = this._context.new_var(require),
            context = result.rsi(this.f_1(length, constants, this._context), this.f_2(length, constants, this._context)),
            handler = this._context.new_var(context),
            data = this._context.new_var(context),
            utils = this._context.new_var(context),
            _ = result.stoch(handler, data, utils, name, this._context),
            params = this._context.new_var(_),
            map = result.sma(params, config, this._context),
            flag = this._context.new_var(map);
          return [map, result.sma(flag, items, this._context)]
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
              color: items
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
        this.f_0 = function(exports) {
          return result.log(exports)
        }, this.f_1 = function(exports) {
          return 1e4 * exports
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0);
          exports.setMinimumAdditionalDepth(3 * require);
          var constants = this.f_0(result.close(this._context)),
            name = this._context.new_var(constants),
            config = result.ema(name, require, this._context),
            items = this._context.new_var(config),
            length = result.ema(items, require, this._context),
            context = this._context.new_var(length),
            handler = result.ema(context, require, this._context),
            data = this._context.new_var(handler),
            utils = result.change(data);
          return [this.f_1(utils)]
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
        this.f_0 = function(exports, module, require) {
          return 3 * (exports - module) + require
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0);
          this._context.setMinimumAdditionalDepth(3 * require);
          var constants = result.close(this._context),
            name = this._context.new_var(constants),
            config = result.ema(name, require, this._context),
            items = this._context.new_var(config),
            length = result.ema(items, require, this._context),
            context = this._context.new_var(length),
            handler = result.ema(context, require, this._context);
          return [this.f_0(config, length, handler)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2);
          this._context.setMinimumAdditionalDepth(this._input(0) + this._input(1) + this._input(2));
          var config = result.close(this._context),
            items = this._context.new_var(config),
            length = result.tsi(items, constants, require, this._context),
            context = this._context.new_var(length);
          return [length, result.ema(context, name, this._context)]
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
              color: context
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.invertedPeriod = 1 / this
            .period, this.sumX = (this.period - 1) * this.period / 2, this.sumXX = (this.period - 1) * this
            .period * (2 * this.period - 1) / 6, this.invertedPeriodSumXSumX = this.invertedPeriod * this.sumX *
            this.sumX
        }, this.trendStrengthIndex = function() {
          for (var exports = this._context.new_var(result.close(this._context)), module = result.sum(exports, this.period, this._context),
              require = 0, constants = 0, name = 0; name < this.period; name++) {
            var config = exports.get(name);
            constants += (this.period - 1 - name) * config, require += config * config
          }
          var items = constants - this.invertedPeriod * this.sumX * module,
            length = (this.sumXX - this.invertedPeriodSumXSumX) * (require - this.invertedPeriod * module * module);
          return length < 0 ? 0 == items ? 0 : items > 0 ? 1 : -1 : items / (length = Math.sqrt(length))
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, [this.trendStrengthIndex()]
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
        this.main = function(exports, module) {
          return this._context = exports, this._input = module, [result.hlc3(this._context)]
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
              color: items
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
        this.f_0 = function(exports, module, require) {
          var constants = this._context.new_var(exports),
            name = this._context.new_var(module);
          return [result.sum(constants, require, this._context) / result.sum(name, require, this._context)]
        }, this.f_1 = function() {
          var exports = this._input(0),
            module = this._input(1),
            require = this._input(2),
            constants = this._context.new_var(result.close(this._context)),
            name = result.max(result.high(this._context), constants.get(1)),
            config = this._context.new_var(result.close(this._context)),
            items = result.min(result.low(this._context), config.get(1)),
            length = result.close(this._context) - items,
            context = name - items,
            handler = this.f_0(length, context, exports),
            data = this.f_0(length, context, module),
            utils = this.f_0(length, context, require);
          return [100 * (4 * handler[0] + 2 * data[0] + utils[0]) / 7]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_1()
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.daysPerYear = this._input(1)
        }, this.stdev = function(exports, module, require) {
          var constants = this.variance(exports, module, require);
          return result.sqrt(constants)
        }, this.variance = function(exports, module, require) {
          var constants = result.sma(exports, module, require);
          return this.variance2(exports, constants, module)
        }, this.variance2 = function(exports, module, require) {
          var constants, result, name = 0;
          for (constants = 0; constants < require; constants++) name += (result = exports.get(constants) - module) * result;
          return name / (require - 1)
        }, this.standardHistVol = function() {
          var exports = this._context.new_var(result.close(this._context)),
            module = this._context.new_var(result.log(exports.get() / exports.get(1)));
          return 100 * this.stdev(module, this.period, this._context) * result.sqrt(this.daysPerYear)
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, [this.standardHistVol()]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.daysPerYear = this._input(1)
        }, this.volatliityZTCTC = function() {
          this._context.setMinimumAdditionalDepth(this._input(0) + 1);
          for (var exports = this._context.new_var(result.close(this._context)), module = this._context.new_var(exports.symbol.time),
              require = Math.sqrt((module.get(0) - module.get(1)) / 864e5 / this.daysPerYear), constants = Math.log(result.close(this
                ._context) / exports.get(1)), name = this._context.new_var(constants / require), config = this._context.new_var(Math.pow(name,
                2)), items = 0, length = 0; length < this.period; length++) items += config.get(length);
          return 100 * Math.sqrt(items / this.period)
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, [this.volatliityZTCTC()]
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
              color: context
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this.period = this._input(0), this.marketClosedPercentage = this
            ._input(1), this.daysPerYear = this._input(2), this.secondsPerYear = 86400 * this.daysPerYear
        }, this.square = function(exports) {
          return exports * exports
        }, this.volatilityOHLC = function() {
          var exports = this._context.new_var(Math.log(result.open(this._context))),
            module = this._context.new_var(Math.log(result.high(this._context))),
            require = this._context.new_var(Math.log(result.low(this._context))),
            constants = this._context.new_var(Math.log(result.close(this._context))),
            name = this._context.new_var(result.close(this._context)),
            config = this._context.new_var(name.symbol.time),
            items = (config.get(0) - config.get(1)) / 1e3,
            length = .5 * this.square(module.get() - require.get());
          length -= (Math.log(4) - 1) * this.square(constants.get() - exports.get()), this.marketClosedPercentage > 0 && (length = .12 *
            this.square(exports.get() - constants.get(1)) / this.marketClosedPercentage + .88 * length / (1 - this
              .marketClosedPercentage)), length /= items, length *= this.secondsPerYear;
          var context = this._context.new_var(length);
          return 100 * Math.sqrt(result.sum(context, this.period, this._context) / this.period)
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, [this.volatilityOHLC()]
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
              color: context
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module,
            this.period = this._input(0), this.atrMult = this._input(1), this.maMethod = this._input(2), this
            .nextsar = null, this.position = null, this.sic = null, this.bars = [], this.count = 0, this
            .lastSar = null, this._context.setMinimumAdditionalDepth("Exponential" === this.maMethod ? 2 * this
              .period + 2 : this.period)
        }, this.computeATR = function() {
          var exports = result.high(this._context) - result.low(this._context),
            module = result.high(this._context) - this.bars[this.bars.length - 2],
            require = this.bars[this.bars.length - 2] - result.low(this._context);
          return this.tr = Math.max(exports, module, require), "Exponential" === this.maMethod ? this.atr = result.ema(this._context
            .new_var(this.tr), this.period, this._context) : this.atr = this.tr / this.period + (1 - 1 / this
            .period) * this.atr, this.atr * this.atrMult
        }, this.calculateVolatility = function() {
          if (result.close(this._context) === this.bars[this.bars.length - 1]) return this.lastSar;
          if (this.bars.push(result.close(this._context)), 1 === this.count) this.atr = result.high(this._context) - result
            .low(this._context), this.sic = result.close(this._context);
          else if (this.count < this.period) {
            var exports = result.high(this._context) - result.low(this._context),
              module = result.high(this._context) - this.bars[this.bars.length - 2],
              require = this.bars[this.bars.length - 2] - result.low(this._context);
            this.atr += Math.max(exports, module, require), result.close(this._context) > this.sic && (this.sic = result.close(this
              ._context))
          } else if (this.count === this.period) {
            exports = result.high(this._context) - result.low(this._context), module = result.high(this._context) - this.bars[this.bars
              .length - 2], require = this.bars[this.bars.length - 2] - result.low(this._context);
            this.atr += Math.max(exports, module, require), this.atr *= 1 / this.period, result.close(this._context) > this.sic && (
                this.sic = result.close(this._context)), this.position = "LONG", this.nextsar = this.sic - this.atr *
              this.atrMult
          } else {
            var constants = this.nextsar;
            "LONG" === this.position ? result.close(this._context) < constants ? (this.position = "SHORT", this.sic = result
              .close(this._context), this.nextsar = this.sic + this.computeATR()) : (this.position = "LONG",
              this.sic = Math.max(result.close(this._context), this.sic), this.nextsar = this.sic - this
              .computeATR()) : "SHORT" === this.position && (result.close(this._context) > constants ? (this.position =
              "LONG", this.sic = result.close(this._context), this.nextsar = this.sic - this.computeATR()) : (
              this.position = "SHORT", this.sic = Math.min(result.close(this._context), this.sic), this.nextsar =
              this.sic + this.computeATR())), this.lastSar = constants
          }
          return this.count++, constants
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this._context.select_sym(0), [this.calculateVolatility()]
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
        this.f_1 = function(exports) {
          exports.reset_hist()
        }, this.createAnchorChecker = function(exports, module) {
          switch (module) {
            case "Week":
              return function(module, require) {
                return result.weekofyear(exports, module) !== result.weekofyear(exports, require) || result.year(exports, module) !== result.year(exports, require)
              };
            case "Month":
              return function(module, require) {
                return result.month(exports, module) !== result.month(exports, require) || result.year(exports, module) !== result.year(exports, require)
              };
            case "Quarter":
              return function(module, require) {
                return Math.floor(result.month(exports, module) / 3) !== Math.floor(result.month(exports, require) / 3) || result.year(exports, module) !== result
                  .year(exports, require)
              };
            case "Year":
              return function(module, require) {
                return result.year(exports, module) !== result.year(exports, require)
              };
            case "Decade":
              return function(module, require) {
                return Math.floor(result.year(exports, module) / 10) !== Math.floor(result.year(exports, require) / 10)
              };
            case "Century":
              return function(module, require) {
                return Math.floor(result.year(exports, module) / 100) !== Math.floor(result.year(exports, require) / 100)
              };
            default:
              return exportstrinflag => this._isFirstBarInSession(exports)
          }
        }, this.init = function(exports, module) {
          this._input = module, this._isFirstBarInSession = null;
          const require = this._input(1) || "Session";
          this._anchorChecker = this.createAnchorChecker(exports, require)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          const require = this._input(0);
          var constants = exports.new_var(),
            name = exports.new_var(),
            config = exports.new_var();
          const items = result.time(this._context),
            length = this._context.new_unlimited_var(items).get(1);
          if (items) {
            if (null === this._isFirstBarInSession) {
              const module = result.createNthBarInSessionCheck(exports);
              this._isFirstBarInSession = exportstrinflag => module(exports, 0)
            }
            this._anchorChecker(items, length) && (this.f_1(constants), this.f_1(name), config.set(items))
          }
          return constants.set(result.nz(constants.get(1)) + result[require](this._context) * result.volume(this._context)), name.set(result.nz(name.get(1)) + result
            .volume(this._context)), result.na(config.get(0)) ? (exports.symbol.isLastBar && result.error(
            "To calculate the VWAP indicator, more data is needed. Zoom out or scroll left to load more historical data.",
            "VWAP is waiting for more data"), [NaN]) : [constants.get(0) / name.get(0)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = result.close(this._context),
            constants = this._input(0),
            name = this._context.new_var(require);
          return [result.vwma(name, constants, this._context)]
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
        this.f_0 = function(exports, module) {
          return 100 * (exports - module) / module
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = result.volume(this._context),
            config = this._context.new_var(name),
            items = result.ema(config, require, this._context),
            length = this._context.new_var(name),
            context = result.ema(length, constants, this._context);
          return [this.f_0(items, context)]
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
          var exports = this._input(0),
            module = this._context.new_var(result.low(this._context)),
            require = this._context.new_var(result.abs(result.high(this._context) - module.get(1))),
            constants = result.sum(require, exports, this._context),
            name = this._context.new_var(result.high(this._context)),
            config = this._context.new_var(result.abs(result.low(this._context) - name.get(1))),
            items = result.sum(config, exports, this._context),
            length = this._context.new_var(result.atr(1, this._context)),
            context = result.sum(length, exports, this._context);
          return [constants / context, items / context]
        }, this.main = function(exports, module) {
          return this._context = exports, this._input = module, this.f_0()
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
        this.f_0 = function(exports, module, require) {
          return 100 * (exports - module) / (module - require)
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = result.high(this._context),
            name = this._context.new_var(constants),
            config = result.highest(name, require, this._context),
            items = result.low(this._context),
            length = this._context.new_var(items),
            context = result.lowest(length, require, this._context);
          return [this.f_0(result.close(this._context), config, context)]
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            constants = this._input(1),
            name = this._input(2),
            config = this._input(3),
            items = this._input(4),
            length = this._input(5),
            context = result.hl2(this._context);
          return [{
            value: result.smma(context, require, this._context),
            offset: config
          }, {
            value: result.smma(context, constants, this._context),
            offset: items
          }, {
            value: result.smma(context, name, this._context),
            offset: length
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
              color: items
            },
            plot_1: {
              plottype: "shape_triangle_up",
              visible: !0,
              location: "AboveBar",
              transparency: 0,
              color: utils
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
          for (var exports = this._input(0), module = this._context.new_var(result.high(this._context)), require = !0, constants = !0, name = !0,
              config = !0, items = !0, length = !0, context = 1; context <= exports; context++) require = result.and(require, result.lt(module.get(exports - context), module.get(exports))), constants = result.and(
              constants, result.lt(module.get(exports + context), module.get(exports))), name = result.and(name, result.and(result.le(module.get(exports + 1), module.get(exports)), result.lt(module.get(exports +
              context + 1), module.get(exports)))),
            config = result.and(config, result.and(result.le(module.get(exports + 1), module.get(exports)), result.and(result.le(module.get(exports + 2), module.get(exports)), result.lt(module.get(exports +
              context + 2), module.get(exports))))), items = result.and(items, result.and(result.le(module.get(exports + 1), module.get(exports)), result.and(result.le(module.get(exports + 2), module
              .get(exports)), result.and(result.le(module.get(exports + 3), module.get(exports)), result.lt(module.get(exports + context + 3), module.get(exports)))))), length = result.and(length, result
              .and(result.le(module.get(exports + 1), module.get(exports)), result.and(result.le(module.get(exports + 2), module.get(exports)), result.and(result.le(module.get(exports + 3), module
                .get(exports)), result.and(result.le(module.get(exports + 4), module.get(exports)), result.lt(module.get(exports + context + 4), module.get(exports)))))));
          var handler = result.or(constants, result.or(name, result.or(config, result.or(items, length)))),
            data = result.and(require, handler),
            utils = this._context.new_var(result.low(this._context)),
            _ = 1,
            params = 1,
            map = 1,
            flag = 1,
            func = 1,
            array = 1;
          for (context = 1; context <= exports; context++) _ = result.and(_, result.gt(utils.get(exports - context), utils.get(exports))), params = result.and(params, result.gt(utils.get(exports + context), utils
              .get(exports))), map = result.and(map, result.and(result.ge(utils.get(exports + 1), utils.get(exports)), result.gt(utils.get(exports + context + 1), utils.get(exports)))),
            flag = result.and(flag, result.and(result.ge(utils.get(exports + 1), utils.get(exports)), result.and(result.ge(utils.get(exports + 2), utils.get(exports)), result.gt(utils.get(exports +
              context + 2), utils.get(exports))))), func = result.and(func, result.and(result.ge(utils.get(exports + 1), utils.get(exports)), result.and(result.ge(utils.get(exports + 2), utils
              .get(exports)), result.and(result.ge(utils.get(exports + 3), utils.get(exports)), result.gt(utils.get(exports + context + 3), utils.get(exports)))))), array = result.and(array, result
              .and(result.ge(utils.get(exports + 1), utils.get(exports)), result.and(result.ge(utils.get(exports + 2), utils.get(exports)), result.and(result.ge(utils.get(exports + 3), utils
                .get(exports)), result.and(result.ge(utils.get(exports + 4), utils.get(exports)), result.gt(utils.get(exports + context + 4), utils.get(exports)))))));
          var value = result.or(params, result.or(map, result.or(flag, result.or(func, array))));
          return [result.and(_, value), data]
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this.f_0();
          return [{
            value: require[0],
            offset: -this._input(0)
          }, {
            value: require[1],
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
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._context.new_var(result.close(this._context)),
            constants = this._input(0),
            name = this._input(1),
            config = this._input(2),
            items = this._input(3),
            length = this._input(4),
            context = this._input(5),
            handler = result.ema(require, constants, this._context),
            data = result.ema(require, name, this._context),
            utils = result.ema(require, config, this._context),
            _ = result.ema(require, items, this._context),
            params = result.ema(require, length, this._context),
            map = result.ema(require, context, this._context),
            flag = this._input(6),
            func = this._input(7),
            array = this._input(8),
            value = this._input(9),
            S = this._input(10),
            bool = this._input(11);
          return [handler, data, utils, _, params, map, result.ema(require, flag, this._context), result.ema(require, func, this._context), result.ema(require, array, this
            ._context), result.ema(require, value, this._context), result.ema(require, S, this._context), result.ema(require, bool, this._context)]
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
        this.init = function(exports, module) {
          this._context = exports, this._input = module, this._symbolSupports1DResolution = !this._context.symbol.info
            .supported_resolutions || -1 !== this._context.symbol.info.supported_resolutions.indexOf("1D"), this
            ._symbolSupports1DResolution && "1D" !== result.period(this._context) && this._context.new_sym(this
              ._context.symbol.ticker, "1D")
        }, this.main = function(exports, module) {
          this._symbolSupports1DResolution || result.error(
              `Daily bars are not available for ${this._context.symbol.info.name}`), this._context = exports, this
            ._input = module, "1D" !== result.period(this._context) && this._context.select_sym(1);
          const require = this._input(0),
            constants = this._input(1),
            name = result.time(this._context),
            config = this._context.new_unlimited_var(name),
            items = this._context.new_unlimited_var(result[require](this._context)),
            length = this._context.new_unlimited_var(result[constants](this._context));
          if (config.get(365), !this._context.symbol.isLastBar || !this._context.symbol.isNewBar) return null;
          const context = result.add_years_considering_dst(this._context.symbol.info.timezone, new Date(name), -1),
            handler = config.indexOf(context.getTime()),
            data = -1 === handler ? NaN : result.highest(items, handler, this._context),
            utils = -1 === handler ? NaN : result.lowest(length, handler, this._context);
          if (isNaN(data) || isNaN(utils)) return {
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
                      startIndex: name,
                      endIndex: name,
                      level: data,
                      extendLeft: !0,
                      extendRight: !0
                    }]
                  }, {
                    styleId: "lowest",
                    data: [{
                      startIndex: name,
                      endIndex: name,
                      level: utils,
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