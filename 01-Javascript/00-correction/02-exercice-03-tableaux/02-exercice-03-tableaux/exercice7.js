function trouverGrandeValeur(...myArray) {
    
    let grandeValeur = myArray[0];
    let position = 0;

    for (j = 0; j < myArray.length; j++) {
        if (myArray[j] > grandeValeur) {
            grandeValeur = myArray[j];
            position = j;    
        }
    }
    console.log(myArray);
    console.log("La plus grande valeur est de " + grandeValeur + " à la position "+ position +".");
}


trouverGrandeValeur(20,100,17,1,2);
















let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tableau = [];
let i = 0;

function nombreDeValeur() {
    read.question("Entre un nombre de valeur. : \n", function (valeur) {
        tableau.length = valeur;
        entrerNombre();
    });
}

nombreDeValeur();

function entrerNombre() {
    read.question("Entre une série de nombres. : \n", function (nombre) {
        tableau[i] = nombre;
        if (i != tableau.length - 1) {
            i++;
            entrerNombre();
        }
        else {
            console.log("Vous avez entré les nombres suivants : \n" + tableau);
            trouverGrandeValeur();
            read.close();
        }
    });
}

function trouverGrandeValeur(){

    let grandeValeur = tableau[0];
    let position = 0;

    for (j = 0; j < tableau.length; j++) {
            if (tableau[j] > grandeValeur) {
                grandeValeur = tableau[j];
                position = j;    
            }
        }
        console.log("La plus grande valeur est de " + grandeValeur + " à la position "+ position +".");
    }
    




