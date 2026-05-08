/**
 * ============================================================================
 * TRADINGVIEW MODULE 32853 - TEXT RENDERER
 * ============================================================================
 *
 * Purpose: Text rendering utilities for chart elements
 *
 * Size: 2.9 KB
 *
 * Functions:
 *   - makeFont: Create font object
 *   - parseFont: Parse font string
 *   - parseColor: Parse color string
 *   - getColorFromProperties: Get color from properties
 *   - setColorToProperties: Set color to properties
 *   - getFontFromProperties: Get font from properties
 *   - setFontToProperties: Set font to properties
 *
 * Features:
 *   - Font creation and parsing
 *   - Color parsing and caching
 *   - Property-based color management
 *   - Font property management
 *   - Error handling for invalid inputs
 *
 * Dependencies:
 *   - 49251: Font utilities
 *   - 9343: Logger utilities
 *   - 58221: Color utilities
 *   - 10307: Font utilities
 *
 * Exports:
 *   - drawPoly: Polygon drawing function
 *   - makeFont: Font creation function
 *   - parseFont: Font parsing function
 *   - getColorFromProperties: Color getter function
 *   - setColorToProperties: Color setter function
 *   - getFontFromProperties: Font getter function
 *   - setFontToProperties: Font setter function
 *
 * @module 32853
 * @category Chart Rendering
 * @subcategory Text Rendering
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    drawPoly: () => drawPoly,
    makeFont: () => makeFont,
    parseFont: () => parseFont,
    getColorFromProperties: () => getColorFromProperties,
    setColorToProperties: () => setColorToProperties,
    getFontFromProperties: () => getFontFromProperties,
    setFontToProperties: () => setFontToProperties
  });

  const fontUtils = moduleRequire(49251).makeFont,
    parseFontUtils = moduleRequire(49251).parseFont,
    logger = moduleRequire(9343).getLogger("Model.ChartTradingUtils"),
    colorUtils = moduleRequire(58221),
    fontUtils2 = moduleRequire(10307);

  const drawPoly = function(ctx, poly) {
    ctx.fillStyle = poly.color;
    ctx.beginPath();
    ctx.moveTo(poly.points[0].x, poly.points[0].y);
    for (let i = 1; i < poly.points.length; i++) {
      ctx.lineTo(poly.points[i].x, poly.points[i].y);
    }
    ctx.closePath();
    ctx.fill();
  };

  const makeFont = parseFontUtils;
  const parseColor = function(color) {
    if (this._parsedColorCache[color]) {
      return this._parsedColorCache[color];
    }
    
    const colorDiv = document.createElement("div");
    colorDiv.style.color = color;
    
    const rgbMatch = colorDiv.style.color.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
    const rgbaMatch = colorDiv.style.color.match(/^rgba\((\d+),(\d+),(\d+),(\d+)\)$/);
    
    const colorObj = {
      r: parseInt(rgbMatch ? rgbMatch[1] : rgbaMatch[1]),
      g: parseInt(rgbMatch ? rgbMatch[2] : rgbaMatch[2]),
      b: parseInt(rgbMatch ? rgbMatch[3] : rgbaMatch[3]),
      a: parseInt(rgbaMatch ? rgbaMatch[4] : 1)
    };
    
    return this._parsedColorCache[color] = colorObj;
  };

  const getColorFromProperties = function(properties, colorProp, valueProp) {
    const color = parseColor(properties[colorProp].value());
    const opacity = 100 * (1 - properties[valueProp].value()) / 100;
    
    properties[colorProp].setValue("rgb(" + color.r + "," + color.g + "," + color.b + ")");
    properties[valueProp].setValue(Math.max(0, Math.min(opacity, 100)));
  };

  const setColorToProperties = function(properties, colorProp, valueProp, color) {
    const colorObj = parseColor(color);
    properties[colorProp].setValue("rgb(" + colorObj.r + "," + colorObj.g + "," + colorObj.b + ")");
    properties[valueProp].setValue(Math.max(0, Math.min(100 * colorObj.a, 100)));
  };

  const getFontFromProperties = function(properties, sizeProp, familyProp, styleProp, weightProp) {
    return fontUtils2(
      properties[sizeProp].value(),
      properties[familyProp].value(),
      properties[styleProp].value() ? "italic" : "",
      properties[weightProp].value() ? "bold" : ""
    );
  };

  const setFontToProperties = function(properties, sizeProp, familyProp, styleProp, weightProp, font) {
    const fontObj = parseFont(font);
    
    if (fontObj.family.length > 0) {
      properties[familyProp].setValue(fontObj.family);
    }
    
    if (fontObj.size > 0) {
      properties[sizeProp].setValue(Math.max(0, Math.min(fontObj.size, 100)));
    }
    
    if (fontObj.style.length > 0) {
      properties[styleProp].setValue(fontObj.style);
    }
    
    if (fontObj.weight.length > 0) {
      properties[weightProp].setValue(fontObj.weight);
    }
  };
}
