# security_tests/csrf_test.py

# Test for Cross-Site Request Forgery (CSRF) protection



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_csrf_protection():

    \"\"\"

    Verifies the presence of CSRF tokens in sensitive forms.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/profile")  # Example of a protected page



    csrf_token = driver.execute_script(

        "return document.querySelector('input[name=\"csrf_token\"]') ? true : false"

    )



    if csrf_token:

        log_result("PASS: CSRF protection is enabled.")

    else:

        log_result("FAIL: CSRF protection is missing.")



    driver.quit()
