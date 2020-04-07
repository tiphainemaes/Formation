function calculSomme(n) {
    if (n == 0) {
        return 0;
    }
    else {
        return n + calculSomme(n - 1);
    }
}

console.log(calculSomme(4));