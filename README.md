L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

**Consigli del giorno:** :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

# Soluzione #

- [x] generare la griglia tramite Js al click del bottone
. [x] genero numeri da 1 a 100 in celle su html tramite js
   - [x] livello di dificoltà semplice a 49
   - [x] livello di dificoltà semplice a 81
   - [x] livello di dificoltà semplice a 100

. [x] creare una funzione 


# soluzione con le bombe #

- [x] generare 16 numeri random in diverse celle
- [x] generarlo per tre livelli
- [x] se si clicca sul numero uguale a quello generato, si colora di rosso
altrimenti si continua ad andare avanti

- [x] creare messaggio con punteggio
     se ha vinto l'utente 
     oppure se l'utente perde cliccando sulla bomba
     se l'utente continua a cliccare, dare errore