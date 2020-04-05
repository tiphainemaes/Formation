function verification(input) {

    let conditions = "je certifie avoir lu les conditions de vente";

    console.log(input)
    console.log(conditions)

    if (input == conditions) {
        document.getElementById("incorrect").innerHTML = "Merci d'avoir accepté nos conditions de vente."

    } else {
        document.getElementById("incorrect").innerHTML = "Incorrect : " + input;
    }
}