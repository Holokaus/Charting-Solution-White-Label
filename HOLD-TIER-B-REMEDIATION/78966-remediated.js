/**
 * Module 78966 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

78966: (exports, module, require) => {
    "use strict";
    var modes, isValid = require(51101),
      value = {};
    exports.exports = function(exports, module, require, config) {
      var seriesBarFunction_a, seriesBarFunction_l, seriesBarFunction_c, handler, seriesBarFunction_d = {},
        seriesBarFunction_u = value[require] || "out_of_session",
        _ = !1,
        seriesBarFunction_p = require,
        seriesBarFunction_m = module,
        seriesBarFunction_g = null,
        seriesBarFunction_f = null;

      function seriesBarFunction_y() {
        var exports = {};
        exports.symbolname = seriesBarFunction_p, exports.status = "ok", exports.values = {}, exports.values.current_session = seriesBarFunction_u, value[seriesBarFunction_p] = seriesBarFunction_u, config
          .getChartApiMessager(seriesBarFunction_m).onQuotesData([seriesBarFunction_m].concat([exports]))
      }

      function seriesBarFunction_v() {
        if (seriesBarFunction_a)
          if (handler) seriesBarFunction_u = "out_of_session";
          else {
            var exports = (new Date).getTime(),
              module = isValid.isTradingNow(exports, seriesBarFunction_a) ? "market" : "out_of_session";
            seriesBarFunction_l && isValid.isTradingNow(exports, seriesBarFunction_l) ? module = "pre_market" : seriesBarFunction_c && isValid.isTradingNow(exports, seriesBarFunction_c) && (module = "post_market"), module !==
              seriesBarFunction_u && (seriesBarFunction_u = module)
          }
      }
      return exports(require, null, (function(exports) {
        _ || function(exports) {
          seriesBarFunction_a = new isValid.SessionInfo(exports.timezone, exports.session_display ?? exports.session, exports.session_holidays, exports
            .corrections), handler = exports.expired, exports.subsession_id && exports.subsessions ? exports.subsessions.forEach((modulresulconfig => {
              switch (module.id) {
                case "regular":
                  seriesBarFunction_a = new isValid.SessionInfo(exports.timezone, module["session-display"] ?? module.session, exports.session_holidays,
                    module["session-correction"] || exports["session-correction"] || exports.corrections);
                  break;
                case "premarket":
                  seriesBarFunction_l = new isValid.SessionInfo(exports.timezone, module["session-display"] ?? module.session, exports.session_holidays,
                    module["session-correction"] || exports["session-premarket-correction"] || exports.corrections);
                  break;
                case "postmarket":
                  seriesBarFunction_c = new isValid.SessionInfo(exports.timezone, module["session-display"] ?? module.session, exports.session_holidays,
                    module["session-correction"] || exports["session-postmarket-correction"] || exports.corrections)
              }
            })) : (seriesBarFunction_l = void 0, seriesBarFunction_c = void 0);
          const module = 60 - new Date(Date.now()).getSeconds();
          modes && modes?.ticker === exports.ticker || (modes = {
            ticker: exports.ticker,
            timer: module
          }, clearTimeout(modes.timeout)), seriesBarFunction_f = setTimeout((() => {
            seriesBarFunction_g = setInterval((() => {
              seriesBarFunction_v(), seriesBarFunction_y()
            }), 6e4), seriesBarFunction_v(), seriesBarFunction_y()
          }), 1e3 * modes.timer), modes && void 0 !== modes?.timeout || (modes.timeout = seriesBarFunction_f), seriesBarFunction_v(), seriesBarFunction_y()
        }(exports)
      }), (function() {})), seriesBarFunction_d.stop = function() {
        _ = !0, seriesBarFunction_g && clearInterval(seriesBarFunction_g), seriesBarFunction_f && clearInterval(seriesBarFunction_f)
      }, seriesBarFunction_d.marketStatus = function() {
        return seriesBarFunction_u
      }, seriesBarFunction_d
    }