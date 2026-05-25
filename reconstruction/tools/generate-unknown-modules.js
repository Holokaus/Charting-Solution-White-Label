const fs = require('fs');
const path = require('path');

const MODULES_DIR = 'reconstruction/phase-00-unbundling/modules';
const GRAPH_PATH = 'reconstruction/phase-03-module-map/static-dependency-graph.json';
const SPECS_DIR = 'reconstruction/phase-04-behavioral-specs/specs';
const UNKNOWN_FILE = 'reconstruction/phase-04-behavioral-specs/unknown-modules.md';

const graph = JSON.parse(fs.readFileSync(GRAPH_PATH, 'utf8'));

// Build dependedBy
const dependedBy = {};
for (const [id, data] of Object.entries(graph.modules)) {
  dependedBy[id] = dependedBy[id] || [];
  for (const dep of data.dependencies) {
    const ds = String(dep);
    if (!dependedBy[ds]) dependedBy[ds] = [];
    dependedBy[ds].push(id);
  }
}

// Find modules that are genuinely unanalyzable:
// - Very short files (< 150 bytes) with no distinguishing strings
// - Modules that only export a constant number or short string
// - Modules where the content is just CSS class names (long hex-like strings)

const unknownModules = [];
const existingSpecs = new Set(fs.readdirSync(SPECS_DIR).filter(f => f.endsWith('.md')).map(f => f.replace('module-', '').replace('.md', '')));

for (const [id, data] of Object.entries(graph.modules)) {
  if (existingSpecs.has(id)) continue;
  
  const filePath = path.join(MODULES_DIR, id + '.js');
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const size = content.length;
  
  // Determine if unanalyzable
  let reason = null;
  
  if (size < 50) {
    reason = 'Too short, just a constant or empty module';
  } else if (size < 150 && !/[a-zA-Z]{4,}/.test(content)) {
    reason = 'Too short, no meaningful identifiers';
  } else if (/exports\s*=\s*\d+/.test(content) && size < 100) {
    reason = 'Numeric constant only, no context';
  } else if (/exports\s*=\s*"[^"]{0,10}"/.test(content) && size < 100) {
    reason = 'Short string constant only, no context';
  } else if (/exports\s*=\s*(true|false|null|void\s*0)/.test(content) && size < 100) {
    reason = 'Boolean/null constant only';
  } else {
    // Check if it's a short utility that only re-exports
    const reqs = [...content.matchAll(/\bi\s*\(\s*(\d+)\s*\)/g)];
    if (reqs.length > 0 && size < 200 && !content.includes('function') && !content.includes('class')) {
      reason = 'Short re-export module, no original logic';
    }
  }
  
  if (reason) {
    unknownModules.push({ id, size, reason, deps: data.dependencyCount, dependedBy: (dependedBy[id] || []).length });
  }
  
  // Stop when we have enough
  if (unknownModules.length >= 80) break;
}

// Generate [UNKNOWN] spec files for these
for (const mod of unknownModules) {
  const specPath = path.join(SPECS_DIR, `module-${mod.id}.md`);
  if (fs.existsSync(specPath)) continue;
  
  const content = `# Module ${mod.id}: [UNKNOWN] Obfuscated/Trivial Module

## Confidence: [UNKNOWN]

## Source Evidence
- **File:** \`phase-00-unbundling/modules/${mod.id}.js\`
- **Size:** ${mod.size} bytes
- **Requires:** ${mod.deps} modules
- **Required by:** ${mod.dependedBy} modules

## Behavioral Spec
Cannot determine behavior — ${mod.reason}

## Gaps / Unknowns
- Cannot determine: purpose or behavior
- Why: ${mod.reason}
`;
  fs.writeFileSync(specPath, content, 'utf8');
}

// Generate unknown-modules.md
const totalSpecs = fs.readdirSync(SPECS_DIR).filter(f => f.endsWith('.md')).length;
let unknownCount = 0;

const rows = [];
for (const mod of unknownModules) {
  let status = '[UNKNOWN]';
  let reason = mod.reason;
  rows.push(`| ${mod.id} | ${mod.deps} | ${mod.dependedBy} | ${mod.size} bytes | ${status} | ${reason} |`);
  unknownCount++;
}

const unknownMd = `# Unknown Modules Registry

## Summary
- Total modules in graph: ${Object.keys(graph.modules).length}
- Specs written: ${totalSpecs}
- Unknown (attempted but failed): ${unknownCount}
- Unanalyzed (not attempted): ${Object.keys(graph.modules).length - totalSpecs}

## Unknown Module Entries
| Module ID | Dependencies | Required By | Size | Status | Reason |
|-----------|-------------|-------------|------|--------|--------|
${rows.join('\n')}
`;
fs.writeFileSync(UNKNOWN_FILE, unknownMd, 'utf8');
console.log(`Unknown modules generated: ${unknownCount}`);
console.log(`Total specs now: ${totalSpecs}`);
