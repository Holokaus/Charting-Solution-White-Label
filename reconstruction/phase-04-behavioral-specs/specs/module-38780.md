# Module 38780: CSS Module Styles

## Confidence: [CERTAIN]

## Source Evidence
- **File:** `phase-00-unbundling/modules/38780.js`
- **Lines:** 4
- **Size:** 9494 bytes
- **Requires:** 12 modules (32563, 50151, 26709, 50470, 24640, 40167, 26867, 77914, 49483, 94194, 61814, 46021)
- **Required by:** 7 modules (6639, 13657, 29063, 37150, 46069, 50921, 63027)

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- Requires modules: 32563, 50151, 26709, 50470, 24640, 40167, 26867, 77914, 49483, 94194 and 2 more

### Process
- String literals found: use strict, tooltip-root-element, ),u.id=d,document.body.appendChild(u))}function p(){u&&(u.innerHTML=, )}function m(e){p(),u||_(),u.appendChild(e)}, ===document.readyState?_():document.addEventListener(, ,_);var g=i(50470),f=i(24640),y=(i(40167),i(26867)),v=i(77914),S=i(49483);const b={default:, ,white:, ,chart:, round-shadow, theme-round-shadow
- Code patterns: button, tooltip, dom-manipulation, math, css-styles, css-module, string:chart
- 
- Manipulates DOM elements
- Performs mathematical calculations
- 

### Output
- Exports: hide, show, showOnElement
- To: 6639, 13657, 29063, 37150, 46069, 50921, 63027
- Side effects: DOM manipulation

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

