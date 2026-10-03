import asyncio
import json
import re
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            locale="id-ID"
        )
        page = await context.new_page()
        
        photos_found = set()
        
        page.on("response", lambda res: handle_response(res, photos_found))
        
        url = "https://maps.app.goo.gl/yC66naVpd1xchSg1A"
        print(f"Navigating to {url}...")
        try:
            await page.goto(url, wait_until="networkidle", timeout=30000)
        except Exception as e:
            print("Goto warning:", e)
            
        print("Page title:", await page.title())
        print("Current URL:", page.url)
        
        # Take screenshot of page
        await page.screenshot(path="scripts/maps_page.png")
        
        # Check all img tags on page
        imgs = await page.eval_on_selector_all("img", "elements => elements.map(e => e.src)")
        for img in imgs:
            if "googleusercontent.com" in img:
                photos_found.add(img)
                
        # Try to click on the photo or "Semua" / "Foto" tab if available
        buttons = await page.query_selector_all("button")
        for btn in buttons:
            text = (await btn.inner_text()).strip()
            if "Foto" in text or "Semua" in text:
                print("Clicking button:", text)
                try:
                    await btn.click()
                    await page.wait_for_timeout(3000)
                except Exception as e:
                    print("Error clicking:", e)

        # Scroll down
        await page.mouse.wheel(0, 1000)
        await page.wait_for_timeout(2000)
        
        imgs_after = await page.eval_on_selector_all("img", "elements => elements.map(e => e.src)")
        for img in imgs_after:
            if "googleusercontent.com" in img:
                photos_found.add(img)
                
        print("Total photos found:", len(photos_found))
        for p_url in sorted(photos_found):
            print("Photo:", p_url)
            
        with open("scripts/maps_photos.json", "w", encoding="utf-8") as f:
            json.dump(list(photos_found), f, indent=2)
            
        await browser.close()

def handle_response(res, photos_found):
    url = res.url
    if "googleusercontent.com" in url:
        photos_found.add(url)

if __name__ == "__main__":
    asyncio.run(main())
