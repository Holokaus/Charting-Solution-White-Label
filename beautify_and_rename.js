const fs = require('fs');
const prettier = require('prettier');

// Read the beautified file
let code = fs.readFileSync('/workspace/charting_library/charting_library.standalone.beautified.js', 'utf8');

// Rename variables with 100% confidence
const replacements = [
  // Function Ve -> mergeOptions (deep merge utility)
  { from: /\bVe\b/g, to: 'mergeOptions' },
  // Class Be -> ChartWidget (main widget class)
  { from: /\bBe\b/g, to: 'ChartWidget' },
  // Function Me -> getVersion (version info)
  { from: /\bMe\b/g, to: 'getVersion' },
  // Variable Fe -> defaultWidgetOptions (default config) - used around line 1017
  { from: /\bFe\b/g, to: 'defaultWidgetOptions' },
  // Variable Ee -> debugModeEnabled (debug flag)
  { from: /\bEe\b/g, to: 'debugModeEnabled' },
  // Variable Ne -> isChromeIOS (browser detection)
  { from: /\bNe\b/g, to: 'isChromeIOS' },
];

// Apply replacements carefully
replacements.forEach(({ from, to }) => {
  code = code.replace(from, to);
});

// Write the result
fs.writeFileSync('/workspace/charting_library/charting_library.standalone.simple.js', code);
console.log('Renaming complete! Output: charting_library.standalone.simple.js');
