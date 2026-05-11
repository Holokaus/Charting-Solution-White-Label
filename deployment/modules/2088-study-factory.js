/**
 * @module 2088 - Study Factory and Utilities
 * @description Core module for creating, managing, and querying studies (indicators)
 * in the TradingView charting library. Provides factory functions for study
 * instantiation, type checking utilities, and study metadata management.
 */

import { default as isMatch } from '../88987';
import { ensureDefined } from '../50151';
import { enabled as featureEnabled } from '../37103';
import { StudyMetaInfo } from '../19844';
import { StudyStub } from '../2258';
import { 
  createStudyInfo, 
  addStudyInfoToMap, 
  getStudyInfoByName 
} from '../62312';
import '../72207';

// Internal study prefix for fundamental studies
const FUNDAMENTAL_STUDY_PREFIX = 'study_Internal$STD;Fund_';

/**
 * Get the internal study key based on class ID or short ID
 * 
 * @param {Object} study - Study descriptor object
 * @returns {string} The internal study key
 */
function getStudyKey(study) {
  const baseKey = 'study_' + (study.classId || study.shortId);
  return baseKey.startsWith(FUNDAMENTAL_STUDY_PREFIX) 
    ? FUNDAMENTAL_STUDY_PREFIX 
    : baseKey;
}

/**
 * Color rotation modes for studies
 * 
 * @enum {number}
 */
export const StudyColorRotationMode = {
  /** No color rotation */
  None: null,
  /** Shift colors */
  Shift: 'shift',
  /** Loop colors */
  Loop: 'loop'
};

// Lazy-loaded study constructors
const studyConstructors = new Map();

// Register standard studies
const StudyInfo = createStudyInfo(() => 
  Promise.all([
    import(/* webpackChunkName: "chunk-8736" */ '../8736'),
    import(/* webpackChunkName: "chunk-6025" */ '../6025'),
    import(/* webpackChunkName: "chunk-9378" */ '../9378'),
    import(/* webpackChunkName: "chunk-1485" */ '../1485'),
    import(/* webpackChunkName: "chunk-5456" */ '../5456'),
    import(/* webpackChunkName: "chunk-7539" */ '../7539')
  ]).then(({ Study }) => Study)
);

addStudyInfoToMap('Study', StudyInfo);

// Register Pivot Points Standard study
addStudyInfoToMap(
  'study_PivotPointsStandard',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ study_PivotPointsStandard }) => study_PivotPointsStandard)
  )
);

// Register Overlay study with sexy colors
addStudyInfoToMap(
  'study_Overlay',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ study_Overlay }) => study_Overlay)
  ),
  'sexyColors'
);

// Register Compare study with sexy colors
addStudyInfoToMap(
  'study_Compare',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ StudyCompare }) => StudyCompare)
  ),
  'sexyColors'
);

// Register Volume study
addStudyInfoToMap(
  'study_Volume',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ VolumeStudy }) => VolumeStudy)
  )
);

// Register Volume Profile Visible study (no rotations)
addStudyInfoToMap(
  'study_VbPVisible',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ VbPVisibleWrapper }) => VbPVisibleWrapper)
  ),
  'noRotations'
);

// Register Volume Profile Fixed study (no rotations)
addStudyInfoToMap(
  'study_VbPFixed',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ VolumeProfileStudyWithThemedColors }) => VolumeProfileStudyWithThemedColors)
  ),
  'noRotations'
);

// Register Script with Data Offset study
addStudyInfoToMap(
  'study_ScriptWithDataOffset',
  createStudyInfo(() => 
    Promise.all([
      import('../8736'),
      import('../6025'),
      import('../9378'),
      import('../1485'),
      import('../5456'),
      import('../7539')
    ]).then(({ study_ScriptWithDataOffset }) => study_ScriptWithDataOffset)
  )
);

// Conditionally register Moving Average study if feature is enabled
if (featureEnabled('moving_average_study_changable_currency_unit')) {
  addStudyInfoToMap(
    'study_Moving Average',
    createStudyInfo(() => 
      Promise.all([
        import('../7598'),
        import('../6025'),
        import('../9378'),
        import('../1485'),
        import('../5248')
      ]).then(({ study_MovingAverage }) => study_MovingAverage)
    )
  );
}

// Properties that define a valid study object
const STUDY_REQUIRED_PROPERTIES = ['studyName', 'guiPlotName', 'isLinkedToSeries'];

/**
 * Check if an object is a valid study
 * 
 * @param {*} obj - Object to check
 * @returns {boolean} True if the object is a study
 */
export function isStudy(obj) {
  return STUDY_REQUIRED_PROPERTIES.every(prop => prop in obj);
}

/**
 * Check if a study is a strategy
 * 
 * @param {*} study - Study to check
 * @returns {boolean} Always false (strategies handled elsewhere)
 */
export function isStudyStrategy(study) {
  return false;
}

/**
 * Check if an object is a StudyStub instance
 * 
 * @param {*} obj - Object to check
 * @returns {boolean} True if the object is a StudyStub
 */
export function isStudyStub(obj) {
  return obj instanceof StudyStub;
}

/**
 * Check if a study is a fundamental study
 * 
 * @param {*} study - Study to check
 * @returns {boolean} Always false (fundamental studies handled elsewhere)
 */
export function isFundamentalStudy(study) {
  return false;
}

/**
 * Check if a study is an ESD (External Signal Data) study
 * 
 * @param {*} study - Study to check
 * @returns {boolean} Always false (ESD studies handled elsewhere)
 */
export function isESDStudy(study) {
  return false;
}

/**
 * Check if a study is an overlay study
 * 
 * @param {*} study - Study to check
 * @returns {boolean} True if the study is an overlay
 */
export function isOverlayStudy(study) {
  return isStudy(study) && study.metaInfo().id === 'Overlay@tv-basicstudies';
}

/**
 * Check if a study is a compare or overlay study
 * 
 * @param {*} study - Study to check
 * @returns {boolean} True if the study is compare or overlay
 */
export function isCompareOrOverlayStudy(study) {
  return isOverlayStudy(study) || 
         (isStudy(study) && study.metaInfo().id === 'Compare@tv-basicstudies');
}

// Counter for pending study module loads
let pendingLoadsCount = 0;

/**
 * Check if there are any pending study modules being loaded
 * 
 * @returns {boolean} True if modules are loading
 */
export function hasPendingStudiesModuleLoading() {
  return pendingLoadsCount > 0;
}

/**
 * Create a new study instance
 * 
 * @param {Object} model - Chart model
 * @param {Object} pane - Pane container
 * @param {Object} options - Study options
 * @param {string} studyName - Name of the study
 * @param {boolean} isCompare - Whether this is a compare study
 * @param {number} [id] - Optional study ID
 * @param {number} [a] - Parameter a (flag for compare mode)
 * @param {*} [l] - Additional parameter
 * @returns {Promise<Object>} Promise resolving to the study instance
 */
export async function createStudy(model, pane, options, studyName, isCompare, id, a, l) {
  let studyInfo;
  const isCompareMode = a === 2;
  
  // Get study info by name
  if (!studyInfo) {
    const key = getStudyKey(options);
    studyInfo = getStudyInfoByName(key ?? 'Study') ?? StudyInfo;
  }
  
  // Load study constructor if not already loaded
  if (!studyInfo.studyConstructor) {
    pendingLoadsCount += 1;
    try {
      studyInfo.studyConstructor = await ensureDefined(
        studyInfo.studyConstructorAsyncGetter()
      );
    } finally {
      pendingLoadsCount -= 1;
    }
  }
  
  // Create study instance
  const study = new (ensureDefined(studyInfo?.studyConstructor))(
    model,
    pane,
    options,
    studyName,
    isCompare,
    isCompareMode,
    !!l
  );
  
  // Set ID if provided
  if (id !== undefined) {
    study.setId(id);
  }
  
  return study;
}

/**
 * Get the color rotation mode for a study
 * 
 * @param {Object} study - Study object
 * @returns {string|null} Color rotation mode or null
 */
export function studyColorRotationMode(study) {
  const key = getStudyKey(study);
  const studyInfo = getStudyInfoByName(key);
  
  if (studyInfo) {
    const mode = studyInfo.colorRotationMode;
    return typeof mode === 'function' 
      ? mode(study) 
      : mode;
  }
  
  // Default behavior based on Pine version
  if (study.pine === undefined || StudyMetaInfo.isStandardPine(study.id)) {
    return study.plots.length !== 1 ? 'shift' : 'loop';
  }
  
  return null;
}

/**
 * Compare two studies for color rotation compatibility
 * 
 * @param {Object} e - First study
 * @param {Object} t - Second study
 * @returns {boolean} True if studies should use same color rotation
 */
function compareStudiesForRotation(e, t) {
  return e.id === t.id && 
         (e.pine ? e.pine.version : undefined) === 
         (t.pine ? t.pine.version : undefined);
}

/**
 * Get the color rotation comparator for a study
 * 
 * @param {Object} study - Study object
 * @returns {Function} Comparator function
 */
export function useSameColorRotationComparator(study) {
  const key = getStudyKey(study);
  const studyInfo = getStudyInfoByName(key);
  
  if (studyInfo) {
    const comparator = studyInfo.colorRotationComparator;
    if (comparator !== undefined) {
      return comparator;
    }
  }
  
  return compareStudiesForRotation;
}

/**
 * Check if a study has confirm inputs
 * 
 * @param {Array} inputs - Array of input descriptors
 * @returns {boolean} True if any input requires confirmation
 */
export function hasConfirmInputs(inputs) {
  return (inputs ?? []).some(input => input.confirm);
}

// List of symbolic study IDs
const SYMBOLIC_STUDY_IDS = [
  'Overlay@tv-basicstudies',
  'CorrelationCoefficient@tv-basicstudies',
  'Correlation Coeff@tv-basicstudies',
  'Spread@tv-basicstudies',
  'Ratio@tv-basicstudies'
];

/**
 * Check if a study is a symbolic study
 * 
 * @param {Object} study - Study to check
 * @returns {boolean} True if the study is symbolic
 */
export function isSymbolicStudy(study) {
  return SYMBOLIC_STUDY_IDS.includes(study.id);
}

// Default exports
export default {
  createStudy,
  hasConfirmInputs,
  hasPendingStudiesModuleLoading,
  isCompareOrOverlayStudy,
  isESDStudy,
  isFundamentalStudy,
  isOverlayStudy,
  isStudy,
  isStudyStrategy,
  isStudyStub,
  isSymbolicStudy,
  studyColorRotationMode,
  useSameColorRotationComparator
};
