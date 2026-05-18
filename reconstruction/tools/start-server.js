#!/usr/bin/env node
/**
 * Simple local HTTP server to serve the Charting-Solution for Phase 1 testing
 * Run: node start-server.js
 * Then open: http://localhost:8080/reconstruction/phase-01-runtime-analysis/feature-trigger-test.html
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8080;
// Go up from tools/ -> reconstruction/ -> root
const ROOT_DIR = path.join(__dirname, '../..');

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Default to index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Remove leading slash and construct file path
    let filePath = path.join(ROOT_DIR, pathname);

    // Normalize path to prevent directory traversal
    filePath = path.normalize(filePath);
    if (!filePath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found: ' + pathname);
            console.log(`[404] ${pathname}`);
            return;
        }

        // Determine MIME type
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

        // Add CORS and security headers
        res.writeHead(200, {
            'Content-Type': mimeType,
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'X-Content-Type-Options': 'nosniff'
        });

        // Stream file to response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        
        console.log(`[200] ${pathname}`);
    });
});

server.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║          Phase 1 Test Server Running                         ║
╠══════════════════════════════════════════════════════════════╣
║  Server: http://localhost:${PORT}                            
║  
║  Test Page: 
║  http://localhost:${PORT}/reconstruction/phase-01-runtime-analysis/feature-trigger-test.html
║
║  Steps:
║  1. Open the Test Page URL in your browser
║  2. Wait for the chart to initialize (may take a few seconds)
║  3. Click buttons to trigger features
║  4. Click "Export Logs" to download hook-logs.json
║  5. Click "Export Module Map" to download module-behavior-map.json
║
║  Press Ctrl+C to stop the server
╚══════════════════════════════════════════════════════════════╝
    `);
});

console.log(`Listening on port ${PORT}...`);
