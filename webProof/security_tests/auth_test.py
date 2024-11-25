from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

def test_auth(site_url):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/protected-page")
    if "Login" in driver.page_source:
        print("PASS: Access to protected page is blocked without authentication.")
    else:
        print("FAIL: Access to protected page is allowed without authentication.")
    driver.quit()