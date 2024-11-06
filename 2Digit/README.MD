🗃 Document Management System (DMS) - OCR & Full-Text Search

A powerful Document Management System built with Delphi and SQLite that digitizes, categorizes, and indexes scanned documents using OCR (Optical Character Recognition) and supports Full-Text Search capabilities. This application is perfect for anyone looking to streamline their document management, with automatic categorization, searchable archives, and PDF generation options.
📋 Table of Contents

    Features
    Getting Started
    Prerequisites
    Installation
    Usage
    Project Structure
    Contributing
    License

✨ Features

    OCR Integration: Converts scanned images into searchable text using Tesseract OCR.
    Automatic Categorization: Uses keyword analysis to assign each document to a predefined category.
    Full-Text Search with FTS5: Fast and efficient search within document contents, supported by SQLite’s Full-Text Search.
    Flexible Document Management: Stores document metadata (filename, category, OCR text, scan date) in an SQLite database.
    Advanced Search Options: Perform quick searches based on keywords, categories, and scan dates.
    PDF and DOCX Export: Generates .docx files from scanned text, with an option to export as PDF.

🚀 Getting Started
Prerequisites

    Delphi 10.3+ with FireDAC for database handling.
    SQLite for local data storage.
    Tesseract OCR library installed (v5.0+ recommended).
    Microsoft Word (for .docx and PDF exports) or SynPDF for PDF-only output.

Installation

    Clone the repository:

    bash

    git clone https://github.com/yourusername/document-management-system.git
    cd document-management-system

    Configure Tesseract OCR:
        Download and install Tesseract OCR from https://github.com/tesseract-ocr/tesseract.
        Place libtesseract-5.dll and the tessdata folder in the project’s root directory.

    Install Dependencies:
        Ensure Delphi’s FireDAC library is enabled for SQLite.
        Add SynPDF if PDF support is needed without Microsoft Word.

    Configure SQLite:
        No additional setup required; the database file Documenti.db will be created automatically on the first run.

Usage

    Run the Application from Delphi IDE.
    Upload or Scan a Document:
        Load an image or connect a scanner.
        The OCR engine will extract text and store it in the database.
    Automatic Categorization:
        The app will assign a category based on keywords found in the text.
    Search Your Documents:
        Use Full-Text Search to find documents by content, keywords, or categories.
    Export to PDF or DOCX:
        Choose to save the document as .docx or .pdf for easy sharing.

Project Structure

plaintext


🛠 Core Functionalities
1. OCR and Document Insertion

The OCRModule.pas extracts text from scanned images using Tesseract OCR and inserts both metadata and OCR text into the SQLite database.
2. Automatic Categorization

Categorization.pas analyzes text to detect keywords and automatically assigns each document to a relevant category.
3. Full-Text Search

Using the DocumentiFTS virtual table in SQLite, full-text searches are executed in DocumentiDB.pas with lightning speed, even on large document collections.
4. Export to DOCX and PDF

Easily save documents as .docx files using Microsoft Word automation, with a secondary option to export directly as .pdf using SynPDF if Word is not available.
🖥 Screenshots

OCR extracts text from scanned documents, stores it in the database, and displays metadata.

Advanced search and categorization allow for rapid access to specific documents based on keywords.
🤝 Contributing

Contributions are welcome! To get started:

    Fork this repository.
    Create a new branch with your feature or fix.
    Commit your changes.
    Submit a pull request.

For major changes, please open an issue first to discuss your ideas.
📜 License

This project is licensed under the MIT License. See LICENSE for more information.
📬 Contact

Created by Your Name - feel free to reach out!
