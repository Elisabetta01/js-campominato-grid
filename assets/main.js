//Consegna
//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
//Bonus
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
//- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

function creaElementoHtml( tagHtml, classi, text){
     let elemento = document.createElement( tagHtml )
     elemento.className = classi;
     elemento.innerText = text; //stampiamo il dato dentro al div

     return elemento 
}

console.log(creaElementoHtml("div", "box"))



//trovo elemento dove stampare
let griglia = document.querySelector('.griglia')

for(let i = 1; i <= 100; i++){
     
     // associo l'invocazione della funzione e del return a una variabile
     const divbox = creaElementoHtml("div", "box", i) 

     //rendo cliccabile tutti i div
     divbox.addEventListener('click', function(){
          this.classList.add('azzurro')
          console.log()
     })

     
     //stampiamo dentro la griglia i div
     griglia.append( divbox )
}
