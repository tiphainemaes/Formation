function trouverElement(...myArray){

    let grandElement = myArray[0];

    console.log(myArray);

    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > grandElement) {
            grandElement = myArray[i];   
        }
    }
    console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
}

trouverElement(1, 2, 4, 3, 10, 6);











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
            
            trouverElement();
            read.close();
        }
    });
}

function trouverElement(){

    let grandElement = tableau[0];

    for (j = 0; j < tableau.length; j++) {
            if (tableau[j] > grandElement) {
                grandElement = tableau[j];   
            }
        }
        console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
    }

    entrerNombre();

    */

