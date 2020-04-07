const vect1 = [2, 4, 6, 8];
const vect2 = [8, 6, 4, 2];

function scalaire(vect1, vect2) {
    if (vect1.length === 1 && vect2.length === 1) {
        return vect1[0] * vect2[0];
    }
}
console.log(scalaire(vect1, vect2));





function scalaire(vect1, vect2) {
    if (vect1.length !== vect2.length){
        return null;
    }
    if (vect1.length === 1 && vect2.length === 1) {
        return vect1[0] * vect2[0];
    }
    return vect1.pop()*vect2.pop() + scalaire(vect1, vect2);

}
console.log(scalaire(vect1, vect2));


