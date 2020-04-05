function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    image.style.backgroundColor = color;
}

function resizeImage() {
    document.getElementById('image').style.width = "1200px";

}

function positionImage() {
    document.getElementById('image').style.transform = "translate(1500px, 500px)";
}

function resetImage() {
    document.getElementById('image').style.width = "auto";
    document.getElementById('image').style.transform = "translate(0px, 0px)";

}