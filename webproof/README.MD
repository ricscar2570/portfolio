# 🌐 WebProof: Automated Web Security Testing Tool

![WebProof Logo](https://img.shields.io/badge/WebProof-Automated%20Security%20Testing-blueviolet?style=for-the-badge)
![Selenium](https://img.shields.io/badge/Selenium-Automation%20Testing-success?style=for-the-badge&logo=selenium)
![Python](https://img.shields.io/badge/Python-3.8+-yellow?style=for-the-badge&logo=python)

**WebProof** è uno strumento automatizzato di testing per la sicurezza dei siti web, progettato per rilevare vulnerabilità comuni con l’uso di **Selenium WebDriver**. Con WebProof, puoi eseguire test di autenticazione, SQL injection, XSS, e molto altro, tutto automaticamente e con report dettagliati sui risultati.

---

## 🚀 Funzionalità Principali

- **Gestione delle Sessioni**: Verifica le impostazioni di sicurezza dei cookie (Secure, HttpOnly).
- **Protezione da Attacchi XSS e SQL Injection**: Identifica vulnerabilità di script injection e SQL injection.
- **Directory Traversal**: Verifica le protezioni contro accessi non autorizzati alle directory.
- **Rate Limiting**: Testa le limitazioni sulle richieste per prevenire attacchi DoS.
- **File Upload e Manomissione dei Parametri URL**: Analizza i rischi relativi ai caricamenti di file e alla manipolazione degli URL.

---

## 📂 Struttura del Progetto

WebProof/
├── main.py                   
├── config.py                 
├── requirements.txt          
├── logs/
│   └── webproof.log          
├── reports/
│   └── report.txt            
├── security_tests/           
│   ├── auth_test.py          
│   ├── brute_force_test.py   
│   ├── csrf_test.py          
│   ├── directory_traversal_test.py  
│   ├── file_upload_test.py   
│   ├── http_header_test.py   
│   ├── parameter_tampering_test.py  
│   ├── rate_limiting_test.py 
│   ├── session_test.py       
│   ├── sql_injection.py      
│   └── xss_test.py           
└── utils/                    
    ├── logger.py             
    └── report.py             

📥 Installazione

Assicurati di avere Python 3.8+ e ChromeDriver (o il driver del browser di tua scelta) installati e nel tuo PATH.

    Clona il repository:

git clone https://github.com/tuo-username/WebProof.git
cd WebProof

Installa i requisiti:

pip install -r requirements.txt

Configura l’URL del sito e il percorso del driver in config.py:

    # config.py
    SITE_URL = "https://example.com"
    DRIVER_PATH = "/path/to/chromedriver"

🛠️ Esecuzione dei Test

Per eseguire tutti i test di sicurezza, esegui lo script principale:

python main.py

I risultati verranno salvati in logs/webproof.log, e verrà generato un report consolidato in reports/report.txt.
🧪 Dettaglio dei Test
Test	Descrizione
Auth Test	Verifica che le pagine protette richiedano l'autenticazione
SQL Injection	Rileva vulnerabilità da SQL injection
XSS Test	Verifica la protezione contro Cross-Site Scripting (XSS)
Session Security	Controlla se i cookie di sessione sono protetti da Secure e HttpOnly
HTTP Header Security	Verifica la presenza di header di sicurezza (es. X-Frame-Options, Content-Security-Policy)
Directory Traversal	Verifica la protezione contro tentativi di accesso a directory non autorizzate
Brute Force	Simula attacchi di forza bruta per verificare il blocco dopo tentativi ripetuti
CSRF Protection	Controlla la presenza di token CSRF nelle richieste POST
File Upload Validation	Testa i limiti di tipo e dimensione dei file caricati
Parameter Tampering	Prova a manipolare i parametri degli URL per verificare l'accesso non autorizzato
Rate Limiting	Verifica il rate limiting per prevenire attacchi DoS
📊 Report dei Risultati

Dopo l'esecuzione, i log dettagliati sono disponibili in logs/webproof.log. Il file reports/report.txt contiene un riepilogo con esito PASS o FAIL per ogni test.
📝 Esempio di Configurazione (config.py)

# config.py
SITE_URL = "https://example.com"
DRIVER_PATH = "/path/to/chromedriver"

📜 Requisiti

Le librerie richieste per WebProof sono specificate nel file requirements.txt:

selenium
requests

Installa tutte le dipendenze con:

pip install -r requirements.txt

📖 License

WebProof è rilasciato sotto la MIT License. Consulta il file LICENSE per maggiori dettagli.
✍️ Autore

Creato con ❤️ da Il Tuo Nome.
