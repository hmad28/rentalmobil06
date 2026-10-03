const fs = require('fs');

async function testPreview() {
  const html = fs.readFileSync('scripts/maps_response.html', 'utf-8');
  const match = html.match(/<link href="(\/maps\/preview\/place\?[^"]+)"/);
  if (!match) {
    console.log('No preview place link found');
    return;
  }
  const previewPath = match[1].replace(/&amp;/g, '&');
  const previewUrl = 'https://www.google.com' + previewPath;
  console.log('Preview URL:', previewUrl);

  const res = await fetch(previewUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  });

  const text = await res.text();
  console.log('Response status:', res.status);
  console.log('Response length:', text.length);
  fs.writeFileSync('scripts/preview_response.txt', text, 'utf-8');

  // Look for photo URLs
  const photos = [...new Set(text.match(/https:\/\/[a-zA-Z0-9\.\-_]+\.googleusercontent\.com\/p\/[a-zA-Z0-9\-_=]+/g) || [])];
  console.log('Found photos (/p/):', photos.length);
  photos.forEach(p => console.log('Photo:', p));
}

testPreview();
