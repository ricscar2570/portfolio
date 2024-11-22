# main.py
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

def run_all_tests():
    print("Starting WebProof security tests...")
    test_auth()
    test_sql_injection()
    test_xss()
    test_session_security()
    test_http_headers()
    test_directory_traversal()
    test_brute_force()
    test_csrf_protection()
    test_file_upload()
    test_parameter_tampering()
    test_rate_limiting()
    generate_report()
    print("All tests completed. Report generated.")

if __name__ == "__main__":
    run_all_tests()
