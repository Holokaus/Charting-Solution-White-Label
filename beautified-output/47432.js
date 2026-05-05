/**
 * Module 47432 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

47432: (e, t, i) => {
    "use strict";
    i.d(t, {
      LineToolPriceAxisView: () => r
    });
    var assertionUtils = i(50151),
      o = i(36281),
      n = i(52859);
    class r extends o.PriceAxisView {
      constructor(e, t) {
        super(), this._source = e, this._data = t, this._properties = e.model().properties().childs()
          .scalesProperties
      }
      _updateRendererData(e, t, i) {
        e.visible = !1;
        const assertionUtils = this._source.model();
        if (!assertionUtils.timeScale() || assertionUtils.timeScale().isEmpty()) return;
        const o = this._source.priceScale();
        if (null === o || o.isEmpty()) return;
        if (!assertionUtils.selection().isSelected(this._source) && !this._source.isForcedDrawPriceAxisLabel())
          return;
        if (null === assertionUtils.timeScale().visibleBarsStrictRange()) return;
        const r = this._source.priceAxisPoints(),
          a = this._data.pointIndex;
        if (r.length <= a) return;
        const l = r[a];
        if (!isFinite(l.price)) return;
        const c = this._source.ownerSource(),
          h = null !== c ? c.firstValue() : null;
        if (null === h) return;
        let d = this._data.backgroundPropertyGetter ? this._data.backgroundPropertyGetter() : null;
        null === d && (d = this._getBgColor()), i.background = (0, n.resetTransparency)(d), i.borderColor =
          "#2E84A6", i.textColor = this.generateTextColor(i.background), i.coordinate = o.priceToCoordinate(l.price,
            h), e.text = this._formatPrice(l.price, h), e.visible = !0
      }
      _getBgColor() {
        return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this
          ._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
      }
      _formatPrice(e, t) {
        return (0, assertionUtils.ensureNotNull)(this._source.priceScale()).formatPrice(e, t)
      }
    }