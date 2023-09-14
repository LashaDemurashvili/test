'use strict';

///////////////////////////////////////
// Coding Challenge #3

/*
continue of Coding Challenge #2
just using chaining methods
*/

const calcAverageHumanAge = ages => ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const avg1 = calcAverageHumanAge(data1);
const avg2 = calcAverageHumanAge(data2);
console.log(avg1, avg2);


