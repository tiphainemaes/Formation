function demanderNombre() {
    let n = parseInt(document.getElementById("saisie").value);
    let tab = document.getElementById("tab-n");
    let produit = 0;

    for (i = 1; i <= 10; i++) {
        let row = tab.insertRow(i);
        let celli = row.insertCell(0);
        let celln = row.insertCell(1);
        produit = n * i;

        celli.innerHTML = i + " x " + n + " = ";
        celln.innerHTML = produit;
    }
}

function table() {
    let n = 1;
    let produit = 0;
    let tabMulti = document.getElementById("tab-multi");
    let row;
    let cell;

    for (i = 1; i <= 10; i++) {
        produit = n * i;
        row = tabMulti.insertRow(i);
        cell = row.insertCell(0);

        for (n = 1; n <= 10; n++) {
            produit = n * i;
            cell = row.insertCell(n);
            cell.innerHTML = produit;
        }
    }
}