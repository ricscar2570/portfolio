# security_tests/directory_traversal_test.py

# Test for directory traversal vulnerabilities



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_directory_traversal():

    \"\"\"

    Tests for directory traversal by attempting to access restricted files.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    traversal_url = SITE_URL + "/../../etc/passwd"  # Example payload

    driver.get(traversal_url)



    if "Permission denied" in driver.page_source or "404" in driver.page_source:

        log_result("PASS: Directory traversal is blocked.")

    else:

        log_result("FAIL: Directory traversal is possible.")



    driver.quit()
