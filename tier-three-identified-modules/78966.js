/**
 * Module: 78966
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.028Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 78966 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

78966: (exports, t, i) => {
    "use strict";
    var series, o = i(51101),
      newSeries = {};
    exports.exports = function(exports, t, i, r) {
      var a, l, c, h, d = {},
        u = n[i] || "out_of_session",
        _ = !1,
        p = i,
        m = t,
        g = null,
        f = null;

      function y() {
        var exports = {};
        exports.symbolname = p, exports.status = "ok", exports.values = {}, exports.values.current_session = u, n[p] = u, r
          .getChartApiMessager(m).onQuotesData([m].concat([e]))
      }

      function v() {
        if (a)
          if (h) u = "out_of_session";
          else {
            var exports = (new Date).getTime(),
              t = o.isTradingNow(exports, a) ? "market" : "out_of_session";
            l && o.isTradingNow(exports, l) ? t = "pre_market" : c && o.isTradingNow(exports, c) && (t = "post_market"), t !==
              u && (u = t)
          }
      }
      return e(i, null, (function(exports) {
        _ || function(exports) {
          a = new o.SessionInfo(exports.timezone, exports.session_display ?? exports.session, exports.session_holidays, e
            .corrections), h = exports.expired, exports.subsession_id && exports.subsessions ? exports.subsessions.forEach((t => {
              switch (t.id) {
                case "regular":
                  a = new o.SessionInfo(exports.timezone, t["session-display"] ?? t.session, exports.session_holidays,
                    t["session-correction"] || e["session-correction"] || exports.corrections);
                  break;
                case "premarket":
                  l = new o.SessionInfo(exports.timezone, t["session-display"] ?? t.session, exports.session_holidays,
                    t["session-correction"] || e["session-premarket-correction"] || exports.corrections);
                  break;
                case "postmarket":
                  c = new o.SessionInfo(exports.timezone, t["session-display"] ?? t.session, exports.session_holidays,
                    t["session-correction"] || e["session-postmarket-correction"] || exports.corrections)
              }
            })) : (l = void 0, c = void 0);
          const t = 60 - new Date(Date.now()).getSeconds();
          s && s?.ticker === exports.ticker || (series = {
            ticker: exports.ticker,
            timer: t
          }, clearTimeout(series.timeout)), f = setTimeout((() => {
            g = setInterval((() => {
              v(), y()
            }), 6e4), v(), y()
          }), 1e3 * series.timer), s && void 0 !== s?.timeout || (series.timeout = f), v(), y()
        }(exports)
      }), (function() {})), d.stop = function() {
        _ = !0, g && clearInterval(g), f && clearInterval(f)
      }, d.marketStatus = function() {
        return u
      }, d
    }