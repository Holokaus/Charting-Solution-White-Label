export class VirtualScroll {
  constructor(options = {}) {
    this.totalItems = options.totalItems || 0;
    this.itemHeight = options.itemHeight || 20;
    this.overscan = options.overscan || 5;
    this.viewportHeight = options.viewportHeight || 600;
    this._scrollTop = 0;
    this._onChange = options.onChange || null;
  }

  setTotalItems(n) {
    this.totalItems = n;
    this._notify();
  }

  setViewportHeight(h) {
    this.viewportHeight = h;
    this._notify();
  }

  scrollTo(position) {
    this._scrollTop = Math.max(0, Math.min(position, this.getMaxScroll()));
    this._notify();
  }

  getScrollTop() { return this._scrollTop; }

  getMaxScroll() {
    return Math.max(0, this.totalItems * this.itemHeight - this.viewportHeight);
  }

  getVisibleRange() {
    const startIdx = Math.max(0, Math.floor(this._scrollTop / this.itemHeight) - this.overscan);
    const endIdx = Math.min(this.totalItems, Math.ceil((this._scrollTop + this.viewportHeight) / this.itemHeight) + this.overscan);
    return { start: startIdx, end: endIdx };
  }

  getVisibleItems(data) {
    const range = this.getVisibleRange();
    return (data || []).slice(range.start, range.end);
  }

  getOffset() {
    const range = this.getVisibleRange();
    return range.start * this.itemHeight;
  }

  _notify() {
    if (this._onChange) this._onChange(this.getVisibleRange());
  }

  destroy() {
    this._onChange = null;
  }
}
