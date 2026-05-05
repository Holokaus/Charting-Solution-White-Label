/**
 * Module 95772 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95772: (e, t, i) => {
    "use strict";
    i.d(t, {
      translateSessionDescription: () => r,
      translateSessionShortDescription: () => l
    });
    var s, o = i(11542);
    ! function(e) {
      e.RegularTradingHours = "regular trading hours", e.ExtendedTradingHours = "extended trading hours", e
        .ElectronicTradingHours = "electronic trading hours", e.Premarket = "premarket", e.Postmarket = "postmarket"
    }(s || (s = {}));
    const n = new Map([
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

    function r(e) {
      return n.get(e.toLowerCase()) ?? e
    }
    const a = new Map([
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

    function l(e) {
      return a.get(e.toLowerCase()) ?? e
    }