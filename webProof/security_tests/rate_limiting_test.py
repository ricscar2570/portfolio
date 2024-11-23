# security_tests/rate_limiting_test.py

# Test for rate limiting to prevent DoS attacks



import requests

from config import SITE_URL

from utils.logger import log_result



def test_rate_limiting():

    \"\"\"

    Verifies that the server limits the number of requests in a given timeframe.

    \"\"\"

    endpoint = SITE_URL + "/api/endpoint"

    status_codes = []



    for i in range(10):  # Send multiple rapid requests

        response = requests.get(endpoint)

        status_codes.append(response.status_code)



    if 429 in status_codes:  # 429 Too Many Requests

        log_result("PASS: Rate limiting is enabled.")

    else:

        log_result("FAIL: Rate limiting is not enabled.")
