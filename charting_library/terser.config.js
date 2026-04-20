// Terser Configuration for Re-minifying TradingView Charting Library
// Usage: npx terser charting_library.standalone.simple.js -c -m -o charting_library.standalone.minified.js --config-file terser.config.js

module.exports = {
  compress: {
    // Enable all compression optimizations
    arguments: true,           // Replace arguments[index] with parameter name
    arrows: true,              // Optimize arrow functions
    booleans: true,            // Optimize boolean expressions
    booleans_as_integers: false, // Keep booleans as booleans
    collapse_vars: true,       // Collapse single-use variables
    comparisons: true,         // Optimize comparison expressions
    computed_props: true,      // Optimize computed property access
    conditionals: true,        // Optimize if/else statements
    dead_code: true,           // Remove unreachable code
    defaults: true,            // Use default compression options
    directives: true,          // Optimize directive prologues
    drop_console: false,       // Keep console statements (set true to remove)
    drop_debugger: true,       // Remove debugger statements
    ecma: 2020,                // ECMAScript version for compression
    evaluate: true,            // Evaluate constant expressions
    expression: false,         // Preserve top-level expression
    global_defs: {},           // Global definitions for dead code elimination
    hoist_funs: false,         // Don't hoist function declarations
    hoist_props: true,         // Hoist constant properties
    hoist_vars: false,         // Don't hoist variable declarations
    ie8: false,                // Don't support IE8
    if_return: true,           // Optimize if/return patterns
    inline: true,              // Inline simple functions
    join_vars: true,           // Join consecutive variable declarations
    keep_classnames: false,    // Mangle class names
    keep_fargs: true,          // Keep unused function arguments
    keep_fnames: false,        // Don't keep function names (allow mangling)
    keep_infinity: false,      // Compress Infinity to 1/0
    loops: true,               // Optimize loops
    module: false,             // Not a module
    negate_iife: true,         // Negate immediately-invoked function expressions
    passes: 3,                 // Number of compression passes
    properties: true,          // Optimize property access
    pure_getters: "strict",    // Assume getters don't have side effects
    reduce_funcs: true,        // Reduce nested functions
    reduce_vars: true,         // Reduce named variables
    sequences: true,           // Join consecutive statements with commas
    side_effects: true,        // Remove side-effect-free statements
    switches: true,            // Optimize switch statements
    toplevel: false,           // Don't mangle top-level variables
    typeofs: true,             // Optimize typeof expressions
    unsafe: false,             // Don't use unsafe optimizations
    unsafe_arrows: false,      // Don't use unsafe arrow function optimizations
    unsafe_comps: false,       // Don't use unsafe comparison optimizations
    unsafe_Function: false,    // Don't use unsafe Function constructor
    unsafe_math: false,        // Don't use unsafe math optimizations
    unsafe_methods: false,     // Don't use unsafe method optimizations
    unsafe_proto: false,       // Don't use unsafe prototype optimizations
    unsafe_regexp: false,      // Don't use unsafe regexp optimizations
    unsafe_undefined: false,   // Don't use unsafe undefined optimizations
    unused: true,              // Remove unused variables and functions
    warnings: false,           // Don't show warnings
  },
  mangle: {
    eval: false,               // Don't mangle variables in eval()
    ie8: false,                // Don't support IE8
    keep_classnames: false,    // Mangle class names
    keep_fnames: false,        // Mangle function names
    module: false,             // Not a module
    reserved: [                // Reserved names that won't be mangled
      "mergeOptions",
      "ChartWidget", 
      "getVersion",
      "defaultWidgetOptions",
      "debugModeEnabled",
      "isChromeIOS",
      "TradingView",
      "ActionId"
    ],
    safari10: false,           // Don't support Safari 10 bug workaround
    toplevel: false,           // Don't mangle top-level variables
  },
  format: {
    ascii_only: false,         // Allow Unicode characters
    beautify: false,           // Don't beautify output (we want minified)
    braces: false,             // Don't always use braces
    comments: false,           // Remove all comments (use "some" to keep license comments)
    ecma: 2020,                // ECMAScript version for output
    ie8: false,                // Don't support IE8
    indent_level: 2,           // Indentation level (only if beautify is true)
    indent_start: 0,           // Starting indentation
    inline_script: true,       // Escape HTML script tag endings
    keep_numbers: false,       // Don't keep number formatting
    quote_keys: false,         // Don't quote keys
    quotes: false,             // Use double quotes
    safari10: false,           // Don't support Safari 10
    semicolons: true,          // Add semicolons
    shebang: true,             // Preserve shebang
    webkit: false,             // Don't support WebKit quirks
    wrap_iife: false,          // Don't wrap IIFEs
  },
  sourceMap: {
    includeSources: false,     // Don't include source content in source map
  },
  toplevel: false,             // Don't mangle top-level scope
  nameCache: null,             // Don't use name cache
  ie8: false,                  // Don't support IE8
  keep_classnames: false,      // Allow class name mangling
  keep_fnames: false,          // Allow function name mangling
  module: false,               // Not a module
  safari10: false,             // Don't support Safari 10
};
