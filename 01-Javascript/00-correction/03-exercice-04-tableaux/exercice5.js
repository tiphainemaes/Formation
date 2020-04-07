function trouverElementMinMax(...myArray){

    let petitElement = myArray[0];
    let grandElement = myArray[0];
    
    for (i = 0; i < myArray.length; i++) {
            if (myArray[i] < petitElement) {
                petitElement = myArray[i];   
            }
            else if (myArray[i] > grandElement) {
                grandElement = myArray[i];   
            }
        }
        console.log("Le plus petit élément de ce tableau est " + petitElement + "." );
        console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
    }

trouverElementMinMax(56, 2, 3, 10, 6, 100, 5);



/*let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tableau = [];
let i = 0;

function entrerNombre() {
    read.question("Entre une série de nombres. (Tape \"exit\" quand tu as fini).\n", function (nombre) {
      
        if (nombre != "exit") {
            tableau[i] = parseInt(nombre);  
            i++;
            entrerNombre();
        }
        else {
            console.log("Vous avez entré les nombres suivants : \n" + tableau);
            
            trouverElementMin();
            trouverElementMax();
            read.close();
        }
    });
}

function trouverElementMin(){

    let petitElement = tableau[0];
    
    for (j = 0; j < tableau.length; j++) {
            if (tableau[j] < petitElement) {
                    petitElement = tableau[j];   
            }
        }
        console.log("Le plus petit élément de ce tableau est " + petitElement + "." );
    }

function trouverElementMax(){

    let grandElement = tableau[0];

    for (k = 0; k < tableau.length; k++) {
            if (tableau[k] > grandElement) {
                grandElement = tableau[k];   
            }
        }
        console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
    }

entrerNombre();

*/

