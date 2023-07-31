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
let priceGB = '288,97£';
let priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);


// replaceall and RegEx
const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // replaced only first founded not all
console.log(announcement.replaceAll('door', 'GATE')); // replaced all

// using regex
// g - global
console.log(announcement.replace(/door/g, 'gate')); // replaced all


/////////////////////////////////////////////// need review
// const originalString = "John Doe";
// const replacedString = originalString.replace(/(\w+)\s(\w+)/, "$2, $1 \n$1, $2");
// console.log(replacedString); // Output: "Doe, John"


// Booleans
console.log(`\nBooleans`);
const me = 'lasha_demurashvili'
console.log(me.includes('lasha'));



