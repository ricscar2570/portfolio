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


├── README.md                   
├── src/
│   ├── main.dpr                
│   ├── DocumentiDB.pas        
│   ├── OCRModule.pas          
│   ├── Categorization.pas     
│   ├── ExportModule.pas        
│   └── UI/
│       ├── MainForm.pas        
│       ├── SearchResults.pas   
│       └── Components/         
├── assets/
│   ├── demo_screenshot1.png    
│   ├── demo_screenshot2.png    
└── Documenti.db               

🖥 Screenshots

Extracted OCR text from scanned documents stored in the database, with metadata display.

# Learning Objectives for the Project: **Document Management System (DMS) - OCR & Full-Text Search**

## **Technologies and Tools**
1. **Delphi and FireDAC**
   - Understand the basics of Delphi for desktop application development.
   - Configure and use FireDAC for database operations with SQLite.

2. **SQLite**
   - Create, read, update, and delete records in an SQLite database.
   - Utilize the FTS5 feature to implement optimized Full-Text Search.

3. **OCR with Tesseract**
   - Set up Tesseract OCR in a Delphi project.
   - Integrate the OCR engine to extract text from images and scanners.

4. **Document Export**
   - Automate the generation of `.docx` and PDF files using SynPDF and Microsoft Word.

---

## **Software Design and Architecture**
5. **Modular Architecture**
   - Design a modular application that clearly separates logic, database, user interface, and OCR functionality.
   - Implement a structure that facilitates scalability and debugging.

6. **Category Management**
   - Develop an automatic categorization system based on keyword analysis.

7. **Search Optimization**
   - Apply FTS5 to enable efficient search across archived documents.
   - Implement advanced search filters by category, keyword, and scan date.

---

## **User Experience (UX) and UI Design**
8. **Intuitive User Interface**
   - Create a simple and user-friendly interface for uploading, searching, and exporting documents.
   - Add notifications for OCR errors, export issues, or database connection failures.

9. **Scanner/Image Input Management**
   - Develop functionality for importing documents from scanners or image files.

---

## **Quality Management**
10. **Debugging and Testing**
    - Write unit tests for core functionalities: OCR, search, and export.
    - Monitor database performance during Full-Text Search on large datasets.

---

## **Collaboration and Contribution**
11. **Version Control and Open Source**
    - Manage the project with version control systems (Git).
    - Create comprehensive documentation to encourage contributions from other developers.

---

## **Project Outputs**
12. **Professional Portfolio**
    - Showcase the project as an example of technical skills in Delphi, databases, OCR, and document management.

13. **Scalable Product**
    - Implement features that can be easily extended in the future (e.g., multi-language OCR support).

---

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
