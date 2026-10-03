const fs = require('fs');

const html = fs.readFileSync('scripts/maps_response.html', 'utf-8');

// Look for image urls like googleusercontent or ggpht
const pattern = /(https?:\/\/[a-zA-Z0-9\.\-_]+\.(?:googleusercontent|ggpht)\.com\/[a-zA-Z0-9\-_=]+)/g;
const found = [...new Set(html.match(pattern) || [])];
console.log('All image-like URLs:', found.length);
found.forEach(url => console.log('-', url));

// Also search for "AF_initDataCallback"
const callbacks = [...html.matchAll(/AF_initDataCallback\((.*?)\);<\/script>/gs)];
console.log('Callbacks found:', callbacks.length);
for (let i = 0; i < callbacks.length; i++) {
  const content = callbacks[i][1];
  console.log(`Callback ${i} length: ${content.length}`);
  if (content.includes('http')) {
    const urls = [...new Set(content.match(/(https?:\/\/[^\s"',\\]+)/g) || [])];
    console.log(`  URLs in callback ${i}:`, urls.filter(u => u.includes('googleusercontent') || u.includes('ggpht') || u.includes('photo')));
  }
}
