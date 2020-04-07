function puissance(x, n) {
    if (n == 0) {
        return 1;
    }
    return x * puissance(x, n - 1);
}
console.log(puissance(4, 3));
