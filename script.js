let chilometri = prompt("Quanti chilometri desideri percorrere?");
let eta = prompt("Inserisca la sua età:");

console.log("Chilometri da percorrere: " + chilometri + "km");
console.log("Età passegiero: " + eta);

parseInt(chilometri);
let prezzoBiglietto = 0.21 * chilometri;
console.log("Prezzo del Biglietto: " + prezzoBiglietto + "€");