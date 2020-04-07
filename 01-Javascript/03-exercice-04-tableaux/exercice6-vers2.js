let x = 10;
let occ = 0;

function calcOcc(...myArray){

    for(let i = 0; i < myArray.length; i++){

        if (myArray[i] == x){
        occ = occ + 1
        }
    }

    console.log("Le nombre " + x + " est repété " + occ + " fois.")
}

calcOcc(5, 2, 3, 3, 3, 10);