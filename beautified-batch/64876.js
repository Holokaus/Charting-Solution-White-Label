/**
 * Module 64876 - Auto-beautified from TradingView webpack bundle
 *
 * @module 64876
 * @date 2026-04-23
 * @size 1463 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 10309, 11542, 32563, 36299, 40452, 41072, 58302
 *
 * Exports:
 *   - createVisibilityController (internal: d)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

64876: (e, t, i) => {
    "use strict";
    i.d(t, {
      createVisibilityController: () => d
    });
    var s, o = i(11542),
      n = i(32563),
      r = i(41072),
      a = i(1765);
    ! function(e) {
      e.AlwaysOn = "alwaysOn", e.VisibleOnMouseOver = "visibleOnMouseOver", e.AlwaysOff = "alwaysOff"
    }(s || (s = {}));
    const l = "visibleOnMouseOver";

    function c(e) {
      return "alwaysOn" === e || "alwaysOff" === e ? e : l
    }
    var h;

    function d(e, t) {
      let s, h;

      function d() {
        if (!s) {
          s = (0, r.createPrimitiveProperty)();
          let i = a.getValue(e);
          void 0 === i && void 0 !== t && (i = a.getValue(t)), s.setValue(c(i)), s.subscribe(s, (t => {
            a.setValue(e, c(t.value()))
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
            title: n.mobiletouch ? o.t(null, void 0, i(58302)) : o.t(null, void 0, i(10309))
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
            const e = d(),
              t = () => {
                const t = function(e) {
                  switch (e) {
                    case "alwaysOn":
                      return "alwaysOn";
                    case "alwaysOff":
                      return "alwaysOff";
                    case "visibleOnMouseOver":
                      return n.mobiletouch ? "visibleOnTapSelection" : "visibleOnMouseOver";
                    default:
                      throw new Error(`Unknown visibility type: ${e}`)
                  }
                }(e.value());
                h && h.setValue(t)
              };
            e.subscribe(h, t), t()
          }
          return h
        },
        restoreDefaultValue: function() {
          d().setValue(l), a.remove(e)
        }
      }
    }! function(e) {
      e.AlwaysOn = "alwaysOn", e.VisibleOnMouseOver = "visibleOnMouseOver", e.VisibleOnTapSelection = "visibleOnTapSelection", e.AlwaysOff = "alwaysOff"
    }(h || (h = {}))
