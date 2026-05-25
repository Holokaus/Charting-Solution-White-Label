import { IDatafeed } from './IDatafeed.js';

function randomOHLC(seed, time, basePrice) {
  const change = (Math.sin(seed * 0.01) * 0.02) + (Math.cos(seed * 0.007) * 0.01);
  const open = basePrice * (1 + change);
  const high = open * (1 + Math.abs(Math.sin(seed * 0.03)) * 0.01);
  const low = open * (1 - Math.abs(Math.cos(seed * 0.04)) * 0.01);
  const close = (open + high + low) / 3 + (Math.sin(seed * 0.05) * 0.005 * open);
  const volume = Math.floor(1000000 + Math.sin(seed * 0.02) * 500000);
  return { time, open, high, low, close, volume };
}

const SYMBOLS = {
  'AAPL': { name: 'AAPL', ticker: 'AAPL', type: 'stock', session: '0930-1600', exchange: 'NASDAQ', listed_exchange: 'NASDAQ', timezone: 'America/New_York', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 150 },
  'MSFT': { name: 'MSFT', ticker: 'MSFT', type: 'stock', session: '0930-1600', exchange: 'NASDAQ', listed_exchange: 'NASDAQ', timezone: 'America/New_York', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 300 },
  'GOOGL': { name: 'GOOGL', ticker: 'GOOGL', type: 'stock', session: '0930-1600', exchange: 'NASDAQ', listed_exchange: 'NASDAQ', timezone: 'America/New_York', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 140 },
  'TSLA': { name: 'TSLA', ticker: 'TSLA', type: 'stock', session: '0930-1600', exchange: 'NASDAQ', listed_exchange: 'NASDAQ', timezone: 'America/New_York', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 250 },
  'AMZN': { name: 'AMZN', ticker: 'AMZN', type: 'stock', session: '0930-1600', exchange: 'NASDAQ', listed_exchange: 'NASDAQ', timezone: 'America/New_York', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 130 },
  'BTCUSD': { name: 'BTCUSD', ticker: 'BTCUSD', type: 'crypto', session: '24x7', exchange: 'BINANCE', listed_exchange: 'BINANCE', timezone: 'Etc/UTC', minmov: 1, pricescale: 100, minmove2: 0, pointvalue: 1, fractional: false, base: 30000 },
};

const RESOLUTIONS = {
  '1': 60, '5': 300, '15': 900, '30': 1800, '60': 3600, '240': 14400,
  '1D': 86400, '1W': 604800, '1M': 2592000,
};

export class MockDatafeed extends IDatafeed {
  constructor() {
    super();
    this._subscriptions = new Map();
  }

  onReady(callback) {
    setTimeout(() => {
      callback({
        supports_marks: true,
        supports_timescale_marks: true,
        supports_time: true,
        supported_resolutions: Object.keys(RESOLUTIONS),
      });
    }, 0);
  }

  resolveSymbol(symbolName, onResolve, onError) {
    const symbol = SYMBOLS[symbolName.toUpperCase()];
    if (symbol) {
      setTimeout(() => onResolve(symbol), 0);
    } else {
      setTimeout(() => onError(`Unknown symbol: ${symbolName}`), 0);
    }
  }

  getBars(symbolInfo, resolution, from, to, onHistoryCallback, onError, firstDataRequest) {
    const symbol = SYMBOLS[symbolInfo.name] || SYMBOLS['AAPL'];
    const basePrice = symbol.base || 150;
    const resolutionSeconds = RESOLUTIONS[resolution] || 86400;

    const bars = [];
    const now = Math.floor(Date.now() / 1000);
    const startTime = Math.max(from, now - 365 * 86400);
    const endTime = Math.min(to, now);

    let t = startTime;
    let i = 0;
    while (t < endTime && bars.length < 500) {
      bars.push(randomOHLC(i + symbolInfo.name.charCodeAt(0), t, basePrice));
      t += resolutionSeconds;
      i++;
    }

    if (bars.length > 0) {
      setTimeout(() => onHistoryCallback(bars, { noData: false }), 0);
    } else {
      setTimeout(() => onHistoryCallback([], { noData: true }), 0);
    }
  }

  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    const symbol = SYMBOLS[symbolInfo.name] || SYMBOLS['AAPL'];
    const basePrice = symbol.base || 150;
    const resolutionSeconds = RESOLUTIONS[resolution] || 86400;

    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const time = Math.floor(now / resolutionSeconds) * resolutionSeconds;
      const bar = randomOHLC(time + symbolInfo.name.charCodeAt(0), time, basePrice);
      onRealtimeCallback(bar);
    }, Math.max(1000, resolutionSeconds * 1000));

    this._subscriptions.set(subscriberUID, interval);
  }

  unsubscribeBars(subscriberUID) {
    const interval = this._subscriptions.get(subscriberUID);
    if (interval) {
      clearInterval(interval);
      this._subscriptions.delete(subscriberUID);
    }
  }

  searchSymbols(userInput, exchange, symbolType, onResult, onError) {
    const query = userInput.toLowerCase();
    const results = Object.values(SYMBOLS)
      .filter(s => s.name.toLowerCase().includes(query))
      .map(s => ({ symbol: s.name, full_name: s.name, description: s.name, exchange: s.exchange, type: s.type }));
    setTimeout(() => onResult(results), 0);
  }
}
