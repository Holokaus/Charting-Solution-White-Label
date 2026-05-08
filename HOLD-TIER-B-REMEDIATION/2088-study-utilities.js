/**
 * ============================================================================
 * TRADINGVIEW MODULE 2088 - STUDY UTILITIES
 * ============================================================================
 *
 * Purpose: Study creation and management utilities
 *
 * Size: 6.2 KB
 *
 * Functions:
 *   - createStudy: Create study instance
 *   - hasConfirmInputs: Check if study has confirm inputs
 *   - hasPendingStudiesModuleLoading: Check for pending module loading
 *   - isCompareOrOverlayStudy: Check if study is compare or overlay
 *   - isESDStudy: Check if study is ESD type
 *   - isFundamentalStudy: Check if study is fundamental
 *   - isOverlayStudy: Check if study is overlay
 *   - isStudy: Check if object is a study
 *   - isStudyStrategy: Check if study is strategy
 *   - isStudyStub: Check if study is stub
 *   - isSymbolicStudy: Check if study is symbolic
 *   - studyColorRotationMode: Get color rotation mode
 *   - useSameColorRotationComparator: Use same color rotation comparator
 *
 * Features:
 *   - Study type checking utilities
 *   - Study creation with async loading
 *   - Study information mapping
 *   - Color rotation management
 *
 * Dependencies:
 *   - 88987: Study utilities
 *   - 50151: Assertion utilities
 *   - 37103: Feature flags
 *   - 19844: Study meta-info
 *   - 2258: Study utilities
 *
 * Exports:
 *   - createStudy: Study creation function
 *   - hasConfirmInputs: Confirm inputs check function
 *   - hasPendingStudiesModuleLoading: Pending loading check function
 *   - isCompareOrOverlayStudy: Compare/overlay check function
 *   - isESDStudy: ESD check function
 *   - isFundamentalStudy: Fundamental check function
 *   - isOverlayStudy: Overlay check function
 *   - isStudy: Study check function
 *   - isStudyStrategy: Strategy check function
 *   - isStudyStub: Stub check function
 *   - isSymbolicStudy: Symbolic check function
 *   - studyColorRotationMode: Color rotation mode function
 *   - useSameColorRotationComparator: Same color rotation comparator function
 *
 * @module 2088
 * @category Technical Indicators
 * @subcategory Study Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    createStudy: () => createStudy,
    hasConfirmInputs: () => hasConfirmInputs,
    hasPendingStudiesModuleLoading: () => hasPendingStudiesModuleLoading,
    isCompareOrOverlayStudy: () => isCompareOrOverlayStudy,
    isESDStudy: () => isESDStudy,
    isFundamentalStudy: () => isFundamentalStudy,
    isOverlayStudy: () => isOverlayStudy,
    isStudy: () => isStudy,
    isStudyStrategy: () => isStudyStrategy,
    isStudyStub: () => isStudyStub,
    isSymbolicStudy: () => isSymbolicStudy,
    studyColorRotationMode: () => studyColorRotationMode,
    useSameColorRotationComparator: () => useSameColorRotationComparator
  });

  const studyUtils = moduleRequire(88987),
    assertionUtils = moduleRequire(50151),
    featureFlags = moduleRequire(37103),
    StudyMetaInfo = moduleRequire(19844),
    studyUtils2 = moduleRequire(2258);

  const internalStudyPrefix = "study_Internal$STD;Fund_";

  /**
   * Get internal study name
   * @param {Object} study - Study object
   * @returns {string} Internal study name
   */
  function getInternalStudyName(study) {
    const studyName = "study_" + (study.classId || study.shortId);
    return studyName.startsWith(internalStudyPrefix) ? internalStudyPrefix : studyName;
  }

  // Study creation utilities
  const studyInfoCreator = studyUtils2.createStudyInfo;

  // Study information mappings
  studyInfoCreator.addStudyInfoToMap("Study", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 11485)).then(study => study.Study));

  studyInfoCreator.addStudyInfoToMap("study_PivotPointsStandard", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 96664)).then(study => study.study_PivotPointsStandard)));

  studyInfoCreator.addStudyInfoToMap("study_Overlay", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 34771)).then(study => study.study_Overlay)));

  studyInfoCreator.addStudyInfoToMap("study_Compare", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 55456)).then(study => study.StudyCompare)));

  studyInfoCreator.addStudyInfoToMap("study_Volume", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 51106)).then(study => study.VolumeStudy)));

  studyInfoCreator.addStudyInfoToMap("study_VbPVisible", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 10635)).then(study => study.VbPVisibleWrapper)));

  studyInfoCreator.addStudyInfoToMap("study_VbPFixed", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 10635)).then(study => study.VolumeProfileStudyWithThemedColors)));

  studyInfoCreator.addStudyInfoToMap("study_ScriptWithDataOffset", studyInfoCreator.createStudyInfo(() => 
    Promise.all([
      moduleRequire(8736), moduleRequire(6025), moduleRequire(9378), 
      moduleRequire(1485), moduleRequire(5456), moduleRequire(7539)
    ]).then(moduleRequire.bind(moduleRequire, 75848)).then(study => study.study_ScriptWithDataOffset)));

  // Moving average study with currency unit support
  if (featureFlags.enabled("moving_average_study_changable_currency_unit")) {
    studyInfoCreator.addStudyInfoToMap("study_Moving Average", studyInfoCreator.createStudyInfo(() => 
      Promise.all([
        moduleRequire(7598), moduleRequire(6025), moduleRequire(9378), 
        moduleRequire(1485), moduleRequire(5248)
      ]).then(moduleRequire.bind(moduleRequire, 45135)).then(study => study.study_MovingAverage)));
  }

  const requiredProperties = ["studyName", "guiPlotName", "isLinkedToSeries"];

  /**
   * Check if all required properties are present
   * @param {Object} study - Study object
   * @returns {boolean} True if all required properties are present
   */
  function hasAllRequiredProperties(study) {
    return requiredProperties.every(prop => prop in study);
  }

  /**
   * Check if study is a stub
   * @param {Object} study - Study object
   * @returns {boolean} True if study is a stub
   */
  function isStudyStub(study) {
    return study instanceof studyUtils2.StudyStub;
  }

  /**
   * Check if study is fundamental
   * @param {Object} study - Study object
   * @returns {boolean} True if study is fundamental
   */
  function isFundamentalStudy(study) {
    return !1;
  }

  /**
   * Check if study is ESD type
   * @param {Object} study - Study object
   * @returns {boolean} True if study is ESD
   */
  function isESDStudy(study) {
    return !1;
  }

  /**
   * Check if study is overlay
   * @param {Object} study - Study object
   * @returns {boolean} True if study is overlay
   */
  function isOverlayStudy(study) {
    return hasAllRequiredProperties(study) && "Overlay@tv-basicstudies" === study.metaInfo().id;
  }

  /**
   * Check if study is compare or overlay
   * @param {Object} study - Study object
   * @returns {boolean} True if study is compare or overlay
   */
  function isCompareOrOverlayStudy(study) {
    return isOverlayStudy(study) || 
           (hasAllRequiredProperties(study) && "Compare@tv-basicstudies" === study.metaInfo().id);
  }

  /**
   * Check if object is a study
   * @param {Object} study - Study object
   * @returns {boolean} True if object is a study
   */
  function isStudy(study) {
    return hasAllRequiredProperties(study);
  }

  /**
   * Check if study is strategy
   * @param {Object} study - Study object
   * @returns {boolean} True if study is strategy
   */
  function isStudyStrategy(study) {
    return !1;
  }

  /**
   * Check if study is symbolic
   * @param {Object} study - Study object
   * @returns {boolean} True if study is symbolic
   */
  function isSymbolicStudy(study) {
    return !1;
  }

  /**
   * Get study color rotation mode
   * @returns {string} Color rotation mode
   */
  function studyColorRotationMode() {
    return "sexyColors";
  }

  /**
   * Use same color rotation comparator
   * @returns {boolean} True if using same color rotation comparator
   */
  function useSameColorRotationComparator() {
    return !1;
  }

  let pendingStudiesCount = 0;

  /**
   * Check if there are pending studies module loading
   * @returns {boolean} True if there are pending studies
   */
  function hasPendingStudiesModuleLoading() {
    return pendingStudiesCount > 0;
  }

  /**
   * Check if study has confirm inputs
   * @returns {boolean} True if study has confirm inputs
   */
  function hasConfirmInputs() {
    return !1;
  }

  /**
   * Create study instance
   * @param {string} studyName - Study name
   * @param {Object} studyOptions - Study options
   * @param {Object} studyInputs - Study inputs
   * @param {Object} studyDefaults - Study defaults
   * @param {Object} studyMetaInfo - Study meta-info
   * @param {boolean} isStudy - Whether to create as study
   * @param {boolean} isStrategy - Whether to create as strategy
   * @param {boolean} isStub - Whether to create as stub
   * @param {boolean} isSymbolic - Whether to create as symbolic
   * @param {boolean} isFundamental - Whether to create as fundamental
   * @param {boolean} isESD - Whether to create as ESD
   * @param {boolean} isOverlay - Whether to create as overlay
   * @param {boolean} isCompare - Whether to create as compare
   * @returns {Promise<Object>} Promise resolving to study instance
   */
  async function createStudy(studyName, studyOptions, studyInputs, studyDefaults, studyMetaInfo, isStudy, isStrategy, isStub, isSymbolic, isFundamental, isESD, isOverlay, isCompare) {
    let studyInfo;
    const isStrategy = isStrategy;
    
    if (!isStrategy) {
      const studyName = getInternalStudyName(studyOptions);
      studyInfo = studyInfoCreator.getStudyInfoByName(studyName ?? "Study") ?? studyInfo;
    }
    
    if (studyInfo.studyConstructor) {
      studyInfo.studyConstructor = await assertionUtils.ensureDefined(studyInfo.studyConstructorAsyncGetter)();
      pendingStudiesCount -= 1;
    }
    
    const studyInstance = new (assertionUtils.ensureDefined(studyInfo?.studyConstructor))(studyName, studyOptions, studyInputs, studyDefaults, isStudy, !!isOverlay);
    
    return studyInstance;
  }
}
