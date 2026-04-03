#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  console.log('$', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

const OUT = path.resolve(__dirname, '..', 'out');
try {
  // Build and export
  run('npm run build');
  run('npm run export');

  if (!fs.existsSync(OUT)) {
    console.error('Export output not found at', OUT);
    process.exit(2);
  }

  // Scan HTML files for image links that do NOT contain the expected base
  const expectedBase = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const htmlFiles = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      const p = path.join(dir, entry);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) walk(p);
      else if (p.endsWith('.html')) htmlFiles.push(p);
    }
  }
  walk(OUT);

  let problems = 0;
  const missing = [];
  for (const f of htmlFiles) {
    const s = fs.readFileSync(f, 'utf8');
    const regex = /<img[^>]+src=["']([^"']+)["']/g;
    let m;
    while ((m = regex.exec(s))) {
      const src = m[1];
      if (expectedBase) {
        if (!src.startsWith(expectedBase) && src.startsWith('/')) {
          problems++;
          missing.push({ file: f, src });
        }
      }
    }
  }

  if (problems === 0) {
    console.log(
      'OK — no root-relative image paths missing expected base (',
      expectedBase,
      ')',
    );
    process.exit(0);
  }

  console.error(
    '\nFound image references that do not include the expected base path:',
    expectedBase,
  );
  for (const p of missing) console.error(p.file, '->', p.src);
  process.exit(3);
} catch (err) {
  console.error(err && err.message ? err.message : err);
  process.exit(1);
}
