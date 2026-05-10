/**
 * Module: 14429
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.268Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 14429 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

14429: (exports, t, i) => {
    "use strict";
    i.d(t, {
      ActionWithStandardIcon: () => n
    });
    var series = i(41706),
      o = i(84696);
    class n extends series.Action {
      constructor(exports) {
        const {
          options: t,
          customActionOptions: i
        } = exports;
        t.iconId && (t.icon = t.icon ?? o.icons.get(t.iconId)), i && i.iconId && (i.icon = i.icon ?? o.icons.get(i
          .iconId)), super(exports)
      }
    }