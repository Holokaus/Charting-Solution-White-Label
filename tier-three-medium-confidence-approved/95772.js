/**
 * Module: 95772
 * Semantic: watchedValue
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.193Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 95772 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95772: (exports, t, i) => {
    "use strict";
    i.d(t, {
      translateSessionDescription: () => r,
      translateSessionShortDescription: () => l
    });
    var state, o = i(11542);
    ! function(exports) {
      exports.RegularTradingHours = "regular trading hours", exports.ExtendedTradingHours = "extended trading hours", e
        .ElectronicTradingHours = "electronic trading hours", exports.Premarket = "premarket", exports.Postmarket = "postmarket"
    }(s || (state = {}));
    const nextValue = new Map([
      ["premarket", o.t(null, {
        context: "sessions"
      }, i(59330))],
      ["postmarket", o.t(null, {
        context: "sessions"
      }, i(50434))],
      ["regular trading hours", o.t(null, {
        context: "sessions"
      }, i(84246))],
      ["extended trading hours", o.t(null, {
        context: "sessions"
      }, i(36862))],
      ["electronic trading hours", o.t(null, {
        context: "sessions"
      }, i(34647))]
    ]);

    function r(exports) {
      return nextValue.get(exports.toLowerCase()) ?? e
    }
    const array = new Map([
      ["premarket", o.t(null, {
        context: "sessions"
      }, i(46273))],
      ["postmarket", o.t(null, {
        context: "sessions"
      }, i(7807))],
      ["regular trading hours", o.t(null, {
        context: "sessions"
      }, i(92158))],
      ["extended trading hours", o.t(null, {
        context: "sessions"
      }, i(8029))],
      ["electronic trading hours", o.t(null, {
        context: "sessions"
      }, i(8029))]
    ]);

    function l(exports) {
      return array.get(exports.toLowerCase()) ?? e
    }