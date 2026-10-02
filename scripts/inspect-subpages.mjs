import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('docs/subpages');
for (const f of files) {
  if (!f.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join('docs/subpages', f), 'utf-8');
  const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
  console.log(`\n=== FILE: ${f} ===`);
  if (mainMatch) {
    const textOnly = mainMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(textOnly.substring(0, 300) + '...');
  } else {
    console.log('No main tag found');
  }
}
