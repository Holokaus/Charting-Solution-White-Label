/**
 * Module 22033 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

22033: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      RangeBarStyle: () => seriesBarFunction_y,
      areaStylePreferencesDefault: () => seriesBarFunction_c,
      barStylePreferencesDefault: () => seriesBarFunction_r,
      baselineStylePreferencesDefault: () => seriesBarFunction_d,
      candleStylePreferencesDefault: () => seriesBarFunction_o,
      columnStylePreferencesDefault: () => S,
      haStylePreferencesDefault: () => _,
      hiloStylePreferencesDefault: () => seriesBarFunction_u,
      hlcAreaStylePreferencesDefault: () => seriesBarFunction_h,
      hlcBarsStylePreferencesDefault: () => seriesBarFunction_a,
      hollowCandlePreferencesStyleDefault: () => seriesBarFunction_n,
      kagiStylePreferencesDefault: () => seriesBarFunction_g,
      lineStyleDefault: () => seriesBarFunction_l,
      pbStylePreferencesDefault: () => seriesBarFunction_m,
      pnfStylePreferencesDefault: () => seriesBarFunction_f,
      rangeStylePreferencesDefault: () => seriesBarFunction_v,
      renkoStylePreferencesDefault: () => seriesBarFunction_p
    });
    var seriesBarFunction_s = seriesBarFunction_i(93201);
    const seriesBarFunction_o = {
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
      seriesBarFunction_n = {
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
      seriesBarFunction_r = {
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
        colorType: seriesBarFunction_s.ColorType.Gradient,
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
      seriesBarFunction_h = {
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
    ! function(seriesBarFunction_e) {
      seriesBarFunction_e[seriesBarFunction_e.Bars = 0] = "Bars", seriesBarFunction_e[seriesBarFunction_e.Candles = 1] = "Candles"
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