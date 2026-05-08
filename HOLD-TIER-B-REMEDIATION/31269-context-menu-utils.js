/**
 * ============================================================================
 * TRADINGVIEW MODULE 31269 - CONTEXT MENU MANAGER
 * ============================================================================
 *
 * Purpose: Context menu creation and management utilities
 *
 * Size: 3.4 KB
 *
 * Classes:
 *   - ContextMenuManager: Context menu management class
 *
 * Features:
 *   - Context menu item creation
 *   - Action management (sync/async)
 *   - Separator support
 *   - Menu item configuration
 *   - Custom action ID handling
 *
 * Dependencies:
 *   - 12217: Collection utilities
 *   - 41706: Action utilities
 *   - 87713: Action utilities
 *
 * Exports:
 *   - ContextMenuManager: Context menu manager function
 *
 * @module 31269
 * @category UI System
 * @subpackage Context Menu
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.contextMenuManager_d(moduleConfig, {
    ContextMenuManager: () => ContextMenuManager
  });

  const CollectionUtils = moduleRequire(12217),
    ActionUtils = moduleRequire(41706),
    ActionUtils2 = moduleRequire(87713);

  /**
   * Context menu manager class
   */
  class ContextMenuManager {
    constructor() {
      this._menuItems = [];
      this._actions = [];
      this._separators = [];
    }

    /**
     * Create action
     * @param {Object} options - Action options
     * @returns {Object} Action object
     */
    createAction(options) {
      return new ActionUtils.Action({
        actionId: "Chart.CustomActionId",
        options: options
      });
    }

    /**
     * Create async action
     * @param {Function} optionsLoader - Options loader function
     * @returns {Object} Async action object
     */
    createAsyncAction(optionsLoader) {
      return new ActionUtils2.Action({
        actionId: "Chart.CustomActionId",
        options: {},
        optionsLoader: optionsLoader
      });
    }

    /**
     * Create separator
     * @returns {Object} Separator object
     */
    createSeparator() {
      return new ActionUtils2.Separator();
    }

    /**
     * Add menu item
     * @param {Object} menuItem - Menu item object
     */
    addMenuItem(menuItem) {
      this._menuItems.push(menuItem);
    }

    /**
     * Add action
     * @param {Object} action - Action object
     */
    addAction(action) {
      this._actions.push(action);
    }

    /**
     * Add separator
     * @param {Object} separator - Separator object
     */
    addSeparator(separator) {
      this._separators.push(separator);
    }

    /**
     * Get menu items
     * @returns {Array} Array of menu items
     */
    getMenuItems() {
      return [...this._menuItems];
    }

    /**
     * Get actions
     * @returns {Array} Array of actions
     */
    getActions() {
      return [...this._actions];
    }

    /**
     * Get separators
     * @returns {Array} Array of separators
     */
    getSeparators() {
      return [...this._separators];
    }

    /**
     * Clear all menu items
     */
    clear() {
      this._menuItems = [];
      this._actions = [];
      this._separators = [];
    }

    /**
     * Build menu structure
     * @returns {Array} Complete menu structure
     */
    buildMenu() {
      const menu = [];
      
      // Add menu items
      menu.push(...this._menuItems);
      
      // Add actions
      menu.push(...this._actions);
      
      // Add separators
      menu.push(...this._separators);
      
      return menu;
    }

    /**
     * Sort menu items
     * @param {Function} sortFn - Sort function
     */
    sortMenuItems(sortFn) {
      this._menuItems.sort(sortFn);
      this._actions.sort(sortFn);
    }
  }

  // Export context menu manager function
  moduleExports.ContextMenuManager = ContextMenuManager;
}
