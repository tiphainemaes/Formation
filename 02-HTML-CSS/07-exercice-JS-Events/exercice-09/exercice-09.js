function depassement(texte) {

    let caractere = texte.length;
    let mot = 0;

    mot = texte.split(" ").length;

    // if (texte.includes(" ?") || texte.includes(" !")) {
    //     mot--;
    // }

    document.getElementById("caractere").innerHTML = "N° de caractères : " + caractere;
    document.getElementById("mot").innerHTML = "N° de mots : " + mot;

    if (caractere > 100) {
        document.getElementById("depassement").innerHTML = "Dépassement";
    } else if (mot > 10) {
        document.getElementById("depassement").innerHTML = "Dépassement";
    }
}