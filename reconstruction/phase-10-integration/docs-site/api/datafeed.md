# Datafeed Interface

Implement this interface to connect the chart to your data source.

## Interface

```ts
interface IDatafeed {
  onReady(callback: (config: DatafeedConfig) => void): void;
  resolveSymbol(
    symbolName: string,
    onResolve: (symbolInfo: SymbolInfo) => void,
    onError: (error: string) => void
  ): void;
  getBars(
    symbolInfo: SymbolInfo,
    resolution: string,
    from: number,
    to: number,
    onHistoryCallback: (bars: Bar[], meta: { noData?: boolean; nextTime?: number }) => void,
    onError: (error: string) => void,
    firstDataRequest?: boolean
  ): void;
  subscribeBars(
    symbolInfo: SymbolInfo,
    resolution: string,
    onRealtimeCallback: (bar: Bar) => void,
    subscriberUID: string,
    onResetCacheNeededCallback?: () => void
  ): () => void;
  unsubscribeBars(subscriberUID: string): void;
  searchSymbols(
    userInput: string,
    exchange: string,
    symbolType: string,
    onResult: (items: SymbolInfo[]) => void,
    onError: (error: string) => void
  ): void;
}
```

## Built-in Implementations

- `RESTDatafeed` — Generic REST datafeed
- `BinanceDatafeed` — Binance exchange datafeed
- `WebSocketDatafeed` — WebSocket-based real-time datafeed
