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
        await page.wait_for_timeout(5000)
        
        # Click on the cover photo button
        photo_btn = await page.query_selector('button[aria-label*="Foto"], button[jsaction*="pane.heroHeaderImage"]')
        if photo_btn:
            print("Found photo button, clicking...")
            await photo_btn.click()
            await page.wait_for_timeout(5000)
            await page.screenshot(path="scripts/maps_gallery.png")
            
            # Check all images in gallery
            imgs = await page.eval_on_selector_all("img", "elements => elements.map(e => e.src)")
            gallery_photos = [src for src in imgs if "googleusercontent.com" in src]
            print("Gallery photos count:", len(gallery_photos))
            for g in gallery_photos:
                print("  ", g)
        else:
            print("Photo button not found")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
