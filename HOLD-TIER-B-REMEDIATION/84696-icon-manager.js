/**
 * ============================================================================
 * TRADINGVIEW MODULE 84696 - ICON MANAGER
 * ============================================================================
 *
 * Purpose: Icon management and configuration utilities
 *
 * Size: 2.7 KB
 *
 * Classes:
 *   - IconManager: Icon management class
 *
 * Features:
 *   - Icon configuration and management
 *   - Icon loading and caching
 *   - Icon state management
 *   - Icon rendering support
 *   - Icon metadata handling
 *
 * Dependencies:
 *   - 53573: Icon utilities
 *   - 34369: Canvas utilities
 *   - 39267: Graphics utilities
 *   - 93544: Icon utilities
 *   - 84959: Icon utilities
 *   - 11890: Icon utilities
 *   - 16911: Icon utilities
 *   - 25191: Icon utilities
 *   - 54190: Icon utilities
 *   - 6862: Icon utilities
 *   - 97874: Icon utilities
 *   - 2872: Icon utilities
 *   - 29453: Icon utilities
 *   - 34487: Icon utilities
 *   - 94839: Icon utilities
 *   - 5845: Icon utilities
 *   - 1457: Icon utilities
 *   - 93379: Icon utilities
 *
 * Exports:
 *   - IconManager: Icon manager class
 *
 * @module 84696
 * @category UI System
 * @subpackage Icon Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.iconManager_d(moduleConfig, {
    IconManager: () => IconManager
  });

  const IconUtils = moduleRequire(53573),
    CanvasUtils = moduleRequire(34369),
    GraphicsUtils = moduleRequire(39267),
    IconUtils2 = moduleRequire(93544),
    IconUtils3 = moduleRequire(84959),
    IconUtils4 = moduleRequire(11890),
    IconUtils5 = moduleRequire(16911),
    IconUtils6 = moduleRequire(25191),
    IconUtils7 = moduleRequire(54190),
    IconUtils8 = moduleRequire(6862),
    IconUtils9 = moduleRequire(97874),
    IconUtils10 = moduleRequire(2872),
    IconUtils11 = moduleRequire(29453),
    IconUtils12 = moduleRequire(34487),
    IconUtils13 = moduleRequire(94839),
    IconUtils14 = moduleRequire(5845),
    IconUtils15 = moduleRequire(1457),
    IconUtils16 = moduleRequire(93379);

  /**
   * Icon manager class
   */
  class IconManager {
    constructor() {
      this._icons = new Map();
      this._iconCache = new Map();
      this._iconStates = new Map();
      this._iconMetadata = new Map();
    }

    /**
     * Register icon
     * @param {string} iconId - Icon identifier
     * @param {Object} iconConfig - Icon configuration
     */
    registerIcon(iconId, iconConfig) {
      this._icons.set(iconId, iconConfig);
      this._iconMetadata.set(iconId, {
        id: iconId,
        ...iconConfig
      });
    }

    /**
     * Get icon
     * @param {string} iconId - Icon identifier
     * @returns {Object|null} Icon configuration or null
     */
    getIcon(iconId) {
      return this._icons.get(iconId) || null;
    }

    /**
     * Get icon metadata
     * @param {string} iconId - Icon identifier
     * @returns {Object|null} Icon metadata or null
     */
    getIconMetadata(iconId) {
      return this._iconMetadata.get(iconId) || null;
    }

    /**
     * Set icon state
     * @param {string} iconId - Icon identifier
     * @param {string} state - Icon state
     */
    setIconState(iconId, state) {
      this._iconStates.set(iconId, state);
    }

    /**
     * Get icon state
     * @param {string} iconId - Icon identifier
     * @returns {string|null} Icon state or null
     */
    getIconState(iconId) {
      return this._iconStates.get(iconId) || null;
    }

    /**
     * Load icon
     * @param {string} iconId - Icon identifier
     * @returns {Promise} Icon loading promise
     */
    async loadIcon(iconId) {
      if (this._iconCache.has(iconId)) {
        return this._iconCache.get(iconId);
      }

      const iconConfig = this.getIcon(iconId);
      if (!iconConfig) {
        throw new Error(`Icon ${iconId} not found`);
      }

      // Load icon using icon utilities
      const icon = await IconUtils.loadIcon(iconConfig);
      this._iconCache.set(iconId, icon);
      return icon;
    }

    /**
     * Preload icons
     * @param {Array} iconIds - Array of icon identifiers
     * @returns {Promise} Preload promise
     */
    async preloadIcons(iconIds) {
      const loadPromises = iconIds.map(iconId => this.loadIcon(iconId));
      return Promise.all(loadPromises);
    }

    /**
     * Unload icon
     * @param {string} iconId - Icon identifier
     */
    unloadIcon(iconId) {
      this._iconCache.delete(iconId);
      this._iconStates.delete(iconId);
    }

    /**
     * Clear icon cache
     */
    clearCache() {
      this._iconCache.clear();
    }

    /**
     * Get all icons
     * @returns {Array} Array of all icon configurations
     */
    getAllIcons() {
      return Array.from(this._icons.entries()).map(([id, config]) => ({
        id,
        ...config
      }));
    }

    /**
     * Get all icon states
     * @returns {Array} Array of all icon states
     */
    getAllIconStates() {
      return Array.from(this._iconStates.entries()).map(([id, state]) => ({
        id,
        state
      }));
    }

    /**
     * Destroy icon manager
     */
    destroy() {
      this._icons.clear();
      this._iconCache.clear();
      this._iconStates.clear();
      this._iconMetadata.clear();
    }
  }

  // Export icon manager class
  moduleExports.IconManager = IconManager;
}
