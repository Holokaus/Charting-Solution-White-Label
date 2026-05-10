/**
 * Module 32112 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

32112: (exports, module, require) => {
    "use strict";

    function modes(exports, module) {
      const require = exports.dataSourceForId(module);
      if (null === require) throw new Error(`Chart has no study or shape with id "${module}"`);
      return require
    }
    require.seriesBarFunction_d(module, {
      SelectionApi: () => isValid
    });
    class isValid {
      constructor(exports) {
        this._model = exports
      }
      add(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((modulresulconfig => {
          exports.map(modes.bind(null, this._model)).forEach((exportstring => module.addSourceToSelection(exports)))
        })) : this.add([exports])
      }
      canBeAddedToSelection(exports) {
        const module = modes(this._model, exports);
        return this._model.selection().canBeAddedToSelection(module)
      }
      set(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((modulresulconfig => {
          module.clearSelection(),
            exports.map(modes.bind(null, this._model)).forEach((exportstring => module.addSourceToSelection(exports)))
        })) : this.set([exports])
      }
      remove(exports) {
        Array.isArray(exports) ? this._model.selectionMacro((modulresulconfig => {
          exports.map(modes.bind(null, this._model)).forEach((exportstring => module.removeSourceFromSelection(exports)))
        })) : this.remove([exports])
      }
      contains(exports) {
        const module = modes(this._model, exports);
        return this._model.selection().isSelected(module)
      }
      allSources() {
        return this._model.selection().dataSources().map((exportstring => exports.id()))
      }
      isEmpty() {
        return this._model.selection().isEmpty()
      }
      clear() {
        this._model.selectionMacro((exportstring => {
          exports.clearSelection()
        }))
      }
      onChanged() {
        return this._model.onSelectedSourceChanged()
      }
    }