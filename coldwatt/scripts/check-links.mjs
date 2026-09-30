/**
 * Post-build quality check. Run: npm run build && npm run check-links
 *
 * Checks every built page for:
 *  - broken internal links
 *  - valid JSON-LD
 *  - title and meta description present and within length
 *  - an affiliate disclosure BEFORE the first /go/ link
 *  - affiliate links carrying rel="sponsored"
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(DIST);

const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return true;
  const p = join(DIST, clean);
  return existsSync(p) || existsSync(join(p, 'index.html')) || existsSync(`${p}.html`);
};

let problems = 0;
const report = (file, msg) => { problems++; console.log(`✗ ${file.replace(DIST, '')}: ${msg}`); };

for (const file of files) {
  if (file.includes(`${DIST}/go/`)) continue;
  const html = readFileSync(file, 'utf8');

  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (!exists(href)) report(file, `broken link ${href}`);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(json);
      const types = JSON.stringify(data);
      if (types.includes('"@type":"Review"') && !types.includes('testedByUs')) {
        // Review markup is only emitted when testedByUs is true; flag it so a human double-checks.
        console.log(`! ${file.replace(DIST, '')}: contains Review schema — confirm you really tested this product`);
      }
    } catch (e) {
      report(file, `invalid JSON-LD (${e.message})`);
    }
  }

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!title) report(file, 'missing <title>');
  if (title.length > 70) report(file, `title is ${title.length} chars (aim for ≤ 70 incl. brand)`);
  if (!desc) report(file, 'missing meta description');
  if (desc.length > 160) report(file, `meta description is ${desc.length} chars (max 160)`);

  const firstGo = html.search(/href="\/go\//);
  if (firstGo !== -1) {
    const disclosureAt = html.search(/class="disclosure"/);
    if (disclosureAt === -1 || disclosureAt > firstGo) report(file, 'affiliate link appears before the disclosure');
    for (const [tag] of html.matchAll(/<a[^>]+href="\/go\/[^"]*"[^>]*>/g)) {
      if (!/rel="[^"]*sponsored/.test(tag)) report(file, 'affiliate link missing rel="sponsored"');
    }
  }
}

console.log(problems ? `\n${problems} problem(s) across ${files.length} pages.` : `✓ ${files.length} pages checked — no problems.`);
process.exit(problems ? 1 : 0);
