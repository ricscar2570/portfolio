from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_directory_traversal(site_url):
    """
    Tests for directory traversal by attempting to access restricted files.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    traversal_url = f"{site_url}/../../etc/passwd"
    driver.get(traversal_url)

    if "Permission denied" in driver.page_source or "404" in driver.page_source:
        log_result("PASS: Directory traversal is blocked.")
    else:
        log_result("FAIL: Directory traversal is possible.")

    driver.quit()