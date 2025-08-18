# 🌍 Travel Journal App

Un diario di viaggio interattivo per raccogliere e rivivere i momenti più significativi delle tue vacanze estive.  
Ogni tappa del viaggio diventa un post personalizzabile con foto, emozioni, riflessioni e dati pratici.

## 🎯 Obiettivo
Progettare e sviluppare una web app per la raccolta e visualizzazione di tappe di un viaggio, con un approccio creativo e personale.  
Il progetto ha lo scopo di mettere in pratica:
- la progettazione di un’interfaccia web interattiva;
- la gestione di dati multimediali e testuali;
- l’organizzazione di informazioni tramite filtri e ordinamenti.

## 📸 Funzionalità principali
Ogni tappa del diario include:
- Foto (tramite upload);
- Luogo (inserimento manuale);
- Descrizione testuale;
- Stato d’animo (es. felice, rilassato, emozionato…);
- Riflessioni: cosa portarsi a casa / cosa ha convinto meno;
- Impegno fisico (scala 1–5);
- Spesa effettiva (€).

### 🔎 Filtri disponibili
- Per testo (con ricerca ottimizzata tramite debounce)
- Per valutazione dell’esperienza
- Per sforzo fisico

### 📊 Ordinamenti disponibili
- Per data (ascendente e discendente)
- Per costo (ascendente e discendente)

## 🛠️ Tecnologie utilizzate

### Frontend
- ⚛️ **Vite + React.js:** rapidità di sviluppo, componenti riutilizzabili e ottime performance.
- 🎨 **Tailwind CSS + custom CSS:** per uno styling veloce, modulare e responsive.

### Backend
- 🗄️ **Supabase:** soluzione completa e serverless per database e storage. La scelta è stata fatta per sperimentare nuove tecnologie.

## 🔗 Deployment

Il progetto è stato pubblicato con Vercel ed è raggiungibile cliccando il seguente [link](https://travel-journal-app-umber.vercel.app/).

## 🚀 Clonazione e personalizzazione del progetto

Clona la repository:
```shell
git clone https://github.com/tuo-username/travel-journal-app.git
cd travel-journal-app
npm install
npm run dev  
```