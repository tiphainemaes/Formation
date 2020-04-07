function produitVecteurs(vecteur1, vecteur2){

    let resultat = 0;

    for (let i = 0; i < vecteur1.length; i++) {
        resultat = resultat + (vecteur1[i] * vecteur2[i]); 
        }
    
    console.log(resultat);
} 

produitVecteurs([ 2, 1, 4, 3 ],[ 1, 3, 5, 10 ]);



/*let tab1 = [ 2, 1, 4, 3 ];
let tab2 = [ 1, 3, 5, 10 ];

function produitVecteurs(){

    let resultat = 0;

    for (let i = 0; i < vecteur1.length; i++) {
        resultat = resultat + (vecteur1[i] * vecteur2[i]); 
        }
    
    console.log(resultat);
} 

produitVecteurs();*/





