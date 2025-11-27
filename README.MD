# Pesca Tarocchi API Backend

API sviluppata in Node.js con il framework Express

## Prerequisiti

Assicurati di avere installato:

- Node.js (versione 18+ o successive)
- npm

## Setup del progetto

1. Clona la repository
- Installa le dipendenze con 'npm install' o 'npm i

/

2. Configura le variabili d'ambiente
- Crea un file .env e configuralo come nell'esempio del file .env.example.
- Ricorda che FE_URL= deve corrispondere all'ambiente di sviluppo del tuo front-end.

/

3. Avvia il server
- Avvia il server in modalità di sviluppo con 'npm run dev'

Al momento è possibile effettuare richiesta GET sia per tutti i tarocchi che per il singolo con gli endpoint "/" e "/:id"

