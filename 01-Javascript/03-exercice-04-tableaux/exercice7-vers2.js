const array = [3, 4, 8, 11];
const nombresPairs = array.filter(element => element %2).length;
const nombresImpairs = array.length - nombresPairs;

console.log("Le nombre d'entiers pairs est de " + nombresPairs);
console.log("Le nombre d'entiers impairs est de " + nombresImpairs);
