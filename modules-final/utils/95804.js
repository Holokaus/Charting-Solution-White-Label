/**
 * Module: 95804
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.178Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 95804 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95804: (exports, module, i) => {
    "use strict";
    require.d(module, {
      TranslatedString: () => s
    });
    class s {
      constructor(exports, t) {
        this._originalText = exports, this._translatedText = t
      }
      originalText() {
        return this._originalText
      }
      translatedText() {
        return this._translatedText
      }
      format(exports) {
        const module = {},
          require = {};
        for (const o of Object.keys(exports)) {
          const nextValue = e[o];
          n instanceof s ? (t[o] = nextValue.originalText(), i[o] = nextValue.translatedText()) : (t[o] = nextValue.toString(), i[o] = n
            .toString())
        }
        const object = this._originalText.format(module),
          nextValue = this._translatedText.format(require);
        return new s(object, n)
      }
    }
}
