/**
 * Module 51304 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51304: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      InvalidationLevel: () => watchedValue_s,
      InvalidationMask: () => l,
      defaultInvalidationLevel: () => r
    });
    var watchedValue_s, o = i(50151);
    class watchedValue_n {
      constructor(watchedValue_e = r) {
        this._paneInvalidationLevel = r, this._leftPriceScalesInvalidationMap = new Map, this
          ._rightPriceScalesInvalidationMap = new Map, this._legendWidgetInvalidated = !1, this._invalidationLevel = watchedValue_e
      }
      fullInvalidation() {
        return this._invalidationLevel
      }
      invalidateAll(watchedValue_e) {
        this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_e)
      }
      invalidatePane(watchedValue_e) {
        this._paneInvalidationLevel = Math.max(this._invalidationLevel, watchedValue_e)
      }
      invalidateLegendWidgetLayout() {
        this._legendWidgetInvalidated = !0
      }
      invalidatePriceScale(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = "left" === watchedValue_e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap,
          o = watchedValue_s.get(watchedValue_t) || r;
        watchedValue_s.set(watchedValue_t, Math.max(o, i))
      }
      invalidationLevelForPane() {
        return Math.max(this._paneInvalidationLevel, this._invalidationLevel)
      }
      legendWidgetLayoutInvalidated() {
        return this._legendWidgetInvalidated || this._invalidationLevel === watchedValue_s.Full
      }
      getterForPriceScaleInvalidationLevelBySide(watchedValue_e) {
        const watchedValue_t = "left" === watchedValue_e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        return watchedValue_e => Math.max(watchedValue_t.get(watchedValue_e) || r, this._invalidationLevel)
      }
      priceScaleSideMaxLevel(watchedValue_e) {
        const watchedValue_t = "left" === watchedValue_e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        let i = this._invalidationLevel;
        return watchedValue_t.size > 0 && watchedValue_t.forEach((watchedValue_e => {
          watchedValue_e > i && (i = watchedValue_e)
        })), i
      }
      merge(watchedValue_e) {
        this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_e._invalidationLevel), this
          ._paneInvalidationLevel = Math.max(this._paneInvalidationLevel, watchedValue_e._paneInvalidationLevel), watchedValue_e
          ._leftPriceScalesInvalidationMap.forEach(((watchedValue_e, watchedValue_t) => {
            const i = this._leftPriceScalesInvalidationMap.get(watchedValue_t) || r;
            this._leftPriceScalesInvalidationMap.set(watchedValue_t, Math.max(i, watchedValue_e))
          })), watchedValue_e._rightPriceScalesInvalidationMap.forEach(((watchedValue_e, watchedValue_t) => {
            const i = this._rightPriceScalesInvalidationMap.get(watchedValue_t) || r;
            this._rightPriceScalesInvalidationMap.set(watchedValue_t, Math.max(i, watchedValue_e))
          })), this._legendWidgetInvalidated = this._legendWidgetInvalidated || watchedValue_e._legendWidgetInvalidated
      }
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.None = 0] = "None", watchedValue_e[watchedValue_e.Cursor = 1] = "Cursor", watchedValue_e[watchedValue_e.Light = 2] = "Light", watchedValue_e[watchedValue_e.Full = 3] = "Full"
    }(watchedValue_s || (watchedValue_s = {}));
    const r = watchedValue_s.None;
    var watchedValue_a;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.ScrollAnimation = 0] = "ScrollAnimation", watchedValue_e[watchedValue_e.StopAnimation = 1] = "StopAnimation"
    }(watchedValue_a || (watchedValue_a = {}));
    class l {
      constructor(watchedValue_e = r) {
        this._panesOrderChanged = !1, this._keepVisibleTimeRangeOnResize = !1, this._timeScaleInvalidation = {
          level: r,
          animations: [],
          invalidateStubs: !1
        }, this._invalidatedPanes = new Map, this._additionalActions = [], this._invalidationLevel = watchedValue_e
      }
      invalidateAll(watchedValue_e) {
        this._invalidationLevel !== watchedValue_e && (this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_e), this
          ._invalidatedPanes.forEach((watchedValue_e => {
            watchedValue_e.invalidateAll(this._invalidationLevel)
          })))
      }
      invalidateAllPane(watchedValue_e, watchedValue_t) {
        this._invalidatedPanes.has(watchedValue_e) || this._invalidatedPanes.set(watchedValue_e, new watchedValue_n(this._invalidationLevel)), (0, o
          .ensureDefined)(this._invalidatedPanes.get(watchedValue_e)).invalidateAll(watchedValue_t)
      }
      invalidatePriceScale(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        this._invalidatedPanes.has(watchedValue_e) || this._invalidatedPanes.set(watchedValue_e, new watchedValue_n(this._invalidationLevel)), (0, o
          .ensureDefined)(this._invalidatedPanes.get(watchedValue_e)).invalidatePriceScale(watchedValue_t, i, watchedValue_s)
      }
      invalidateTimeScale(watchedValue_e, watchedValue_t = !1) {
        this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, watchedValue_e), this
          ._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation.invalidateStubs || watchedValue_t
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
        const watchedValue_e = [];
        return this._invalidatedPanes.forEach((watchedValue_t => {
          watchedValue_e.push(watchedValue_t.fullInvalidation())
        })), Math.max(...watchedValue_e, this._invalidationLevel)
      }
      invalidationForPane(watchedValue_e) {
        return this._invalidatedPanes.get(watchedValue_e) || new watchedValue_n(this._invalidationLevel)
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
      addValidationAction(watchedValue_e) {
        this._additionalActions.push(watchedValue_e)
      }
      merge(watchedValue_e) {
        this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_e._invalidationLevel),
          this._panesOrderChanged = this._panesOrderChanged || watchedValue_e._panesOrderChanged, this
          ._keepVisibleTimeRangeOnResize = this._keepVisibleTimeRangeOnResize || watchedValue_e._keepVisibleTimeRangeOnResize, this
          ._invalidatedPanes.forEach((watchedValue_e => {
            watchedValue_e.invalidateAll(this._invalidationLevel)
          })), watchedValue_e._invalidatedPanes.forEach(((watchedValue_e, watchedValue_t) => {
            this._invalidatedPanes.has(watchedValue_t) || this._invalidatedPanes.set(watchedValue_t, new watchedValue_n(this._invalidationLevel)), (0, o
              .ensureDefined)(this._invalidatedPanes.get(watchedValue_t)).merge(watchedValue_e)
          })), this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, watchedValue_e
            ._timeScaleInvalidation.level), this._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation
          .invalidateStubs || watchedValue_e._timeScaleInvalidation.invalidateStubs;
        for (let watchedValue_t = 0; watchedValue_t < watchedValue_e._additionalActions.length; watchedValue_t++) this._additionalActions.push(watchedValue_e._additionalActions[watchedValue_t]);
        for (const watchedValue_t of watchedValue_e._timeScaleInvalidation.animations) this._applyTimeScaleAnimationInvalidation(watchedValue_t)
      }
      panesOrderInvalidated() {
        return this._panesOrderChanged
      }
      isVisibleTimeRangeLockedOnResize() {
        return this._keepVisibleTimeRangeOnResize
      }
      setTimeScaleAnimation(watchedValue_e, watchedValue_t) {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 0,
          value: watchedValue_e,
          rightOffsetPx: watchedValue_t
        }), this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_s.Light)
      }
      stopTimeScaleAnimation() {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 1
        }), this._invalidationLevel = Math.max(this._invalidationLevel, watchedValue_s.Light)
      }
      static cursor() {
        return new l(watchedValue_s.Cursor)
      }
      static light() {
        return new l(watchedValue_s.Light)
      }
      static full() {
        return new l(watchedValue_s.Full)
      }
      static timeScale(watchedValue_e, watchedValue_t = !1) {
        const i = new l;
        return i.invalidateTimeScale(watchedValue_e, watchedValue_t), i
      }
      static panesOrder() {
        const watchedValue_e = l.full();
        return watchedValue_e.invalidatePanesOrder(), watchedValue_e
      }
      static invalidateLegendWidgetLayout(watchedValue_e) {
        const watchedValue_t = new l;
        return watchedValue_t._invalidatedPanes.set(watchedValue_e, new watchedValue_n), watchedValue_t._invalidatedPanes.get(watchedValue_e)?.invalidateLegendWidgetLayout(), watchedValue_t
      }
      static validateAction(watchedValue_e) {
        const watchedValue_t = new l;
        return watchedValue_t._additionalActions.push(watchedValue_e), watchedValue_t
      }
      _applyTimeScaleAnimationInvalidation(watchedValue_e) {
        switch (watchedValue_e.type) {
          case 0:
            this.setTimeScaleAnimation(watchedValue_e.value, watchedValue_e.rightOffsetPx);
            break;
          case 1:
            this._removeTimeScaleAnimation()
        }
      }
      _removeTimeScaleAnimation() {
        const watchedValue_e = this._timeScaleInvalidation.animations.findIndex((watchedValue_e => 0 === watchedValue_e.type));
        if (-1 !== watchedValue_e) {
          const [watchedValue_t] = this._timeScaleInvalidation.animations.splice(watchedValue_e, 1);
          watchedValue_t.value.onFinish?.(!1)
        }
      }
    }