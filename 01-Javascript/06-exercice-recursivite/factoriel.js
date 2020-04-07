function factorial(x) {
    var result = 1;
    for (var i = 1; i <= x; i++){
      result = result * i;
    return result;}
    console.log(result);
  }

factorial(5);




function factoriel(n) {
    if (n == 0)
  {
     return 1;
  }
    return n * factoriel(n-1);
}
console.log(factoriel(3));


