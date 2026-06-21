// Module 33350 - Canvas Utilities and Bitmap Operations
// Purpose: Canvas creation, context management, pixel operations, text measurement
// Original file: modules-v2/33350.js
// Size: 3.1 KB (beautified)
// Dependencies: 27714, 50151, 59239, 57658, 24640, 49483

"use strict";

// Import dependencies
const canvasBinding = require(27714);       // bindCanvasElementBitmapSizeTo
const nullUtils = require(50151);            // ensureNotNull, assert
const devicePixel = require(59239);          // getCanvasDevicePixelRatio
const textMetrics = require(57658);          // getMinTextMetrics
const rtlUtils = require(24640);             // isRtl
const platformUtils = require(49483);        // isMac
  
  // ============================================================================
  // RENDERING INFO UTILITIES
  // ============================================================================
  
  /**
   * Calculate pixel ratios from binding info
   * @param {CanvasBinding} binding - Canvas binding information
   */
  function calculatePixelRatios(binding) {
    return {
      horizontalPixelRatio: Math.max(1, binding.bitmapSize.width / binding.canvasElementClientSize.width),
      verticalPixelRatio: Math.max(1, binding.bitmapSize.height / binding.canvasElementClientSize.height)
    };
  }
  
  /**
   * Get complete rendering information for a canvas binding
   * @param {CanvasBinding} binding - Canvas binding with bitmap and media sizes
   * @returns {RenderingInfo} Complete rendering context info
   */
  function getBindingRenderingInfo(binding) {
    return {
      ...calculatePixelRatios(binding),
      bitmapSize: binding.bitmapSize,
      mediaSize: binding.canvasElementClientSize
    };
  }
  
  // ============================================================================
  // CONTEXT MANAGEMENT
  // ============================================================================
  
  /**
   * Get 2D context with identity transform (reset any existing transforms)
   * @param {HTMLCanvasElement} canvas - Canvas element
   * @returns {CanvasRenderingContext2D} 2D rendering context
   */
  function getContext2D(canvas) {
    const ctx = nullUtils.ensureNotNull(canvas.getContext("2d"));
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity
    return ctx;
  }
  
  /**
   * Get 2D context pre-scaled for device pixel ratio
   * @param {HTMLCanvasElement} canvas - Canvas element
   * @returns {CanvasRenderingContext2D} Context scaled by device pixel ratio
   */
  function getPrescaledContext2D(canvas) {
    const ctx = nullUtils.ensureNotNull(canvas.getContext("2d"));
    const dpr = devicePixel.getCanvasDevicePixelRatio(canvas);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // Scale by DPR
    return ctx;
  }
  
  // ============================================================================
  // RECTANGLE OPERATIONS
  // ============================================================================
  
  /**
   * Fill a rectangle with specified color
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {string} color - Fill color
   */
  function fillRect(ctx, x, y, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }
  
  /**
   * Clear a rectangle using copy composite operation (creates transparency)
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {string} color - Color to use for clearing
   */
  function clearRect(ctx, x, y, width, height, color) {
    ctx.save();
    ctx.globalCompositeOperation = "copy";
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }
  
  // ============================================================================
  // SCALING OPERATIONS
  // ============================================================================
  
  /**
   * Execute drawing function with scaling applied
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} scaleX - Horizontal scale factor
   * @param {number} scaleY - Vertical scale factor
   * @param {Function} drawFn - Drawing function to execute
   */
  function drawScaled(ctx, scaleX, scaleY, drawFn) {
    ctx.save();
    ctx.scale(scaleX, scaleY);
    drawFn();
    ctx.restore();
  }
  
  // ============================================================================
  // CANVAS CREATION
  // ============================================================================
  
  /**
   * Create a canvas element (internal helper)
   * @param {Document} doc - Document to create canvas in
   * @returns {HTMLCanvasElement} New canvas element
   */
  function createCanvas(doc) {
    const canvas = doc.createElement("canvas");
    disableSelection(canvas);
    return canvas;
  }
  
  /**
   * Create a disconnected canvas with specified size
   * @param {Document} doc - Document to create canvas in
   * @param {Size} size - Canvas size in logical pixels
   * @param {number} [devicePixelRatio] - Optional device pixel ratio
   * @returns {HTMLCanvasElement} Disconnected canvas
   */
  function createDisconnectedCanvas(doc, size, devicePixelRatio) {
    const canvas = createCanvas(doc);
    
    if (devicePixelRatio === undefined) {
      devicePixelRatio = devicePixel.getCanvasDevicePixelRatio(canvas);
    }
    
    canvas.width = size.width * devicePixelRatio;
    canvas.height = size.height * devicePixelRatio;
    
    return canvas;
  }
  
  /**
   * Create a disconnected canvas with rendering info
   * @param {Document} doc - Document to create canvas in
   * @param {RenderingInfo} renderingInfo - Rendering information with bitmap/media sizes
   * @returns {HTMLCanvasElement} Configured canvas element
   */
  function createDisconnectedCanvasByRenderingInfo(doc, renderingInfo) {
    const { bitmapSize, mediaSize } = renderingInfo;
    const canvas = createCanvas(doc);
    
    // Set CSS size (media size)
    canvas.style.width = `${mediaSize.width}px`;
    canvas.style.height = `${mediaSize.height}px`;
    
    // Set bitmap size (actual pixel dimensions)
    canvas.width = bitmapSize.width;
    canvas.height = bitmapSize.height;
    
    return canvas;
  }
  
  /**
   * Create a canvas bound to a parent element with automatic resizing
   * @param {HTMLElement} parentEl - Parent element to append canvas to
   * @param {Size} size - Initial size
   * @returns {CanvasResizer} Resizer object for managing canvas size
   */
  function createBoundCanvas(parentEl, size) {
    const doc = nullUtils.ensureNotNull(parentEl.ownerDocument);
    const canvas = createCanvas(doc);
    
    parentEl.appendChild(canvas);
    
    // Bind canvas bitmap size to device-pixel-content-box
    const resizer = canvasBinding.bindCanvasElementBitmapSizeTo(canvas, {
      type: "device-pixel-content-box",
      transform: (currentSize, targetSize) => {
        // Handle zero-size case
        if (currentSize.width === 0 || currentSize.height === 0) {
          return currentSize;
        }
        // Ensure canvas is at least as large as target
        return {
          width: Math.max(currentSize.width, targetSize.width),
          height: Math.max(currentSize.height, targetSize.height)
        };
      }
    });
    
    resizer.resizeCanvasElement(size);
    
    return resizer;
  }
  
  /**
   * Apply suggested bitmap size if available and valid
   * @param {SizedCanvas} canvas - Canvas with suggested bitmap size support
   * @returns {boolean} True if size was applied, false otherwise
   */
  function tryApplySuggestedCanvasBitmapSize(canvas) {
    const suggestedSize = canvas.suggestedBitmapSize;
    
    if (suggestedSize !== null && 
        suggestedSize.width > 0 && 
        suggestedSize.height > 0) {
      canvas.applySuggestedBitmapSize();
      return true;
    }
    
    return false;
  }
  
  // ============================================================================
  // TEXT OPERATIONS
  // ============================================================================
  
  /**
   * Calculate horizontal text shift based on alignment
   * @param {CanvasRenderingContext2D} ctx - Canvas context with text properties
   * @param {number} width - Text width
   * @returns {number} Horizontal shift amount
   */
  function calcTextHorizontalShift(ctx, width) {
    if (ctx.textAlign === "center") {
      return 0;
    }
    
    // RTL languages
    if (rtlUtils.isRtl()) {
      return ctx.textAlign === "start" || ctx.textAlign === "right" ? width : 0;
    }
    
    // LTR languages
    return ctx.textAlign === "start" || ctx.textAlign === "left" ? 0 : width;
  }
  
  /**
   * Measure text with cached context
   * @param {string} text - Text to measure
   * @param {string} [font] - Optional font specification
   * @param {TextMetricsGetter} [metricsGetter] - Custom metrics getter
   * @returns {TextMetrics} Text measurement results
   */
  let cachedCtx;
  
  function measureText(text, font, metricsGetter) {
    // Initialize cached context on first use
    if (cachedCtx === undefined) {
      const canvas = document.createElement("canvas");
      canvas.width = 0;
      canvas.height = 0;
      
      // On Mac, hide canvas and add to DOM for proper font rendering
      if (platformUtils.isMac()) {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
      }
      
      cachedCtx = nullUtils.ensureNotNull(canvas.getContext("2d"));
      cachedCtx.textBaseline = "alphabetic";
      cachedCtx.textAlign = "center";
    }
    
    // Update font if changed
    if (font && cachedCtx.font !== font) {
      cachedCtx.font = font;
    }
    
    // Get metrics using custom getter or default
    if (metricsGetter) {
      return metricsGetter.getMetrics(cachedCtx, text);
    } else {
      return textMetrics.getMinTextMetrics(cachedCtx.measureText(text));
    }
  }
  
  // ============================================================================
  // SELECTION DISABLE
  // ============================================================================
  
  /**
   * Disable text selection and tap highlighting on canvas
   * @param {HTMLCanvasElement} canvas - Canvas element
   */
  function disableSelection(canvas) {
    canvas.style.userSelect = "none";
    canvas.style.webkitUserSelect = "none";
    canvas.style.msUserSelect = "none";
    canvas.style.MozUserSelect = "none";
    canvas.style.webkitTapHighlightColor = "transparent";
  }
  
  // ============================================================================
  // EXCLUSION AREA (CLIPPING)
  // ============================================================================
  
  /**
   * Add exclusion area by defining clipping path with scope
   * @param {RenderContext} renderContext - Rendering context
   * @param {Point[]} exclusionPoints - Points defining exclusion polygons
   */
  function addExclusionAreaByScope(renderContext, exclusionPoints) {
    const { context: ctx, horizontalPixelRatio: hRatio, verticalPixelRatio: vRatio, bitmapSize } = renderContext;
    
    // Start with full canvas rectangle
    ctx.beginPath();
    ctx.rect(0, 0, bitmapSize.width, bitmapSize.height);
    
    // Add exclusion polygons
    for (let i = 0; i < exclusionPoints.length; i++) {
      let { x, y } = exclusionPoints[i];
      
      // Scale to pixel coordinates
      x *= hRatio;
      y *= vRatio;
      
      if (i !== 0) {
        ctx.lineTo(x, y);
      } else {
        ctx.moveTo(x, y);
      }
    }
    
    ctx.closePath();
    ctx.clip("evenodd"); // Even-odd rule for proper hole punching
  }
  
  /**
   * Add exclusion area with explicit scope parameter
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {RenderContext} renderContext - Rendering context for pixel ratios
   * @param {Point[]} exclusionPoints - Points defining exclusion polygons
   */
  function addExclusionArea(ctx, renderContext, exclusionPoints) {
    addExclusionAreaByScope({ context: ctx, ...renderContext }, exclusionPoints);
  }
  
  /**
   * Execute drawing function with exclusion area applied
   * @param {RenderContext} renderContext - Rendering context
   * @param {Point[]} exclusionPoints - Points defining exclusion polygons
   * @param {Function} drawFn - Drawing function to execute within clipped area
   */
function drawWithExclusionAreaByScope(renderContext, exclusionPoints, drawFn) {
    renderContext.context.save();
    addExclusionAreaByScope(renderContext, exclusionPoints);
    drawFn();
    renderContext.context.restore();
}

// Exported functions
module.exports = {
    addExclusionArea: addExclusionArea,
    addExclusionAreaByScope: addExclusionAreaByScope,
    calcTextHorizontalShift: calcTextHorizontalShift,
    clearRect: clearRect,
    createBoundCanvas: createBoundCanvas,
    createDisconnectedCanvas: createDisconnectedCanvas,
    createDisconnectedCanvasByRenderingInfo: createDisconnectedCanvasByRenderingInfo,
    disableSelection: disableSelection,
    drawScaled: drawScaled,
    drawWithExclusionAreaByScope: drawWithExclusionAreaByScope,
    fillRect: fillRect,
    getBindingRenderingInfo: getBindingRenderingInfo,
    getContext2D: getContext2D,
    getPrescaledContext2D: getPrescaledContext2D,
    measureText: measureText,
    tryApplySuggestedCanvasBitmapSize: tryApplySuggestedCanvasBitmapSize
};
