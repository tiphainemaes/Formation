function calculImpot() {

    let impot = 0;
    let revenu = document.getElementById("revenu").value
    let codePostal = document.getElementById("code-postal").value

    let tab = Array.from(String(codePostal), Number);

    if (tab[0] == 5 && tab[1] == 9) {
        document.getElementById("impot").innerHTML = "Vous ne payez pas d'impôts."
    } else if (tab[0] == 6 && tab[1] == 2) {
        document.getElementById("impot").innerHTML = "Vous ne payez pas d'impôts."
    } else {
        impot = revenu / 2;
        document.getElementById("impot").innerHTML = "Votre impôt s'élève à " + impot + "€"
    }
}