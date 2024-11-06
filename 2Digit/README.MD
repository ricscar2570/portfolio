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

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/document-management-system.git
   cd document-management-system
