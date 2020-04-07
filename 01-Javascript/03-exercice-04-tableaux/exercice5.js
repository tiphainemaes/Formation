function trouverElementMinMax(...myArray){

    let petitElement = myArray[0];
    let grandElement = myArray[0];
    
    for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] < petitElement) {
                petitElement = myArray[i];   
            }
            else if (myArray[i] > grandElement) {
                grandElement = myArray[i];   
            }
        }
        console.log("Le plus petit élément de ce tableau est " + petitElement + "." );
        console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
    }

trouverElementMinMax(-56, -2, -3, -10, -6, -100, -5);