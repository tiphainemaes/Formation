
let fibonacci = [0, 1];

for (let i = fibonacci.length; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);











/*function fibonacci(iterationNumber) {
    let fiboArray = [0, 1];
    for (let i = 0; i < iterationNumber; i++) {
        fiboArray.push(fiboArray[i + 1] + fiboArray[i]);
    }
    return fiboArray;
}

console.log(fibonacci(10));
*/
