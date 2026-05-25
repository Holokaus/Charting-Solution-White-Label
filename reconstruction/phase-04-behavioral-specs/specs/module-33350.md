# Module 33350: DOM Utility

## Confidence: [LIKELY]

## Source Evidence
- **File:** `phase-00-unbundling/modules/33350.js`
- **Lines:** 2
- **Size:** 3123 bytes
- **Requires:** 6 modules (27714, 50151, 59239, 57658, 24640, 49483)
- **Required by:** 26 modules (4753, 4787, 11485, 12891, 23752, 36281, 37150, 39470, 49190, 53768, ...)

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- Requires modules: 27714, 50151, 59239, 57658, 24640, 49483

### Process
- String literals found: use strict, ));return t.setTransform(1,0,0,1,0,0),t}function u(e){const t=(0,o.ensureNotNull)(e.getContext(, ===e.textAlign?0:(0,
a.isRtl)()?, ===e.textAlign||, ===e.textAlign?t:0:, ===e.textAlign||, ===e.textAlign?0:t}function w(e){e.style.userSelect=, ,e.style.webkitUserSelect=, ,e.style.msUserSelect=, ,e.style.MozUserSelect=
- Code patterns: canvas, 2d-context, rect-rendering, path-rendering, canvas-sizing, dom-manipulation, css-styles, string:line
- Uses Canvas 2D API for rendering
- Manipulates DOM elements
- 
- 

### Output
- Exports: addExclusionArea, addExclusionAreaByScope, calcTextHorizontalShift, clearRect, createBoundCanvas, createDisconnectedCanvas, createDisconnectedCanvasByRenderingInfo, disableSelection, drawScaled, drawWithExclusionAreaByScope, fillRect, getBindingRenderingInfo, getContext2D, getPrescaledContext2D, measureText, tryApplySuggestedCanvasBitmapSize
- To: 4753, 4787, 11485, 12891, 23752, 36281, 37150, 39470, 49190, 53768 and 16 more
- Side effects: DOM manipulation

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

