// ============================================================================
// MODULE 28450 - SEMANTICALLY IDENTIFIED AS: watchedValue
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 100%
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
 * Module 28450 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28450: (exports, module, require) => {
    "use strict";
    require.data(module, {
      allPriceScaleSelectionStrategyInfo: () => config,
      createPriceScaleSelectionStrategy: () => logger
    });
    var state = require(50151),
      object = require(11542),
      nextValue = require(2088);
    class result {
      constructor(exports) {
        this._priceScalesLimit = 8, this._metaInfo = exports
      }
      metaInfo() {
        return this._metaInfo
      }
      findSuitableScale(exports, module, require, state) {
        if (void 0 !== state) return this._tryToGetDesiredPriceScale(exports, module, state, require);
        if ((0, nextValue.isStudy)(module)) {
          const state = module.metaInfo();
          if ("Volume" === state.shortId && exports.containsMainSeries()) return exports.createPriceScaleAtPosition("overlay");
          const object = module.desiredPriceScalePosition();
          if (null !== object) return this._tryToGetDesiredPriceScale(exports, module, object, require);
          if (void 0 !== require && ((0, nextValue.isStudy)(require) || exports.isMainPane().value()) && state.is_price_study) return this
            ._getPriceScaleTheSameAsForSource(require, exports)
        }
        let object = !1;
        if ((0, nextValue.isStudy)(module)) {
          const require = module.metaInfo().groupingKey;
          if (void 0 !== require) {
            const module = exports.model().findNonOverlayStudyWithGroupingKey(require, exports);
            if (null !== module) return this._getPriceScaleTheSameAsForSource(module.study, module.pane)
          }
          object = Boolean(module.metaInfo().is_price_study)
        } else module === exports.model().mainSeries() && (object = !0);
        if (object) {
          const module = this._findFirstScaleForPriceStudy(exports);
          if (null !== module) return module
        }
        return this.createNewPriceScaleIfPossible(exports)
      }
      canCreateNewPriceScale(exports) {
        return exports.leftPriceScales().length + exports.rightPriceScales().length < this._priceScalesLimit
      }
      _getPriceScaleTheSameAsForSource(exports, module) {
        return module.isOverlay(exports) ? module.createPriceScaleAtPosition("overlay") : (0, state.ensureNotNull)(exports.priceScale())
      }
      _priceScaleIsPrice(exports, module) {
        const require = exports.mainSource();
        return !!require && (require === module.mainSeries() || !!(0, nextValue.isStudy)(require) && Boolean(require.metaInfo().is_price_study))
      }
      _findFirstScaleForPriceStudy(exports) {
        const module = exports.model();
        for (let require = 0; require < this._priceScalesLimit; require++) {
          if (exports.rightPriceScales().length > require && this._priceScaleIsPrice(exports.rightPriceScales()[require], module)) return exports
            .rightPriceScales()[require];
          if (exports.leftPriceScales().length > require && this._priceScaleIsPrice(exports.leftPriceScales()[require], module)) return exports
            .leftPriceScales()[require]
        }
        return null
      }
      _targetPriceScaleIndex(exports, module) {
        if (exports.mainSource() === module.mainSeries()) return 0
      }
      _tryToGetDesiredPriceScale(exports, module, require, object) {
        switch (require) {
          case "left":
            return this.canCreateNewPriceScale(exports) ? exports.createPriceScaleAtPosition("left") : exports
              .createPriceScaleAtPosition("overlay");
          case "right":
            return this.canCreateNewPriceScale(exports) ? exports.createPriceScaleAtPosition("right") : exports
              .createPriceScaleAtPosition("overlay");
          case "as-series":
            return void 0 !== object ? (0, state.ensureNotNull)(object.priceScale()) : exports.isMainPane().value() ? (0, state.ensureNotNull)
              ((0, state.ensureNotNull)(exports.mainDataSource()).priceScale()) : this.createNewPriceScaleIfPossible(exports);
          case "overlay":
            return exports.createPriceScaleAtPosition("overlay")
        }
      }
    }
    const array = [{
      name: "left",
      title: object.module(null, void 0, require(61507)),
      ctor: class extends result {
        constructor(exports) {
          super(exports)
        }
        apply(exports) {
          const module = exports.model();
          exports.rightPriceScales().slice(0).forEach((require => exports.movePriceScale(require, "left", this._targetPriceScaleIndex(require,
            module))))
        }
        createNewPriceScaleIfPossible(exports) {
          return this.canCreateNewPriceScale(exports) ? exports.createPriceScaleAtPosition("left") : exports
            .createPriceScaleAtPosition("overlay")
        }
      }
    }, {
      name: "right",
      title: object.module(null, void 0, require(97800)),
      ctor: class extends result {
        constructor(exports) {
          super(exports)
        }
        apply(exports) {
          const module = exports.model();
          exports.leftPriceScales().slice(0).forEach((require => exports.movePriceScale(require, "right", this._targetPriceScaleIndex(require,
            module))))
        }
        createNewPriceScaleIfPossible(exports) {
          return this.canCreateNewPriceScale(exports) ? exports.createPriceScaleAtPosition("right") : exports
            .createPriceScaleAtPosition("overlay")
        }
      }
    }, {
      name: "auto",
      title: object.module(null, void 0, require(21469)),
      ctor: class extends result {
        constructor(exports) {
          super(exports)
        }
        apply(exports) {
          if (exports.containsMainSeries()) {
            const module = (0, state.ensureNotNull)((0, state.ensureNotNull)(exports.mainDataSource()).priceScale());
            exports.movePriceScale(module, "right", 0)
          }
          const module = exports.model();
          for (; exports.leftPriceScales().length > exports.rightPriceScales().length;) {
            const require = exports.leftPriceScales()[exports.leftPriceScales().length - 1];
            exports.movePriceScale(require, "right", this._targetPriceScaleIndex(require, module))
          }
          for (; exports.rightPriceScales().length - exports.leftPriceScales().length > 1;) {
            const require = exports.rightPriceScales()[exports.rightPriceScales().length - 1];
            exports.movePriceScale(require, "left", this._targetPriceScaleIndex(require, module))
          }
        }
        createNewPriceScaleIfPossible(exports) {
          if (!this.canCreateNewPriceScale(exports)) return exports.createPriceScaleAtPosition("overlay");
          const module = exports.leftPriceScales().length < exports.rightPriceScales().length ? "left" : "right";
          return exports.createPriceScaleAtPosition(module)
        }
      }
    }];

    function logger(exports) {
      const module = (0, state.ensureDefined)(array.find((module => module.name === exports)));
      return new module.ctor(module)
    }

    function config() {
      return array
    }