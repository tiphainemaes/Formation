
function tableauIncremente(...myArray) {
    
    let myArray2 = myArray;
    
    console.log(myArray);

    for (var i = 0; i < myArray.length; i++) {
        myArray2[i] = myArray[i] + 1;
        }
    
    
    console.log(myArray2);
}

tableauIncremente(1, 2, 3);
tableauIncremente(1, 2, 3, 4, 5, 6);















/*
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
            console.log("Vous avez entrer les nombres suivants : \n" + tableau);
        
            tableauIncremente();
            read.close();
        }
    });
}


function tableauIncremente() {
    let tableau2 = tableau;
    
    for (var j = 0; j < tableau.length; j++) {
            tableau2[j] = tableau[j] + 1;
        }
    
    console.log(tableau2);
}

entrerNombre();
*/

