/**
 * ============================================================================
 * TRADINGVIEW MODULE 34378 - ANCHORED VWAP STUDY
 * ============================================================================
 *
 * Purpose: Anchored Volume Weighted Average Price (VWAP) study implementation
 *
 * Size: 3.0 KB
 *
 * Classes:
 *   - AnchoredVWAPStudyItem: Anchored VWAP study item
 *
 * Features:
 *   - Anchored VWAP calculation and display
 *   - Study item configuration and properties
 *   - Area background styling support
 *   - Filled areas style management
 *   - Transparency and fill type configuration
 *   - Meta information version compatibility
 *
 * Dependencies:
 *   - 50151: Study utilities
 *   - 9343: Study utilities
 *   - 51768: Study utilities
 *   - 76422: Study utilities
 *   - 38780: Study utilities
 *
 * Exports:
 *   - anchoredVWAPStudyItem: Anchored VWAP study item function
 *
 * @module 34378
 * @category Study System
 * @subpackage VWAP Studies
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.anchoredVWAP_d(moduleConfig, {
    anchoredVWAPStudyItem: () => anchoredVWAPStudyItem
  });

  const StudyUtils = moduleRequire(50151),
    StudyUtils2 = moduleRequire(9343),
    StudyUtils3 = moduleRequire(51768),
    StudyUtils4 = moduleRequire(76422),
    StudyUtils5 = moduleRequire(38780);

  /**
   * Create anchored VWAP study item
   * @param {Object} options - Study options
   * @returns {Object} Anchored VWAP study item
   */
  function anchoredVWAPStudyItem(options = {}) {
    const studyConfig = {
      _metainfoVersion: 51,
      description: "Anchored VWAP",
      shortDescription: "Anchored VWAP",
      format: {
        type: "inherit"
      },
      id: "AnchoredVWAP@tv-basicstudies-1",
      is_hidden_study: false,
      is_price_study: false,
      defaults: {
        areaBackground: {
          backgroundColor: "#4caf50",
          fillBackground: false,
          transparency: 95
        },
        filledAreasStyle: {
          Background_1: {
            fillType: 0,
            transparency: 50
          }
        }
      }
    };

    return {
      ...studyConfig,
      ...options,
      // Add additional properties if provided
      ...(options.defaults || {})
    };
  }

  /**
   * Get study default properties
   * @param {Object} studyConfig - Study configuration
   * @returns {Object} Default properties
   */
  function getStudyDefaults(studyConfig) {
    return {
      areaBackground: {
        backgroundColor: "#4caf50",
        fillBackground: false,
        transparency: 95
      },
      filledAreasStyle: {
        Background_1: {
          fillType: 0,
          transparency: 50
        }
      },
      ...studyConfig.defaults
    };
  }

  /**
   * Validate study configuration
   * @param {Object} studyConfig - Study configuration
   * @returns {boolean} True if valid
   */
  function validateStudyConfig(studyConfig) {
    return StudyUtils.isValidStudyConfig(studyConfig) &&
           StudyUtils2.isValidStudyFormat(studyConfig.format) &&
           StudyUtils3.isValidStudyDefaults(studyConfig.defaults) &&
           StudyUtils4.isValidStudyMetadata(studyConfig);
  }

  /**
   * Merge study configurations
   * @param {Object} baseConfig - Base configuration
   * @param {Object} overrideConfig - Override configuration
   * @returns {Object} Merged configuration
   */
  function mergeStudyConfigs(baseConfig, overrideConfig) {
    return {
      ...baseConfig,
      ...overrideConfig,
      defaults: {
        ...baseConfig.defaults,
        ...overrideConfig.defaults
      }
    };
  }

  // Export the anchored VWAP study item function
  moduleExports.anchoredVWAPStudyItem = anchoredVWAPStudyItem;
  moduleExports.getStudyDefaults = getStudyDefaults;
  moduleExports.validateStudyConfig = validateStudyConfig;
  moduleExports.mergeStudyConfigs = mergeStudyConfigs;
}
