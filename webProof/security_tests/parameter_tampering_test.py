# security_tests/parameter_tampering_test.py

# Test for URL parameter tampering vulnerabilities



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_parameter_tampering():

    \"\"\"

    Tests for unauthorized access by manipulating URL parameters.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/account?id=1")



    # Attempt to access another account by changing the parameter

    driver.get(SITE_URL + "/account?id=2")



    if "Access denied" in driver.page_source:

        log_result("PASS: Parameter tampering is blocked.")

    else:

        log_result("FAIL: Parameter tampering is allowed.")



    driver.quit()
