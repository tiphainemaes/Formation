function sommeTableau(...myArray){

    let somme = 0;

      {
    somme = somme + myArray[i]; 
    }
    
    console.log(somme);
}

sommeTableau(1, 2, 3, 4, 5, 6);




/*
let monTableau = [1,2,3,4,5,6];
let somme = 0

for ( i = 0; i < monTableau.length; i++) {
    somme = somme + monTableau[i]; 
    }

console.log(somme);


OU

const tab = [1,2,3,4,5,6];
let somme = 0;
tab.map(element =>{
    somme += element;
});

console.log(somme);

*/





