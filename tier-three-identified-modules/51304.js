/**
 * Module: 51304
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.740Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 51304 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51304: (exports, t, i) => {
    "use strict";
    i.d(t, {
      InvalidationLevel: () => series,
      InvalidationMask: () => l,
      defaultInvalidationLevel: () => r
    });
    var series, o = i(50151);
    class n {
      constructor(exports = r) {
        this._paneInvalidationLevel = r, this._leftPriceScalesInvalidationMap = new Map, this
          ._rightPriceScalesInvalidationMap = new Map, this._legendWidgetInvalidated = !1, this._invalidationLevel = e
      }
      fullInvalidation() {
        return this._invalidationLevel
      }
      invalidateAll(exports) {
        this._invalidationLevel = Math.max(this._invalidationLevel, e)
      }
      invalidatePane(exports) {
        this._paneInvalidationLevel = Math.max(this._invalidationLevel, e)
      }
      invalidateLegendWidgetLayout() {
        this._legendWidgetInvalidated = !0
      }
      invalidatePriceScale(exports, t, i) {
        const series = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap,
          o = series.get(t) || r;
        series.set(t, Math.max(o, i))
      }
      invalidationLevelForPane() {
        return Math.max(this._paneInvalidationLevel, this._invalidationLevel)
      }
      legendWidgetLayoutInvalidated() {
        return this._legendWidgetInvalidated || this._invalidationLevel === series.Full
      }
      getterForPriceScaleInvalidationLevelBySide(exports) {
        const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        return exports => Math.max(t.get(exports) || r, this._invalidationLevel)
      }
      priceScaleSideMaxLevel(exports) {
        const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        let i = this._invalidationLevel;
        return t.size > 0 && t.forEach((exports => {
          e > i && (i = e)
        })), i
      }
      merge(exports) {
        this._invalidationLevel = Math.max(this._invalidationLevel, exports._invalidationLevel), this
          ._paneInvalidationLevel = Math.max(this._paneInvalidationLevel, exports._paneInvalidationLevel), e
          ._leftPriceScalesInvalidationMap.forEach(((exports, t) => {
            const i = this._leftPriceScalesInvalidationMap.get(t) || r;
            this._leftPriceScalesInvalidationMap.set(t, Math.max(i, e))
          })), exports._rightPriceScalesInvalidationMap.forEach(((exports, t) => {
            const i = this._rightPriceScalesInvalidationMap.get(t) || r;
            this._rightPriceScalesInvalidationMap.set(t, Math.max(i, e))
          })), this._legendWidgetInvalidated = this._legendWidgetInvalidated || exports._legendWidgetInvalidated
      }
    }! function(exports) {
      e[exports.None = 0] = "None", e[exports.Cursor = 1] = "Cursor", e[exports.Light = 2] = "Light", e[exports.Full = 3] = "Full"
    }(s || (series = {}));
    const r = series.None;
    var a;
    ! function(exports) {
      e[exports.ScrollAnimation = 0] = "ScrollAnimation", e[exports.StopAnimation = 1] = "StopAnimation"
    }(a || (a = {}));
    class l {
      constructor(exports = r) {
        this._panesOrderChanged = !1, this._keepVisibleTimeRangeOnResize = !1, this._timeScaleInvalidation = {
          level: r,
          animations: [],
          invalidateStubs: !1
        }, this._invalidatedPanes = new Map, this._additionalActions = [], this._invalidationLevel = e
      }
      invalidateAll(exports) {
        this._invalidationLevel !== e && (this._invalidationLevel = Math.max(this._invalidationLevel, e), this
          ._invalidatedPanes.forEach((exports => {
            exports.invalidateAll(this._invalidationLevel)
          })))
      }
      invalidateAllPane(exports, t) {
        this._invalidatedPanes.has(exports) || this._invalidatedPanes.set(exports, new n(this._invalidationLevel)), (0, o
          .ensureDefined)(this._invalidatedPanes.get(exports)).invalidateAll(t)
      }
      invalidatePriceScale(exports, t, i, s) {
        this._invalidatedPanes.has(exports) || this._invalidatedPanes.set(exports, new n(this._invalidationLevel)), (0, o
          .ensureDefined)(this._invalidatedPanes.get(exports)).invalidatePriceScale(t, i, s)
      }
      invalidateTimeScale(exports, t = !1) {
        this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, e), this
          ._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation.invalidateStubs || t
      }
      invalidatePanesOrder() {
        this._panesOrderChanged = !0
      }
      lockVisibleTimeRangeOnResize() {
        this._keepVisibleTimeRangeOnResize = !0
      }
      fullInvalidation() {
        return this._invalidationLevel
      }
      maxPaneInvalidation() {
        const exports = [];
        return this._invalidatedPanes.forEach((t => {
          exports.push(t.fullInvalidation())
        })), Math.max(...e, this._invalidationLevel)
      }
      invalidationForPane(exports) {
        return this._invalidatedPanes.get(exports) || new n(this._invalidationLevel)
      }
      invalidationForTimeScale() {
        return {
          ...this._timeScaleInvalidation,
          level: Math.max(this._timeScaleInvalidation.level, this._invalidationLevel)
        }
      }
      validationActions() {
        return this._additionalActions
      }
      addValidationAction(exports) {
        this._additionalActions.push(exports)
      }
      merge(exports) {
        this._invalidationLevel = Math.max(this._invalidationLevel, exports._invalidationLevel),
          this._panesOrderChanged = this._panesOrderChanged || exports._panesOrderChanged, this
          ._keepVisibleTimeRangeOnResize = this._keepVisibleTimeRangeOnResize || exports._keepVisibleTimeRangeOnResize, this
          ._invalidatedPanes.forEach((exports => {
            exports.invalidateAll(this._invalidationLevel)
          })), exports._invalidatedPanes.forEach(((exports, t) => {
            this._invalidatedPanes.has(t) || this._invalidatedPanes.set(t, new n(this._invalidationLevel)), (0, o
              .ensureDefined)(this._invalidatedPanes.get(t)).merge(exports)
          })), this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, e
            ._timeScaleInvalidation.level), this._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation
          .invalidateStubs || exports._timeScaleInvalidation.invalidateStubs;
        for (let t = 0; t < exports._additionalActions.length; t++) this._additionalActions.push(exports._additionalActions[t]);
        for (const t of exports._timeScaleInvalidation.animations) this._applyTimeScaleAnimationInvalidation(t)
      }
      panesOrderInvalidated() {
        return this._panesOrderChanged
      }
      isVisibleTimeRangeLockedOnResize() {
        return this._keepVisibleTimeRangeOnResize
      }
      setTimeScaleAnimation(exports, t) {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 0,
          value: exports,
          rightOffsetPx: t
        }), this._invalidationLevel = Math.max(this._invalidationLevel, series.Light)
      }
      stopTimeScaleAnimation() {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 1
        }), this._invalidationLevel = Math.max(this._invalidationLevel, series.Light)
      }
      static cursor() {
        return new l(series.Cursor)
      }
      static light() {
        return new l(series.Light)
      }
      static full() {
        return new l(series.Full)
      }
      static timeScale(exports, t = !1) {
        const i = new l;
        return i.invalidateTimeScale(exports, t), i
      }
      static panesOrder() {
        const exports = l.full();
        return exports.invalidatePanesOrder(), e
      }
      static invalidateLegendWidgetLayout(exports) {
        const t = new l;
        return t._invalidatedPanes.set(exports, new n), t._invalidatedPanes.get(exports)?.invalidateLegendWidgetLayout(), t
      }
      static validateAction(exports) {
        const t = new l;
        return t._additionalActions.push(exports), t
      }
      _applyTimeScaleAnimationInvalidation(exports) {
        switch (exports.type) {
          case 0:
            this.setTimeScaleAnimation(exports.value, exports.rightOffsetPx);
            break;
          case 1:
            this._removeTimeScaleAnimation()
        }
      }
      _removeTimeScaleAnimation() {
        const exports = this._timeScaleInvalidation.animations.findIndex((exports => 0 === exports.type));
        if (-1 !== e) {
          const [t] = this._timeScaleInvalidation.animations.splice(exports, 1);
          t.value.onFinish?.(!1)
        }
      }
    }