let vecteur1 = ["H", "E", "L", "L", "O"];

console.log(vecteur1);

function decaler(){
    
    vecteur2 = [];
    let part1 = vecteur1.slice(-1);
    let part2 = vecteur1.slice(0, 4);

    vecteur2 = vecteur2.concat(part1, part2);

    console.log(vecteur2);
}

decaler();




const str = "Hello";
const tab = [...str];
tab.unshift(tab.pop());
console.log(tab);

const str = "Hello";
const tab = [...str];
const [a,...vecteur2] = tab;
console.log([...vecteur2,a]);