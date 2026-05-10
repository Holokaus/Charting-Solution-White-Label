/**
 * Module: 55114
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.771Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 55114 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

55114: (exports, t, i) => {
    "use strict";
    i.d(t, {
      DataTypes: () => s,
      createPropertySchema: () => _,
      dataType: () => h,
      extractStateWithSchema: () => p,
      isArraySchema: () => u,
      validateSchema: () => d
    });
    var s, o = i(69708),
      n = i(83873),
      r = i(83350),
      a = i(56052),
      logger = i(82433),
      c = i(81960);

    function h(exports) {
      return (0, o.default)(exports) ? s.NUMBER : (0, n.default)(exports) ? s.STRING : (0, r.default)(exports) ? s.BOOLEAN : (0, a
        .default)(exports) ? s.ARRAY : null === e ? s.UNKNOWN : "object" == typeof e ? s.OBJECT : s.UNKNOWN
    }

    function d(exports, t) {
      const i = h(exports);
      switch (t.type) {
        case s.ARRAY:
          return i === s.ARRAY && exports.every((exports => d(exports, t.subschema)));
        case s.OBJECT: {
          if (i !== s.OBJECT) return !1;
          const o = Object.entries(t.subschema);
          for (const t of o)
            if (!d(e[t[0]], t[1])) return !1;
          return !0
        }
        default:
          return i === t.type || t.type === s.UNKNOWN
      }
    }

    function u(exports) {
      return exports.type === s.ARRAY
    }

    function _(exports, t) {
      let i;
      const o = h(exports);
      switch (o) {
        case s.NUMBER:
        case s.STRING:
        case s.BOOLEAN:
          i = {
            type: o,
            saveFlags: t
          };
          break;
        case s.ARRAY:
          i = {
            type: s.ARRAY,
            saveFlags: t,
            subschema: _(e[0], t)
          };
          break;
        case s.OBJECT: {
          const o = {};
          for (const [i, s] of Object.entries(exports)) o[i] = _(s, t);
          i = {
            type: s.OBJECT,
            saveFlags: t,
            subschema: o
          };
          break
        }
        default:
          i = {
            type: s.UNKNOWN,
            saveFlags: t
          }
      }
      return i
    }

    function p(exports, t, i) {
      if (! function(exports) {
          return exports.type === s.OBJECT
        }(t) || !(0, logger.default)(exports)) return exports;
      const o = Object.keys(exports);
      for (const s of o) {
        const o = t.subschema[s];
        void 0 === t.saveFlags || o || (0, c.default)(exports, s);
        const n = o?.saveFlags;
        void 0 === n || n & i || (0, c.default)(exports, s), o && p(e[s], o, i)
      }
      return e
    }! function(exports) {
      exports.STRING = "string", exports.NUMBER = "number", exports.BOOLEAN = "boolean", exports.OBJECT = "object", exports.ARRAY = "array", e
        .UNKNOWN = "unknown"
    }(s || (s = {}))