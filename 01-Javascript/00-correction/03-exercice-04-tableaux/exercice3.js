let tab1 = [ 2, 1, 4, 3 ];
let tab2 = [ 1, 3, 5, 10 ];

function sommeVecteurs(){

    let resultat = 0;

    for (var i = 0; i < tab1.length; i++) {
        resultat = resultat + (tab1[i] * tab2[i]); 
        }
    
    console.log(resultat);
} 

sommeVecteurs();