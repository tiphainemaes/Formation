
function tableauIncremente(...myArray) {
    
    let myArray2 = myArray;
    
    console.log(myArray);

    for (var i = 0; i < myArray.length; i++) {
        myArray2[i] = myArray[i] + 1;
        }
    
    
    console.log(myArray2);
}

tableauIncremente(1, 2, 3, 4, 5, 6);



/*

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tab1 = tab.map((element) => {
    return element + 1;
});
console.log(tab1); 


OU



for (let i = 0; i < tab.length; i++) {
    tab[i]++;
}
console.log(tab);

*/