let readline = require("readline");
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
            
            trouverOccurrence();
            //afficherNombreOccurrence();
            read.close();
        }
    });
}

function trouverOccurrence() {
    let nombreRepete = tableau[0];
    let occurrence = 0;
    
    for (j = 0; j < tableau.length; j++) {
            if (tableau[j] > nombreRepete) {
            nombreRepete == tableau[j];

            //occurrence = occurrence + 1;
            }
        }

        console.log(nombreRepete);
        }

/*function afficherNombreOccurrence() {
    let nombreOccurrence = 0; 

    for (k=0; k < tableau.length; k++) {
        if (occurrence = tableau[k]) {
            nombreOccurrence = nombreOccurrence + 1
        }
    }
    console.log(nombreOccurrence);
}*/




entrerNombre();