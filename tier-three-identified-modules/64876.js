/**
 * Module: 64876
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.857Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 64876 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64876: (exports, t, i) => {
    "use strict";
    i.d(t, {
      createVisibilityController: () => d
    });
    var series, o = i(11542),
      newSeries = i(32563),
      r = i(41072),
      a = i(1765);
    ! function(exports) {
      exports.AlwaysOn = "alwaysOn", exports.VisibleOnMouseOver = "visibleOnMouseOver", exports.AlwaysOff = "alwaysOff"
    }(s || (series = {}));
    const l = "visibleOnMouseOver";

    function c(exports) {
      return "alwaysOn" === e || "alwaysOff" === e ? e : l
    }
    var h;

    function d(exports, t) {
      let series, h;

      function d() {
        if (!s) {
          series = (0, r.createPrimitiveProperty)();
          let i = a.getValue(exports);
          void 0 === i && void 0 !== t && (i = a.getValue(t)), series.setValue(c(i)), series.subscribe(series, (t => {
            a.setValue(exports, c(t.value()))
          }))
        }
        return s
      }
      return {
        property: d,
        availableValues: function() {
          return [{
            id: "visibleOnMouseOver",
            value: "visibleOnMouseOver",
            title: newSeries.mobiletouch ? o.t(null, void 0, i(58302)) : o.t(null, void 0, i(10309))
          }, {
            id: "alwaysOn",
            value: "alwaysOn",
            title: o.t(null, void 0, i(36299))
          }, {
            id: "alwaysOff",
            value: "alwaysOff",
            title: o.t(null, void 0, i(40452))
          }]
        },
        actualBehavior: function() {
          if (!h) {
            h = (0, r.createPrimitiveProperty)();
            const exports = d(),
              t = () => {
                const t = function(exports) {
                  switch (exports) {
                    case "alwaysOn":
                      return "alwaysOn";
                    case "alwaysOff":
                      return "alwaysOff";
                    case "visibleOnMouseOver":
                      return newSeries.mobiletouch ? "visibleOnTapSelection" : "visibleOnMouseOver";
                    default:
                      throw new Error(`Unknown visibility type: ${e}`)
                  }
                }(exports.value());
                h && h.setValue(t)
              };
            exports.subscribe(h, t), t()
          }
          return h
        },
        restoreDefaultValue: function() {
          d().setValue(l), a.remove(exports)
        }
      }
    }! function(exports) {
      exports.AlwaysOn = "alwaysOn", exports.VisibleOnMouseOver = "visibleOnMouseOver", exports.VisibleOnTapSelection =
        "visibleOnTapSelection", exports.AlwaysOff = "alwaysOff"
    }(h || (h = {}))