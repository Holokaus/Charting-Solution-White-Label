/**
 * Module 95603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95603: (e, t, i) => {
    "use strict";
    i.d(t, {
      inactivityGapsStudyItem: () => d
    });
    var s = i(47312),
      o = i(51101),
      n = i(51829),
      r = i(99955),
      a = i(37236),
      l = i(50151),
      c = i(19979);
    const h = {
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
    const d = {
      name: "InactivityGaps",
      metainfo: h,
      constructor: class {
        constructor() {
          this._lastRange = null, this._range = {
            from: null,
            to: null
          }
        }
        init(e, t) {
          const i = t(0);
          "string" != typeof i && c.Std.error(`Unexpected non-string value for ${h.inputs[0].name}`), this
            ._displaySession = i, this._range = {
              from: null,
              to: null
            }, this._lastRange = null;
          const n = e.symbol.info;
          if (void 0 === n) return;
          const r = "session" === this._displaySession ? e.symbol.info?.session ?? "24x7" : this._displaySession,
            a = s.SessionInfo.create(n.timezone, r, e.symbol.session.state().holidays, e.symbol.session.state()
              .corrections);
          this._mainSeriesBarBuilder = (0, o.newBarBuilder)(e.symbol.period, e.symbol.session), this
            ._extrapolationBarBuilder = (0, o.newBarBuilder)(e.symbol.period, a)
        }
        main(e, t) {
          const i = e.symbol,
            s = c.Std.time(e);
          if ("number" == typeof s && isFinite(s) && (null === this._range.from && (this._range.from = s), this
              ._range.to = s), i.isLastBar && null !== (d = this._range) && null !== d.from && null !== d.to && (
              o = this._range, h = this._lastRange, o?.from !== h?.from || o?.to !== h?.to)) {
            this._lastRange = {
              ...this._range
            };
            const t = (0, r.extrapolateBarsFrontToTime)(this._extrapolationBarBuilder, this._range.from, this
              ._range.to, 1 / 0, !0).times;
            for (let s = 0; s < t.length; s++)
              if (this._mainSeriesBarBuilder.moveTo(t[s]), i.isdwm()) {
                const i = (0, a.get_cal_from_unix_timestamp_ms)((0, l.ensure)(e.symbol.timezone, "timezone"), t[
                  s]);
                e.symbol.session.spec.includesDay(i) && (t[s] = this._mainSeriesBarBuilder.startOfBar(0))
              } else {
                const e = this._mainSeriesBarBuilder.indexOfBar(t[s]);
                if (e !== n.SessionStage.PRE_SESSION && e !== n.SessionStage.POST_SESSION) {
                  const i = this._mainSeriesBarBuilder.startOfBar(e);
                  t[s] = i
                }
              } return {
              nonseries: !0,
              type: "study_gap",
              displaySession: this._displaySession,
              times: t
            }
          }
          var o, h, d;
          return null
        }
      }
    }