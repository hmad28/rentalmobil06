import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');

// Helper to extract clean text between tags
function extractBlocks(startPattern, endPattern) {
  const start = html.indexOf(startPattern);
  if (start === -1) return null;
  const end = html.indexOf(endPattern, start);
  return end === -1 ? html.substring(start) : html.substring(start, end);
}

// 1. Check body classes and nav
const bodyMatch = html.match(/<body[^>]*class="([^"]*)"/i);
console.log('BODY CLASS:', bodyMatch ? bodyMatch[1] : 'none');

// 2. Check header / nav
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('\n--- HEADER (first 500 chars) ---');
  console.log(headerMatch[0].substring(0, 500));
}

// 3. Check Fleet / Armada section
const armadaIndex = html.indexOf('Armada Rental Mobil');
if (armadaIndex !== -1) {
  console.log('\n--- ARMADA SECTION (sample 1500 chars) ---');
  console.log(html.substring(armadaIndex - 100, armadaIndex + 1500));
}

// 4. Check Services section
const pelayananIndex = html.indexOf('PELAYANAN KAMI');
if (pelayananIndex !== -1) {
  console.log('\n--- PELAYANAN SECTION (sample 1000 chars) ---');
  console.log(html.substring(pelayananIndex - 100, pelayananIndex + 1000));
}

// 5. Check Why Choose Us / Mengapa Memilih
const whyIndex = html.indexOf('Mengapa Memilih');
if (whyIndex !== -1) {
  console.log('\n--- WHY CHOOSE US (sample 1000 chars) ---');
  console.log(html.substring(whyIndex - 100, whyIndex + 1000));
}

// 6. Check Footer
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('\n--- FOOTER (sample 1500 chars) ---');
  console.log(footerMatch[0].substring(0, 1500));
}
