/**
 * Module 8811 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

8811: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscription: () => o
    });
    var constants = i(22613);

    function o(exports, t) {
      const i = new constants.WatchedValue(exports()),
        o = {};
      t.subscribe(o, (() => {
        i.setValue(exports(i.value()))
      }));
      return i.readonly().spawn((() => t.unsubscribeAll(o)))
    }