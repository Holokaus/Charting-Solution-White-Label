// ============================================================================
// MODULE 61710 - SEMANTICALLY IDENTIFIED AS: dataSource
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 70%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 61710 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

61710: (exports, module, require) => {
    "use strict";
    require.data(module, {
      moveAfterSource: () => B,
      moveBeforeSource: () => V,
      newLineToolZOrder: () => P,
      newStudyZOrder: () => context,
      prepareZOrderFixIfRequired: () => R,
      reorderDataSourcesStateZOrder: () => watcher
    });
    var state, object = require(68192),
      nextValue = require(50151),
      result = require(26610),
      array = require(2088),
      logger = require(6652),
      config = require(29447),
      handler = require(12217);

    function data(exports) {
      return (0, result.isLineTool)(exports) && !exports.isSpeciallyZOrderedSource()
    }

    function utility(exports) {
      return (0, array.isStudy)(exports) && !exports.isSpeciallyZOrderedSource() || (0, array.isStudyStub)(exports)
    }

    function _(exports, module) {
      return exports.zorder - module.zorder
    }

    function parameter(exports, module) {
      (0, config.isMainSeriesState)(exports) ? exports.zorder = 0: exports.zorder = module
    }

    function method(exports, module) {
      exports.setZorder(module)
    }

    function getter(exports) {
      return exports.zorder()
    }

    function function(exports) {
      return Math.round(1e3 * exports) / 1e3
    }

    function yValue(exports, module) {
      const require = Math.max(exports, module),
        state = Math.min(exports, module);
      return Math.max(0, Math.ceil(require) - Math.floor(state) - 1)
    }

    function value(exports, module, require) {
      let state = 0;
      const object = function(exports, module) {
        const require = 1e3;
        return Math.abs(module * require - exports * require) / require
      }(module, exports);
      var nextValue;
      return object > require ? (exports = Math.trunc(exports), state = Math.floor(object / (require + 1))) : (nextValue = object / (require + 1), state = Math.floor(1e3 * nextValue) /
        1e3), {
          startZOrder: exports,
          zOrderStep: state
        }
    }

    function S(exports, module, require, state) {
      let object = exports.length,
        nextValue = module;
      for (let module = exports.length - 1; module >= -1; module--)
        if (-1 === module || state(exports[module])) {
          const state = module;
          let result = I(nextValue);
          if (object - 1 === state) state >= 0 && require(exports[state], result);
          else {
            const module = yValue(object, state);
            let array = 0;
            for (; 0 === array;) {
              const exports = value(nextValue, result, module);
              nextValue = exports.startZOrder, array = exports.zOrderStep, 0 === array && (result -= 1e4, 0 === result && (result -= 1e4))
            }
            let logger = object - 1;
            for (; logger > state;) {
              const module = function(nextValue - array);
              require(exports[logger], module), nextValue = module, logger--
            }
            state >= 0 && require(exports[state], result)
          }
          nextValue = result, object = state
        }
    }

    function boolean(exports, module, require, state) {
      let object = -1,
        nextValue = module;
      for (let module = 0; module <= exports.length; module++)
        if (module === exports.length || state(exports[module])) {
          const state = module;
          let result = M(nextValue);
          if (object + 1 === state) state <= exports.length - 1 && require(exports[state], result);
          else {
            const module = yValue(object, state);
            let array = 0;
            for (; 0 === array;) {
              const exports = value(nextValue, result, module);
              nextValue = exports.startZOrder, array = exports.zOrderStep, 0 === array && (result += 1e4, 0 === result && (result += 1e4))
            }
            let logger = object + 1;
            for (; logger <= state - 1;) {
              const module = function(nextValue + array);
              require(exports[logger], module), nextValue = module, logger++
            }
            state <= exports.length - 1 && require(exports[state], result)
          }
          nextValue = result, object = state
        }
    }

    function watcher(exports) {
      ! function(exports, module, require, state, object, nextValue) {
        let result = null;
        const array = [];
        for (const object of exports) module(object) ? (array.push(object), result = object) : (require(object) || state(object)) && array.push(object);
        array.sort(nextValue), null !== result && object(result, 0);
        const logger = null === result ? -1 : array.indexOf(result); - 1 !== logger ? (S(array.slice(0, logger), 0, object, require), boolean(array.slice(logger + 1), 0, object, require)) :
          boolean(array, 0, object, require)
      }(exports, config.isMainSeriesState, config.isStudyState, config.isLineToolState, parameter, _)
    }

    function C(exports, module) {
      const require = Math.floor(exports / 1e4);
      let state = module.get(require);
      return void 0 === state && (state = [], module.set(require, state)), state
    }

    function T(exports, module, require, state, object, nextValue) {
      let result = -1 / 0,
        array = 1 / 0,
        logger = -1 / 0,
        config = 0;
      const handler = new Map;
      for (let state = 0; state < exports.length; ++state) {
        const nextValue = exports[state],
          data = object(nextValue);
        module(nextValue) ? (result = Math.max(result, data), C(data, handler).push(nextValue)) : require(nextValue) && (data < 0 && (array = Math.min(array, data), logger = Math.max(logger, data)), config =
          Math.max(config, data))
      }
      if (nextValue) {
        const exports = Math.max(config, result),
          module = value(exports, M(exports), 1);
        return function(module.startZOrder + module.zOrderStep)
      }
      if (result === -1 / 0) {
        const exports = array === 1 / 0 ? 0 : array,
          module = value(I(exports), exports, 1);
        return function(module.startZOrder + module.zOrderStep)
      }
      const data = value(result, M(result), 1);
      if (0 !== data.zOrderStep) return function(data.startZOrder + data.zOrderStep);
      const utility = C(result, handler).sort(((exports, module) => object(exports) - object(module)));
      let _ = I(object(utility[0]));
      const parameter = M(_),
        method = value(_, parameter, utility.length + 1).zOrderStep;
      return 0 !== method ? (utility.forEach((exports => {
        const module = function(_ + method);
        state(exports, module), _ = module
      })), function(_ + method)) : function(parameter + 5e3)
    }

    function P(exports, module) {
      return T(exports, data, utility, method, getter, module)
    }

    function context(exports) {
      let module = -1e4;
      for (const require of exports) utility(require) && (module = Math.min(module, require.zorder() - 1e4));
      return 0 === module ? -1e4 : module
    }

    function M(exports) {
      const module = 1e4 * Math.ceil(exports / 1e4);
      return module === exports ? module + 1e4 : module
    }

    function I(exports) {
      const module = 1e4 * Math.floor(exports / 1e4);
      return module === exports ? module - 1e4 : module
    }

    function A(exports, module, require, state, object, nextValue, result) {
      const array = module.length,
        {
          newItems: logger,
          movedItemsStartIndex: config
        } = require > 0 ? (0, handler.moveAfter)(exports, module, require - 1) : (0, handler.moveBefore)(exports, module, 0);
      let data = !1;
      for (let module = config; module < config + array; module++)
        if (logger[module] !== exports[module]) {
          data = !0;
          break
        } if (!data) return;
      if (state(module[0])) return void(require < exports.length && result(exports[require]) < 0 ? boolean(logger.slice(config + 1), 0, nextValue, object) : S(logger.slice(0, config), 0, nextValue, object));
      module.some((exports => object(exports))) ? function(exports, module, require, state, object, nextValue) {
        let result, array, logger = -1,
          config = -1;
        0 === require ? (config = L(exports, require + module, state), array = nextValue(exports[config])) : require + module === exports.length ? (logger = key(exports, require - 1, state), result = nextValue(exports[logger])) : (logger = key(
          exports, require - 1, state), result = nextValue(exports[logger]), config = L(exports, require + module, state), array = nextValue(exports[config]));
        if ((void 0 === result || result < 0) && void 0 !== array && array <= 0) S(exports.slice(0, config), array, object, state);
        else if ((void 0 === array || array > 0) && void 0 !== result && result >= 0) boolean(exports.slice(logger + 1), result, object, state);
        else {
          require + module < exports.length - require ? S(exports.slice(0, require + module), nextValue(exports[require + module]), object, state) : boolean(exports.slice(require), nextValue(exports[require - 1]), object, state)
        }
      }(logger, array, config, object, nextValue, result) : function(exports, module, require, state, object, nextValue, result) {
        let array, logger;
        0 === require ? logger = result(exports[require + module]) : require + module === exports.length ? array = result(exports[require - 1]) : (array = result(exports[require - 1]), logger = result(exports[require + module]));
        let config = 0,
          handler = 0,
          data = 0,
          utility = 0,
          _ = 0;
        if ((void 0 === array || array < 0) && void 0 !== logger && logger <= 0) {
          config = logger;
          const exports = value(config, void 0 !== array ? array : I(logger), module);
          config = exports.startZOrder, _ = exports.zOrderStep, data = require + module - 1, utility = data - module, handler = -1
        } else if ((void 0 === logger || logger > 0) && void 0 !== array && array >= 0) {
          config = array;
          const exports = value(config, void 0 !== logger ? logger : M(array), module);
          config = exports.startZOrder, _ = exports.zOrderStep, data = require, utility = data + module, handler = 1
        }
        if (0 !== _)
          for (; data !== utility;) {
            const module = function(config + handler * _);
            nextValue(exports[data], module), config = module, data += handler
          } else {
            const module = exports.findIndex((exports => object(exports))); - 1 !== module ? (S(exports.slice(0, module), 0, nextValue, state), boolean(exports.slice(module + 1), 0, nextValue, state)) :
              boolean(exports, 0, nextValue, state)
          }
      }(logger, array, config, object, state, nextValue, result)
    }

    function L(exports, module, require) {
      for (; module < exports.length && require(exports[module]);) module++;
      return Math.min(module, exports.length - 1)
    }

    function key(exports, module, require) {
      for (; module >= 0 && require(exports[module]);) module--;
      return Math.max(0, module)
    }

    function E(exports, module, require, state, object, nextValue, result) {
      const array = exports.indexOf(require) + 1;
      A(exports, module, array, state, object, nextValue, result)
    }

    function D(exports, module, require, state, object, nextValue, result) {
      const array = exports.indexOf(require);
      A(exports, module, array, state, object, nextValue, result)
    }

    function B(exports, module, require) {
      E(exports, module, require, logger.isSeries, utility, method, getter)
    }

    function V(exports, module, require) {
      D(exports, module, require, logger.isSeries, utility, method, getter)
    }

    function R(exports) {
      const module = function(exports) {
          const module = new Map;
          for (const require of exports.panes)
            for (const exports of require.lines) module.set(exports.id, {
              pane: require,
              line: exports
            });
          return module
        }(exports),
        require = new Map;
      for (const state of exports.groups) {
        const exports = new Set(state.tools),
          result = state.tools.map((exports => (0, nextValue.ensureDefined)(module.get(exports)))).map((exports => exports.line.zOrder)),
          array = Math.max(...result),
          logger = (0, nextValue.ensureDefined)(module.get(state.tools[0])).pane,
          config = (0, object.default)(logger.lines, (module => module.zOrder < array && !exports.has(module.id)))?.zOrder ?? -1 / 0,
          handler = state.tools.filter((exports => (0, nextValue.ensureDefined)(module.get(exports)).line.zOrder < config)).reverse();
        for (let exports = 0; exports < handler.length; exports++) {
          const state = config + exports + 1;
          require.set(handler[exports], state);
          const object = (0, nextValue.ensureDefined)(module.get(handler[exports]));
          object.line.zOrder = state;
          let result = -1,
            array = -1;
          for (let exports = 0; exports < logger.lines.length; exports++) {
            const module = logger.lines[exports];
            if (module.id === object.line.id && (result = exports), module.zOrder > state && (array = exports), result >= 0 && array >= 0) break
          }
          logger.lines.splice(-1 === array ? 1 / 0 : array, 0, object.line), logger.lines.splice(result, 1)
        }
      }
      return require
    }! function(exports) {
      exports[exports.MainSeriesZOrder = 0] = "MainSeriesZOrder", exports[exports.StudyBaseZOrder = 1e4] = "StudyBaseZOrder", exports[exports
        .MaxFractionLength = 3] = "MaxFractionLength"
    }(state || (state = {}))