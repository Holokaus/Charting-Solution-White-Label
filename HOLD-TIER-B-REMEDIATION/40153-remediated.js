/**
 * Module 40153 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

40153: (exports, module, require) => {
    "use strict";
    require.watchedValue_d(module, {
      withWeekdayProperty: () => items
    });
    var constants = require(1765),
      result = require(41072);
    const name = "date_format_with_weekday";

    function config() {
      return constants.getBool(name, !0)
    }
    const items = (0, result.createPrimitiveProperty)(config());
    items.subscribe(null, (() => constants.setValue(name, items.value()))), constants.onSync.subscribe(null, (() => items.setValue(config())))