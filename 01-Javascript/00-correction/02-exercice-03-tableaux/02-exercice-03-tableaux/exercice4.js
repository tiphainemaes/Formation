function sommeTableau(...myArray){

    let somme = 0;

    for (var i = 0; i < myArray.length; i++) {
    somme = somme + myArray[i]; 
    }
    
    console.log(somme);
}

sommeTableau(1, 2, 3, 4, 5, 6);
sommeTableau(2, 2, 2);



/*let monTableau = [1,2,3,4,5,6];
let somme = 0

for (var i = 0; i < monTableau.length; i++) {
    somme = somme + monTableau[i]; 
    }

console.log(somme);*/



