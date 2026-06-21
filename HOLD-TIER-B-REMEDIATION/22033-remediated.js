/**
 * Module 22033 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

22033: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      RangeBarStyle: () => seriesBarFunction_y,
      areaStylePreferencesDefault: () => seriesBarFunction_c,
      barStylePreferencesDefault: () => config,
      baselineStylePreferencesDefault: () => seriesBarFunction_d,
      candleStylePreferencesDefault: () => isValid,
      columnStylePreferencesDefault: () => S,
      haStylePreferencesDefault: () => _,
      hiloStylePreferencesDefault: () => seriesBarFunction_u,
      hlcAreaStylePreferencesDefault: () => handler,
      hlcBarsStylePreferencesDefault: () => seriesBarFunction_a,
      hollowCandlePreferencesStyleDefault: () => value,
      kagiStylePreferencesDefault: () => seriesBarFunction_g,
      lineStyleDefault: () => seriesBarFunction_l,
      pbStylePreferencesDefault: () => seriesBarFunction_m,
      pnfStylePreferencesDefault: () => seriesBarFunction_f,
      rangeStylePreferencesDefault: () => seriesBarFunction_v,
      renkoStylePreferencesDefault: () => seriesBarFunction_p
    });
    var modes = require(93201);
    const isValid = {
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
      value = {
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
      config = {
        upColor: "",
        downColor: "",
        barColorsOnPrevClose: !1,
        dontDrawOpen: !1,
        thinBars: !0
      },
      seriesBarFunction_a = {
        color: "",
        thinBars: !0
      },
      seriesBarFunction_l = {
        color: "",
        linestyle: 0,
        linewidth: 0,
        colorType: modes.ColorType.Gradient,
        gradientStartColor: "",
        gradientEndColor: ""
      },
      seriesBarFunction_c = {
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
      seriesBarFunction_d = {
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
      seriesBarFunction_u = {
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
      seriesBarFunction_p = {
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
      seriesBarFunction_m = {
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
      seriesBarFunction_g = {
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
      seriesBarFunction_f = {
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
    var seriesBarFunction_y;
    ! function(exports) {
      exports[exports.Bars = 0] = "Bars", exports[exports.Candles = 1] = "Candles"
    }(seriesBarFunction_y || (seriesBarFunction_y = {}));
    const seriesBarFunction_v = {
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