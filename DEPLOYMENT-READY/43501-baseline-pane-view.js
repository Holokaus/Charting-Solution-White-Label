/**
 * Module 43501 - Series Baseline Pane View
 * Renders baseline indicator with dual-color fill above/below reference level
 * Commonly used for oscillators and momentum indicators
 */

// Import dependencies
var BaselineLevel;
(function(BaselineLevel) {
    BaselineLevel[BaselineLevel.Top = 0] = "Top";
    BaselineLevel[BaselineLevel.Bottom = 1] = "Bottom";
})(BaselineLevel || (BaselineLevel = {}));

var CompositeRenderer = i(94602).CompositeRenderer;
var Point = i(10555).Point;
var intersectLineSegments = i(48892).intersectLineSegments;
var distanceToSegment = i(2624).distanceToSegment;
var interactionTolerance = i(4539).interactionTolerance;
var lowerbound = i(12217).lowerbound;
var MediaCoordinatesPaneRenderer = i(20820).MediaCoordinatesPaneRenderer;
var HitTestResult = i(2383).HitTestResult;
var HitTarget = i(2383).HitTarget;
var setLineStyle = i(58221).setLineStyle;
var SelectionRenderer = i(45801).SelectionRenderer;
var SeriesSingleLinePaneView = i(73773).SeriesSingleLinePaneView;
var generateColor = i(52859).generateColor;
var coordinateIsValid = i(4539).coordinateIsValid;
var enabled = i(37103).enabled;
var SelectionIndexes = i(13173).SelectionIndexes;

/**
 * BaselineRenderer - Renders the baseline indicator visualization
 * Handles dual-color gradient fills and line stroking
 */
class BaselineRenderer extends MediaCoordinatesPaneRenderer {
    constructor() {
        super();
        this._data = null;
    }

    /** Set the data to render */
    setData(data) {
        this._data = data;
    }

    /**
     * Hit test for baseline indicator
     * Checks distance to both top and bottom line segments
     */
    hitTest(point) {
        if (this._data === null) {
            return null;
        }

        const { items, topLineWidth, bottomLineWidth } = this._data;
        const tolerance = interactionTolerance().series + (topLineWidth + bottomLineWidth) / 4;

        // Binary search to find nearest item
        const index = lowerbound(items, point, (item, x) => item.center <= x);
        const startIndex = Math.max(1, index - 1);
        const endIndex = Math.min(items.length - 1, index + 1);

        // Check distance to line segments in vicinity
        for (let i = startIndex; i <= endIndex; ++i) {
            const prevItem = items[i - 1];
            const currItem = items[i];
            
            const { distance } = distanceToSegment(
                Point(prevItem.center, prevItem.y),
                Point(currItem.center, currItem.y),
                Point(point.x, point.y)
            );

            if (distance <= tolerance) {
                return new HitTestResult(HitTarget.Regular);
            }
        }

        return null;
    }

    /** Main drawing implementation */
    _drawImpl(rendererData) {
        if (this._data === null) {
            return;
        }

        const {
            items,
            baseLevelCoordinate,
            bottom,
            bottomFillColor1,
            bottomFillColor2,
            topFillColor1,
            topFillColor2,
            topLineColor,
            bottomLineColor,
            topLineWidth,
            bottomLineWidth,
            topLineStyle,
            bottomLineStyle
        } = this._data;

        // Validate items array has valid coordinates
        if (!this._hasValidItems(items)) {
            return;
        }

        // Split items into top and bottom sections at baseline
        const { topItems, bottomItems } = this._splitItemsAtBaseline(items, baseLevelCoordinate);

        const ctx = rendererData.context;
        
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Draw top section (above baseline)
        if (topItems.length !== 0) {
            // Fill area
            ctx.beginPath();
            ctx.moveTo(topItems[0].center, baseLevelCoordinate);
            this._makeLine(ctx, topItems, true, BaselineLevel.Top, 0);
            ctx.closePath();
            ctx.fillStyle = this._makeLinearGradient(
                ctx, 
                topFillColor1, 
                topFillColor2, 
                baseLevelCoordinate - bottom, 
                baseLevelCoordinate
            );
            ctx.fill();

            // Stroke line
            ctx.beginPath();
            this._makeLine(ctx, topItems, false, BaselineLevel.Top, 0);
            ctx.lineWidth = topLineWidth;
            ctx.strokeStyle = topLineColor;
            setLineStyle(ctx, topLineStyle);
            ctx.stroke();
        }

        // Draw bottom section (below baseline)
        if (bottomItems.length !== 0) {
            // Fill area
            ctx.beginPath();
            ctx.moveTo(bottomItems[0].center, baseLevelCoordinate);
            this._makeLine(ctx, bottomItems, true, BaselineLevel.Bottom, 1);
            ctx.closePath();
            ctx.fillStyle = this._makeLinearGradient(
                ctx, 
                bottomFillColor1, 
                bottomFillColor2, 
                baseLevelCoordinate, 
                baseLevelCoordinate + bottom
            );
            ctx.fill();

            // Stroke line
            ctx.beginPath();
            this._makeLine(ctx, bottomItems, false, BaselineLevel.Bottom, 1);
            ctx.lineWidth = bottomLineWidth;
            ctx.strokeStyle = bottomLineColor;
            setLineStyle(ctx, bottomLineStyle);
            ctx.stroke();
        }
    }

    /** Check if items array has valid coordinates */
    _hasValidItems(items) {
        if (items.length === 0) {
            return false;
        }

        // Find first valid item
        const firstValidIndex = items.findIndex(item => coordinateIsValid(item.y));
        if (firstValidIndex === -1) {
            return false;
        }

        // Find last valid item
        let lastValidIndex = items.length - 1;
        while (lastValidIndex > firstValidIndex && !coordinateIsValid(items[lastValidIndex].y)) {
            lastValidIndex--;
        }

        return firstValidIndex <= lastValidIndex;
    }

    /** Split items into top and bottom arrays at baseline level */
    _splitItemsAtBaseline(items, baselineY) {
        const topItems = [];
        const bottomItems = [];
        let previousItem = null;

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            const nextItem = items[i + 1] || {};

            if (coordinateIsValid(item.y)) {
                // Item is valid
                if (item.y <= baselineY) {
                    topItems.push(item);
                }
                if (item.y >= baselineY) {
                    bottomItems.push(item);
                }
                previousItem = item;
            } else {
                // Item is invalid (gap in data)
                if (previousItem === null) {
                    continue;
                }
                item = previousItem;

                // Check if line crosses baseline between this and next item
                if (coordinateIsValid(nextItem.y)) {
                    const crossesBaseline = (
                        (item.y > baselineY && nextItem.y < baselineY) ||
                        (item.y < baselineY && nextItem.y > baselineY)
                    );

                    if (crossesBaseline) {
                        // Calculate intersection point with baseline
                        if (Math.abs(item.center - nextItem.center) < 1) {
                            // Vertical line
                            const intersectionPoint = { center: item.center, y: baselineY };
                            topItems.push(intersectionPoint);
                            bottomItems.push(intersectionPoint);
                        } else {
                            // Diagonal line - calculate exact intersection
                            const t = intersectLineSegments(
                                Point(item.center, item.y),
                                Point(nextItem.center, nextItem.y),
                                Point(item.center, baselineY),
                                Point(nextItem.center, baselineY)
                            );

                            if (t !== null) {
                                const intersectionPoint = {
                                    center: item.center + (nextItem.center - item.center) * t,
                                    y: item.y + (nextItem.y - item.y) * t
                                };
                                topItems.push(intersectionPoint);
                                bottomItems.push(intersectionPoint);
                            }
                        }
                    }
                }
            }
        }

        return { topItems, bottomItems };
    }

    /** Build line path from items */
    _makeLine(ctx, items, fillGaps, side, gapMode) {
        if (this._data === null) {
            return;
        }

        // Find first valid item
        const firstValidIndex = items.findIndex(item => coordinateIsValid(item.y));
        if (firstValidIndex === -1) {
            return;
        }

        const { barSpacing, baseLevelCoordinate } = this._data;
        const gapThreshold = 0.25 * barSpacing;
        let previousItem;

        for (let i = firstValidIndex; i < items.length; i++) {
            const item = items[i];
            const nextItem = items[i + 1] || {};

            if (coordinateIsValid(item.y)) {
                // Handle gaps based on side
                if (side === BaselineLevel.Top) {
                    if (previousItem && previousItem.y >= baseLevelCoordinate && item.y >= baseLevelCoordinate) {
                        ctx.moveTo(item.center, item.y);
                        previousItem = item;
                        continue;
                    }
                } else {
                    if (previousItem && previousItem.y <= baseLevelCoordinate && item.y <= baseLevelCoordinate) {
                        ctx.moveTo(item.center, item.y);
                        previousItem = item;
                        continue;
                    }
                }

                // Draw line segment
                if (previousItem && coordinateIsValid(previousItem.y)) {
                    ctx.lineTo(item.center, item.y);
                    
                    // Fill gap if needed
                    if (fillGaps && !coordinateIsValid(nextItem.y)) {
                        ctx.lineTo(item.center, baseLevelCoordinate);
                    }
                } else if (nextItem && coordinateIsValid(nextItem.y)) {
                    // Starting a new segment
                    if (fillGaps) {
                        if (i !== firstValidIndex) {
                            ctx.lineTo(item.center, baseLevelCoordinate);
                        }
                        ctx.lineTo(item.center, item.y);
                    } else {
                        ctx.moveTo(item.center, item.y);
                    }
                } else if (fillGaps) {
                    // Isolated point - draw small horizontal line
                    if (i === firstValidIndex) {
                        continue;
                    }
                    ctx.lineTo(item.center - gapThreshold, baseLevelCoordinate);
                    ctx.lineTo(item.center - gapThreshold, item.y);
                    ctx.lineTo(item.center + gapThreshold, item.y);
                    ctx.lineTo(item.center + gapThreshold, baseLevelCoordinate);
                } else {
                    ctx.moveTo(item.center - gapThreshold, item.y);
                    ctx.lineTo(item.center + gapThreshold, item.y);
                }

                previousItem = item;
            }
        }
    }

    /** Create linear gradient for fill */
    _makeLinearGradient(ctx, color1, color2, y1, y2) {
        const gradient = ctx.createLinearGradient(0, y1, 0, y2);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }
}

/**
 * SeriesBaselinePaneView - Main pane view for baseline indicator
 * Manages data preparation and renderer configuration
 */
class SeriesBaselinePaneView extends SeriesSingleLinePaneView {
    constructor(source, model) {
        super(source, model);
        this._renderer = new BaselineRenderer();
        this._topFillColor1 = "";
        this._topFillColor2 = "";
        this._bottomFillColor1 = "";
        this._bottomFillColor2 = "";
        this._topLineColor = "";
        this._bottomLineColor = "";
        this._topLineWidth = 0;
        this._bottomLineWidth = 0;
        this._topLineStyle = 0;
        this._bottomLineStyle = 0;
        this._barSpacing = 0;
        this._bottom = 0;
        this._baseLevelCoordinate = 0;
        this._isMarkersEnabled = enabled("source_selection_markers");
        this._selectionData = null;
        this._selectionIndexer = new SelectionIndexes(model.timeScale());
    }

    /** Get configured renderer with current data */
    renderer() {
        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }

        // Configure renderer with current data
        this._renderer.setData({
            items: this._items,
            topFillColor1: this._topFillColor1,
            topFillColor2: this._topFillColor2,
            bottomFillColor1: this._bottomFillColor1,
            bottomFillColor2: this._bottomFillColor2,
            topLineColor: this._topLineColor,
            bottomLineColor: this._bottomLineColor,
            topLineWidth: this._topLineWidth,
            bottomLineWidth: this._bottomLineWidth,
            topLineStyle: this._topLineStyle,
            bottomLineStyle: this._bottomLineStyle,
            barSpacing: this._barSpacing,
            baseLevelCoordinate: this._baseLevelCoordinate,
            bottom: this._bottom
        });

        // Build composite renderer with selection overlay if needed
        const compositeRenderer = new CompositeRenderer();
        compositeRenderer.append(this._renderer);

        if (this._model.selection().isSelected(this._source) && 
            this._isMarkersEnabled && 
            this._selectionData) {
            compositeRenderer.append(new SelectionRenderer(this._selectionData));
        }

        return compositeRenderer;
    }

    /** Update internal state from source properties */
    _updateImpl() {
        super._updateImpl();

        const priceScale = this._source.priceScale();
        if (!priceScale) {
            return;
        }

        const props = this._source.properties().childs().baselineStyle.childs();
        const transparency = props.transparency.value();

        // Generate colors with transparency
        this._topFillColor1 = generateColor(props.topFillColor1.value(), transparency);
        this._topFillColor2 = generateColor(props.topFillColor2.value(), transparency);
        this._bottomFillColor1 = generateColor(props.bottomFillColor1.value(), transparency);
        this._bottomFillColor2 = generateColor(props.bottomFillColor2.value(), transparency);

        // Get line properties
        this._topLineColor = props.topLineColor.value();
        this._bottomLineColor = props.bottomLineColor.value();
        this._topLineWidth = props.topLineWidth.value();
        this._bottomLineWidth = props.bottomLineWidth.value();
        this._topLineStyle = props.topLineStyle.value();
        this._bottomLineStyle = props.bottomLineStyle.value();

        // Get layout metrics
        this._barSpacing = this._model.timeScale().barSpacing();
        this._bottom = priceScale.height();
        this._baseLevelCoordinate = Math.round(
            this._bottom * (Math.abs(100 - props.baseLevelPercentage.value()) / 100)
        );
    }
}

// Export public API
i.d(t, {
    BaselineLevel: () => BaselineLevel,
    SeriesBaselinePaneView: () => SeriesBaselinePaneView
});
