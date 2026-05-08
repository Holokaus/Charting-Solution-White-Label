/**
 * ============================================================================
 * TRADINGVIEW MODULE 18041 - STUDY TEMPLATE UTILITIES
 * ============================================================================
 *
 * Purpose: Utilities for study templates and meta-info generation
 *
 * Size: 1.6 KB
 *
 * Functions:
 *   - getStudyTemplateDescString: Get study template description
 *   - getStudyTemplateMetaInfo: Get study template meta-info
 *   - getStudyTemplateSaveData: Get study template save data
 *
 * Features:
 *   - Study template generation
 *   - Meta-info creation
 *   - Save data formatting
 *   - Indicator list generation
 *
 * Dependencies:
 *   - 36313: Study template utilities
 *
 * Exports:
 *   - getStudyTemplateDescString: Study template description function
 *   - getStudyTemplateMetaInfo: Study template meta-info function
 *   - getStudyTemplateSaveData: Study template save data function
 *
 * @module 18041
 * @category Technical Indicators
 * @subpackage Study Templates
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.series_d(moduleConfig, {
    getStudyTemplateDescString: () => getStudyTemplateDescString,
    getStudyTemplateMetaInfo: () => getStudyTemplateMetaInfo,
    getStudyTemplateSaveData: () => getStudyTemplateSaveData
  });

  const studyTemplateUtils = moduleRequire(36313);

  /**
   * Get study template description string
   * @param {Object} study - Study object
   * @returns {string} Description string
   */
  function getStudyTemplateDescString(study) {
    const studyList = study.allStudies(false).map((study => ({
      id: study.metaInfo().id,
      description: study.title(studyTemplateUtils.TitleDisplayTarget.StatusLine, false, void 0, false)
    })));
    
    const studyMap = new Map();
    studyList.forEach((study) => {
      const [description, index] = studyTemplateUtils.get(study.id) || [study.description, 0];
      studyTemplateUtils.set(study.id, [description, index + 1]);
    });
    
    return Array.from(studyMap.values()).map(([description, index]) => 
      `${description}${index > 1 ? ` series_x ${index}` : ""}`
    ).join(", ");
  }

  /**
   * Get study template meta-info
   * @param {Object} study - Study object
   * @param {string} interval - Time interval
   * @returns {Object} Meta-info object
   */
  function getStudyTemplateMetaInfo(study, interval) {
    const studyTemplate = study.studyTemplate(studyTemplateUtils, interval);
    
    return {
      indicators: study.allStudies(false).map((study => ({
        id: study.metaInfo().id,
        description: study.title(studyTemplateUtils.TitleDisplayTarget.StatusLine, false, void 0, false)
      }))),
      interval: interval
    };
  }

  /**
   * Get study template save data
   * @param {string} studyName - Study name
   * @param {Object} studyTemplate - Study template
   * @param {string} interval - Time interval
   * @returns {Object} Save data object
   */
  function getStudyTemplateSaveData(studyName, studyTemplate, interval) {
    const studyData = studyTemplate(studyTemplateUtils, interval);
    
    return {
      name: studyName,
      content: JSON.stringify(studyData),
      meta_info: studyTemplate.getStudyTemplateMetaInfo(studyTemplate, interval)
    };
  }
}
