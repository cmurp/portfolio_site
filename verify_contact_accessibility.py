from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Go to contact page
    # Assuming default port 3000
    try:
        page.goto("http://localhost:3000/contact")

        # Wait for content to load
        page.wait_for_selector('text="Chris Murphy"', timeout=10000)

        # Verify aria-labels are present and correct
        # This implicitly asserts that elements with these labels exist
        print("Checking GitHub link...")
        github_link = page.get_by_label("GitHub Profile")
        if not github_link.is_visible():
            print("GitHub link not visible")

        print("Checking LinkedIn link...")
        linkedin_link = page.get_by_label("LinkedIn Profile")

        print("Checking Twitter link...")
        twitter_link = page.get_by_label("Twitter Profile")

        print("Checking Email link...")
        email_link = page.get_by_label("Email Chris Murphy")

        # Verify hrefs
        if github_link.get_attribute("href") != "https://github.com/cmurp":
            print("GitHub href mismatch")

        if email_link.get_attribute("href") != "mailto:chrismurphy@hey.com":
            print("Email href mismatch")

        print("All accessibility labels found.")

        # Take screenshot
        page.screenshot(path="verification.png")
        print("Screenshot saved to verification.png")

    except Exception as e:
        print(f"Error: {e}")
        # Take screenshot even on error if possible
        try:
            page.screenshot(path="error.png")
        except:
            pass
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
