/**
 * Module 10892: Interval and Resolution Utilities
 * 
 * Provides core time interval handling for the TradingView charting library.
 * Manages chart resolutions including ticks, seconds, minutes, hours, days, weeks, months, and range.
 * 
 * @module IntervalUtilities
 * @version 1.0.0
 */

/**
 * Regular expression for parsing interval strings with letter suffix
 * Matches patterns like: "1T", "5S", "60H", "1D", "1W", "1M", "1R"
 * Groups: [full_match, multiplier, resolution_letter]
 * @type {RegExp}
 */
const INTERVAL_LETTER_REGEX = /^(\d*)([TSHDWMR])$/;

/**
 * Regular expression for parsing minute-only interval strings
 * Matches patterns like: "1", "5", "60" (minutes without suffix)
 * @type {RegExp}
 */
const MINUTES_ONLY_REGEX = /^(\d+)$/;

/**
 * ResolutionKind - Types of chart resolutions
 * @enum {string}
 */
export const ResolutionKind = {
  /** Individual price ticks */
  Ticks: 'ticks',
  /** Second-based intervals */
  Seconds: 'seconds',
  /** Minute-based intervals */
  Minutes: 'minutes',
  /** Daily candles */
  Days: 'days',
  /** Weekly candles */
  Weeks: 'weeks',
  /** Monthly candles */
  Months: 'months',
  /** Full historical range */
  Range: 'range',
  /** Invalid or unrecognized resolution */
  Invalid: 'invalid'
};

/**
 * SpecialResolutionKind - Extended resolution types for GUI display
 * @enum {string}
 */
export const SpecialResolutionKind = {
  /** Hour-based intervals (displayed separately in UI) */
  Hours: 'hours'
};

/**
 * Millisecond multipliers for each resolution type
 * Maps resolution kinds to their base millisecond values
 * @type {Object<ResolutionKind, number>}
 */
const resolutionMultipliers = {};
resolutionMultipliers[ResolutionKind.Ticks] = 1;
resolutionMultipliers[ResolutionKind.Seconds] = 1000;
resolutionMultipliers[ResolutionKind.Minutes] = 60 * resolutionMultipliers[ResolutionKind.Seconds];
resolutionMultipliers[ResolutionKind.Days] = 1440 * resolutionMultipliers[ResolutionKind.Minutes];
resolutionMultipliers[ResolutionKind.Weeks] = 7 * resolutionMultipliers[ResolutionKind.Days];

/**
 * Letter code to ResolutionKind mapping
 * @type {Object<string, ResolutionKind>}
 */
const letterToResolution = {
  T: ResolutionKind.Ticks,
  S: ResolutionKind.Seconds,
  D: ResolutionKind.Days,
  W: ResolutionKind.Weeks,
  M: ResolutionKind.Months,
  R: ResolutionKind.Range
};

/**
 * Set of intraday resolution kinds (sub-daily)
 * @type {Set<ResolutionKind>}
 */
const intradayResolutions = new Set([
  ResolutionKind.Ticks,
  ResolutionKind.Seconds,
  ResolutionKind.Minutes
]);

/**
 * Interval class representing a chart time interval
 * 
 * Encapsulates both the resolution kind and multiplier for precise time interval representation.
 * Supports validation, comparison, and conversion operations.
 * 
 * @example
 * const interval = new Interval(ResolutionKind.Minutes, 5); // 5-minute interval
 * console.log(interval.value()); // "5"
 * 
 * @example
 * const daily = Interval.parse('1D');
 * console.log(daily.isDWM()); // true (Days/Weeks/Months)
 */
export class Interval {
  /**
   * Internal resolution kind
   * @private
   * @type {ResolutionKind}
   */
  _kind = ResolutionKind.Invalid;

  /**
   * Internal multiplier value
   * @private
   * @type {number}
   */
  _multiplier = 0;

  /**
   * Creates a new Interval instance
   * @param {ResolutionKind} kind - The resolution kind
   * @param {number} multiplier - The multiplier (must be > 0 for valid intervals)
   * 
   * @example
   * const interval = new Interval(ResolutionKind.Days, 1);
   * const invalid = new Interval(ResolutionKind.Invalid, 0);
   */
  constructor(kind, multiplier) {
    if (kind !== ResolutionKind.Invalid && multiplier > 0) {
      this._kind = kind;
      this._multiplier = multiplier;
    }
  }

  /**
   * Gets the resolution kind
   * @returns {ResolutionKind} The resolution kind
   */
  kind() {
    return this._kind;
  }

  /**
   * Gets the GUI-appropriate resolution kind
   * For minute intervals >= 60, returns Hours instead of Minutes
   * @returns {ResolutionKind|SpecialResolutionKind} The GUI resolution kind
   */
  guiKind() {
    return this.isMinuteHours() ? SpecialResolutionKind.Hours : this._kind;
  }

  /**
   * Gets the multiplier value
   * @returns {number} The multiplier
   */
  multiplier() {
    return this._multiplier;
  }

  /**
   * Checks if the interval is valid
   * @returns {boolean} True if kind is not Invalid and multiplier > 0
   */
  isValid() {
    return this.kind() !== ResolutionKind.Invalid && this.multiplier() > 0;
  }

  /**
   * Checks if this is a DWM (Days/Weeks/Months) interval
   * @returns {boolean} True if valid and not Range or Intraday
   */
  isDWM() {
    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks();
  }

  /**
   * Checks if this is an intraday interval (sub-daily)
   * @returns {boolean} True if valid and resolution is Ticks, Seconds, or Minutes
   */
  isIntraday() {
    const isSubDaily = intradayResolutions.has(this.kind());
    return this.isValid() && isSubDaily;
  }

  /**
   * Checks if this is a seconds-based interval
   * @returns {boolean} True if resolution is Seconds
   */
  isSeconds() {
    return this.kind() === ResolutionKind.Seconds;
  }

  /**
   * Checks if this is a minutes-based interval
   * @returns {boolean} True if resolution is Minutes
   */
  isMinutes() {
    return this.kind() === ResolutionKind.Minutes;
  }

  /**
   * Checks if this is a minute-hours interval (minutes >= 60)
   * These are displayed as hours in the GUI
   * @returns {boolean} True if minutes with multiplier >= 60
   */
  isMinuteHours() {
    return this.kind() === ResolutionKind.Minutes && isHour(this.multiplier());
  }

  /**
   * Checks if this is a daily interval
   * @returns {boolean} True if resolution is Days
   */
  isDays() {
    return this.kind() === ResolutionKind.Days;
  }

  /**
   * Checks if this is a weekly interval
   * @returns {boolean} True if resolution is Weeks
   */
  isWeeks() {
    return this.kind() === ResolutionKind.Weeks;
  }

  /**
   * Checks if this is a monthly interval
   * @returns {boolean} True if resolution is Months
   */
  isMonths() {
    return this.kind() === ResolutionKind.Months;
  }

  /**
   * Checks if this is a full-range interval
   * @returns {boolean} True if resolution is Range
   */
  isRange() {
    return this.kind() === ResolutionKind.Range;
  }

  /**
   * Checks if this is a tick-based interval
   * @returns {boolean} True if resolution is Ticks
   */
  isTicks() {
    return this.kind() === ResolutionKind.Ticks;
  }

  /**
   * Checks if this is exactly 1 tick
   * @returns {boolean} True if ticks with multiplier = 1
   */
  is1Tick() {
    return this.isTicks() && this.multiplier() === 1;
  }

  /**
   * Checks if this interval is time-based (not Range)
   * @returns {boolean} True if not a Range interval
   */
  isTimeBased() {
    return !this.isRange();
  }

  /**
   * Gets the single-letter code for the resolution
   * @returns {string} First letter of resolution kind, or empty string if invalid
   */
  letter() {
    if (!this.isValid() || this.kind() === ResolutionKind.Minutes) {
      return '';
    }
    return this.kind()[0].toUpperCase();
  }

  /**
   * Gets the string representation of the interval
   * @returns {string} Formatted interval string (e.g., "5", "1D", "60")
   */
  value() {
    if (!this.isValid()) {
      return '';
    }
    if (this.kind() === ResolutionKind.Minutes) {
      return `${this.multiplier()}`;
    }
    return `${this.multiplier()}${this.letter()}`;
  }

  /**
   * Checks equality with another Interval
   * @param {Interval} other - The interval to compare
   * @returns {boolean} True if both kind and multiplier match
   * @throws {Error} If argument is not an Interval
   */
  isEqualTo(other) {
    if (!(other instanceof Interval)) {
      throw new Error('Argument is not an Interval');
    }
    if (!this.isValid() || !other.isValid()) {
      return false;
    }
    return this.kind() === other.kind() && this.multiplier() === other.multiplier();
  }

  /**
   * Converts the interval to milliseconds
   * @param {number} referenceDate - Reference timestamp for month calculations (default: now)
   * @returns {number} Duration in milliseconds, or NaN for invalid/range intervals
   */
  inMilliseconds(referenceDate = Date.now()) {
    if (!this.isValid() || this.isRange()) {
      return NaN;
    }

    if (this.isMonths()) {
      const date = new Date(referenceDate);
      date.setUTCMonth(date.getUTCMonth() + (this.multiplier() || 1));
      return +date - referenceDate;
    }

    const multiplier = this.multiplier();
    return resolutionMultipliers[this.kind()] * multiplier;
  }

  /**
   * Static method to check equality of two interval values
   * @param {string} a - First interval string
   * @param {string} b - Second interval string
   * @returns {boolean} True if intervals are equal
   */
  static isEqual(a, b) {
    return a === b || Interval.parse(a).isEqualTo(Interval.parse(b));
  }

  /**
   * Parses an interval string with extended resolution support
   * Handles formats: "1T", "5S", "60H", "1D", "1W", "1M", "1R", "45" (minutes)
   * @param {string} value - The interval string to parse
   * @returns {{interval: Interval, guiResolutionKind: ResolutionKind|SpecialResolutionKind}}
   * 
   * @example
   * const result = Interval.parseExt('60H');
   * console.log(result.interval.kind()); // ResolutionKind.Minutes
   * console.log(result.guiResolutionKind); // SpecialResolutionKind.Hours
   */
  static parseExt(value) {
    value = `${value}`.split(',')[0].toUpperCase();
    
    let match = INTERVAL_LETTER_REGEX.exec(value);
    if (match !== null) {
      const [, multStr, letter] = match;
      
      if (letter === 'H') {
        // Hour format (e.g., "1H", "4H") - converts to 60-minute intervals
        const multiplier = parseMultiplier(multStr);
        return {
          interval: new Interval(ResolutionKind.Minutes, 60 * multiplier),
          guiResolutionKind: SpecialResolutionKind.Hours
        };
      }
      
      const resolution = letterToResolution[letter];
      const multiplier = parseMultiplier(multStr);
      return {
        interval: new Interval(resolution, multiplier),
        guiResolutionKind: resolution
      };
    }
    
    // Try minute-only format
    match = MINUTES_ONLY_REGEX.exec(value);
    if (match !== null) {
      const [, minStr] = match;
      return {
        interval: new Interval(ResolutionKind.Minutes, parseMultiplier(minStr)),
        guiResolutionKind: ResolutionKind.Minutes
      };
    }
    
    // Invalid format
    return {
      interval: new Interval(ResolutionKind.Invalid, 0),
      guiResolutionKind: ResolutionKind.Invalid
    };
  }

  /**
   * Parses an interval string and returns the Interval object
   * @param {string} value - The interval string to parse
   * @returns {Interval} The parsed interval
   * 
   * @example
   * const interval = Interval.parse('5D');
   * console.log(interval.isDays()); // true
   */
  static parse(value) {
    return Interval.parseExt(value).interval;
  }

  /**
   * Gets the resolution kind from an interval string
   * @param {string} value - The interval string
   * @returns {ResolutionKind} The resolution kind
   */
  static kind(value) {
    return Interval.parse(value).kind();
  }

  /**
   * Checks if an interval string represents a valid interval
   * @param {string} value - The interval string
   * @returns {boolean} True if valid
   */
  static isValid(value) {
    return Interval.parse(value).isValid();
  }

  /**
   * Checks if an interval string represents a DWM interval
   * @param {string} value - The interval string
   * @returns {boolean} True if DWM
   */
  static isDWM(value) {
    return Interval.parse(value).isDWM();
  }

  /**
   * Checks if an interval string represents an intraday interval
   * @param {string} value - The interval string
   * @returns {boolean} True if intraday
   */
  static isIntraday(value) {
    return Interval.parse(value).isIntraday();
  }

  /**
   * Checks if an interval string represents a seconds interval
   * @param {string} value - The interval string
   * @returns {boolean} True if seconds
   */
  static isSeconds(value) {
    return Interval.parse(value).isSeconds();
  }

  /**
   * Checks if an interval string represents a minutes interval
   * @param {string} value - The interval string
   * @returns {boolean} True if minutes
   */
  static isMinutes(value) {
    return Interval.parse(value).isMinutes();
  }

  /**
   * Checks if an interval string represents a minute-hours interval
   * @param {string} value - The interval string
   * @returns {boolean} True if minute-hours (>= 60 minutes)
   */
  static isMinuteHours(value) {
    return Interval.parse(value).isMinuteHours();
  }

  /**
   * Checks if an interval string represents a daily interval
   * @param {string} value - The interval string
   * @returns {boolean} True if daily
   */
  static isDays(value) {
    return Interval.parse(value).isDays();
  }

  /**
   * Checks if an interval string represents a weekly interval
   * @param {string} value - The interval string
   * @returns {boolean} True if weekly
   */
  static isWeeks(value) {
    return Interval.parse(value).isWeeks();
  }

  /**
   * Checks if an interval string represents a monthly interval
   * @param {string} value - The interval string
   * @returns {boolean} True if monthly
   */
  static isMonths(value) {
    return Interval.parse(value).isMonths();
  }

  /**
   * Checks if an interval string represents a range interval
   * @param {string} value - The interval string
   * @returns {boolean} True if range
   */
  static isRange(value) {
    return Interval.parse(value).isRange();
  }

  /**
   * Checks if an interval string represents a tick interval
   * @param {string} value - The interval string
   * @returns {boolean} True if ticks
   */
  static isTicks(value) {
    return Interval.parse(value).isTicks();
  }

  /**
   * Checks if an interval string represents a time-based interval
   * @param {string} value - The interval string
   * @returns {boolean} True if time-based (not range)
   */
  static isTimeBased(value) {
    return Interval.parse(value).isTimeBased();
  }

  /**
   * Normalizes an interval string to its canonical form
   * @param {string} value - The interval string to normalize
   * @returns {string|null} Normalized interval string, or null if invalid
   * 
   * @example
   * Interval.normalize('1d'); // "1D"
   * Interval.normalize('invalid'); // null
   */
  static normalize(value) {
    const interval = Interval.parse(value);
    return interval.isValid() ? interval.value() : null;
  }
}

/**
 * Parses a multiplier string to an integer
 * Empty string defaults to 1
 * @param {string} str - The multiplier string
 * @returns {number} Parsed integer value
 * @private
 */
function parseMultiplier(str) {
  return str.length === 0 ? 1 : parseInt(str, 10);
}

/**
 * Checks if a minute multiplier represents an hour-based interval
 * Hour-based intervals are multiples of 60 minutes
 * @param {number} multiplier - The minute multiplier
 * @returns {boolean} True if multiplier >= 60 and divisible by 60
 * 
 * @example
 * isHour(60); // true (1 hour)
 * isHour(120); // true (2 hours)
 * isHour(45); // false
 * isHour(30); // false
 */
export function isHour(multiplier) {
  return multiplier >= 60 && !(multiplier % 60);
}

/**
 * Gets the resolution kind name for display purposes
 * @param {ResolutionKind} kind - The resolution kind
 * @returns {string} Human-readable name
 */
export function getResolutionName(kind) {
  const names = {
    [ResolutionKind.Ticks]: 'Ticks',
    [ResolutionKind.Seconds]: 'Seconds',
    [ResolutionKind.Minutes]: 'Minutes',
    [ResolutionKind.Days]: 'Days',
    [ResolutionKind.Weeks]: 'Weeks',
    [ResolutionKind.Months]: 'Months',
    [ResolutionKind.Range]: 'Range',
    [ResolutionKind.Invalid]: 'Invalid'
  };
  return names[kind] || kind;
}

/**
 * Creates a common interval preset
 * @param {string} type - Preset type ('1min', '5min', '15min', '1h', '1d', '1w', '1M')
 * @returns {Interval} The corresponding interval
 * 
 * @example
 * const fiveMin = createIntervalPreset('5min');
 * const oneDay = createIntervalPreset('1d');
 */
export function createIntervalPreset(type) {
  const presets = {
    '1min': new Interval(ResolutionKind.Minutes, 1),
    '5min': new Interval(ResolutionKind.Minutes, 5),
    '15min': new Interval(ResolutionKind.Minutes, 15),
    '30min': new Interval(ResolutionKind.Minutes, 30),
    '1h': new Interval(ResolutionKind.Minutes, 60),
    '2h': new Interval(ResolutionKind.Minutes, 120),
    '4h': new Interval(ResolutionKind.Minutes, 240),
    '1d': new Interval(ResolutionKind.Days, 1),
    '1w': new Interval(ResolutionKind.Weeks, 1),
    '1M': new Interval(ResolutionKind.Months, 1)
  };
  return presets[type] || new Interval(ResolutionKind.Invalid, 0);
}
