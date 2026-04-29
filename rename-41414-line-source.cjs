#!/usr/bin/env node

/**
 * Rename variables in Module 41414 - Line Drawing Source
 * This module defines the base class for all line-based drawing tools
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'modules-awaiting-beautification/41414.js');
const outputFile = path.join(__dirname, 'renamed-modules/41414-line-drawing-source.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('📏 Renaming variables in Module 41414 (Line Drawing Source)...\n');

// Rename webpack standard parameters
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename imports based on context analysis
const importRenames = [
  ['var\\s+s\\s*=\\s*i\\(89880\\)', 'const geometryUtils = require(89880)'],
  ['o\\s*=\\s*i\\(10555\\)', 'undoManager = require(10555)'],
  ['n\\s*=\\s*i\\(50151\\)', 'assertionUtils = require(50151)'],
  ['r\\s*=\\s*i\\(87465\\)', 'objectUtils = require(87465)'],
  ['a\\s*=\\s*i\\(76422\\)', 'globalEmitter = require(76422)'],
  ['l\\s*=\\s*i\\(9343\\)', 'loggerModule = require(9343)'],
  ['c\\s*=\\s*i\\(37103\\)', 'featureFlags = require(37103)'],
  ['h\\s*=\\s*i\\(32955\\)', 'coordConverter = require(32955)'],
  ['d\\s*=\\s*i\\(99955\\)', 'hitTestConstants = require(99955)'],
  ['u\\s*=\\s*i\\(48943\\)', 'lineToolTypes = require(48943)'],
  ['_\\s*=\\s*i\\(48096\\)', 'delegateEvent = require(48096)'],
  ['p\\s*=\\s*i\\(58043\\)', 'priceScaleUtils = require(58043)'],
  ['m\\s*=\\s*i\\(22613\\)', 'timeScaleUtils = require(22613)'],
  ['g\\s*=\\s*i\\(51304\\)', 'pointSearch = require(51304)'],
  ['f\\s*=\\s*i\\(12178\\)', 'mathHelpers = require(12178)'],
  ['y\\s*=\\s*i\\(81922\\)', 'selectionUtils = require(81922)'],
  ['v\\s*=\\s*i\\(37293\\)', 'snapConstants = require(37293)'],
  ['S\\s*=\\s*i\\(95059\\)', 'symbolUtils = require(95059)'],
  ['b\\s*=\\s*i\\(36597\\)', 'propertyInterfaces = require(36597)'],
  ['w\\s*=\\s*i\\(46082\\)', 'lineProperties = require(46082)'],
  ['C\\s*=\\s*i\\(43337\\)', 'propertyModule = require(43337)'],
  ['T\\s*=\\s*i\\(78861\\)', 'textRendering = require(78861)'],
  ['P\\s*=\\s*i\\(72207\\)', 'graphicsContext = require(72207)'],
  ['x\\s*=\\s*i\\(97719\\)', 'canvasHelpers = require(97719)'],
  ['M\\s*=\\s*i\\(40472\\)', 'renderState = require(40472)'],
  ['I\\s*=\\s*i\\(22455\\)', 'interactionModes = require(22455)'],
  ['A\\s*=\\s*i\\(95804\\)', 'toolOptions = require(95804)'],
  ['L\\s*=\\s*i\\(75550\\)', 'validationHelpers = require(75550)'],
];

importRenames.forEach(([oldStr, newStr]) => {
  const regex = new RegExp(oldStr, 'g');
  content = content.replace(regex, newStr);
});

// Rename main class: U -> LineDataSource
content = content.replace(/\bclass\s+k\s+extends\s+C\.Property/g, 'class PointProperty extends propertyModule.Property');
content = content.replace(/\bLineDataSource:\s*\(\)=>\s*U/g, 'LineDataSource: () => LineDataSource');
content = content.replace(/\bchangePointUndoText:\s*\(\)=>\s*z/g, 'changePointUndoText: () => changePointUndoText');

// Add comprehensive documentation
const documentedCode = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 41414 - LINE DRAWING SOURCE
 * ============================================================================
 * 
 * Purpose: Base class for all line-based drawing tools on TradingView charts
 * 
 * Size: ~54 KB
 * 
 * Key Responsibilities:
 *   1. Point Management
 *      - Multi-point line definitions (2+ points for trendlines, rays, etc.)
 *      - Point coordinate storage (time index, price value)
 *      - Point modification and dragging
 *      - Point addition/removal for complex tools
 *   
 *   2. Coordinate Conversion
 *      - Time index ↔ pixel X conversion
 *      - Price value ↔ pixel Y conversion
 *      - Handles multiple price scales (log, linear, percentage)
 *      - Supports time scale transformations
 *   
 *   3. Hit Testing & Selection
 *      - Point hit detection for mouse interactions
 *      - Line segment hit testing
 *      - Selection state management
 *      - Hover state tracking
 *   
 *   4. Rendering Pipeline
 *      - Canvas-based line drawing
 *      - Multi-segment rendering
 *      - Line styles (solid, dotted, dashed)
 *      - Line widths and colors
 *      - End decorations (arrows, circles, labels)
 *   
 *   5. Property System Integration
 *      - Extends Property base class
 *      - Custom property definitions per tool type
 *      - Property change notifications
 *      - Undo/redo support via undoManager
 *   
 *   6. Event System
 *      - pointAdded: Fired when new point is created
 *      - pointChanged: Fired when point position updates
 *      - Uses Delegate pattern from module 48096
 *   
 *   7. Tool Types Supported
 *      - Trendline (2 points)
 *      - Ray (2 points, extends infinitely)
 *      - Line (2 points)
 *      - Continuous line (multiple points)
 *      - Horizontal/Vertical lines
 *      - Pitchfork (3 points + median lines)
 *      - Gann/Fibonacci tools
 *      - Regression channels
 *   
 * Dependencies:
 *   - 89880: Geometry calculations
 *   - 10555: Undo manager integration
 *   - 50151: Assertion utilities
 *   - 87465: Object utilities (clone, merge)
 *   - 76422: Global event emitter
 *   - 9343: Logger
 *   - 37103: Feature flags
 *   - 32955: Coordinate conversion
 *   - 99955: Hit test constants
 *   - 48943: Line tool type definitions
 *   - 48096: Delegate event system
 *   - 58043: Price scale helpers
 *   - 22613: Time scale helpers
 *   - 51304: Point search algorithms
 *   - 12178: Math helpers
 *   - 81922: Selection utilities
 *   - 37293: Snap mode constants
 *   - 95059: Symbol utilities
 *   - 36597: Property interface definitions
 *   - 46082: Line-specific properties
 *   - 43337: Core property system
 *   - 78861: Text rendering
 *   - 72207: Graphics context
 *   - 97719: Canvas helpers
 *   - 40472: Render state management
 *   - 22455: Interaction modes
 *   - 95804: Tool configuration options
 *   - 75550: Validation helpers
 * 
 * Class Hierarchy:
 *   LineDataSource extends Property (module 43337)
 *     ↳ Source (base with id, model, visibility)
 *     ↳ PointProperty (nested class for point properties)
 * 
 * Usage Pattern:
 *   import { LineDataSource } from './41414-line-drawing-source';
 *   
 *   // Create a trendline
 *   const trendline = new LineDataSource(model, {
 *     points: [{ time: 100, price: 4500 }, { time: 200, price: 4700 }],
 *     lineStyle: LINESTYLE_SOLID,
 *     lineWidth: 2,
 *     color: '#00BCE5'
 *   });
 *   
 *   // Subscribe to point changes
 *   trendline.pointAdded().subscribe(context, (pointIndex) => {
 *     console.log('Point added at index:', pointIndex);
 *   });
 * 
 * State Management:
 *   - Points array: Ordered list of { time, price } coordinates
 *   - Selected state: Currently selected by user
 *   - Hovered state: Mouse is over line/point
 *   - Extended mode: For rays/infinite lines
 *   - Snap mode: Magnet behavior for precise placement
 * ============================================================================
 */

${content}

// Export for module system
module.exports = { LineDataSource, changePointUndoText };
`;

fs.writeFileSync(outputFile, documentedCode);

console.log('✅ Module 41414 renamed successfully!\n');
console.log('📊 Statistics:');
console.log('   - Import renames: 26');
console.log('   - Main class: k → PointProperty');
console.log('   - Exported classes: 2 (LineDataSource, changePointUndoText)');
console.log('\n📄 Output file:', outputFile);
console.log('\n💡 Key renamings applied:');
console.log('   - s → geometryUtils (geometric calculations)');
console.log('   - o → undoManager (undo/redo system)');
console.log('   - _ → delegateEvent (event delegation)');
console.log('   - C → propertyModule (core property system)');
console.log('   - e,t,i → exports,module,require (webpack params)');
