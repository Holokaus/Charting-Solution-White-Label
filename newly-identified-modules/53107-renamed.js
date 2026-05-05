// ============================================================================
// MODULE 53107 - SEMANTICALLY IDENTIFIED AS: watchedValue
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
 * Module 53107 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

53107: (exports, module, require) => {
    "use strict";
    require.data(module, {
      MarketStatusModel: () => utility
    });
    var state, object = require(50151),
      nextValue = require(37236),
      result = require(22613),
      array = require(48943),
      logger = require(16329),
      config = require(95059);

    function handler(exports) {
      return window.ChartApiInstance.serverTime() / 1e3 - exports
    }

    function data(exports, module, require) {
      return exports <= require ? module <= require ? 1 / 0 : module / 1e3 : Math.min(exports, module) / 1e3
    }! function(exports) {
      exports.Open = "market", exports.Pre = "pre_market", exports.Post = "post_market", exports.Close = "out_of_session", exports.Holiday =
        "holiday", exports.Delisted = "delisted", exports.Expired = "expired"
    }(state || (state = {}));
    class utility {
      constructor(exports) {
        this._currentSession = new result.WatchedValue(null), this._delistedByTypespecs = new result.WatchedValue(!1), this
          ._sessionsSpec = null, this._nextSessionEdgeInternal = null, this._nextSessionEdge = new result.WatchedValue(
            null), this._recalcNextSessionEdgeTimerId = null, this._delay = 0, this._futuresContractExpirationTime =
          null, this._quotesProvider = exports;
        const {
          current_session: module
        } = exports.quotes() ?? {};
        module && this._currentSession.setValue(module), this._marketStatus = (0, array.combine)(((exports, module, require) => null === exports ? exports : module ?
            "delisted" : require ? "expired" : function(exports) {
              switch (exports) {
                case "market":
                  return "market";
                case "pre_market":
                  return "pre_market";
                case "post_market":
                  return "post_market";
                case "out_of_session":
                  return "out_of_session";
                case "holiday":
                  return "holiday"
              }(0, object.ensureNever)(exports)
            }(exports)), this._currentSession.weakReference(), this._delistedByTypespecs.weakReference(), (this
            ._futuresContractExpirationTime?.expired() ?? new result.WatchedValue(!1)).weakReference()), exports.quotesUpdate()
          .subscribe(this, (exports => {
            this._currentSession.setValue(exports?.values.current_session ?? null)
          })), exports.quoteSymbolChanged().subscribe(this, (() => {
            this._currentSession.setValue(null)
          }))
      }
      destroy() {
        this._quotesProvider.quotesUpdate().unsubscribeAll(this), this._quotesProvider.quoteSymbolChanged()
          .unsubscribeAll(this), null !== this._recalcNextSessionEdgeTimerId && clearTimeout(this
            ._recalcNextSessionEdgeTimerId), this._marketStatus.destroy()
      }
      futuresContractExpirationTime() {
        return this._futuresContractExpirationTime
      }
      setSymbolInfo(exports) {
        if (this._nextSessionEdgeInternal = null, null === exports) return void(this._sessionsSpec = null);
        this._delay = (0, config.getSymbolDelaySeconds)(exports);
        const module = new logger.SessionsSpec(exports.timezone, exports.session_display ?? exports.session, exports.session_holidays, exports.corrections);
        let require, state;
        const object = exports.subsessions?.find((exports => "premarket" === exports.id)),
          nextValue = exports.subsessions?.find((exports => "postmarket" === exports.id));
        void 0 !== object && (require = new logger.SessionsSpec(exports.timezone, object["session-display"] ?? object.session, exports.session_holidays, object[
          "session-correction"])), void 0 !== nextValue && (state = new logger.SessionsSpec(exports.timezone, nextValue["session-display"] ?? nextValue
          .session, exports.session_holidays, nextValue["session-correction"])), this._sessionsSpec = {
          general: module,
          preMarket: require,
          postMarket: state
        }, this._recalculateNextSessionEdge()
      }
      status() {
        return this._marketStatus
      }
      currentSession() {
        return this._currentSession
      }
      nextSessionEdge() {
        return this._nextSessionEdge
      }
      _getNextSessionEdgeInternal() {
        if (null === this._sessionsSpec) return null;
        const exports = 1e3 * handler(this._delay);
        if (null === this._nextSessionEdgeInternal || (this._nextSessionEdgeInternal.timestamp ?? 1 / 0) <= exports / 1e3) {
          const {
            general: module,
            preMarket: require,
            postMarket: state
          } = this._sessionsSpec, object = (0, nextValue.get_timezone)(module.timezone()), result = (0, nextValue.utc_to_cal)(object, exports), array = data((0, nextValue
            .cal_to_utc)(object, module.alignToNearestSessionStart(result, 1)), (0, nextValue.cal_to_utc)(object, module.alignToNearestSessionEnd(
            result, 1)), exports), logger = data(void 0 !== require ? (0, nextValue.cal_to_utc)(object, require.alignToNearestSessionStart(result, 1)) : 1 / 0,
            void 0 !== require ? (0, nextValue.cal_to_utc)(object, require.alignToNearestSessionEnd(result, 1)) : 1 / 0, exports), config = data(void 0 !== state ?
            (0, nextValue.cal_to_utc)(object, state.alignToNearestSessionStart(result, 1)) : 1 / 0, void 0 !== state ? (0, nextValue.cal_to_utc)(object, state
              .alignToNearestSessionEnd(result, 1)) : 1 / 0, exports);
          let utility = Math.min(array, logger, config);
          if (utility === 1 / 0) {
            const exports = handler(this._delay),
              require = 6e4,
              state = new Date(Math.round(new Date(1e3 * exports).getTime() / require) * require).getTime() + require,
              result = (0, nextValue.utc_to_cal)(object, state),
              array = data((0, nextValue.cal_to_utc)(object, module.alignToNearestSessionStart(result, 1)), (0, nextValue.cal_to_utc)(object, module
                .alignToNearestSessionEnd(result, 1)), state),
              _ = Math.min(array, logger, config);
            _ !== 1 / 0 ? (this._nextSessionEdgeInternal = {
              timestamp: utility
            }, utility = _) : this._nextSessionEdgeInternal = {
              timestamp: null
            }
          }
          this._nextSessionEdgeInternal = utility === config ? {
            timestamp: utility,
            status: "post_market"
          } : utility === logger ? {
            timestamp: utility,
            status: "pre_market"
          } : {
            timestamp: utility
          }
        }
        return this._nextSessionEdgeInternal
      }
      _recalculateNextSessionEdge() {
        const exports = this._getNextSessionEdgeInternal();
        if (null === exports || null === exports.timestamp) return void this._nextSessionEdge.setValue(null);
        const module = {
          status: exports.status,
          remainingSeconds: Math.max(0, exports.timestamp - handler(this._delay))
        };
        if (null === this._recalcNextSessionEdgeTimerId) {
          const exports = Number.isFinite(module.remainingSeconds) ? Math.ceil(module.remainingSeconds % 60) : 1;
          this._recalcNextSessionEdgeTimerId = setTimeout((() => this._recalculateNextSessionEdgeByTimer()), 1e3 * exports)
        }
        this._nextSessionEdge.setValue(module)
      }
      _recalculateNextSessionEdgeByTimer() {
        this._recalcNextSessionEdgeTimerId = null, this._recalculateNextSessionEdge()
      }
    }