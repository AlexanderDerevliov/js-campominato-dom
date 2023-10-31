document.getElementById("playBtn").addEventListener("click", initGame );
// let gameInit = false;

function initGame() {
        console.log("Gioco avviato");
 
        //creazione dinamica del div e la grid
        const grid = createElement("div", "grid", "");

        //creo le celle con il calcolo Math
        let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
        let numeroDiCellePerLato = Math.ceil( Math.sqrt(numeroDiCelleTotali) );
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;

        //Genero le Bombe 
        let quantitaBombe = 16;
        let bombe = generaBombe(quantitaBombe, numeroDiCelleTotali);
        console.log("Bombe: ", bombe);

        //Inizializzo il punteggio
         let punteggio = 0;
         document.getElementById ('punteggio').innerHTML = `Il tuo Punteggio è ${punteggio}`
        

        //Gestore di gameover
        let gameover = false;

        //Aggiungiamo gli event listener per gestire il click
        for (let i = 0; i < numeroDiCelleTotali; i++) {
            let cella = createElement("div", "cell", i+1 );
            cella.style.width = dimensione;
            cella.style.height = dimensione;

            cella.addEventListener("click", function () {

                console.log("Cliccato", parseInt(this.innerText) );

                if(gameover==false){

                    //nel ciclo viene generato un eventListener per ogni cella, la cella "i"
                   
                     let cellaCliccata = parseInt(this.innerText);

                    //se contiene bomba
                    if( bombe.includes(cellaCliccata) ) {
                        this.classList.add("clicked-bomb");
                        document.getElementById ('punteggio').innerHTML = `Partita terminata, hai perso. Punteggio: ${punteggio}`;
                        scopriBombe(bombe);
                        gameover = true;
                    } else {
                        this.classList.add("clicked");
                        punteggio++;
                        document.getElementById ('punteggio').innerHTML = `Punteggio: ${punteggio}`;

                        if(punteggio == numeroDiCelleTotali - quantitaBombe) {
                            document.getElementById ('punteggio').innerHTML = `Partita terminata, hai VINTO! Punteggio: ${punteggio}`;
                            scopriBombe(bombe);
                            gameover = true;
                        }
                    }
                  } else {
                    document.getElementById ('punteggio').innerHTML = "La partita è finita e hai superato il limite, torna domani!";
                }

            });

            grid.appendChild( cella );
        }

        //Appendiamo la griglia al main
        const mainEl = document.querySelector("main");
        mainEl.innerHTML = "";
        mainEl.appendChild(grid);

        console.log("Griglia: ", grid);
        gameInit = true;
}

function createElement(tagHtml, classe, contenuto) {

    //Creiamo una cella
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;

    return cell;

}

// numeri random
function getRandomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// Funzione per generare le bombe
function generaBombe(numeroDiBombe, numeroDiCelle) {

    console.log("Genero " + numeroDiBombe + " bombe per " + numeroDiCelle + " celle");

    let bombe = [];

    while (bombe.length < numeroDiBombe) {

        let nuovoNumero = getRandomNumber(1, numeroDiCelle);

        if( bombe.includes(nuovoNumero) == false ) {
            bombe.push(nuovoNumero);
        }

    }

    return bombe;
}


// funzione per scoprire le bombe
function scopriBombe(bombe) {

    let celle = document.getElementsByClassName("cell");
    console.log("Bombe", bombe);

    for (let i = 0; i < celle.length; i++) {
        const cella = celle[i];

        if(bombe.includes(i+1)) {
            cella.classList.add("clicked-bomb");
        } else {
             cella.classList.add("clicked");
        }    
    }

}