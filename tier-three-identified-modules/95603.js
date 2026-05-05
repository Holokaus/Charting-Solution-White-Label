/**
 * Module: 95603
 * Semantic: seriesData
 * Confidence: 80.0%
 * Generated: 2026-05-03T17:33:53.170Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 95603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95603: (exports, module, i) => {
    "use strict";
    require.d(module, {
      inactivityGapsStudyItem: () => d
    });
    var state = i(47312),
      object = i(51101),
      nextValue = i(51829),
      result = i(99955),
      array = i(37236),
      logger = i(50151),
      config = i(19979);
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
    const data = {
      name: "InactivityGaps",
      metainfo: handler,
      constructor: class {
        constructor() {
          this._lastRange = null, this._range = {
            from: null,
            to: null
          }
        }
        init(exports, t) {
          const require = t(0);
          "string" != typeof i && config.Std.error(`Unexpected non-string value for ${handler.inputs[0].name}`), this
            ._displaySession = require, this._range = {
              from: null,
              to: null
            }, this._lastRange = null;
          const nextValue = exports.symbol.info;
          if (void 0 === n) return;
          const result = "session" === this._displaySession ? exports.symbol.info?.session ?? "24x7" : this._displaySession,
            array = state.SessionInfo.create(nextValue.timezone, result, exports.symbol.session.state().holidays, exports.symbol.session.state()
              .corrections);
          this._mainSeriesBarBuilder = (0, object.newBarBuilder)(exports.symbol.period, exports.symbol.session), this
            ._extrapolationBarBuilder = (0, object.newBarBuilder)(exports.symbol.period, a)
        }
        main(exports, t) {
          const require = exports.symbol,
            state = config.Std.time(exports);
          if ("number" == typeof s && isFinite(state) && (null === this._range.from && (this._range.from = s), this
              ._range.to = s), require.isLastBar && null !== (data = this._range) && null !== data.from && null !== data.to && (
              object = this._range, handler = this._lastRange, o?.from !== h?.from || o?.to !== h?.to)) {
            this._lastRange = {
              ...this._range
            };
            const module = (0, result.extrapolateBarsFrontToTime)(this._extrapolationBarBuilder, this._range.from, this
              ._range.to, 1 / 0, !0).times;
            for (let state = 0; s < module.length; s++)
              if (this._mainSeriesBarBuilder.moveTo(t[s]), require.isdwm()) {
                const require = (0, array.get_cal_from_unix_timestamp_ms)((0, logger.ensure)(exports.symbol.timezone, "timezone"), t[
                  s]);
                exports.symbol.session.spec.includesDay(require) && (t[s] = this._mainSeriesBarBuilder.startOfBar(0))
              } else {
                const exports = this._mainSeriesBarBuilder.indexOfBar(t[s]);
                if (e !== nextValue.SessionStage.PRE_SESSION && e !== nextValue.SessionStage.POST_SESSION) {
                  const require = this._mainSeriesBarBuilder.startOfBar(exports);
                  t[s] = i
                }
              } return {
              nonseries: !0,
              type: "study_gap",
              displaySession: this._displaySession,
              times: t
            }
          }
          var object, handler, data;
          return null
        }
      }
    }