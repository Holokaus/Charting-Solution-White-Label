// Module 60876 - Step Line Renderer with Decorations
// Purpose: Renders step lines with optional diamond decorations
// Original file: modules-v2/60876.js
// Size: 5.9 KB (270 lines beautified)
// Dependencies: 2624, 10555, 2383, 4539, 58221, 10307, 79268, 4699, 85565, 12217

(e, t, i) => {
  "use strict";
  
  // Exported classes
  i.d(t, {
    PaneRendererStepLine: () => PaneRendererStepLine,
    StepLineDecoration: () => StepLineDecoration
  });
  
  // Import dependencies
  var distanceUtils = i(2624),           // distanceToSegment
      pointUtils = i(10555),              // point
      HitTestResult = i(2383),            // HitTestResult, HitTarget
      interactionConfig = i(4539),        // interactionTolerance
      shapeDrawing = i(58221),            // drawRoundRect
      BitmapRenderer = i(10307),          // BitmapCoordinatesPaneRenderer
      lineIterator = i(79268),            // isValidPoint, PaneRendererLineItemsIterator
      colorUtils = i(4699),               // applyColor
      dashCanvas = i(85565),              // SmartDashCanvas
      arrayUtils = i(12217);              // sum
  
  // ============================================================================
  // ENUMS
  // ============================================================================
  
  /**
   * Step line decoration types
   */
  var StepLineDecoration;
  (function(StepLineDecoration) {
    StepLineDecoration[StepLineDecoration["None"] = 0] = "None";
    StepLineDecoration[StepLineDecoration["Diamonds"] = 1] = "Diamonds";
  })(StepLineDecoration || (StepLineDecoration = {}));
  
  /**
   * Diamond size constants and configuration
   */
  var DiamondConfig;
  (function(DiamondConfig) {
    DiamondConfig[DiamondConfig["SmallDiamondsSize"] = 8] = "SmallDiamondsSize";
    DiamondConfig[DiamondConfig["SmallDiamondsRadius"] = 2] = "SmallDiamondsRadius";
    DiamondConfig[DiamondConfig["LargeDiamondsSize"] = 21] = "LargeDiamondsSize";
    DiamondConfig[DiamondConfig["LargeDiamondsRadius"] = 5] = "LargeDiamondsRadius";
    DiamondConfig[DiamondConfig["LargeDiamondsAlpha"] = 0.15] = "LargeDiamondsAlpha";
    DiamondConfig[DiamondConfig["LeftUnplottableXCoord"] = -50] = "LeftUnplottableXCoord";
  })(DiamondConfig || (DiamondConfig = {}));
  
  // ============================================================================
  // CLASS: BaseLineRenderer (m)
  // Handles basic step line rendering with hit testing
  // ============================================================================
  
  class BaseLineRenderer {
    /**
     * @param {boolean} forceExtendFirstBar - Whether to extend first bar to center
     */
    constructor(forceExtendFirstBar) {
      this._forceExtendFirstBar = !!forceExtendFirstBar;
    }
    
    /**
     * Initialize canvas context for line drawing
     * @param {SmartDashCanvas} dashCanvas - Dash-aware canvas wrapper
     * @param {Object} lineData - Line configuration data
     * @param {RenderContext} renderContext - Rendering context with pixel ratios
     * @param {LineItem} firstItem - First line item
     */
    initialize(dashCanvas, lineData, renderContext, firstItem) {
      const {
        context: ctx,
        horizontalPixelRatio: hRatio,
        verticalPixelRatio: vRatio
      } = renderContext;
      
      const lineStyle = lineData.lineStyle;
      ctx.lineCap = "butt";
      ctx.lineJoin = "round";
      
      // Calculate line width with pixel ratio
      const lineWidth = Math.max(Math.floor(firstItem.style?.width ?? lineData.lineWidth * hRatio));
      dashCanvas.setLineStyle(lineStyle);
      
      // Offset for odd-width lines to center on pixel
      const pixelOffset = lineWidth % 2 ? 0.5 : 0;
      
      // Move to starting position
      dashCanvas.moveTo(
        Math.round(firstItem.center * hRatio) + pixelOffset,
        Math.round(firstItem.y * vRatio) + pixelOffset
      );
      
      // Apply color
      colorUtils.applyColor(renderContext, firstItem.style?.color ?? lineData.lineColor, 1, 1);
      dashCanvas.setLineWidth(lineWidth);
    }
    
    /**
     * Start a new line fragment (segment between valid points)
     */
    startFragment(dashCanvas, lineData, coords, itemInfo, prevCoords) {
      dashCanvas.beginPath();
      
      // Determine starting X coordinate
      const startX = itemInfo.firstItem && itemInfo.extendToBarsEndings 
        ? coords.center 
        : coords.left;
      
      dashCanvas.moveTo(
        isNaN(startX) ? DiamondConfig.LeftUnplottableXCoord : startX,
        prevCoords?.y ?? coords.y
      );
    }
    
    /**
     * Finish current line fragment
     */
    finishFragment(dashCanvas, lineData, coords, prevCoords) {
      if (prevCoords && coords) {
        dashCanvas.lineTo(coords.left, prevCoords.y);
      }
      dashCanvas.stroke();
    }
    
    /**
     * Hit test for line segment
     * @param {LineData} lineData - Line configuration
     * @param {LineItem} currentItem - Current item being tested
     * @param {LineItem|null} nextItem - Next item (if exists)
     * @param {HitPoint} hitPoint - Point to test
     */
    hitTest(lineData, currentItem, nextItem, hitPoint) {
      if (!lineIterator.isValidPoint(currentItem)) {
        return false;
      }
      
      // Get line width and interaction tolerance
      const lineWidth = currentItem.style?.width ?? lineData.lineWidth;
      const tolerance = interactionConfig.interactionTolerance().series + lineWidth / 2;
      
      const { left: currLeft, y: currY } = currentItem;
      const currX = isNaN(currLeft) ? DiamondConfig.LeftUnplottableXCoord : currLeft;
      
      let nextX, nextY;
      if (nextItem && lineIterator.isValidPoint(nextItem)) {
        nextX = nextItem.left;
        nextY = nextItem.y;
      } else {
        nextX = currentItem.right;
        nextY = currentItem.y;
      }
      
      // Check if point is within horizontal bounds
      const outOfBoundsX = (currX < hitPoint.x - tolerance && nextX < hitPoint.x - tolerance) ||
                          (currX > hitPoint.x + tolerance && nextX > hitPoint.x + tolerance);
      
      if (outOfBoundsX) {
        return false;
      }
      
      // Test distance to horizontal segment
      const horizDistance = distanceUtils.distanceToSegment(
        pointUtils.point(currX, currY),
        pointUtils.point(nextX, currY),
        hitPoint
      ).distance;
      
      // Test distance to vertical segment (if Y changes)
      const vertDistance = currY !== nextY 
        ? distanceUtils.distanceToSegment(
            pointUtils.point(nextX, currY),
            pointUtils.point(nextX, nextY),
            hitPoint
          ).distance
        : Infinity;
      
      return horizDistance < tolerance || vertDistance < tolerance;
    }
    
    /**
     * Apply color to context
     */
    applyColor(renderContext, color) {
      colorUtils.applyColor(renderContext, color, 1, 1);
    }
    
    /**
     * Apply line width
     */
    applyLineWidth(dashCanvas, ctx, width) {
      dashCanvas.setLineWidth(width);
    }
    
    /**
     * Apply line style (solid, dashed, etc.)
     */
    applyLineStyle(dashCanvas, ctx, style) {
      dashCanvas.setLineStyle(style);
    }
    
    /**
     * Draw a single line item (step pattern)
     */
    drawItem(dashCanvas, renderContext, coords, itemInfo, prevCoords) {
      // Connect to previous point if exists
      if (prevCoords !== undefined) {
        dashCanvas.lineTo(coords.left, prevCoords.y);
      }
      
      // Draw step: horizontal to center/left, vertical to Y, horizontal to right
      const extendFirst = !itemInfo.firstItem || 
                         itemInfo.extendToBarsEndings || 
                         this._forceExtendFirstBar;
      
      dashCanvas.lineTo(extendFirst ? coords.left : coords.center, coords.y);
      dashCanvas.lineTo(
        itemInfo.lastItem && !itemInfo.extendToBarsEndings 
          ? coords.center 
          : coords.right,
        coords.y
      );
    }
    
    /**
     * Whether this renderer needs dash offset calculation
     */
    needDashOffset() {
      return true;
    }
  }
  
  // ============================================================================
  // CLASS: BaseDecorationRenderer (g)
  // Base class for diamond decorations
  // ============================================================================
  
  class BaseDecorationRenderer {
    constructor() {
      this._lineWidth = 1;
      this._initialAlpha = 1;
    }
    
    /**
     * Initialize decoration renderer
     */
    initialize(dashCanvas, lineData, renderContext, firstItem) {
      this._initialAlpha = renderContext.context.globalAlpha;
      this.applyColor(renderContext, firstItem.style?.color ?? lineData.lineColor);
      this._lineWidth = Math.max(
        Math.floor(firstItem.style?.width ?? lineData.lineWidth * renderContext.horizontalPixelRatio)
      );
    }
    
    startFragment(dashCanvas, lineData, coords, itemInfo, prevCoords) {
      dashCanvas.beginPath();
    }
    
    finishFragment(dashCanvas, renderContext) {
      renderContext.fill();
    }
    
    /**
     * Draw decoration item with rotation
     */
    drawItem(dashCanvas, renderContext, coords, itemInfo, prevCoords) {
      if (itemInfo.valIsNotSameAsPrev && !isNaN(coords.left)) {
        const ctx = renderContext.context;
        
        ctx.save();
        ctx.translate(coords.left, coords.y);
        ctx.rotate(Math.PI / 4); // 45 degree rotation
        
        const scale = this._scaleByLineWidth(this._lineWidth);
        ctx.scale(scale, scale);
        
        this._drawItemRotatedAndTranslated(renderContext);
        
        ctx.restore();
      }
    }
    
    applyLineWidth(dashCanvas, ctx, width) {
      this._lineWidth = width;
    }
    
    applyLineStyle(dashCanvas, ctx, style) {
      // No line style for decorations
    }
    
    hitTest(lineData, currentItem, nextItem, hitPoint) {
      if (!currentItem.valIsNotSameAsPrev) {
        return false;
      }
      
      const offset = hitPoint.subtract(pointUtils.point(currentItem.left, currentItem.y));
      return this._hitTestTranslated(offset, currentItem.style?.width ?? lineData.lineWidth);
    }
    
    needDashOffset() {
      return false;
    }
    
    /**
     * Scale factor based on line width
     */
    _scaleByLineWidth(lineWidth) {
      return Math.sqrt(lineWidth);
    }
  }
  
  // ============================================================================
  // CLASS: SmallDiamondRenderer (f)
  // Renders small diamond decorations (8px)
  // ============================================================================
  
  class SmallDiamondRenderer extends BaseDecorationRenderer {
    applyColor(renderContext, color) {
      colorUtils.applyColor(renderContext, color, 1, 2);
    }
    
    _hitTestTranslated(offset, lineWidth) {
      // Manhattan distance check for rotated square
      return Math.abs(offset.x) + Math.abs(offset.y) < 
             8 * this._scaleByLineWidth(lineWidth) / 2;
    }
    
    _drawItemRotatedAndTranslated(renderContext) {
      // Draw 8x8 rounded rectangle (diamond when rotated)
      shapeDrawing.drawRoundRect(renderContext.context, -4, -4, 8, 8, 2, true);
    }
  }
  
  // ============================================================================
  // CLASS: LargeDiamondRenderer (y)
  // Renders large semi-transparent diamond decorations (21px)
  // ============================================================================
  
  class LargeDiamondRenderer extends BaseDecorationRenderer {
    applyColor(renderContext, color) {
      renderContext.context.globalAlpha = 0.15 * this._initialAlpha;
      colorUtils.applyColor(renderContext, color, 1, 2);
    }
    
    _hitTestTranslated(offset, lineWidth) {
      return Math.abs(offset.x) + Math.abs(offset.y) < 
             21 * this._scaleByLineWidth(lineWidth) / 2;
    }
    
    _drawItemRotatedAndTranslated(renderContext) {
      // Draw 21x21 rounded rectangle (large diamond when rotated)
      shapeDrawing.drawRoundRect(renderContext.context, -10.5, -10.5, 21, 21, 5, true);
    }
  }
  
  // ============================================================================
  // CLASS: PaneRendererStepLine (v)
  // Main pane renderer for step lines with optional diamond decorations
  // Extends BitmapCoordinatesPaneRenderer
  // ============================================================================
  
  class PaneRendererStepLine extends BitmapRenderer.BitmapCoordinatesPaneRenderer {
    constructor(data) {
      super();
      this._data = null;
      this._data = data ?? null;
    }
    
    setData(data) {
      this._data = data;
    }
    
    /**
     * Hit test for entire step line
     */
    hitTest(hitPoint) {
      const data = this._data;
      
      if (data === null || data.items.length === 0) {
        return null;
      }
      
      const { items, visibleItemsRange, skipHoles } = data;
      const startIndex = visibleItemsRange?.startItemIndex ?? 0;
      const endIndex = visibleItemsRange?.endItemIndex ?? items.length;
      
      if (endIndex <= startIndex) {
        return null;
      }
      
      // Select appropriate hit testers based on decoration type
      const hitTesters = data.decoration === StepLineDecoration.Diamonds
        ? [new BaseLineRenderer(), new LargeDiamondRenderer()]
        : [new BaseLineRenderer()];
      
      // Iterate through line items
      const iterator = new lineIterator.PaneRendererLineItemsIterator(
        items, startIndex, endIndex, skipHoles
      );
      
      while (iterator.next()) {
        const currentItem = iterator.currentValue();
        const nextItem = iterator.nextValue();
        
        for (const tester of hitTesters) {
          if (lineIterator.isValidPoint(currentItem) &&
              tester.hitTest(data, currentItem, 
                            lineIterator.isValidPoint(nextItem) ? nextItem : null, 
                            hitPoint)) {
            return new HitTestResult.HitTestResult(HitTestResult.HitTarget.Regular);
          }
        }
      }
      
      return null;
    }
    
    /**
     * Internal draw implementation
     */
    _drawImpl(renderContext) {
      if (this._data === null || this._data.items.length === 0) {
        return;
      }
      
      const renderers = this._data.decoration === StepLineDecoration.Diamonds
        ? [new BaseLineRenderer(true), new SmallDiamondRenderer(), new LargeDiamondRenderer()]
        : [new BaseLineRenderer()];
      
      renderers.forEach(renderer => this._drawDecorationItem(renderContext, renderer));
    }
    
    /**
     * Draw a single decoration type (base line + optional diamonds)
     * @param {RenderContext} renderContext - Rendering context
     * @param {BaseLineRenderer|BaseDecorationRenderer} renderer - Renderer to use
     * @param {boolean} measureOnly - If true, only measure dash pattern (don't draw)
     */
    _drawDecorationItem(renderContext, renderer, measureOnly) {
      const data = this._data;
      
      if (data === null || data.items.length === 0) {
        return { distance: 0, dashPattern: [] };
      }
      
      const {
        lineWidth,
        lineColor,
        lineStyle,
        items,
        visibleItemsRange,
        skipHoles,
        extendToBarsEndings
      } = data;
      
      const {
        context: ctx,
        horizontalPixelRatio: hRatio,
        verticalPixelRatio: vRatio
      } = renderContext;
      
      let isDrawing = false;
      let lineWidthPixels = Math.max(Math.floor((items[0].style?.width ?? lineWidth) * hRatio));
      const pixelOffset = lineWidthPixels % 2 ? 0.5 : 0;
      
      const startIndex = visibleItemsRange?.startItemIndex ?? 0;
      const endIndex = visibleItemsRange?.endItemIndex ?? items.length;
      
      if (endIndex <= startIndex) {
        return { distance: 0, dashPattern: [] };
      }
      
      // Use SmartDashCanvas for dashed line support
      const smartDash = new dashCanvas.SmartDashCanvas(ctx, !!measureOnly);
      
      let prevCoords, prevColor, prevWidth, prevStyle;
      let dashOffsetAccumulator = 0;
      let hasGap = false;
      
      // Pre-calculate dash offset if needed
      if (!measureOnly && renderer.needDashOffset()) {
        const { distance, dashPattern } = this._drawDecorationItem(renderContext, renderer, true);
        const patternSum = arrayUtils.sum(dashPattern);
        
        if (patternSum > 0) {
          const remainder = distance % patternSum;
          ctx.lineDashOffset = dashOffsetAccumulator = patternSum - remainder - dashPattern[1];
        }
      }
      
      // Initialize renderer
      renderer.initialize(smartDash, data, renderContext, items[startIndex]);
      renderer.applyColor(renderContext, items[startIndex].style?.color ?? lineColor);
      renderer.applyLineWidth(smartDash, ctx, lineWidthPixels);
      renderer.applyLineStyle(smartDash, ctx, lineStyle);
      
      // Iterate through all items
      const iterator = new lineIterator.PaneRendererLineItemsIterator(
        items, startIndex, endIndex, skipHoles
      );
      
      while (iterator.next()) {
        const item = iterator.currentValue();
        
        // Handle invalid/unplottable points
        if (!lineIterator.isValidPoint(item)) {
          prevCoords = undefined;
          hasGap = true;
          continue;
        }
        
        // Extract item properties
        const color = item.style?.color ?? lineColor;
        const width = item.style?.width ?? lineWidth;
        const style = item.style?.style ?? lineStyle;
        
        // Detect property changes
        const colorChanged = color !== prevColor;
        const widthChanged = width !== prevWidth;
        const styleChanged = style !== prevStyle;
        
        // Build coordinate and info objects
        const itemInfo = {
          firstItem: iterator.currentValueIsFirst(),
          lastItem: iterator.currentValueIsLast(),
          extendToBarsEndings: extendToBarsEndings,
          valIsNotSameAsPrev: item.valIsNotSameAsPrev
        };
        
        const coords = {
          y: Math.round(item.y * vRatio) + pixelOffset,
          left: Math.round(item.left * hRatio) + pixelOffset,
          center: Math.round(item.center * hRatio) + pixelOffset,
          right: Math.round(item.right * hRatio) + pixelOffset
        };
        
        // Handle style/property changes - finish old fragment, start new one
        if (colorChanged || widthChanged || hasGap || styleChanged) {
          // Finish previous fragment if exists
          if (prevColor && prevWidth && isDrawing) {
            renderer.finishFragment(smartDash, renderContext, coords, prevCoords);
            isDrawing = false;
          }
          
          // Apply new properties
          if (colorChanged) {
            renderer.applyColor(renderContext, color);
          }
          
          if (widthChanged) {
            lineWidthPixels = Math.max(1, Math.floor(width * hRatio));
            const newOffset = lineWidthPixels % 2 ? 0.5 : 0;
            renderer.applyLineWidth(smartDash, ctx, lineWidthPixels);
          }
          
          if (styleChanged) {
            renderer.applyLineStyle(smartDash, ctx, style);
          }
          
          // Update dash offset for non-measure passes
          if (!measureOnly) {
            const segmentDistance = smartDash.lastSegmentDistance();
            const dashPattern = smartDash.lastSegmentDashPattern();
            const patternSum = arrayUtils.sum(dashPattern);
            
            if (patternSum > 0) {
              const remainder = segmentDistance % patternSum;
              ctx.lineDashOffset = remainder + dashOffsetAccumulator;
            }
          }
          
          // Start new fragment
          renderer.startFragment(smartDash, renderContext, coords, itemInfo, prevCoords);
          isDrawing = true;
          hasGap = false;
          
          // Store current state
          prevColor = color;
          prevWidth = width;
          prevStyle = style;
        }
        
        // Draw the item
        renderer.drawItem(smartDash, renderContext, coords, itemInfo, prevCoords);
        prevCoords = coords;
      }
      
      // Finish last fragment if still drawing
      if (isDrawing) {
        renderer.finishFragment(smartDash, renderContext);
      }
      
      return {
        distance: smartDash.lastSegmentDistance(),
        dashPattern: smartDash.lastSegmentDashPattern()
      };
    }
  }
}
