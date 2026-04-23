// Module 72207 - DataSource Base Class
// Parent class for all data sources including PriceDataSource

import { TranslatedString } from './95804-translated-string';
import { TitleDisplayTarget } from './36313-title-display-target';
import { randomHashN } from './4226-random-hash';
import { Delegate } from './48096-delegate';
import { WatchedValue } from './22613-watched-value';
import { InputDisplayFlags } from './69422-input-display-flags';

/**
 * Get translated string for source
 * @param {any} context - Translation context
 * @param {any} nameProvider - Object providing name and title
 * @returns {TranslatedString} Translated string instance
 */
function getTranslatedStringForSource(context, nameProvider) {
    return new TranslatedString(nameProvider.name(), nameProvider.title(context));
}

/**
 * Convert to input display flags based on target
 * @param {TitleDisplayTarget} target - Display target type
 * @returns {InputDisplayFlags} Corresponding input display flags
 */
function toInputDisplayFlags(target) {
    switch (target) {
        case TitleDisplayTarget.DataWindow:
            return InputDisplayFlags.DataWindow;
        case TitleDisplayTarget.StatusLine:
        case TitleDisplayTarget.Alerts:
            return InputDisplayFlags.StatusLine;
        default:
            throw new Error(`Unknown target: ${target}`);
    }
}

/**
 * DataSource - Base class for all chart data sources
 * Provides common functionality for series, indicators, and drawing tools
 */
class DataSource {
    constructor(id) {
        this.isSeries = false;
        this._isDestroyed = false;
        
        // Alert-related watched values
        this._hasAlert = new WatchedValue(false);
        this._alertStatus = new WatchedValue(0);
        this._alertCreationAvailable = new WatchedValue(false);
        
        // Z-order for rendering layering
        this._zorder = 0;
        
        // References to price scale and owner
        this._priceScale = null;
        this._ownerSource = null;
        
        // User interaction settings
        this._userEditEnabled = true;
        
        // Event delegates
        this._priceScaleChanged = new Delegate();
        this._isSelectionEnabled = true;
        this._instanceId = randomHashN(6);
        this._ownerSourceChanged = new Delegate();
        this._zOrderChanged = new Delegate();
        
        // Unique identifier
        this._id = new WatchedValue(id ?? randomHashN(6));
    }

    /**
     * Destroy the data source
     */
    destroy() {
        this._isDestroyed = true;
    }

    /**
     * Get the unique ID
     * @returns {string} Source ID
     */
    id() {
        return this._id.value();
    }

    /**
     * Get readonly watched value for ID
     * @returns {WatchedValue} Readonly ID watcher
     */
    idWV() {
        return this._id.readonly();
    }

    /**
     * Get instance-specific ID (different from logical ID)
     * @returns {string} Instance ID
     */
    instanceId() {
        return this._instanceId;
    }

    /**
     * Check if source prefers no scaling
     * @returns {boolean} Always false for base class
     */
    preferNoScale() {
        return false;
    }

    /**
     * Set the unique ID
     * @param {string} id - New ID value
     */
    setId(id) {
        this._id.setValue(id);
    }

    /**
     * Get Z-order (rendering layer)
     * @returns {number} Current Z-order
     */
    zorder() {
        return this._zorder;
    }

    /**
     * Set Z-order and fire change event
     * @param {number} zorder - New Z-order value
     */
    setZorder(zorder) {
        if (typeof zorder === 'number' && this._zorder !== zorder) {
            this._zorder = zorder;
            this._zOrderChanged.fire(zorder);
        }
    }

    /**
     * Get preferred Z-order
     * @returns {number|null} Preferred Z-order or null
     */
    preferredZOrder() {
        return null;
    }

    /**
     * Check if source has special Z-order requirements
     * @returns {boolean} Always false for base class
     */
    isSpeciallyZOrderedSource() {
        return false;
    }

    /**
     * Get display title (defaults to name)
     * @param {any} context - Context for title generation
     * @returns {string} Display title
     */
    title(context) {
        return this.name();
    }

    /**
     * Get associated price scale
     * @returns {PriceScale|null} Price scale or null
     */
    priceScale() {
        return this._priceScale;
    }

    /**
     * Check if source has a price scale
     * @returns {boolean} True if price scale is assigned
     */
    hasPriceScale() {
        return this._priceScale !== null;
    }

    /**
     * Set price scale and fire change event
     * @param {PriceScale} priceScale - New price scale
     */
    setPriceScale(priceScale) {
        if (this._priceScale !== priceScale) {
            this._priceScale = priceScale;
            this._priceScaleChanged.fire(priceScale);
        }
    }

    /**
     * Get delegate for price scale changes
     * @returns {Delegate} Price scale change delegate
     */
    priceScaleChanged() {
        return this._priceScaleChanged;
    }

    /**
     * Get owner source (for child studies)
     * @returns {DataSource|null} Owner source or null
     */
    ownerSource() {
        return this._ownerSource;
    }

    /**
     * Set owner source and fire change event
     * @param {DataSource} owner - New owner source
     */
    setOwnerSource(owner) {
        const previous = this._ownerSource;
        this._ownerSource = owner;
        this._ownerSourceChanged.fire(previous, owner);
    }

    /**
     * Get delegate for owner source changes
     * @returns {Delegate} Owner source change delegate
     */
    ownerSourceChanged() {
        return this._ownerSourceChanged;
    }

    /**
     * Get delegate for Z-order changes
     * @returns {Delegate} Z-order change delegate
     */
    zOrderChanged() {
        return this._zOrderChanged;
    }

    /**
     * Check if source should be saved in chart layout
     * @returns {boolean} Always true for base class
     */
    isSavedInChart(context) {
        return true;
    }

    /**
     * Check if source should be saved in study templates
     * @returns {boolean} Always true for base class
     */
    isSavedInStudyTemplates() {
        return true;
    }

    /**
     * Check if source can be removed by study templates
     * @returns {boolean} Always true for base class
     */
    isRemovedByStudyTemplates() {
        return true;
    }

    /**
     * Check if source has context menu
     * @returns {boolean} Always true for base class
     */
    hasContextMenu() {
        return true;
    }

    /**
     * Check if source should appear in object tree
     * @returns {boolean} Always true for base class
     */
    showInObjectTree() {
        return true;
    }

    /**
     * Enable/disable user editing
     * @param {boolean} enabled - Whether user editing is enabled
     */
    setUserEditEnabled(enabled) {
        this._userEditEnabled = enabled;
    }

    /**
     * Check if user editing is enabled
     * @returns {boolean} User edit enabled status
     */
    userEditEnabled() {
        return this._userEditEnabled;
    }

    /**
     * Check if source can be hidden
     * @returns {boolean} True if user editing is enabled
     */
    canBeHidden() {
        return this.userEditEnabled();
    }

    /**
     * Check if source can be deleted by user
     * @returns {boolean} True if user editing is enabled
     */
    isUserDeletable() {
        return this.userEditEnabled();
    }

    /**
     * Get properties object (override in subclasses)
     * @returns {object|null} Properties or null
     */
    properties() {
        return null;
    }

    /**
     * Get property by dot-separated path
     * @param {string} path - Property path (e.g., "properties.visible")
     * @returns {any} Property value
     * @throws {Error} If path is invalid or root is unknown
     */
    propertyByPath(path) {
        const parts = path.split('.');
        if (parts.length < 1) {
            throw new Error('Invalid path');
        }
        
        const root = parts[0];
        if (root === 'properties') {
            const props = this.properties();
            if (parts.length === 1) {
                return props;
            }
            return props.childByPath(parts.slice(1).join('.'));
        }
        
        throw new Error(`Unknown property root: ${root}`);
    }

    /**
     * Check if source is visible
     * @returns {boolean} Visibility status
     */
    isVisible() {
        return this.properties().visible.value();
    }

    /**
     * Get data window view (override in subclasses)
     * @returns {any} Data window view or null
     */
    dataWindowView() {
        return null;
    }

    /**
     * Get price axis views (override in subclasses)
     * @returns {any} Price axis views or null
     */
    priceAxisViews(context, options) {
        return null;
    }

    /**
     * Get time axis views (override in subclasses)
     * @returns {any} Time axis views or null
     */
    timeAxisViews() {
        return null;
    }

    /**
     * Update all views (override in subclasses)
     * @param {any} context - Update context
     */
    updateAllViews(context) {
        // Override in subclasses
    }

    /**
     * Get pane views (override in subclasses)
     * @returns {any} Pane views or null
     */
    paneViews(context) {
        return null;
    }

    /**
     * Get label pane views (override in subclasses)
     * @returns {any} Label pane views or null
     */
    labelPaneViews(context) {
        return null;
    }

    /**
     * Check if source failed to load
     * @returns {boolean} Always false for base class
     */
    isFailed() {
        return false;
    }

    /**
     * Check if source is loading
     * @returns {boolean} Always false for base class
     */
    isLoading() {
        return false;
    }

    /**
     * Check if source is phantom (temporary)
     * @returns {boolean} Always false for base class
     */
    isPhantom() {
        return false;
    }

    /**
     * Check if source is a child study
     * @returns {boolean} Always false for base class
     */
    isChildStudy() {
        return false;
    }

    /**
     * Check if source has children
     * @returns {boolean} Always false for base class
     */
    hasChildren() {
        return false;
    }

    /**
     * Check if source can have children
     * @returns {boolean} Always false for base class
     */
    canHaveChildren() {
        return false;
    }

    /**
     * Handle click outside source
     * @param {MouseEvent} event - Mouse event
     * @param {any} point - Click point
     */
    onClickOutside(event, point) {
        // Override in subclasses
    }

    /**
     * Get source icon
     * @returns {string|null} Icon URL or null
     */
    getSourceIcon() {
        return null;
    }

    /**
     * Get state for persistence (override in subclasses)
     * @returns {any} State object or null
     */
    state(context) {
        return null;
    }

    /**
     * Check if moving affects undo stack
     * @returns {boolean} Always true for base class
     */
    doesMovingAffectsUndo() {
        return true;
    }

    /**
     * Check if multi-pane mode is available
     * @returns {boolean} Always false for base class
     */
    isMultiPaneAvailable() {
        return false;
    }

    /**
     * Check if multi-pane mode is enabled
     * @returns {boolean} Always false for base class
     */
    isMultiPaneEnabled() {
        return false;
    }

    /**
     * Check if source can be copied
     * @returns {boolean} Always false for base class
     */
    copiable() {
        return false;
    }

    /**
     * Check if source can be cloned
     * @returns {boolean} Always false for base class
     */
    cloneable() {
        return false;
    }

    /**
     * Check if source can be moved
     * @returns {boolean} Always false for base class
     */
    movable() {
        return false;
    }

    /**
     * Check if source allows moving between panes
     * @returns {boolean} Always true for base class
     */
    allowsMovingBetweenPanes() {
        return true;
    }

    /**
     * Check if source is included in auto-scale calculation
     * @returns {boolean} Always false for base class
     */
    isIncludedInAutoScale() {
        return false;
    }

    /**
     * Check if hovering is enabled
     * @returns {boolean} True if selection is enabled
     */
    isHoveredEnabled() {
        return this.isSelectionEnabled();
    }

    /**
     * Check if source should show on top when hovered
     * @returns {boolean} Always true for base class
     */
    showOnTopOnHovering() {
        return true;
    }

    /**
     * Check if selection is enabled
     * @returns {boolean} Selection enabled status
     */
    isSelectionEnabled() {
        return this._isSelectionEnabled;
    }

    /**
     * Enable/disable selection
     * @param {boolean} enabled - Whether selection is enabled
     */
    setSelectionEnabled(enabled) {
        this._isSelectionEnabled = enabled;
    }

    /**
     * Get first value (override in subclasses)
     * @returns {any} First value or null
     */
    firstValue() {
        return null;
    }

    /**
     * Get price range (override in subclasses)
     * @returns {any} Price range or null
     */
    priceRange(context, options, flags) {
        return null;
    }

    /**
     * Get auto-scale info
     * @returns {object} Auto-scale information with range
     */
    autoScaleInfo(context, options, flags) {
        return {
            range: this.priceRange(context, options, flags)
        };
    }

    /**
     * Get state for alerts (override in subclasses)
     * @returns {any} Alert state or null
     */
    stateForAlert() {
        return null;
    }

    /**
     * Get async state for alerts
     * @returns {Promise<any>} Promise resolving to alert state
     */
    async stateForAlertAsync() {
        return this.stateForAlert();
    }

    /**
     * Check if source can have alerts
     * @returns {boolean} Always false for base class
     */
    canHasAlert() {
        return false;
    }

    /**
     * Check if line tools can have alerts
     * @returns {boolean} Always false for base class
     */
    canHasAlertOnLineTools() {
        return false;
    }

    /**
     * Get watched value for alert existence
     * @returns {WatchedValue} Readonly alert watcher
     */
    hasAlert() {
        return this._hasAlert.readonly();
    }

    /**
     * Get watched value for alert creation availability
     * @returns {WatchedValue} Readonly alert creation watcher
     */
    alertCreationAvailable() {
        return this._alertCreationAvailable.readonly();
    }

    /**
     * Check if source has state for alerts
     * @returns {boolean} Always false for base class
     */
    hasStateForAlert() {
        return false;
    }

    /**
     * Get ID for alerts
     * @returns {string} Source ID
     */
    idForAlert() {
        return this._id.value();
    }

    /**
     * Get watched value for alert status
     * @returns {WatchedValue} Readonly alert status watcher
     */
    alertStatus() {
        return this._alertStatus.readonly();
    }

    /**
     * Internal method to get alert creation availability
     * @returns {boolean} Always false for base class
     */
    _getAlertCreationAvailable() {
        return false;
    }

    /**
     * Internal method to update alert creation availability
     */
    _updateAlertCreationAvailable() {
        // No-op in base class
    }
}

export { DataSource, getTranslatedStringForSource, toInputDisplayFlags };
