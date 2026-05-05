/**
 * Module: 22033
 * Semantic: deleteLockedLineTools
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.791Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 22033 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

22033: (exports, module, i) => {
    "use strict";
    require.d(module, {
      RangeBarStyle: () => yValue,
      areaStylePreferencesDefault: () => config,
      barStylePreferencesDefault: () => result,
      baselineStylePreferencesDefault: () => data,
      candleStylePreferencesDefault: () => object,
      columnStylePreferencesDefault: () => S,
      haStylePreferencesDefault: () => _,
      hiloStylePreferencesDefault: () => utility,
      hlcAreaStylePreferencesDefault: () => handler,
      hlcBarsStylePreferencesDefault: () => array,
      hollowCandlePreferencesStyleDefault: () => nextValue,
      kagiStylePreferencesDefault: () => getter,
      lineStyleDefault: () => logger,
      pbStylePreferencesDefault: () => method,
      pnfStylePreferencesDefault: () => function,
      rangeStylePreferencesDefault: () => value,
      renkoStylePreferencesDefault: () => p
    });
    var state = i(93201);
    const object = {
        upColor: "",
        downColor: "",
        drawWick: !1,
        drawBorder: !1,
        drawBody: !0,
        borderColor: "",
        borderUpColor: "",
        borderDownColor: "",
        wickColor: "",
        wickUpColor: "",
        wickDownColor: "",
        barColorsOnPrevClose: !1
      },
      nextValue = {
        upColor: "",
        downColor: "",
        drawWick: !1,
        drawBorder: !1,
        drawBody: !0,
        borderColor: "",
        borderUpColor: "",
        borderDownColor: "",
        wickColor: "",
        wickUpColor: "",
        wickDownColor: ""
      },
      result = {
        upColor: "",
        downColor: "",
        barColorsOnPrevClose: !1,
        dontDrawOpen: !1,
        thinBars: !0
      },
      array = {
        color: "",
        thinBars: !0
      },
      logger = {
        color: "",
        linestyle: 0,
        linewidth: 0,
        colorType: state.ColorType.Gradient,
        gradientStartColor: "",
        gradientEndColor: ""
      },
      config = {
        color1: "",
        color2: "",
        linecolor: "",
        linestyle: 0,
        linewidth: 0,
        transparency: 0
      },
      handler = {
        highLineVisible: !0,
        highLineColor: "",
        highLineStyle: 0,
        highLineWidth: 0,
        lowLineVisible: !0,
        lowLineColor: "",
        lowLineStyle: 0,
        lowLineWidth: 0,
        closeLineColor: "",
        closeLineStyle: 0,
        closeLineWidth: 0,
        highCloseFillColor: "",
        closeLowFillColor: ""
      },
      data = {
        topFillColor1: "",
        topFillColor2: "",
        bottomFillColor1: "",
        bottomFillColor2: "",
        topLineColor: "",
        bottomLineColor: "",
        baselineColor: "",
        topLineWidth: 0,
        bottomLineWidth: 0,
        topLineStyle: 0,
        bottomLineStyle: 0,
        transparency: 0,
        baseLevelPercentage: 0
      },
      utility = {
        color: "",
        showBorders: !1,
        borderColor: "",
        showLabels: !1,
        labelColor: "",
        drawBody: !0
      },
      _ = {
        upColor: "",
        downColor: "",
        drawWick: !1,
        drawBorder: !1,
        drawBody: !0,
        borderColor: "",
        borderUpColor: "",
        borderDownColor: "",
        wickColor: "",
        wickUpColor: "",
        wickDownColor: "",
        showRealLastPrice: !1,
        barColorsOnPrevClose: !1,
        inputs: {}
      },
      parameter = {
        upColor: "",
        downColor: "",
        borderUpColor: "",
        borderDownColor: "",
        upColorProjection: "",
        downColorProjection: "",
        borderUpColorProjection: "",
        borderDownColorProjection: "",
        wickUpColor: "",
        wickDownColor: "",
        inputs: {
          boxSize: 0,
          style: "",
          atrLength: 0,
          percentageLTP: 0,
          wicks: !1,
          sources: "",
          source: ""
        }
      },
      method = {
        upColor: "",
        downColor: "",
        borderUpColor: "",
        borderDownColor: "",
        upColorProjection: "",
        downColorProjection: "",
        borderUpColorProjection: "",
        borderDownColorProjection: "",
        inputs: {
          source: "",
          lb: 0
        }
      },
      getter = {
        upColor: "",
        downColor: "",
        upColorProjection: "",
        downColorProjection: "",
        inputs: {
          style: "",
          atrLength: 0,
          percentageLTP: 0,
          reversalAmount: 0
        }
      },
      function = {
        upColor: "",
        downColor: "",
        upColorProjection: "",
        downColorProjection: "",
        inputs: {
          reversalAmount: 0,
          boxSize: 0,
          style: "",
          atrLength: 0,
          percentageLTP: 0,
          oneStepBackBuilding: !1,
          sources: "Close"
        }
      };
    var yValue;
    ! function(exports) {
      e[exports.Bars = 0] = "Bars", e[exports.Candles = 1] = "Candles"
    }(y || (yValue = {}));
    const value = {
        barStyle: 0,
        upColor: "",
        downColor: "",
        upColorProjection: "",
        downColorProjection: "",
        thinBars: !1,
        candlesUpColor: "",
        candlesDownColor: "",
        candlesBorderUpColor: "",
        candlesBorderDownColor: "",
        candlesWickUpColor: "",
        candlesWickDownColor: "",
        inputs: {
          range: 0,
          phantomBars: !1
        }
      },
      S = {
        upColor: "",
        downColor: "",
        barColorsOnPrevClose: !1,
        baselinePosition: "bottom"
      }