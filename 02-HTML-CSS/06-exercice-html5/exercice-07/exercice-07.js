var compteur = 0;
var nombreAleatoire = 0;

function genererNombre(max) {
    nombreAleatoire = Math.floor(Math.random() * Math.floor(max));
    console.log(nombreAleatoire);
}


function trouverNombre() {
    let nombre = parseInt(document.getElementById("nombre").value);

    compteur++;
    if (nombre > nombreAleatoire) {
        document.getElementById("info-nombre").innerHTML = "Cherche encore, le nombre généré est plus petit que " + nombre + " !";
    } else if (nombre < nombreAleatoire) {
        document.getElementById("info-nombre").innerHTML = "Cherche encore, le nombre généré est plus grand que " + nombre + " !";
    } else if (nombre == nombreAleatoire) {
        document.getElementById("info-nombre").innerHTML = "Bravo, tu as trouvé le bon nombre en " + compteur + " coups !";
    }

    console.log(compteur);
}