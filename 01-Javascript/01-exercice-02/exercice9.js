
const coef1 = 1;
const coef2 = 2;

let noteOral = 9* coef1;
let noteEcrit = 4* coef2;

let moyenne = ((noteOral + noteEcrit)/(coef1 + coef2))


console.log ("La moyenne au module est de " + moyenne + ".")


if (moyenne < 10) {
    console.log ("Le module n'est validé.")
    }

else {
    console.log ("Le module est pas validé.")
    }


