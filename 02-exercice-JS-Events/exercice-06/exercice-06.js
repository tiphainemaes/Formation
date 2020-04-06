function tableau() {
    let nom = document.getElementById("form-nom").innerHTML;
    let prenom = document.getElementById("form-prenom").innerHTML;
    let email = document.getElementById("form-email").innerHTML;

    let rue = document.getElementById("form-rue").innerHTML;
    let codePostal = document.getElementById("form-cp").innerHTML;
    let ville = document.getElementById("form-ville").innerHTML;

    let tab = [];

    tab = [nom, prenom, email, rue, codePostal, ville];
}