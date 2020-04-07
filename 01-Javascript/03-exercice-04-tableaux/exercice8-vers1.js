let i = 0
let sommePositive = 0; let sommeNegative = 0;
let nombrePositif = 0; let nombreNegatif = 0; let nombreNul = 0;
let moyennePositive = 0; let moyenneNegative = 0;


function calcValeur(...myArray){
    for (i = 0 ; i < myArray.length ; i++) {
        if(myArray[i] > 0) {
            sommePositive = sommePositive + myArray[i];
        }
        else if(myArray[i] < 0){
            sommeNegative = sommeNegative + myArray[i];
        }
    }

    function calcNombre() {
        for (i = 0 ; i < myArray.length ; i++) { 
            if(myArray[i] > 0) {
                nombrePositif = nombrePositif + 1;
            }
            else if(myArray[i] < 0){
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
    
        console.log("La valeur moyenne des éléments positifs est de " + moyennePositive);
        console.log("La valeur moyenne des éléments négatifs est de " + moyenneNegative);
    }
    console.log(myArray);
    calcNombre(...myArray);
    calcMoyenne(...myArray); 
}

calcValeur(14, 0, 0, 56, -5, -12, 0);