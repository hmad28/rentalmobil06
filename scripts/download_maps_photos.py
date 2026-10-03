import json
import os
import urllib.request

os.makedirs('scripts/maps_photos', exist_ok=True)

with open('scripts/all_maps_photos.json', 'r', encoding='utf-8') as f:
    photos = json.load(f)

print(f"Total entries: {len(photos)}")

count = 0
for i, item in enumerate(photos):
    url = item['clean']
    # Skip profile avatars (containing /a/ACg...)
    if '/a/ACg' in url:
        print(f"Skipping profile avatar: {url}")
        continue
        
    count += 1
    # Request high resolution
    high_res_url = f"{url}=s1600"
    target_path = f"scripts/maps_photos/photo_{count}.jpg"
    
    print(f"Downloading #{count}: {high_res_url}")
    try:
        req = urllib.request.Request(
            high_res_url,
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req) as resp, open(target_path, 'wb') as out_file:
            out_file.write(resp.read())
        print(f"  Saved to {target_path} ({os.path.getsize(target_path)} bytes)")
    except Exception as e:
        print(f"  Failed: {e}")

print(f"Finished downloading {count} photos.")
