function addition(x) {
    return x + 2;
}

function affiche() {
    let tab = [-2, 1, 4];
    for (let i = 0; i < tab.length; i++) {
        console.log(addition(tab[i]));
    }

    document.getElementById("resultat-1").innerHTML = addition(tab[0])
    document.getElementById("resultat-2").innerHTML = addition(tab[1])
    document.getElementById("resultat-3").innerHTML = addition(tab[2])

}