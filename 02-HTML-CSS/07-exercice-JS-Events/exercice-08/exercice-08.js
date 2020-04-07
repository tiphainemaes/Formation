function horloge() {
    let aujourdhui = new Date();

    let heures = aujourdhui.getHours();
    let minutes = aujourdhui.getMinutes();
    let secondes = aujourdhui.getSeconds();

    minutes = zero(minutes);
    secondes = zero(secondes);


    document.getElementById("horloge").innerHTML = heures + ":" + minutes + ":" + secondes;


    setTimeout("horloge()", 1000);
}

function zero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}