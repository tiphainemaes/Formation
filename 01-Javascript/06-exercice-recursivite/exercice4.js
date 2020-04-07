function sommeChiffres(n) {
    if (n > 0) {
        return n % 10 + sommeChiffres(Math.trunc(n / 10));
    }
    return 0;
}
console.log(sommeChiffres(34))

