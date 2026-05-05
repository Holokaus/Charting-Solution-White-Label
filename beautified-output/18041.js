/**
 * Module 18041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

18041: (e, t, i) => {
    "use strict";
    i.d(t, {
      getStudyTemplateDescString: () => r,
      getStudyTemplateMetaInfo: () => o,
      getStudyTemplateSaveData: () => n
    });
    var s = i(36313);

    function o(e, t) {
      return {
        indicators: e.allStudies(!0).map((e => ({
          id: e.metaInfo().id,
          description: e.title(s.TitleDisplayTarget.StatusLine, !0, void 0, !0)
        }))),
        interval: t
      }
    }

    function n(e, t, i, s) {
      const n = t.studyTemplate(i, s);
      return {
        name: e,
        content: JSON.stringify(n),
        meta_info: o(t, n.interval)
      }
    }

    function r(e) {
      const t = new Map;
      return e.forEach((e => {
          const [i, s] = t.get(e.id) || [e.description, 0];
          t.set(e.id, [i, s + 1])
        })),
        Array.from(t.values()).map((([e, t]) => `${e}${t>1?` x ${t}`:""}`)).join(", ")
    }