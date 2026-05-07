/**
 * ============================================================================
 * TRADINGVIEW MODULE 49156 - COLORS CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central color palette definition for TradingView charting library
 * 
 * Dependencies:
 *   - Module 58978 (colorUtils): Provides getHexColorByName() for named color lookup
 *   - Module 52859 (alphaGenerator): Provides generateColor() for alpha transparency
 * 
 * Structure:
 *   1. baseColors: 64 base color definitions from TradingView design system
 *      - Blues: TvBlue, DeepBlue, SkyBlue variants (50-900 shades)
 *      - Reds: RipeRed variants (200-A900 shades)
 *      - Greens: MintyGreen, IguanaGreen, ForestGreen
 *      - Purples: GrapesPurple, BerryPink
 *      - Oranges: TanOrange
 *      - Grays: ColdGray (100-900 with 50-step increments)
 *      - Special: Black, White, YouTube red
 *   
 *   2. alphaVariants: 38 generated colors with transparency
 *      - Uses generateColor(baseColor, opacityPercentage)
 *      - Opacity is inverted: 75 = 25% opacity, 95 = 5% opacity
 *      - Common patterns: Alpha20, Alpha25, Alpha28, Alpha50
 *   
 *   3. allColors: Combined export of base + alpha variants
 * 
 * Usage Pattern:
 *   import { colors } from './49156-colors';
 *   const upColor = colors.colorMintyGreen500;      // #00BCE5
 *   const transparent = colors.colorTvBlue500Alpha20; // Generated with 80% opacity
 * 
 * Design System:
 *   - Follows material design naming (shade numbers 50-900)
 *   - 'A' prefix indicates accent colors (A200, A400, A700, A800, A900)
 *   - Alpha variants use inverted opacity (higher number = more transparent)
 * ============================================================================
 */

/**
 * Module 49156 - Colors Configuration
 */
49156: (exports, module, require) => {
    "use strict";
    
    // Export colors object
    require.d(exports, {
      colors: () => allColors
    });
    
    const colorUtils = require(58978),
      alphaGenerator = require(52859);
    
    // Base color palette - 64 colors from TradingView design system
    const baseColors = {
        colorBlack: (0, colorUtils.getHexColorByName)("color-black"),
        colorWhite: (0, colorUtils.getHexColorByName)("color-white"),
        colorTvBlue50: (0, colorUtils.getHexColorByName)("color-tv-blue-50"),
        colorTvBlue200: (0, colorUtils.getHexColorByName)("color-tv-blue-200"),
        colorTvBlue400: (0, colorUtils.getHexColorByName)("color-tv-blue-400"),
        colorTvBlue500: (0, colorUtils.getHexColorByName)("color-tv-blue-500"),
        colorTvBlue600: (0, colorUtils.getHexColorByName)("color-tv-blue-600"),
        colorTvBlue800: (0, colorUtils.getHexColorByName)("color-tv-blue-800"),
        colorTvBlueA800: (0, colorUtils.getHexColorByName)("color-tv-blue-a800"),
        colorDeepBlue200: (0, colorUtils.getHexColorByName)("color-deep-blue-200"),
        colorDeepBlue300: (0, colorUtils.getHexColorByName)("color-deep-blue-300"),
        colorDeepBlue500: (0, colorUtils.getHexColorByName)("color-deep-blue-500"),
        colorDeepBlueA200: (0, colorUtils.getHexColorByName)("color-deep-blue-a200"),
        colorDeepBlueA400: (0, colorUtils.getHexColorByName)("color-deep-blue-a400"),
        colorDeepBlueA700: (0, colorUtils.getHexColorByName)("color-deep-blue-a700"),
        colorSkyBlue400: (0, colorUtils.getHexColorByName)("color-sky-blue-400"),
        colorSkyBlue500: (0, colorUtils.getHexColorByName)("color-sky-blue-500"),
        colorSkyBlue700: (0, colorUtils.getHexColorByName)("color-sky-blue-700"),
        colorDefaultRed: (0, colorUtils.getHexColorByName)("color-youtube"),
        colorRipeRed200: (0, colorUtils.getHexColorByName)("color-ripe-red-200"),
        colorRipeRed300: (0, colorUtils.getHexColorByName)("color-ripe-red-300"),
        colorRipeRed400: (0, colorUtils.getHexColorByName)("color-ripe-red-400"),
        colorRipeRed500: (0, colorUtils.getHexColorByName)("color-ripe-red-500"),
        colorRipeRed600: (0, colorUtils.getHexColorByName)("color-ripe-red-600"),
        colorRipeRed800: (0, colorUtils.getHexColorByName)("color-ripe-red-800"),
        colorRipeRedA900: (0, colorUtils.getHexColorByName)("color-ripe-red-a900"),
        colorRipeRedA700: (0, colorUtils.getHexColorByName)("color-ripe-red-a700"),
        colorGrapesPurpleA200: (0, colorUtils.getHexColorByName)("color-grapes-purple-a200"),
        colorGrapesPurpleA400: (0, colorUtils.getHexColorByName)("color-grapes-purple-a400"),
        colorGrapesPurple500: (0, colorUtils.getHexColorByName)("color-grapes-purple-500"),
        colorBerryPink400: (0, colorUtils.getHexColorByName)("color-berry-pink-400"),
        colorBerryPink500: (0, colorUtils.getHexColorByName)("color-berry-pink-500"),
        colorMintyGreen100: (0, colorUtils.getHexColorByName)("color-minty-green-100"),
        colorMintyGreen200: (0, colorUtils.getHexColorByName)("color-minty-green-200"),
        colorMintyGreen400: (0, colorUtils.getHexColorByName)("color-minty-green-400"),
        colorMintyGreen500: (0, colorUtils.getHexColorByName)("color-minty-green-500"),
        colorMintyGreen600: (0, colorUtils.getHexColorByName)("color-minty-green-600"),
        colorMintyGreen800: (0, colorUtils.getHexColorByName)("color-minty-green-800"),
        colorMintyGreenA900: (0, colorUtils.getHexColorByName)("color-minty-green-a900"),
        colorIguanaGreen300: (0, colorUtils.getHexColorByName)("color-iguana-green-300"),
        colorIguanaGreen500: (0, colorUtils.getHexColorByName)("color-iguana-green-500"),
        colorIguanaGreenA700: (0, colorUtils.getHexColorByName)("color-iguana-green-a700"),
        colorTanOrange300: (0, colorUtils.getHexColorByName)("color-tan-orange-300"),
        colorTanOrange500: (0, colorUtils.getHexColorByName)("color-tan-orange-500"),
        colorTanOrange600: (0, colorUtils.getHexColorByName)("color-tan-orange-600"),
        colorTanOrange700: (0, colorUtils.getHexColorByName)("color-tan-orange-700"),
        colorColdGray100: (0, colorUtils.getHexColorByName)("color-cold-gray-100"),
        colorColdGray150: (0, colorUtils.getHexColorByName)("color-cold-gray-150"),
        colorColdGray200: (0, colorUtils.getHexColorByName)("color-cold-gray-200"),
        colorColdGray300: (0, colorUtils.getHexColorByName)("color-cold-gray-300"),
        colorColdGray400: (0, colorUtils.getHexColorByName)("color-cold-gray-400"),
        colorColdGray450: (0, colorUtils.getHexColorByName)("color-cold-gray-450"),
        colorColdGray500: (0, colorUtils.getHexColorByName)("color-cold-gray-500"),
        colorColdGray550: (0, colorUtils.getHexColorByName)("color-cold-gray-550"),
        colorColdGray600: (0, colorUtils.getHexColorByName)("color-cold-gray-600"),
        colorColdGray650: (0, colorUtils.getHexColorByName)("color-cold-gray-650"),
        colorColdGray700: (0, colorUtils.getHexColorByName)("color-cold-gray-700"),
        colorColdGray750: (0, colorUtils.getHexColorByName)("color-cold-gray-750"),
        colorColdGray800: (0, colorUtils.getHexColorByName)("color-cold-gray-800"),
        colorColdGray850: (0, colorUtils.getHexColorByName)("color-cold-gray-850"),
        colorColdGray900: (0, colorUtils.getHexColorByName)("color-cold-gray-900"),
        colorForestGreen300: (0, colorUtils.getHexColorByName)("color-forest-green-300")
      },
      const alphaVariants = {
        colorWhiteAlpha25:  (0, alphaGenerator.generateColor)(baseColors.colorWhite, 75),
        colorTvBlue500Alpha40:  (0, alphaGenerator.generateColor)(baseColors.colorTvBlue500, 60),
        colorTvBlue500Alpha30:  (0, alphaGenerator.generateColor)(baseColors.colorTvBlue500, 70),
        colorTvBlue500Alpha28:  (0, alphaGenerator.generateColor)(baseColors.colorTvBlue500, 72),
        colorTvBlue500Alpha25:  (0, alphaGenerator.generateColor)(baseColors.colorTvBlue500, 75),
        colorTvBlue500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorTvBlue500, 80),
        colorDeepBlue500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorDeepBlue500, 80),
        colorSkyBlue400Alpha5:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue400, 95),
        colorSkyBlue400Alpha50:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue400, 50),
        colorSkyBlue400Alpha75:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue400, 25),
        colorSkyBlue500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue500, 80),
        colorSkyBlue500Alpha25:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue500, 75),
        colorSkyBlue700Alpha70:  (0, alphaGenerator.generateColor)(baseColors.colorSkyBlue700, 30),
        colorRipeRed400Alpha5:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed400, 95),
        colorRipeRed500Alpha5:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed500, 95),
        colorRipeRed500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed500, 80),
        colorRipeRed500Alpha28:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed500, 72),
        colorRipeRed500Alpha30:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed500, 70),
        colorRipeRed500Alpha50:  (0, alphaGenerator.generateColor)(baseColors.colorRipeRed500, 50),
        colorGrapesPurpleA200Alpha15:  (0, alphaGenerator.generateColor)(baseColors.colorGrapesPurpleA200, 85),
        colorGrapesPurple500Alpha0:  (0, alphaGenerator.generateColor)(baseColors.colorGrapesPurple500, 100),
        colorGrapesPurple500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorGrapesPurple500, 80),
        colorGrapesPurple500Alpha70:  (0, alphaGenerator.generateColor)(baseColors.colorGrapesPurple500, 30),
        colorBerryPink400Alpha50:  (0, alphaGenerator.generateColor)(baseColors.colorBerryPink400, 50),
        colorBerryPink400Alpha75:  (0, alphaGenerator.generateColor)(baseColors.colorBerryPink400, 25),
        colorBerryPink500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorBerryPink500, 80),
        colorBerryPink500Alpha25:  (0, alphaGenerator.generateColor)(baseColors.colorBerryPink500, 75),
        colorMintyGreen500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorMintyGreen500, 80),
        colorMintyGreen500Alpha28:  (0, alphaGenerator.generateColor)(baseColors.colorMintyGreen500, 72),
        colorMintyGreen500Alpha50:  (0, alphaGenerator.generateColor)(baseColors.colorMintyGreen500, 50),
        colorMintyGreen500Alpha5:  (0, alphaGenerator.generateColor)(baseColors.colorMintyGreen500, 95),
        colorIguanaGreen500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorIguanaGreen500, 80),
        colorTanOrange500Alpha20:  (0, alphaGenerator.generateColor)(baseColors.colorTanOrange500, 80),
        colorForestGreen300Alpha5:  (0, alphaGenerator.generateColor)(baseColors.colorForestGreen300, 95),
        colorColdGray100Alpha0:  (0, alphaGenerator.generateColor)(baseColors.colorColdGray100, 100),
        colorColdGray100Alpha6:  (0, alphaGenerator.generateColor)(baseColors.colorColdGray100, 94),
        colorColdGray800Alpha0:  (0, alphaGenerator.generateColor)(baseColors.colorColdGray800, 100),
        colorColdGray800Alpha6: (0, alphaGenerator.generateColor)(baseColors.colorColdGray800, 94)
      };
    
    // Combined export: base colors + alpha variants
    const allColors = {
        ...baseColors,
        ...alphaVariants
      };
    
    // Make colors available via module exports
    exports.colors = allColors;
};
