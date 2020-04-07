function calcMoyenne(...myArray) {

    let somme = 0;

    for (j = 0; j < myArray.length ; j++) {
        somme = somme + myArray[j];
    }
    
    moyenne = somme / myArray.length;
    console.log("La moyenne est de " + moyenne);
    noteSupMoyenne(...myArray);
}

function noteSupMoyenne(...myArray) {
    
    let noteSup = 0;
    
    for (j = 0; j < myArray.length; j++ ) {
        if(myArray[j] > moyenne){
            noteSup = noteSup + 1;
        }
    }

    console.log("Le nombre de notes supérieures à la moyenne est de " + noteSup);
        
}

calcMoyenne(12, 11, 13, 14, 16);





/*let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tableau = [];
let i = 0;
let moyenne = 0;


function entrerNote() {
    read.question("Entre une note. (Tape \"exit\" quand tu as fini).\n", function (note) {

        if (note != "exit") {
            tableau[i] = parseInt(note);
            i++;
            entrerNote();
        }
        else {
            console.log("Vous avez entrer les notes suivants : \n" + tableau);
            
            calcMoyenne();
            noteSupMoyenne();
            read.close();
        }
    });
}

entrerNote();

function calcMoyenne() {

    let somme = 0;

    for (i = 0; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }

    moyenne = somme / tableau.length;
    console.log("La moyenne est de " + moyenne);

}

function noteSupMoyenne() {
    
    let noteSup = 0;
    
    for (i = 0; i < tableau.length; i++ ) {
        if(tableau[i] > moyenne){
            noteSup = noteSup + 1;
        }
    }

    console.log("Le nombre de notes supérieures à la moyenne est de " + noteSup);
        
}

*/


