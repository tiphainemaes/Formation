
function entierNaturel(n) {
    if (n == 100) {
        return console.log(n);
    }
    console.log(n)
    return entierNaturel(n + 1);
}
entierNaturel(0)


