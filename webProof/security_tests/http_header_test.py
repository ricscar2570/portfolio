# security_tests/http_header_test.py

# Test for HTTP header security configurations



import requests

from config import SITE_URL

from utils.logger import log_result



def test_http_headers():

    \"\"\"

    Checks for the presence of security-related HTTP headers.

    \"\"\"

    response = requests.get(SITE_URL)

    headers = response.headers



    if headers.get("X-Frame-Options") == "DENY":

        log_result("PASS: X-Frame-Options is enabled.")

    else:

        log_result("FAIL: X-Frame-Options is missing.")



    if "Content-Security-Policy" in headers:

        log_result("PASS: Content-Security-Policy is enabled.")

    else:

        log_result("FAIL: Content-Security-Policy is missing.")



    if headers.get("X-XSS-Protection") == "1; mode=block":

        log_result("PASS: X-XSS-Protection is enabled.")

    else:

        log_result("FAIL: X-XSS-Protection is missing.")
