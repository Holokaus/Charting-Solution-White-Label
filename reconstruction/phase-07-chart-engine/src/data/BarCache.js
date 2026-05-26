export class BarCache {
  constructor() {
    this._bars = [];
    this._paginationToken = null;
    this._hasMoreHistory = false;
  }

  add(bars) {
    if (!bars || bars.length === 0) return;
    for (const bar of bars) {
      const existing = this._bars.find(b => b.time === bar.time);
      if (existing) {
        Object.assign(existing, bar);
      } else {
        this._bars.push(bar);
      }
    }
    this._sort();
  }

  update(bar) {
    if (!bar) return;
    const last = this._bars[this._bars.length - 1];
    if (last && bar.time === last.time) {
      Object.assign(last, bar);
    } else {
      this._bars.push(bar);
      this._sort();
    }
  }

  getRange(from, to) {
    return this._bars.filter(b => b.time >= from && b.time <= to);
  }

  getLast() {
    return this._bars.length > 0 ? this._bars[this._bars.length - 1] : null;
  }

  getFirst() {
    return this._bars.length > 0 ? this._bars[0] : null;
  }

  getAll() {
    return [...this._bars];
  }

  count() {
    return this._bars.length;
  }

  clear() {
    this._bars = [];
    this._paginationToken = null;
    this._hasMoreHistory = false;
  }

  setPaginationToken(token) {
    this._paginationToken = token;
    this._hasMoreHistory = token !== null;
  }

  getPaginationToken() {
    return this._paginationToken;
  }

  hasMore() {
    return this._hasMoreHistory;
  }

  _sort() {
    this._bars.sort((a, b) => a.time - b.time);
  }
}
