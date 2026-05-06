/**
 * Module 2433 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2433: (e, t, i) => {
    "use strict";
    i.d(t, {
      light: () => te
    });
    var s = i(49156),
      o = i(93201);
    const {
      colorWhite: n,
      colorBlack: r,
      colorColdGray150: a,
      colorColdGray300: l,
      colorColdGray400: c,
      colorColdGray450: h,
      colorColdGray800Alpha0: d,
      colorColdGray800Alpha6: u,
      colorColdGray900: _,
      colorGrapesPurpleA400: p,
      colorGrapesPurpleA200Alpha15: m,
      colorMintyGreen200: g,
      colorMintyGreen400: f,
      colorMintyGreen500: seriesBarFunction_y,
      colorMintyGreen600: v,
      colorMintyGreen800: S,
      colorMintyGreen500Alpha5: b,
      colorMintyGreen500Alpha28: w,
      colorMintyGreen500Alpha50: C,
      colorRipeRed200: T,
      colorRipeRed400: P,
      colorRipeRed500: x,
      colorRipeRed600: M,
      colorRipeRedA700: I,
      colorRipeRed500Alpha5: A,
      colorRipeRed500Alpha28: L,
      colorRipeRed500Alpha50: seriesBarFunction_k,
      colorDeepBlueA700: E,
      colorBerryPink500: D,
      colorBerryPink500Alpha25: B,
      colorBerryPink400Alpha50: V,
      colorBerryPink400Alpha75: R,
      colorIguanaGreenA700: N,
      colorSkyBlue400Alpha5: O,
      colorSkyBlue400Alpha50: F,
      colorSkyBlue400Alpha75: W,
      colorSkyBlue500: H,
      colorSkyBlue500Alpha25: seriesBarFunction_z,
      colorDeepBlueA400: U,
      colorTvBlue200: seriesBarFunction_j,
      colorTvBlue400: G,
      colorTvBlue500: q,
      colorTvBlue500Alpha28: $,
      colorTvBlue600: K,
      colorTvBlue800: Y,
      colorTanOrange500: Z,
      colorTanOrange600: X
    } = s.colors, J = {}, Q = {}, ee = {}, te = {
      content: {
        chartProperties: {
          scalesProperties: {
            textColor: _,
            lineColor: d,
            backgroundColor: n
          },
          paneProperties: {
            vertGridProperties: {
              color: u
            },
            horzGridProperties: {
              color: u
            },
            crossHairProperties: {
              color: c
            },
            backgroundType: o.ColorType.Solid,
            background: n,
            backgroundGradientStartColor: n,
            backgroundGradientEndColor: n,
            separatorColor: a
          }
        },
        sessions: {
          sessionHighlight: {
            backgrounds: {
              outOfSession: {
                color: q,
                transparency: 92
              },
              preMarket: {
                color: Z,
                transparency: 92
              },
              postMarket: {
                color: q,
                transparency: 92
              },
              electronic: {
                color: q,
                transparency: 92
              }
            },
            vertlines: {
              sessBreaks: {
                color: "#4985e7"
              }
            }
          }
        },
        mainSourceProperties: {
          baseLineColor: l,
          prevClosePriceLineColor: "#555555",
          priceLineColor: "",
          highLowAvgPrice: {
            highLowPriceLinesColor: "",
            averagePriceLineColor: ""
          },
          bidAsk: {
            bidLineColor: q,
            askLineColor: P
          },
          prePostMarket: {
            preMarketColor: X,
            postMarketColor: q
          },
          candleStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: x,
            downColor: x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x
          },
          volCandlesStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: x,
            downColor: x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x
          },
          haStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: x,
            downColor: x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x
          },
          hlcAreaStyle: {
            highLineColor: H,
            lowLineColor: D,
            closeLineColor: q,
            highCloseFillColor: seriesBarFunction_z,
            closeLowFillColor: B
          },
          hollowCandleStyle: {
            upColor: seriesBarFunction_y,
            downColor: x,
            borderColor: "#378658",
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: x
          },
          barStyle: {
            downColor: x,
            upColor: seriesBarFunction_y
          },
          pnfStyle: {
            downColor: x,
            upColor: seriesBarFunction_y,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae"
          },
          baselineStyle: {
            baselineColor: h,
            topFillColor1: w,
            topFillColor2: b,
            bottomFillColor1: A,
            bottomFillColor2: L,
            topLineColor: seriesBarFunction_y,
            bottomLineColor: x
          },
          areaStyle: {
            transparency: 100,
            color1: $,
            color2: q,
            linecolor: q
          },
          hiloStyle: {
            color: q,
            borderColor: q,
            labelColor: q
          },
          columnStyle: {
            upColor: C,
            downColor: seriesBarFunction_k
          },
          renkoStyle: {
            upColor: seriesBarFunction_y,
            downColor: x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            borderUpColorProjection: "#a9dcc3",
            borderDownColorProjection: "#f5a6ae",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: x
          },
          lineStyle: {
            colorType: o.ColorType.Gradient,
            color: q,
            gradientStartColor: p,
            gradientEndColor: "#00BCE5"
          },
          lineWithMarkersStyle: {
            colorType: o.ColorType.Gradient,
            color: q,
            gradientStartColor: p,
            gradientEndColor: "#00BCE5"
          },
          steplineStyle: {
            colorType: o.ColorType.Gradient,
            color: q,
            gradientStartColor: p,
            gradientEndColor: "#00BCE5"
          },
          kagiStyle: {
            downColor: x,
            upColor: seriesBarFunction_y,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae"
          },
          pbStyle: {
            upColor: seriesBarFunction_y,
            downColor: x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            borderUpColorProjection: "#a9dcc3",
            borderDownColorProjection: "#f5a6ae"
          },
          rangeStyle: {
            upColor: seriesBarFunction_y,
            downColor: x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            candlesUpColor: seriesBarFunction_y,
            candlesDownColor: x,
            candlesBorderUpColor: seriesBarFunction_y,
            candlesBorderDownColor: x,
            candlesWickUpColor: seriesBarFunction_y,
            candlesWickDownColor: x
          },
          tpoStyle: J,
          volFootprintStyle: Q,
          svpStyle: ee,
          hlcBarsStyle: {
            color: q
          }
        }
      }
    }