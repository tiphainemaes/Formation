function calculSalaire() {

    let salaireBrut = parseInt(document.getElementById("salaire-brut").value);
    let sexe = document.getElementById("sexe").value;
    let personneACharge = parseInt(document.getElementById("personne-à-charge").value);


    let assurance = salaireBrut * 0.07;
    let pension = salaireBrut * 0.05;
    let tauxImpot = 0;


    if (sexe == "F" && personneACharge < 3) {
        tauxImpot = 0.16;
    } else if (sexe == "F" && personneACharge == 3) {
        tauxImpot = 0.15;
    } else if (sexe == "F" && personneACharge >= 4) {
        tauxImpot = 0.14;
    } else if (sexe == "H" && personneACharge == 3) {
        tauxImpot = 0.17;
    } else if (sexe == "H" && personneACharge >= 4) {
        tauxImpot = 0.16;
    } else {
        tauxImpot = 0.18;
    }

    console.log(tauxImpot);

    let impot = salaireBrut * tauxImpot;
    let salaireNet = 0;

    salaireNet = salaireBrut - (impot + assurance + pension);
    salaireNetBonus = salaireNet + 100;
    salaireNetAllocation = salaireNet + 150;

    console.log(salaireNet);


    document.getElementById("salaire-net").value = salaireNet;
    document.getElementById("salaire-net-bonus").value = salaireNetBonus;
    document.getElementById("salaire-net-allocation").value = salaireNetAllocation;
}