function verifierPalindrome(palindrome) {

    let pal = true;
    let i = 0

    for (i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - i - 1]) {
            pal = false;
        }
    }
    if (pal == false) {
        console.log("Le mot " + palindrome + " n'est pas un palidrome !");
    }
    else if (pal = true) {
        console.log("Le mot " + palindrome + " est un palidrome !");
    }
}

verifierPalindrome("kayak");




const suissKnife = str => {
    let isPalindrome = true;
    let longueurStr = str.length;

    for (let i = 0; i < longueurStr; i++) {
        if (str[i] !== str[longueurStr - 1 - i]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};





let str = "bob";
str = str.toLowerCase();
const isPalindrome = str => [...str].reverse().join("") === str;
console.log(isPalindrome(str));



let str = "bob";
const suissKnife = (str) => {
    const n = Math.floor(str.length / 2);
}
console.log(isPalindrome(str));
