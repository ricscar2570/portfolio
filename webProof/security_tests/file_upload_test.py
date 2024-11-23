# security_tests/file_upload_test.py

# Test for secure file upload handling



from selenium import webdriver

from config import SITE_URL, DRIVER_PATH

from utils.logger import log_result



def test_file_upload():

    \"\"\"

    Verifies that only allowed file types can be uploaded.

    \"\"\"

    driver = webdriver.Chrome(DRIVER_PATH)

    driver.get(SITE_URL + "/upload")



    file_input = driver.find_element("name", "file")

    file_input.send_keys("/path/to/malicious_script.php")  # Example of an invalid file

    driver.find_element("name", "submit").click()



    if "Invalid file type" in driver.page_source:

        log_result("PASS: File upload restrictions are in place.")

    else:

        log_result("FAIL: File upload restrictions are missing.")



    driver.quit()
