/**
 * Module 2433 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

2433: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      light: () => te
    });
    var seriesBarFunction_s = seriesBarFunction_i(49156),
      seriesBarFunction_o = seriesBarFunction_i(93201);
    const {
      colorWhite: seriesBarFunction_n,
      colorBlack: seriesBarFunction_r,
      colorColdGray150: seriesBarFunction_a,
      colorColdGray300: seriesBarFunction_l,
      colorColdGray400: seriesBarFunction_c,
      colorColdGray450: seriesBarFunction_h,
      colorColdGray800Alpha0: seriesBarFunction_d,
      colorColdGray800Alpha6: seriesBarFunction_u,
      colorColdGray900: _,
      colorGrapesPurpleA400: seriesBarFunction_p,
      colorGrapesPurpleA200Alpha15: seriesBarFunction_m,
      colorMintyGreen200: seriesBarFunction_g,
      colorMintyGreen400: seriesBarFunction_f,
      colorMintyGreen500: seriesBarFunction_y,
      colorMintyGreen600: seriesBarFunction_v,
      colorMintyGreen800: S,
      colorMintyGreen500Alpha5: seriesBarFunction_b,
      colorMintyGreen500Alpha28: seriesBarFunction_w,
      colorMintyGreen500Alpha50: C,
      colorRipeRed200: T,
      colorRipeRed400: P,
      colorRipeRed500: seriesBarFunction_x,
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
      colorTvBlue500: seriesBarFunction_q,
      colorTvBlue500Alpha28: $,
      colorTvBlue600: K,
      colorTvBlue800: Y,
      colorTanOrange500: Z,
      colorTanOrange600: X
    } = seriesBarFunction_s.colors, J = {}, Q = {}, ee = {}, te = {
      content: {
        chartProperties: {
          scalesProperties: {
            textColor: _,
            lineColor: seriesBarFunction_d,
            backgroundColor: seriesBarFunction_n
          },
          paneProperties: {
            vertGridProperties: {
              color: seriesBarFunction_u
            },
            horzGridProperties: {
              color: seriesBarFunction_u
            },
            crossHairProperties: {
              color: seriesBarFunction_c
            },
            backgroundType: seriesBarFunction_o.ColorType.Solid,
            background: seriesBarFunction_n,
            backgroundGradientStartColor: seriesBarFunction_n,
            backgroundGradientEndColor: seriesBarFunction_n,
            separatorColor: seriesBarFunction_a
          }
        },
        sessions: {
          sessionHighlight: {
            backgrounds: {
              outOfSession: {
                color: seriesBarFunction_q,
                transparency: 92
              },
              preMarket: {
                color: Z,
                transparency: 92
              },
              postMarket: {
                color: seriesBarFunction_q,
                transparency: 92
              },
              electronic: {
                color: seriesBarFunction_q,
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
          baseLineColor: seriesBarFunction_l,
          prevClosePriceLineColor: "#555555",
          priceLineColor: "",
          highLowAvgPrice: {
            highLowPriceLinesColor: "",
            averagePriceLineColor: ""
          },
          bidAsk: {
            bidLineColor: seriesBarFunction_q,
            askLineColor: P
          },
          prePostMarket: {
            preMarketColor: X,
            postMarketColor: seriesBarFunction_q
          },
          candleStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: seriesBarFunction_x,
            downColor: seriesBarFunction_x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x
          },
          volCandlesStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: seriesBarFunction_x,
            downColor: seriesBarFunction_x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x
          },
          haStyle: {
            borderColor: "#378658",
            upColor: seriesBarFunction_y,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: seriesBarFunction_x,
            downColor: seriesBarFunction_x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x
          },
          hlcAreaStyle: {
            highLineColor: H,
            lowLineColor: D,
            closeLineColor: seriesBarFunction_q,
            highCloseFillColor: seriesBarFunction_z,
            closeLowFillColor: B
          },
          hollowCandleStyle: {
            upColor: seriesBarFunction_y,
            downColor: seriesBarFunction_x,
            borderColor: "#378658",
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x,
            wickColor: "#737375",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: seriesBarFunction_x
          },
          barStyle: {
            downColor: seriesBarFunction_x,
            upColor: seriesBarFunction_y
          },
          pnfStyle: {
            downColor: seriesBarFunction_x,
            upColor: seriesBarFunction_y,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae"
          },
          baselineStyle: {
            baselineColor: seriesBarFunction_h,
            topFillColor1: seriesBarFunction_w,
            topFillColor2: seriesBarFunction_b,
            bottomFillColor1: A,
            bottomFillColor2: L,
            topLineColor: seriesBarFunction_y,
            bottomLineColor: seriesBarFunction_x
          },
          areaStyle: {
            transparency: 100,
            color1: $,
            color2: seriesBarFunction_q,
            linecolor: seriesBarFunction_q
          },
          hiloStyle: {
            color: seriesBarFunction_q,
            borderColor: seriesBarFunction_q,
            labelColor: seriesBarFunction_q
          },
          columnStyle: {
            upColor: C,
            downColor: seriesBarFunction_k
          },
          renkoStyle: {
            upColor: seriesBarFunction_y,
            downColor: seriesBarFunction_x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            borderUpColorProjection: "#a9dcc3",
            borderDownColorProjection: "#f5a6ae",
            wickUpColor: seriesBarFunction_y,
            wickDownColor: seriesBarFunction_x
          },
          lineStyle: {
            colorType: seriesBarFunction_o.ColorType.Gradient,
            color: seriesBarFunction_q,
            gradientStartColor: seriesBarFunction_p,
            gradientEndColor: "#00BCE5"
          },
          lineWithMarkersStyle: {
            colorType: seriesBarFunction_o.ColorType.Gradient,
            color: seriesBarFunction_q,
            gradientStartColor: seriesBarFunction_p,
            gradientEndColor: "#00BCE5"
          },
          steplineStyle: {
            colorType: seriesBarFunction_o.ColorType.Gradient,
            color: seriesBarFunction_q,
            gradientStartColor: seriesBarFunction_p,
            gradientEndColor: "#00BCE5"
          },
          kagiStyle: {
            downColor: seriesBarFunction_x,
            upColor: seriesBarFunction_y,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae"
          },
          pbStyle: {
            upColor: seriesBarFunction_y,
            downColor: seriesBarFunction_x,
            borderUpColor: seriesBarFunction_y,
            borderDownColor: seriesBarFunction_x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            borderUpColorProjection: "#a9dcc3",
            borderDownColorProjection: "#f5a6ae"
          },
          rangeStyle: {
            upColor: seriesBarFunction_y,
            downColor: seriesBarFunction_x,
            upColorProjection: "#a9dcc3",
            downColorProjection: "#f5a6ae",
            candlesUpColor: seriesBarFunction_y,
            candlesDownColor: seriesBarFunction_x,
            candlesBorderUpColor: seriesBarFunction_y,
            candlesBorderDownColor: seriesBarFunction_x,
            candlesWickUpColor: seriesBarFunction_y,
            candlesWickDownColor: seriesBarFunction_x
          },
          tpoStyle: J,
          volFootprintStyle: Q,
          svpStyle: ee,
          hlcBarsStyle: {
            color: seriesBarFunction_q
          }
        }
      }
    }