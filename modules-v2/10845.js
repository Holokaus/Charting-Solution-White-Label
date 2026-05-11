/**
 * Module 10845: Timezone Utilities
 * 
 * Provides timezone management functionality for the TradingView charting library.
 * Handles available timezones, timezone validation, support checking, and title retrieval.
 * 
 * @module TimezoneUtilities
 * @version 1.0.0
 */

import { parseTzOffset } from './95523-timezone-parser';
import { t as translate } from './11542-localization';

/**
 * Base timezone entries (always available)
 * @type {Array<{id: string, title: string}>}
 */
const baseTimezones = [
  {
    id: 'Etc/UTC',
    get title() {
      return translate(null, void 0, 1833);
    }
  },
  {
    id: 'exchange',
    get title() {
      return translate(null, void 0, 86905);
    }
  }
];

/**
 * Standard timezone database with offset information
 * @type {Array<{id: string, title: string, offset: number}>}
 */
const standardTimezones = [
  { id: 'Africa/Cairo', get title() { return translate(null, void 0, 65736); }, offset: 0 },
  { id: 'Africa/Casablanca', get title() { return translate(null, void 0, 70409); }, offset: 0 },
  { id: 'Africa/Johannesburg', get title() { return translate(null, void 0, 39585); }, offset: 0 },
  { id: 'Africa/Lagos', get title() { return translate(null, void 0, 19931); }, offset: 0 },
  { id: 'Africa/Nairobi', get title() { return translate(null, void 0, 40977); }, offset: 0 },
  { id: 'Africa/Tunis', get title() { return translate(null, void 0, 21007); }, offset: 0 },
  { id: 'America/Anchorage', get title() { return translate(null, void 0, 42630); }, offset: 0 },
  { id: 'America/Argentina/Buenos_Aires', get title() { return translate(null, void 0, 25282); }, offset: 0 },
  { id: 'America/Bogota', get title() { return translate(null, void 0, 73905); }, offset: 0 },
  { id: 'America/Caracas', get title() { return translate(null, void 0, 30948); }, offset: 0 },
  { id: 'America/Chicago', get title() { return translate(null, void 0, 72452); }, offset: 0 },
  { id: 'America/El_Salvador', get title() { return translate(null, void 0, 55502); }, offset: 0 },
  { id: 'America/Juneau', get title() { return translate(null, void 0, 67560); }, offset: 0 },
  { id: 'America/Lima', get title() { return translate(null, void 0, 59444); }, offset: 0 },
  { id: 'America/Los_Angeles', get title() { return translate(null, void 0, 28733); }, offset: 0 },
  { id: 'America/Mexico_City', get title() { return translate(null, void 0, 73332); }, offset: 0 },
  { id: 'America/New_York', get title() { return translate(null, void 0, 40544); }, offset: 0 },
  { id: 'America/Phoenix', get title() { return translate(null, void 0, 14055); }, offset: 0 },
  { id: 'America/Santiago', get title() { return translate(null, void 0, 30231); }, offset: 0 },
  { id: 'America/Sao_Paulo', get title() { return translate(null, void 0, 91912); }, offset: 0 },
  { id: 'America/Toronto', get title() { return translate(null, void 0, 10095); }, offset: 0 },
  { id: 'America/Vancouver', get title() { return translate(null, void 0, 32838); }, offset: 0 },
  { id: 'US/Mountain', get title() { return translate(null, void 0, 27358); }, offset: 0 },
  { id: 'Asia/Almaty', get title() { return translate(null, void 0, 98128); }, offset: 0 },
  { id: 'Asia/Ashkhabad', get title() { return translate(null, void 0, 63627); }, offset: 0 },
  { id: 'Asia/Bahrain', get title() { return translate(null, void 0, 90594); }, offset: 0 },
  { id: 'Asia/Bangkok', get title() { return translate(null, void 0, 47045); }, offset: 0 },
  { id: 'Asia/Chongqing', get title() { return translate(null, void 0, 50349); }, offset: 0 },
  { id: 'Asia/Colombo', get title() { return translate(null, void 0, 10871); }, offset: 0 },
  { id: 'Asia/Dhaka', get title() { return translate(null, void 0, 24959); }, offset: 0 },
  { id: 'Asia/Dubai', get title() { return translate(null, void 0, 23650); }, offset: 0 },
  { id: 'Asia/Ho_Chi_Minh', get title() { return translate(null, void 0, 34491); }, offset: 0 },
  { id: 'Asia/Hong_Kong', get title() { return translate(null, void 0, 48861); }, offset: 0 },
  { id: 'Asia/Jakarta', get title() { return translate(null, void 0, 14995); }, offset: 0 },
  { id: 'Asia/Jerusalem', get title() { return translate(null, void 0, 36057); }, offset: 0 },
  { id: 'Asia/Karachi', get title() { return translate(null, void 0, 70913); }, offset: 0 },
  { id: 'Asia/Kabul', get title() { return translate(null, void 0, 99563); }, offset: 0 },
  { id: 'Asia/Kathmandu', get title() { return translate(null, void 0, 54533); }, offset: 0 },
  { id: 'Asia/Kolkata', get title() { return translate(null, void 0, 31561); }, offset: 0 },
  { id: 'Asia/Kuala_Lumpur', get title() { return translate(null, void 0, 38561); }, offset: 0 },
  { id: 'Asia/Kuwait', get title() { return translate(null, void 0, 76614); }, offset: 0 },
  { id: 'Asia/Manila', get title() { return translate(null, void 0, 48991); }, offset: 0 },
  { id: 'Asia/Muscat', get title() { return translate(null, void 0, 9865); }, offset: 0 },
  { id: 'Asia/Nicosia', get title() { return translate(null, void 0, 94600); }, offset: 0 },
  { id: 'Asia/Qatar', get title() { return translate(null, void 0, 28756); }, offset: 0 },
  { id: 'Asia/Riyadh', get title() { return translate(null, void 0, 37974); }, offset: 0 },
  { id: 'Asia/Seoul', get title() { return translate(null, void 0, 26820); }, offset: 0 },
  { id: 'Asia/Shanghai', get title() { return translate(null, void 0, 1852); }, offset: 0 },
  { id: 'Asia/Singapore', get title() { return translate(null, void 0, 77377); }, offset: 0 },
  { id: 'Asia/Taipei', get title() { return translate(null, void 0, 11034); }, offset: 0 },
  { id: 'Asia/Tehran', get title() { return translate(null, void 0, 6686); }, offset: 0 },
  { id: 'Asia/Tokyo', get title() { return translate(null, void 0, 69122); }, offset: 0 },
  { id: 'Asia/Yangon', get title() { return translate(null, void 0, 53168); }, offset: 0 },
  { id: 'Atlantic/Azores', get title() { return translate(null, void 0, 87580); }, offset: 0 },
  { id: 'Atlantic/Reykjavik', get title() { return translate(null, void 0, 13386); }, offset: 0 },
  { id: 'Australia/Adelaide', get title() { return translate(null, void 0, 37265); }, offset: 0 },
  { id: 'Australia/Brisbane', get title() { return translate(null, void 0, 79336); }, offset: 0 },
  { id: 'Australia/Perth', get title() { return translate(null, void 0, 24436); }, offset: 0 },
  { id: 'Australia/Sydney', get title() { return translate(null, void 0, 31622); }, offset: 0 },
  { id: 'Europe/Amsterdam', get title() { return translate(null, void 0, 36485); }, offset: 0 },
  { id: 'Europe/Athens', get title() { return translate(null, void 0, 73702); }, offset: 0 },
  { id: 'Europe/Belgrade', get title() { return translate(null, void 0, 71797); }, offset: 0 },
  { id: 'Europe/Berlin', get title() { return translate(null, void 0, 64313); }, offset: 0 },
  { id: 'Europe/Bratislava', get title() { return translate(null, void 0, 70876); }, offset: 0 },
  { id: 'Europe/Brussels', get title() { return translate(null, void 0, 91499); }, offset: 0 },
  { id: 'Europe/Bucharest', get title() { return translate(null, void 0, 33672); }, offset: 0 },
  { id: 'Europe/Budapest', get title() { return translate(null, void 0, 20313); }, offset: 0 },
  { id: 'Europe/Copenhagen', get title() { return translate(null, void 0, 38917); }, offset: 0 },
  { id: 'Europe/Dublin', get title() { return translate(null, void 0, 79716); }, offset: 0 },
  { id: 'Europe/Helsinki', get title() { return translate(null, void 0, 48203); }, offset: 0 },
  { id: 'Europe/Istanbul', get title() { return translate(null, void 0, 78326); }, offset: 0 },
  { id: 'Europe/Lisbon', get title() { return translate(null, void 0, 53375); }, offset: 0 },
  { id: 'Europe/London', get title() { return translate(null, void 0, 19439); }, offset: 0 },
  { id: 'Europe/Luxembourg', get title() { return translate(null, void 0, 81038); }, offset: 0 },
  { id: 'Europe/Madrid', get title() { return translate(null, void 0, 52066); }, offset: 0 },
  { id: 'Europe/Malta', get title() { return translate(null, void 0, 38365); }, offset: 0 },
  { id: 'Europe/Moscow', get title() { return translate(null, void 0, 64039); }, offset: 0 },
  { id: 'Europe/Oslo', get title() { return translate(null, void 0, 75722); }, offset: 0 },
  { id: 'Europe/Paris', get title() { return translate(null, void 0, 61879); }, offset: 0 },
  { id: 'Europe/Prague', get title() { return translate(null, void 0, 81248); }, offset: 0 },
  { id: 'Europe/Riga', get title() { return translate(null, void 0, 94022); }, offset: 0 },
  { id: 'Europe/Rome', get title() { return translate(null, void 0, 52961); }, offset: 0 },
  { id: 'Europe/Stockholm', get title() { return translate(null, void 0, 86716); }, offset: 0 },
  { id: 'Europe/Tallinn', get title() { return translate(null, void 0, 79995); }, offset: 0 },
  { id: 'Europe/Vienna', get title() { return translate(null, void 0, 23160); }, offset: 0 },
  { id: 'Europe/Vilnius', get title() { return translate(null, void 0, 60534); }, offset: 0 },
  { id: 'Europe/Warsaw', get title() { return translate(null, void 0, 5959); }, offset: 0 },
  { id: 'Europe/Zurich', get title() { return translate(null, void 0, 62859); }, offset: 0 },
  { id: 'Pacific/Auckland', get title() { return translate(null, void 0, 66103); }, offset: 0 },
  { id: 'Pacific/Chatham', get title() { return translate(null, void 0, 36549); }, offset: 0 },
  { id: 'Pacific/Fakaofo', get title() { return translate(null, void 0, 98549); }, offset: 0 },
  { id: 'Pacific/Honolulu', get title() { return translate(null, void 0, 79668); }, offset: 0 },
  { id: 'Pacific/Norfolk', get title() { return translate(null, void 0, 67891); }, offset: 0 }
];

/**
 * Processes timezone entries by adding offset information and sorting
 * @param {Array} timezones - Array of timezone objects
 * @param {Array} aliasTimezones - Array of timezone aliases
 * @param {Array} baseList - Base list to append to
 * @returns {Array} Processed and sorted timezone list
 */
function processTimezones(timezones, aliasTimezones, baseList) {
  // Add offset information to standard timezones
  const timezonesWithOffset = timezones.map((tz) => {
    const { id } = tz;
    const { string: offsetString, offset } = parseTzOffset(id);
    return {
      ...tz,
      offset,
      get title() {
        return `(${offsetString}) ${tz.title}`;
      }
    };
  });

  // Process aliases
  const aliasedTimezones = aliasTimezones
    .filter(({ alias }) => Boolean(alias))
    .map(({ alias, id }) => {
      const { string: offsetString, offset } = parseTzOffset(alias);
      return {
        id,
        offset,
        get title() {
          return `(${offsetString}) ${translate(null, void 0, /* translation key */)} `;
        },
        alias
      };
    });

  // Sort by offset, then by title
  const sortedTimezones = timezonesWithOffset.concat(aliasedTimezones).sort((a, b) => {
    const offsetDiff = a.offset - b.offset;
    if (offsetDiff !== 0) {
      return offsetDiff;
    }
    return a.title.localeCompare(b.title);
  });

  return baseList.concat(sortedTimezones);
}

/**
 * List of all available timezones
 * @type {Array<{id: string, title: string, offset: number}>}
 */
export const availableTimezones = processTimezones(standardTimezones, baseTimezones, []);

// Cache maps for fast lookup
const availabilityCache = new Map();
const supportCache = new Map();

// Populate availability cache
availableTimezones.forEach((tz) => {
  availabilityCache.set(tz.id, true);
});

// Populate support cache
baseTimezones.concat(standardTimezones).forEach((tz) => {
  supportCache.set(tz.id, true);
});

/**
 * Updates the available timezones list
 * @param {Array} additionalTimezones - Additional timezone aliases to include
 */
export function updateAvailableTimezones(additionalTimezones) {
  availableTimezones.splice(
    0,
    availableTimezones.length,
    ...processTimezones(standardTimezones, baseTimezones, additionalTimezones)
  );
  
  // Refresh cache
  availableTimezones.forEach((tz) => {
    availabilityCache.set(tz.id, true);
  });
}

/**
 * Checks if a timezone is currently available
 * @param {string} timezoneId - The timezone identifier to check
 * @returns {boolean} True if the timezone is available
 * 
 * @example
 * const isAvailable = timezoneIsAvailable('America/New_York');
 * console.log(isAvailable); // true or false
 */
export function timezoneIsAvailable(timezoneId) {
  return availabilityCache.has(timezoneId);
}

/**
 * Checks if a timezone is supported (even if not currently available)
 * @param {string} timezoneId - The timezone identifier to check
 * @returns {boolean} True if the timezone is supported
 * 
 * @example
 * const isSupported = timezoneIsSupported('Europe/London');
 * console.log(isSupported); // true or false
 */
export function timezoneIsSupported(timezoneId) {
  return supportCache.get(timezoneId) || false;
}

/**
 * Gets the display title for a timezone
 * @param {string} timezoneId - The timezone identifier
 * @returns {string} The formatted timezone title with offset
 * 
 * @example
 * const title = timezoneTitle('America/New_York');
 * console.log(title); // "Eastern Standard Time (EST)"
 */
export function timezoneTitle(timezoneId) {
  // Check standard timezones first
  for (const { id, title } of standardTimezones) {
    if (id === timezoneId) {
      const { string: offsetString } = parseTzOffset(timezoneId);
      return `${title} (${offsetString})`;
    }
  }
  
  // Fall back to available timezones
  for (const { id, title } of availableTimezones) {
    if (id === timezoneId) {
      return `${title}`;
    }
  }
  
  // Return raw ID if not found
  return timezoneId;
}

/**
 * Gets a timezone by ID from the available list
 * @param {string} timezoneId - The timezone identifier
 * @returns {{id: string, title: string, offset: number}|undefined} The timezone object or undefined
 */
export function getTimezoneById(timezoneId) {
  return availableTimezones.find((tz) => tz.id === timezoneId);
}

/**
 * Gets all timezones for a specific continent/region
 * @param {string} region - The region prefix (e.g., 'America', 'Europe', 'Asia')
 * @returns {Array} Filtered list of timezones
 * 
 * @example
 * const europeanTimezones = getTimezonesByRegion('Europe');
 */
export function getTimezonesByRegion(region) {
  return availableTimezones.filter((tz) => tz.id.startsWith(region + '/'));
}

/**
 * Gets timezones sorted by UTC offset
 * @param {boolean} ascending - Sort order (default: true)
 * @returns {Array} Sorted timezone list
 */
export function getTimezonesByOffset(ascending = true) {
  const sorted = [...availableTimezones].sort((a, b) => {
    return ascending ? a.offset - b.offset : b.offset - a.offset;
  });
  return sorted;
}
