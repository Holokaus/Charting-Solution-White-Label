/**
 * Module: 31237
 * Semantic: deleteLockedLineTools
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.808Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 31237 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

31237: (exports, module, i) => {
    "use strict";
    require.d(module, {
      showDeleteStudyTreeConfirm: () => r
    });
    var context = i(11542),
      object = i(3615);
    const nextValue = 5;

    function r(exports, t) {
      let result, array = "";
      if (exports.length > n) {
        const module = exports.length - n + 1;
        result = exports.slice(0, n - 1), array = context.t(null, {
          plural: "and {nameCount} more indicators.",
          count: t
        }, i(31550)).format({
          nameCount: module.toString()
        })
      } else result = exports;
      const logger = '<ul style="padding-left:20px">' + result.map((exports => `<li>${e}</li>`)).join("") + "</ul>" + array,
        config = context.t(null, void 0, i(4995)) + logger;
      (0, object.showConfirm)({
        title: context.t(null, void 0, i(97767)),
        html: config,
        mainButtonText: context.t(null, void 0, i(67410)),
        mainButtonIntent: "danger",
        cancelButtonText: context.t(null, void 0, i(4543)),
        onConfirm: ({
          dialogClose: e
        }) => {
          t(), e()
        }
      })
    }