/* 
Descrizione: 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const array_length = 5;

const numeri = [];

let numeri_inseriti;

const numeri_2 = [];

console.log(numeri);

for (let i = 1; i <= array_length; i++) {
    numeri.push(numero_random(1, 10)) 
};

for (let i = 1; i <= array_length; i++) {
    numeri_inseriti = parseInt(prompt('Inserisci i numeri che hai visualizzato'));
    if (numeri_inseriti == numeri) {
        numeri_2.push(numeri_inseriti);
    }
};

console.log(numeri_2);














// funzione numero random
function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}