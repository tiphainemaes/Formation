// 1.Ecrire un script qui permet d'afficher la table de multiplication d'un nombre
// entier n:
// - La valeur de n sera demandée à l’utilisateur via une boîte de dialogue.
// - En cas de saisie d'un nombre non entier le script redemande
// l'utilisateur de saisir une nouvelle valeur.
// - L'affichage de résultat doit être encadré par un tableau html.

// 2. Utiliser les boucles imbriquées pour afficher l'ensemble des tables de
// multiplication pour n=1,2.....10.


function demanderNombre() {

    let n = prompt("Entre un entier n :");
    while (n.includes(",") || n.includes(".")) {
        n = prompt("Entre un entier n :");
    }

    document.write("<table>");
    document.write("<tr>");
    document.write("<th>n=</th><th>" + n + "</th>");
    document.write("</tr>");
    for (i = 1; i <= 10; i++) {
        produit = n * i;
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + produit + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}


function table() {
    document.write("<table>");

    let n = 0;

    for (i = 1; i <= 10; i++) {
        produit = n * i;
        document.write("<tr>");

        for (n = 1; n <= 10; n++) {
            produit = n * i;
            document.write("<td>" + produit + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}