import sys
from security_tests.auth_test import test_auth
from security_tests.sql_injection import test_sql_injection
from security_tests.xss_test import test_xss
from security_tests.session_test import test_session_security
from security_tests.http_header_test import test_http_headers
from security_tests.directory_traversal_test import test_directory_traversal
from security_tests.brute_force_test import test_brute_force
from security_tests.csrf_test import test_csrf_protection
from security_tests.file_upload_test import test_file_upload
from security_tests.parameter_tampering_test import test_parameter_tampering
from security_tests.rate_limiting_test import test_rate_limiting
from utils.report import generate_report


def run_all_tests(site_url):
    """
    Executes all security tests sequentially and generates a final report.
    """
    print(f"Starting WebProof security tests for {site_url}...\n")

    # Pass the site_url to each test function
    test_auth(site_url)
    #test_sql_injection(site_url)
    test_xss(site_url)
    test_session_security(site_url)
    test_http_headers(site_url)
    test_directory_traversal(site_url)
    test_brute_force(site_url)
    test_csrf_protection(site_url)
    test_file_upload(site_url)
    test_parameter_tampering(site_url)
    test_rate_limiting(site_url)

    # Generate a consolidated report
    generate_report()
    print("\nAll tests completed. Report has been generated.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python main.py <SITE_URL>")
        site_url = input("Enter the URL of the site to test: ").strip()
    else:
        site_url = sys.argv[1].strip()

    run_all_tests(site_url)
