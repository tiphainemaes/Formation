let tableau1 = [1,4,5,2,7,6,9];
let tableau2 = [2,4,6,3,4,8,0];

let tableau3 = [];
tableau3.length = 7;

for (var j = 0; j < tableau3.length; j++) {
    tableau3[j] = tableau1[j] + tableau2[j]; 
    console.log(tableau3[j]);
    }

