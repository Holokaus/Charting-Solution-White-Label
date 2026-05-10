/**
 * Module 11751 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

11751: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createWVFromGetterAndSubscriptions: () => o
    });
    var constants = i(22613);

    function o(exports, t) {
      const i = new constants.WatchedValue(exports()),
        o = {};
      t.forEach((t => t.subscribe(o, (() => {
        i.setValue(exports())
      }))));
      return i.readonly().spawn((() => t.forEach((exports => exports.unsubscribeAll(o)))))
    }