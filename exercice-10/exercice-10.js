var h = 0;
var min = 0;
var sec = 0;
var ms = 0;


function start() {
    var1 = setInterval(mseconde, 1)
    var2 = setInterval(seconde, 1000);
    var3 = setInterval(minute, 60000);
    var4 = setInterval(heure, 3600000)
}

function stop() {
    clearInterval(var1);
    clearInterval(var2);
    clearInterval(var3);
    clearInterval(var4);
}

function reset() {
    h = "0" + 0;
    min = "0" + 0;
    sec = "0" + 0;
    ms = "0" + 0;
    document.getElementById('msec').innerHTML = ms;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('min').innerHTML = min;
    document.getElementById('h').innerHTML = h;
}

function mseconde() {
    if (ms < 9) {
        ms++;
        ms = "0" + ms;
    } else if (ms >= 9 && ms < 99) {
        ms++;
    } else {
        ms = "0" + 0;
    }
    document.getElementById('msec').innerHTML = ms;
}

function seconde() {
    if (sec < 9) {
        sec++;
        sec = "0" + sec;
    } else if (sec >= 9 && sec < 59) {
        sec++;
    } else {
        sec = "0" + 0;
    }
    document.getElementById('sec').innerHTML = sec;
}

function minute() {
    if (min < 9) {
        min++;
        min = "0" + min;
    } else if (min >= 9 && min < 59) {
        min++;
    } else {
        min = "0" + 0;
    }
    document.getElementById('min').innerHTML = min;
}

function heure() {
    if (h < 9) {
        h++;
        h = "0" + h;
    } else if (h >= 9 && h < 99) {
        h++;
    } else {
        h = "0" + 0;
    }
    document.getElementById('h').innerHTML = h;
}