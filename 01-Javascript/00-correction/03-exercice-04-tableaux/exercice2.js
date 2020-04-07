let tab1 = ["H", "E", "L", "L", "O"];

console.log(tab1);

function decaler(){
    
    tab2 = [];
    let part1 = tab1.slice(-1);
    let part2 = tab1.slice(0, 4);

    tab2 = tab2.concat(part1, part2);

    console.log(tab2);
}

decaler();