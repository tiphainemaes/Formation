

function tabNegatif(...myArray) {
    let positif = 0;
    let negatif = 0;

    for(let i = 0; i < myArray.length; i++)
    if (myArray[i] >= 0){
        positif++;
    }
    else {
        negatif++;
    }

    console.log("Le nombre de valeurs positives est de " + positif)
    console.log("Le nombre de valeurs négatives est de " + négatif)

}

tabNegatif(12, -5, 6, 9)



/*solution with map and arrow function

myArray.map((element)=> {
    if (element >= 0) {
        positif++
    }
    else {
        negatif++
    }
})*/


