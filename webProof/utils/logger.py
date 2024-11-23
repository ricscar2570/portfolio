# utils/logger.py
# Logging utility for WebProof to record test results

import logging
import os

# Ensure the logs directory exists
os.makedirs("logs", exist_ok=True)

# Configure the logging format and file location
logging.basicConfig(
    filename='logs/webproof.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def log_result(message):
    """
    Logs a message to the webproof.log file.
    
    Args:
        message (str): The message to be logged.
    """
    logging.info(message)
