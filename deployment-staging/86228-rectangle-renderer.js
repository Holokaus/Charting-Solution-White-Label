/**
 * Module 86228 - Rectangle Renderer
 * Renders rectangle drawing tools with hit testing and interaction support
 * Used for rectangle annotations, measurement tools, and selection boxes
 */

// Import dependencies
var HitTestTolerance;
(function(HitTestTolerance) {
    HitTestTolerance[HitTestTolerance.HitTestTolerance = 3] = "HitTestTolerance";
})(HitTestTolerance || (HitTestTolerance = {}));

var ensure = i(50151).ensure;
var Point = i(10555).Point;
var box = i(10555).box;
var equalPoints = i(10555).equalPoints;
var pointInBox = i(6453).pointInBox;
var distanceToSegment = i(2624).distanceToSegment;
var generateColor = i(52859).generateColor;
var HitTestResult = i(2383).HitTestResult;
var HitTarget = i(2383).HitTarget;
var LineStyle = i(18330).LineStyle;
var fillRectWithBorder = i(58221).fillRectWithBorder;
var BitmapCoordinatesPaneRenderer = i(10307).BitmapCoordinatesPaneRenderer;

/**
 * RectangleRenderer - Renders rectangle shapes with optional fill and border
 * Supports extended lines, middle line, and comprehensive hit testing
 */
class RectangleRenderer extends BitmapCoordinatesPaneRenderer {
    constructor(forceOverrideTransparency = false) {
        super();
        this._data = null;
        this._forceOverrideTransparency = forceOverrideTransparency;
    }

    /** Set the rectangle data to render */
    setData(data) {
        this._data = data;
    }

    /**
     * Hit test for rectangle
     * Tests: extended edge lines, corner points, middle line, and background fill
     */
    hitTest(point, viewportSize) {
        if (this._data === null || 
            this._data.points.length < 2 || 
            this._data.disableInteractions) {
            return null;
        }

        const viewportWidth = viewportSize.mediaSize.width;
        
        // Calculate bounding box from points
        const boundingBox = box(...this._data.points);
        const topLeft = boundingBox.min;
        const bottomRight = boundingBox.max;
        
        // Define rectangle corners
        const topRight = new Point(bottomRight.x, topLeft.y);
        const bottomLeft = new Point(topLeft.x, bottomRight.y);

        // Test top edge (extended if enabled)
        let hitResult = this._extendAndHitTestLineSegment(
            point, 
            topLeft, 
            topRight, 
            viewportWidth
        );
        if (hitResult !== null) {
            return hitResult;
        }

        // Test bottom edge (extended if enabled)
        hitResult = this._extendAndHitTestLineSegment(
            point, 
            bottomLeft, 
            bottomRight, 
            viewportWidth
        );
        if (hitResult !== null) {
            return hitResult;
        }

        // Test right edge (corner-to-corner)
        let distanceInfo = distanceToSegment(topRight, bottomRight, point);
        if (distanceInfo.distance <= HitTestTolerance.HitTestTolerance) {
            return new HitTestResult(HitTarget.MovePoint);
        }

        // Test left edge (corner-to-corner)
        distanceInfo = distanceToSegment(topLeft, bottomLeft, point);
        if (distanceInfo.distance <= HitTestTolerance.HitTestTolerance) {
            return new HitTestResult(HitTarget.MovePoint);
        }

        // Test middle line if enabled
        if (this._data.middleLine) {
            const center = boundingBox.min.add(boundingBox.max).scaled(0.5);
            hitResult = this._extendAndHitTestLineSegment(
                point,
                new Point(boundingBox.min.x, center.y),
                new Point(boundingBox.max.x, center.y),
                viewportWidth
            );
            if (hitResult !== null) {
                return hitResult;
            }
        }

        // Test background fill if enabled
        if (this._data.fillBackground) {
            return this._hitTestBackground(
                point, 
                topLeft, 
                bottomRight, 
                viewportWidth
            );
        }

        return null;
    }

    /** Get the fill color with transparency applied */
    getColor() {
        const data = ensure(this._data);
        
        if (data.transparency === undefined) {
            return data.backcolor;
        }
        
        return generateColor(
            data.backcolor, 
            data.transparency, 
            this._forceOverrideTransparency
        );
    }

    /** Get the visible segment of the rectangle within viewport */
    visibleRectSegment(viewportSize) {
        const data = this._data;
        if (data === null) {
            return null;
        }

        const boundingBox = box(...data.points);
        const topLeft = boundingBox.min;
        const bottomRight = boundingBox.max;
        
        const viewportWidth = viewportSize.width;
        const viewportHeight = viewportSize.height;

        // Calculate horizontal bounds with extension support
        const leftX = data.extendLeft ? 0 : Math.max(topLeft.x, 0);
        const rightX = data.extendRight ? viewportWidth : Math.min(bottomRight.x, viewportWidth);

        // Check if horizontally visible
        if (leftX > rightX || rightX <= 0 || leftX >= viewportWidth) {
            return null;
        }

        // Calculate vertical bounds
        const topY = Math.max(topLeft.y, 0);
        const bottomY = Math.min(bottomRight.y, viewportHeight);

        // Check if vertically visible
        if (topY > bottomY || bottomY <= 0 || topY >= viewportHeight) {
            return null;
        }

        return [
            new Point(leftX, topY),
            new Point(rightX, bottomY)
        ];
    }

    /** Main drawing implementation */
    _drawImpl(rendererData) {
        if (this._data === null || 
            this._data.points.length < 2 || 
            (this._data.linewidth <= 0 && !this._data.fillBackground)) {
            return;
        }

        const {
            horizontalPixelRatio,
            verticalPixelRatio,
            bitmapSize
        } = rendererData;

        const {
            extendLeft,
            extendRight,
            linewidth,
            middleLine
        } = this._data;

        // Calculate bounding box
        const boundingBox = box(...this._data.points);
        
        // Calculate stroke width in pixels
        const strokeWidth = this._data.linewidth ? 
            Math.max(1, Math.floor(this._data.linewidth * horizontalPixelRatio)) : 0;

        // Get fill color if enabled
        const fillColor = this._data.fillBackground ? this.getColor() : undefined;

        // Calculate border width
        const borderWidth = Math.max(1, Math.floor(horizontalPixelRatio));

        // Calculate extended bounds
        const leftX = extendLeft ? -linewidth : Math.round(boundingBox.min.x * horizontalPixelRatio);
        const rightX = extendRight ? 
            bitmapSize.width + linewidth : 
            Math.round(boundingBox.max.x * horizontalPixelRatio);
        
        const topY = Math.round(boundingBox.min.y * verticalPixelRatio);
        const bottomY = Math.round(boundingBox.max.y * verticalPixelRatio);

        // Draw rectangle with optional fill, border, and middle line
        fillRectWithBorder(
            rendererData,
            leftX,
            topY,
            rightX,
            bottomY,
            borderWidth,
            fillColor !== undefined ? { color: fillColor } : undefined,
            strokeWidth === 0 ? undefined : {
                color: this._data.color,
                lineStyle: this._data.linestyle ?? LineStyle.Solid,
                borderWidth: strokeWidth,
                borderMode: "center",
                rightToLeftStroke: extendLeft && !extendRight
            },
            middleLine ? {
                ...middleLine,
                lineWidth: Math.max(1, Math.floor(middleLine.lineWidth * verticalPixelRatio))
            } : undefined
        );
    }

    /** Test hit on extended line segment */
    _extendAndHitTestLineSegment(point, start, end, viewportWidth) {
        const clippedSegment = this._extendAndClipLineSegment(start, end, viewportWidth);
        
        if (clippedSegment !== null) {
            const distanceInfo = distanceToSegment(
                clippedSegment[0], 
                clippedSegment[1], 
                point
            );
            
            if (distanceInfo.distance <= HitTestTolerance.HitTestTolerance) {
                return new HitTestResult(HitTarget.MovePoint);
            }
        }
        
        return null;
    }

    /** Extend and clip line segment to viewport bounds */
    _extendAndClipLineSegment(start, end, viewportWidth) {
        const data = ensureNotNull(this._data);

        // If points are identical and no extension, no valid segment
        if (equalPoints(start, end) && !data.extendLeft && !data.extendRight) {
            return null;
        }

        // Calculate horizontal bounds
        const minX = Math.min(start.x, end.x);
        const maxX = Math.max(start.x, end.x);
        
        const leftX = data.extendLeft ? 0 : Math.max(minX, 0);
        const rightX = data.extendRight ? viewportWidth : Math.min(maxX, viewportWidth);

        // Check if segment is visible
        if (leftX > rightX || rightX <= 0 || leftX >= viewportWidth) {
            return null;
        }

        // Return extended/clipped segment (horizontal only)
        return [
            new Point(leftX, start.y),
            new Point(rightX, end.y)
        ];
    }

    /** Test hit on background fill area */
    _hitTestBackground(point, topLeft, bottomRight, viewportWidth) {
        const clippedSegment = this._extendAndClipLineSegment(
            topLeft, 
            bottomRight, 
            viewportWidth
        );

        if (clippedSegment !== null) {
            const testBox = box(clippedSegment[0], clippedSegment[1]);
            
            if (pointInBox(point, testBox)) {
                return new HitTestResult(
                    this._data?.backgroundHitTarget ?? HitTarget.MovePointBackground
                );
            }
        }

        return null;
    }
}

// Helper function (should be imported but shown inline for clarity)
function ensureNotNull(value) {
    if (value === null || value === undefined) {
        throw new Error("Value is null");
    }
    return value;
}

// Export public API
i.d(t, {
    HitTestTolerance: () => HitTestTolerance,
    RectangleRenderer: () => RectangleRenderer
});
