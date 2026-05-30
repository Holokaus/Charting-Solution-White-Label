import { IDatafeed } from './IDatafeed.js';

export class RESTDatafeed extends IDatafeed {
  constructor(baseURL, apiKey = null) {
    super();
    this.baseURL = baseURL.replace(/\/$/, '');
    this.apiKey = apiKey;
    this.subscribers = new Map();
    this.pollingInterval = null;
  }

  async onReady(callback) {
    callback({
      supported_resolutions: ['1', '5', '15', '30', '60', '240', '1D', '1W', '1M'],
      supports_group_request: false,
      supports_marks: false,
      supports_timescale_marks: false,
      supports_time: true
    });
  }

  async resolveSymbol(symbolName, onResolve, onError) {
    try {
      const url = `${this.baseURL}/symbols?symbol=${encodeURIComponent(symbolName)}`;
      const headers = this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {};
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      onResolve(this._normalizeSymbol(data));
    } catch (e) {
      onError(e.message);
    }
  }

  async getBars(symbolInfo, resolution, from, to, onHistoryCallback, onError, firstDataRequest) {
    try {
      const url = `${this.baseURL}/history?symbol=${encodeURIComponent(symbolInfo.name)}&resolution=${resolution}&from=${from}&to=${to}`;
      const headers = this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {};
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const bars = this._normalizeBars(data);
      onHistoryCallback(bars, { noData: bars.length === 0 });
    } catch (e) {
      onError(e.message);
    }
  }

  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    const interval = setInterval(async () => {
      try {
        const now = Math.floor(Date.now() / 1000);
        const url = `${this.baseURL}/quotes?symbol=${encodeURIComponent(symbolInfo.name)}`;
        const headers = this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {};
        const response = await fetch(url, { headers });
        const data = await response.json();
        if (data.price) {
          onRealtimeCallback({
            time: now,
            open: data.price,
            high: data.price,
            low: data.price,
            close: data.price,
            volume: data.volume || 0
          });
        }
      } catch (e) {
      }
    }, 5000);

    this.subscribers.set(subscriberUID, interval);
    return () => this.unsubscribeBars(subscriberUID);
  }

  unsubscribeBars(subscriberUID) {
    const interval = this.subscribers.get(subscriberUID);
    if (interval) {
      clearInterval(interval);
      this.subscribers.delete(subscriberUID);
    }
  }

  searchSymbols(userInput, exchange, symbolType, onResult, onError) {
    onResult([]);
  }

  _normalizeSymbol(data) {
    return {
      name: data.symbol || data.ticker,
      full_name: data.full_name || data.symbol,
      description: data.description || data.symbol,
      type: data.type || 'stock',
      session: data.session || '0900-1600',
      timezone: data.timezone || 'America/New_York',
      pricescale: data.pricescale || 100,
      minmov: data.minmov || 1,
      has_intraday: data.has_intraday !== false,
      supported_resolutions: data.supported_resolutions || ['1D'],
      has_daily: true,
      has_weekly_and_monthly: true,
      data_status: 'streaming'
    };
  }

  _normalizeBars(data) {
    if (Array.isArray(data)) return data;
    if (data.t && data.c) {
      return data.t.map((time, i) => ({
        time: time,
        open: data.o[i],
        high: data.h[i],
        low: data.l[i],
        close: data.c[i],
        volume: data.v[i]
      }));
    }
    return [];
  }
}
