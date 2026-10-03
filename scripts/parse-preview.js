const fs = require('fs');

const raw = fs.readFileSync('scripts/preview_response.txt', 'utf-8');
const cleaned = raw.replace(/^\)\]\}'/, '').trim();

try {
  const data = JSON.parse(cleaned);
  console.log('Successfully parsed JSON!');
  
  // Recursively search for string values
  const strings = [];
  function extractStrings(obj) {
    if (typeof obj === 'string') {
      strings.push(obj);
    } else if (Array.isArray(obj)) {
      for (const item of obj) extractStrings(item);
    } else if (obj && typeof obj === 'object') {
      for (const key of Object.keys(obj)) extractStrings(obj[key]);
    }
  }
  extractStrings(data);
  
  console.log('Total strings:', strings.length);
  const urlStrings = strings.filter(s => s.startsWith('http://') || s.startsWith('https://') || s.includes('googleusercontent'));
  console.log('URL strings found:', urlStrings);

  // Look for any string that looks like a photo key or image
  const photoKeys = strings.filter(s => s.startsWith('AF1Qip'));
  console.log('Photo keys (AF1Qip...):', photoKeys);

} catch (err) {
  console.error('JSON parse error:', err.message);
}
