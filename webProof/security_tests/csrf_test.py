from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result

def test_csrf_protection(site_url):
    """
    Verifies the presence of CSRF tokens in sensitive forms.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/profile")

    csrf_token = driver.execute_script(
        "return document.querySelector('input[name=\"csrf_token\"]') ? true : false"
    )

    if csrf_token:
        log_result("PASS: CSRF protection is enabled.")
    else:
        log_result("FAIL: CSRF protection is missing.")

    driver.quit()