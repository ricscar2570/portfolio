# Earthquake Signal Detector

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Earthquake Signal Detector è un progetto che utilizza dati satellitari e algoritmi di Machine Learning per rilevare anomalie magnetiche che potrebbero essere correlate alla fase preparatoria di alcuni terremoti. L'obiettivo è migliorare la comprensione dei segnali pre-terremoto e supportare la ricerca sui precursori sismici.

---

## **Caratteristiche Principali**
- **Sincronizzazione Dati:** Unisce misurazioni magnetiche satellitari e cataloghi di terremoti in un intervallo di 10 giorni prima degli eventi.
- **Analisi delle Anomalie:** Rileva anomalie nei dati magnetici utilizzando tecniche statistiche avanzate.
- **Modello Predittivo:** Addestra un modello di Machine Learning per identificare potenziali correlazioni tra le anomalie e i terremoti.
- **Dashboard Interattiva:** Visualizza i dati sincronizzati e le anomalie su una mappa interattiva.
- **Notifiche di Anomalie:** Invio di notifiche email per segnalare anomalie rilevate.

---

## **Requisiti di Sistema**
- **Python 3.8 o superiore**
- Librerie Python necessarie:
 
  pip install pandas numpy matplotlib scikit-learn requests geopandas folium streamlit

    Credenziali Email (opzionali per notifiche):
        Configurare un account email SMTP (es. Gmail).


## **Come Eseguire il Progetto**
1. Clona il Repository

git clone https://github.com/<tuo-username>/earthquake-signal-detector.git
cd earthquake-signal-detector

2. Prepara l'Ambiente

Crea e attiva un ambiente virtuale:

python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

3. Esegui la Pipeline Principale

Lancia lo script principale per eseguire tutte le fasi del progetto:

python src/main.py

4. Avvia la Dashboard

Visualizza i risultati e le anomalie su una mappa interattiva:

streamlit run dashboard/app.py

Risultati e Output

    Dataset Sincronizzati: /data/synchronized_data.csv
    Dati con Anomalie: /data/anomaly_data.csv
    Valutazione Modello: /data/model_evaluation.csv
    Dashboard Interattiva: Visualizza i dati su una mappa geospaziale.

Tecnologie Utilizzate

    Python: Linguaggio di programmazione principale.
    Pandas, NumPy: Analisi e manipolazione dei dati.
    Scikit-learn: Addestramento e valutazione del modello predittivo.
    Streamlit & Folium: Creazione di dashboard interattive.
    SMTP: Invio notifiche via email.

## Prossimi Sviluppi

    Integrare notifiche tramite Telegram o altri servizi.
    Migliorare la predizione del modello tramite ottimizzazione degli iperparametri.
    Estendere il dataset per coprire regioni geografiche più ampie.

## Contributi

Contributi, bug report e suggerimenti sono benvenuti! Crea una issue o invia una pull request su GitHub.
Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file LICENSE per maggiori dettagli.
Contatti

    Email: ricscar@gmail.com


