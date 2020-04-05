function canvas() {
    let canvas = document.getElementById('canvas');
    let rect = canvas.getContext('2d')
    let cercle = canvas.getContext('2d')

    rect.fillStyle = "#000000";
    rect.fillRect(140, 40, 30, 30);

    cercle.beginPath();
    cercle.fillStyle = "rgba(255, 99, 71, 0.7)"
    cercle.arc(35, 65, 15, 0, Math.PI * 2) //cercle.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    cercle.lineWidth = 2;
    cercle.fill();
}
var onload = canvas;

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true)