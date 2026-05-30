export class IDatafeed {
  onReady(callback) {
    throw new Error('Abstract method onReady must be implemented');
  }

  resolveSymbol(symbolName, onResolve, onError) {
    throw new Error('Abstract method resolveSymbol must be implemented');
  }

  getBars(symbolInfo, resolution, from, to, onHistoryCallback, onError, firstDataRequest) {
    throw new Error('Abstract method getBars must be implemented');
  }

  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    throw new Error('Abstract method subscribeBars must be implemented');
  }

  unsubscribeBars(subscriberUID) {
    throw new Error('Abstract method unsubscribeBars must be implemented');
  }

  searchSymbols(userInput, exchange, symbolType, onResult, onError) {
    throw new Error('Abstract method searchSymbols must be implemented');
  }
}
