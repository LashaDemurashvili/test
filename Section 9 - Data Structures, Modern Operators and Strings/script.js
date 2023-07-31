'use strict';

// string methods
let name = '   laShA';
name = name[0].toUpperCase() + name.slice(1).toLowerCase();

let x, y;
x = ' lasha ';
y = '  LaShA  ';

console.log(x, y);
x = x.trimStart().trimEnd().toLowerCase();
y = y.trimStart().trimEnd().toLowerCase();

console.log(x, y);
console.log(x === y);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);