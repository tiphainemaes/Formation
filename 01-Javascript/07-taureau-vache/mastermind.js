// étape 1 : générer un nombre aleatoire par l'ordinateur

let min = 0;
let max = 9;

function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nombre1 = nombreAleatoire(min, max);
let nombre2 = nombreAleatoire(min, max);
let nombre3 = nombreAleatoire(min, max);
let nombre4 = nombreAleatoire(min, max);

nombreAleatoire(min, max);

let tabAleatoire = [nombre1, nombre2, nombre3, nombre4];
console.log(tabAleatoire);



// étape 2 : saisie utilisateur

let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let victoire = false;
let tabSaisie = [];
tabSaisie.length = 4;
let i = 0;
let tabVerif = [];
tabVerif.length = 4;

let compteurT = 0;

function saisieChiffre() {
    read.question("Entre un chiffre : \n", function (chiffre) {
        tabSaisie[i] = chiffre;
        if (i != tabSaisie.length - 1) {
            i++;
            saisieChiffre();
        }
        else {
            console.log("Vous avez entré les chiffres suivants : \n" + tabSaisie);
            verifChiffre();
            console.log(tabVerif);
            if (!victoire) {
                saisieChiffre();
            }
            else {
                read.close();
            }

        }

    });
}

saisieChiffre();




function verifChiffre() {
    for (let j = 0; j < tabAleatoire.length; j++) {
        for (let k = 0; k < tabSaisie.length; k++) {
            if (j == k && tabSaisie[k] == tabAleatoire[j]) {
                tabVerif[k] = "T";
                compteurT++;
            }
            else if (j != k && tabSaisie[k] == tabAleatoire[j]){
                tabVerif[k] = "V";
                
            }
            else{
                tabVerif[k] = "*";
            }
        }
    }
    
    if (compteurT == 4) {
    victoire = true;
    }

}
        


/*
        
    


     idem que
     victoire = compteurT = 4;
    */