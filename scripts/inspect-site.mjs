import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');

// 1. Extract title and meta tags
const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
console.log('=== TITLE ===');
console.log(titleMatch ? titleMatch[1] : 'No title');

const metaTags = [];
const metaRegex = /<meta\s+([^>]+)>/gi;
let match;
while ((match = metaRegex.exec(html)) !== null) {
  metaTags.push(match[1]);
}
console.log('\n=== KEY META TAGS ===');
metaTags.filter(m => m.includes('description') || m.includes('og:') || m.includes('viewport') || m.includes('keywords'))
  .forEach(m => console.log(m));

// 2. Extract stylesheet links & inline styles
console.log('\n=== STYLESHEETS ===');
const linkRegex = /<link\s+([^>]+)>/gi;
while ((match = linkRegex.exec(html)) !== null) {
  if (match[1].includes('stylesheet') || match[1].includes('font')) {
    console.log(match[1]);
  }
}

// 3. Extract all images
console.log('\n=== IMAGES ===');
const imgRegex = /<img\s+([^>]+)>/gi;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log(`Total images: ${images.length}`);
images.slice(0, 30).forEach((img, i) => console.log(`[${i+1}] ${img}`));

// 4. Extract headings
console.log('\n=== HEADINGS ===');
const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
while ((match = hRegex.exec(html)) !== null) {
  const clean = match[2].replace(/<[^>]+>/g, '').trim();
  if (clean) console.log(`${match[1].toUpperCase()}: ${clean}`);
}
