/**
 * Module 23745 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23745: (e, t, i) => {
    "use strict";
    i.d(t, {
      shouldShowQuickSearchOnLib: () => r
    });
    var s = i(49483),
      o = i(84015),
      n = i(37103);

    function r() {
      return !s.CheckMobile.any() && !(0, o.isOnMobileAppPage)("any") && !n.enabled("widget") && n.enabled(
        "header_quick_search")
    }