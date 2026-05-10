/**
 * ============================================================================
 * TRADINGVIEW MODULE 19844 - STUDY META-INFO
 * ============================================================================
 *
 * Purpose: Study meta-information management and utilities
 *
 * Size: 9.3 KB
 *
 * Class: StudyMetaInfo
 *   - Manages study metadata and properties
 *   - Handles input and plot definitions
 *   - Provides version management
 *   - Supports study defaults and styles
 *
 * Features:
 *   - Study ID and version management
 *   - Input validation and defaults
 *   - Plot configuration
 *   - Style and graphics management
 *   - Study property utilities
 *
 * Dependencies:
 *   - 83873: Study utilities
 *   - 90054: Study ID utilities
 *   - 87465: Object cloning
 *   - 9343: Study ID utilities
 *   - 4359: Study ID utilities
 *   - 18113: Study ID utilities
 *   - 69422: Study ID utilities
 *   - 60973: Study ID utilities
 *   - 44862: Study ID utilities
 *
 * Exports:
 *   - StudyMetaInfo: Study meta-info class
 *   - getStudyIdWithVersion: Study ID with version function
 *
 * @module 19844
 * @category Technical Indicators
 * @subpackage Meta-Information
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    StudyMetaInfo: () => StudyMetaInfo,
    getStudyIdWithVersion: () => getStudyIdWithVersion
  });

  const studyUtils = moduleRequire(83873),
    studyIdUtils = moduleRequire(90054),
    objectClone = moduleRequire(87465),
    studyIdUtils2 = moduleRequire(9343),
    studyIdUtils3 = moduleRequire(4359),
    studyIdUtils4 = moduleRequire(18113),
    studyIdUtils5 = moduleRequire(69422),
    studyIdUtils6 = moduleRequire(60973),
    studyIdUtils7 = moduleRequire(44862);

  const logger = studyIdUtils2.getLogger("Chart.Study.MetaInfo");
  
  const correlationStudies = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]);
  const emptySet = new Set([]);
  const plotTypes = new Set(["line", "shapes", "chars", "arrows", "alertcondition"]);
  
  const lineToolMappings = new Map([
    ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
    ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"],
    ["VbPAnchored@tv-basicstudies", "linetoolanchoredvp"]
  ]);
  
  const studyIdPattern = /^([^\$]+)\$\d+$/;
  const inputTypes = ["bool", "color", "time", "text_area"];

  /**
   * Get study ID with version
   * @param {Object} study - Study object
   * @returns {string} Study ID with version
   */
  function getStudyIdWithVersion(study) {
    return StudyMetaInfo.cutDollarHash(study.id) + "-" + study.version;
  }

  /**
   * Study meta-information class
   */
  class StudyMetaInfo {
    /**
     * @param {Object} metaInfo - Meta-information object
     * @param {boolean} useVersionFromMetaInfo - Whether to use version from meta-info
     */
    constructor(metaInfo, useVersionFromMetaInfo = true) {
      objectClone.merge(this, {
        palettes: {},
        inputs: [],
        plots: [],
        graphics: {},
        defaults: {}
      }, metaInfo);
      
      const studyId = metaInfo.fullId || metaInfo.id;
      objectClone.merge(this, StudyMetaInfo.parseIdString(studyId));
      this._updateInputDisplayDefaults();
      this.useVersionFromMetaInfo = useVersionFromMetaInfo;
    }

    /**
     * Get default inputs
     * @returns {Array} Array of default input values
     */
    defaultInputs() {
      return this.inputs.map(input => input.defval).filter(studyIdUtils3.isExistent);
    }

    /**
     * Get study state
     * @returns {Object} Study state object
     */
    state() {
      const state = {};
      
      for (const [key, value] of Object.entries(this)) {
        if ("useVersionFromMetaInfo" !== key && this.hasOwnProperty(key)) {
          state[key] = studyIdUtils.default(value, "id" === key ? key + "-" + this.version : key);
        }
      }
      
      return state;
    }

    /**
     * Get symbol input ID
     * @returns {string|null} Symbol input ID or null
     */
    symbolInputId() {
      return this.inputs.find(input => "symbol" === input.type)?.id || null;
    }

    /**
     * Create default values
     */
    createDefaults() {
      if (this.defaults) {
        const defaults = objectClone.clone(this.defaults);
        defaults.precision = "default";
        
        const propertyRoot = StudyMetaInfo.getStudyPropertyRootName(this);
        studyIdUtils6.createDefaults(propertyRoot, defaults);
      }
    }

    /**
     * Remove default values
     */
    removeDefaults() {
      studyIdUtils6.removeDefaults(StudyMetaInfo.getStudyPropertyRootName(this));
    }

    /**
     * Check if plot has force overlay
     * @param {string} plotId - Plot ID to check
     * @returns {boolean} True if plot has force overlay
     */
    isPlotForceOverlay(plotId) {
      const plotStyle = this.styles?.[plotId];
      const plot = this.plots.find(plot => plot.id === plotId);
      
      return !!plotStyle?.forceOverlay || 
             (plot && studyIdUtils5.isOhlcPlot(plot) && this.ohlcPlots?.[plot.target]?.forceOverlay) || 
             !!this.ohlcPlots?.[plotId]?.forceOverlay;
    }

    /**
     * Check if study has force overlay plots
     * @returns {boolean} True if study has force overlay plots
     */
    hasForceOverlayPlots() {
      return this.plots.some(plot => this.isPlotForceOverlay(plot.id)) || 
             Object.values(this.ohlcPlots ?? {}).some(plot => !!plot?.forceOverlay);
    }

    /**
     * Get source IDs by inputs
     * @param {Array} inputs - Input array
     * @param {Object} inputsMap - Input mapping
     * @returns {Array} Array of source IDs
     */
    static getSourceIdsByInputs(inputs, inputsMap) {
      if (!Array.isArray(inputs) || !inputsMap) return [];
      
      const sourceIds = [];
      for (const input of inputs) {
        if (StudyMetaInfo.isSourceInput(input) && studyIdUtils3.default(inputsMap[input.id])) {
          const inputValue = inputsMap[input.id];
          if (inputValue.includes("$")) {
            sourceIds.push(inputValue.split("$")[0]);
          }
        }
      }
      
      return sourceIds;
    }

    /**
     * Check if input is a source input
     * @param {Object} input - Input object
     * @returns {boolean} True if input is a source input
     */
    static isSourceInput(input) {
      return Boolean(input.id && 
             (("source" === input.id || "src" === input.id) && 
              ("text" === input.type || "source" === input.type) ||
              "source" === input.type));
    }

    /**
     * Get source input IDs
     * @param {Object} study - Study object
     * @returns {Array} Array of source input IDs
     */
    static getSourceInputIds(study) {
      const sourceIds = [];
      for (const input of study.inputs) {
        if (StudyMetaInfo.isSourceInput(input)) {
          sourceIds.push(input.id);
        }
      }
      return sourceIds;
    }

    /**
     * Set child study meta-info properties source ID
     * @param {Object} study - Study object
     * @param {string} sourceId - Source ID
     * @param {string} studyId - Study ID
     */
    static setChildStudyMetaInfoPropertiesSourceId(study, sourceId, studyId) {
      // Implementation would set child study properties
    }

    /**
     * Get study ID with latest version
     * @param {Object} metaInfo - Meta-info object
     * @param {boolean} forceUseExclamationMark - Force exclamation mark
     * @returns {string} Study ID with latest version
     */
    static getStudyIdWithLatestVersion(metaInfo, forceUseExclamationMark) {
      // Implementation would get latest version
    }

    /**
     * Parse ID string
     * @param {string} idString - ID string to parse
     * @returns {Object} Parsed ID object
     */
    static parseIdString(idString) {
      // Implementation would parse ID string
    }

    /**
     * Get study property root name
     * @param {Object} study - Study object
     * @returns {string} Property root name
     */
    static getStudyPropertyRootName(study) {
      // Implementation would get property root name
    }

    /**
     * Cut dollar hash from ID
     * @param {string} id - ID string
     * @returns {string} ID without dollar hash
     */
    static cutDollarHash(id) {
      // Implementation would cut dollar hash
    }
  }
}
