# security_tests/sql_injection.py

# Test for SQL injection vulnerabilities



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_sql_injection():

    \"\"\"

    Attempts an SQL injection to verify if the application is vulnerable.

    \"\"\"

    payload = "' OR '1'='1"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/login")



    username_input = driver.find_element("name", "username")

    password_input = driver.find_element("name", "password")



    username_input.send_keys(payload)

    password_input.send_keys(payload)

    driver.find_element("name", "login").click()



    if "Welcome" in driver.page_source:

        log_result("FAIL: SQL injection is successful.")

    else:

        log_result("PASS: SQL injection is blocked.")



    driver.quit()
