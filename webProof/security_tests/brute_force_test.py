#from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result
import time

def test_brute_force(site_url):
    """
    Simulates brute force login attempts to verify protections.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/login")

    for attempt in range(5):
        username_input = driver.find_element("name", "username")
        password_input = driver.find_element("name", "password")
        username_input.clear()
        password_input.clear()
        username_input.send_keys("admin")
        password_input.send_keys(f"wrong_password_{attempt}")
        driver.find_element("name", "login").click()
        time.sleep(1)

    if "Account locked" in driver.page_source or "captcha" in driver.page_source:
        log_result("PASS: Brute force protection is active.")
    else:
        log_result("FAIL: Brute force protection is not active.")

    driver.quit()

