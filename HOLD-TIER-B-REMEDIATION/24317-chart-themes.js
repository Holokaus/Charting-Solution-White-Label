/**
 * ============================================================================
 * TRADINGVIEW MODULE 24317 - CHART THEMES CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Define and manage light/dark theme configurations for TradingView charts
 * 
 * Dependencies:
 *   - Module 11542 (i18n): Internationalization for theme names
 *   - Module 87465 (objectUtils): Object clone/merge utilities
 *   - Module 2433 (lightThemeBase): Base light theme definition
 *   - Module 93201 (colorTypes): ColorType enum for gradients
 *   - Module 49156 (colors): Complete color palette (our renamed module!)
 *   - Module 24633 (stdTheme): Standard theme enum (Light/Dark)
 * 
 * Structure:
 *   1. Color Destructuring: Extract 48 specific colors from the colors module
 *      - Grays: Cold gray palette (100-900, alpha variants)
 *      - Blues: TvBlue, DeepBlue, SkyBlue families
 *      - Greens: MintyGreen spectrum
 *      - Reds: RipeRed variants
 *      - Accents: GrapesPurple, BerryPink, TanOrange
 *   
 *   2. Empty Theme Placeholders:
 *      - tpoTheme: Time Price Opportunity theme (empty)
 *      - volFootprintTheme: Volume footprint theme (empty)
 *      - svpTheme: Session volume profile theme (empty)
 *   
 *   3. Dark Theme Configuration (darkThemeConfig):
 *      - Background: Gradient from coldGray850 to coldGray900
 *      - Grid: Cold gray with low opacity
 *      - Crosshair: Cold gray 400
 *      - Separator: Cold gray 800
 *      - Candle Colors: Minty green (up), Ripe red (down)
 *      - Session Highlights: TvBlue for regular, TanOrange for pre-market
 *   
 *   4. Theme Management Functions:
 *      - overrideStandardTheme(type, overrides): Merge custom settings into theme
 *      - restoreStandardThemes(): Reset themes to defaults
 *      - getStandardThemeNames(): Return [Light, Dark] enum array
 *      - getStandardChartTheme(type): Get cloned theme by type
 *      - translateThemeName(type): Get localized theme name
 * 
 * Usage Pattern:
 *   import { 
 *     lightTheme, 
 *     darkTheme, 
 *     getStdChartTheme, 
 *     overrideStdTheme 
 *   } from './24317-chart-themes';
 *   
 *   // Get dark theme
 *   const theme = getStdChartTheme(StdTheme.Dark);
 *   
 *   // Customize theme
 *   overrideStdTheme(StdTheme.Light, {
 *     content: {
 *       chartProperties: {
 *         paneProperties: {
 *           background: '#FFFFFF'
 *         }
 *       }
 *     }
 *   });
 * 
 * Theme Hierarchy:
 *   darkThemeConfig.content
 *     ├── chartProperties
 *     │   ├── scalesProperties (axis colors, text)
 *     │   └── paneProperties (grid, crosshair, background)
 *     ├── sessions (session highlighting)
 *     │   └── sessionHighlight (backgrounds, vertlines)
 *     └── mainSourceProperties (all chart type colors)
 *         ├── candleStyle, haStyle, barStyle
 *         ├── lineStyle, areaStyle, steplineStyle
 *         ├── renkoStyle, kagiStyle, pnfStyle
 *         └── baselineStyle, columnStyle, etc.
 * 
 * Color Mapping (Dark Theme):
 *   - Up candles: mintyGreen500 (#00BCE5)
 *   - Down candles: ripeRed500 (#FF4A68)
 *   - Grid lines: coldGray100Alpha6 (94% transparent)
 *   - Background: coldGray900 (#131722)
 *   - Crosshair: coldGray400 (#787B86)
 *   - Price line: tvBlue500 (#2962FF)
 * ============================================================================
 */

24317: (exports, module, require) => {
    "use strict";
    
    // Export theme functions and constants
    require.r(exports);
    require.d(exports, {
      darkTheme: () => darkTheme,
      getStdChartTheme: () => getStandardChartTheme,
      getStdThemeNames: () => getStandardThemeNames,
      lightTheme: () => lightTheme,
      overrideStdTheme: () => overrideStandardTheme,
      restoreStdThemes: () => restoreStandardThemes,
      translateThemeName: () => translateThemeName
    });
    
    const i18n = require(11542),
      objectUtils = require(87465),
      lightThemeBase = require(2433),
      colorTypes = require(93201),
      colors = require(49156);
    const {
      colorWhite: white,
      colorColdGray100Alpha0: coldGray100Alpha0,
      colorColdGray100Alpha6: coldGray100Alpha6,
      colorColdGray200: coldGray200,
      colorColdGray300: coldGray300,
      colorColdGray400: coldGray400,
      colorColdGray450: coldGray450,
      colorColdGray600: coldGray600,
      colorColdGray800: coldGray800,
      colorColdGray850: coldGray850,
      colorColdGray900: coldGray900,
      colorDeepBlueA200: deepBlueA200,
      colorGrapesPurpleA400: grapesPurpleA400,
      colorGrapesPurpleA200Alpha15: grapesPurpleA200Alpha15,
      colorMintyGreen400: mintyGreen400,
      colorMintyGreen500: mintyGreen500,
      colorMintyGreen600: mintyGreen600,
      colorMintyGreen800: mintyGreen800,
      colorMintyGreen500Alpha5: mintyGreen500Alpha5,
      colorMintyGreen500Alpha28: mintyGreen500Alpha28,
      colorMintyGreen500Alpha50: mintyGreen500Alpha50,
      colorMintyGreenA900: mintyGreenA900,
      colorRipeRed400: ripeRed400,
      colorRipeRed500: ripeRed500,
      colorRipeRed600: ripeRed600,
      colorRipeRed800: ripeRed800,
      colorRipeRed500Alpha5: ripeRed500Alpha5,
      colorRipeRed500Alpha28: ripeRed500Alpha28,
      colorRipeRed500Alpha50: ripeRed500Alpha50,
      colorRipeRedA900: ripeRedA900,
      colorBerryPink500Alpha25: berryPink500Alpha25,
      colorBerryPink400Alpha50: berryPink400Alpha50,
      colorBerryPink400Alpha75: berryPink400Alpha75,
      colorBerryPink500: berryPink500,
      colorIguanaGreenA700: iguanaGreenA700,
      colorSkyBlue400Alpha5: skyBlue400Alpha5,
      colorSkyBlue400Alpha50: skyBlue400Alpha50,
      colorSkyBlue400Alpha75: skyBlue400Alpha75,
      colorSkyBlue500: skyBlue500,
      colorSkyBlue500Alpha25: skyBlue500Alpha25,
      colorDeepBlueA400: deepBlueA400,
      colorTvBlue400: tvBlue400,
      colorTvBlue500: tvBlue500,
      colorTvBlue500Alpha28: tvBlue500Alpha28,
      colorTvBlue600: tvBlue600,
      colorTvBlue800: tvBlue800,
      colorTvBlueA800: tvBlueA800,
      colorTanOrange500: tanOrange500,
      colorTanOrange600: tanOrange600
    } = colors.colors, tpoTheme = {}, volFootprintTheme = {}, svpTheme = {}, darkThemeConfig = {
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
    const stdTheme = require(24633); // StdTheme enum
    let lightTheme = (0, objectUtils.clone)(lightThemeBase.light),
        darkTheme = (0, objectUtils.clone)(darkThemeConfig);

    function overrideStandardTheme(themeType, overrides) {
      switch (themeType) {
        case stdTheme.Light:
          lightTheme = (0, objectUtils.merge)((0, objectUtils.clone)(lightTheme), overrides);
          break;
        case stdTheme.Dark:
          darkTheme = (0, objectUtils.merge)((0, objectUtils.clone)(darkTheme), overrides)
      }
    }

    function restoreStandardThemes() {
      lightTheme = (0, objectUtils.clone)(lightThemeBase.light); darkTheme = (0, objectUtils.clone)(darkThemeConfig)
    }

    function getStandardThemeNames() {
      return [stdTheme.Light, stdTheme.Dark]
    }

    function getStandardChartTheme(themeType) {
      return (0, objectUtils.clone)(themeType === stdTheme.Light ? lightTheme : themeType === stdTheme.Dark ? darkTheme : undefined)
    }

    function translateThemeName(themeType) {
      return {
        [stdTheme.Light]: i18n.t(null, { context: "colorThemeName" }, i(96870)),
        [stdTheme.Dark]: i18n.t(null, { context: "colorThemeName" }, i(85119))
      } [themeType] || themeType
    }

// Export for module system
module.exports = {
  darkTheme,
  lightTheme,
  getStdChartTheme,
  getStdThemeNames,
  overrideStdTheme,
  restoreStdThemes,
  translateThemeName
};
