/**
 * Module: 24317
 * Semantic: chartDataManager
 * Confidence: 65.0%
 * Generated: 2026-05-03T17:33:52.408Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 24317 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24317: (exports, module, i) => {
    "use strict";
    require.r(module), require.d(module, {
      darkTheme: () => ce,
      getStdChartTheme: () => _e,
      getStdThemeNames: () => ue,
      lightTheme: () => le,
      overrideStdTheme: () => he,
      restoreStdThemes: () => de,
      translateThemeName: () => pe
    });
    var state = i(11542),
      object = i(87465),
      nextValue = i(2433),
      result = i(93201),
      array = i(49156);
    const {
      colorWhite: logger,
      colorColdGray100Alpha0: config,
      colorColdGray100Alpha6: handler,
      colorColdGray200: data,
      colorColdGray300: utility,
      colorColdGray400: _,
      colorColdGray450: parameter,
      colorColdGray600: method,
      colorColdGray800: getter,
      colorColdGray850: function,
      colorColdGray900: yValue,
      colorDeepBlueA200: value,
      colorGrapesPurpleA400: S,
      colorGrapesPurpleA200Alpha15: boolean,
      colorMintyGreen400: watcher,
      colorMintyGreen500: C,
      colorMintyGreen600: T,
      colorMintyGreen800: P,
      colorMintyGreen500Alpha5: context,
      colorMintyGreen500Alpha28: M,
      colorMintyGreen500Alpha50: I,
      colorMintyGreenA900: A,
      colorRipeRed400: L,
      colorRipeRed500: key,
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
      colorIguanaGreenA700: callback,
      colorSkyBlue400Alpha5: U,
      colorSkyBlue400Alpha50: job,
      colorSkyBlue400Alpha75: G,
      colorSkyBlue500: query,
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
    } = array.colors, se = {}, oe = {}, ne = {}, re = {
      content: {
        chartProperties: {
          scalesProperties: {
            textColor: utility,
            lineColor: config,
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
            background: yValue,
            backgroundGradientStartColor: function,
            backgroundGradientEndColor: yValue,
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
          baseLineColor: method,
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
            wickDownColor: key,
            downColor: key,
            borderUpColor: C,
            borderDownColor: k
          },
          volCandlesStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: key,
            downColor: key,
            borderUpColor: C,
            borderDownColor: k
          },
          haStyle: {
            borderColor: "#378658",
            upColor: C,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: key,
            downColor: key,
            borderUpColor: C,
            borderDownColor: k
          },
          hlcAreaStyle: {
            highLineColor: query,
            lowLineColor: H,
            closeLineColor: Z,
            highCloseFillColor: $,
            closeLowFillColor: O
          },
          hollowCandleStyle: {
            upColor: C,
            downColor: key,
            borderColor: "#378658",
            borderUpColor: C,
            borderDownColor: key,
            wickColor: "#737375",
            wickUpColor: C,
            wickDownColor: k
          },
          barStyle: {
            downColor: key,
            upColor: C
          },
          pnfStyle: {
            downColor: key,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          baselineStyle: {
            baselineColor: parameter,
            topFillColor1: M,
            topFillColor2: context,
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
            downColor: key,
            borderUpColor: C,
            borderDownColor: key,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f",
            wickUpColor: C,
            wickDownColor: k
          },
          lineStyle: {
            colorType: result.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          lineWithMarkersStyle: {
            colorType: result.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          steplineStyle: {
            colorType: result.ColorType.Gradient,
            color: Z,
            gradientStartColor: S,
            gradientEndColor: "#00BCE5"
          },
          kagiStyle: {
            downColor: key,
            upColor: C,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f"
          },
          pbStyle: {
            upColor: C,
            downColor: key,
            borderUpColor: C,
            borderDownColor: key,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            borderUpColorProjection: "#336854",
            borderDownColorProjection: "#7f323f"
          },
          rangeStyle: {
            upColor: C,
            downColor: key,
            upColorProjection: "#336854",
            downColorProjection: "#7f323f",
            candlesUpColor: C,
            candlesDownColor: key,
            candlesBorderUpColor: C,
            candlesBorderDownColor: key,
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
    let le = (0, object.clone)(nextValue.light),
      ce = (0, object.clone)(re);

    function he(exports, t) {
      switch (exports) {
        case ae.StdTheme.Light:
          le = (0, object.merge)((0, object.clone)(le), t);
          break;
        case ae.StdTheme.Dark:
          ce = (0, object.merge)((0, object.clone)(ce), t)
      }
    }

    function de() {
      le = (0, object.clone)(nextValue.light), ce = (0, object.clone)(re)
    }

    function ue() {
      return [ae.StdTheme.Light, ae.StdTheme.Dark]
    }

    function _e(exports) {
      return (0, object.clone)(exports === ae.StdTheme.Light ? le : exports === ae.StdTheme.Dark ? ce : void 0)
    }

    function pe(exports) {
      return {
        [ae.StdTheme.Light]: state.t(null, {
          context: "colorThemeName"
        }, i(96870)),
        [ae.StdTheme.Dark]: state.t(null, {
          context: "colorThemeName"
        }, i(85119))
      } [e] || e
    }