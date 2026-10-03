import asyncio
import json
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            locale="id-ID"
        )
        page = await context.new_page()
        
        url = "https://www.google.com/maps/place/Home+Zahraffa+Rental+Mobil/@-3.4014148,114.6771035,1715m/data=!3m1!1e3!4m6!3m5!1s0x2de427cedb877d03:0xc4decb64c249efb9!8m2!3d-3.401417!4d114.6771028!16s%2Fg%2F11hzsvbydb"
        await page.goto(url, wait_until="domcontentloaded")
        await page.wait_for_timeout(4000)
        
        # Click on the cover photo
        photo_btn = await page.query_selector('button[aria-label*="Foto"], button[jsaction*="pane.heroHeaderImage"]')
        if not photo_btn:
            print("No photo button found")
            return
            
        await photo_btn.click()
        await page.wait_for_timeout(3000)
        
        photos_info = []
        visited_urls = set()
        
        # We can click "Foto berikutnya" (Next photo) up to 20 times
        for step in range(15):
            await page.wait_for_timeout(1500)
            
            # Find the main large photo displayed
            # Look for the current large image on the right
            current_img = await page.query_selector('div[role="region"] img, div[aria-label*="Foto"] img, div.m6QErb img')
            
            # Or inspect all images in the viewer
            viewer_imgs = await page.eval_on_selector_all(
                'div[style*="background-image"], img',
                '''elements => elements.map(e => {
                    if (e.tagName.toLowerCase() === 'img') return e.src;
                    const bg = e.style.backgroundImage;
                    if (bg) {
                        const m = bg.match(/url\\(["\']?(.*?)["\']?\\)/);
                        return m ? m[1] : null;
                    }
                    return null;
                }).filter(Boolean)'''
            )
            
            # Get current author and date if available
            author_el = await page.query_selector('div[class*="fontTitle"], span[class*="fontTitle"]')
            author = await author_el.inner_text() if author_el else ""
            
            print(f"Step {step}: found {len(viewer_imgs)} candidate image urls")
            for u in viewer_imgs:
                if ("googleusercontent.com" in u or "ggpht.com" in u) and not "=w32" in u and not "=w124" in u and not "=w203" in u:
                    clean_u = u.split("=")[0]
                    if clean_u not in visited_urls:
                        visited_urls.add(clean_u)
                        photos_info.append({"url": u, "clean": clean_u, "step": step})
                        print(f"  NEW PHOTO #{len(photos_info)}: {u}")
                        
            # Click next button: arrow right or button with arrow
            next_btn = await page.query_selector('button[aria-label*="berikutnya"], button[aria-label*="Next"], button[jsaction*="next"]')
            if not next_btn:
                # Try keyboard ArrowRight
                print("Pressing ArrowRight...")
                await page.keyboard.press("ArrowRight")
            else:
                print("Clicking next button...")
                await next_btn.click()
                
        print(f"\nDONE! Found {len(photos_info)} unique full photos.")
        with open("scripts/all_maps_photos.json", "w", encoding="utf-8") as f:
            json.dump(photos_info, f, indent=2)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
