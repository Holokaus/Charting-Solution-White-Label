/**
 * Module 64876 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64876: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      createVisibilityController: () => d
    });
    var watchedValue_s, o = i(11542),
      watchedValue_n = i(32563),
      r = i(41072),
      watchedValue_a = i(1765);
    ! function(watchedValue_e) {
      watchedValue_e.AlwaysOn = "alwaysOn", watchedValue_e.VisibleOnMouseOver = "visibleOnMouseOver", watchedValue_e.AlwaysOff = "alwaysOff"
    }(watchedValue_s || (watchedValue_s = {}));
    const l = "visibleOnMouseOver";

    function c(watchedValue_e) {
      return "alwaysOn" === watchedValue_e || "alwaysOff" === watchedValue_e ? watchedValue_e : l
    }
    var h;

    function d(watchedValue_e, watchedValue_t) {
      let watchedValue_s, h;

      function d() {
        if (!watchedValue_s) {
          watchedValue_s = (0, r.createPrimitiveProperty)();
          let i = watchedValue_a.getValue(watchedValue_e);
          void 0 === i && void 0 !== watchedValue_t && (i = watchedValue_a.getValue(watchedValue_t)), watchedValue_s.setValue(c(i)), watchedValue_s.subscribe(watchedValue_s, (watchedValue_t => {
            watchedValue_a.setValue(watchedValue_e, c(watchedValue_t.value()))
          }))
        }
        return watchedValue_s
      }
      return {
        property: d,
        availableValues: function() {
          return [{
            id: "visibleOnMouseOver",
            value: "visibleOnMouseOver",
            title: watchedValue_n.mobiletouch ? o.watchedValue_t(null, void 0, i(58302)) : o.watchedValue_t(null, void 0, i(10309))
          }, {
            id: "alwaysOn",
            value: "alwaysOn",
            title: o.watchedValue_t(null, void 0, i(36299))
          }, {
            id: "alwaysOff",
            value: "alwaysOff",
            title: o.watchedValue_t(null, void 0, i(40452))
          }]
        },
        actualBehavior: function() {
          if (!h) {
            h = (0, r.createPrimitiveProperty)();
            const watchedValue_e = d(),
              watchedValue_t = () => {
                const watchedValue_t = function(watchedValue_e) {
                  switch (watchedValue_e) {
                    case "alwaysOn":
                      return "alwaysOn";
                    case "alwaysOff":
                      return "alwaysOff";
                    case "visibleOnMouseOver":
                      return watchedValue_n.mobiletouch ? "visibleOnTapSelection" : "visibleOnMouseOver";
                    default:
                      throw new Error(`Unknown visibility type: ${watchedValue_e}`)
                  }
                }(watchedValue_e.value());
                h && h.setValue(watchedValue_t)
              };
            watchedValue_e.subscribe(h, watchedValue_t), watchedValue_t()
          }
          return h
        },
        restoreDefaultValue: function() {
          d().setValue(l), watchedValue_a.remove(watchedValue_e)
        }
      }
    }! function(watchedValue_e) {
      watchedValue_e.AlwaysOn = "alwaysOn", watchedValue_e.VisibleOnMouseOver = "visibleOnMouseOver", watchedValue_e.VisibleOnTapSelection =
        "visibleOnTapSelection", watchedValue_e.AlwaysOff = "alwaysOff"
    }(h || (h = {}))