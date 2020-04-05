function rectangle() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d')

    ctx.fillStyle = "#1E90FF";
    ctx.fillRect(20, 20, 150, 100);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 150, 100);
}
var onload = rectangle;