# That'sAllCloud

**That'sAllCloud** è una piattaforma di gestione delle risorse cloud che consente agli utenti di monitorare e gestire facilmente le risorse su AWS, Azure e Google Cloud Platform (GCP). Il progetto include funzionalità di autenticazione tramite Google OAuth, monitoring in tempo reale tramite Prometheus e Grafana, e deployment scalabile su Kubernetes.

## Funzionalità

- **Gestione delle risorse**: Monitoraggio e gestione di risorse cloud distribuite.
- **Autenticazione Google OAuth 2.0**: Accesso sicuro tramite il proprio account Google.
- **Monitoring e Metriche**: Raccoglie e visualizza metriche di utilizzo delle risorse tramite Prometheus e Grafana.
- **Scalabilità con Kubernetes**: Deployment scalabile con replica automatica delle istanze.
- **Containerizzazione con Docker**: Immagini Docker ottimizzate per il backend.

## Tecnologie Utilizzate

- **Frontend**: React.js
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Autenticazione**: Passport.js con Google OAuth 2.0
- **Monitoring**: Prometheus e Grafana
- **Deployment**: Docker e Kubernetes

## Configurazione del Progetto

### 1. Clonazione del Repository

bash
git clone https://github.com/your-username/ThatsAllCloud.git
cd ThatsAllCloud

### 2. Installazione delle Dipendenze

Nella directory del backend:

npm install

### 3. Configurazione delle Variabili d’Ambiente

Crea un file .env nella cartella principale del progetto e aggiungi le seguenti variabili d’ambiente:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

Sostituisci your_mongodb_connection_string, your_google_client_id, e your_google_client_secret con i tuoi valori.
### 4. Avvio dell'Applicazione in Locale

node server.js

L’app sarà disponibile su http://localhost:5000.
Deployment
Docker

    Costruzione dell’Immagine Docker:

docker build -t thatsallcloud-backend:latest .

Esecuzione del Container:

    docker run -p 5000:5000 thatsallcloud-backend:latest

Kubernetes

    Assicurati di avere un cluster Kubernetes attivo e kubectl configurato.

    Applica la configurazione Kubernetes:

kubectl apply -f k8s/deployment.yaml

Verifica lo stato dei pod e del servizio:

    kubectl get pods
    kubectl get services

Monitoring con Prometheus e Grafana
Configurazione di Prometheus

    Crea una cartella prometheus e aggiungi il file prometheus.yml con la configurazione per raccogliere metriche da localhost:5000.

# prometheus/prometheus.yml

global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['localhost:5000']

Esegui Prometheus:

    docker run -d -p 9090:9090 -v $(pwd)/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

    Prometheus sarà accessibile su http://localhost:9090.

Configurazione di Grafana

    Esegui Grafana:

    docker run -d -p 3000:3000 grafana/grafana

    Accedi a Grafana su http://localhost:3000 (username e password predefiniti: admin).

    Aggiungi Prometheus come fonte dati in Grafana:
        Vai su Configuration > Data Sources > Add data source.
        Seleziona Prometheus e inserisci http://localhost:9090 come URL.

    Crea una dashboard e aggiungi query come node_cpu_seconds_total per monitorare l'utilizzo della CPU.



### Come Usare l'Applicazione

    Autenticazione: L’applicazione offre autenticazione tramite Google OAuth. Visita http://localhost:5000/auth/google per autenticarti.
    Gestione delle Risorse: Una volta autenticato, accedi a http://localhost:5000/api/resources per visualizzare le risorse.
    Monitoring: Utilizza Grafana per monitorare le metriche del backend.

### Contribuire

Se vuoi contribuire al progetto, sentiti libero di fare un fork del repository, creare un branch e inviare una pull request.

git checkout -b feature/your-feature-name

### Licenza

Questo progetto è rilasciato sotto la MIT License.

Grazie per aver esplorato That'sAllCloud! Speriamo che trovi utile questa piattaforma per la gestione delle risorse cloud.Una piattaforma di gestione delle risorse cloud che consente agli utenti di gestire e monitorare le loro risorse su AWS (Amazon Web Services), Azure e Google Cloud Platform (GCP). La piattaforma offre funzionalità come la creazione e gestione delle istanze, la visualizzazione delle metriche di utilizzo, l'ottimizzazione dei costi e la gestione delle autorizzazioni.

### Tecnologie Utilizzate:
    Frontend: React.js
    Backend: Node.js, Express.js
    Database: MongoDB
    Autenticazione: OAuth 2.0
    Cloud Providers: AWS, Azure, GCP
    Deployment: Docker, Kubernetes, Terraform
    Monitoring: Prometheus, Grafana
