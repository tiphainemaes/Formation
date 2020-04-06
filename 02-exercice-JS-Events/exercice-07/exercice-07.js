function tableau() {
    let nom = document.getElementById("form-nom").value;
    let prenom = document.getElementById("form-prenom").value;
    let email = document.getElementById("form-email").value;

    let rue = document.getElementById("form-rue").value;
    let codePostal = document.getElementById("form-cp").value;
    let ville = document.getElementById("form-ville").value;

    let tab = [];

    tab = [nom, prenom, email, rue, codePostal, ville];


    document.write(tab);

}