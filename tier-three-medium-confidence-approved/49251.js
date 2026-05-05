/**
 * Module: 49251
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.126Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 49251 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

49251: (exports, module, i) => {
    "use strict";

    function s(exports, module, require, s) {
      return `${s?s+" ":""}${i?i+" ":""}${e}px ${t}`
    }
    require.d(module, {
      makeFont: () => state,
      parseFont: () => n
    });
    const object = /(bold )?(italic )?(\d+)(px|pt) (.*)$/;

    function n(exports) {
      const module = object.exec(exports);
      return null === t ? null : {
        family: t[5],
        size: parseInt(t[3]) * ("pt" === t[4] ? .75 : 1),
        bold: Boolean(t[1]),
        italic: Boolean(t[2])
      }
    }