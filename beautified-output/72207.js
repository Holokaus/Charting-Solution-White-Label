/**
 * Module 72207 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72207: (e, t, i) => {
    "use strict";
    i.d(t, {
      DataSource: () => d,
      getTranslatedStringForSource: () => c,
      toInputDisplayFlags: () => h
    });
    var s = i(95804),
      o = i(36313),
      n = i(4226),
      r = i(48096),
      a = i(22613),
      l = i(69422);

    function c(e, t) {
      return new s.TranslatedString(t.name(), t.title(e))
    }

    function h(e) {
      switch (e) {
        case o.TitleDisplayTarget.DataWindow:
          return l.InputDisplayFlags.DataWindow;
        case o.TitleDisplayTarget.StatusLine:
        case o.TitleDisplayTarget.Alerts:
          return l.InputDisplayFlags.StatusLine
      }
    }
    class d {
      constructor(e) {
        this.isSeries = !1, this._isDestroyed = !1, this._hasAlert = new a.WatchedValue(!1), this._alertStatus = new a
          .WatchedValue(0), this._alertCreationAvailable = new a.WatchedValue(!1), this._zorder = 0, this
          ._priceScale = null, this._ownerSource = null, this._userEditEnabled = !0, this._priceScaleChanged = new r
          .Delegate, this._isSelectionEnabled = !0, this._instanceId = (0, n.randomHashN)(6), this
          ._ownerSourceChanged = new r.Delegate, this._zOrderChanged = new r.Delegate, this._id = new a.WatchedValue(
            e ?? (0, n.randomHashN)(6))
      }
      destroy() {
        this._isDestroyed = !0
      }
      id() {
        return this._id.value()
      }
      idWV() {
        return this._id.readonly()
      }
      instanceId() {
        return this._instanceId
      }
      preferNoScale() {
        return !1
      }
      setId(e) {
        this._id.setValue(e)
      }
      zorder() {
        return this._zorder
      }
      setZorder(e) {
        "number" == typeof e && this._zorder !== e && (this._zorder = e, this._zOrderChanged.fire(e))
      }
      preferredZOrder() {
        return null
      }
      isSpeciallyZOrderedSource() {
        return !1
      }
      title(e) {
        return this.name()
      }
      priceScale() {
        return this._priceScale
      }
      hasPriceScale() {
        return null !== this._priceScale
      }
      setPriceScale(e) {
        this._priceScale !== e && (this._priceScale = e, this._priceScaleChanged.fire(e))
      }
      priceScaleChanged() {
        return this._priceScaleChanged
      }
      ownerSource() {
        return this._ownerSource
      }
      setOwnerSource(e) {
        const t = this._ownerSource;
        this._ownerSource = e, this._ownerSourceChanged.fire(t, e)
      }
      ownerSourceChanged() {
        return this._ownerSourceChanged
      }
      zOrderChanged() {
        return this._zOrderChanged
      }
      isSavedInChart(e) {
        return !0
      }
      isSavedInStudyTemplates() {
        return !0
      }
      isRemovedByStudyTemplates() {
        return !0
      }
      hasContextMenu() {
        return !0
      }
      showInObjectTree() {
        return !0
      }
      setUserEditEnabled(e) {
        this._userEditEnabled = e
      }
      userEditEnabled() {
        return this._userEditEnabled
      }
      canBeHidden() {
        return this.userEditEnabled()
      }
      isUserDeletable() {
        return this.userEditEnabled()
      }
      properties() {
        return null
      }
      propertyByPath(e) {
        const t = e.split(".");
        if (t.length < 1) throw new Error("Invalid path");
        const i = t[0];
        if ("properties" === i) {
          const e = this.properties();
          return 1 === t.length ? e : e.childByPath(t.slice(1).join("."))
        }
        throw new Error(`Unknown property root: ${i}`)
      }
      isVisible() {
        return this.properties().visible.value()
      }
      dataWindowView() {
        return null
      }
      priceAxisViews(e, t) {
        return null
      }
      timeAxisViews() {
        return null
      }
      updateAllViews(e) {}
      paneViews(e) {
        return null
      }
      labelPaneViews(e) {
        return null
      }
      isFailed() {
        return !1
      }
      isLoading() {
        return !1
      }
      isPhantom() {
        return !1
      }
      isChildStudy() {
        return !1
      }
      hasChildren() {
        return !1
      }
      canHaveChildren() {
        return !1
      }
      onClickOutside(e, t) {}
      getSourceIcon() {
        return null
      }
      state(e) {
        return null
      }
      doesMovingAffectsUndo() {
        return !0
      }
      isMultiPaneAvailable() {
        return !1
      }
      isMultiPaneEnabled() {
        return !1
      }
      copiable() {
        return !1
      }
      cloneable() {
        return !1
      }
      movable() {
        return !1
      }
      allowsMovingBetweenPanes() {
        return !0
      }
      isIncludedInAutoScale() {
        return !1
      }
      isHoveredEnabled() {
        return this.isSelectionEnabled()
      }
      showOnTopOnHovering() {
        return !0
      }
      isSelectionEnabled() {
        return this._isSelectionEnabled
      }
      setSelectionEnabled(e) {
        this._isSelectionEnabled = e
      }
      firstValue() {
        return null
      }
      priceRange(e, t, i) {
        return null
      }
      autoScaleInfo(e, t, i) {
        return {
          range: this.priceRange(e, t, i)
        }
      }
      stateForAlert() {
        return null
      }
      async stateForAlertAsync() {
        return this.stateForAlert()
      }
      canHasAlert() {
        return !1
      }
      canHasAlertOnLineTools() {
        return !1
      }
      hasAlert() {
        return this._hasAlert.readonly()
      }
      alertCreationAvailable() {
        return this._alertCreationAvailable.readonly()
      }
      hasStateForAlert() {
        return !1
      }
      idForAlert() {
        return this._id.value()
      }
      alertStatus() {
        return this._alertStatus.readonly()
      }
      _getAlertCreationAvailable() {
        return !1
      }
      _updateAlertCreationAvailable() {
        0
      }
    }