# 🗂 Document Management System (DMS) - OCR & Full-Text Search

A robust **Document Management System** built in **Delphi** with **SQLite** for digitizing, categorizing, and indexing scanned documents. Leveraging **OCR** for text extraction and **Full-Text Search** capabilities, this app provides a powerful solution for organizing, searching, and exporting documents.

## 📋 Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features
- **OCR Integration**: Converts scanned images to searchable text using Tesseract OCR.
- **Automatic Categorization**: Assigns documents to categories based on keyword analysis.
- **Full-Text Search with FTS5**: Quick, advanced text searches across all stored documents.
- **Efficient Document Storage**: Stores OCR text and metadata in an SQLite database.
- **Advanced Search Options**: Search by keywords, category, or scan date.
- **Export Options**: Generate `.docx` files from scanned text with optional PDF export.

## 🚀 Getting Started

### Prerequisites
- **Delphi 10.3+** with FireDAC for database operations.
- **SQLite** as the database.
- **Tesseract OCR** installed (recommended v5.0+).
- **Microsoft Word** (for `.docx` export) or **SynPDF** if only PDF export is needed.

    Configure Tesseract OCR:
        Install Tesseract OCR from https://github.com/tesseract-ocr/tesseract.
        Place libtesseract-5.dll and the tessdata folder in the project root directory.

    Install Dependencies:
        Ensure FireDAC is enabled in Delphi for SQLite.
        Install SynPDF if PDF support is desired without using Microsoft Word.

    Configure SQLite:
        No additional setup needed; the database file Documenti.db is created automatically on first run.

Usage

    Run the Application from the Delphi IDE.
    Upload or Scan a Document:
        Import an image or connect a scanner.
        The OCR engine extracts text and stores it in the database.
    Automatic Categorization:
        The app assigns a category based on detected keywords in the text.
    Search Documents:
        Perform Full-Text Search for quick document retrieval based on content.
    Export to PDF or DOCX:
        Save as .docx or .pdf for easy sharing and archiving.

🔍 Project Structure


├── README.md                   # Project documentation
├── src/
│   ├── main.dpr                # Main Delphi project file
│   ├── DocumentiDB.pas         # Database and document management
│   ├── OCRModule.pas           # OCR and Tesseract integration
│   ├── Categorization.pas      # Automatic categorization logic
│   ├── ExportModule.pas        # Export functionality for DOCX and PDF
│   └── UI/
│       ├── MainForm.pas        # Main user interface
│       ├── SearchResults.pas   # Search results UI
│       └── Components/         # Custom components
├── assets/
│   ├── demo_screenshot1.png    # App screenshot example
│   ├── demo_screenshot2.png    # Search functionality demo
└── Documenti.db                # SQLite database file (auto-generated)

🖥 Screenshots

Extracted OCR text from scanned documents stored in the database, with metadata display.

Advanced search and categorization, allowing fast access to specific documents.
🤝 Contributing

Contributions are highly appreciated! To contribute:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Commit your changes.
    Submit a pull request.

For significant changes, please open an issue to discuss your ideas.
📜 License

This project is licensed under the MIT License. See LICENSE for details.
📬 Contact

Created by Riccardo Scaringi - feel free to reach out!

This Document Management System demonstrates efficient document processing and organization, perfect for enhancing your portfolio. Enjoy organizing your documents! 😊
