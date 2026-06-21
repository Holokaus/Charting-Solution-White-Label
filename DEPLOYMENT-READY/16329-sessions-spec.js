/**
 * Module 16329 - Sessions Specification
 * 
 * Defines market trading sessions and their timing specifications.
 * Used for session-based time calculations and market hour logic.
 * 
 * @module 16329-sessions-spec
 */

"use strict";

/**
 * Session comparison result enumeration
 * @enum {number}
 */
const SessionComparison = {
    LeftFirst: -1,
    Unchanged: 0,
    RightFirst: 1
};

/**
 * Session specification class
 * Defines a trading session with day, start time, and duration
 */
class SessionSpec {
    /**
     * @param {number} dayOfWeek - Day of week (0-6)
     * @param {number} startMinutes - Start time in minutes from midnight
     * @param {number} lengthMinutes - Session length in minutes
     */
    constructor(dayOfWeek, startMinutes, lengthMinutes) {
        if (!Number.isFinite(dayOfWeek) || !Number.isFinite(startMinutes) || !Number.isFinite(lengthMinutes)) {
            throw new Error("Invalid session parameters");
        }
        
        this._dayOfWeek = dayOfWeek;
        this._start = startMinutes;
        this._length = lengthMinutes;
    }

    /**
     * Get session start time in minutes
     * @returns {number}
     */
    start() {
        return this._start + (24 * 60 * this.sessionStartDaysOffset());
    }

    /**
     * Get session start offset
     * @returns {number}
     */
    startOffset() {
        return this._start;
    }

    /**
     * Get day offset for session that spans midnight
     * @returns {number}
     * @private
     */
    sessionStartDaysOffset() {
        if (this._start >= 0) return 0;
        const minutesPerDay = 24 * 60;
        return this._start % minutesPerDay === 0 
            ? -Math.ceil(this._start / minutesPerDay)
            : -Math.floor(this._start / minutesPerDay);
    }

    /**
     * Check if session spans overnight (midnight)
     * @returns {boolean}
     */
    isOvernight() {
        return this._start < 0;
    }

    /**
     * Get day of week
     * @returns {number}
     */
    dayOfWeek() {
        return this._dayOfWeek;
    }

    /**
     * Compare with another session
     * @param {SessionSpec} other - Other session to compare
     * @returns {number} -1 if this first, 0 if same, 1 if other first
     */
    compareTo(other) {
        return this.start() - other.start();
    }
}

/**
 * Export session specifications
 */
module.exports = {
    SessionsSpec: () => SessionSpec,
    SessionComparison: SessionComparison
};
