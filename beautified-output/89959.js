/**
 * Module 89959 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

89959: (e, t, i) => {
    "use strict";
    i.d(t, {
      combineProperty: () => o
    });
    var s = i(41072);

    function o(e, ...t) {
      const i = () => e(...t.map((e => e.value()))),
        o = (0, s.createPrimitiveProperty)(i()),
        n = () => o.setValue(i()),
        r = {};
      for (const e of t) e.subscribe(r, n);
      return o.destroy = () => {
        t.forEach((e => e.unsubscribeAll(r))), t.forEach((e => e.release()))
      }, o
    }