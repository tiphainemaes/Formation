function verifChiffre() {
    for (let j = 0; j < tabSaisie.length; j++) {
        if (tabSaisie[j] == tabAleatoire[j]) {
            tabVerif[j] = "T";
            compteurT++;
        }
        else {
            tabVerif[j] = "*";
            compteurT--;
        }
    }
    if (compteurT == 4) {
        victoire = true;
    }
    /*
     idem que
     victoire = compteurT = 4;
    */
    console.log(tabVerif)
}


function verifChiffre() {}