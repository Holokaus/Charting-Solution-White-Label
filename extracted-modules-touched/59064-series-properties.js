59064: (e, t, i) => {
    "use strict";
    i.d(t, {
      mainSeriesProperties: () => n
    });
    var s = i(69558),
      o = (i(18330), i(40080), i(22033));
    const n = {
      style: 1,
      esdShowDividends: !0,
      esdShowSplits: !0,
      esdShowEarnings: !0,
      esdShowBreaks: !1,
      esdFlagSize: 2,
      showContinuousContractSwitches: !0,
      showContinuousContractSwitchesBreaks: !1,
      showFuturesContractExpiration: !0,
      showLastNews: !0,
      showCountdown: !0,
      bidAsk: {
        visible: !1,
        lineStyle: s.LINESTYLE_DOTTED,
        lineWidth: 1
      },
      prePostMarket: {
        visible: !0,
        lineStyle: s.LINESTYLE_DOTTED,
        lineWidth: 1
      },
      highLowAvgPrice: {
        highLowPriceLinesVisible: !1,
        highLowPriceLabelsVisible: !1,
        averageClosePriceLineVisible: !1,
        averageClosePriceLabelVisible: !1,
        highLowPriceLinesWidth: 1,
        averagePriceLineWidth: 1
      },
      visible: !0,
      showPriceLine: !0,
      priceLineWidth: 1,
      showPrevClosePriceLine: !1,
      prevClosePriceLineWidth: 1,
      minTick: "default",
      dividendsAdjustment: void 0,
      backAdjustment: !1,
      settlementAsClose: !0,
      sessionId: "regular",
      sessVis: !1,
      statusViewStyle: {
        fontSize: 16,
        showExchange: !0,
        showInterval: !0,
        symbolTextSource: "description"
      },
      candleStyle: {
        drawWick: !0,
        drawBorder: !0,
        barColorsOnPrevClose: !1,
        drawBody: !0
      },
      volCandlesStyle: {
        drawWick: !0,
        drawBorder: !0,
        barColorsOnPrevClose: !1,
        drawBody: !0
      },
      hollowCandleStyle: {
        drawWick: !0,
        drawBorder: !0,
        drawBody: !0
      },
      haStyle: {
        drawWick: !0,
        drawBorder: !0,
        showRealLastPrice: !1,
        barColorsOnPrevClose: !1,
        inputs: {},
        inputInfo: {},
        drawBody: !0
      },
      barStyle: {
        barColorsOnPrevClose: !1,
        dontDrawOpen: !1,
        thinBars: !0
      },
      hiloStyle: {
        showBorders: !0,
        showLabels: !0,
        drawBody: !0
      },
      columnStyle: {
        barColorsOnPrevClose: !0,
        priceSource: "close",
        baselinePosition: "bottom"
      },
      lineStyle: {
        linestyle: s.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      tpoStyle: {},
      svpStyle: {},
      lineWithMarkersStyle: {
        linestyle: s.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      steplineStyle: {
        linestyle: s.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      areaStyle: {
        linestyle: s.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      hlcAreaStyle: {
        highLineVisible: !0,
        highLineStyle: s.LINESTYLE_SOLID,
        highLineWidth: 2,
        lowLineVisible: !0,
        lowLineStyle: s.LINESTYLE_SOLID,
        lowLineWidth: 2,
        closeLineStyle: s.LINESTYLE_SOLID,
        closeLineWidth: 2
      },
      priceAxisProperties: {
        autoScale: !0,
        autoScaleDisabled: !1,
        lockScale: !1,
        percentage: !1,
        percentageDisabled: !1,
        indexedTo100: !1,
        log: !1,
        logDisabled: !1,
        isInverted: !1,
        alignLabels: !0
      },
      renkoStyle: {
        inputs: {
          source: "close",
          sources: "Close",
          boxSize: 3,
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          wicks: !0
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          sources: {
            name: "Source"
          },
          boxSize: {
            name: "Box size"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          wicks: {
            name: "Wicks"
          }
        }
      },
      pbStyle: {
        inputs: {
          source: "close",
          lb: 3
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          lb: {
            name: "Number of line"
          }
        }
      },
      kagiStyle: {
        inputs: {
          source: "close",
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          reversalAmount: 1
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          reversalAmount: {
            name: "Reversal amount"
          }
        }
      },
      pnfStyle: {
        inputs: {
          sources: "Close",
          reversalAmount: 3,
          boxSize: 1,
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          oneStepBackBuilding: !1
        },
        inputInfo: {
          sources: {
            name: "Source"
          },
          boxSize: {
            name: "Box size"
          },
          reversalAmount: {
            name: "Reversal amount"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          oneStepBackBuilding: {
            name: "One step back building"
          }
        }
      },
      baselineStyle: {
        topLineWidth: 2,
        bottomLineWidth: 2,
        topLineStyle: s.LINESTYLE_SOLID,
        bottomLineStyle: s.LINESTYLE_SOLID,
        priceSource: "close",
        transparency: 50,
        baseLevelPercentage: 50
      },
      rangeStyle: {
        barStyle: o.RangeBarStyle.Bars,
        thinBars: !0,
        inputs: {
          range: 10,
          phantomBars: !1
        },
        inputInfo: {
          range: {
            name: "Range"
          },
          phantomBars: {
            name: "Phantom bars"
          }
        }
      },
      volFootprintStyle: {},
      hlcBarsStyle: {
        barColorsOnPrevClose: !1,
        thinBars: !0
      }
    }