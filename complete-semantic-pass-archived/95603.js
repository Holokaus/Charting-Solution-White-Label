/**
 * Module 95603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95603: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      inactivityGapsStudyItem: () => seriesBarFunction_d
    });
    var seriesBarFunction_s = seriesBarFunction_i(47312),
      seriesBarFunction_o = seriesBarFunction_i(51101),
      seriesBarFunction_n = seriesBarFunction_i(51829),
      seriesBarFunction_r = seriesBarFunction_i(99955),
      seriesBarFunction_a = seriesBarFunction_i(37236),
      seriesBarFunction_l = seriesBarFunction_i(50151),
      seriesBarFunction_c = seriesBarFunction_i(19979);
    const seriesBarFunction_h = {
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
      metainfo: seriesBarFunction_h,
      constructor: class {
        constructor() {
          this._lastRange = null, this._range = {
            from: null,
            to: null
          }
        }
        init(seriesBarFunction_e, seriesBarFunction_t) {
          const seriesBarFunction_i = seriesBarFunction_t(0);
          "string" != typeof seriesBarFunction_i && seriesBarFunction_c.Std.error(`Unexpected non-string value for ${seriesBarFunction_h.inputs[0].name}`), this
            ._displaySession = seriesBarFunction_i, this._range = {
              from: null,
              to: null
            }, this._lastRange = null;
          const seriesBarFunction_n = seriesBarFunction_e.symbol.info;
          if (void 0 === seriesBarFunction_n) return;
          const seriesBarFunction_r = "session" === this._displaySession ? seriesBarFunction_e.symbol.info?.session ?? "24x7" : this._displaySession,
            seriesBarFunction_a = seriesBarFunction_s.SessionInfo.create(seriesBarFunction_n.timezone, seriesBarFunction_r, seriesBarFunction_e.symbol.session.state().holidays, seriesBarFunction_e.symbol.session.state()
              .corrections);
          this._mainSeriesBarBuilder = (0, seriesBarFunction_o.newBarBuilder)(seriesBarFunction_e.symbol.period, seriesBarFunction_e.symbol.session), this
            ._extrapolationBarBuilder = (0, seriesBarFunction_o.newBarBuilder)(seriesBarFunction_e.symbol.period, seriesBarFunction_a)
        }
        main(seriesBarFunction_e, seriesBarFunction_t) {
          const seriesBarFunction_i = seriesBarFunction_e.symbol,
            seriesBarFunction_s = seriesBarFunction_c.Std.time(seriesBarFunction_e);
          if ("number" == typeof seriesBarFunction_s && isFinite(seriesBarFunction_s) && (null === this._range.from && (this._range.from = seriesBarFunction_s), this
              ._range.to = seriesBarFunction_s), seriesBarFunction_i.isLastBar && null !== (seriesBarFunction_d = this._range) && null !== seriesBarFunction_d.from && null !== seriesBarFunction_d.to && (
              seriesBarFunction_o = this._range, seriesBarFunction_h = this._lastRange, seriesBarFunction_o?.from !== seriesBarFunction_h?.from || seriesBarFunction_o?.to !== seriesBarFunction_h?.to)) {
            this._lastRange = {
              ...this._range
            };
            const seriesBarFunction_t = (0, seriesBarFunction_r.extrapolateBarsFrontToTime)(this._extrapolationBarBuilder, this._range.from, this
              ._range.to, 1 / 0, !0).times;
            for (let seriesBarFunction_s = 0; seriesBarFunction_s < seriesBarFunction_t.length; seriesBarFunction_s++)
              if (this._mainSeriesBarBuilder.moveTo(seriesBarFunction_t[seriesBarFunction_s]), seriesBarFunction_i.isdwm()) {
                const seriesBarFunction_i = (0, seriesBarFunction_a.get_cal_from_unix_timestamp_ms)((0, seriesBarFunction_l.ensure)(seriesBarFunction_e.symbol.timezone, "timezone"), seriesBarFunction_t[
                  seriesBarFunction_s]);
                seriesBarFunction_e.symbol.session.spec.includesDay(seriesBarFunction_i) && (seriesBarFunction_t[seriesBarFunction_s] = this._mainSeriesBarBuilder.startOfBar(0))
              } else {
                const seriesBarFunction_e = this._mainSeriesBarBuilder.indexOfBar(seriesBarFunction_t[seriesBarFunction_s]);
                if (seriesBarFunction_e !== seriesBarFunction_n.SessionStage.PRE_SESSION && seriesBarFunction_e !== seriesBarFunction_n.SessionStage.POST_SESSION) {
                  const seriesBarFunction_i = this._mainSeriesBarBuilder.startOfBar(seriesBarFunction_e);
                  seriesBarFunction_t[seriesBarFunction_s] = seriesBarFunction_i
                }
              } return {
              nonseries: !0,
              type: "study_gap",
              displaySession: this._displaySession,
              times: seriesBarFunction_t
            }
          }
          var seriesBarFunction_o, seriesBarFunction_h, seriesBarFunction_d;
          return null
        }
      }
    }