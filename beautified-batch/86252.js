/**
 * Module 86252 - Auto-beautified from TradingView webpack bundle
 *
 * @module 86252
 * @date 2026-04-23
 * @size 1692 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11542, 50910, 55014, 62011
 *
 * Exports:
 *   - StudyStatusType (internal: h)
 *   - convertStudyStatusToString (internal: d)
 *   - createStudyError (internal: g)
 *   - studyErrorStatusStackTrace (internal: m)
 *   - studyStatusFeature (internal: p)
 *   - studyStatusSolutionId (internal: u)
 *   - studyStatusTitle (internal: _)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

86252: (e, t, i) => {
    "use strict";
    i.d(t, {
      StudyStatusType: () => h,
      convertStudyStatusToString: () => d,
      createStudyError: () => g,
      studyErrorStatusStackTrace: () => m,
      studyStatusFeature: () => p,
      studyStatusSolutionId: () => u,
      studyStatusTitle: () => _
    });
    var s = i(11542),
      o = i(55014);
    const n = s.t(null, void 0, i(50910));
    const r = new Map,
      a = new Map,
      l = "loading...",
      c = s.t(null, void 0, i(62011));
    var h;

    function d(e, t) {
      if (e.type === h.Loading) return t ? c : l;
      if (e.type === h.Error) {
        const i = e.errorDescription,
          s = t ? (0, o.triesTranslateError)(i.error) : i.error;
        if (i.ctx) {
          const e = {};
          return Object.entries(i.ctx).forEach((([t, i]) => {
            e[t] = i.toString()
          })), s.format(e)
        }
        return s
      }
      return ""
    }

    function u(e) {
      if (e.type === h.Error) return e.errorDescription.solution_id ? e.errorDescription.solution_id : function(e) {
        for (const t of Array.from(r.keys()))
          if (e.includes(t)) return r.get(t)
      }(e.errorDescription.error)
    }

    function _(e) {
      if (e.type === h.Error) return function(e) {
        const t = e.toLowerCase();
        return t.includes("the data vendor doesn't provide volume data for this symbol.") || t.includes("no volume is provided by the data vendor")
      }(e.errorDescription.error) ? n : (0, o.triesTranslateError)(e.errorDescription.title ?? "Runtime error")
    }

    function p(e) {
      const {
        errorDescription: {
          error: t
        }
      } = e;
      for (const [e, i] of a)
        if (t.startsWith(e)) return i
    }

    function m(e) {
      if (void 0 === e) return;
      const t = [];
      for (const i of e) {
        const e = {
          functionOrScopeName: i.n,
          lineNumber: i.p
        };
        "id" in i && (e.id = i.id), "v" in i && (e.versionScript = i.v), t.push(e)
      }
      return t
    }

    function g(e, t) {
      const i = "check study unexpected error" === e.error;
      return {
        type: h.Error,
        errorDescription: {
          ...e,
          showReportItButton: i
        }
      }
    }! function(e) {
      e[e.Undefined = 0] = "Undefined", e[e.Loading = 1] = "Loading", e[e.Completed = 2] = "Completed", e[e.Error = 3] = "Error"
    }(h || (h = {}))
