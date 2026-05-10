/**
 * ============================================================================
 * TRADINGVIEW MODULE 16329 - SESSIONS SPECIFICATION
 * ============================================================================
 *
 * Purpose: Trading sessions specification with timezone support and history
 *
 * Size: 21.4 KB
 *
 * Classes:
 *   - SessionsSpec: Main sessions specification class
 *   - BusinessDay: Single business day representation
 *   - HistoryEntry: History entry for session changes
 *   - SessionsParser: Parser for session specifications
 *   - SessionsHistory: Sessions history management
 *
 * Features:
 *   - Session definition and validation
 *   - Timezone support
 *   - Holiday and correction handling
 *   - Session history tracking
 *   - Business day calculations
 *   - Week index management
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 37236: Date/time utilities
 *   - 16879: Timezone utilities
 *   - 71149: Calendar utilities
 *
 * Exports:
 *   - SessionsSpec: Sessions specification class
 *
 * @module 16329
 * @category Trading Sessions
 * @subpackage Specification
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    SessionsSpec: () => SessionsSpec
  });

  const assertionUtils = moduleRequire(50151),
    dateTimeUtils = moduleRequire(37236),
    timezoneUtils = moduleRequire(16879),
    calendarUtils = moduleRequire(71149);

  /**
   * Compare business days
   * @param {BusinessDay} a - First business day
   * @param {BusinessDay} b - Second business day
   * @returns {number} Comparison result
   */
  function compareBusinessDays(a, b) {
    return a.compareTo(b);
  }

  // Session direction enumeration
  !function(SessionDirection) {
    SessionDirection[SessionDirection.LeftFirst = -1] = "LeftFirst";
    SessionDirection[SessionDirection.Unchanged = 0] = "Unchanged";
    SessionDirection[SessionDirection.RightFirst = 1] = "RightFirst";
  }(SessionDirection || (SessionDirection = {}));

  /**
   * Business day representation
   */
  class BusinessDay {
    /**
     * @param {number} dayOfWeek - Day of week (0-6)
     * @param {number} start - Start time in minutes
     * @param {number} length - Length in minutes
     */
    constructor(dayOfWeek, start, length) {
      assertionUtils.assert(
        Number.isFinite(dayOfWeek) && Number.isFinite(start) && Number.isFinite(length), 
        "Invalid arguments"
      );
      
      this._dayOfWeek = dayOfWeek;
      this._start = start;
      this._length = length;
    }

    /**
     * Get start time in minutes from epoch
     * @returns {number} Start time
     */
    start() {
      return this._start + dateTimeUtils.minutesPerDay * this.sessionStartDaysOffset();
    }

    /**
     * Get start offset
     * @returns {number} Start offset
     */
    startOffset() {
      return this._start;
    }

    /**
     * Get session start days offset
     * @returns {number} Days offset
     */
    sessionStartDaysOffset() {
      return this._start >= 0 ? 0 : 
        this._start % dateTimeUtils.minutesPerDay === 0 ? 
          -Math.ceil(this._start / dateTimeUtils.minutesPerDay) : 
          -Math.floor(this._start / dateTimeUtils.minutesPerDay);
    }

    /**
     * Check if session is overnight
     * @returns {boolean} True if overnight
     */
    isOvernight() {
      return this._start < 0;
    }

    /**
     * Get day of week
     * @returns {number} Day of week
     */
    dayOfWeek() {
      return this._dayOfWeek;
    }

    /**
     * Get session start day of week
     * @returns {number} Session start day of week
     */
    sessionStartDayOfWeek() {
      let dayOfWeek = this._dayOfWeek - this.sessionStartDaysOffset();
      if (dayOfWeek < dateTimeUtils.SUNDAY) {
        dayOfWeek += 7;
      }
      return dayOfWeek;
    }

    /**
     * Get session length
     * @returns {number} Session length
     */
    length() {
      return this._length;
    }

    /**
     * Compare to another business day
     * @param {BusinessDay} other - Other business day
     * @returns {number} Comparison result
     */
    compareTo(other) {
      const thisWeight = this._weight();
      const thisEnd = thisWeight + this._length;
      const otherWeight = other._weight();
      const otherEnd = otherWeight + other._length;
      
      return thisWeight <= otherWeight && otherWeight < thisEnd || 
             otherWeight <= thisWeight && thisWeight < otherEnd ? 0 : 
             thisWeight > otherWeight ? 1 : -1;
    }

    /**
     * Check if contains a specific time
     * @param {number} timestamp - Timestamp to check
     * @returns {boolean} True if contains time
     */
    contains(timestamp) {
      return this._contains(
        dateTimeUtils.get_minutes_with_hours(timestamp), 
        dateTimeUtils.get_day_of_week(timestamp)
      );
    }

    /**
     * Get weight for comparison
     * @returns {number} Weight value
     */
    _weight() {
      return this._dayOfWeek * dateTimeUtils.minutesPerDay + this._start;
    }

    /**
     * Internal contains check
     * @param {number} minutes - Minutes value
     * @param {number} dayOfWeek - Day of week
     * @returns {boolean} True if contains
     */
    _contains(minutes, dayOfWeek) {
      let dayDiff = dayOfWeek - this._dayOfWeek;
      if (dayDiff > 0) {
        dayDiff -= 7;
      }
      
      const checkTime = dayDiff * dateTimeUtils.minutesPerDay + minutes;
      return checkTime >= this._start && checkTime < this._start + this._length;
    }
  }

  /**
   * History entry for sessions
   */
  class HistoryEntry {
    /**
     * @param {number} weekIndex - Week index
     * @param {number} entryIndex - Entry index
     * @param {Array} entries - Array of entries
     */
    constructor(weekIndex, entryIndex, entries) {
      this.weekIndex = weekIndex;
      this.entryIndex = entryIndex;
      this.entries = entries;
    }

    /**
     * Get entry
     * @returns {BusinessDay} Business day entry
     */
    getEntry() {
      return this.entries[this.entryIndex];
    }
  }

  /**
   * Sessions week representation
   */
  class SessionsWeek {
    /**
     * @param {Array} list - List of business days
     * @param {Map} entriesByDay - Entries by day
     * @param {number} firstDayOfWeek - First day of week
     * @param {number} weekEndsCount - Week ends count
     */
    constructor(list, entriesByDay, firstDayOfWeek, weekEndsCount) {
      this._maxTradingDayLength = null;
      this._list = list;
      this._entriesByDay = entriesByDay;
      this._firstDayOfWeek = firstDayOfWeek;
      this._weekEndsCount = weekEndsCount;
    }

    /**
     * Get first day of week
     * @returns {number} First day of week
     */
    firstDayOfWeek() {
      return this._firstDayOfWeek;
    }

    /**
     * Get entries by day
     * @returns {Map} Entries by day map
     */
    entriesByDay() {
      return this._entriesByDay;
    }

    /**
     * Get list of business days
     * @returns {Array} Business days list
     */
    list() {
      return this._list;
    }

    /**
     * Check if day is week end
     * @param {number} day - Day to check
     * @returns {boolean} True if week end
     */
    isWeekEnd(day) {
      return !this._entriesByDay.has(day);
    }

    /**
     * Get week ends count
     * @returns {number} Week ends count
     */
    weekEndsCount() {
      return this._weekEndsCount;
    }

    /**
     * Get longest session length
     * @returns {number} Longest session length
     */
    longestSessionLength() {
      return 0 === this._list.length ? 0 : 
        Math.max(...this._list.map(businessDay => businessDay.length()));
    }

    /**
     * Get max trading day length
     * @returns {number} Max trading day length
     */
    maxTradingDayLength() {
      if (null == this._maxTradingDayLength) {
        const dayLengths = new Map;
        
        for (const businessDay of this._list) {
          const dayOfWeek = businessDay.dayOfWeek();
          const currentLength = businessDay.length() + (dayLengths.get(dayOfWeek) ?? 0);
          dayLengths.set(dayOfWeek, currentLength);
        }
        
        let maxLength = 0;
        dayLengths.forEach(length => {
          maxLength = Math.max(maxLength, length);
        });
        
        this._maxTradingDayLength = maxLength;
      }
      
      return this._maxTradingDayLength;
    }
  }

  /**
   * Sessions history specification
   */
  class SessionsHistorySpec {
    /**
     * @param {number} startDay - Start day
     * @param {Array} entries - Array of entries
     * @param {number} specEndDay - Specification end day
     */
    constructor(startDay, entries, specEndDay) {
      this._startDay = startDay;
      this._entries = entries;
      this._specEndDay = specEndDay;
    }

    /**
     * Get entries
     * @returns {Array} Array of entries
     */
    getEntries() {
      return this._entries;
    }

    /**
     * Get start day
     * @returns {number} Start day
     */
    getStartDay() {
      return this._startDay;
    }

    /**
     * Get specification end day
     * @returns {number} Specification end day
     */
    getSpecEndDay() {
      return this._specEndDay;
    }

    /**
     * Check if open ended
     * @returns {boolean} True if open ended
     */
    isOpenEnded() {
      return null == this._specEndDay;
    }
  }

  // Days of week arrays
  const TRADING_DAYS = [dateTimeUtils.MONDAY, dateTimeUtils.TUESDAY, dateTimeUtils.WEDNESDAY, dateTimeUtils.THURSDAY, dateTimeUtils.FRIDAY];
  const ALL_DAYS = [dateTimeUtils.SUNDAY, dateTimeUtils.MONDAY, dateTimeUtils.TUESDAY, dateTimeUtils.WEDNESDAY, dateTimeUtils.THURSDAY, dateTimeUtils.FRIDAY, dateTimeUtils.SATURDAY];

  /**
   * Check if character is digit
   * @param {number} charCode - Character code
   * @returns {boolean} True if digit
   */
  function isDigit(charCode) {
    return charCode >= 48 && charCode <= 57;
  }

  // Days in month array
  const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /**
   * String key map for better performance
   */
  class StringKeyMap extends Map {
    constructor() {
      super(...arguments);
      this._keyStringsToKey = new Map();
    }

    get(key) {
      const keyFromCache = this._keyStringsToKey.get(key.toString());
      return keyFromCache && super.get(keyFromCache);
    }

    set(key, value) {
      const keyString = key.toString();
      const existingKey = this._keyStringsToKey.get(keyString);
      
      if (void 0 !== existingKey) {
        super.delete(existingKey);
      }
      
      this._keyStringsToKey.set(keyString, key);
      return super.set(key, value);
    }

    has(key) {
      return this._keyStringsToKey.has(key.toString());
    }
  }

  /**
   * Check if array has content
   * @param {Array} array - Array to check
   * @returns {boolean} True if has content
   */
  function hasContent(array) {
    return array.length > 0;
  }

  /**
   * Sessions parser for parsing and validation
   */
  class SessionsParser {
    constructor() {
      this.historyEntries = [];
      this.timezone = "";
      this.adjustSessionsIndexes = null;
    }

    /**
     * Parse sessions from specification
     * @param {string} timezone - Timezone string
     * @param {string} sessionsSpec - Sessions specification
     */
    parseSessions(timezone, sessionsSpec) {
      this._parseHistoryEntries(timezone, sessionsSpec, true);
    }

    /**
     * Parse sessions and validate date/time
     * @param {string} timezone - Timezone string
     * @param {string} sessionsSpec - Sessions specification
     */
    parseSessionsAndValidateDateTime(timezone, sessionsSpec) {
      this._parseHistoryEntries(timezone, sessionsSpec, false);
    }

    /**
     * Static method to parse holidays and corrections
     * @param {string} timezone - Timezone string
     * @param {string} holidaysSpec - Holidays specification
     * @param {string} correctionsSpec - Corrections specification
     * @param {boolean} validateDateTime - Whether to validate date/time
     */
    static parseHolidaysAndCorrections(timezone, holidaysSpec, correctionsSpec, validateDateTime) {
      return this._parseHolidaysAndCorrectionsImpl(timezone, holidaysSpec, correctionsSpec, validateDateTime);
    }

    /**
     * Static method to parse holidays and corrections with validation
     * @param {string} timezone - Timezone string
     * @param {string} holidaysSpec - Holidays specification
     * @param {string} correctionsSpec - Corrections specification
     */
    static parseHolidaysAndCorrectionsAndValidateDateTime(timezone, holidaysSpec, correctionsSpec) {
      return this._parseHolidaysAndCorrectionsImpl(timezone, holidaysSpec, correctionsSpec, true);
    }

    /**
     * Clear all parsed data
     */
    _clearAll() {
      this.timezone = "";
      this.historyEntries = [];
      this.adjustSessionsIndexes = [];
    }

    /**
     * Parse history entries
     * @param {string} timezone - Timezone string
     * @param {string} sessionsSpec - Sessions specification
     * @param {boolean} validateDateTime - Whether to validate date/time
     */
    _parseHistoryEntries(timezone, sessionsSpec, validateDateTime) {
      this._clearAll();
      
      const historyEntries = sessionsSpec.split("/");
      let previousEnd = null;
      let previousStart = null;
      
      this.hasHistoryCorrections = historyEntries.length > 1;
      
      for (let i = 0; i < historyEntries.length; i++) {
        const entryParts = historyEntries[i].split("#");
        let endEntry = null;
        
        if (i !== historyEntries.length - 1) {
          if (2 !== entryParts.length) {
            throw new Error(`bad session history entry definition: ${historyEntries[i]}`);
          }
          endEntry = this._parseDay(entryParts[1], "session history entry end", validateDateTime).toCalendar();
        } else {
          if (1 !== entryParts.length) {
            throw new Error(`bad session history entry definition: ${historyEntries[i]}`);
          }
          endEntry = null;
        }
        
        if (null !== previousEnd && null !== endEntry && 
            endEntry.getTime() < previousEnd.getTime()) {
          throw new Error(
            `history sessions are not listed in ascending order (${previousEnd} -> ${endEntry})`
          );
        }
        
        const sessionsList = this._parseSessionsImpl(timezone, entryParts[0], validateDateTime);
        previousEnd = this._adjustStartToPreviousSession(sessionsList.firstDayOfWeek());
        const historyEntry = new SessionsHistorySpec(previousEnd, endEntry, sessionsList);
        
        this.historyEntries.push(historyEntry);
        previousStart = endEntry;
      }
    }

    /**
     * Parse sessions implementation
     * @param {string} timezone - Timezone string
     * @param {string} sessionsSpec - Sessions specification
     * @param {boolean} validateDateTime - Whether to validate date/time
     * @returns {SessionsWeek} Sessions week
     */
    _parseSessionsImpl(timezone, sessionsSpec, validateDateTime) {
      this.timezone = timezone;
      const firstDayOfWeek = this._parseFirstDayOfWeek(sessionsSpec);
      
      const sessionsByDay = new Map();
      const sessionsList = [];
      
      if ("24x7" === sessionsSpec.toLowerCase()) {
        for (const dayOfWeek of ALL_DAYS) {
          const sessionEntry = this._createSessionEntry(dayOfWeek, 0, 0, 0, 0);
          sessionsList.push(sessionEntry);
          
          const daySessions = [];
          daySessions.push(sessionEntry);
          sessionsByDay.set(dayOfWeek, daySessions);
        }
      } else {
        let hasDefaultSection = true;
        const workingDaysMap = new Map();
        
        for (const section of sessionsSpec.split("|")) {
          const sectionParts = section.split(":");
          if (1 !== sectionParts.length && 2 !== sectionParts.length) {
            throw new Error(`bad session section: ${section}`);
          }
          
          const isDefault = 1 === sectionParts.length;
          if (isDefault) {
            if (hasDefaultSection) {
              throw new Error(`duplicated default section: ${section}`);
            }
            hasDefaultSection = false;
          }
          
          const workingDays = isDefault ? TRADING_DAYS : this._parseWorkingDays(sectionParts[1]);
          
          for (const dayOfWeek of TRADING_DAYS) {
            const dayWorkingDays = workingDaysMap.get(dayOfWeek);
            if (void 0 !== dayWorkingDays) {
              workingDaysMap.set(dayOfWeek, sectionParts[0]);
            }
          }
          
          for (const dayOfWeek of ALL_DAYS) {
            const dayWorkingDays = workingDaysMap.get(dayOfWeek);
            if (void 0 !== dayWorkingDays) {
              for (const workingDay of dayWorkingDays.split(",").filter(hasContent)) {
                const sessionEntry = this._createSessionEntry(dayOfWeek, workingDay, validateDateTime);
                let daySessions = sessionsByDay.get(dayOfWeek);
                
                if (void 0 === daySessions) {
                  daySessions = [];
                  sessionsByDay.set(dayOfWeek, daySessions);
                }
                
                daySessions.push(sessionEntry);
                sessionsByDay.set(dayOfWeek, daySessions);
              }
            }
          }
        }
      }
      
      sessionsList.sort(compareBusinessDays);
      
      const usedDays = new Set();
      for (const session of sessionsList) {
        usedDays.add(session.dayOfWeek());
      }
      
      const weekEndsCount = 7 - usedDays.size;
      return new SessionsWeek(sessionsList, sessionsByDay, firstDayOfWeek, weekEndsCount);
    }

    /**
     * Parse first day of week
     * @param {string} sessionsSpec - Sessions specification
     * @returns {number} First day of week
     */
    _parseFirstDayOfWeek(sessionsSpec) {
      const parts = sessionsSpec.split(";");
      
      if (this._firstDayOfWeek = dateTimeUtils.MONDAY, parts.length > 2) {
        throw new Error(`bad sessions spec: ${sessionsSpec}`);
      }
      
      if (1 === parts.length) {
        return sessionsSpec;
      }
      
      let dayIndex = 1;
      let firstDay = parts[0].indexOf("-") >= 0 ? NaN : parseInt(parts[0]);
      
      if (isNaN(firstDay) && (dayIndex = 0, firstDay = parseInt(parts[1])), 
          firstDay < dateTimeUtils.SUNDAY || firstDay > dateTimeUtils.SATURDAY) {
        throw new Error(`bad sessions spec: ${sessionsSpec}`);
      }
      
      this._firstDayOfWeek = firstDay;
      return parts[dayIndex];
    }

    /**
     * Adjust start to previous session
     * @param {number} firstDayOfWeek - First day of week
     * @returns {number} Adjusted start day
     */
    _adjustStartToPreviousSession(firstDayOfWeek) {
      if (0 === this.historyEntries.length) {
        return null;
      }
      
      const previousEnd = timezoneUtils.ensureNotNull(
        this.historyEntries[this.historyEntries.length - 1].getSpecEndDay()
      );
      
      const dayDiff = firstDayOfWeek - timezoneUtils.get_day_of_week(previousEnd);
      if (0 === dayDiff) {
        return previousEnd;
      }
      
      const clonedPreviousEnd = timezoneUtils.clone(previousEnd);
      
      if (dayDiff > 0) {
        timezoneUtils.add_date(clonedPreviousEnd, dayDiff);
      } else {
        timezoneUtils.add_date(clonedPreviousEnd, 7);
      }
      
      return clonedPreviousEnd.getTime() < previousEnd.getTime() || 
             timezoneUtils.add_date(clonedPreviousEnd, 7), 
             clonedPreviousEnd;
    }

    /**
     * Parse session entry
     * @param {number} dayOfWeek - Day of week
     * @param {string} sessionSpec - Session specification
     * @param {boolean} validateDateTime - Whether to validate date/time
     * @returns {BusinessDay} Business day
     */
    static _parseSessionEntry(dayOfWeek, sessionSpec, validateDateTime) {
      const timeParts = sessionSpec.split("-");
      
      if (2 !== timeParts.length) {
        throw new Error(`bad session entry: ${sessionSpec}`);
      }
      
      let startMinutes = 0;
      let startTime = timeParts[0];
      
      if (startTime.includes("F")) {
        const startParts = startTime.split("F");
        startTime = startParts[0];
        startMinutes = "" !== startParts[1] ? parseInt(startParts[1]) : 1;
      }
      
      let endMinutes = 0;
      let endTime = timeParts[1];
      
      if (endTime.includes("F")) {
        const endParts = endTime.split("F");
        endTime = endParts[0];
        endMinutes = "" !== endParts[1] ? parseInt(endParts[1]) : 1;
      }
      
      const startTotalMinutes = this._minutesFromHHMM(startTime, validateDateTime);
      const endTotalMinutes = this._minutesFromHHMM(endTime, validateDateTime);
      
      return this._createSessionEntry(dayOfWeek, startTotalMinutes, endTotalMinutes, startMinutes, endMinutes);
    }

    /**
     * Convert HH:MM to minutes
     * @param {string} timeStr - Time string
     * @param {boolean} validateDateTime - Whether to validate
     * @returns {number} Minutes
     */
    static _minutesFromHHMM(timeStr, validateDateTime) {
      if (4 === timeStr.length && 
          isDigit(timeStr.charCodeAt(0)) && 
          isDigit(timeStr.charCodeAt(1)) && 
          isDigit(timeStr.charCodeAt(2)) && 
          isDigit(timeStr.charCodeAt(3))) {
        
        const timeValue = parseInt(timeStr);
        const hours = Math.trunc(timeValue / 100);
        const minutes = timeValue % 100;
        
        if (!validateDateTime || hours < 24 && minutes < 60) {
          return minutes + 60 * hours;
        }
      }
      
      throw new Error(`incorrect entry syntax: ${timeStr}`);
    }

    /**
     * Parse day string
     * @param {string} dayStr - Day string
     * @param {string} context - Context for error messages
     * @param {boolean} validateDateTime - Whether to validate
     * @returns {BusinessDay} Business day
     */
    static _parseDay(dayStr, context, validateDateTime) {
      if (8 === dayStr.length && 
          isDigit(dayStr.charCodeAt(0)) && 
          isDigit(dayStr.charCodeAt(1)) && 
          isDigit(dayStr.charCodeAt(2)) && 
          isDigit(dayStr.charCodeAt(3)) &&
          isDigit(dayStr.charCodeAt(4)) && 
          isDigit(dayStr.charCodeAt(5)) && 
          isDigit(dayStr.charCodeAt(6)) && 
          isDigit(dayStr.charCodeAt(7))) {
        
        const year = parseInt(dayStr.substring(0, 4));
        const month = parseInt(dayStr.substring(4, 6));
        const day = parseInt(dayStr.substring(6, 8));
        
        if (!validateDateTime || 
            this._isValidDayOfMonth(day, month, year)) {
          return new BusinessDay(month, day, year);
        }
      }
      
      throw new Error(`bad ${context} date: ${dayStr}`);
    }

    /**
     * Validate day of month
     * @param {number} day - Day
     * @param {number} month - Month
     * @param {number} year - Year
     * @returns {boolean} True if valid
     */
    static _isValidDayOfMonth(day, month, year) {
      return !(month < 1 || month > 12) && 
             (!(day < 1 || day > DAYS_IN_MONTH[month]) || 
              !(2 === month && 29 !== day || !timezoneUtils.is_leap_year(year)));
    }

    /**
     * Parse working days
     * @param {string} workingDaysStr - Working days string
     * @returns {Array} Array of working days
     */
    static _parseWorkingDays(workingDaysStr) {
      const workingDays = [];
      
      for (let i = 0; i < workingDaysStr.length; i++) {
        const dayCode = workingDaysStr.charCodeAt(i) - 48;
        if (dayCode < 1 || dayCode > 7) {
          throw new Error(`Invalid days specification: ${workingDaysStr}`);
        }
        
        if (!workingDays.includes(dayCode)) {
          workingDays.push(dayCode);
        }
      }
      
      return workingDays;
    }

    /**
     * Create session entry
     * @param {number} dayOfWeek - Day of week
     * @param {number} start - Start time
     * @param {number} length - Length
     * @param {number} startFreq - Start frequency
     * @param {number} endFreq - End frequency
     * @returns {BusinessDay} Business day
     */
    static _createSessionEntry(dayOfWeek, start, length, startFreq, endFreq) {
      assertionUtils.assert(startFreq >= 0 && startFreq < 7);
      assertionUtils.assert(endFreq >= 0 && endFreq < 7);
      
      if (0 === length) {
        length = dateTimeUtils.minutesPerDay;
      }
      
      if (start === length) {
        length += 1;
      }
      
      startFreq === endFreq && 
        length <= start && (start += 1), 
        endFreq > 0 && (start -= endFreq * dateTimeUtils.minutesPerDay), 
        startFreq > 0 && (start -= startFreq * dateTimeUtils.minutesPerDay);
      
      const sessionLength = length - start;
      
      assertionUtils.assert(dayOfWeek >= dateTimeUtils.SUNDAY && dayOfWeek <= dateTimeUtils.SATURDAY);
      assertionUtils.assert(sessionLength >= 0);
      
      return new BusinessDay(dayOfWeek, start, sessionLength);
    }

    /**
     * Parse holidays and corrections implementation
     * @param {string} timezone - Timezone string
     * @param {string} holidaysSpec - Holidays specification
     * @param {string} correctionsSpec - Corrections specification
     * @param {boolean} validateDateTime - Whether to validate
     * @returns {StringKeyMap} Map of holidays and corrections
     */
    static _parseHolidaysAndCorrectionsImpl(timezone, holidaysSpec, correctionsSpec, validateDateTime) {
      const holidayMap = new StringKeyMap();
      
      if ("" !== holidaysSpec) {
        const holidays = [];
        for (const holiday of holidaysSpec.split(",")) {
          const holidayDate = this._parseDay(holiday, "holiday", validateDateTime);
          holidayMap.set(holidayDate, holidayDate);
        }
      }
      
      if ("" === correctionsSpec) {
        return holidayMap;
      }
      
      for (const correction of correctionsSpec.split(";")) {
        const correctionParts = correction.split(":");
        if (2 !== correctionParts.length) {
          throw new Error(`bad correction section: ${correction}`);
        }
        
        const dayoffParts = correctionParts[0];
        const correctionParts = correctionParts[1];
        const dayoffSessions = [];
        
        if ("dayoff" !== dayoffParts[0]) {
          for (const dayoff of dayoffParts[0].split(",")) {
            dayoffSessions.push(this._parseSessionEntry(1, dayoff, validateDateTime));
          }
        }
        
        for (const correction of correctionParts[1].split(",")) {
          const correctionDate = this._parseDay(correction, "correction", validateDateTime);
          const dayOfWeek = timezoneUtils.get_day_of_week(correctionDate.toCalendar());
          const sessions = [];
          
          for (let i = 0; i < dayoffSessions.length; i++) {
            const session = dayoffSessions[i];
            sessions.push(new BusinessDay(dayOfWeek, session.startOffset(), session.length()));
          }
          
          holidayMap.set(correctionDate, sessions);
        }
      }
      
      return holidayMap;
    }
  }

  /**
   * Compare function for sorting
   * @param {BusinessDay} a - First business day
   * @param {BusinessDay} b - Second business day
   * @returns {boolean} True if a comes before b
   */
  function comesBefore(a, b) {
    return a.compareTo(b) < 0;
  }

  const UTC_TIMEZONE = timezoneUtils.get_timezone("Etc/UTC");

  // Session position enumeration
  !function(SessionPosition) {
    SessionPosition[SessionPosition.Closest = 0] = "Closest";
    SessionPosition[SessionPosition.FirstInDay = -1] = "FirstInDay";
    SessionPosition[SessionPosition.LastInDay = 1] = "LastInDay";
  }(SessionPosition || (SessionPosition = {}));

  /**
   * Simple value wrapper
   */
  class SimpleValue {
    constructor(value) {
      this._value = value;
    }

    get() {
      return this._value;
    }

    set(value) {
      this._value = value;
    }
  }

  /**
   * Main sessions specification class
   */
  class SessionsSpec {
    /**
     * @param {string} timezone - Timezone string
     * @param {string} sessionsSpec - Sessions specification
     * @param {string} holidaysSpec - Holidays specification
     * @param {string} correctionsSpec - Corrections specification
     * @param {boolean} validateDateTime - Whether to validate date/time
     */
    constructor(timezone = "Etc/UTC", sessionsSpec = "0000-0000", holidaysSpec = "", correctionsSpec = "", validateDateTime = true) {
      const parser = new SessionsParser();
      
      validateDateTime ? 
        parser.parseSessionsAndValidateDateTime(timezone, sessionsSpec) : 
        parser.parseSessions(timezone, sessionsSpec);
      
      this._entries = parser.historyEntries;
      this._hasHistoryCorrections = parser.hasHistoryCorrections;
      this._presentHistoryEntry = parser.historyEntries[parser.historyEntries.length - 1];
      this._timezone = parser.timezone;
      this._timezoneObj = timezoneUtils.get_timezone(parser.timezone);
      this._holidayAndCorrectionMap = validateDateTime ? 
        SessionsParser.parseHolidaysAndCorrectionsAndValidateDateTime(timezone, holidaysSpec, correctionsSpec) : 
        SessionsParser.parseHolidaysAndCorrections(timezone, holidaysSpec, correctionsSpec, validateDateTime);
      
      const holidayKeys = this._holidayAndCorrectionMap.keys();
      this._entriesHash = new Map();
      
      const borderParams = this._prepareSessionsBorderParams();
      this._borderWeeksIndicesHash = borderParams.borderWeeksIndicesHash;
      this._yearToWeeksIndicesHash = borderParams.yearToWeeksIndicesHash;
      this._weekIndicesOfLastHistoryWeek = borderParams.weekIndicesOfLastHistoryWeek;
      this._presentStartWeekIndex = borderParams.startPresentSessionWeekIndex;
      this._yearToCalculatedAddedWeekIndicesHash = new Map();
      
      "" === holidaysSpec && "" === correctionsSpec && 
        null === this._weekIndicesOfLastHistoryWeek ? 
        this._isThereCorrections = true : 
        this._isThereCorrections = false;
      
      for (const holidayKey of holidayKeys) {
        const weekIndex = this.getWeekIndex(holidayKey.toCalendar());
        this._entriesHash.set(weekIndex, new SimpleValue(null));
      }
    }

    /**
     * Check if there are history corrections
     * @returns {boolean} True if there are corrections
     */
    hasHistoryCorrections() {
      return this._hasHistoryCorrections;
    }

    /**
     * Get first day of week
     * @returns {number} First day of week
     */
    firstDayOfWeek() {
      return this._presentHistoryEntry.getEntries().firstDayOfWeek();
    }

    /**
     * Check if includes a specific day
     * @param {Date} date - Date to check
     * @returns {boolean} True if includes day
     */
    includesDay(date) {
      return this._getEntriesForDay(date).length > 0;
    }

    /**
     * Get entries for week
     * @param {number} weekIndex - Week index
     * @returns {SessionsWeek} Sessions week
     */
    getEntriesForWeek(weekIndex) {
      if (!this._isThereCorrections) {
        return this._presentHistoryEntry.getEntries();
      }
      
      assertionUtils.assert(weekIndex >= 0);
      const cachedWeek = this._entriesHash.get(weekIndex);
      
      if (void 0 === cachedWeek) {
        return this._getHistoryAndIndexForWeek(weekIndex).getEntries();
      }
      
      let week = cachedWeek.get();
      if (null !== week) {
        return week;
      }
      
      const borderWeeks = this._borderWeeksIndicesHash.get(weekIndex);
      week = void 0 === borderWeeks ? 
        this._getHistoryAndIndexForWeek(weekIndex).getEntries() : 
        this._prepareBorderWeekHistory(borderWeeks);
      
      const weekMap = new Map(week.entriesByDay());
      let weekArray = [...week.list()];
      
      const weekStartLocal = this._weekIndexToLocalDateTime(weekIndex);
      const weekEndLocal = this._weekIndexToLocalDateTime(weekIndex + 1);
      const weekStartBusinessDay = BusinessDay.fromCalendar(weekStartLocal);
      const weekEndBusinessDay = BusinessDay.fromCalendar(weekEndLocal);
      
      for (const [day, sessions] of this._selectHolidays(weekStartBusinessDay, weekEndBusinessDay)) {
        const dayOfWeek = timezoneUtils.get_day_of_week(day.toCalendar());
        const filteredSessions = weekArray.filter(session => session.dayOfWeek() !== dayOfWeek);
        filteredSessions.push(...sessions);
        
        if (0 === filteredSessions.length) {
          weekMap.delete(dayOfWeek);
        } else {
          weekMap.set(dayOfWeek, filteredSessions);
        }
      }
      
      filteredSessions.sort(compareBusinessDays);
      
      const weekEndsCount = ALL_DAYS.length - weekMap.size;
      const sessionsWeek = new SessionsWeek(filteredSessions, weekMap, week.firstDayOfWeek(), weekEndsCount);
      
      return cachedWeek.set(sessionsWeek), sessionsWeek;
    }

    /**
     * Get history by index
     * @param {number} index - History index
     * @returns {SessionsWeek} Sessions week
     */
    getHistoryByIndex(index) {
      return this._entries[index];
    }

    /**
     * Get timezone
     * @returns {string} Timezone string
     */
    timezone() {
      return this._timezone;
    }

    /**
     * Get timezone object
     * @returns {Object} Timezone object
     */
    timezoneObj() {
      return this._timezoneObj;
    }

    /**
     * Get longest session length
     * @returns {number} Longest session length
     */
    longestSessionLength() {
      let maxLength = this._presentHistoryEntry.getEntries().longestSessionLength();
      
      for (let i = 0; i < this._entries.length - 1; i++) {
        const weekLength = this._entries[i].getEntries().longestSessionLength();
        maxLength = Math.max(maxLength, weekLength);
      }
      
      let maxLengthFromCorrections = -1;
      for (const historyEntry of this._holidayAndCorrectionMap.values()) {
        maxLengthFromCorrections = Math.max(maxLengthFromCorrections, 
          ...historyEntry.map(entry => entry.length()));
      }
      
      return Math.max(maxLength, maxLengthFromCorrections);
    }

    /**
     * Check if day is week end
     * @param {Date} date - Date to check
     * @returns {boolean} True if week end
     */
    isWeekEnd(date) {
      const weekIndex = this.getWeekIndex(date);
      let week;
      
      return week = void 0 === this._borderWeeksIndicesHash.get(weekIndex) ? 
        this._getHistoryAndIndexForWeek(weekIndex).getEntries() : 
        this.getEntriesForWeek(weekIndex), 
        week.isWeekEnd(timezoneUtils.get_day_of_week(date));
    }

    /**
     * Check if day is calendar week end
     * @param {Date} date - Date to check
     * @returns {boolean} True if calendar week end
     */
    isCalWeekEnd(date) {
      const dayOfWeek = timezoneUtils.get_day_of_week(date);
      
      if (!this._isThereCorrections) {
        return this._presentHistoryEntry.getEntries().isWeekEnd(dayOfWeek);
      }
      
      const weekIndex = this.getWeekIndex(date);
      const week = this.getEntriesForWeek(weekIndex);
      const businessDay = BusinessDay.fromCalendar(date);
      const corrections = this._holidayAndCorrectionMap.get(businessDay);
      
      return void 0 === corrections ? week.isWeekEnd(dayOfWeek) : 0 === corrections.length;
    }

    /**
     * Get holidays from year start
     * @param {Date} date - Start date
     * @returns {number} Number of holidays
     */
    holidaysFromYearStart(date) {
      const businessDay = date instanceof BusinessDay ? date : BusinessDay.fromCalendar(date);
      return this._holidaysFromYearStart(businessDay);
    }

    /**
     * Get days off from year start
     * @param {Date} date - Start date
     * @returns {number} Number of days off
     */
    daysOffFromYearStart(date) {
      const yearStart = timezoneUtils.get_cal(UTC_TIMEZONE, timezoneUtils.get_year(date), dateTimeUtils.JANUARY, 1);
      const weekIndex = this.getWeekIndex(yearStart);
      const dayOfWeek = timezoneUtils.get_day_of_week(yearStart);
      const previousDayOfWeek = timezoneUtils.get_day_of_week(date) - 1;
      
      if (timezoneUtils.get_day_of_year(date) + weekStart <= dateTimeUtils.LAST_DAY_OF_WEEK + dateTimeUtils.FIRST_DAY_OF_WEEK) {
        return this._getDaysOffForWeekInBorders(weekIndex, previousDayOfWeek, dayOfWeek);
      }
      
      const currentWeekIndex = this.getWeekIndex(date);
      let daysOff = this._getDaysOffForWeekInBorders(weekIndex, previousDayOfWeek, dateTimeUtils.LAST_DAY_OF_WEEK);
      
      for (let i = weekIndex + 1; i < this.getEntriesForWeek(currentWeekIndex); i++) {
        daysOff += this.getEntriesForWeek(i).weekEndsCount();
      }
      
      return daysOff += this._getDaysOffForWeekInBorders(this.getEntriesForWeek(currentWeekIndex), dateTimeUtils.FIRST_DAY_OF_WEEK, previousDayOfWeek);
      
      return daysOff;
    }

    /**
     * Get week ends count for single session
     * @returns {number} Week ends count
     */
    weekEndsCountForSingleSession() {
      assertionUtils.assert(!this.hasHistoryCorrections());
      return this._presentHistoryEntry.getEntries().weekEndsCount();
    }

    /**
     * Check if intraday can be built from 24x7
     * @param {number} sessionLength - Session length
     * @returns {boolean} True if possible
     */
    intradayCanBeBuiltFrom24x7(sessionLength) {
      for (const week of this._entries) {
        if (!week.getEntries().list().every(session => 
            session.start() % sessionLength === 0 && session.length() % sessionLength === 0)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Check if intraday can be built from 24x7 seconds
     * @param {number} sessionLength - Session length in seconds
     * @returns {boolean} True if possible
     */
    intradayCanBeBuiltFrom24x7Seconds(sessionLength) {
      for (const week of this._entries) {
        if (!week.getEntries().list().every(session => 
            60 * session.start() % sessionLength === 0 && 60 * session.length() % sessionLength === 0)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Get index of session
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {number} timeOffset - Time offset
     * @returns {HistoryEntry} History entry
     */
    indexOfSession(weekIndex, dayOfWeek, timeOffset) {
      assertionUtils.assert(dayOfWeek >= dateTimeUtils.SUNDAY && dayOfWeek <= dateTimeUtils.SATURDAY);
      assertionUtils.assert(timeOffset >= 0 && timeOffset < dateTimeUtils.minutesPerDay);
      
      const week = this.getEntriesForWeek(weekIndex);
      const weekArray = week.list();
      
      let lowerBoundIndex = timezoneUtils.lowerbound(weekArray, new BusinessDay(dayOfWeek, timeOffset, 0), comesBefore);
      
      if (lowerBoundIndex < weekArray.length) {
        return new HistoryEntry(weekIndex, lowerBoundIndex, [...weekArray]);
      }
      
      let nextWeekIndex = weekIndex + 1;
      const nextWeek = this.getEntriesForWeek(nextWeekIndex);
      
      if (0 !== nextWeek.list().length) {
        const adjustedOffset = -(dateTimeUtils.minutesPerDay - timeOffset + nextWeek.firstDayOfWeek() * dateTimeUtils.minutesPerDay);
        lowerBoundIndex = timezoneUtils.lowerbound(nextWeek.list(), new BusinessDay(nextWeek.firstDayOfWeek(), adjustedOffset, 0), comesBefore);
        
        if (lowerBoundIndex < nextWeek.list().length) {
          return new HistoryEntry(nextWeekIndex, lowerBoundIndex, [...nextWeek.list()]);
        }
      }
      
      for (;;) {
        if (nextWeekIndex++, timeOffset -= dateTimeUtils.minutesPerDay, nextWeek = this.getEntriesForWeek(nextWeekIndex), 
            0 !== nextWeek.list().length) {
          const adjustedOffset = -(dateTimeUtils.minutesPerDay - timeOffset + nextWeek.firstDayOfWeek() * dateTimeUtils.minutesPerDay);
          lowerBoundIndex = timezoneUtils.lowerbound(nextWeek.list(), new BusinessDay(nextWeek.firstDayOfWeek(), adjustedOffset, 0), comesBefore);
          
          if (!(lowerBoundIndex >= nextWeek.list().length)) {
            return new HistoryEntry(nextWeekIndex, lowerBoundIndex, [...nextWeek.list()]);
          }
        }
      }
    }

    /**
     * Find session
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {number} timeOffset - Time offset
     * @param {number} sessionIndex - Session index
     * @returns {HistoryEntry} History entry
     */
    findSession(weekIndex, dayOfWeek, timeOffset, sessionIndex = 0) {
      const indexResult = this.indexOfSession(weekIndex, dayOfWeek, timeOffset);
      const week = indexResult.entries;
      let entryIndex = indexResult.entryIndex;
      
      if (0 !== sessionIndex) {
        const currentDayOfWeek = week[entryIndex].dayOfWeek();
        const direction = sessionIndex > 0 ? 1 : -1;
        
        for (;;) {
          const nextIndex = entryIndex + direction;
          if (timeOffset < 0 || timeOffset >= week.length || 
              week[nextIndex].dayOfWeek() !== currentDayOfWeek) {
            break;
          }
          entryIndex = nextIndex;
        }
      }
      
      return new HistoryEntry(indexResult.weekIndex, entryIndex, week);
    }

    /**
     * Get week index
     * @param {Date} date - Date
     * @returns {number} Week index
     */
    getWeekIndex(date) {
      return this._isThereCorrections ? 
        SessionsSpec._getWeekIndexImpl(date) : 0;
    }

    /**
     * Correct trading day
     * @param {Date} date - Date to correct
     * @returns {Date} Corrected date
     */
    correctTradingDay(date) {
      const weekIndex = this.getWeekIndex(date);
      const correctedOffset = this._correctTradingDay(this.getWeekIndex(weekIndex), timezoneUtils.get_day_of_week(date), timezoneUtils.get_minutes_with_hours(date));
      const clonedDate = timezoneUtils.clone(date);
      
      return timezoneUtils.add_date(clonedDate, correctedOffset), clonedDate;
    }

    /**
     * Align to session start
     * @param {Date} date - Date to align
     * @param {number} sessionIndex - Session index
     * @returns {number} Session length
     */
    alignToSessionStart(date, sessionIndex = 0) {
      const dayOfWeek = timezoneUtils.get_day_of_week(date);
      const timeOffset = timezoneUtils.get_minutes_from_midnight(date);
      const weekIndex = this.getWeekIndex(date);
      const sessionResult = this.findSession(weekIndex, dayOfWeek, timeOffset, sessionIndex);
      const session = sessionResult.getEntry();
      
      const dayDiff = session.dayOfWeek() - dayOfWeek + 7 * Math.trunc(sessionResult.weekIndex - weekIndex);
      
      if (0 !== dayDiff) {
        timezoneUtils.add_date(date, dayDiff);
      }
      
      const sessionStart = session.startOffset();
      return timezoneUtils.set_hms(date, Math.trunc(sessionStart / 60), sessionStart % 60, 0, 0), session.length();
    }

    /**
     * Convert business days to calendar days
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {Date} date - Date
     * @returns {Array} Array of calendar days
     */
    businessDaysToCalendarDays(weekIndex, dayOfWeek, date) {
      return this._businessDaysToCalendarDays(this.getWeekIndex(weekIndex), dayOfWeek, date);
    }

    /**
     * Convert calendar days to business days
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {Date} date - Date
     * @returns {Array} Array of business days
     */
    calendarDaysToBusinessDays(weekIndex, dayOfWeek, date) {
      return this._calendarDaysToBusinessDays(this.getWeekIndex(weekIndex), dayOfWeek, date);
    }

    /**
     * Align to nearest session start
     * @param {Date} date - Date to align
     * @param {number} sessionIndex - Session index
     * @returns {Date} Aligned date
     */
    alignToNearestSessionStart(date, sessionIndex) {
      return this._alignToNearestSessionValue(date, sessionIndex, this._entrySessionStart.bind(this));
    }

    /**
     * Get week index implementation
     * @param {Date} date - Date
     * @returns {number} Week index
     */
    static _getWeekIndexImpl(date) {
      return timezoneUtils.get_day_of_year(date);
    }

    /**
     * Select holidays between dates
     * @param {BusinessDay} startDate - Start date
     * @param {BusinessDay} endDate - End date
     * @returns {Array} Array of holidays
     */
    _selectHolidays(startDate, endDate) {
      const holidays = [];
      
      for (const [date, sessions] of this._holidayAndCorrectionMap) {
        const dayOfWeek = timezoneUtils.get_day_of_week(date.toCalendar());
        const filteredSessions = sessions.filter(session => session.dayOfWeek() !== dayOfWeek);
        filteredSessions.push(...sessions);
        
        if (0 === filteredSessions.length) {
          holidays.delete(dayOfWeek);
        } else {
          holidays.set(dayOfWeek, filteredSessions);
        }
      }
      
      return holidays;
    }

    /**
     * Get history and index for week
     * @param {number} weekIndex - Week index
     * @returns {SessionsWeek} Sessions week
     */
    _getHistoryAndIndexForWeek(weekIndex) {
      return this._entries[weekIndex];
    }

    /**
     * Convert week index to local date/time
     * @param {number} weekIndex - Week index
     * @returns {Date} Local date/time
     */
    _weekIndexToLocalDateTime(weekIndex) {
      // Implementation would depend on specific date/time utilities
      throw new Error("Not implemented");
    }

    /**
     * Prepare sessions border parameters
     * @returns {Object} Border parameters
     */
    _prepareSessionsBorderParams() {
      // Implementation would calculate border parameters
      throw new Error("Not implemented");
    }

    /**
     * Get days off for week in borders
     * @param {number} startWeekIndex - Start week index
     * @param {number} startDayOfWeek - Start day of week
     * @param {number} endDayOfWeek - End day of week
     * @returns {number} Number of days off
     */
    _getDaysOffForWeekInBorders(startWeekIndex, startDayOfWeek, endDayOfWeek) {
      // Implementation would calculate days off in borders
      throw new Error("Not implemented");
    }

    /**
     * Convert business days to calendar days
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {Date} date - Date
     * @returns {Array} Array of calendar days
     */
    _businessDaysToCalendarDays(weekIndex, dayOfWeek, date) {
      // Implementation would convert business days to calendar days
      throw new Error("Not implemented");
    }

    /**
     * Convert calendar days to business days
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {Date} date - Date
     * @returns {Array} Array of business days
     */
    _calendarDaysToBusinessDays(weekIndex, dayOfWeek, date) {
      // Implementation would convert calendar days to business days
      throw new Error("Not implemented");
    }

    /**
     * Align to nearest session value
     * @param {Date} date - Date to align
     * @param {number} sessionIndex - Session index
     * @param {Function} sessionStartFunc - Session start function
     * @returns {Date} Aligned date
     */
    _alignToNearestSessionValue(date, sessionIndex, sessionStartFunc) {
      // Implementation would align to nearest session
      throw new Error("Not implemented");
    }

    /**
     * Get holidays from year start
     * @param {BusinessDay} businessDay - Business day
     * @returns {number} Number of holidays
     */
    _holidaysFromYearStart(businessDay) {
      // Implementation would calculate holidays from year start
      throw new Error("Not implemented");
    }

    /**
     * Correct trading day implementation
     * @param {number} weekIndex - Week index
     * @param {number} dayOfWeek - Day of week
     * @param {number} timeOffset - Time offset
     * @returns {number} Corrected offset
     */
    _correctTradingDay(weekIndex, dayOfWeek, timeOffset) {
      // Implementation would correct trading day
      throw new Error("Not implemented");
    }

    /**
     * Prepare border week history
     * @param {Object} borderWeeks - Border weeks
     * @returns {SessionsWeek} Sessions week
     */
    _prepareBorderWeekHistory(borderWeeks) {
      // Implementation would prepare border week history
      throw new Error("Not implemented");
    }
  }
}
