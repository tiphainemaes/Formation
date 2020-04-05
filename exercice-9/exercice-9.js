function trouverJour() {

    let aujourdhui = new Date;
    let jourSemaine;

    jour = aujourdhui.getDay();

    switch (jour) {
        case 0:
            jourSemaine = "Dimanche";
            break;
        case 1:
            jourSemaine = "Lundi";
            break;
        case 2:
            jourSemaine = "Mardi";
            break;
        case 3:
            jourSemaine = "Mercredi";
            break;
        case 4:
            jourSemaine = "Jeudi";
            break;
        case 5:
            jourSemaine = "Vendredi";
            break;
        case 6:
            jourSemaine = "Samedi";
            break;
    }

    document.getElementById("jour").innerHTML = jourSemaine;
}