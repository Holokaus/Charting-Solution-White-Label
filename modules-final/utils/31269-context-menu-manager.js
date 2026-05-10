/**
 * ============================================================================
 * TRADINGVIEW MODULE 31269 - CONTEXT MENU MANAGER
 * ============================================================================
 *
 * Purpose: Context menu management for chart interactions
 *
 * Size: 3.4 KB
 *
 * Class: ContextMenuManager
 *   - Manages context menu creation and actions
 *   - Handles async action loading
 *   - Provides menu item factories
 *   - Supports external and internal actions
 *
 * Features:
 *   - Async menu action loading
 *   - Action creation utilities
 *   - Menu item management
 *   - External action support
 *
 * Dependencies:
 *   - 12217: Collection utilities
 *   - 41706: Context menu utilities
 *   - 87713: Context menu utilities
 *
 * Exports:
 *   - ContextMenuManager: Context menu manager class
 *
 * @module 31269
 * @category UI System
 * @subpackage Context Menu
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    ContextMenuManager: () => ContextMenuManager
  });

  const collectionUtils = moduleRequire(12217),
    contextMenuUtils = moduleRequire(41706),
    contextMenuUtils2 = moduleRequire(87713);

  /**
   * Context menu manager implementation
   */
  class ContextMenuManager {
    constructor() {
      this._actions = null;
      this._asyncActions = null;
      this._menuItems = [];
    }

    /**
     * Load context menu actions
     * @param {Function} actionsLoader - Actions loader function
     * @param {Object} actionOptions - Action options
     * @returns {Promise} Promise resolving to menu items
     */
    async loadActions(actionsLoader, actionOptions = {}) {
      if (this._actions === null) {
        this._actions = await actionsLoader(actionOptions);
      }
      
      if (this._asyncActions === null) {
        this._asyncActions = await actionsLoader(actionOptions);
      }
      
      return this._menuItems;
    }

    /**
     * Create action menu item
     * @param {Object} action - Action configuration
     * @returns {Object} Menu item object
     */
    createAction(action) {
      return new contextMenuUtils.Action({
        actionId: "Chart.CustomActionId",
        options: action
      });
    }

    /**
     * Create async action menu item
     * @param {Object} action - Action configuration
     * @returns {Object} Menu item object
     */
    createAsyncAction(action) {
      return new contextMenuUtils.Action({
        actionId: "Chart.CustomActionId",
        options: {},
        optionsLoader: action
      });
    }

    /**
     * Create separator menu item
     * @returns {Object} Separator menu item
     */
    createSeparator() {
      return new contextMenuUtils.Separator();
    }

    /**
     * Get menu items
     * @returns {Array} Array of menu items
     */
    getMenuItems() {
      return this._menuItems;
    }

    /**
     * Add menu item
     * @param {Object} menuItem - Menu item to add
     */
    addMenuItem(menuItem) {
      this._menuItems.push(menuItem);
    }

    /**
     * Remove menu item
     * @param {Object} menuItem - Menu item to remove
     */
    removeMenuItem(menuItem) {
      const index = this._menuItems.indexOf(menuItem);
      if (index > -1) {
        this._menuItems.splice(index, 1);
      }
    }

    /**
     * Clear all menu items
     */
    clearMenuItems() {
      this._menuItems = [];
    }

    /**
     * Get action renderer
     * @param {Object} model - Chart model
     * @returns {Object} Context menu renderer
     */
    getActionRenderer(model) {
      if (this._actions === null) {
        return null;
      }

      const findAction = (renderer) => {
        const actionIndex = this._actions.findIndex(action => action.renderer === renderer);
        return actionIndex > -1 ? this._actions[actionIndex] : null;
      };

      const getRenderer = () => {
        const action = findAction(this._actions);
        return action ? action.renderer : null;
      };

      const createRenderer = (action, renderer) => {
        return new contextMenuUtils2.ContextMenuRenderer(action, renderer, getRenderer);
      };

      return new contextMenuUtils2.ContextMenuRenderer(
        this._actions,
        getRenderer,
        createRenderer
      );
    }
  }

  // Export the ContextMenuManager class
  moduleExports.ContextMenuManager = ContextMenuManager;
}
