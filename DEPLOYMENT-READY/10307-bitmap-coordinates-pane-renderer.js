/**
 * Module 10307 - Bitmap Coordinates Pane Renderer
 * 
 * Provides rendering functionality for pane coordinates using bitmap-based rendering.
 * This module handles the conversion between logical and bitmap coordinate spaces
 * for efficient canvas rendering operations.
 * 
 * @module 10307
 * @see CanvasRenderingTarget2D (module 27714)
 */

import { CanvasRenderingTarget2D } from './27714-canvas-rendering-target-2d';

/**
 * BitmapCoordinatesPaneRenderer class
 * 
 * Handles rendering operations in bitmap coordinate space for pane elements.
 * Uses the CanvasRenderingTarget2D to manage coordinate transformations
 * between media size and bitmap size.
 * 
 * @class
 * @description Core renderer for bitmap-based coordinate systems in chart panes
 */
export class BitmapCoordinatesPaneRenderer {
    /**
     * Draw the main content in bitmap coordinate space
     * 
     * @param {CanvasRenderingContext2D} context - The canvas 2D rendering context
     * @param {Object} renderOptions - Rendering configuration options
     * @param {Size} renderOptions.mediaSize - The logical/media size of the rendering area
     * @param {Size} renderOptions.bitmapSize - The actual bitmap pixel dimensions
     * 
     * @example
     * const renderer = new BitmapCoordinatesPaneRenderer();
     * renderer.draw(context, {
     *   mediaSize: { width: 800, height: 600 },
     *   bitmapSize: { width: 1600, height: 1200 }
     * });
     */
    draw(context, renderOptions) {
        const { mediaSize, bitmapSize } = renderOptions;
        const renderingTarget = new CanvasRenderingTarget2D(
            context,
            mediaSize,
            bitmapSize
        );
        
        renderingTarget.useBitmapCoordinateSpace((bitmapContext) => {
            this._drawImpl(bitmapContext);
        });
    }

    /**
     * Draw the background layer in bitmap coordinate space
     * 
     * @param {CanvasRenderingContext2D} context - The canvas 2D rendering context
     * @param {Object} renderOptions - Rendering configuration options
     * @param {Size} renderOptions.mediaSize - The logical/media size of the rendering area
     * @param {Size} renderOptions.bitmapSize - The actual bitmap pixel dimensions
     * 
     * @example
     * const renderer = new BitmapCoordinatesPaneRenderer();
     * renderer.drawBackground(context, {
     *   mediaSize: { width: 800, height: 600 },
     *   bitmapSize: { width: 1600, height: 1200 }
     * });
     */
    drawBackground(context, renderOptions) {
        const { mediaSize, bitmapSize } = renderOptions;
        const renderingTarget = new CanvasRenderingTarget2D(
            context,
            mediaSize,
            bitmapSize
        );
        
        renderingTarget.useBitmapCoordinateSpace((bitmapContext) => {
            this._drawBackgroundImpl(bitmapContext);
        });
    }

    /**
     * Internal implementation for drawing background elements
     * 
     * @protected
     * @param {BitmapCoordinateContext} context - The bitmap coordinate context
     * @description Override this method in subclasses to implement custom background rendering
     */
    _drawBackgroundImpl(context) {
        // Base implementation is empty
        // Subclasses should override to provide specific background rendering logic
    }

    /**
     * Internal implementation for drawing main content
     * 
     * @protected
     * @param {BitmapCoordinateContext} context - The bitmap coordinate context
     * @description Override this method in subclasses to implement custom content rendering
     * @abstract
     */
    _drawImpl(context) {
        // Abstract method - must be implemented by subclasses
        // This is where the actual rendering logic should be placed
    }
}

/**
 * Type Definitions
 * 
 * @typedef {Object} Size
 * @property {number} width - Width in pixels
 * @property {number} height - Height in pixels
 * 
 * @typedef {Object} BitmapCoordinateContext
 * @property {CanvasRenderingContext2D} context - The underlying canvas context
 * @property {Function} translate - Translate coordinate system
 * @property {Function} scale - Scale coordinate system
 * @property {Function} rotate - Rotate coordinate system
 */

/**
 * Export the BitmapCoordinatesPaneRenderer class
 * 
 * @exports BitmapCoordinatesPaneRenderer
 */
export { BitmapCoordinatesPaneRenderer };
