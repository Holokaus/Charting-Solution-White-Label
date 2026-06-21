/**
 * Module 86252 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86252: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      StudyStatusType: () => priceDataSource_h,
      convertStudyStatusToString: () => priceDataSource_d,
      createStudyError: () => priceDataSource_g,
      studyErrorStatusStackTrace: () => priceDataSource_m,
      studyStatusFeature: () => priceDataSource_p,
      studyStatusSolutionId: () => priceDataSource_u,
      studyStatusTitle: () => _
    });
    var priceDataSource_s = priceDataSource_i(11542),
      priceDataSource_o = priceDataSource_i(55014);
    const priceDataSource_n = priceDataSource_s.priceDataSource_t(null, void 0, priceDataSource_i(50910));
    const priceDataSource_r = new Map,
      priceDataSource_a = new Map,
      priceDataSource_l = "loading...",
      priceDataSource_c = priceDataSource_s.priceDataSource_t(null, void 0, priceDataSource_i(62011));
    var priceDataSource_h;

    function priceDataSource_d(priceDataSource_e, priceDataSource_t) {
      if (priceDataSource_e.type === priceDataSource_h.Loading) return priceDataSource_t ? priceDataSource_c : priceDataSource_l;
      if (priceDataSource_e.type === priceDataSource_h.Error) {
        const priceDataSource_i = priceDataSource_e.errorDescription,
          priceDataSource_s = priceDataSource_t ? (0, priceDataSource_o.triesTranslateError)(priceDataSource_i.error) : priceDataSource_i.error;
        if (priceDataSource_i.ctx) {
          const priceDataSource_e = {};
          return Object.entries(priceDataSource_i.ctx).forEach((([priceDataSource_t, priceDataSource_i]) => {
            priceDataSource_e[priceDataSource_t] = priceDataSource_i.toString()
          })), priceDataSource_s.format(priceDataSource_e)
        }
        return priceDataSource_s
      }
      return ""
    }

    function priceDataSource_u(priceDataSource_e) {
      if (priceDataSource_e.type === priceDataSource_h.Error) return priceDataSource_e.errorDescription.solution_id ? priceDataSource_e.errorDescription.solution_id : function(priceDataSource_e) {
        for (const priceDataSource_t of Array.from(priceDataSource_r.keys()))
          if (priceDataSource_e.includes(priceDataSource_t)) return priceDataSource_r.get(priceDataSource_t)
      }(priceDataSource_e.errorDescription.error)
    }

    function _(priceDataSource_e) {
      if (priceDataSource_e.type === priceDataSource_h.Error) return function(priceDataSource_e) {
        const priceDataSource_t = priceDataSource_e.toLowerCase();
        return priceDataSource_t.includes("the data vendor doesn'priceDataSource_t provide volume data for this symbol.") || priceDataSource_t.includes(
          "no volume is provided by the data vendor")
      }(priceDataSource_e.errorDescription.error) ? priceDataSource_n : (0, priceDataSource_o.triesTranslateError)(priceDataSource_e.errorDescription.title ?? "Runtime error")
    }

    function priceDataSource_p(priceDataSource_e) {
      const {
        errorDescription: {
          error: priceDataSource_t
        }
      } = priceDataSource_e;
      for (const [priceDataSource_e, priceDataSource_i] of priceDataSource_a)
        if (priceDataSource_t.startsWith(priceDataSource_e)) return priceDataSource_i
    }

    function priceDataSource_m(priceDataSource_e) {
      if (void 0 === priceDataSource_e) return;
      const priceDataSource_t = [];
      for (const priceDataSource_i of priceDataSource_e) {
        const priceDataSource_e = {
          functionOrScopeName: priceDataSource_i.priceDataSource_n,
          lineNumber: priceDataSource_i.priceDataSource_p
        };
        "id" in priceDataSource_i && (priceDataSource_e.id = priceDataSource_i.id), "priceDataSource_v" in priceDataSource_i && (priceDataSource_e.versionScript = priceDataSource_i.priceDataSource_v), priceDataSource_t.push(priceDataSource_e)
      }
      return priceDataSource_t
    }

    function priceDataSource_g(priceDataSource_e, priceDataSource_t) {
      const priceDataSource_i = "check study unexpected error" === priceDataSource_e.error;
      return {
        type: priceDataSource_h.Error,
        errorDescription: {
          ...priceDataSource_e,
          showReportItButton: priceDataSource_i
        }
      }
    }! function(priceDataSource_e) {
      priceDataSource_e[priceDataSource_e.Undefined = 0] = "Undefined", priceDataSource_e[priceDataSource_e.Loading = 1] = "Loading", priceDataSource_e[priceDataSource_e.Completed = 2] = "Completed", priceDataSource_e[priceDataSource_e.Error = 3] =
        "Error"
    }(priceDataSource_h || (priceDataSource_h = {}))