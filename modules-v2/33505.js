/**
 * Module 33505 - Series Base Pane Renderer
 * Base class for series rendering with hit testing support
 * Implements binary search for efficient bar location
 */

// Import dependencies
var HitTestResult = i(2383).HitTestResult;
var HitTarget = i(2383).HitTarget;
var BitmapCoordinatesPaneRenderer = i(10307).BitmapCoordinatesPaneRenderer;

/**
 * PaneRendererSeriesBase - Base renderer for series with hit testing
 * Provides efficient point-in-bar detection using binary search
 */
class PaneRendererSeriesBase extends BitmapCoordinatesPaneRenderer {
    constructor() {
        super();
        this._bars = [];  // Array of bar data to render
    }

    /**
     * Hit test - determine if a point intersects with any rendered bar
     * Uses binary search for O(log n) performance
     * @param {Point} point - The point to test in bitmap coordinates
     * @returns {HitTestResult|null} Hit result or null if no intersection
     */
    hitTest(point) {
        const bars = this._bars;
        
        // Early exit if no bars
        if (bars.length === 0) {
            return null;
        }

        const tolerance = this._getTolerance();
        const firstBar = bars[0];
        const lastBar = bars[bars.length - 1];

        // Quick rejection: check if point is outside bar range (with tolerance)
        if (point.x < firstBar.left - tolerance) {
            return null;
        }
        if (point.x > lastBar.right + tolerance) {
            return null;
        }

        // Binary search to find the bar at this x-coordinate
        let left = 0;
        let right = bars.length - 1;
        let foundIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const bar = bars[mid];

            if (point.x >= bar.left && point.x <= bar.right) {
                foundIndex = mid;
                break;
            }

            if (point.x > bar.right) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // No bar found at this x-coordinate
        if (foundIndex === -1) {
            return null;
        }

        // Check if point is within the found bar's vertical range
        if (this._isPointAtBar(bars[foundIndex], point.y, tolerance)) {
            return this._getHitTest();
        }

        // Check neighboring bars within tolerance (for overlapping or anti-aliased edges)
        let leftNeighbor = foundIndex;
        while (leftNeighbor >= 1 && point.x - bars[leftNeighbor - 1].right < tolerance) {
            leftNeighbor--;
        }

        let rightNeighbor = foundIndex;
        while (rightNeighbor <= bars.length - 2 && bars[rightNeighbor + 1].left - point.x < tolerance) {
            rightNeighbor++;
        }

        // Test all neighbors in the tolerance range
        const startIdx = Math.max(0, leftNeighbor);
        const endIdx = Math.min(bars.length - 1, rightNeighbor);

        for (let i = startIdx; i <= endIdx; i++) {
            if (i !== foundIndex && this._isPointAtBar(bars[i], point.y, tolerance)) {
                return this._getHitTest();
            }
        }

        return null;
    }

    /**
     * Get the hit test result for successful hits
     * Override in subclasses to return specific hit target types
     */
    _getHitTest() {
        return new HitTestResult(HitTarget.Regular);
    }

    /**
     * Check if a point is vertically within a bar's range (with tolerance)
     * @param {Object} bar - Bar data with high, low properties
     * @param {number} y - Y coordinate to test
     * @param {number} tolerance - Tolerance in pixels
     * @returns {boolean} True if point is within bar
     */
    _isPointAtBar(bar, y, tolerance) {
        const top = Math.min(bar.high, bar.low);
        const bottom = Math.max(bar.high, bar.low);
        return (top - tolerance) <= y && y <= (bottom + tolerance);
    }
}

// Export public API
i.d(t, {
    PaneRendererSeriesBase: () => PaneRendererSeriesBase
});
