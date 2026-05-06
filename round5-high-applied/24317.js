/**
 * Module 24317 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24317: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      darkTheme: () => ce,
      getStdChartTheme: () => _e,
      getStdThemeNames: () => ue,
      lightTheme: () => le,
      overrideStdTheme: () => he,
      restoreStdThemes: () => de,
      translateThemeName: () => pe
    });
    var seriesBarFunction_s = i(11542),
      o = i(87465),
      n = i(2433),
      r = i(93201),
      seriesBarFunction_a = i(49156);
    const {
      colorWhite: l,
      colorColdGray100Alpha0: c,
      colorColdGray100Alpha6: h,
      colorColdGray200: d,
      colorColdGray300: u,
      colorColdGray400: _,
      colorColdGray450: p,
      colorColdGray600: m,
      colorColdGray800: g,
      colorColdGray850: f,
      colorColdGray900: y,
      colorDeepBlueA200: v,
      colorGrapesPurpleA400: S,
      colorGrapesPurpleA200Alpha15: b,
      colorMintyGreen400: w,
      colorMintyGreen500: C,
      colorMintyGreen600: T,
      colorMintyGreen800: P,
      colorMintyGreen500Alpha5: x,
      colorMintyGreen500Alpha28: M,
      colorMintyGreen500Alpha50: I,
      colorMintyGreenA900: A,
      colorRipeRed400: L,
      colorRipeRed500: k,
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
      colorIguanaGreenA700: z,
      colorSkyBlue400Alpha5: U,
      colorSkyBlue400Alpha50: j,
      colorSkyBlue400Alpha75: G,
      colorSkyBlue500: q,
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
            textColor: u,
            lineColor: c,
            backgroundColor: l
          },
          paneProperties: {
            vertGridProperties: {
              color: h
            },
            horzGridProperties: {
              color: h
            },
            crossHairProperties: {
              color: _
            },
            background: y,
            backgroundGradientStartColor: f,
            backgroundGradientEndColor: y,
            backgroundType: "solid",
            separatorColor: g
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
          baseLineColor: m,
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
            wickDownColor: k,
            downColor: k,
            borderUpColor: C,
            borderDownColor: k
          },
          volCandlesStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: k,
            downColor: k,
            borderUpColor: C,
            borderDownColor: k
          },
          haStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: k,
            downColor: k,
            borderUpColor: C,
            borderDownColor: k
          },
          hlcAreaStyle: {
            highLineColor: q,
            lowLineColor: H,
            closeLineColor: Z,
            highCloseFillColor: $,
            closeLowFillColor: O
          },
          hollowCandleStyle: {
            upColor: C,
            downColor: k,
            borderColor: "#378658",
            borderUpColor: C,
            borderDownColor: k,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: k
          },
          barStyle: {
            downColor: k,
            upColor: C
          },
          pnfStyle: {
            downColor: k,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          baselineStyle: {
            baselineColor: p,
            topFillColor1: M,
            topFillColor2: x,
            bottomFillColor1: B,
            bottomFillColor2: V,
            topLineColor: C,
            bottomLineColor: k
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
            downColor: k,
            borderUpColor: C,
            borderDownColor: k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f",
            wickUpColor: C,
            wickDownColor: k
          },
          lineStyle: {
            colorType: r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          lineWithMarkersStyle: {
            colorType: r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          steplineStyle: {
            colorType: r.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          kagiStyle: {
            downColor: k,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          pbStyle: {
            upColor: C,
            downColor: k,
            borderUpColor: C,
            borderDownColor: k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f"
          },
          rangeStyle: {
            upColor: C,
            downColor: k,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            candlesUpColor: C,
            candlesDownColor: k,
            candlesBorderUpColor: C,
            candlesBorderDownColor: k,
            candlesWickUpColor: C,
            candlesWickDownColor: k
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
    var ae = i(24633);
    let le = (0, o.clone)(n.light),
      ce = (0, o.clone)(re);

    function he(seriesBarFunction_e, t) {
      switch (seriesBarFunction_e) {
        case ae.StdTheme.Light:
          le = (0, o.merge)((0, o.clone)(le), t);
          break;
        case ae.StdTheme.Dark:
          ce = (0, o.merge)((0, o.clone)(ce), t)
      }
    }

    function de() {
      le = (0, o.clone)(n.light), ce = (0, o.clone)(re)
    }

    function ue() {
      return [ae.StdTheme.Light, ae.StdTheme.Dark]
    }

    function _e(seriesBarFunction_e) {
      return (0, o.clone)(seriesBarFunction_e === ae.StdTheme.Light ? le : seriesBarFunction_e === ae.StdTheme.Dark ? ce : void 0)
    }

    function pe(seriesBarFunction_e) {
      return {
        [ae.StdTheme.Light]: seriesBarFunction_s.t(null, {
          context: "colorThemeName"
        }, i(96870)),
        [ae.StdTheme.Dark]: seriesBarFunction_s.t(null, {
          context: "colorThemeName"
        }, i(85119))
      } [seriesBarFunction_e] || seriesBarFunction_e
    }