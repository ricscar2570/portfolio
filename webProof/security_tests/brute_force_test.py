## security_tests/brute_force_test.py

# Test for brute force protection



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result

import time



def test_brute_force():

    \"\"\"

    Simulates brute force login attempts to verify if protections are in place.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/login")



    for attempt in range(5):  # Simulate multiple login attempts

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
