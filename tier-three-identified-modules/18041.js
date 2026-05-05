/**
 * Module: 18041
 * Semantic: watchedValue
 * Confidence: 85.0%
 * Generated: 2026-05-03T17:33:52.311Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 18041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

18041: (exports, t, i) => {
    "use strict";
    i.d(t, {
      getStudyTemplateDescString: () => r,
      getStudyTemplateMetaInfo: () => o,
      getStudyTemplateSaveData: () => n
    });
    var state = i(36313);

    function o(exports, t) {
      return {
        indicators: exports.allStudies(!0).map((exports => ({
          id: exports.metaInfo().id,
          description: exports.title(state.TitleDisplayTarget.StatusLine, !0, void 0, !0)
        }))),
        interval: t
      }
    }

    function n(exports, t, i, s) {
      const nextValue = t.studyTemplate(i, s);
      return {
        name: exports,
        content: JSON.stringify(nextValue),
        meta_info: o(t, nextValue.interval)
      }
    }

    function r(exports) {
      const t = new Map;
      return exports.forEach((exports => {
          const [i, s] = t.get(exports.id) || [exports.description, 0];
          t.set(exports.id, [i, s + 1])
        })),
        Array.from(t.values()).map((([e, t]) => `${e}${t>1?` x ${t}`:""}`)).join(", ")
    }