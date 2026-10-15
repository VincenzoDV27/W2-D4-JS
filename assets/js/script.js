/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}

console.log(area(3, 4));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sommaPazza(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(sommaPazza(3, 3));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function distanzaDa19(n) {
  if (n > 19) {
    return n * 3;
  } else {
    return Math.abs(n - 19);
  }
}
console.log(distanzaDa19(5)); // da -14 Math.abs lo rende positivo quindi 14
console.log(distanzaDa19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 400;
function dentroIntervallo(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(dentroIntervallo(num));

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let t = "corso";

function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    return testo;
  } else {
    return "EPICODE " + testo;
  }
}

console.log(epify(t));

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function divisibilePer3o7(n) {
  if (n > 0) {
    if (n % 3 === 0 || n % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(divisibilePer3o7(2));

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = "Pippo";

function invertiStringa(testo) {
  testo.split("");
  const rev = [];
  for (let i = testo.length - 1; i >= 0; i--) {
    rev.push(testo[i]);
  }
  return rev;
}

console.log(invertiStringa(string));

/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let f = "ciao mondo";

function inizialiMaiuscole(frase) {
  frase = frase.split(" "); // [ciao, mondo]
  for (let i = 0; i < frase.length; i++) {
    frase[i] = frase[i].slice(0, 1).toUpperCase() + frase[i].slice(1); // assegna il risultato "Ciao , Mondo" a frase[i]
  }
  return frase.join(" "); // riunisce la stringa
}

console.log(inizialiMaiuscole(f));

/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parola = "EPICODE";

function togliPrimoEUltimo(testo) {
  testo = testo.split("");
  testo.splice(0, 1);
  testo.splice(testo.length - 1, 1);
  return testo.join("");
}

console.log(togliPrimoEUltimo(parola));

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];

function dammiCasuali(n) {
  for (let i = 0; i < 5; i++) {
    n[i] = Math.floor(Math.random() * 11);
  }
  return n;
}

console.log(dammiCasuali(arr));

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const gmy = new Date();
const bday = new Date(2003, 3 - 1, 13 - 1);
console.log(bday);

function etaInGiorni() {
  const mm = gmy - bday;
  const giorniN = mm / (1000 * 60 * 60 * 24);

  return Math.floor(giorniN);
}

console.log(`Hai ${etaInGiorni()} giorni!`);
