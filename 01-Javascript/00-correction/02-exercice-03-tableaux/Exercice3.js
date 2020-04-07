function tabNegatif(...myArray) {
  let positif = 0;
  let negatif = 0;
  //solution with for
  /*     for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] >= 0) {
            positif++
        } else {
            negatif++
        }
    } */
  //solution with map
  /*     myArray.map(function(element) {
        if (element >= 0) {
            positif++
        } else {
            negatif++
        }
    }) */
  //solution with map and arrow function
  /*  myArray.map((element) => {
            if (element >= 0) {
                positif++
            } else {
                negatif++
            }
        }) */
  //solution with map and named function
  function negPos(element) {
    if (element >= 0) {
      positif++;
    } else {
      negatif++;
    }
  }
  myArray.map(negPos);
  
  console.log(
    "Vous avez entré " +
      negatif +
      " chiffre negatif" +
      " Et chiffre " +
      positif +
      " positif."
  );
}
tabNegatif(2, -4, -3, -1, 2, -2, 0);
