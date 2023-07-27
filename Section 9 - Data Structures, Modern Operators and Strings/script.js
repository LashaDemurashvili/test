'use strict';

// Looping Arrays: The for-of Loop
const myArray = ['lasha', 'demurashvili', 25, 'Dog']
for (let item of myArray) {
    // console.log(item);
}

// entries()
// console.log(...myArray.entries());

// 1 option
// for (let item of myArray.entries()){
//     console.log(`${item[0]+1} - ${item[1]}`);
// }

// 2 option better  using destruction array method ==> [item, element] of array.entries()
for (let [i, el] of myArray.entries()){
    console.log(`${i+1} - ${el}`);
}