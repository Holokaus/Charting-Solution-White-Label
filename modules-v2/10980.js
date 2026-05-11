/**
 * Module 10980: Time Scale Utilities
 * 
 * Provides utility functions for formatting and manipulating time scales
 * on the TradingView chart. Handles date formatting, range calculations,
 * and time zone conversions for the horizontal axis.
 * 
 * @module 10980
 * @namespace TimeScaleUtils
 */

/**
 * Formats a timestamp into a readable date string based on the specified resolution.
 * 
 * @param {number} timestamp - Unix timestamp in milliseconds.
 * @param {string} resolution - The chart resolution (e.g., '1', '5', 'D', 'W').
 * @param {boolean} useSeconds - Whether to include seconds in the format.
 * @returns {string} Formatted date string.
 * 
 * @example
 * formatDateByResolution(1678886400000, 'D', false); // Returns "15 Mar '23"
 */
export function formatDateByResolution(timestamp, resolution, useSeconds = false) {
    const date = new Date(timestamp);
    
    // Determine format based on resolution
    if (resolution.includes('D') || resolution.includes('W') || resolution.includes('M')) {
        return date.toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
        });
    }
    
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: useSeconds ? '2-digit' : undefined
    };
    
    return date.toLocaleTimeString(undefined, options);
}

/**
 * Calculates the optimal step size for time scale labels based on the visible range.
 * 
 * @param {number} startTimestamp - Start of the visible range.
 * @param {number} endTimestamp - End of the visible range.
 * @param {number} pixelWidth - Width of the chart in pixels.
 * @returns {number} Optimal step size in milliseconds.
 */
export function calculateOptimalTimeStep(startTimestamp, endTimestamp, pixelWidth) {
    const totalRange = endTimestamp - startTimestamp;
    const approximateLabels = pixelWidth / 100; // Approximate label every 100px
    
    let rawStep = totalRange / approximateLabels;
    
    // Normalize step to "nice" numbers (1, 2, 5, 10, etc.)
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const normalized = rawStep / magnitude;
    
    let niceStep;
    if (normalized < 1.5) niceStep = 1;
    else if (normalized < 3.5) niceStep = 2;
    else if (normalized < 7.5) niceStep = 5;
    else niceStep = 10;
    
    return niceStep * magnitude;
}

/**
 * Snaps a timestamp to the nearest logical boundary based on resolution.
 * 
 * @param {number} timestamp - Input timestamp.
 * @param {string} resolution - Chart resolution.
 * @returns {number} Snapped timestamp.
 */
export function snapToResolution(timestamp, resolution) {
    const date = new Date(timestamp);
    
    if (resolution === 'D') {
        date.setHours(0, 0, 0, 0);
    } else if (resolution === 'W') {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
        date.setDate(diff);
        date.setHours(0, 0, 0, 0);
    } else if (resolution === 'M') {
        date.setDate(1);
        date.setHours(0, 0, 0, 0);
    }
    
    return date.getTime();
}

/**
 * Converts a session string (e.g., "0930-1600") to start/end timestamps for a given day.
 * 
 * @param {string} sessionString - Session format "HHMM-HHMM".
 * @param {number} baseTimestamp - Base timestamp for the day.
 * @param {string} timeZone - Target timezone.
 * @returns {{start: number, end: number}} Session start and end timestamps.
 */
export function parseSessionToTimestamps(sessionString, baseTimestamp, timeZone) {
    if (!sessionString || !sessionString.includes('-')) {
        return null;
    }
    
    const [startStr, endStr] = sessionString.split('-');
    const baseDate = new Date(baseTimestamp);
    
    const startHour = parseInt(startStr.substring(0, 2), 10);
    const startMin = parseInt(startStr.substring(2, 4), 10);
    
    const endHour = parseInt(endStr.substring(0, 2), 10);
    const endMin = parseInt(endStr.substring(2, 4), 10);
    
    // Note: Real implementation would use proper timezone handling library
    const startDate = new Date(baseDate);
    startDate.setHours(startHour, startMin, 0, 0);
    
    const endDate = new Date(baseDate);
    endDate.setHours(endHour, endMin, 0, 0);
    
    // Handle overnight sessions
    if (endDate < startDate) {
        endDate.setDate(endDate.getDate() + 1);
    }
    
    return {
        start: startDate.getTime(),
        end: endDate.getTime()
    };
}

/**
 * Checks if a timestamp falls within trading hours for a specific session.
 * 
 * @param {number} timestamp - Timestamp to check.
 * @param {string} sessionString - Session definition.
 * @param {string} timeZone - Timezone context.
 * @returns {boolean} True if within session.
 */
export function isWithinSession(timestamp, sessionString, timeZone) {
    const session = parseSessionToTimestamps(sessionString, timestamp, timeZone);
    if (!session) return false;
    
    return timestamp >= session.start && timestamp <= session.end;
}

/**
 * Generates an array of tick marks for the time scale ruler.
 * 
 * @param {number} start - Start timestamp.
 * @param {number} end - End timestamp.
 * @param {number} step - Step size in ms.
 * @returns {number[]} Array of timestamps for tick marks.
 */
export function generateTimeScaleTicks(start, end, step) {
    const ticks = [];
    let current = Math.ceil(start / step) * step;
    
    while (current <= end) {
        ticks.push(current);
        current += step;
    }
    
    return ticks;
}

// Default export containing all utilities
export default {
    formatDateByResolution,
    calculateOptimalTimeStep,
    snapToResolution,
    parseSessionToTimestamps,
    isWithinSession,
    generateTimeScaleTicks
};
