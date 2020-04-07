let tabOrdi = [];
let tabSaisie = [];
tabOrdi.length = 4;
tabSaisie.length = 4;
let resultat = "";

let readline = require("readline");
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function creerTableau() {
    for (let i = 0; i <= 3; i++) {
        let min = 0;
        let max = 9;
        let nombre = Math.floor(Math.random() * (max - min + 1)) + min;
        while (tabOrdi.includes(nombre)) {
            nombre = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        tabOrdi[i] = nombre;
    }
}
//console.log(tabOrdi);




function saisieChiffre() {
    read.question("Entre quatre chiffres : \n", function (chiffre) {
        for (let j = 0; j <= 3; j++) {
            tabSaisie[j] = parseInt(chiffre.charAt(j));
        }
        //console.log(tabSaisie);
        verification();

        if (resultat != "TTTT") {
            resultat = "";
            saisieChiffre();
        }
        else {
            console.log("BRAVO !!! OUI !!! HOURRA !!! C'est gagné !!!");
            read.close();
        }
    });
};


function verification() {
    for (let k = 0; k < tabOrdi.length; k++) {
        for (let l = 0; l < tabSaisie.length; l++) {
            if (k == l && tabSaisie[l] == tabOrdi[k]) {
                resultat += "T";
            }
            else if (k != l && tabSaisie[l] == tabOrdi[k]) {
                resultat += "V";
            }
        }
    }
    console.log(resultat);
}

creerTableau();
saisieChiffre();
