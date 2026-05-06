/**
 * Module 78966 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

78966: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    var seriesBarFunction_s, seriesBarFunction_o = seriesBarFunction_i(51101),
      seriesBarFunction_n = {};
    seriesBarFunction_e.exports = function(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_r) {
      var seriesBarFunction_a, seriesBarFunction_l, seriesBarFunction_c, seriesBarFunction_h, seriesBarFunction_d = {},
        seriesBarFunction_u = seriesBarFunction_n[seriesBarFunction_i] || "out_of_session",
        _ = !1,
        seriesBarFunction_p = seriesBarFunction_i,
        seriesBarFunction_m = seriesBarFunction_t,
        seriesBarFunction_g = null,
        seriesBarFunction_f = null;

      function seriesBarFunction_y() {
        var seriesBarFunction_e = {};
        seriesBarFunction_e.symbolname = seriesBarFunction_p, seriesBarFunction_e.status = "ok", seriesBarFunction_e.values = {}, seriesBarFunction_e.values.current_session = seriesBarFunction_u, seriesBarFunction_n[seriesBarFunction_p] = seriesBarFunction_u, seriesBarFunction_r
          .getChartApiMessager(seriesBarFunction_m).onQuotesData([seriesBarFunction_m].concat([seriesBarFunction_e]))
      }

      function seriesBarFunction_v() {
        if (seriesBarFunction_a)
          if (seriesBarFunction_h) seriesBarFunction_u = "out_of_session";
          else {
            var seriesBarFunction_e = (new Date).getTime(),
              seriesBarFunction_t = seriesBarFunction_o.isTradingNow(seriesBarFunction_e, seriesBarFunction_a) ? "market" : "out_of_session";
            seriesBarFunction_l && seriesBarFunction_o.isTradingNow(seriesBarFunction_e, seriesBarFunction_l) ? seriesBarFunction_t = "pre_market" : seriesBarFunction_c && seriesBarFunction_o.isTradingNow(seriesBarFunction_e, seriesBarFunction_c) && (seriesBarFunction_t = "post_market"), seriesBarFunction_t !==
              seriesBarFunction_u && (seriesBarFunction_u = seriesBarFunction_t)
          }
      }
      return seriesBarFunction_e(seriesBarFunction_i, null, (function(seriesBarFunction_e) {
        _ || function(seriesBarFunction_e) {
          seriesBarFunction_a = new seriesBarFunction_o.SessionInfo(seriesBarFunction_e.timezone, seriesBarFunction_e.session_display ?? seriesBarFunction_e.session, seriesBarFunction_e.session_holidays, seriesBarFunction_e
            .corrections), seriesBarFunction_h = seriesBarFunction_e.expired, seriesBarFunction_e.subsession_id && seriesBarFunction_e.subsessions ? seriesBarFunction_e.subsessions.forEach((seriesBarFunction_t => {
              switch (seriesBarFunction_t.id) {
                case "regular":
                  seriesBarFunction_a = new seriesBarFunction_o.SessionInfo(seriesBarFunction_e.timezone, seriesBarFunction_t["session-display"] ?? seriesBarFunction_t.session, seriesBarFunction_e.session_holidays,
                    seriesBarFunction_t["session-correction"] || seriesBarFunction_e["session-correction"] || seriesBarFunction_e.corrections);
                  break;
                case "premarket":
                  seriesBarFunction_l = new seriesBarFunction_o.SessionInfo(seriesBarFunction_e.timezone, seriesBarFunction_t["session-display"] ?? seriesBarFunction_t.session, seriesBarFunction_e.session_holidays,
                    seriesBarFunction_t["session-correction"] || seriesBarFunction_e["session-premarket-correction"] || seriesBarFunction_e.corrections);
                  break;
                case "postmarket":
                  seriesBarFunction_c = new seriesBarFunction_o.SessionInfo(seriesBarFunction_e.timezone, seriesBarFunction_t["session-display"] ?? seriesBarFunction_t.session, seriesBarFunction_e.session_holidays,
                    seriesBarFunction_t["session-correction"] || seriesBarFunction_e["session-postmarket-correction"] || seriesBarFunction_e.corrections)
              }
            })) : (seriesBarFunction_l = void 0, seriesBarFunction_c = void 0);
          const seriesBarFunction_t = 60 - new Date(Date.now()).getSeconds();
          seriesBarFunction_s && seriesBarFunction_s?.ticker === seriesBarFunction_e.ticker || (seriesBarFunction_s = {
            ticker: seriesBarFunction_e.ticker,
            timer: seriesBarFunction_t
          }, clearTimeout(seriesBarFunction_s.timeout)), seriesBarFunction_f = setTimeout((() => {
            seriesBarFunction_g = setInterval((() => {
              seriesBarFunction_v(), seriesBarFunction_y()
            }), 6e4), seriesBarFunction_v(), seriesBarFunction_y()
          }), 1e3 * seriesBarFunction_s.timer), seriesBarFunction_s && void 0 !== seriesBarFunction_s?.timeout || (seriesBarFunction_s.timeout = seriesBarFunction_f), seriesBarFunction_v(), seriesBarFunction_y()
        }(seriesBarFunction_e)
      }), (function() {})), seriesBarFunction_d.stop = function() {
        _ = !0, seriesBarFunction_g && clearInterval(seriesBarFunction_g), seriesBarFunction_f && clearInterval(seriesBarFunction_f)
      }, seriesBarFunction_d.marketStatus = function() {
        return seriesBarFunction_u
      }, seriesBarFunction_d
    }