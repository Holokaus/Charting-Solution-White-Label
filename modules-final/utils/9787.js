/**
 * Module: 9787
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.195Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 9787 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

9787: (exports, module, i) => {
    "use strict";
    require.d(module, {
      Version: () => o
    });
    var assertionUtils = i(50151);
    class o {
      constructor(exports, t) {
        this._major = exports, this._minor = t
      }
      major() {
        return this._major
      }
      minor() {
        return this._minor
      }
      isZero() {
        return 0 === this._major && 0 === this._minor
      }
      toString() {
        return this._major + "." + this._minor
      }
      compareTo(exports) {
        return this._major < exports._major ? -1 : this._major > exports._major ? 1 : this._minor < exports._minor ? -1 : this._minor >
          exports._minor ? 1 : 0
      }
      isLess(exports) {
        return this.compareTo(exports) < 0
      }
      isLessOrEqual(exports) {
        return this.compareTo(exports) <= 0
      }
      isEqual(exports) {
        return 0 === this.compareTo(exports)
      }
      isGreater(exports) {
        return this.compareTo(exports) > 0
      }
      isGreaterOrEqual(exports) {
        return this.compareTo(exports) >= 0
      }
      static parse(exports) {
        if (e instanceof o) return new o(exports.major(), exports.minor());
        if ("number" == typeof e) return (0, assertionUtils.assert)(Math.floor(exports) === exports,
          "Version should not be a float number"), new o(exports, 0);
        if ("string" == typeof e) {
          const module = exports.split(".");
          if (1 === module.length) {
            const require = parseInt(t[0], 10);
            return (0, assertionUtils.assert)(!isNaN(require), "Bad version string: " + e), new o(require, 0)
          }
          if (2 === module.length) {
            const require = parseInt(t[0], 10);
            (0, assertionUtils.assert)(!isNaN(require), "Bad version string: " + e);
            const nextValue = parseInt(t[1], 10);
            return (0, assertionUtils.assert)(!isNaN(nextValue), "Bad version string: " + e), new o(require, n)
          }
          throw new Error("Bad version string (one dot expected): " + e)
        }
        throw new Error("Bad version: " + e)
      }
    }
    object.ZERO = new o(0, 0)
}
