# security_tests/session_test.py

# Test for secure session cookie handling



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_session_security():

    \"\"\"

    Checks if session cookies are configured with Secure and HttpOnly flags.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL)



    cookies = driver.get_cookies()

    secure_cookie = any(cookie.get("secure") for cookie in cookies)

    http_only_cookie = any(cookie.get("httpOnly") for cookie in cookies)



    if secure_cookie and http_only_cookie:

        log_result("PASS: Session cookies are secure.")

    else:

        log_result("FAIL: Session cookies are not secure.")



    driver.quit()
