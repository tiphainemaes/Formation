function pairsImpairs (...myArray) {

    let nombresPairs = 0;
    let nombresImpairs = 0;

    for (var i = 0; i < myArray.length; i++){
        if(myArray [i] % 2 == 0){
            nombresPairs = nombresPairs + 1;
        }
    
        else {
            nombresImpairs = nombresImpairs + 1;
        }
    }
    
    console.log("Le nombre d'entiers pairs est de " + nombresPairs);
    console.log("Le nombre d'entiers impairs est de " + nombresImpairs);
}

pairsImpairs (1, 1, 2);







/*let monTableau = [1, 2, 3, 4, 5];

let nombresPairs = 0;
let nombresImpairs = 0;

for (var i = 0; i < monTableau.length; i++){
    if(monTableau [i] % 2 == 0){
        nombresPairs = nombresPairs + 1;
    }

    else {
        nombresImpairs = nombresImpairs + 1;
    }
}

console.log("Le nombre d'entiers pairs est de " + nombresPairs);
console.log("Le nombre d'entiers impairs est de " + nombresImpairs);*/
