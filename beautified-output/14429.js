/**
 * Module 14429 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

14429: (e, t, i) => {
    "use strict";
    i.d(t, {
      ActionWithStandardIcon: () => n
    });
    var s = i(41706),
      o = i(84696);
    class n extends s.Action {
      constructor(e) {
        const {
          options: t,
          customActionOptions: i
        } = e;
        t.iconId && (t.icon = t.icon ?? o.icons.get(t.iconId)), i && i.iconId && (i.icon = i.icon ?? o.icons.get(i
          .iconId)), super(e)
      }
    }