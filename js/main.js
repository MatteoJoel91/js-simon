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

const container = document.getElementById('container');



for (let i = 0; i < array_length; i++) {
    numeri.push(numero_random(1, 100))  
};

let contenuto = '';
contenuto += `<span id="numeri">${numeri}</span>`;
container.innerHTML = contenuto;

setTimeout(verifica,3000);

function verifica() {
    document.getElementById('numeri').style.display = 'none';
    setTimeout(() => {
        for (let i = 0; i < array_length; i++) {
            numeri_inseriti = parseInt(prompt('Inserisci i numeri che hai visualizzato'));
            while (numeri_2.includes(numeri_inseriti)) {
                numeri_inseriti = parseInt(prompt('Hai già inserito questo numero, inseriscine un altro'));
            }
            if (numeri.includes(numeri_inseriti)) {
                numeri_2.push(numeri_inseriti);
            }
        };
        let numeri_indovinati = numeri_2.length;

        let contenuto2 = '';

        if (numeri_indovinati == 1) {
            contenuto2 += `<span>${numeri_2}</span>
                      <span>Hai indovinato ${numeri_indovinati} numero su 5</span>`;
        }else{
            contenuto2 += `<span>${numeri_2}</span>
                      <span>Hai indovinato ${numeri_indovinati} numeri su 5</span>`;
        }
        
        container.innerHTML = contenuto2;
        console.log(numeri_2);

        console.log('Hai indovinato ' + numeri_2.length + ' numero/i su 5');
    }, 250);  
}

// funzione numero random
function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}