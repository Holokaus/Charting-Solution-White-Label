/**
 * Module 45 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (21175 bytes) - comprehensive remediation applied
 */

45: (exports, module, require) => {
    "use strict";
    const modes = require(58978).getHexColorByName;
    var isValid = require(19979).Std;
    require(4783);
    var value = require(32503).pivotPointsStandardStudyItem,
      config = require(53690).volumeProfileVisibleRangeStudyItem,
      items = require(74109).volumeProfileFixedRangeVbPStudyItem,
      length = require(74109).volumeProfileFixedRangeBSStudyItem,
      context = require(24451).spreadStudyItem,
      handler = require(52691).ratioStudyItem,
      seriesBarFunction_d = require(57622).regressionTrendStudyItem,
      seriesBarFunction_u = require(34378).anchoredVWAPStudyItem,
      _ = require(51052).overlayStudyItem,
      seriesBarFunction_p = require(95603).inactivityGapsStudyItem;
    const seriesBarFunction_m = modes("color-ripe-red-400"),
      seriesBarFunction_g = modes("color-minty-green-400");
    JSServer.studyLibrary = JSServer.studyLibrary.concat([{
      name: "Compare",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !0,
        defaults: {
          styles: {
            compare: {
              linestyle: 0,
              linewidth: 2,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#9C27B0"
            }
          },
          inputs: {
            source: "close",
            symbol: ""
          }
        },
        plots: [{
          id: "compare",
          type: "line"
        }],
        styles: {
          compare: {
            title: "Plot",
            histogramBase: 0
          }
        },
        description: "Compare",
        shortDescription: "Compare",
        is_price_study: !0,
        inputs: [{
          defval: "close",
          id: "source",
          name: "Source",
          options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
          type: "text"
        }, {
          id: "symbol",
          name: "Symbol",
          type: "symbol",
          isHidden: !0
        }],
        id: "Compare@tv-basicstudies-1",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.init = function(exports, module) {
          this._context = exports, this._context.new_sym(module(1), isValid.period(this._context))
        }, this.main = function(exports, module) {
          this._context = exports;
          var require = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          var modes = this._context.new_unlimited_var(this._context.symbol.time),
            value = isValid[module(0)](this._context),
            config = this._context.new_unlimited_var(value);
          return this._context.select_sym(0), [config.adopt(modes, require, 0)]
        }
      }
    }, _, {
      name: "Volume",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            vol: {
              linestyle: 0,
              linewidth: 1,
              plottype: 5,
              trackPrice: !1,
              transparency: 50,
              visible: !0,
              color: "#000080"
            },
            vol_ma: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1,
              color: "#2196F3"
            },
            smoothedMA: {
              linestyle: 0,
              linewidth: 1,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !1,
              color: "#2196F3"
            }
          },
          palettes: {
            volumePalette: {
              colors: {
                0: {
                  color: seriesBarFunction_m,
                  width: 1,
                  style: 0
                },
                1: {
                  color: seriesBarFunction_g,
                  width: 1,
                  style: 0
                }
              }
            }
          },
          inputs: {
            showMA: !1,
            volumeMA: "SMA",
            length: 20,
            col_prev_close: !1,
            symbol: "",
            smoothingLine: "SMA",
            smoothingLength: 9
          }
        },
        plots: [{
          id: "vol",
          type: "line"
        }, {
          id: "volumePalette",
          palette: "volumePalette",
          target: "vol",
          type: "colorer"
        }, {
          id: "vol_ma",
          type: "line"
        }, {
          id: "smoothedMA",
          type: "line"
        }],
        styles: {
          vol: {
            title: "Volume",
            histogramBase: 0
          },
          vol_ma: {
            title: "Volume MA",
            histogramBase: 0
          },
          smoothedMA: {
            title: "Smoothed MA",
            histogramBase: 0
          }
        },
        description: "Volume",
        shortDescription: "Volume",
        is_price_study: !1,
        palettes: {
          volumePalette: {
            colors: {
              0: {
                name: "Falling"
              },
              1: {
                name: "Growing"
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
          id: "showMA",
          name: "show MA",
          defval: !1,
          type: "bool",
          isHidden: !0
        }, {
          id: "length",
          name: "MA Length",
          defval: 20,
          type: "integer",
          min: 1,
          max: 2e3,
          hideWhenPlotsHidden: ["vol_ma"]
        }, {
          id: "volumeMA",
          name: "Volume MA",
          defval: "SMA",
          type: "text",
          options: ["SMA", "EMA", "WMA"],
          hideWhenPlotsHidden: ["vol_ma"]
        }, {
          defval: !1,
          id: "col_prev_close",
          name: "Color based on previous close",
          type: "bool"
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
        id: "Volume@tv-basicstudies-1",
        format: {
          type: "volume"
        }
      },
      constructor: function() {
        this.init = function(exports, module) {
          this._context = exports, "" !== module(0) && this._context.new_sym(module(0), isValid.period(this._context))
        }, this.f_0 = function(exports, module) {
          return isValid.gt(exports, module) ? 0 : 1
        }, this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = isValid.volume(this._context),
            modes = isValid.open(this._context),
            value = isValid.close(this._context),
            config = this._context.new_var(this._context.symbol.time),
            items = this._input(5),
            length = this._input(6),
            context = this._input(2),
            handler = this._input(3);
          if (this._context.setMinimumAdditionalDepth(context + length), "" !== this._input(0)) {
            this._context.select_sym(1);
            var seriesBarFunction_d = this._context.new_var(this._context.symbol.time),
              seriesBarFunction_u = this._context.new_var(isValid.volume(this._context)),
              _ = this._context.new_var(isValid.open(this._context)),
              seriesBarFunction_p = this._context.new_var(isValid.close(this._context));
            require = seriesBarFunction_u.adopt(seriesBarFunction_d, config, 1), modes = _.adopt(seriesBarFunction_d, config, 1), value = seriesBarFunction_p.adopt(seriesBarFunction_d, config, 1), this._context.select_sym(0)
          }
          var seriesBarFunction_m = this._context.new_var(require),
            seriesBarFunction_g = isValid[handler.toLowerCase()](seriesBarFunction_m, context, this._context),
            seriesBarFunction_f = this._context.new_var(seriesBarFunction_g),
            seriesBarFunction_y = this._context.new_var(value);
          return [require, seriesBarFunction_y.get(1) && this._input(4) ? this.f_0(seriesBarFunction_y.get(1), value) : this.f_0(modes, value), seriesBarFunction_g, isValid[items
          .toLowerCase()](seriesBarFunction_f, length, this._context)]
        }
      }
    }, {
      name: "ZigZag",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 2,
              plottype: 0,
              trackPrice: !1,
              transparency: 0,
              visible: !0,
              color: "#2196F3"
            }
          },
          inputs: {
            in_0: 5,
            in_1: 10
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          target: "plot_0",
          type: "dataoffset"
        }],
        styles: {
          plot_0: {
            title: "Plot",
            histogramBase: 0,
            joinPoints: !1
          }
        },
        description: "Zig Zag",
        shortDescription: "ZigZag",
        is_price_study: !0,
        classId: "ScriptWithDataOffset",
        inputs: [{
          id: "in_0",
          name: "deviation",
          defval: 5,
          type: "float",
          min: .001,
          max: 100
        }, {
          id: "in_1",
          name: "depth",
          defval: 10,
          type: "integer",
          min: 2,
          max: 1e3
        }],
        id: "ZigZag@tv-basicstudies-1",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(exports, module) {
          this._context = exports, this._input = module;
          var require = this._input(0),
            modes = this._input(1),
            value = require / 100,
            config = Math.ceil(modes / 2);
          return [isValid.zigzag(value, config, this._context), isValid.zigzagbars(value, config, this._context)]
        }
      }
    }, {
      name: "Sessions",
      metainfo: {
        _metainfoVersion: 52,
        defaults: {
          graphics: {
            vertlines: {
              sessBreaks: {
                color: "#4985e7",
                style: 2,
                visible: !1,
                width: 1
              }
            },
            backgrounds: {
              preMarket: {
                color: "#FF9800",
                transparency: 92,
                visible: !0
              },
              postMarket: {
                color: "#2196F3",
                transparency: 92,
                visible: !0
              }
            }
          },
          linkedToSeries: !0
        },
        description: "Sessions",
        graphics: {
          vertlines: {
            sessBreaks: {
              name: "Session Break",
              halign: "left"
            }
          },
          backgrounds: {
            preMarket: {
              name: "Pre market"
            },
            postMarket: {
              name: "Post market"
            }
          }
        },
        id: "Sessions@tv-basicstudies-1",
        inputs: [],
        is_hidden_study: !0,
        is_price_study: !0,
        name: "Sessions@tv-basicstudies",
        palettes: {},
        plots: [],
        shortDescription: "Sessions",
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        function exports(exports, module) {
          return {
            id: exports,
            index: exports,
            extendBottom: !0,
            extendTop: !0
          }
        }

        function module(exports) {
          return {
            id: exports.start,
            start: exports.start,
            stop: exports.stop
          }
        }
        this.init = function() {
          this._times = []
        }, this._getVerticalLineData = function(module) {
          return isValid.selectSessionBreaks(module, this._times).map(exports)
        }, this._getPreAndPostMarketBackgroundsData = function(exports) {
          const require = isValid.selectPreAndPostMarketTimes(exports, this._times);
          return {
            preMarket: require.preMarket.map(module),
            postMarket: require.postMarket.map(module)
          }
        }, this.main = function(exports, module) {
          if (isValid.isdwm(exports)) return null;
          var require = isValid.time(exports);
          if (isNaN(require)) return null;
          var modes = this._times.length;
          if (0 !== modes && this._times[modes - 1] === require || this._times.push(require), !exports.symbol.isLastBar || !exports.symbol
            .isNewBar) return null;
          var value = this._getVerticalLineData(exports),
            config = this._getPreAndPostMarketBackgroundsData(exports);
          return 0 === value.length && 0 === config.preMarket.length && 0 === config.postMarket ? null : {
            nonseries: !0,
            type: "study_graphics",
            data: {
              graphicsCmds: {
                create: {
                  vertlines: [{
                    styleId: "sessBreaks",
                    data: value
                  }],
                  backgrounds: [{
                    styleId: "preMarket",
                    data: config.preMarket
                  }, {
                    styleId: "postMarket",
                    data: config.postMarket
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
    }, {
      name: "SuperTrend",
      metainfo: {
        _metainfoVersion: 52,
        isTVScript: !1,
        isTVScriptStub: !1,
        is_hidden_study: !1,
        defaults: {
          styles: {
            plot_0: {
              linestyle: 0,
              linewidth: 3,
              plottype: 0,
              trackPrice: !1,
              transparency: 35,
              visible: !0,
              color: "#000080"
            },
            plot_2: {
              linestyle: 0,
              linewidth: 3,
              plottype: "shape_arrow_up",
              trackPrice: !1,
              location: "BelowBar",
              transparency: 35,
              visible: !0,
              color: "#00FF00"
            },
            plot_3: {
              linestyle: 0,
              linewidth: 3,
              plottype: "shape_arrow_down",
              trackPrice: !1,
              location: "AboveBar",
              transparency: 35,
              visible: !0,
              color: "#FF0000"
            }
          },
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: "#008000",
                  width: 3,
                  style: 0
                },
                1: {
                  color: "#800000",
                  width: 3,
                  style: 0
                }
              }
            }
          },
          inputs: {
            in_0: 10,
            in_1: 3
          }
        },
        plots: [{
          id: "plot_0",
          type: "line"
        }, {
          id: "plot_1",
          palette: "palette_0",
          target: "plot_0",
          type: "colorer"
        }, {
          id: "plot_2",
          type: "shapes"
        }, {
          id: "plot_3",
          type: "shapes"
        }],
        styles: {
          plot_0: {
            title: "SuperTrend",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_2: {
            title: "Up Arrow",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          },
          plot_3: {
            title: "Down Arrow",
            histogramBase: 0,
            joinPoints: !1,
            isHidden: !1
          }
        },
        description: "SuperTrend",
        shortDescription: "SuperTrend",
        is_price_study: !0,
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
        inputs: [{
          id: "in_0",
          name: "Length",
          defval: 10,
          type: "integer",
          min: 1,
          max: 100
        }, {
          id: "in_1",
          name: "Factor",
          defval: 3,
          type: "float",
          min: 1,
          max: 100
        }],
        id: "SuperTrend@tv-basicstudies-1",
        scriptIdPart: "",
        name: "SuperTrend",
        isCustomIndicator: !0,
        format: {
          type: "inherit"
        }
      },
      constructor: function() {
        this.main = function(exports, module) {
          var require = module(0),
            modes = module(1),
            [value, config] = isValid.supertrend(modes, require, exports),
            items = exports.new_var(config).get(1);
          return [value, -1 === config ? 0 : 1, -1 === config && items !== config ? 1 : NaN, 1 === config && items !== config ? 1 : NaN]
        }
      }
    }, value, config, items, length, context, handler, seriesBarFunction_d, seriesBarFunction_u, seriesBarFunction_p])