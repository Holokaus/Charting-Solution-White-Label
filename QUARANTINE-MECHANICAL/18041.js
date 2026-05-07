/**
 * Module 18041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

18041: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_d(series_t, {
      getStudyTemplateDescString: () => series_r,
      getStudyTemplateMetaInfo: () => series_o,
      getStudyTemplateSaveData: () => series_n
    });
    var series_s = series_i(36313);

    function series_o(series_e, series_t) {
      return {
        indicators: series_e.allStudies(!0).map((series_e => ({
          id: series_e.metaInfo().id,
          description: series_e.title(series_s.TitleDisplayTarget.StatusLine, !0, void 0, !0)
        }))),
        interval: series_t
      }
    }

    function series_n(series_e, series_t, series_i, series_s) {
      const series_n = series_t.studyTemplate(series_i, series_s);
      return {
        name: series_e,
        content: JSON.stringify(series_n),
        meta_info: series_o(series_t, series_n.interval)
      }
    }

    function series_r(series_e) {
      const series_t = new Map;
      return series_e.forEach((series_e => {
          const [series_i, series_s] = series_t.get(series_e.id) || [series_e.description, 0];
          series_t.set(series_e.id, [series_i, series_s + 1])
        })),
        Array.from(series_t.values()).map((([series_e, series_t]) => `${series_e}${series_t>1?` series_x ${series_t}`:""}`)).join(", ")
    }