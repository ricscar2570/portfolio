# 🌍 Disaster Response Pipeline

The **Disaster Response Pipeline** is a scalable, and real-time platform designed to collect, process, analyze, and visualize critical data during natural disasters. With state-of-the-art machine learning models and interactive visualizations, this platform empowers emergency responders to make data-driven decisions quickly.

---

## 🚀 Key Features

- **Real-Time Data Collection**: Integrates multiple sources like Twitter, weather APIs, seismic data, and IoT sensors (via MQTT).
- **Advanced Text Classification**: Uses BERT-based NLP models to analyze and categorize disaster-related messages.
- **Impact Prediction**: Predicts disaster severity (e.g., flood risk) based on structured and unstructured data.
- **Interactive Dashboard**: Visualizes data on dynamic maps, charts, and tables for easy exploration.
- **Scalable Deployment**: Fully containerized with Docker and orchestrated with Kubernetes for scalability and reliability.

---

## 📚 Table of Contents

1. [Technologies Used](#technologies-used)
2. [Architecture Overview](#architecture-overview)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [How It Works](#how-it-works)
7. [Contributing](#contributing)
8. [License](#license)

---

## ⚙️ Technologies Used

### **Languages**
- Python, JavaScript

### **Machine Learning**
- TensorFlow/Keras
- Hugging Face Transformers (BERT)
- Scikit-learn

### **Data Processing**
- Pandas, GeoPandas, Shapely, NLTK

### **Backend**
- FastAPI (REST API)
- Uvicorn (ASGI server)

### **Frontend**
- Streamlit (interactive dashboard)
- Leaflet.js (maps)

### **Databases**
- PostgreSQL (structured data)
- MongoDB (unstructured IoT data)

### **Integration**
- MQTT (IoT sensor data)

### **Deployment**
- Docker (containerization)
- Kubernetes (orchestration)

---

## 📐 Architecture Overview

The platform follows a modular architecture for scalability and flexibility:

1. **Data Ingestion**
   - Collects data from:
     - **Twitter API** (text-based messages)
     - **OpenWeatherMap API** (weather data)
     - **USGS API** (seismic data)
     - **MQTT sensors** (IoT feeds)

2. **Data Processing**
   - **Text Cleaning**: Prepares tweets for classification.
   - **Geospatial Processing**: Maps disaster locations.
   - **Time Series Analysis**: Tracks trends over time.

3. **Analysis & Predictions**
   - **NLP Models**: Classify disaster types (e.g., "flood", "earthquake").
   - **Impact Predictor**: Calculates disaster severity.

4. **Visualization**
   - **Streamlit Dashboard**: Displays events, maps, and trends.

5. **Scalable Deployment**
   - Orchestrated with **Docker** and **Kubernetes** for high availability.

---

## 🛠️ Installation

### Prerequisites
- Docker & Docker Compose
- Kubernetes (optional for advanced deployment)
- Python 3.9+

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DisasterResponsePipeline.git
   cd DisasterResponsePipeline

    Build Docker images and start containers:

    docker-compose up --build

    Access the services:
        Backend API: http://localhost:8000
        Frontend Dashboard: http://localhost:3000

🖥️ Usage
Running Locally

    Install dependencies:

pip install -r requirements.txt

Start the backend:

uvicorn main:app --reload

Start the dashboard:

    streamlit run streamlit_dashboard.py

Kubernetes Deployment

    Apply Kubernetes manifests:

    kubectl apply -f backend-deployment.yaml
    kubectl apply -f frontend-deployment.yaml
    kubectl apply -f postgres-deployment.yaml
    kubectl apply -f mqtt-deployment.yaml

📡 API Endpoints
Classification Endpoint

    POST /classification
    Input: { "text": "Flood in Venice" }
    Output: { "text": "Flood in Venice", "prediction": [0.2, 0.8] }

Prediction Endpoint

    POST /prediction
    Input: { "type": "flood", "details": { "water_level": 3.2 } }
    Output: { "predicted_impact": 8.7 }

🔍 How It Works
1. Real-Time Data Collection

    Collects data from APIs, MQTT sensors, and other sources.

2. Data Analysis

    Cleans, processes, and analyzes data using:
        NLP for text classification.
        Mathematical models for impact prediction.

3. Visualization

    Displays results interactively on a dashboard:
        Events plotted on maps.
        Time series trends.
        Disaster impact scores.

🤝 Contributing

We welcome contributions to improve the Disaster Response Pipeline! Please:

    Fork the repository.
    Create a new branch (feature/your-feature).
    Submit a pull request with detailed changes.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
💡 Future Enhancements

    Advanced AI Models: Integrate GPT-based models for deeper text understanding.
    Edge Computing: Process IoT data closer to the source.
    Alert System: Automate alerts to authorities and users.

Created by:

Riccardo Scaringi • https://github.com/ricscar2570/portfolio/

