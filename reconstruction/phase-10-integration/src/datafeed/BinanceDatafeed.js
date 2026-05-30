import { RESTDatafeed } from './RESTDatafeed.js';

export class BinanceDatafeed extends RESTDatafeed {
  constructor() {
    super('https://api.binance.com/api/v3');
  }

  async resolveSymbol(symbolName, onResolve, onError) {
    try {
      const response = await fetch(`${this.baseURL}/exchangeInfo`);
      const data = await response.json();
      const symbol = data.symbols.find(s => s.symbol === symbolName.toUpperCase());
      if (!symbol) throw new Error('Symbol not found');

      onResolve({
        name: symbolName,
        full_name: symbolName,
        description: `${symbol.baseAsset}/${symbol.quoteAsset}`,
        type: 'crypto',
        session: '24x7',
        timezone: 'UTC',
        pricescale: Math.pow(10, symbol.quotePrecision),
        minmov: 1,
        has_intraday: true,
        supported_resolutions: ['1', '5', '15', '30', '60', '240', '1D', '1W', '1M'],
        has_daily: true,
        has_weekly_and_monthly: true,
        data_status: 'streaming'
      });
    } catch (e) {
      onError(e.message);
    }
  }

  async getBars(symbolInfo, resolution, from, to, onHistoryCallback, onError) {
    try {
      const interval = this._resolutionToBinanceInterval(resolution);
      const limit = 1000;
      const url = `${this.baseURL}/klines?symbol=${symbolInfo.name.toUpperCase()}&interval=${interval}&startTime=${from * 1000}&endTime=${to * 1000}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      const bars = data.map(k => ({
        time: Math.floor(k[0] / 1000),
        open: parseFloat(k[1]),
        high: parseFloat(k[2]),
        low: parseFloat(k[3]),
        close: parseFloat(k[4]),
        volume: parseFloat(k[5])
      }));
      onHistoryCallback(bars, { noData: bars.length === 0 });
    } catch (e) {
      onError(e.message);
    }
  }

  _resolutionToBinanceInterval(resolution) {
    const map = {
      '1': '1m', '5': '5m', '15': '15m', '30': '30m',
      '60': '1h', '240': '4h', '1D': '1d', '1W': '1w', '1M': '1M'
    };
    return map[resolution] || '1d';
  }
}
