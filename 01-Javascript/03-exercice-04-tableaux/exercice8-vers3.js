const tab = [-400, 2, -8, 10];

const posTab = tab.filter(i => i > 0);
const negTab = tab.filter(i => i < 0);
const VMEP = posTab.reduce((total, element) => total + element)/posTab.length;
const VMEN = negTab.reduce((total, element) => total + element)/negTab.length;
const NEM = tab.length - posTab.length - negTab.length;

console.log("La valeur moyenne des éléments positifs est de " + VMEP);
console.log("La valeur moyenne des éléments négatifs est de " + VMEN);
console.log("Le nombre d'éléments nuls est de " + nombreNul);