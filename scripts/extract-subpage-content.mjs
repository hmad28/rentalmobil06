import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('docs/subpages');
for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join('docs/subpages', file), 'utf-8');
  
  // Extract main tag
  const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[0]
      .replace(/src="\/_astro\//g, 'src="/images/')
      .replace(/data-full="\/_astro\//g, 'data-full="/images/');
    
    // Save to processed
    const outName = file.replace('.html', '.main.html');
    fs.writeFileSync(path.join('docs/subpages', outName), mainHtml);
    console.log(`Extracted main for ${file}: ${mainHtml.length} chars`);
  }
}
