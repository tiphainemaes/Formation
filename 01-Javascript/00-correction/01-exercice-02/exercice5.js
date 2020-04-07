let HT = 50;
let NA = 3;
let TVA = 0.2;


console.log("HT=" + HT + " NA=" + NA + " TVA=" + TVA);

function calculerprix (HT,NA,TVA) {
    return (NA*HT*(1+TVA));
}


console.log("Le prix TTC est de " + calculerprix (HT,NA,TVA) + " €.");
