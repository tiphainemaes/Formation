function rechercheValeur(n, tab, i) {
    let i = 0;
    if (tab[i] === n) {
        return true
    }
    else if (i <= tab.length) {
        rechercheValeur(n, tab, i + 1);
    }
    else {
        return false;
    }
}
console.log (rechercheValeur(8, [2, 4, 6, 8]));
