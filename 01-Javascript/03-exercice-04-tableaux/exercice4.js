function trouverElement(array){

    let grandElement = array[0]; // let [grandElement, ...reste] = array;

    console.log(array);

    for (let i = 0; i < array.length; i++) { // for (let i = 0; i < reste.length; i++) {
        if (array[i] > grandElement) {
            grandElement = array[i];   // reste[i];
        }
    }
    console.log("Le plus grand élément de ce tableau est " + grandElement + "." );
}

trouverElement([1, 2, 4, 3, 10, 6]);