function trouverGrandeValeur(...myArray) {
    
    let grandeValeur = myArray[0];
    let position = 0;

    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > grandeValeur) {
            grandeValeur = myArray[i];
            position = i;    
        }
    }
    console.log(myArray);
    console.log("La plus grande valeur est de " + grandeValeur + " à la position "+ position +".");
}


trouverGrandeValeur(20,100,17,1,2);




/*

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = tab[0];
let indexmax = 0;


tab.map((element, index) => {
    if(element > max) {
        max = element;
        indexmax = index;
    }

OU


max = Math.max(...tab);
indexmax = tab.indexOf(max);
console.log(max);
console.log(indexmax);



*/