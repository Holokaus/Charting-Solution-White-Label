# Module 27714: Resolution Manager

## Confidence: [LIKELY]

## Source Evidence
- **File:** `phase-00-unbundling/modules/27714.js`
- **Lines:** 3
- **Size:** 8749 bytes
- **Requires:** 0 modules ()
- **Required by:** 9 modules (6639, 10307, 11485, 20820, 33065, 33350, 37150, 49190, 96664)

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- No module dependencies (leaf node)

### Process
- String literals found: use strict, Negative width is not allowed for Size, Negative height is not allowed for Size, value, Resolution listener is already installed, all and (resolution: , dppx), Object is disposed, canvasElement, Object is disposed
- Code patterns: canvas, 2d-context, canvas-sizing, resolution, subscribe, math, css-styles, string:error, string:error
- Uses Canvas 2D API for rendering
- 
- Performs mathematical calculations
- 

### Output
- Exports: default export
- To: 6639, 10307, 11485, 20820, 33065, 33350, 37150, 49190, 96664
- 

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

