'use strict';


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.3, 200));


// null or addTax
// we can use >> null << or actually >> function name <<
const addVAT = addTax.bind(null, 0.2);  // just pass first parameter)
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));  // pass second parameter
console.log(addVAT(200));  // pass second parameter


// what's bind actually do
const x = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const y = x(0.2);
console.log(y(100));
console.log(y(200));
