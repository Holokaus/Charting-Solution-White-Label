/**
 * Module 52499 - WatchedValue and WatchedObject Exports
 * 
 * @description Re-exports WatchedValue and WatchedObject from core modules
 * @dependencies 2072 (WatchedValue core), 59998 (WatchedObject core)
 * @exports WatchedValue
 * @exports WatchedObject
 */

const WatchedValue = require(2072).WatchedValue;
const WatchedObject = require(59998).WatchedObject;

module.exports = {
  WatchedValue,
  WatchedObject
};
