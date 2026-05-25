# Module 9722: CSS Module Styles

## Confidence: [CERTAIN]

## Source Evidence
- **File:** `phase-00-unbundling/modules/9722.js`
- **Lines:** 6
- **Size:** 13778 bytes
- **Requires:** 20 modules (50959, 97754, 50151, 99663, 67961, 90186, 41427, 86431, 52778, 77914, 15754, 65718, 95711, 99054, 9343, ...)
- **Required by:** 3 modules (3014, 70493, 79418)

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- Requires modules: 50959, 97754, 50151, 99663, 67961, 90186, 41427, 86431, 52778, 77914 and 10 more

### Process
- String literals found: use strict, ,{onClick:this.props.onClickBackdrop,className:h().backdrop
}),s.createElement(, ,this._onMouseDragMove),document.addEventListener(, ,this._onMouseDragMove),document.removeEventListener(, );t.initEvent(, ,this._onMouseDragStart),this._header.addEventListener(, ,this._onTouchDragStart),this._header.addEventListener(, ,this._onMouseDragStart),document.removeEventListener(, ,this._onMouseDragEnd),this._header.removeEventListener(, ,this._onTouchDragStart),this._header.removeEventListener(
- Code patterns: 2d-context, path-rendering, click-event, dialog, button, tooltip, dom-manipulation, math, css-styles, css-module, string:error, string:error
- 
- Manipulates DOM elements
- Performs mathematical calculations
- 

### Output
- Exports: PopupDialog
- To: 3014, 70493, 79418
- Side effects: DOM manipulation

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

