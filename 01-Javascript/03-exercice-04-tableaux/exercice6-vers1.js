let tab = [5, 2, 3, 3, 3, 10];

let x = 3;
let occ = 0;


for(i = 0; i < tab.length; i++){

    if (tab[i] == x){
    occ = occ + 1
    }
   
}

console.log("Le nombre " + x + " est repété " + occ + " fois.")
