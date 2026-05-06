/**
 * Module 45 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    const seriesBarFunction_s = seriesBarFunction_i(58978).getHexColorByName;
    var seriesBarFunction_o = seriesBarFunction_i(19979).Std;
    seriesBarFunction_i(4783);
    var seriesBarFunction_n = seriesBarFunction_i(32503).pivotPointsStandardStudyItem,
      seriesBarFunction_r = seriesBarFunction_i(53690).volumeProfileVisibleRangeStudyItem,
      seriesBarFunction_a = seriesBarFunction_i(74109).volumeProfileFixedRangeVbPStudyItem,
      seriesBarFunction_l = seriesBarFunction_i(74109).volumeProfileFixedRangeBSStudyItem,
      seriesBarFunction_c = seriesBarFunction_i(24451).spreadStudyItem,
      seriesBarFunction_h = seriesBarFunction_i(52691).ratioStudyItem,
      seriesBarFunction_d = seriesBarFunction_i(57622).regressionTrendStudyItem,
      seriesBarFunction_u = seriesBarFunction_i(34378).anchoredVWAPStudyItem,
      _ = seriesBarFunction_i(51052).overlayStudyItem,
      seriesBarFunction_p = seriesBarFunction_i(95603).inactivityGapsStudyItem;
    const seriesBarFunction_m = seriesBarFunction_s("color-ripe-red-400"),
      seriesBarFunction_g = seriesBarFunction_s("color-minty-green-400");
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
        this.init = function(seriesBarFunction_e, seriesBarFunction_t) {
          this._context = seriesBarFunction_e, this._context.new_sym(seriesBarFunction_t(1), seriesBarFunction_o.period(this._context))
        }, this.main = function(seriesBarFunction_e, seriesBarFunction_t) {
          this._context = seriesBarFunction_e;
          var seriesBarFunction_i = this._context.new_unlimited_var(this._context.symbol.time);
          this._context.select_sym(1);
          var seriesBarFunction_s = this._context.new_unlimited_var(this._context.symbol.time),
            seriesBarFunction_n = seriesBarFunction_o[seriesBarFunction_t(0)](this._context),
            seriesBarFunction_r = this._context.new_unlimited_var(seriesBarFunction_n);
          return this._context.select_sym(0), [seriesBarFunction_r.adopt(seriesBarFunction_s, seriesBarFunction_i, 0)]
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
        this.init = function(seriesBarFunction_e, seriesBarFunction_t) {
          this._context = seriesBarFunction_e, "" !== seriesBarFunction_t(0) && this._context.new_sym(seriesBarFunction_t(0), seriesBarFunction_o.period(this._context))
        }, this.f_0 = function(seriesBarFunction_e, seriesBarFunction_t) {
          return seriesBarFunction_o.gt(seriesBarFunction_e, seriesBarFunction_t) ? 0 : 1
        }, this.main = function(seriesBarFunction_e, seriesBarFunction_t) {
          this._context = seriesBarFunction_e, this._input = seriesBarFunction_t;
          var seriesBarFunction_i = seriesBarFunction_o.volume(this._context),
            seriesBarFunction_s = seriesBarFunction_o.open(this._context),
            seriesBarFunction_n = seriesBarFunction_o.close(this._context),
            seriesBarFunction_r = this._context.new_var(this._context.symbol.time),
            seriesBarFunction_a = this._input(5),
            seriesBarFunction_l = this._input(6),
            seriesBarFunction_c = this._input(2),
            seriesBarFunction_h = this._input(3);
          if (this._context.setMinimumAdditionalDepth(seriesBarFunction_c + seriesBarFunction_l), "" !== this._input(0)) {
            this._context.select_sym(1);
            var seriesBarFunction_d = this._context.new_var(this._context.symbol.time),
              seriesBarFunction_u = this._context.new_var(seriesBarFunction_o.volume(this._context)),
              _ = this._context.new_var(seriesBarFunction_o.open(this._context)),
              seriesBarFunction_p = this._context.new_var(seriesBarFunction_o.close(this._context));
            seriesBarFunction_i = seriesBarFunction_u.adopt(seriesBarFunction_d, seriesBarFunction_r, 1), seriesBarFunction_s = _.adopt(seriesBarFunction_d, seriesBarFunction_r, 1), seriesBarFunction_n = seriesBarFunction_p.adopt(seriesBarFunction_d, seriesBarFunction_r, 1), this._context.select_sym(0)
          }
          var seriesBarFunction_m = this._context.new_var(seriesBarFunction_i),
            seriesBarFunction_g = seriesBarFunction_o[seriesBarFunction_h.toLowerCase()](seriesBarFunction_m, seriesBarFunction_c, this._context),
            seriesBarFunction_f = this._context.new_var(seriesBarFunction_g),
            seriesBarFunction_y = this._context.new_var(seriesBarFunction_n);
          return [seriesBarFunction_i, seriesBarFunction_y.get(1) && this._input(4) ? this.f_0(seriesBarFunction_y.get(1), seriesBarFunction_n) : this.f_0(seriesBarFunction_s, seriesBarFunction_n), seriesBarFunction_g, seriesBarFunction_o[seriesBarFunction_a
          .toLowerCase()](seriesBarFunction_f, seriesBarFunction_l, this._context)]
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
        this.main = function(seriesBarFunction_e, seriesBarFunction_t) {
          this._context = seriesBarFunction_e, this._input = seriesBarFunction_t;
          var seriesBarFunction_i = this._input(0),
            seriesBarFunction_s = this._input(1),
            seriesBarFunction_n = seriesBarFunction_i / 100,
            seriesBarFunction_r = Math.ceil(seriesBarFunction_s / 2);
          return [seriesBarFunction_o.zigzag(seriesBarFunction_n, seriesBarFunction_r, this._context), seriesBarFunction_o.zigzagbars(seriesBarFunction_n, seriesBarFunction_r, this._context)]
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
        function seriesBarFunction_e(seriesBarFunction_e, seriesBarFunction_t) {
          return {
            id: seriesBarFunction_e,
            index: seriesBarFunction_e,
            extendBottom: !0,
            extendTop: !0
          }
        }

        function seriesBarFunction_t(seriesBarFunction_e) {
          return {
            id: seriesBarFunction_e.start,
            start: seriesBarFunction_e.start,
            stop: seriesBarFunction_e.stop
          }
        }
        this.init = function() {
          this._times = []
        }, this._getVerticalLineData = function(seriesBarFunction_t) {
          return seriesBarFunction_o.selectSessionBreaks(seriesBarFunction_t, this._times).map(seriesBarFunction_e)
        }, this._getPreAndPostMarketBackgroundsData = function(seriesBarFunction_e) {
          const seriesBarFunction_i = seriesBarFunction_o.selectPreAndPostMarketTimes(seriesBarFunction_e, this._times);
          return {
            preMarket: seriesBarFunction_i.preMarket.map(seriesBarFunction_t),
            postMarket: seriesBarFunction_i.postMarket.map(seriesBarFunction_t)
          }
        }, this.main = function(seriesBarFunction_e, seriesBarFunction_t) {
          if (seriesBarFunction_o.isdwm(seriesBarFunction_e)) return null;
          var seriesBarFunction_i = seriesBarFunction_o.time(seriesBarFunction_e);
          if (isNaN(seriesBarFunction_i)) return null;
          var seriesBarFunction_s = this._times.length;
          if (0 !== seriesBarFunction_s && this._times[seriesBarFunction_s - 1] === seriesBarFunction_i || this._times.push(seriesBarFunction_i), !seriesBarFunction_e.symbol.isLastBar || !seriesBarFunction_e.symbol
            .isNewBar) return null;
          var seriesBarFunction_n = this._getVerticalLineData(seriesBarFunction_e),
            seriesBarFunction_r = this._getPreAndPostMarketBackgroundsData(seriesBarFunction_e);
          return 0 === seriesBarFunction_n.length && 0 === seriesBarFunction_r.preMarket.length && 0 === seriesBarFunction_r.postMarket ? null : {
            nonseries: !0,
            type: "study_graphics",
            data: {
              graphicsCmds: {
                create: {
                  vertlines: [{
                    styleId: "sessBreaks",
                    data: seriesBarFunction_n
                  }],
                  backgrounds: [{
                    styleId: "preMarket",
                    data: seriesBarFunction_r.preMarket
                  }, {
                    styleId: "postMarket",
                    data: seriesBarFunction_r.postMarket
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
        this.main = function(seriesBarFunction_e, seriesBarFunction_t) {
          var seriesBarFunction_i = seriesBarFunction_t(0),
            seriesBarFunction_s = seriesBarFunction_t(1),
            [seriesBarFunction_n, seriesBarFunction_r] = seriesBarFunction_o.supertrend(seriesBarFunction_s, seriesBarFunction_i, seriesBarFunction_e),
            seriesBarFunction_a = seriesBarFunction_e.new_var(seriesBarFunction_r).get(1);
          return [seriesBarFunction_n, -1 === seriesBarFunction_r ? 0 : 1, -1 === seriesBarFunction_r && seriesBarFunction_a !== seriesBarFunction_r ? 1 : NaN, 1 === seriesBarFunction_r && seriesBarFunction_a !== seriesBarFunction_r ? 1 : NaN]
        }
      }
    }, seriesBarFunction_n, seriesBarFunction_r, seriesBarFunction_a, seriesBarFunction_l, seriesBarFunction_c, seriesBarFunction_h, seriesBarFunction_d, seriesBarFunction_u, seriesBarFunction_p])