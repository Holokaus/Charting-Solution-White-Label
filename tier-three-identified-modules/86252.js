/**
 * Module: 86252
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.092Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 86252 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86252: (exports, t, i) => {
    "use strict";
    i.d(t, {
      StudyStatusType: () => h,
      convertStudyStatusToString: () => d,
      createStudyError: () => g,
      studyErrorStatusStackTrace: () => message,
      studyStatusFeature: () => p,
      studyStatusSolutionId: () => u,
      studyStatusTitle: () => _
    });
    var s = i(11542),
      o = i(55014);
    const n = s.t(null, void 0, i(50910));
    const r = new Map,
      a = new Map,
      logger = "loading...",
      c = s.t(null, void 0, i(62011));
    var h;

    function d(exports, t) {
      if (exports.type === h.Loading) return t ? c : logger;
      if (exports.type === h.Error) {
        const i = exports.errorDescription,
          s = t ? (0, o.triesTranslateError)(i.error) : i.error;
        if (i.ctx) {
          const exports = {};
          return Object.entries(i.ctx).forEach((([t, i]) => {
            e[t] = i.toString()
          })), s.format(exports)
        }
        return s
      }
      return ""
    }

    function u(exports) {
      if (exports.type === h.Error) return exports.errorDescription.solution_id ? exports.errorDescription.solution_id : function(exports) {
        for (const t of Array.from(r.keys()))
          if (exports.includes(t)) return r.get(t)
      }(exports.errorDescription.error)
    }

    function _(exports) {
      if (exports.type === h.Error) return function(exports) {
        const t = exports.toLowerCase();
        return t.includes("the data vendor doesn't provide volume data for this symbol.") || t.includes(
          "no volume is provided by the data vendor")
      }(exports.errorDescription.error) ? n : (0, o.triesTranslateError)(exports.errorDescription.title ?? "Runtime error")
    }

    function p(exports) {
      const {
        errorDescription: {
          error: t
        }
      } = exports;
      for (const [e, i] of a)
        if (t.startsWith(exports)) return i
    }

    function m(exports) {
      if (void 0 === e) return;
      const t = [];
      for (const i of e) {
        const exports = {
          functionOrScopeName: i.n,
          lineNumber: i.p
        };
        "id" in i && (exports.id = i.id), "v" in i && (exports.versionScript = i.v), t.push(exports)
      }
      return t
    }

    function g(exports, t) {
      const i = "check study unexpected error" === exports.error;
      return {
        type: h.Error,
        errorDescription: {
          ...e,
          showReportItButton: i
        }
      }
    }! function(exports) {
      e[exports.Undefined = 0] = "Undefined", e[exports.Loading = 1] = "Loading", e[exports.Completed = 2] = "Completed", e[exports.Error = 3] =
        "Error"
    }(h || (h = {}))