const fs = require('fs');
const path = require('path');

const GRAPH_PATH = 'reconstruction/phase-03-module-map/static-dependency-graph.json';
const CHUNK_PATH = 'reconstruction/phase-03-module-map/chunk-manifest.json';
const ENTRY_PATH = 'reconstruction/phase-03-module-map/entry-points.md';
const OUTPUT_PATH = 'reconstruction/phase-04-behavioral-specs/groups/module-groups.json';

const graph = JSON.parse(fs.readFileSync(GRAPH_PATH, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(CHUNK_PATH, 'utf8'));

// Build reverse dependency index (who depends on each module)
const dependedBy = {};
for (const [id, data] of Object.entries(graph.modules)) {
  dependedBy[id] = dependedBy[id] || [];
  for (const dep of data.dependencies) {
    const depStr = String(dep);
    if (!dependedBy[depStr]) dependedBy[depStr] = [];
    dependedBy[depStr].push(id);
  }
}

// Classify chunks into functional groups
function classifyChunk(chunkId, chunkFile) {
  const name = chunkFile.toLowerCase();
  if (name.includes('library.') && !name.includes('library-studies')) return 'core-initialization';
  if (name.includes('library-studies')) return 'study-engine';
  if (name.includes('line-tool-') || name.includes('drawing-toolbar')) return 'drawing-tools';
  if (name.includes('study-') || name.includes('studies.') || name.includes('indicator')) return 'studies-pane';
  if (name.includes('chart-widget-gui')) return 'chart-widget-gui';
  if (name.includes('header-toolbar')) return 'header-toolbar';
  if (name.includes('chart-floating-tooltip')) return 'chart-tooltip';
  if (name.includes('context-menu')) return 'context-menu';
  if (name.includes('symbol-search') || name.includes('symbol-info')) return 'symbol-dialogs';
  if (name.includes('dialog') || name.includes('confirm') || name.includes('notice')) return 'dialog-system';
  if (name.includes('property-page') || name.includes('properties-')) return 'property-pages';
  if (name.includes('locale') || name.includes('zh_') || name.includes('language')) return 'locales';
  if (name.includes('screenshot')) return 'screenshot';
  if (name.includes('button') || name.includes('toolbar')) return 'toolbar-ui';
  if (name.includes('timezone') || name.includes('currency')) return 'timezone-currency';
  if (name.includes('theme')) return 'themes';
  if (name.includes('datafeed') || name.includes('stream')) return 'datafeed';
  if (name.includes('marks') || name.includes('lollipop')) return 'marks-tooltips';
  if (name.includes('compare')) return 'compare-dialog';
  return 'other-chunks';
}

// Group modules by chunk classification, then by dependency patterns
const groups = {};
const assigned = new Set();

// First pass: assign modules based on chunk membership
for (const [chunkId, chunkData] of Object.entries(manifest.chunks)) {
  if (!chunkData.moduleIds || chunkData.moduleIds.length === 0) continue;
  const groupName = classifyChunk(chunkId, chunkData.file);
  if (!groups[groupName]) {
    groups[groupName] = {
      module_ids: [],
      entry_points: [],
      chunk_files: [],
      estimated_size: 0,
      confidence: '[CERTAIN]'
    };
  }
  groups[groupName].chunk_files.push(chunkData.file);
  for (const modId of chunkData.moduleIds) {
    const modStr = String(modId);
    if (!assigned.has(modStr)) {
      groups[groupName].module_ids.push(modId);
      assigned.add(modStr);
      groups[groupName].estimated_size++;
    }
  }
}

// Second pass: assign modules not in any chunk (from graph) based on dependency proximity
const unassigned = Object.keys(graph.modules).filter(id => !assigned.has(id));

// Determine hubs (modules with >10 dependents or >10 dependencies)
const hubs = Object.keys(graph.modules).filter(id => {
  const data = graph.modules[id];
  return (dependedBy[id] || []).length > 5 || data.dependencyCount > 8;
});

// Assign unassigned modules near hubs
const hubGroups = {
  'core-utilities': { module_ids: [], entry_points: [], chunk_files: ['(from graph, not in chunks)'], estimated_size: 0, confidence: '[LIKELY]' },
  'math-and-calculations': { module_ids: [], entry_points: [], chunk_files: ['(from graph)'], estimated_size: 0, confidence: '[LIKELY]' },
  'data-transforms': { module_ids: [], entry_points: [], chunk_files: ['(from graph)'], estimated_size: 0, confidence: '[UNCERTAIN]' },
  'event-system': { module_ids: [], entry_points: [], chunk_files: ['(from graph)'], estimated_size: 0, confidence: '[UNCERTAIN]' },
  'formatting-utils': { module_ids: [], entry_points: [], chunk_files: ['(from graph)'], estimated_size: 0, confidence: '[LIKELY]' },
  'i18n-locale-data': { module_ids: [], entry_points: [], chunk_files: ['(from graph)'], estimated_size: 0, confidence: '[CERTAIN]' },
};

// A rough heuristic: assign modules with many deps to core-utilities
for (const id of unassigned) {
  const data = graph.modules[id];
  if (data.dependencyCount === 0) {
    // Leaf module - likely data constant, CSS module, or simple utility
    if (id < 10000) {
      hubGroups['core-utilities'].module_ids.push(parseInt(id));
    } else {
      hubGroups['i18n-locale-data'].module_ids.push(parseInt(id));
    }
  } else if (data.dependencyCount <= 3) {
    hubGroups['formatting-utils'].module_ids.push(parseInt(id));
  } else if (data.dependencyCount <= 8) {
    hubGroups['data-transforms'].module_ids.push(parseInt(id));
  } else {
    hubGroups['core-utilities'].module_ids.push(parseInt(id));
  }
}

for (const [name, data] of Object.entries(hubGroups)) {
  data.estimated_size = data.module_ids.length;
  if (data.estimated_size > 0) {
    groups[name] = data;
  }
}

// Determine confidence levels
for (const [name, data] of Object.entries(groups)) {
  if (data.chunk_files.length > 0 && !data.chunk_files[0].startsWith('(')) {
    // Has named chunk files - we know what this is
    data.confidence = name.includes('other') ? '[UNCERTAIN]' : '[CERTAIN]';
  } else if (data.estimated_size > 200) {
    data.confidence = '[LIKELY]';
  }
  data.estimated_size = data.module_ids.length;
}

// Write output
fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ groups, metadata: { generated: new Date().toISOString(), totalGroups: Object.keys(groups).length, totalModulesAssigned: assigned.size + unassigned.length } }, null, 2));
console.log(`Groups created: ${Object.keys(groups).length}`);
console.log(`Modules assigned: ${assigned.size + unassigned.length}`);
console.log(`Unassigned left: ${Object.keys(graph.modules).length - (assigned.size + unassigned.length)}`);
