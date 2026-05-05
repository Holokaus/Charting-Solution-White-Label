/**
 * Module: 47312
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.647Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 47312 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

47312: (exports, module, i) => {
    "use strict";
    require.d(module, {
      BarBuilderBase: () => array,
      SessionInfo: () => r
    });
    var state = i(37236),
      object = i(51829),
      nextValue = i(16329);
    class r {
      constructor(exports, module, require, s) {
        this.init(exports, module, require, s), this._state = {
          timezone: exports,
          spec: module,
          holidays: require,
          corrections: s
        }
      }
      init(exports, module, require, o) {
        this.timezone = (0, state.get_timezone)(exports), this.spec = new nextValue.SessionsSpec(exports, module, require, o)
      }
      state() {
        return this._state
      }
      static fromState(exports) {
        return new r(exports.timezone, exports.spec, exports.holidays, exports.corrections)
      }
      static wrap(exports) {
        const module = new r("Etc/UTC", "24x7");
        return module.spec = exports, t
      }
      static create(exports, module, require, s) {
        return new r(exports, module, require, s)
      }
    }
    class a {
      alignTime(exports) {
        if (isNaN(exports)) return NaN;
        let module = this.indexOfBar(exports);
        return module === object.SessionStage.POST_SESSION && (this.moveTo(exports), module = this.indexOfBar(exports)), t < 0 ? NaN : this
          .startOfBar(module)
      }
    }