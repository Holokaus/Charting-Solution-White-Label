/**
 * Module 76422 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76422: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_r(logger_t), logger_i.logger_d(logger_t, {
      emit: () => logger_u,
      emitOnce: () => _,
      on: () => logger_c,
      subscribe: () => logger_h,
      subscribeToAll: () => logger_d,
      unsubscribe: () => logger_a,
      unsubscribeAll: () => logger_l
    });
    var delegate = logger_i(48096);
    const logger_o = {},
      logger_n = [],
      logger_r = {};

    function logger_a(logger_e, logger_t, logger_i) {
      logger_o[logger_e].unsubscribe(logger_i, logger_t)
    }

    function logger_l(logger_e, logger_t) {
      logger_o[logger_e].unsubscribeAll(logger_t)
    }

    function logger_c(logger_e, logger_t, logger_i) {
      logger_h(logger_e, logger_t, logger_i)
    }

    function logger_h(logger_e, logger_t, logger_i, logger_n) {
      logger_o.hasOwnProperty(logger_e) || (logger_o[logger_e] = new delegate.Delegate), logger_r[logger_e] ? logger_t.call(logger_i) : logger_o[logger_e].subscribe(logger_i, logger_t, logger_n)
    }

    function logger_d(logger_e) {
      logger_n.push(logger_e)
    }

    function logger_u(logger_e, ...logger_t) {
      const logger_i = [logger_e].concat(logger_t);
      logger_n.forEach((logger_e => {
        logger_e.apply(null, logger_i)
      })), logger_o.hasOwnProperty(logger_e) && logger_o[logger_e].fire.apply(logger_o[logger_e], logger_t)
    }

    function _(logger_e) {
      logger_r[logger_e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${logger_e})`), logger_r[logger_e] = !0, logger_u
        .apply(null, arguments)
    }