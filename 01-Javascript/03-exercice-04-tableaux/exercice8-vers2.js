
let tableau = [2, 3, 10, -9, -8, 6, 0, 0, 4, -6 ];
let i = 0

let sommePositive = 0; let sommeNegative = 0;
let nombrePositif = 0; let nombreNegatif = 0; let nombreNul = 0;
let moyennePositive = 0; let moyenneNegative = 0;


function calcSomme() {

    for (i = 0 ; i < tableau.length ; i++) {
        if(tableau[i] > 0) {
            sommePositive = sommePositive + tableau[i];
        }
        else if(tableau[i] < 0){
            sommeNegative = sommeNegative + tableau[i];
        }
    }
}

function calcNombre() {

    for (i = 0 ; i < tableau.length ; i++) { 
        if(tableau[i] > 0) {
            nombrePositif = nombrePositif + 1;
        }
        else if(tableau[i] < 0){
            nombreNegatif = nombreNegatif + 1;
        }
        else{
            nombreNul = nombreNul + 1;
        }
    }
    console.log("Le nombre d'éléments nuls est de " + nombreNul);
}

function calcMoyenne() {

    moyennePositive = sommePositive / nombrePositif;
    moyenneNegative = sommeNegative / nombreNegatif;

    console.log("La valeur des éléments positifs est de " + moyennePositive);
    console.log("La valeur des éléments négatifs est de " + moyenneNegative);
}

console.log(tableau);
calcSomme();
calcNombre();
calcMoyenne();
