from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_xss(site_url):
    """
    Tests for XSS vulnerabilities by injecting a script payload.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/comment-section")

    payload = "<script>alert('XSS')</script>"
    comment_input = driver.find_element("name", "comment")
    comment_input.send_keys(payload)
    driver.find_element("name", "submit").click()

    if payload in driver.page_source:
        log_result("FAIL: XSS vulnerability is present.")
    else:
        log_result("PASS: XSS vulnerability is not present.")

    driver.quit()