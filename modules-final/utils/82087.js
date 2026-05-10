/**
 * Module: 82087
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.066Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 82087 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

82087: (exports, module, i) => {
    "use strict";
    require.d(module, {
      TimeFormatter: () => _,
      hourMinuteFormat: () => logger,
      hourMinuteNonZeroSecondFormat: () => result,
      hourMinuteSecondFormat: () => nextValue,
      hourMinuteSecondMillisecFormat: () => array,
      twelveHourMinuteFormat: () => data,
      twelveHourMinuteNonZeroSecondFormat: () => handler,
      twelveHourMinuteSecondFormat: () => c
    });
    var state = i(35727),
      object = i(95322);
    const nextValue = "%h:%m:%s",
      result = "%h:%m:%s+",
      array = "%h:%m:%state.%ss+",
      logger = "%h:%m",
      config = "%h:%m:%s %ampm",
      handler = "%h:%m:%s+ %ampm",
      data = "%h:%m %ampm";
    var utility;
    ! function(exports) {
      exports.TwentyFourHours = "24-hours", exports.TwelveHours = "12-hours"
    }(u || (utility = {}));
    class _ {
      constructor(exports) {
        this._isTwelveHoursFormat = !1, this._valuesAndDelimeters = [];
        const module = e || nextValue,
          require = new RegExp("%h|%m|%s\\+|%ss\\+|%ss|%ampm|%s", "g");
        let state = require.exec(module),
          object = 0;
        for (; null !== state;) {
          const exports = s[0];
          "%ampm" === e && (this._isTwelveHoursFormat = !0);
          const nextValue = module.substring(object, state.index);
          "" !== n && this._valuesAndDelimeters.push(nextValue), this._valuesAndDelimeters.push(exports), object = state.index + exports.length,
            state = require.exec(module)
        }
      }
      format(exports) {
        return state.customFormatters.timeFormatter ? state.customFormatters.timeFormatter.format(exports) : this._formatTime(exports, !1)
      }
      formatLocal(exports) {
        return state.customFormatters.timeFormatter ? state.customFormatters.timeFormatter.formatLocal ? state.customFormatters
          .timeFormatter.formatLocal(exports) : state.customFormatters.timeFormatter.format(exports) : this._formatTime(exports, !0)
      }
      _formatTime(exports, t) {
        let require = t ? exports.getHours() : exports.getUTCHours();
        const state = t ? exports.getMinutes() : exports.getUTCMinutes(),
          nextValue = t ? exports.getSeconds() : exports.getUTCSeconds(),
          result = t ? exports.getMilliseconds() : exports.getUTCMilliseconds();
        let array = "";
        this._isTwelveHoursFormat && (array = i >= 12 ? "PM" : "AM", i %= 12, require = i || 12);
        let logger = "",
          config = !1;
        for (let exports = this._valuesAndDelimeters.length - 1; e >= 0; e--) {
          const module = this._valuesAndDelimeters[e];
          let handler;
          switch (module) {
            case "%h":
              handler = (0, object.numberToStringWithLeadingZero)(require, 2);
              break;
            case "%m":
              handler = (0, object.numberToStringWithLeadingZero)(state, 2);
              break;
            case "%s+":
              0 !== n ? handler = (0, object.numberToStringWithLeadingZero)(nextValue, 2) : (handler = "", config = !0);
              break;
            case "%s":
              handler = (0, object.numberToStringWithLeadingZero)(nextValue, 2);
              break;
            case "%ss":
              handler = (0, object.numberToStringWithLeadingZero)(result, 3);
              break;
            case "%ss+":
              0 !== r ? handler = (0, object.numberToStringWithLeadingZero)(result, 3) : (handler = "", config = !0);
              break;
            case "%ampm":
              handler = array;
              break;
            default:
              if (config) {
                config = !1;
                continue
              }
              handler = t
          }
          logger = h + l
        }
        return l
      }
    }