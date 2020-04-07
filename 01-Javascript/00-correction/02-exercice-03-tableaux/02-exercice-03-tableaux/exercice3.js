

function tabNegatif(...myArray) {
    let positif = 0;
    let negatif = 0;

    for(let i = 0; i < myArray.length; i++)
    if (myArray[i] >= 0){
        positif++;
    }
    else {
        negatif++;
    }

    console.log("Le nombre de valeurs positives est de " + positif)
    console.log("Le nombre de valeurs négatives est de " + négatif)

}

tabNegatif(12, -5, 6, 9)



/*solution with map and arrow function

myArray.map((element)=> {
    if (element >= 0) {
        positif++
    }
    else {
        negatif++
    }
})*/




/*let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tableau = [];
let i = 0;
let positif = 0;
let negatif = 0;

function nombreDeValeurs() {
    read.question("Entre un nombre de valeurs. : \n", function (valeur) {
        tableau.length = valeur;
        entrerNombre();
    });
}

function entrerNombre() {
    read.question("Entre une série de nombres positifs ou négatifs. : \n", function (nombre) {
        tableau[i] = nombre;
        if (i != tableau.length - 1) {
            i++;
            entrerNombre();
        }
        else {
            console.log("Vous avez entrer les nombres suivants : \n" + tableau);
            proprieteNombre();
            read.close();
        }
    });
}

nombreDeValeurs();

function proprieteNombre() {
    for (j = 0; j < tableau.length; j++) {
        if (tableau[j] > 0) {
            positif = positif + 1;
        }

        else if (tableau[j] < 0) {
            negatif = negatif + 1;

        }
    }
    console.log("Le nombre de valeurs positive est de " + positif + ".");
    console.log("Le nombre de valeurs negative est de " + negatif + ".");
}
*/


// OU