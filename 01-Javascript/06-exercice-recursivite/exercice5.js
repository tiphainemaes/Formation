function pgcd(a, b) {
    if (b == 0) {
        return a;
    }
    return pgcd(b, a % b);
}
console.log(pgcd(27, 12));

