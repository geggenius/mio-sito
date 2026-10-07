function aggiornaOra() {
    const adesso = new Date();

    const ora = adesso.toLocaleTimeString("it-IT");

    document.getElementById("oraEsatta").textContent = ora;
}

aggiornaOra();

setInterval(aggiornaOra, 1000);