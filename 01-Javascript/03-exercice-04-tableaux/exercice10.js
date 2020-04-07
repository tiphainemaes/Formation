let tab = [
    [1, 8, 6],
    [4, 10, 2],
    [5, 16, 4]
];

let max = 0;

console.log(tab);


for (var i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
        max = tab2[i];
    }
    var tab2 = tab[i];

    for (var j = 0; j < tab2.length; j++) {
        if (tab2[j] > max) {
            max = tab2[j];
        }
    }
}

console.log("La plus grande valeur de ce tableau est " + max + ".");