let tab = [4, 2, 6, 5, 3, 1];
console.log(tab);

function decroissant(a, b) {
    return b - a;
}
tab.sort(decroissant);
console.log(tab);

let deuxiemeMax = tab.indexOf(1);
let deuxiemeMin = tab.indexOf(tab.length - 2);
console.log("Le deuxième plus grand élément est " + deuxiemeMax);
console.log("Le deuxième plus petit élément est " + deuxiemeMin);




// trier en utilisant la fonction .sort :
function arrayDecroissant(array) {
    array.sort((a, b) => (b - a));
    console.log(array);
    let max = array[1];
    let min = array[array - 2];

    console.log("Le deuxième plus grand élément est " + max);
    console.log("Le deuxième plus petit élément est " + min);
}
arrayDecroissant([1, 12, 90, 40, 21]);





// trier en utilisant la boucle for : 
function tri(tab) {
    let temp;
    for (let i = 0; i < tab.length; i++) {
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] > tab[i]) {
                temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
}