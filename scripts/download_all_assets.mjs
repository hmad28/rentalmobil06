import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');

// Find all image URLs from html
const imgRegex = /src="(\/_astro\/[^"]+)"/g;
const imageUrls = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) {
  imageUrls.add(match[1]);
}

// Add favicon and logo if any
imageUrls.add('/favicon.png');

console.log(`Found ${imageUrls.size} unique assets to download.`);

const publicImagesDir = path.resolve('public/images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function download(urlPath) {
  const fullUrl = urlPath.startsWith('http') ? urlPath : `https://deazrental.com${urlPath}`;
  const filename = path.basename(urlPath);
  const dest = path.join(publicImagesDir, filename);

  return new Promise((resolve, reject) => {
    https.get(fullUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve({ urlPath, filename, size: fs.statSync(dest).size });
          });
        }).on('error', reject);
        return;
      }
      if (res.statusCode !== 200) {
        return resolve({ urlPath, error: `Status ${res.statusCode}` });
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ urlPath, filename, size: fs.statSync(dest).size });
      });
    }).on('error', (err) => {
      resolve({ urlPath, error: err.message });
    });
  });
}

async function run() {
  const results = [];
  for (const urlPath of imageUrls) {
    console.log(`Downloading: ${urlPath}...`);
    const res = await download(urlPath);
    results.push(res);
  }
  console.log('Finished downloads:');
  console.log(results);
}

run();
