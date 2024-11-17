**Happy Customer!** è un sistema di gestione CRM progettato per aiutare le aziende a migliorare le interazioni con i clienti, ottimizzare i processi di vendita e supporto e automatizzare le attività di marketing. Con un’interfaccia semplice e intuitiva, **Happy Customer!** offre strumenti efficaci per gestire clienti, opportunità di vendita e ticket di supporto.

## 🚀 Caratteristiche Principali

- **Gestione dei contatti**: visualizza e aggiorna facilmente i dettagli dei clienti.
- **Gestione delle opportunità di vendita**: monitora lo stato delle opportunità di vendita con una pipeline visiva.
- **Automazione del marketing**: crea campagne di marketing e invia email automatiche ai clienti.
- **Gestione dei ticket di supporto**: sistema per rispondere prontamente alle richieste e migliorare il servizio clienti.
- **Reportistica e dashboard**: visualizza metriche chiave e analisi delle performance di vendita e marketing.
- **Autenticazione sicura**: gestione sicura degli accessi con JWT (JSON Web Tokens).
- **UI moderna e reattiva**: interfaccia utente responsive sviluppata con Material-UI e Redux.


## 🛠️ Tecnologie Utilizzate

- **Frontend**: React, Redux, Redux Toolkit, React Router, Material-UI
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Autenticazione**: JSON Web Tokens (JWT)
- **Sicurezza**: Helmet, Express Rate Limit
- **Deployment**: Docker, Heroku, Netlify

---

## 🚀 Installazione e Avvio

### Prerequisiti

Assicurati di avere installati i seguenti strumenti:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opzionale ma consigliato)

### Configurazione Variabili di Ambiente

Crea un file `.env` nella cartella `server` e aggiungi le seguenti variabili:
```plaintext
MONGO_URI=mongodb://localhost:27017/happy-customer
JWT_SECRET=your_jwt_secret

1. Clona il repository

git clone https://github.com/tuo-username/happy-customer-crm.git
cd happy-customer-crm

2. Installa le dipendenze
Backend

cd server
npm install

Frontend

cd ../client
npm install

3. Avvia l'applicazione
Con Docker Compose (consigliato)

docker-compose up

Questo comando avvierà sia il backend sia MongoDB in container Docker. Il server sarà disponibile su http://localhost:5000.
Senza Docker

Se non utilizzi Docker, segui questi passi:

    Avvia MongoDB localmente.
    Esegui il backend:

cd server
npm start

Avvia il frontend:

    cd ../client
    npm start

Il frontend sarà disponibile su http://localhost:3000.
📋 API Endpoints

L'API è strutturata per gestire autenticazione, clienti e opportunità di vendita.
Autenticazione

    POST /api/auth/register: Registra un nuovo utente.
    POST /api/auth/login: Autentica un utente e restituisce un token JWT.

Clienti

    GET /api/customers: Ottiene tutti i clienti per l'utente autenticato.
    POST /api/customers: Crea un nuovo cliente.
    PUT /api/customers/:id: Modifica i dati di un cliente.
    DELETE /api/customers/:id: Elimina un cliente.

🧪 Test e CI/CD
Docker e Test

Il progetto include configurazioni per Docker. Utilizzando docker-compose up, il server e MongoDB vengono eseguiti in container isolati.
GitHub Actions

Nel repository è configurata una pipeline CI/CD con GitHub Actions per test e deployment. Ogni push alla branch main avvia il workflow di deploy su Heroku (configurabile nel file .github/workflows/deploy.yml).
📈 Funzionalità Avanzate

    Dashboard e Reportistica: Visualizzazione di KPI e metriche di vendita tramite grafici interattivi, utilizzando librerie come Chart.js e Recharts.
    Automazione del Marketing: Invio automatico di email ai clienti in base a segmentazioni (ad es. nuovi clienti, clienti inattivi).
    Protezione delle API: Rate limiting e middleware di sicurezza con helmet e express-rate-limit.

🐳 Deployment

L'applicazione è pronta per il deployment su Heroku e Netlify. Segui i passaggi nella configurazione docker-compose per distribuire facilmente sia il backend sia MongoDB.
Heroku e Netlify

    Assicurati di avere Heroku CLI e Netlify CLI installati.
    Configura le variabili di ambiente su Heroku per MongoDB e JWT.
    Deploya il frontend su Netlify per una distribuzione ottimale e scalabile.

🤝 Contribuire

Le contribuzioni sono benvenute! Se vuoi aggiungere nuove funzionalità o migliorare il codice esistente, sentiti libero di fare una pull request.
📄 Licenza

Distribuito sotto licenza MIT. Vedi LICENSE per più dettagli.
📝 Autore

Creato da Riccardo Scaringi

Grazie per aver utilizzato Happy Customer!. Per dubbi o suggerimenti, non esitare a contattarmi!n i clienti, monitorare le vendite, automatizzare i processi di marketing e migliorare il servizio clienti. Le funzionalità includono la gestione dei contatti, la gestione delle opportunità di vendita, l'automazione del marketing, la gestione dei ticket di supporto e la creazione di report.

Tecnologie Utilizzate:
    Frontend: React.js, Redux
    Backend: Node.js, Express.js
    Database: MongoDB
    Autenticazione: JWT (JSON Web Tokens)
    Deployment: Heroku, Netlify
    CSS Framework: Bootstrap, Tailwind CSS
