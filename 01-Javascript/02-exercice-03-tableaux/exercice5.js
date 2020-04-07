let tableau1 = [1,4,5,2,7,6,9];
let tableau2 = [2,4,6,3,4,8,0];

let tableau3 = [];
tableau3.length = 7;

for (var j = 0; j < tableau3.length; j++) {
    tableau3[j] = tableau1[j] + tableau2[j]; 
    console.log(tableau3[j]);
    }


    
/*

const tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tab2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tab3 = [];

tab1.map((element, i) => {
    tab3[i] = element + tab2[i];
});
  
console.log(tab3);


*/