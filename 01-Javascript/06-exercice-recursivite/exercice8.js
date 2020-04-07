function rechercheValeur(n, tab, i) {
    if (tab[i] === n) {
        return console.log("La valeur " + n + " est dans le tableau à l'indice " + i);
    }
    else if (i <= tab.length) {
        rechercheValeur(n, tab, i + 1);
    }
    else {
        console.log("La valeur " + n + " n'est pas dans le tableau.");
    }
}
rechercheValeur(8, [2, 4, 6, 8], 0);
