# utils/report.py
# Utility to generate a consolidated report of WebProof test results

import os

def generate_report():
    """
    Reads the log file and generates a consolidated report in the reports directory.
    """
    # Ensure the reports directory exists
    os.makedirs("reports", exist_ok=True)
    
    log_file_path = 'logs/webproof.log'
    report_file_path = 'reports/report.txt'

    try:
        # Read the content of the log file
        with open(log_file_path, 'r') as log_file:
            content = log_file.read()
        
        # Write the consolidated report
        with open(report_file_path, 'w') as report_file:
            report_file.write("=== WebProof Security Report ===\n\n")
            report_file.write(content)
        
        print(f"Report generated: {report_file_path}")
    except FileNotFoundError:
        print("Log file not found. Ensure tests have been executed before generating a report.")
