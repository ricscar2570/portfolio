from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_session_security(site_url):
    """
    Checks if session cookies are configured with Secure and HttpOnly flags.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(site_url)

    cookies = driver.get_cookies()
    secure_cookie = any(cookie.get("secure") for cookie in cookies)
    http_only_cookie = any(cookie.get("httpOnly") for cookie in cookies)

    if secure_cookie and http_only_cookie:
        log_result("PASS: Session cookies are secure.")
    else:
        log_result("FAIL: Session cookies are not secure.")

    driver.quit()
