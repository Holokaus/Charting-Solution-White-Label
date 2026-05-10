/**
 * Module 95603 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

95603: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      inactivityGapsStudyItem: () => seriesBarFunction_d
    });
    var modes = require(47312),
      isValid = require(51101),
      value = require(51829),
      config = require(99955),
      seriesBarFunction_a = require(37236),
      seriesBarFunction_l = require(50151),
      seriesBarFunction_c = require(19979);
    const handler = {
      historyCalculationMayChange: !0,
      _metainfoVersion: 52,
      description: "Inactivity Gaps",
      id: "InactivityGaps@tv-basicstudies-1",
      is_hidden_study: !0,
      is_price_study: !0,
      name: "InactivityGaps@tv-basicstudies",
      inputs: [{
        id: "display_session",
        name: "Gap Display Session",
        defval: "session",
        type: "text",
        display: 0
      }],
      palettes: {},
      plots: [],
      defaults: {
        inputs: {
          display_session: "session"
        }
      },
      shortDescription: "Inactivity Gaps",
      format: {
        type: "inherit"
      },
      canExtendTimeScale: !0
    };
    const seriesBarFunction_d = {
      name: "InactivityGaps",
      metainfo: handler,
      constructor: class {
        constructor() {
          this._lastRange = null, this._range = {
            from: null,
            to: null
          }
        }
        init(exports, module) {
          const require = module(0);
          "string" != typeof require && seriesBarFunction_c.Std.error(`Unexpected non-string value for ${handler.inputs[0].name}`), this
            ._displaySession = require, this._range = {
              from: null,
              to: null
            }, this._lastRange = null;
          const value = exports.symbol.info;
          if (void 0 === value) return;
          const config = "session" === this._displaySession ? exports.symbol.info?.session ?? "24x7" : this._displaySession,
            seriesBarFunction_a = modes.SessionInfo.create(value.timezone, config, exports.symbol.session.state().holidays, exports.symbol.session.state()
              .corrections);
          this._mainSeriesBarBuilder = (0, isValid.newBarBuilder)(exports.symbol.period, exports.symbol.session), this
            ._extrapolationBarBuilder = (0, isValid.newBarBuilder)(exports.symbol.period, seriesBarFunction_a)
        }
        main(exports, module) {
          const require = exports.symbol,
            modes = seriesBarFunction_c.Std.time(exports);
          if ("number" == typeof modes && isFinite(modes) && (null === this._range.from && (this._range.from = modes), this
              ._range.to = modes), require.isLastBar && null !== (seriesBarFunction_d = this._range) && null !== seriesBarFunction_d.from && null !== seriesBarFunction_d.to && (
              isValid = this._range, handler = this._lastRange, isValid?.from !== handler?.from || isValid?.to !== handler?.to)) {
            this._lastRange = {
              ...this._range
            };
            const module = (0, config.extrapolateBarsFrontToTime)(this._extrapolationBarBuilder, this._range.from, this
              ._range.to, 1 / 0, !0).times;
            for (let modes = 0; modes < module.length; modes++)
              if (this._mainSeriesBarBuilder.moveTo(module[modes]), require.isdwm()) {
                const require = (0, seriesBarFunction_a.get_cal_from_unix_timestamp_ms)((0, seriesBarFunction_l.ensure)(exports.symbol.timezone, "timezone"), module[
                  modes]);
                exports.symbol.session.spec.includesDay(require) && (module[modes] = this._mainSeriesBarBuilder.startOfBar(0))
              } else {
                const exports = this._mainSeriesBarBuilder.indexOfBar(module[modes]);
                if (exports !== value.SessionStage.PRE_SESSION && exports !== value.SessionStage.POST_SESSION) {
                  const require = this._mainSeriesBarBuilder.startOfBar(exports);
                  module[modes] = require
                }
              } return {
              nonseries: !0,
              type: "study_gap",
              displaySession: this._displaySession,
              times: module
            }
          }
          var isValid, handler, seriesBarFunction_d;
          return null
        }
      }
    }