from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_sql_injection(site_url):
    """
    Attempts an SQL injection to verify if the application is vulnerable.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/wp-admin/")

    payload = "' OR '1'='1"
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