/**
 * Module 22613 - WatchedValue Re-export
 * 
 * @description Re-exports WatchedValue from core module 52499
 * @dependencies 52499 (WatchedValue core)
 * @exports WatchedValue
 */

const WatchedValueModule = require(52499);

module.exports = {
  WatchedValue: WatchedValueModule.WatchedValue
};
