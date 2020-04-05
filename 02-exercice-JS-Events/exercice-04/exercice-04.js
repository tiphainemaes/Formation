// function reglesDuJeu() {

//     let regles = "Voici un rappel des régles : si tu trouves un bon chiffre mais à la mauvaise position, une vache apparaîtra, mais si ce bon chiffre est à la bonne position alors ce sera un taureau. Bonne chance !";
//     document.getElementById("regles").innerHTML = regles;

// }


var tabOrdi = [];
var tabSaisie = [];
var tabTaureau = [];
var niveau;
var resultatTaureau = 0;
var resultatVache = 0;
var compteur = 0;

function choixDeNiveau(input) {
    niveau = parseInt(input);
}

function nombreAleatoire() {
    console.log(niveau);
    for (let i = 0; i < niveau; i++) {
        let min = 0;
        let max = 9;
        let nombre = Math.floor(Math.random() * (max - min + 1)) + min;
        while (tabOrdi.includes(nombre)) {
            nombre = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        tabOrdi[i] = nombre;
    }
    console.log(tabOrdi)
}




function affichage(chiffre) {
    compteur++
    console.log("compteur = " + compteur);

    if (resultatTaureau == niveau) {
        document.getElementById("try").innerHTML = "You won in " + compteur + " tries !";


    } else if (compteur == 1) {
        document.getElementById("result1").style.visibility = "visible";
        document.getElementById("taureau1").style.visibility = "visible";
        document.getElementById("vache1").style.visibility = "visible";

        document.getElementById("aff-taur-1").style.visibility = "visible";
        document.getElementById("aff-vac-1").style.visibility = "visible";

        document.getElementById("result1").innerHTML = chiffre;
        document.getElementById("taureau1").innerHTML = resultatTaureau;
        document.getElementById("vache1").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 2) {
        document.getElementById("result2").style.visibility = "visible";
        document.getElementById("taureau2").style.visibility = "visible";
        document.getElementById("vache2").style.visibility = "visible";

        document.getElementById("aff-taur-2").style.visibility = "visible";
        document.getElementById("aff-vac-2").style.visibility = "visible";

        document.getElementById("result2").innerHTML = chiffre;
        document.getElementById("taureau2").innerHTML = resultatTaureau;
        document.getElementById("vache2").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 3) {
        document.getElementById("result3").style.visibility = "visible";
        document.getElementById("taureau3").style.visibility = "visible";
        document.getElementById("vache3").style.visibility = "visible";

        document.getElementById("aff-taur-3").style.visibility = "visible";
        document.getElementById("aff-vac-3").style.visibility = "visible";

        document.getElementById("result3").innerHTML = chiffre;
        document.getElementById("taureau3").innerHTML = resultatTaureau;
        document.getElementById("vache3").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 4) {
        document.getElementById("result4").style.visibility = "visible";
        document.getElementById("taureau4").style.visibility = "visible";
        document.getElementById("vache4").style.visibility = "visible";

        document.getElementById("aff-taur-4").style.visibility = "visible";
        document.getElementById("aff-vac-4").style.visibility = "visible";

        document.getElementById("result4").innerHTML = chiffre;
        document.getElementById("taureau4").innerHTML = resultatTaureau;
        document.getElementById("vache4").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 5) {
        document.getElementById("result5").style.visibility = "visible";
        document.getElementById("taureau5").style.visibility = "visible";
        document.getElementById("vache5").style.visibility = "visible";

        document.getElementById("aff-taur-5").style.visibility = "visible";
        document.getElementById("aff-vac-5").style.visibility = "visible";

        document.getElementById("result5").innerHTML = chiffre;
        document.getElementById("taureau5").innerHTML = resultatTaureau;
        document.getElementById("vache5").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 6) {
        document.getElementById("result6").style.visibility = "visible";
        document.getElementById("taureau6").style.visibility = "visible";
        document.getElementById("vache6").style.visibility = "visible";

        document.getElementById("aff-taur-6").style.visibility = "visible";
        document.getElementById("aff-vac-6").style.visibility = "visible";

        document.getElementById("result6").innerHTML = chiffre;
        document.getElementById("taureau6").innerHTML = resultatTaureau;
        document.getElementById("vache6").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 7) {
        document.getElementById("result7").style.visibility = "visible";
        document.getElementById("taureau7").style.visibility = "visible";
        document.getElementById("vache7").style.visibility = "visible";

        document.getElementById("aff-taur-7").style.visibility = "visible";
        document.getElementById("aff-vac-7").style.visibility = "visible";

        document.getElementById("result7").innerHTML = chiffre;
        document.getElementById("taureau7").innerHTML = resultatTaureau;
        document.getElementById("vache7").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 8) {
        document.getElementById("result8").style.visibility = "visible";
        document.getElementById("taureau8").style.visibility = "visible";
        document.getElementById("vache8").style.visibility = "visible";

        document.getElementById("aff-taur-8").style.visibility = "visible";
        document.getElementById("aff-vac-8").style.visibility = "visible";

        document.getElementById("result8").innerHTML = chiffre;
        document.getElementById("taureau8").innerHTML = resultatTaureau;
        document.getElementById("vache8").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 9) {
        document.getElementById("result9").style.visibility = "visible";
        document.getElementById("taureau9").style.visibility = "visible";
        document.getElementById("vache9").style.visibility = "visible";

        document.getElementById("aff-taur-9").style.visibility = "visible";
        document.getElementById("aff-vac-9").style.visibility = "visible";

        document.getElementById("result9").innerHTML = chiffre;
        document.getElementById("taureau9").innerHTML = resultatTaureau;
        document.getElementById("vache9").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "Try again !";
    } else if (compteur == 10 && resultatTaureau != niveau) {
        document.getElementById("result10").style.visibility = "visible";
        document.getElementById("taureau10").style.visibility = "visible";
        document.getElementById("vache10").style.visibility = "visible";

        document.getElementById("aff-taur-10").style.visibility = "visible";
        document.getElementById("aff-vac-10").style.visibility = "visible";

        document.getElementById("result10").innerHTML = chiffre;
        document.getElementById("taureau10").innerHTML = resultatTaureau;
        document.getElementById("vache10").innerHTML = resultatVache;
        document.getElementById("try").innerHTML = "You lose !";
    }


}


function saisieChiffre(chiffre) {
    //var chiffre = prompt("Saisie des chiffres pour battre l'ordinateur");

    console.log(chiffre);



    var tabSaisie = Array.from(String(chiffre), Number);

    console.log(tabSaisie);

    verification(tabSaisie);



    if (resultatTaureau != niveau) {
        affichage(chiffre);
        resultatTaureau = 0;
        resultatVache = 0;

    } else {
        affichage(chiffre);
        console.log("BRAVO !!! OUI !!! HOURRA !!! C'est gagné !!!");
    }
}


function verification(tabSaisie) {


    for (let j = 0; j < tabOrdi.length; j++) {
        for (let k = 0; k < tabSaisie.length; k++) {
            if (j == k && tabSaisie[k] == tabOrdi[j]) {
                resultatTaureau++;
            } else if (j != k && tabSaisie[k] == tabOrdi[j]) {
                resultatVache++;
            }
        }
    }
    console.log("taureau = " + resultatTaureau);
    console.log("vache = " + resultatVache);

}