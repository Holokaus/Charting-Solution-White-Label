/**
 * Module 77914 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

77914: (logger_e, logger_t, logger_i) => {
    "use strict";

    function logger_s(logger_e, logger_t, logger_i) {
      return Math.min(Math.max(logger_e, logger_t), logger_i)
    }

    function logger_o(logger_e) {
      return logger_e < 0 ? -1 : logger_e > 0 ? 1 : 0
    }

    function logger_n(logger_e) {
      if (logger_e < 0) return !1;
      if (logger_e > 1e18) return !0;
      for (let logger_t = logger_e; logger_t > 1; logger_t /= 10)
        if (logger_t % 10 != 0) return !1;
      return !0
    }

    function logger_r(logger_e, logger_t, logger_i) {
      return logger_t - logger_e <= logger_i
    }

    function logger_a(logger_e, logger_t, logger_i) {
      return Math.abs(logger_e - logger_t) < logger_i
    }

    function logger_l(logger_e) {
      return logger_e <= 0 ? NaN : Math.log(logger_e) / Math.log(10)
    }

    function logger_c(logger_e, logger_t) {
      return logger_e < logger_t ? -1 : logger_e > logger_t ? 1 : 0
    }

    function logger_h(logger_e, logger_t = logger_c) {
      if (logger_e.length < 1) throw Error("array is empty");
      let logger_i = logger_e[0];
      for (let logger_s = 0; logger_s < logger_e.length; ++logger_s) logger_t(logger_e[logger_s], logger_i) > 0 && (logger_i = logger_e[logger_s]);
      return logger_i
    }

    function logger_d(logger_e) {
      const logger_t = Math.ceil(logger_e);
      return logger_t % 2 != 0 ? logger_t - 1 : logger_t
    }

    function logger_u(logger_e) {
      return logger_e > 0 ? Math.floor(logger_e) : Math.ceil(logger_e)
    }

    function _(logger_e) {
      return logger_e % 2 == 0
    }
    logger_i.logger_d(logger_t, {
      ceiledEven: () => logger_d,
      clamp: () => logger_s,
      equal: () => logger_a,
      greaterOrEqual: () => logger_r,
      isBaseDecimal: () => logger_n,
      isEven: () => _,
      log10: () => logger_l,
      max: () => logger_h,
      sign: () => logger_o,
      toInt: () => logger_u
    })