/**
 * Module 24317 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24317: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_r(seriesBarFunction_t), seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      darkTheme: () => ce,
      getStdChartTheme: () => _e,
      getStdThemeNames: () => ue,
      lightTheme: () => le,
      overrideStdTheme: () => he,
      restoreStdThemes: () => de,
      translateThemeName: () => pe
    });
    var seriesBarFunction_s = seriesBarFunction_i(11542),
      seriesBarFunction_o = seriesBarFunction_i(87465),
      seriesBarFunction_n = seriesBarFunction_i(2433),
      seriesBarFunction_r = seriesBarFunction_i(93201),
      seriesBarFunction_a = seriesBarFunction_i(49156);
    const {
      colorWhite: seriesBarFunction_l,
      colorColdGray100Alpha0: seriesBarFunction_c,
      colorColdGray100Alpha6: seriesBarFunction_h,
      colorColdGray200: seriesBarFunction_d,
      colorColdGray300: seriesBarFunction_u,
      colorColdGray400: _,
      colorColdGray450: seriesBarFunction_p,
      colorColdGray600: seriesBarFunction_m,
      colorColdGray800: seriesBarFunction_g,
      colorColdGray850: seriesBarFunction_f,
      colorColdGray900: seriesBarFunction_y,
      colorDeepBlueA200: seriesBarFunction_v,
      colorGrapesPurpleA400: S,
      colorGrapesPurpleA200Alpha15: seriesBarFunction_b,
      colorMintyGreen400: seriesBarFunction_w,
      colorMintyGreen500: C,
      colorMintyGreen600: T,
      colorMintyGreen800: P,
      colorMintyGreen500Alpha5: seriesBarFunction_x,
      colorMintyGreen500Alpha28: M,
      colorMintyGreen500Alpha50: I,
      colorMintyGreenA900: A,
      colorRipeRed400: L,
      colorRipeRed500: seriesBarFunction_k,
      colorRipeRed600: E,
      colorRipeRed800: D,
      colorRipeRed500Alpha5: B,
      colorRipeRed500Alpha28: V,
      colorRipeRed500Alpha50: R,
      colorRipeRedA900: N,
      colorBerryPink500Alpha25: O,
      colorBerryPink400Alpha50: F,
      colorBerryPink400Alpha75: W,
      colorBerryPink500: H,
      colorIguanaGreenA700: seriesBarFunction_z,
      colorSkyBlue400Alpha5: U,
      colorSkyBlue400Alpha50: seriesBarFunction_j,
      colorSkyBlue400Alpha75: G,
      colorSkyBlue500: seriesBarFunction_q,
      colorSkyBlue500Alpha25: $,
      colorDeepBlueA400: K,
      colorTvBlue400: Y,
      colorTvBlue500: Z,
      colorTvBlue500Alpha28: X,
      colorTvBlue600: J,
      colorTvBlue800: Q,
      colorTvBlueA800: ee,
      colorTanOrange500: te,
      colorTanOrange600: ie
    } = seriesBarFunction_a.colors, se = {}, oe = {}, ne = {}, re = {
      content: {
        chartProperties: {
          scalesProperties: {
            textColor: seriesBarFunction_u,
            lineColor: seriesBarFunction_c,
            backgroundColor: seriesBarFunction_l
          },
          paneProperties: {
            vertGridProperties: {
              color: seriesBarFunction_h
            },
            horzGridProperties: {
              color: seriesBarFunction_h
            },
            crossHairProperties: {
              color: _
            },
            background: seriesBarFunction_y,
            backgroundGradientStartColor: seriesBarFunction_f,
            backgroundGradientEndColor: seriesBarFunction_y,
            backgroundType: "solid",
            separatorColor: seriesBarFunction_g
          }
        },
        sessions: {
          sessionHighlight: {
            backgrounds: {
              outOfSession: {
                color: Z,
                transparency: 92
              },
              preMarket: {
                color: te,
                transparency: 92
              },
              postMarket: {
                color: Z,
                transparency: 92
              },
              electronic: {
                color: Z,
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
          baseLineColor: seriesBarFunction_m,
          prevClosePriceLineColor: "#555555",
          priceLineColor: "",
          highLowAvgPrice: {
            highLowPriceLinesColor: "",
            averagePriceLineColor: ""
          },
          bidAsk: {
            bidLineColor: Z,
            askLineColor: L
          },
          prePostMarket: {
            preMarketColor: ie,
            postMarketColor: Z
          },
          candleStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: seriesBarFunction_k,
            downColor: seriesBarFunction_k,
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k
          },
          volCandlesStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: seriesBarFunction_k,
            downColor: seriesBarFunction_k,
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k
          },
          haStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: seriesBarFunction_k,
            downColor: seriesBarFunction_k,
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k
          },
          hlcAreaStyle: {
            highLineColor: seriesBarFunction_q,
            lowLineColor: H,
            closeLineColor: Z,
            highCloseFillColor: $,
            closeLowFillColor: O
          },
          hollowCandleStyle: {
            upColor: C,
            downColor: seriesBarFunction_k,
            borderColor: "#378658",
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: seriesBarFunction_k
          },
          barStyle: {
            downColor: seriesBarFunction_k,
            upColor: C
          },
          pnfStyle: {
            downColor: seriesBarFunction_k,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          baselineStyle: {
            baselineColor: seriesBarFunction_p,
            topFillColor1: M,
            topFillColor2: seriesBarFunction_x,
            bottomFillColor1: B,
            bottomFillColor2: V,
            topLineColor: C,
            bottomLineColor: seriesBarFunction_k
          },
          areaStyle: {
            transparency: 100,
            color1: X,
            color2: Z,
            linecolor: Z
          },
          hiloStyle: {
            color: Z,
            borderColor: Z,
            labelColor: Z
          },
          columnStyle: {
            upColor: I,
            downColor: R
          },
          renkoStyle: {
            upColor: C,
            downColor: seriesBarFunction_k,
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f",
            wickUpColor: C,
            wickDownColor: seriesBarFunction_k
          },
          lineStyle: {
            colorType: seriesBarFunction_r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          lineWithMarkersStyle: {
            colorType: seriesBarFunction_r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          steplineStyle: {
            colorType: seriesBarFunction_r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          kagiStyle: {
            downColor: seriesBarFunction_k,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          pbStyle: {
            upColor: C,
            downColor: seriesBarFunction_k,
            borderUpColor: C,
            borderDownColor: seriesBarFunction_k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f"
          },
          rangeStyle: {
            upColor: C,
            downColor: seriesBarFunction_k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            candlesUpColor: C,
            candlesDownColor: seriesBarFunction_k,
            candlesBorderUpColor: C,
            candlesBorderDownColor: seriesBarFunction_k,
            candlesWickUpColor: C,
            candlesWickDownColor: seriesBarFunction_k
          },
          tpoStyle: se,
          volFootprintStyle: oe,
          svpStyle: ne,
          hlcBarsStyle: {
            color: Z
          }
        }
      }
    };
    var ae = seriesBarFunction_i(24633);
    let le = (0, seriesBarFunction_o.clone)(seriesBarFunction_n.light),
      ce = (0, seriesBarFunction_o.clone)(re);

    function he(seriesBarFunction_e, seriesBarFunction_t) {
      switch (seriesBarFunction_e) {
        case ae.StdTheme.Light:
          le = (0, seriesBarFunction_o.merge)((0, seriesBarFunction_o.clone)(le), seriesBarFunction_t);
          break;
        case ae.StdTheme.Dark:
          ce = (0, seriesBarFunction_o.merge)((0, seriesBarFunction_o.clone)(ce), seriesBarFunction_t)
      }
    }

    function de() {
      le = (0, seriesBarFunction_o.clone)(seriesBarFunction_n.light), ce = (0, seriesBarFunction_o.clone)(re)
    }

    function ue() {
      return [ae.StdTheme.Light, ae.StdTheme.Dark]
    }

    function _e(seriesBarFunction_e) {
      return (0, seriesBarFunction_o.clone)(seriesBarFunction_e === ae.StdTheme.Light ? le : seriesBarFunction_e === ae.StdTheme.Dark ? ce : void 0)
    }

    function pe(seriesBarFunction_e) {
      return {
        [ae.StdTheme.Light]: seriesBarFunction_s.seriesBarFunction_t(null, {
          context: "colorThemeName"
        }, seriesBarFunction_i(96870)),
        [ae.StdTheme.Dark]: seriesBarFunction_s.seriesBarFunction_t(null, {
          context: "colorThemeName"
        }, seriesBarFunction_i(85119))
      } [seriesBarFunction_e] || seriesBarFunction_e
    }