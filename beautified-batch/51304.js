/**
 * Module 51304 - Auto-beautified from TradingView webpack bundle
 *
 * @module 51304
 * @date 2026-04-23
 * @size 6200 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - InvalidationLevel (internal: s)
 *   - InvalidationMask (internal: l)
 *   - defaultInvalidationLevel (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  InvalidationLevel: () => s,
  InvalidationMask: () => l,
  defaultInvalidationLevel: () => r
});
var s, o = i(50151);
class n {
  constructor(e = r) {
    this._paneInvalidationLevel = r, this._leftPriceScalesInvalidationMap = new Map, this._rightPriceScalesInvalidationMap = new Map, this._legendWidgetInvalidated = !1, this._invalidationLevel = e
  }
  fullInvalidation() {
    return this._invalidationLevel
  }
  invalidateAll(e) {
    this._invalidationLevel = Math.max(this._invalidationLevel, e)
  }
  invalidatePane(e) {
    this._paneInvalidationLevel = Math.max(this._invalidationLevel, e)
  }
  invalidateLegendWidgetLayout() {
    this._legendWidgetInvalidated = !0
  }
  invalidatePriceScale(e, t, i) {
    const s = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap,
      o = s.get(t) || r;
    s.set(t, Math.max(o, i))
  }
  invalidationLevelForPane() {
    return Math.max(this._paneInvalidationLevel, this._invalidationLevel)
  }
  legendWidgetLayoutInvalidated() {
    return this._legendWidgetInvalidated || this._invalidationLevel === s.Full
  }
  getterForPriceScaleInvalidationLevelBySide(e) {
    const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
    return e => Math.max(t.get(e) || r, this._invalidationLevel)
  }
  priceScaleSideMaxLevel(e) {
    const t = "left" === e ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
    let i = this._invalidationLevel;
    return t.size > 0 && t.forEach((e => {
      e > i && (i = e)
    })), i
  }
  merge(e) {
    this._invalidationLevel = Math.max(this._invalidationLevel, e._invalidationLevel), this._paneInvalidationLevel = Math.max(this._paneInvalidationLevel, e._paneInvalidationLevel), e._leftPriceScalesInvalidationMap.forEach(((e, t) => {
      const i = this._leftPriceScalesInvalidationMap.get(t) || r;
      this._leftPriceScalesInvalidationMap.set(t, Math.max(i, e))
    })), e._rightPriceScalesInvalidationMap.forEach(((e, t) => {
      const i = this._rightPriceScalesInvalidationMap.get(t) || r;
      this._rightPriceScalesInvalidationMap.set(t, Math.max(i, e))
    })), this._legendWidgetInvalidated = this._legendWidgetInvalidated || e._legendWidgetInvalidated
  }
}! function(e) {
  e[e.None = 0] = "None", e[e.Cursor = 1] = "Cursor", e[e.Light = 2] = "Light", e[e.Full = 3] = "Full"
}(s || (s = {}));
const r = s.None;
var a;
! function(e) {
  e[e.ScrollAnimation = 0] = "ScrollAnimation", e[e.StopAnimation = 1] = "StopAnimation"
}(a || (a = {}));
class l {
  constructor(e = r) {
    this._panesOrderChanged = !1, this._keepVisibleTimeRangeOnResize = !1, this._timeScaleInvalidation = {
      level: r,
      animations: [],
      invalidateStubs: !1
    }, this._invalidatedPanes = new Map, this._additionalActions = [], this._invalidationLevel = e
  }
  invalidateAll(e) {
    this._invalidationLevel !== e && (this._invalidationLevel = Math.max(this._invalidationLevel, e), this._invalidatedPanes.forEach((e => {
      e.invalidateAll(this._invalidationLevel)
    })))
  }
  invalidateAllPane(e, t) {
    this._invalidatedPanes.has(e) || this._invalidatedPanes.set(e, new n(this._invalidationLevel)), (0, o.ensureDefined)(this._invalidatedPanes.get(e)).invalidateAll(t)
  }
  invalidatePriceScale(e, t, i, s) {
    this._invalidatedPanes.has(e) || this._invalidatedPanes.set(e, new n(this._invalidationLevel)), (0, o.ensureDefined)(this._invalidatedPanes.get(e)).invalidatePriceScale(t, i, s)
  }
  invalidateTimeScale(e, t = !1) {
    this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, e), this._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation.invalidateStubs || t
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
    const e = [];
    return this._invalidatedPanes.forEach((t => {
      e.push(t.fullInvalidation())
    })), Math.max(...e, this._invalidationLevel)
  }
  invalidationForPane(e) {
    return this._invalidatedPanes.get(e) || new n(this._invalidationLevel)
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
  addValidationAction(e) {
    this._additionalActions.push(e)
  }
  merge(e) {
    this._invalidationLevel = Math.max(this._invalidationLevel, e._invalidationLevel),
      this._panesOrderChanged = this._panesOrderChanged || e._panesOrderChanged, this._keepVisibleTimeRangeOnResize = this._keepVisibleTimeRangeOnResize || e._keepVisibleTimeRangeOnResize, this._invalidatedPanes.forEach((e => {
        e.invalidateAll(this._invalidationLevel)
      })), e._invalidatedPanes.forEach(((e, t) => {
        this._invalidatedPanes.has(t) || this._invalidatedPanes.set(t, new n(this._invalidationLevel)), (0, o.ensureDefined)(this._invalidatedPanes.get(t)).merge(e)
      })), this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, e._timeScaleInvalidation.level), this._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation.invalidateStubs || e._timeScaleInvalidation.invalidateStubs;
    for (let t = 0; t < e._additionalActions.length; t++) this._additionalActions.push(e._additionalActions[t]);
    for (const t of e._timeScaleInvalidation.animations) this._applyTimeScaleAnimationInvalidation(t)
  }
  panesOrderInvalidated() {
    return this._panesOrderChanged
  }
  isVisibleTimeRangeLockedOnResize() {
    return this._keepVisibleTimeRangeOnResize
  }
  setTimeScaleAnimation(e, t) {
    this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
      type: 0,
      value: e,
      rightOffsetPx: t
    }), this._invalidationLevel = Math.max(this._invalidationLevel, s.Light)
  }
  stopTimeScaleAnimation() {
    this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
      type: 1
    }), this._invalidationLevel = Math.max(this._invalidationLevel, s.Light)
  }
  static cursor() {
    return new l(s.Cursor)
  }
  static light() {
    return new l(s.Light)
  }
  static full() {
    return new l(s.Full)
  }
  static timeScale(e, t = !1) {
    const i = new l;
    return i.invalidateTimeScale(e, t), i
  }
  static panesOrder() {
    const e = l.full();
    return e.invalidatePanesOrder(), e
  }
  static invalidateLegendWidgetLayout(e) {
    const t = new l;
    return t._invalidatedPanes.set(e, new n), t._invalidatedPanes.get(e)?.invalidateLegendWidgetLayout(), t
  }
  static validateAction(e) {
    const t = new l;
    return t._additionalActions.push(e), t
  }
  _applyTimeScaleAnimationInvalidation(e) {
    switch (e.type) {
      case 0:
        this.setTimeScaleAnimation(e.value, e.rightOffsetPx);
        break;
      case 1:
        this._removeTimeScaleAnimation()
    }
  }
  _removeTimeScaleAnimation() {
    const e = this._timeScaleInvalidation.animations.findIndex((e => 0 === e.type));
    if (-1 !== e) {
      const [t] = this._timeScaleInvalidation.animations.splice(e, 1);
      t.value.onFinish?.(!1)
    }
  }
