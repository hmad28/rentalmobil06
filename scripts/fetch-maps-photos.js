const fs = require('fs');

async function getMapsHtml() {
  const url = 'https://www.google.com/maps/place/Home+Zahraffa+Rental+Mobil/@-3.4014148,114.6771035,17z/data=!4m6!3m5!1s0x2de427cedb877d03:0xc4decb64c249efb9!8m2!3d-3.401417!4d114.6771028!16s%2Fg%2F11hzsvbydb';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
      }
    });
    const html = await res.text();
    console.log('HTML length:', html.length);
    fs.writeFileSync('scripts/maps_response.html', html, 'utf-8');

    // Find all googleusercontent urls
    const matches = [...new Set(html.match(/https:\/\/[a-z0-9\-\.]+\.googleusercontent\.com\/p\/[^\s\"\'\\]+/g) || [])];
    console.log('Photos matches found (/p/):', matches.length);
    matches.forEach(m => console.log('Photo URL:', m));

    const allGuc = [...new Set(html.match(/https:\/\/[a-z0-9\-\.]+\.googleusercontent\.com\/[^\s\"\'\\]+/g) || [])];
    console.log('Total googleusercontent matches:', allGuc.length);
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

getMapsHtml();
