'use strict'

/*

let firstNames = ["super", "spider", "ant", "iron"]
let lastName = "man";

const fullNames = firstNames.map(name => name + lastName)
console.log(fullNames);

 */

// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////// How to Use the Index Argument

let firstNames = ["wonder", "spider", "ant", "iron"]
let male = "-man";
let female = "-woman";

const fullNames = firstNames.map((firstName, index) =>
    (index % 2 === 0) ? firstName + female : firstName + male
)

console.log(fullNames);


 */

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
let fullNames = ["wonderwoman", "spiderman", "antman", "ironman"]

fullNames.map(function(firstName, index) {
    console.log(`${firstName} is at ${index} position`)}
);
 */

// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
/////////////////////////////////////////////////// How to Multiply All Items in the Array by 2

let numbers = [10, 20, 30, 40]
let multiplier = 2;

let products =  numbers.map(num => num * multiplier)

console.log(products);
// [20, 40, 60, 80]

*/

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
//////////////////////////////////////////////////// How to Round to the Nearest Integer

// let rounded = numbers.map(function(number) {
//     return Math.round(number);
// })


let numbers = [3.7, 4.9, 6.2]
let rounded = numbers.map(num => Math.round(num))

console.log(rounded);
// [4, 5, 6]
 */

// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*
//////////////////////////////////////////////////// How to Change Strings to Numbers


let strings = ["10","20","30"]

let numbers = strings.map(function (str) {
    return Number(str);
})

console.log(numbers);
// [10, 20, 30]

 */


// ------------------------------------------------------------------------------------------------------------ NEW LINE


/*

let avengers = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]


let realNames = avengers.map(avenger => avenger.name);
console.log(realNames);

// ["steve rogers", "tony stark", "bruce banner", "peter parker", "tchalla"]


 */


// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*

let avengers = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]

let heroNames = avengers.map(avenger => avenger.heroName);

console.log(heroNames);
// ["captain america", "iron man", "the hulk", "spiderman", "black panther"]

 */

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*

let avengers = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]

let getName = avenger => avenger.name;
// console.log(typeof  getName); // function

let realNames = avengers.map(getName);

console.log(realNames);
// ["steve rogers", "tony stark", "bruce banner", "peter parker", "tchalla"]

 */


// ------------------------------------------------------------------------------------------------------------ NEW LINE
///////////////////////////////////////////////////////// How the Array Argument Works


const oldArray = [33, 20, 10, 5];
const newArray = oldArray.map((currentVal, index, arr) => {
    let nextItem = index + 1 < arr.length ? arr[index + 1] : 0
    return currentVal - nextItem;

});


console.log(newArray);
// [13, 10, 5, 5]




// ------------------------------------------------------------------------------------------------------------ NEW LINE




