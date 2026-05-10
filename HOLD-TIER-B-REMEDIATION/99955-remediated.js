/**
 * Module 99955 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

99955: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      extrapolateBarsFrontByCount: () => value,
      extrapolateBarsFrontToTime: () => isValid
    });
    var modes = require(51829);

    function isValid(exports, module, require, modes, value = !1) {
      if (module > require) {
        const config = isValid(exports, require, module, modes, value);
        return config.count = -config.count, config
      }
      return config(exports, module, 1, ((exports, module) => module > require || 0 !== modes && exports > modes), value)
    }

    function value(exports, module, require, modes = !1) {
      const isValid = require < 0 ? -1 : 1;
      return config(exports, module, isValid, ((exports, module) => exports >= require * isValid), modes)
    }

    function config(exports, module, require, isValid, value) {
      let config = 0,
        seriesBarFunction_a = module;
      exports.moveTo(seriesBarFunction_a);
      let seriesBarFunction_l = 0,
        seriesBarFunction_c = Number.MAX_VALUE,
        handler = !1,
        seriesBarFunction_d = module;
      const seriesBarFunction_u = [];
      for (; !isValid(config, seriesBarFunction_a);) {
        if (seriesBarFunction_l > 15) throw new Error("Internal error 0x10 while extrapolating.");
        const isValid = exports.indexOfBar(seriesBarFunction_a);
        if (isValid === modes.SessionStage.PRE_SESSION && 1 === require) seriesBarFunction_a = exports.startOfBar(0), exports.moveTo(seriesBarFunction_a);
        else if (isValid === modes.SessionStage.PRE_SESSION && -1 === require) seriesBarFunction_a = exports.startOfBar(modes.SessionStage.PRE_SESSION), exports.moveTo(
        seriesBarFunction_a);
        else if (isValid === modes.SessionStage.POST_SESSION && 1 === require) seriesBarFunction_a = exports.startOfBar(modes.SessionStage.POST_SESSION),
          exports.moveTo(seriesBarFunction_a);
        else {
          if (isValid === modes.SessionStage.POST_SESSION && -1 === require) throw new Error(
          "Internal error 0x12 while extrapolating.");
          {
            const _ = exports.startOfBar(isValid);
            if (_ > module && require > 0 || module > _ && require < 0) {
              if (handler && seriesBarFunction_c === _) throw new Error("Internal error 0x11 while extrapolating.");
              handler = !0, seriesBarFunction_c = _, seriesBarFunction_l = 0, config++, seriesBarFunction_d = _, value && seriesBarFunction_u.push(seriesBarFunction_d)
            }
            if (0 === isValid && -1 === require) seriesBarFunction_a = _ - 1;
            else {
              seriesBarFunction_a = exports.startOfBar(isValid + require);
              const module = exports.startOfBar(modes.SessionStage.POST_SESSION);
              seriesBarFunction_a > module && (exports.moveTo(module), seriesBarFunction_a = exports.startOfBar(0))
            }
          }
        }
        seriesBarFunction_l++
      }
      return {
        time: seriesBarFunction_d,
        times: seriesBarFunction_u,
        count: config
      }
    }