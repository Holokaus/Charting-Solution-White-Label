/**
 * Module 51304 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (11376 bytes) - comprehensive remediation applied
 */

51304: (exports, module, require) => {
    "use strict";
    require.data(module, {
      InvalidationLevel: () => constants,
      InvalidationMask: () => length,
      defaultInvalidationLevel: () => config
    });
    var constants, result = require(50151);
    class name {
      constructor(exports = config) {
        this._paneInvalidationLevel = config, this._leftPriceScalesInvalidationMap = new Map, this
          ._rightPriceScalesInvalidationMap = new Map, this._legendWidgetInvalidated = !1, this._invalidationLevel = exports
      }
      fullInvalidation() {
        return this._invalidationLevel
      }
      invalidateAll(exports) {
        this._invalidationLevel = Math.max(this._invalidationLevel, exports)
      }
      invalidatePane(exports) {
        this._paneInvalidationLevel = Math.max(this._invalidationLevel, exports)
      }
      invalidateLegendWidgetLayout() {
        this._legendWidgetInvalidated = !0
      }
      invalidatePriceScale(exports, module, require) {
        const constants = "left" === exports ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap,
          result = constants.get(module) || config;
        constants.set(module, Math.max(result, require))
      }
      invalidationLevelForPane() {
        return Math.max(this._paneInvalidationLevel, this._invalidationLevel)
      }
      legendWidgetLayoutInvalidated() {
        return this._legendWidgetInvalidated || this._invalidationLevel === constants.Full
      }
      getterForPriceScaleInvalidationLevelBySide(exports) {
        const module = "left" === exports ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        return exportstrinflag => Math.max(module.get(exports) || config, this._invalidationLevel)
      }
      priceScaleSideMaxLevel(exports) {
        const module = "left" === exports ? this._leftPriceScalesInvalidationMap : this._rightPriceScalesInvalidationMap;
        let require = this._invalidationLevel;
        return module.size > 0 && module.forEach((exportstrinflag => {
          exports > require && (require = exports)
        })), require
      }
      merge(exports) {
        this._invalidationLevel = Math.max(this._invalidationLevel, exports._invalidationLevel), this
          ._paneInvalidationLevel = Math.max(this._paneInvalidationLevel, exports._paneInvalidationLevel), exports
          ._leftPriceScalesInvalidationMap.forEach(((exports, module) => {
            const require = this._leftPriceScalesInvalidationMap.get(module) || config;
            this._leftPriceScalesInvalidationMap.set(module, Math.max(require, exports))
          })), exports._rightPriceScalesInvalidationMap.forEach(((exports, module) => {
            const require = this._rightPriceScalesInvalidationMap.get(module) || config;
            this._rightPriceScalesInvalidationMap.set(module, Math.max(require, exports))
          })), this._legendWidgetInvalidated = this._legendWidgetInvalidated || exports._legendWidgetInvalidated
      }
    }! function(exports) {
      exports[exports.None = 0] = "None", exports[exports.Cursor = 1] = "Cursor", exports[exports.Light = 2] = "Light", exports[exports.Full = 3] = "Full"
    }(constants || (constants = {}));
    const config = constants.None;
    var items;
    ! function(exports) {
      exports[exports.ScrollAnimation = 0] = "ScrollAnimation", exports[exports.StopAnimation = 1] = "StopAnimation"
    }(items || (items = {}));
    class length {
      constructor(exports = config) {
        this._panesOrderChanged = !1, this._keepVisibleTimeRangeOnResize = !1, this._timeScaleInvalidation = {
          level: config,
          animations: [],
          invalidateStubs: !1
        }, this._invalidatedPanes = new Map, this._additionalActions = [], this._invalidationLevel = exports
      }
      invalidateAll(exports) {
        this._invalidationLevel !== exports && (this._invalidationLevel = Math.max(this._invalidationLevel, exports), this
          ._invalidatedPanes.forEach((exportstrinflag => {
            exports.invalidateAll(this._invalidationLevel)
          })))
      }
      invalidateAllPane(exports, module) {
        this._invalidatedPanes.has(exports) || this._invalidatedPanes.set(exports, new name(this._invalidationLevel)), (0, result
          .ensureDefined)(this._invalidatedPanes.get(exports)).invalidateAll(module)
      }
      invalidatePriceScale(exports, module, require, constants) {
        this._invalidatedPanes.has(exports) || this._invalidatedPanes.set(exports, new name(this._invalidationLevel)), (0, result
          .ensureDefined)(this._invalidatedPanes.get(exports)).invalidatePriceScale(module, require, constants)
      }
      invalidateTimeScale(exports, module = !1) {
        this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, exports), this
          ._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation.invalidateStubs || module
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
        return this._invalidatedPanes.forEach((modulresulconfiflag => {
          exports.push(module.fullInvalidation())
        })), Math.max(...exports, this._invalidationLevel)
      }
      invalidationForPane(exports) {
        return this._invalidatedPanes.get(exports) || new name(this._invalidationLevel)
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
          ._invalidatedPanes.forEach((exportstrinflag => {
            exports.invalidateAll(this._invalidationLevel)
          })), exports._invalidatedPanes.forEach(((exports, module) => {
            this._invalidatedPanes.has(module) || this._invalidatedPanes.set(module, new name(this._invalidationLevel)), (0, result
              .ensureDefined)(this._invalidatedPanes.get(module)).merge(exports)
          })), this._timeScaleInvalidation.level = Math.max(this._timeScaleInvalidation.level, exports
            ._timeScaleInvalidation.level), this._timeScaleInvalidation.invalidateStubs = this._timeScaleInvalidation
          .invalidateStubs || exports._timeScaleInvalidation.invalidateStubs;
        for (let module = 0; module < exports._additionalActions.length; module++) this._additionalActions.push(exports._additionalActions[module]);
        for (const module of exports._timeScaleInvalidation.animations) this._applyTimeScaleAnimationInvalidation(module)
      }
      panesOrderInvalidated() {
        return this._panesOrderChanged
      }
      isVisibleTimeRangeLockedOnResize() {
        return this._keepVisibleTimeRangeOnResize
      }
      setTimeScaleAnimation(exports, module) {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 0,
          value: exports,
          rightOffsetPx: module
        }), this._invalidationLevel = Math.max(this._invalidationLevel, constants.Light)
      }
      stopTimeScaleAnimation() {
        this._removeTimeScaleAnimation(), this._timeScaleInvalidation.animations.push({
          type: 1
        }), this._invalidationLevel = Math.max(this._invalidationLevel, constants.Light)
      }
      static cursor() {
        return new length(constants.Cursor)
      }
      static light() {
        return new length(constants.Light)
      }
      static full() {
        return new length(constants.Full)
      }
      static timeScale(exports, module = !1) {
        const require = new length;
        return require.invalidateTimeScale(exports, module), require
      }
      static panesOrder() {
        const exports = length.full();
        return exports.invalidatePanesOrder(), exports
      }
      static invalidateLegendWidgetLayout(exports) {
        const module = new length;
        return module._invalidatedPanes.set(exports, new name), module._invalidatedPanes.get(exports)?.invalidateLegendWidgetLayout(), module
      }
      static validateAction(exports) {
        const module = new length;
        return module._additionalActions.push(exports), module
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
        const exports = this._timeScaleInvalidation.animations.findIndex((exportstrinflag => 0 === exports.type));
        if (-1 !== exports) {
          const [module] = this._timeScaleInvalidation.animations.splice(exports, 1);
          module.value.onFinish?.(!1)
        }
      }
    }