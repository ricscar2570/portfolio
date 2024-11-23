# security_tests/auth_test.py

# Test for authentication and authorization issues



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_auth():

    \"\"\"

    Verifies that protected pages cannot be accessed without authentication.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/protected-page")  # Example of a protected page



    if "Login" in driver.page_source:

        log_result("PASS: Access to protected page is blocked without authentication.")

    else:

        log_result("FAIL: Access to protected page is allowed without authentication.")



    driver.quit()
