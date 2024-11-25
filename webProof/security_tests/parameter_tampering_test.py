from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_parameter_tampering(site_url):
    """
    Tests for unauthorized access by manipulating URL parameters.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/account?id=1")

    driver.get(f"{site_url}/account?id=2")

    if "Access denied" in driver.page_source:
        log_result("PASS: Parameter tampering is blocked.")
    else:
        log_result("FAIL: Parameter tampering is allowed.")

    driver.quit()