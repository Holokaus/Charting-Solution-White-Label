/**
 * Module 64876 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64876: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      createVisibilityController: () => watchedValue_d
    });
    var watchedValue_s, watchedValue_o = watchedValue_i(11542),
      watchedValue_n = watchedValue_i(32563),
      watchedValue_r = watchedValue_i(41072),
      watchedValue_a = watchedValue_i(1765);
    ! function(watchedValue_e) {
      watchedValue_e.AlwaysOn = "alwaysOn", watchedValue_e.VisibleOnMouseOver = "visibleOnMouseOver", watchedValue_e.AlwaysOff = "alwaysOff"
    }(watchedValue_s || (watchedValue_s = {}));
    const watchedValue_l = "visibleOnMouseOver";

    function watchedValue_c(watchedValue_e) {
      return "alwaysOn" === watchedValue_e || "alwaysOff" === watchedValue_e ? watchedValue_e : watchedValue_l
    }
    var watchedValue_h;

    function watchedValue_d(watchedValue_e, watchedValue_t) {
      let watchedValue_s, watchedValue_h;

      function watchedValue_d() {
        if (!watchedValue_s) {
          watchedValue_s = (0, watchedValue_r.createPrimitiveProperty)();
          let watchedValue_i = watchedValue_a.getValue(watchedValue_e);
          void 0 === watchedValue_i && void 0 !== watchedValue_t && (watchedValue_i = watchedValue_a.getValue(watchedValue_t)), watchedValue_s.setValue(watchedValue_c(watchedValue_i)), watchedValue_s.subscribe(watchedValue_s, (watchedValue_t => {
            watchedValue_a.setValue(watchedValue_e, watchedValue_c(watchedValue_t.value()))
          }))
        }
        return watchedValue_s
      }
      return {
        property: watchedValue_d,
        availableValues: function() {
          return [{
            id: "visibleOnMouseOver",
            value: "visibleOnMouseOver",
            title: watchedValue_n.mobiletouch ? watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(58302)) : watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(10309))
          }, {
            id: "alwaysOn",
            value: "alwaysOn",
            title: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(36299))
          }, {
            id: "alwaysOff",
            value: "alwaysOff",
            title: watchedValue_o.watchedValue_t(null, void 0, watchedValue_i(40452))
          }]
        },
        actualBehavior: function() {
          if (!watchedValue_h) {
            watchedValue_h = (0, watchedValue_r.createPrimitiveProperty)();
            const watchedValue_e = watchedValue_d(),
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
                watchedValue_h && watchedValue_h.setValue(watchedValue_t)
              };
            watchedValue_e.subscribe(watchedValue_h, watchedValue_t), watchedValue_t()
          }
          return watchedValue_h
        },
        restoreDefaultValue: function() {
          watchedValue_d().setValue(watchedValue_l), watchedValue_a.remove(watchedValue_e)
        }
      }
    }! function(watchedValue_e) {
      watchedValue_e.AlwaysOn = "alwaysOn", watchedValue_e.VisibleOnMouseOver = "visibleOnMouseOver", watchedValue_e.VisibleOnTapSelection =
        "visibleOnTapSelection", watchedValue_e.AlwaysOff = "alwaysOff"
    }(watchedValue_h || (watchedValue_h = {}))