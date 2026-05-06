/**
 * Module 10341 - Too Many Studies Notice
 * 
 * Handles displaying warnings/notices when the user has added too many
 * studies/indicators to the chart. This helps prevent performance degradation
 * and maintains chart usability.
 * 
 * @module 10341
 * @see showWarning (module 3615)
 * @see translation utilities (module 11542, 66719, 86146)
 */

import { t as translate } from './11542-translation-utils';
import { showWarning } from './3615-warning-dialog';

/**
 * Show a warning notice when too many studies are added to the chart
 * 
 * Displays a localized warning message informing the user that they have
 * exceeded or are approaching the recommended number of studies/indicators.
 * 
 * @param {number} studyCount - The current number of studies on the chart
 * 
 * @example
 * // Show warning for 15 studies
 * showTooManyStudiesNotice(15);
 * 
 * @example
 * // Show warning for custom count
 * const currentStudies = chart.getAllStudies().length;
 * showTooManyStudiesNotice(currentStudies);
 */
export function showTooManyStudiesNotice(studyCount) {
    // Import translation module dynamically to avoid circular dependencies
    const tooManyStudiesTitleKey = 66719;
    const tooManyStudiesTextKey = 86146;
    
    // Get localized title for the warning dialog
    const title = translate(null, tooManyStudiesTitleKey);
    
    // Get localized text with the study count replaced in the message
    const text = translate(
        null,
        {
            replace: {
                number: `${studyCount}`
            }
        },
        tooManyStudiesTextKey
    );
    
    // Display the warning dialog to the user
    showWarning({
        title: title,
        text: text
    });
}

/**
 * Configuration options for the too many studies warning
 * 
 * @typedef {Object} TooManyStudiesWarningConfig
 * @property {number} threshold - The number of studies at which to show the warning
 * @property {boolean} blocking - Whether to prevent adding more studies beyond threshold
 * @property {Function} onThresholdReached - Callback when threshold is reached
 */

/**
 * Check if the study count exceeds the recommended threshold
 * 
 * @param {number} studyCount - Current number of studies
 * @param {number} [threshold=10] - Maximum recommended number of studies
 * @returns {boolean} True if study count exceeds threshold
 * 
 * @example
 * const shouldWarn = isStudyCountExcessive(chart.getStudies().length);
 * if (shouldWarn) {
 *     showTooManyStudiesNotice(chart.getStudies().length);
 * }
 */
export function isStudyCountExcessive(studyCount, threshold = 10) {
    return studyCount > threshold;
}

/**
 * Validate study count before adding a new study
 * 
 * @param {Array} currentStudies - Array of currently applied studies
 * @returns {Object} Validation result with isValid flag and message
 * 
 * @example
 * const validation = validateStudyAddition(chart.getAllStudies());
 * if (!validation.isValid) {
 *     showTooManyStudiesNotice(currentStudies.length + 1);
 * }
 */
export function validateStudyAddition(currentStudies) {
    const MAX_RECOMMENDED_STUDIES = 10;
    const MAX_ALLOWED_STUDIES = 25;
    
    const count = currentStudies.length;
    
    if (count >= MAX_ALLOWED_STUDIES) {
        return {
            isValid: false,
            message: `Maximum number of studies (${MAX_ALLOWED_STUDIES}) reached`,
            severity: 'error'
        };
    }
    
    if (count >= MAX_RECOMMENDED_STUDIES) {
        return {
            isValid: true,
            message: `Warning: ${count} studies may impact performance`,
            severity: 'warning'
        };
    }
    
    return {
        isValid: true,
        message: 'OK',
        severity: 'success'
    };
}

/**
 * Performance impact levels based on study count
 * 
 * @enum {string}
 * @readonly
 */
export const PerformanceImpact = {
    LOW: 'low',       // 0-5 studies
    MEDIUM: 'medium', // 6-10 studies
    HIGH: 'high',     // 11-15 studies
    CRITICAL: 'critical' // 16+ studies
};

/**
 * Get the performance impact level for a given study count
 * 
 * @param {number} studyCount - Number of studies on the chart
 * @returns {PerformanceImpact} The estimated performance impact level
 */
export function getPerformanceImpactLevel(studyCount) {
    if (studyCount <= 5) {
        return PerformanceImpact.LOW;
    } else if (studyCount <= 10) {
        return PerformanceImpact.MEDIUM;
    } else if (studyCount <= 15) {
        return PerformanceImpact.HIGH;
    } else {
        return PerformanceImpact.CRITICAL;
    }
}
