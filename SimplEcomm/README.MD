# SimplEcomm

SimplEcomm è una piattaforma di e-commerce completa e user-friendly, progettata per offrire un'esperienza d'acquisto fluida sia per gli utenti che per gli amministratori. Gli utenti possono esplorare i prodotti, aggiungerli al carrello e completare gli ordini, mentre gli amministratori possono gestire l'intero sistema, inclusi prodotti, ordini e utenti.

## 🚀 Funzionalità Principali

### Per gli utenti:
- Navigazione intuitiva e ricerca avanzata di prodotti.
- Aggiunta di prodotti al carrello e gestione del carrello.
- Completamento degli ordini in pochi passaggi.
- Creazione e gestione del profilo personale.

### Per gli amministratori:
- Aggiunta, modifica e rimozione dei prodotti.
- Visualizzazione degli ordini effettuati dagli utenti.
- Gestione degli account degli utenti.

---

## 🛠️ Tecnologie Utilizzate

### **Front-end**
- **React.js**: Costruzione dell'interfaccia utente.
- **Redux**: Gestione dello stato globale per una navigazione fluida.

### **Back-end**
- **Node.js**: Runtime server-side.
- **Express.js**: Creazione e gestione di API RESTful.

### **Database**
- **MongoDB**: Archiviazione dei dati per prodotti, utenti e ordini.

### **Autenticazione**
- **JWT (JSON Web Tokens)**: Sicurezza per l'accesso autenticato.

### **CSS Framework**
- **Bootstrap** e **Tailwind CSS**: Per un design responsivo ed elegante.

### **Deployment**
- **Heroku**: Hosting del server back-end.
- **Netlify**: Hosting del front-end per una distribuzione rapida.

---

## 🖥️ Configurazione Locale

### Prerequisiti
- **Node.js** (>= 16.x)
- **MongoDB** (locale o in cloud)
- **npm** o **yarn** per la gestione delle dipendenze.

### Passaggi
1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-utente/SimplEcomm.git
   cd SimplEcomm

    Configura le variabili d'ambiente:
        Crea un file .env nella directory principale con:

    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret

Installa le dipendenze:

    Per il back-end:

cd server
npm install

Per il front-end:

    cd client
    npm install

Avvia il server di sviluppo:

    Back-end:

cd server
npm start

Front-end:

        cd client
        npm start

    Accedi all'app su:
        Front-end: http://localhost:3000
        Back-end: http://localhost:5000

🌐 Deployment
Front-end (Netlify):

    Collega il repository a Netlify.
    Configura i comandi di build:
        Build command: npm run build
        Publish directory: client/build

Back-end (Heroku):

    Collega il repository a Heroku.
    Configura le variabili d'ambiente:
        MONGO_URI
        JWT_SECRET

🔥 Contributi

Contributi e suggerimenti sono benvenuti! Sentiti libero di aprire una Issue o inviare una Pull Request.
📜 Licenza

Questo progetto è rilasciato sotto la licenza MIT. Consulta il file LICENSE per ulteriori dettagli.
👥 Contatti

Per domande o collaborazioni:

    Email: tuo-email@example.com
    GitHub: tuo-utente
