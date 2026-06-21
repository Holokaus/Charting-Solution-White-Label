/**
 * Module 11502: Pane Management System
 * 
 * Manages multiple panes in the chart layout, including the main price pane
 * and indicator sub-panes. Handles pane creation, deletion, resizing,
 * and synchronization of cross-pane interactions.
 * 
 * @module 11502
 * @namespace PaneManager
 */

/**
 * Represents a single pane in the chart layout.
 * @typedef {Object} ChartPane
 * @property {string} id - Unique pane identifier.
 * @property {number} height - Height in pixels.
 * @property {number} top - Top offset from chart top.
 * @property {boolean} isMain - Whether this is the main price pane.
 * @property {Array} sources - Data sources attached to this pane.
 * @property {Object} state - Current pane state (zoom, scroll, etc.).
 */

/**
 * Configuration for creating a new pane.
 * @typedef {Object} PaneConfig
 * @property {boolean} [isMain=false] - Is this the main pane?
 * @property {number} [height=100] - Initial height in pixels.
 * @property {string} [title] - Optional pane title.
 */

/**
 * Main pane management class.
 * @class
 */
export class PaneManager {
    constructor(chartWidget) {
        /** @private */
        this._chartWidget = chartWidget;
        
        /** @private */
        this._panes = new Map();
        
        /** @private */
        this._mainPaneId = 'main';
        
        /** @private */
        this._minPaneHeight = 50;
        
        /** @private */
        this._maxPanes = 8;
        
        // Initialize main pane
        this._createMainPane();
    }

    /**
     * Creates the initial main price pane.
     * @private
     */
    _createMainPane() {
        const mainPane = {
            id: this._mainPaneId,
            height: 400,
            top: 0,
            isMain: true,
            sources: [],
            state: {
                zoom: 1,
                scroll: 0,
                autoScale: true
            },
            title: 'Price'
        };
        
        this._panes.set(this._mainPaneId, mainPane);
    }

    /**
     * Creates a new pane for an indicator or secondary chart.
     * 
     * @param {PaneConfig} config - Pane configuration.
     * @returns {ChartPane|null} The created pane or null if failed.
     */
    createPane(config = {}) {
        if (this._panes.size >= this._maxPanes) {
            console.warn('Maximum number of panes reached');
            return null;
        }

        const paneId = `pane_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const height = Math.max(config.height || 100, this._minPaneHeight);

        const newPane = {
            id: paneId,
            height,
            top: 0, // Will be calculated in recalculateLayout
            isMain: false,
            sources: [],
            state: {
                zoom: 1,
                scroll: 0,
                autoScale: true
            },
            title: config.title || 'Indicator'
        };

        this._panes.set(paneId, newPane);
        this.recalculateLayout();
        
        return newPane;
    }

    /**
     * Removes a pane from the chart.
     * 
     * @param {string} paneId - ID of pane to remove.
     * @returns {boolean} True if successfully removed.
     */
    removePane(paneId) {
        if (paneId === this._mainPaneId) {
            console.error('Cannot remove main price pane');
            return false;
        }

        if (!this._panes.has(paneId)) {
            return false;
        }

        const pane = this._panes.get(paneId);
        
        // Clean up sources attached to this pane
        pane.sources.forEach(source => {
            if (source.detachFromPane) {
                source.detachFromPane(paneId);
            }
        });

        this._panes.delete(paneId);
        this.recalculateLayout();
        
        return true;
    }

    /**
     * Gets a pane by ID.
     * 
     * @param {string} paneId - Pane identifier.
     * @returns {ChartPane|undefined}
     */
    getPane(paneId) {
        return this._panes.get(paneId);
    }

    /**
     * Gets all panes in order (top to bottom).
     * 
     * @returns {ChartPane[]}
     */
    getAllPanes() {
        return Array.from(this._panes.values());
    }

    /**
     * Gets only the main price pane.
     * 
     * @returns {ChartPane}
     */
    getMainPane() {
        return this._panes.get(this._mainPaneId);
    }

    /**
     * Resizes a pane to a new height.
     * 
     * @param {string} paneId - Pane to resize.
     * @param {number} newHeight - New height in pixels.
     * @returns {boolean} Success status.
     */
    resizePane(paneId, newHeight) {
        if (!this._panes.has(paneId)) return false;

        const pane = this._panes.get(paneId);
        const clampedHeight = Math.max(newHeight, this._minPaneHeight);
        
        pane.height = clampedHeight;
        this.recalculateLayout();
        
        return true;
    }

    /**
     * Recalculates the layout (top positions) of all panes.
     */
    recalculateLayout() {
        let currentTop = 0;
        
        // Main pane always first
        const mainPane = this._panes.get(this._mainPaneId);
        if (mainPane) {
            mainPane.top = currentTop;
            currentTop += mainPane.height;
        }

        // Other panes follow
        this._panes.forEach((pane, id) => {
            if (id !== this._mainPaneId) {
                pane.top = currentTop;
                currentTop += pane.height;
            }
        });

        // Notify chart widget of layout change
        if (this._chartWidget && this._chartWidget.onLayoutChanged) {
            this._chartWidget.onLayoutChanged();
        }
    }

    /**
     * Adds a data source to a pane.
     * 
     * @param {string} paneId - Target pane.
     * @param {Object} source - Data source object.
     */
    addSourceToPane(paneId, source) {
        if (!this._panes.has(paneId)) return false;

        const pane = this._panes.get(paneId);
        
        if (!pane.sources.includes(source)) {
            pane.sources.push(source);
            
            if (source.attachToPane) {
                source.attachToPane(paneId);
            }
        }
        
        return true;
    }

    /**
     * Removes a data source from a pane.
     * 
     * @param {string} paneId - Target pane.
     * @param {Object} source - Data source to remove.
     */
    removeSourceFromPane(paneId, source) {
        if (!this._panes.has(paneId)) return false;

        const pane = this._panes.get(paneId);
        const index = pane.sources.indexOf(source);
        
        if (index > -1) {
            pane.sources.splice(index, 1);
            
            if (source.detachFromPane) {
                source.detachFromPane(paneId);
            }
        }
        
        return true;
    }

    /**
     * Synchronizes zoom and scroll across all panes.
     * 
     * @param {string} sourcePaneId - Pane that initiated the sync.
     * @param {Object} state - New state to apply.
     */
    synchronizePanes(sourcePaneId, state) {
        this._panes.forEach((pane, id) => {
            if (id !== sourcePaneId) {
                pane.state = { ...pane.state, ...state };
            }
        });

        // Trigger redraw
        if (this._chartWidget && this._chartWidget.invalidate) {
            this._chartWidget.invalidate();
        }
    }

    /**
     * Moves a pane up or down in the order.
     * 
     * @param {string} paneId - Pane to move.
     * @param {number} direction - 1 for down, -1 for up.
     * @returns {boolean} Success status.
     */
    movePane(paneId, direction) {
        if (paneId === this._mainPaneId) {
            return false; // Cannot move main pane
        }

        const panes = this.getAllPanes();
        const index = panes.findIndex(p => p.id === paneId);
        
        if (index === -1) return false;

        const newIndex = index + direction;
        
        if (newIndex < 1 || newIndex >= panes.length) {
            return false; // Out of bounds
        }

        // Swap positions
        const temp = panes[index];
        panes[index] = panes[newIndex];
        panes[newIndex] = temp;

        // Rebuild map preserving order
        this._panes.clear();
        panes.forEach(pane => this._panes.set(pane.id, pane));

        this.recalculateLayout();
        return true;
    }

    /**
     * Gets the total height of all panes.
     * 
     * @returns {number}
     */
    getTotalHeight() {
        let total = 0;
        this._panes.forEach(pane => {
            total += pane.height;
        });
        return total;
    }

    /**
     * Finds which pane contains a given Y coordinate.
     * 
     * @param {number} y - Y coordinate in pixels.
     * @returns {ChartPane|undefined}
     */
    getPaneByY(y) {
        for (const pane of this._panes.values()) {
            if (y >= pane.top && y < pane.top + pane.height) {
                return pane;
            }
        }
        return undefined;
    }

    /**
     * Clears all non-main panes.
     */
    clearAllPanes() {
        const toRemove = [];
        this._panes.forEach((pane, id) => {
            if (id !== this._mainPaneId) {
                toRemove.push(id);
            }
        });

        toRemove.forEach(id => this.removePane(id));
    }
}

/**
 * Factory function to create a pane manager with default settings.
 * 
 * @param {Object} chartWidget - Parent chart widget.
 * @returns {PaneManager}
 */
export function createPaneManager(chartWidget) {
    return new PaneManager(chartWidget);
}

export default {
    PaneManager,
    createPaneManager
};
