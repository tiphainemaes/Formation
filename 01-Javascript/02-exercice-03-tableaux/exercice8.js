function calcMoyenne(...myArray) {

    let somme = 0;

    for (i = 0; i < myArray.length ; i++) {
        somme = somme + myArray[i];
    }
    
    moyenne = somme / myArray.length;
    console.log("La moyenne est de " + moyenne);
    noteSupMoyenne(...myArray);
}

function noteSupMoyenne(...myArray) {
    
    let noteSup = 0;
    
    for (j = 0; j < myArray.length; j++ ) {
        if(myArray[j] > moyenne){
            noteSup = noteSup + 1;
        }
    }

    console.log("Le nombre de notes supérieures à la moyenne est de " + noteSup);
        
}

calcMoyenne(12, 11, 13, 14, 16);



/*

const tab = [10, 2, 13, 14, 15, 16, 7, 18, 19, 10];

let moyenne = tab.reduce((total, element) => total + element)/tab.length;

const tabSupMoy = tab.filter(element => element > moyenne);
console.log('La moyenne de la classe est de: ' + moyenne);
console.log('Les notes supérieure à la moyenne sont: ' + tabSupMoy.join('|'));

*/

