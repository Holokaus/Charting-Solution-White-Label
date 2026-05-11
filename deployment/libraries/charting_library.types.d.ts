/**
 * TradingView Charting Library - TypeScript Definitions
 * Auto-generated from module JSDoc comments
 * Generated: 2026-05-10T08:04:03.019Z
 * Modules: 470
 */

declare module 'charting_library' {
  
  // Core types
  export interface ChartOptions {
    container: HTMLElement | string;
    symbol?: string;
    interval?: string;
    theme?: 'light' | 'dark';
    timezone?: string;
    library_path?: string;
    datafeed?: any;
  }
  
  export interface ChartApi {
    setSymbol(symbol: string): void;
    setInterval(interval: string): void;
    setTheme(theme: 'light' | 'dark'): void;
    remove(): void;
  }
  
  export class TradingView {
    constructor(options: ChartOptions): ChartApi;
    static version: string;
    static createChart(container: HTMLElement | string, options?: ChartOptions): ChartApi;
  }
  
  // Module exports
  export const modules: string[];
  export function require(id: string): any;
  export interface CreateLineToolSyncMode {
    [key: string]: any;
  }

  export class StudyStub {
    constructor(...args: any[]);
  }

  export class GraphicsListColl {
    constructor(...args: any[]);
  }

  export interface LayoutDefinition {
    [key: string]: any;
  }

  export class BitmapCoordinatesPaneRenderer {
    constructor(...args: any[]);
  }

  export interface Size {
    [key: string]: any;
  }

  export interface BitmapCoordinateContext {
    [key: string]: any;
  }

}

// Global declarations
declare global {
  interface Window {
    TradingView: typeof import('charting_library').TradingView;
  }
}

export = TradingView;
export as namespace TradingView;
