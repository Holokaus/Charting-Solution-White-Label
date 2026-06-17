export class RealtimeUpdater {
  constructor(barCache) {
    this._cache = barCache;
    this._barCompleted = null;
    this._barUpdated = null;
  }

  onBarCompleted(handler) {
    this._barCompleted = handler;
  }

  onBarUpdated(handler) {
    this._barUpdated = handler;
  }

  update(tick) {
    if (!tick || tick.time == null || tick.close == null) return;

    const last = this._cache.getLast();
    if (!last || tick.time > last.time) {
      const newBar = {
        time: tick.time,
        open: tick.close,
        high: tick.close,
        low: tick.close,
        close: tick.close,
        volume: tick.volume || 0
      };
      this._cache.add([newBar]);
      if (this._barCompleted) this._barCompleted(newBar);
    } else if (tick.time === last.time) {
      last.high = Math.max(last.high, tick.close);
      last.low = Math.min(last.low, tick.close);
      last.close = tick.close;
      if (tick.volume != null) last.volume = (last.volume || 0) + tick.volume;
      this._cache.update(last);
      if (this._barUpdated) this._barUpdated(last);
    }
  }

  updateBar(bar) {
    this._cache.update(bar);
    const updated = this._cache.getLast();
    if (updated && updated.time === bar.time) {
      if (this._barUpdated) this._barUpdated(updated);
    }
  }
}
