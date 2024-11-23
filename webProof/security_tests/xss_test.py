# security_tests/xss_test.py

# Test for Cross-Site Scripting (XSS) vulnerabilities



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_xss():

    \"\"\"

    Tests for XSS vulnerabilities by injecting a script payload.

    \"\"\"

    payload = "<script>alert('XSS')</script>"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/comment-section")  # Example of an input field



    comment_input = driver.find_element("name", "comment")

    comment_input.send_keys(payload)

    driver.find_element("name", "submit").click()



    if payload in driver.page_source:

        log_result("FAIL: XSS vulnerability is present.")

    else:

        log_result("PASS: XSS vulnerability is not present.")



    driver.quit()
