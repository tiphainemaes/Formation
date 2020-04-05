function mouvementDroit() {
    let position;
    let carreau = document.getElementById('carreau');
    position = carreau.getBoundingClientRect();
    console.log(position);

    if (position.y != 70) {
        document.getElementById('carreau').style.transform = "translate(100px, 100px)"
    } else {
        document.getElementById('carreau').style.transform = "translate(100px, 0px)"
    }
}

function mouvementHaut() {
    let position;
    let carreau = document.getElementById('carreau');
    position = carreau.getBoundingClientRect();
    console.log(position);

    if (position.x != 0) {
        document.getElementById('carreau').style.transform = "translate(100px, 0px)"
    } else {
        document.getElementById('carreau').style.transform = "translate(0px, 0px)"
    }
}

function mouvementBas() {
    let position;
    let carreau = document.getElementById('carreau');
    position = carreau.getBoundingClientRect();
    console.log(position);

    if (position.x != 0) {
        document.getElementById('carreau').style.transform = "translate(100px, 100px)"
    } else {
        document.getElementById('carreau').style.transform = "translate(0px, 100px)"
    }
}

function mouvementGauche() {
    let position;
    let carreau = document.getElementById('carreau');
    position = carreau.getBoundingClientRect();
    console.log(position);

    if (position.y != 70) {
        document.getElementById('carreau').style.transform = "translate(0px, 100px)"
    } else {
        document.getElementById('carreau').style.transform = "translate(0px, 0px)"
    }
}