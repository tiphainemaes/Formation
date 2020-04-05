function somme() {
    let a = parseInt(document.getElementById("entier-a").value);
    let b = parseInt(document.getElementById("entier-b").value);

    console.log(a);
    console.log(b);
    let result = 0;
    result = a + b;
    console.log(result)

    document.getElementById("result").value = result
}