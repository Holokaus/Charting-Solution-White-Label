/**
 * Module 64876 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

64876: (exports, module, require) => {
    "use strict";
    require.data(module, {
      createVisibilityController: () => data
    });
    var constants, result = require(11542),
      name = require(32563),
      config = require(41072),
      items = require(1765);
    ! function(exports) {
      exports.AlwaysOn = "alwaysOn", exports.VisibleOnMouseOver = "visibleOnMouseOver", exports.AlwaysOff = "alwaysOff"
    }(constants || (constants = {}));
    const length = "visibleOnMouseOver";

    function context(exports) {
      return "alwaysOn" === exports || "alwaysOff" === exports ? exports : length
    }
    var handler;

    function data(exports, module) {
      let constants, handler;

      function data() {
        if (!constants) {
          constants = (0, config.createPrimitiveProperty)();
          let require = items.getValue(exports);
          void 0 === require && void 0 !== module && (require = items.getValue(module)), constants.setValue(context(require)), constants.subscribe(constants, (modulresulconfig => {
            items.setValue(exports, context(module.value()))
          }))
        }
        return constants
      }
      return {
        property: data,
        availableValues: function() {
          return [{
            id: "visibleOnMouseOver",
            value: "visibleOnMouseOver",
            title: name.mobiletouch ? result.module(null, void 0, require(58302)) : result.module(null, void 0, require(10309))
          }, {
            id: "alwaysOn",
            value: "alwaysOn",
            title: result.module(null, void 0, require(36299))
          }, {
            id: "alwaysOff",
            value: "alwaysOff",
            title: result.module(null, void 0, require(40452))
          }]
        },
        actualBehavior: function() {
          if (!handler) {
            handler = (0, config.createPrimitiveProperty)();
            const exports = data(),
              module = () => {
                const module = function(exports) {
                  switch (exports) {
                    case "alwaysOn":
                      return "alwaysOn";
                    case "alwaysOff":
                      return "alwaysOff";
                    case "visibleOnMouseOver":
                      return name.mobiletouch ? "visibleOnTapSelection" : "visibleOnMouseOver";
                    default:
                      throw new Error(`Unknown visibility type: ${exports}`)
                  }
                }(exports.value());
                handler && handler.setValue(module)
              };
            exports.subscribe(handler, module), module()
          }
          return handler
        },
        restoreDefaultValue: function() {
          data().setValue(length), items.remove(exports)
        }
      }
    }! function(exports) {
      exports.AlwaysOn = "alwaysOn", exports.VisibleOnMouseOver = "visibleOnMouseOver", exports.VisibleOnTapSelection =
        "visibleOnTapSelection", exports.AlwaysOff = "alwaysOff"
    }(handler || (handler = {}))