let chilometri = prompt("Quanti chilometri desideri percorrere?");
let eta = prompt("Inserisca la sua età:");

console.log("Chilometri da percorrere: " + chilometri + "km");
console.log("Età passeggiero: " + eta);

if (eta < 0) {
    console.log("Scusaci, l'operazione non può essere eseguita. Perfavore inserire un'età seperiore a 0");
} else {

    parseInt(chilometri);
    let prezzoBiglietto = 0.21 * chilometri;
    let prezzoBigliettoDecimale = prezzoBiglietto.toFixed(2);
    console.log("Prezzo totale del Biglietto: " + prezzoBigliettoDecimale + "€");

    if (eta < 18) {
        let scontoMinorenne = prezzoBiglietto * 20 / 100;
        let scontoMinorenneTotale = prezzoBigliettoDecimale - scontoMinorenne;
        let scontoMinorenneDecimaleTotale = scontoMinorenneTotale.toFixed(2);
        console.log("Totale scontato per minorenni: " + scontoMinorenneDecimaleTotale + "€");
    } else if (eta >= 65) {
        let scontoSenior = prezzoBiglietto * 40 / 100;
        let scontoSeniorTotale = prezzoBigliettoDecimale - scontoSenior;
        let scontoSeniorDecimaleTotale = scontoSeniorTotale.toFixed(2);
        console.log("Totale scontato per seniors: " + scontoSeniorDecimaleTotale + "€");
    };

};

