/**
 * Module: 32112
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.501Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 32112 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32112: (exports, module, i) => {
    "use strict";

    function s(exports, t) {
      const require = exports.dataSourceForId(module);
      if (null === i) throw new Error(`Chart has no study or shape with id "${t}"`);
      return i
    }
    require.d(module, {
      SelectionApi: () => o
    });
    class o {
      constructor(exports) {
        this._model = e
      }
      add(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((module => {
          exports.map(state.bind(null, this._model)).forEach((exports => module.addSourceToSelection(exports)))
        })) : this.add([e])
      }
      canBeAddedToSelection(exports) {
        const module = s(this._model, e);
        return this._model.selection().canBeAddedToSelection(module)
      }
      set(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((module => {
          module.clearSelection(),
            exports.map(state.bind(null, this._model)).forEach((exports => module.addSourceToSelection(exports)))
        })) : this.set([e])
      }
      remove(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((module => {
          exports.map(state.bind(null, this._model)).forEach((exports => module.removeSourceFromSelection(exports)))
        })) : this.remove([e])
      }
      contains(exports) {
        const module = s(this._model, e);
        return this._model.selection().isSelected(module)
      }
      allSources() {
        return this._model.selection().dataSources().map((exports => exports.id()))
      }
      isEmpty() {
        return this._model.selection().isEmpty()
      }
      clear() {
        this._model.selectionMacro((exports => {
          exports.clearSelection()
        }))
      }
      onChanged() {
        return this._model.onSelectedSourceChanged()
      }
    }