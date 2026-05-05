/**
 * Module 16216 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16216: (e, t, i) => {
    "use strict";
    i.d(t, {
      hasService: () => r,
      registerService: () => n,
      service: () => a
    });
    const s = {},
      o = new Map;

    function n(e, t) {
      if (r(e)) throw new Error("Service already registered");
      s[e.id] = t;
      const i = o.get(e.id);
      void 0 !== i && (o.delete(e.id), i.resolve(t))
    }

    function r(e) {
      return void 0 !== s[e.id]
    }

    function a(e) {
      const t = s[e.id];
      if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
      return t
    }