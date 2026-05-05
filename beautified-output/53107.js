/**
 * Module 53107 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

53107: (e, t, i) => {
    "use strict";
    i.d(t, {
      MarketStatusModel: () => u
    });
    var s, o = i(50151),
      n = i(37236),
      r = i(22613),
      a = i(48943),
      l = i(16329),
      c = i(95059);

    function h(e) {
      return window.ChartApiInstance.serverTime() / 1e3 - e
    }

    function d(e, t, i) {
      return e <= i ? t <= i ? 1 / 0 : t / 1e3 : Math.min(e, t) / 1e3
    }! function(e) {
      e.Open = "market", e.Pre = "pre_market", e.Post = "post_market", e.Close = "out_of_session", e.Holiday =
        "holiday", e.Delisted = "delisted", e.Expired = "expired"
    }(s || (s = {}));
    class u {
      constructor(e) {
        this._currentSession = new r.WatchedValue(null), this._delistedByTypespecs = new r.WatchedValue(!1), this
          ._sessionsSpec = null, this._nextSessionEdgeInternal = null, this._nextSessionEdge = new r.WatchedValue(
            null), this._recalcNextSessionEdgeTimerId = null, this._delay = 0, this._futuresContractExpirationTime =
          null, this._quotesProvider = e;
        const {
          current_session: t
        } = e.quotes() ?? {};
        t && this._currentSession.setValue(t), this._marketStatus = (0, a.combine)(((e, t, i) => null === e ? e : t ?
            "delisted" : i ? "expired" : function(e) {
              switch (e) {
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
              }(0, o.ensureNever)(e)
            }(e)), this._currentSession.weakReference(), this._delistedByTypespecs.weakReference(), (this
            ._futuresContractExpirationTime?.expired() ?? new r.WatchedValue(!1)).weakReference()), e.quotesUpdate()
          .subscribe(this, (e => {
            this._currentSession.setValue(e?.values.current_session ?? null)
          })), e.quoteSymbolChanged().subscribe(this, (() => {
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
      setSymbolInfo(e) {
        if (this._nextSessionEdgeInternal = null, null === e) return void(this._sessionsSpec = null);
        this._delay = (0, c.getSymbolDelaySeconds)(e);
        const t = new l.SessionsSpec(e.timezone, e.session_display ?? e.session, e.session_holidays, e.corrections);
        let i, s;
        const o = e.subsessions?.find((e => "premarket" === e.id)),
          n = e.subsessions?.find((e => "postmarket" === e.id));
        void 0 !== o && (i = new l.SessionsSpec(e.timezone, o["session-display"] ?? o.session, e.session_holidays, o[
          "session-correction"])), void 0 !== n && (s = new l.SessionsSpec(e.timezone, n["session-display"] ?? n
          .session, e.session_holidays, n["session-correction"])), this._sessionsSpec = {
          general: t,
          preMarket: i,
          postMarket: s
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
        const e = 1e3 * h(this._delay);
        if (null === this._nextSessionEdgeInternal || (this._nextSessionEdgeInternal.timestamp ?? 1 / 0) <= e / 1e3) {
          const {
            general: t,
            preMarket: i,
            postMarket: s
          } = this._sessionsSpec, o = (0, n.get_timezone)(t.timezone()), r = (0, n.utc_to_cal)(o, e), a = d((0, n
            .cal_to_utc)(o, t.alignToNearestSessionStart(r, 1)), (0, n.cal_to_utc)(o, t.alignToNearestSessionEnd(
            r, 1)), e), l = d(void 0 !== i ? (0, n.cal_to_utc)(o, i.alignToNearestSessionStart(r, 1)) : 1 / 0,
            void 0 !== i ? (0, n.cal_to_utc)(o, i.alignToNearestSessionEnd(r, 1)) : 1 / 0, e), c = d(void 0 !== s ?
            (0, n.cal_to_utc)(o, s.alignToNearestSessionStart(r, 1)) : 1 / 0, void 0 !== s ? (0, n.cal_to_utc)(o, s
              .alignToNearestSessionEnd(r, 1)) : 1 / 0, e);
          let u = Math.min(a, l, c);
          if (u === 1 / 0) {
            const e = h(this._delay),
              i = 6e4,
              s = new Date(Math.round(new Date(1e3 * e).getTime() / i) * i).getTime() + i,
              r = (0, n.utc_to_cal)(o, s),
              a = d((0, n.cal_to_utc)(o, t.alignToNearestSessionStart(r, 1)), (0, n.cal_to_utc)(o, t
                .alignToNearestSessionEnd(r, 1)), s),
              _ = Math.min(a, l, c);
            _ !== 1 / 0 ? (this._nextSessionEdgeInternal = {
              timestamp: u
            }, u = _) : this._nextSessionEdgeInternal = {
              timestamp: null
            }
          }
          this._nextSessionEdgeInternal = u === c ? {
            timestamp: u,
            status: "post_market"
          } : u === l ? {
            timestamp: u,
            status: "pre_market"
          } : {
            timestamp: u
          }
        }
        return this._nextSessionEdgeInternal
      }
      _recalculateNextSessionEdge() {
        const e = this._getNextSessionEdgeInternal();
        if (null === e || null === e.timestamp) return void this._nextSessionEdge.setValue(null);
        const t = {
          status: e.status,
          remainingSeconds: Math.max(0, e.timestamp - h(this._delay))
        };
        if (null === this._recalcNextSessionEdgeTimerId) {
          const e = Number.isFinite(t.remainingSeconds) ? Math.ceil(t.remainingSeconds % 60) : 1;
          this._recalcNextSessionEdgeTimerId = setTimeout((() => this._recalculateNextSessionEdgeByTimer()), 1e3 * e)
        }
        this._nextSessionEdge.setValue(t)
      }
      _recalculateNextSessionEdgeByTimer() {
        this._recalcNextSessionEdgeTimerId = null, this._recalculateNextSessionEdge()
      }
    }