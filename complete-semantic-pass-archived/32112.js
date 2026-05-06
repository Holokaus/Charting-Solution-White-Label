/**
 * Module 32112 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32112: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";

    function seriesBarFunction_s(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = seriesBarFunction_e.dataSourceForId(seriesBarFunction_t);
      if (null === seriesBarFunction_i) throw new Error(`Chart has no study or shape with id "${seriesBarFunction_t}"`);
      return seriesBarFunction_i
    }
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      SelectionApi: () => seriesBarFunction_o
    });
    class seriesBarFunction_o {
      constructor(seriesBarFunction_e) {
        this._model = seriesBarFunction_e
      }
      add(seriesBarFunction_e) {
        Array.isArray(seriesBarFunction_e) ? this._model.selectionMacro((seriesBarFunction_t => {
          seriesBarFunction_e.map(seriesBarFunction_s.bind(null, this._model)).forEach((seriesBarFunction_e => seriesBarFunction_t.addSourceToSelection(seriesBarFunction_e)))
        })) : this.add([seriesBarFunction_e])
      }
      canBeAddedToSelection(seriesBarFunction_e) {
        const seriesBarFunction_t = seriesBarFunction_s(this._model, seriesBarFunction_e);
        return this._model.selection().canBeAddedToSelection(seriesBarFunction_t)
      }
      set(seriesBarFunction_e) {
        Array.isArray(seriesBarFunction_e) ? this._model.selectionMacro((seriesBarFunction_t => {
          seriesBarFunction_t.clearSelection(),
            seriesBarFunction_e.map(seriesBarFunction_s.bind(null, this._model)).forEach((seriesBarFunction_e => seriesBarFunction_t.addSourceToSelection(seriesBarFunction_e)))
        })) : this.set([seriesBarFunction_e])
      }
      remove(seriesBarFunction_e) {
        Array.isArray(seriesBarFunction_e) ? this._model.selectionMacro((seriesBarFunction_t => {
          seriesBarFunction_e.map(seriesBarFunction_s.bind(null, this._model)).forEach((seriesBarFunction_e => seriesBarFunction_t.removeSourceFromSelection(seriesBarFunction_e)))
        })) : this.remove([seriesBarFunction_e])
      }
      contains(seriesBarFunction_e) {
        const seriesBarFunction_t = seriesBarFunction_s(this._model, seriesBarFunction_e);
        return this._model.selection().isSelected(seriesBarFunction_t)
      }
      allSources() {
        return this._model.selection().dataSources().map((seriesBarFunction_e => seriesBarFunction_e.id()))
      }
      isEmpty() {
        return this._model.selection().isEmpty()
      }
      clear() {
        this._model.selectionMacro((seriesBarFunction_e => {
          seriesBarFunction_e.clearSelection()
        }))
      }
      onChanged() {
        return this._model.onSelectedSourceChanged()
      }
    }