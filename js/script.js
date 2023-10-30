// event listener al click del bottone 
document.getElementById("playBtn").addEventListener("click", initGame )
 
// funzione del bottone
function initGame() {
    // if(gameInit == false) {
        console.log("Gioco avviato");


        //creazione dinamica del div e la grid
        const grid = createElement("div", "grid", "");

        //creo le celle con il calcolo Math
        let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
        let numeroDiCellePerLato = Math.ceil(Math.sqrt(numeroDiCelleTotali));
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;

         //Genero le 16 bombe per numero di celle
         let quantitaBombe = 16;
         let bombe = generaBombe(quantitaBombe, numeroDiCelleTotali);
         console.log("Bombe: ", bombe);
 
 

        for (let i = 0; i < numeroDiCelleTotali; i++) {
            let cell = createElement("div", "cell", i+1 );
            cell.style.width = dimensione;
            cell.style.height = dimensione;

            cell.addEventListener("click", handleCellClick)


            grid.appendChild( cell );
        }

        //Appendiamo la griglia al main
        const elementMain = document.querySelector("main");
        elementMain.innerHTML = "";
        elementMain.appendChild(grid);

        console.log("Griglia: ", grid);
        gameInit = true;
}

function createElement(tagHtml, classe, contenuto) {

    //Creiamo una cell
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;

   return cell;

}


// funzioni di colore al click sulla cella
function handleCellClick() {
    const clickedNumber = parseInt(this.textContent);
    if(clickedNumber % 2 === 0) {
        this.classList.add("lightblue");
    } else {
        this.classList.add("red")
    }
}