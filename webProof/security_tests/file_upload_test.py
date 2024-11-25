from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from utils.logger import log_result
import os

def test_file_upload(site_url):
    """
    Verifies that only allowed file types can be uploaded.
    """
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(f"{site_url}/upload")

    # Creazione di un file di test temporaneo
    test_file_path = "test_script.php"
    with open(test_file_path, "w") as test_file:
        test_file.write("<?php echo 'Malicious script'; ?>")

    try:
        file_input = driver.find_element("name", "file")
        file_input.send_keys(os.path.abspath(test_file_path))
        driver.find_element("name", "submit").click()

        if "Invalid file type" in driver.page_source or "Upload failed" in driver.page_source:
            log_result("PASS: File upload restrictions are in place.")
        else:
            log_result("FAIL: File upload restrictions are missing.")
    finally:
        # Rimuovi il file temporaneo
        if os.path.exists(test_file_path):
            os.remove(test_file_path)
        driver.quit()