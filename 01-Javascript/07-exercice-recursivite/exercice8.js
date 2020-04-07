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





const orderedArray = [1, 3, 4, 6, 8, 9]
function search([...tab], val) {
    if (tab.length === 1) {
        return tab[0] === val;
    }
    return tab.shift() === val || search(tab, 4);
}
console.log(search([...orderedArray], 10));




/*rechercge dichotomique(tab, val)
recherche_dichotomique_recursive(element, liste_triée) :
    n = longueur de liste_triée / 2;
    si liste_triée[m] = élément :
        renvoyer m;
    si liste_triée[m] > élément :
        renvoyer recherche_dichotomique_recursive(élément, liste_triée[l: m])
    sinon:
        renvoyer recherche_dichotomique_recursive(élément, liste_triée[m: l])
*/

const orderedArray = [1, 3, 4, 6, 8, 9];

function dichotomique(tab, val) {
    const indiceMilieu = Math.trunc(tab.length / 2)
    if (tab[indiceMilieu] === val) {
        return indiceMilieu;
    } else if (tab[indiceMilieu] > val) {
        return dichotomique(val, tab.slice(0, indiceMilieu));
    } else {
        return dichotomique(val, tab.slice(indiceMilieu))
    }
}

console.log(dichotomique(8, orderedArray));