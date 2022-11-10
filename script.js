let chilometri = prompt("Quanti chilometri desideri percorrere?");
let eta = prompt("Inserisca la sua età:");

console.log("Chilometri da percorrere: " + chilometri + "km");
console.log("Età passegiero: " + eta);

if (eta < 0) {
    console.log("Scusaci, l'operazione non può essere eseguita. Perfavore inserire un'età seperiore a 0");
} else {

    parseInt(chilometri);
    let prezzoBiglietto = 0.21 * chilometri;
    let prezzoBigliettoIntero = Math.floor(prezzoBiglietto);
    console.log("Prezzo totale del Biglietto: " + prezzoBigliettoIntero + "€");

    if (eta < 18) {
        let scontoMinorenne = prezzoBiglietto * 20 / 100;
        let scontoMinorenneTotale = prezzoBigliettoIntero - scontoMinorenne;
        let scontoMinorenneInteroTotale = Math.floor(scontoMinorenneTotale);
        console.log("Totale scontato per minorenni: " + scontoMinorenneInteroTotale + "€");
    } else if (eta >= 65) {
        let scontoSenior = prezzoBiglietto * 40 / 100;
        let scontoSeniorTotale = prezzoBigliettoIntero - scontoSenior;
        let scontoSeniorInteroTotale = Math.floor(scontoSeniorTotale);
        console.log("Totale scontato per seniors: " + scontoSeniorInteroTotale + "€");
    };

};

