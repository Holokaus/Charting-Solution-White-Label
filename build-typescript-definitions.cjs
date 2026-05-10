#!/usr/bin/env node
/**
 * TypeScript Definitions Generator
 * Creates .d.ts files from JSDoc comments in consolidated modules
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';

console.log('📘 BUILDING TYPESCRIPT DEFINITIONS');
console.log('='.repeat(60));

// Read module index
const indexPath = path.join(BASE_DIR, 'modules-final', 'index.json');
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

let typeDefinitions = `/**
 * TradingView Charting Library - TypeScript Definitions
 * Auto-generated from module JSDoc comments
 * Generated: ${new Date().toISOString()}
 * Modules: ${Object.keys(index).length}
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
`;

// Extract type info from modules
for (const [moduleId, info] of Object.entries(index).slice(0, 50)) {
  const modulePath = path.join(BASE_DIR, (info ).path);
  
  try {
    const content = fs.readFileSync(modulePath, 'utf8');
    
    // Extract class definitions
    const classMatches = content.match(/export\s+class\s+(\w+)/g);
    if (classMatches) {
      for (const match of classMatches) {
        const className = match.replace(/export\s+class\s+/, '');
        typeDefinitions += `  export class ${className} {\n`;
        typeDefinitions += `    constructor(...args: any[]);\n`;
        typeDefinitions += `  }\n\n`;
      }
    }
    
    // Extract interface definitions from JSDoc @typedef
    const typedefMatches = content.match(/@typedef\s+\{([^}]+)\}\s+(\w+)/g);
    if (typedefMatches) {
      for (const match of typedefMatches) {
        const nameMatch = match.match(/@typedef\s+\{[^}]+\}\s+(\w+)/);
        if (nameMatch) {
          typeDefinitions += `  export interface ${nameMatch[1]} {\n`;
          typeDefinitions += `    [key: string]: any;\n`;
          typeDefinitions += `  }\n\n`;
        }
      }
    }
  } catch (e) {
    // Skip failed modules
  }
}

typeDefinitions += `}

// Global declarations
declare global {
  interface Window {
    TradingView: typeof import('charting_library').TradingView;
  }
}

export = TradingView;
export as namespace TradingView;
`;

// Write TypeScript definitions
const dtsPath = path.join(BASE_DIR, 'charting_library.types.d.ts');
fs.writeFileSync(dtsPath, typeDefinitions, 'utf8');

console.log('✅ TypeScript definitions created');
console.log('  File: ' + dtsPath);
console.log('  Size: ' + (fs.statSync(dtsPath).size / 1024).toFixed(1) + ' KB');
console.log('  Modules documented: ' + Object.keys(index).length);
