# 🎲 Analisi dei Giochi da Tavolo su BoardGameGeek 🎲

![BoardGameGeek](https://upload.wikimedia.org/wikipedia/commons/8/89/Boardgamegeek_logo.png)

Questo progetto esplora i dati di BoardGameGeek per analizzare i fattori che contribuiscono alla popolarità dei giochi da tavolo. L'obiettivo principale è comprendere come variabili come categoria, complessità, numero di giocatori e altro influenzino il rating dei giochi e prevedere quali giochi potrebbero avere successo.

## 📈 Contenuti

1. [Introduzione](#introduzione)
2. [Dataset](#dataset)
3. [Analisi dei Dati](#analisi-dei-dati)
4. [Modello di Classificazione](#modello-di-classificazione)
5. [Visualizzazione Interattiva](#visualizzazione-interattiva)
6. [Modelli di Previsione](#modelli-di-previsione)
7. [Risultati](#risultati)
8. [Conclusioni](#conclusioni)

## 📘 Introduzione

Questa analisi si concentra sulla comprensione dei fattori che influenzano la popolarità e il successo dei giochi da tavolo su BoardGameGeek. Utilizzando vari dataset correlati, vengono esplorati numerosi aspetti, come la complessità del gioco, la distribuzione dei rating degli utenti, le categorie e le meccaniche di gioco.

## 🗂 Dataset

I dataset utilizzati nel progetto sono:

- **games.csv**: Dati principali sui giochi (categoria, rating, complessità, ecc.).
- **publishers_reduced.csv**: Informazioni sui publisher e la loro esperienza.
- **ratings_distribution.csv**: Distribuzione dettagliata dei rating degli utenti.
- **subcategories.csv**: Sottocategorie di ogni gioco con flag binari.
- **user_ratings.csv**: Rating individuali degli utenti.

## 🛠 Analisi dei Dati

Il progetto inizia con il caricamento dei dati, l'esplorazione iniziale, e l'identificazione delle caratteristiche chiave per l'analisi.

- **Riempimento dei Valori Mancanti**: Valori mancanti sono gestiti utilizzando la mediana per le colonne numeriche e la moda per quelle categoriali.
- **Creazione delle Variabili Dummy**: Le variabili categoriali, come la categoria di gioco, sono trasformate in variabili dummy.
- **Unione dei Dataset**: I vari file sono uniti tramite `BGGId` per creare un unico dataset coerente.

## 📊 Modello di Classificazione

Utilizzando un modello di regressione logistica, viene creata una classificazione binaria per prevedere se un gioco avrà successo (definito come un punteggio medio > 7). 

### Feature Importanti:
- **GameWeight**: Complessità del gioco
- **MinPlayers** e **MaxPlayers**: Numero minimo e massimo di giocatori
- **ComAgeRec**: Età consigliata
- **NumUserRatings**: Numero di valutazioni degli utenti

L'accuratezza del modello è misurata con **accuracy_score** e **classification_report**.

## 🌐 Visualizzazione Interattiva

I dati sono esplorati con diverse visualizzazioni, tra cui:

- **Distribuzione dei Punteggi Medi**: Mostra la distribuzione dei punteggi medi dei giochi.
- **Impatto del Numero di Giocatori**: Relazione tra numero minimo di giocatori e punteggio medio.
- **Correlazione tra Complessità e Rating Medio**: Scatter plot per analizzare come la complessità influisce sul rating.

Ogni grafico è stato realizzato con librerie come `Seaborn` e `Matplotlib`.

## 🧠 Modelli di Previsione

### Modello di Regressione

Utilizzando modelli di regressione avanzati, come la **Random Forest** e la **Ridge Regression**, si è cercato di prevedere metriche chiave dei giochi, come:

- **NumOwned**: Numero di utenti che possiedono il gioco.
- **AvgRating**: Rating medio atteso.

### Modelli di Clustering

Inoltre, tramite clustering si esplora la relazione tra complessità, numero di recensioni e rating, utilizzando grafici 3D per analisi esplorative.

## 📈 Risultati

### Classificazione

Il modello di classificazione ha ottenuto un'accuratezza del 75%, con una buona performance nel prevedere giochi di successo.

### Regressione

- **MSE** medio: ~0.05
- **R²** medio: 0.93
- L'algoritmo di **Random Forest Regressor** si è dimostrato il più accurato.

### Visualizzazione Interattiva

La visualizzazione ha rivelato che la **complessità** e il **numero di recensioni** sono correlati positivamente con il rating medio.

## 📌 Conclusioni

Il progetto ha fornito preziose intuizioni su come i fattori specifici influenzino la popolarità dei giochi. Con la modellazione predittiva, si è in grado di prevedere il potenziale successo dei giochi basandosi su caratteristiche chiave, aiutando editori e sviluppatori di giochi.

---

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Boardgamegeek_logo.png" width="100" alt="BoardGameGeek logo">
</p>

**Sviluppato con ❤️ da [Riccardo Scaringi]**
