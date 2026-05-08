/**
 * ============================================================================
 * TRADINGVIEW MODULE 23502 - STUDY PROPERTIES
 * ============================================================================
 *
 * Purpose: Study properties preparation and management
 *
 * Size: 5.8 KB
 *
 * Functions:
 *   - prepareStudyProperties: Prepare study properties
 *   - prepareStudyPropertiesForLoadChart: Prepare properties for load chart
 *
 * Features:
 *   - Study property preparation
 *   - Meta-info version management
 *   - State serialization
 *   - Default value handling
 *   - Property root management
 *
 * Dependencies:
 *   - 16738: Study utilities
 *   - 30551: Study utilities
 *   - 9343: Logger utilities
 *   - 87465: Object cloning
 *   - 19844: Study meta-info
 *   - 69558: Study utilities
 *   - 60973: Study utilities
 *   - 15219: Study versioning
 *   - 37293: Study utilities
 *   - 78176: Study utilities
 *   - 97719: Study utilities
 *   - 4359: Study utilities
 *
 * Exports:
 *   - prepareStudyProperties: Study properties preparation function
 *   - prepareStudyPropertiesForLoadChart: Load chart properties preparation function
 *
 * @module 23502
 * @category Technical Indicators
 * @subcategory Study Properties
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    prepareStudyProperties: () => prepareStudyProperties,
    prepareStudyPropertiesForLoadChart: () => prepareStudyPropertiesForLoadChart
  });

  const studyUtils = moduleRequire(16738),
    studyUtils2 = moduleRequire(30551),
    logger = moduleRequire(9343).getLogger("Chart.Study"),
    objectClone = moduleRequire(87465),
    StudyMetaInfo = moduleRequire(19844),
    studyUtils3 = moduleRequire(69558),
    studyUtils4 = moduleRequire(60973),
    studyVersioning = moduleRequire(15219),
    studyUtils5 = moduleRequire(37293),
    studyUtils6 = moduleRequire(78176),
    studyUtils7 = moduleRequire(97719),
    studyUtils8 = moduleRequire(4359);

  /**
   * Prepare study properties for load chart
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} state - Study state
   * @param {Object} inputs - Study inputs
   * @param {Object} defaults - Study defaults
   * @param {Object} formatter - Study formatter
   * @param {Object} chartStorage - Chart storage instance
   * @returns {Function} Properties preparation function
   */
  function prepareStudyPropertiesForLoadChart(metaInfo, state, inputs, defaults, formatter, chartStorage) {
    return function(metaInfo, state, inputs, defaults, formatter, chartStorage, studyUtils8) {
      const prepareProperties = function(metaInfo, state, inputs, defaults, formatter) {
        // Check version compatibility
        if (metaInfo.version && state.version && metaInfo.version !== state.version) {
          logger.logWarn("Serialized metaInfo version " + metaInfo.version + 
                       " is not equal to the saved state version " + state.version);
        }
        
        const mergedMetaInfo = state || metaInfo;
        const mergedDefaults = objectClone.clone(mergedMetaInfo.defaults) ?? {};
        const propertyRoot = StudyMetaInfo.StudyMetaInfo.getStudyPropertyRootName(mergedMetaInfo);
        const stateRoot = StudyMetaInfo.StudyMetaInfo.getStudyPropertyRootName(metaInfo);
        
        let studyState = createEmptyStudyState();
        
        // Apply defaults and properties
        (0, studyUtils2.default)(studyState, createStudyDefaults(metaInfo));
        (0, studyUtils2.default)(studyState, mergedDefaults);
        (0, studyUtils2.default)(studyState, createFactoryDefaults(propertyRoot));
        (0, studyUtils2.default)(studyState, createStudyInputs(metaInfo, inputs));
        (0, studyUtils2.default)(studyState, createStudyStyles(metaInfo, inputs, stateRoot));
        (0, studyUtils2.default)(studyState, createStudyGraphics(metaInfo, inputs, stateRoot));
        (0, studyUtils2.default)(studyState, metaInfo);
        
        // Update state if formatter provided
        if (void 0 !== formatter) {
          studyState = formatter(studyState, metaInfo, inputs);
        }
        
        // Apply version-specific updates
        if (StudyMetaInfo.StudyMetaInfo.versionOf(metaInfo) >= 1) {
          (0, studyUtils2.default)(studyState, createVersionedProperties(metaInfo, studyState, propertyRoot));
        }
        
        return studyState;
      }(metaInfo, state, inputs, defaults, formatter, studyUtils8);
      
      return studyUtils8.updateStudyState(studyState, metaInfo, state);
    };
  }

  /**
   * Prepare study properties
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} state - Study state
   * @param {Object} inputs - Study inputs
   * @param {Object} defaults - Study defaults
   * @returns {Function} Properties preparation function
   */
  function prepareStudyProperties(metaInfo, state, inputs, defaults) {
    return prepareStudyPropertiesForLoadChart(
      metaInfo, state, inputs, defaults, null, 
      StudyMetaInfo.StudyMetaInfo.getStudyPropertyRootName(metaInfo), null
    );
  }

  /**
   * Create empty study state
   * @returns {Object} Empty study state object
   */
  function createEmptyStudyState() {
    return {};
  }

  /**
   * Create study defaults
   * @param {Object} metaInfo - Study meta-info
   * @returns {Object} Study defaults object
   */
  function createStudyDefaults(metaInfo) {
    return metaInfo.defaults || {};
  }

  /**
   * Create factory defaults
   * @param {string} propertyRoot - Property root name
   * @returns {Object} Factory defaults object
   */
  function createFactoryDefaults(propertyRoot) {
    return (0, studyUtils4.factoryDefaults)(propertyRoot);
  }

  /**
   * Create study inputs
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @returns {Object} Study inputs object
   */
  function createStudyInputs(metaInfo, inputs) {
    return (0, studyUtils3.clone)(metaInfo.defaults);
  }

  /**
   * Create study styles
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @param {string} stateRoot - State root name
   * @returns {Object} Study styles object
   */
  function createStudyStyles(metaInfo, inputs, stateRoot) {
    return (0, studyUtils4.factoryDefaults)(stateRoot);
  }

  /**
   * Create study graphics
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @param {string} stateRoot - State root name
   * @returns {Object} Study graphics object
   */
  function createStudyGraphics(metaInfo, inputs, stateRoot) {
    return (0, studyUtils4.factoryDefaults)(stateRoot);
  }

  /**
   * Create versioned properties
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} studyState - Study state
   * @param {string} propertyRoot - Property root name
   * @returns {Object} Versioned properties object
   */
  function createVersionedProperties(metaInfo, studyState, propertyRoot) {
    return (0, studyUtils5.factoryDefaults)(propertyRoot);
  }

  /**
   * Create study meta-info
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @param {string} stateRoot - State root name
   * @returns {Object} Study meta-info object
   */
  function createStudyMetaInfo(metaInfo, inputs, stateRoot) {
    return (0, studyUtils6.factoryDefaults)(stateRoot);
  }

  /**
   * Create study inputs with meta-info
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @param {string} stateRoot - State root name
   * @returns {Object} Study inputs object
   */
  function createStudyInputsWithMetaInfo(metaInfo, inputs, stateRoot) {
    return (0, studyUtils7.factoryDefaults)(stateRoot);
  }

  /**
   * Create study styles with meta-info
   * @param {Object} metaInfo - Study meta-info
   * @param {Object} inputs - Study inputs
   * @param {string} stateRoot - State root name
   * @returns {Object} Study styles object
   */
  function createStudyStylesWithMetaInfo(metaInfo, inputs, stateRoot) {
    return (0, studyUtils4.factoryDefaults)(stateRoot);
  }
}
